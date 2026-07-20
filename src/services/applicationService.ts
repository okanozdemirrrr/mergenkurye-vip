import { supabase } from '@/app/lib/supabase'
import type {
  Application,
  ApplicationType,
  ApplicationStatus,
  CourierApplicationData,
  RestaurantApplicationData,
  ApplicationResponse,
  ApprovalResponse
} from '@/types/application'

async function callApplicationAction<T>(payload: Record<string, unknown>): Promise<T> {
  const response = await fetch('/api/applications/action', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const result = await response.json()
  if (!response.ok || !result.success) {
    throw new Error(result.error || 'İşlem gerçekleştirilemedi')
  }

  return result as T
}

/**
 * Yeni başvuru oluştur
 */
export async function createApplication(
  type: ApplicationType,
  data: CourierApplicationData | RestaurantApplicationData
): Promise<ApplicationResponse> {
  try {
    const response = await fetch('/api/applications/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data })
    })

    const result = await response.json()
    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Başvuru oluşturulamadı')
    }

    return {
      success: true,
      message: result.message || 'Başvurunuz alındı, admin onayı bekleniyor',
      application_id: result.application_id
    }
  } catch (error: any) {
    console.error('Başvuru oluşturma hatası:', error)
    return {
      success: false,
      error: error.message || 'Başvuru oluşturulamadı'
    }
  }
}

/**
 * Başvuruları listele
 */
export async function getApplications(
  type?: ApplicationType,
  status?: ApplicationStatus
): Promise<Application[]> {
  try {
    let query = supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (type) {
      query = query.eq('type', type)
    }

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error } = await query

    if (error) throw error

    return data || []
  } catch (error: any) {
    console.error('Başvuru listesi hatası:', error)
    return []
  }
}

/**
 * Kurye başvurusunu onayla
 */
export async function approveCourierApplication(
  applicationId: string,
  adminUserId: string,
  companyId?: string
): Promise<ApprovalResponse> {
  try {
    return await callApplicationAction<ApprovalResponse>({
      action: 'approve',
      application_type: 'kurye',
      application_id: applicationId,
      admin_user_id: adminUserId,
      company_id_param: companyId
    })
  } catch (error: any) {
    console.error('Kurye onaylama hatası:', error)
    return {
      success: false,
      error: error.message || 'Başvuru onaylanamadı'
    }
  }
}

/**
 * Restoran başvurusunu onayla
 */
export async function approveRestaurantApplication(
  applicationId: string,
  adminUserId: string,
  companyId?: string
): Promise<ApprovalResponse> {
  try {
    return await callApplicationAction<ApprovalResponse>({
      action: 'approve',
      application_type: 'restoran',
      application_id: applicationId,
      admin_user_id: adminUserId,
      company_id_param: companyId
    })
  } catch (error: any) {
    console.error('Restoran onaylama hatası:', error)
    return {
      success: false,
      error: error.message || 'Başvuru onaylanamadı'
    }
  }
}

/**
 * Başvuruyu reddet
 */
export async function rejectApplication(
  applicationId: string,
  adminUserId: string,
  reason?: string
): Promise<ApplicationResponse> {
  try {
    return await callApplicationAction<ApplicationResponse>({
      action: 'reject',
      application_id: applicationId,
      admin_user_id: adminUserId,
      reason: reason || null
    })
  } catch (error: any) {
    console.error('Başvuru reddetme hatası:', error)
    return {
      success: false,
      error: error.message || 'Başvuru reddedilemedi'
    }
  }
}

/**
 * Reddedilen başvuruyu tekrar değerlendirmeye aç
 */
export async function reopenApplication(
  applicationId: string
): Promise<ApplicationResponse> {
  try {
    return await callApplicationAction<ApplicationResponse>({
      action: 'reopen',
      application_id: applicationId
    })
  } catch (error: any) {
    console.error('Başvuru yeniden açma hatası:', error)
    return {
      success: false,
      error: error.message || 'Başvuru yeniden açılamadı'
    }
  }
}

/**
 * Tek bir başvuruyu getir
 */
export async function getApplication(applicationId: string): Promise<Application | null> {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .eq('id', applicationId)
      .single()

    if (error) throw error

    return data
  } catch (error: any) {
    console.error('Başvuru getirme hatası:', error)
    return null
  }
}
