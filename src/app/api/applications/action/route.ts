import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

type ActionPayload = {
  action: 'approve' | 'reject' | 'reopen'
  application_type?: 'kurye' | 'restoran'
  application_id?: string
  admin_user_id?: string
  company_id_param?: string
  reason?: string | null
}

function getServiceRoleKey(): string | undefined {
  return (
    process.env.SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_JWT
  )
}

function getRpcName(payload: ActionPayload): string | null {
  if (payload.action === 'approve') {
    if (payload.application_type === 'kurye') return 'approve_courier_application'
    if (payload.application_type === 'restoran') return 'approve_restaurant_application'
    return null
  }

  if (payload.action === 'reject') return 'reject_application'
  if (payload.action === 'reopen') return 'reopen_application'
  return null
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
}

async function resolveCompanyId(
  supabase: ReturnType<typeof createClient>,
  requestedCompanyId?: string
): Promise<{ companyId: string | null; error?: string }> {
  if (requestedCompanyId && isUuid(requestedCompanyId)) {
    const { data: existingCompany, error: existingError } = await supabase
      .from('companies')
      .select('id')
      .eq('id', requestedCompanyId)
      .maybeSingle()

    if (!existingError && existingCompany?.id) {
      return { companyId: existingCompany.id }
    }
  }

  const { data: fallbackCompany, error: fallbackError } = await supabase
    .from('companies')
    .select('id')
    .limit(1)
    .maybeSingle()

  if (fallbackError) {
    return { companyId: null, error: fallbackError.message || 'Şirket kaydı okunamadı' }
  }

  if (!fallbackCompany?.id) {
    return {
      companyId: null,
      error: 'Onay için companies tablosunda en az 1 kayıt olmalı. Önce bir şirket kaydı oluşturun.'
    }
  }

  return { companyId: fallbackCompany.id }
}

function mapActionError(message: string): string {
  if (message.includes('permission denied for table users')) {
    return 'Veritabanı izin hatası: users tablosu için yetki eksik. SQL fonksiyonunu SECURITY DEFINER olarak oluşturun ve fonksiyon sahibinin users tablosunda gerekli yetkileri olduğundan emin olun.'
  }
  if (message.includes('permission denied for schema public')) {
    return 'Veritabanı izin hatası: public schema erişimi yok.'
  }
  if (message.includes('users_company_id_fkey')) {
    return 'Geçersiz company_id: users kaydı için companies tablosunda karşılık gelen şirket bulunamadı.'
  }
  return message
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = getServiceRoleKey()

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Sunucu Supabase yapılandırması eksik. NEXT_PUBLIC_SUPABASE_URL ve SERVICE_ROLE_KEY gerekli.'
        },
        { status: 500 }
      )
    }

    const payload = (await request.json()) as ActionPayload
    const rpcName = getRpcName(payload)
    if (!payload.action || !payload.application_id || !rpcName) {
      return NextResponse.json({ success: false, error: 'Geçersiz istek verisi' }, { status: 400 })
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    const args: Record<string, unknown> = { application_id: payload.application_id }

    if (payload.action === 'approve') {
      if (!payload.admin_user_id) {
        return NextResponse.json({ success: false, error: 'Onay için eksik parametre' }, { status: 400 })
      }
      const { companyId, error: companyResolveError } = await resolveCompanyId(supabase, payload.company_id_param)
      if (!companyId) {
        return NextResponse.json(
          { success: false, error: companyResolveError || 'Geçerli şirket bulunamadı' },
          { status: 400 }
        )
      }
      args.admin_user_id = payload.admin_user_id
      args.company_id_param = companyId
    } else if (payload.action === 'reject') {
      if (!payload.admin_user_id) {
        return NextResponse.json({ success: false, error: 'Red için admin bilgisi gerekli' }, { status: 400 })
      }
      args.admin_user_id = payload.admin_user_id
      args.reason = payload.reason ?? null
    }

    const { data, error } = await supabase.rpc(rpcName, args)

    if (error) {
      return NextResponse.json(
        { success: false, error: mapActionError(error.message || 'İşlem başarısız') },
        { status: 500 }
      )
    }

    return NextResponse.json(data ?? { success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Beklenmeyen hata' },
      { status: 500 }
    )
  }
}
