import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { ApplicationType, CourierApplicationData, RestaurantApplicationData } from '@/types/application'

type CreatePayload = {
  type: ApplicationType
  data: CourierApplicationData | RestaurantApplicationData
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Sunucu Supabase yapılandırması eksik. NEXT_PUBLIC_SUPABASE_URL ve SERVICE_ROLE_KEY gerekli.'
        },
        { status: 500 }
      )
    }

    const body = (await request.json()) as Partial<CreatePayload>
    if (!body.type || !body.data || (body.type !== 'kurye' && body.type !== 'restoran')) {
      return NextResponse.json(
        { success: false, error: 'Geçersiz başvuru verisi' },
        { status: 400 }
      )
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    const { data: application, error } = await supabase
      .from('applications')
      .insert({
        type: body.type,
        status: 'beklemede',
        full_data: body.data
      })
      .select('id')
      .single()

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message || 'Başvuru oluşturulamadı' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Başvurunuz alındı, admin onayı bekleniyor',
      application_id: application.id
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Beklenmeyen hata'
      },
      { status: 500 }
    )
  }
}
