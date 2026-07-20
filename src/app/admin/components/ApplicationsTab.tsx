/**
 * @file src/app/admin/components/ApplicationsTab.tsx
 * @description Başvuru Yönetimi Sekmesi - Kurye ve Restoran Başvurularını Yönetir
 */
'use client'

import { useState, useEffect } from 'react'
import { 
  getApplications, 
  approveCourierApplication, 
  approveRestaurantApplication,
  rejectApplication,
  reopenApplication 
} from '@/services/applicationService'
import type { Application } from '@/types/application'

interface ApplicationsTabProps {
  type: 'kurye' | 'restoran'
  onSuccess?: (message: string) => void
  onError?: (message: string) => void
}

export function ApplicationsTab({ type, onSuccess, onError }: ApplicationsTabProps) {
  const [applications, setApplications] = useState<Application[]>([])
  const [rejectedApplications, setRejectedApplications] = useState<Application[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showRejected, setShowRejected] = useState(false)
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set())

  const fetchApplications = async () => {
    setIsLoading(true)
    try {
      const [pending, rejected] = await Promise.all([
        getApplications(type, 'beklemede'),
        getApplications(type, 'reddedildi')
      ])
      setApplications(pending)
      setRejectedApplications(rejected)
    } catch (error) {
      console.error('Başvurular yüklenemedi:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchApplications()
  }, [type])

  const handleApprove = async (applicationId: string) => {
    setProcessingIds(prev => new Set(prev).add(applicationId))
    
    try {
      // Admin user ID frontend'de sabit, company_id backend'de otomatik doğrulanır/fallback edilir
      const adminUserId = '00000000-0000-0000-0000-000000000000' // Dummy UUID
      const companyId = typeof window !== 'undefined'
        ? localStorage.getItem('auth_company_id') || undefined
        : undefined

      const result = type === 'kurye'
        ? await approveCourierApplication(applicationId, adminUserId, companyId)
        : await approveRestaurantApplication(applicationId, adminUserId, companyId)

      if (result.success) {
        onSuccess?.(`${type === 'kurye' ? 'Kurye' : 'Restoran'} başvurusu onaylandı!`)
        fetchApplications()
      } else {
        onError?.(result.error || 'Onaylama başarısız')
      }
    } catch (error: any) {
      onError?.(error.message || 'Bir hata oluştu')
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(applicationId)
        return newSet
      })
    }
  }

  const handleReject = async (applicationId: string) => {
    const reason = prompt('Ret nedeni (opsiyonel):')
    if (reason === null) return // Kullanıcı iptal etti

    setProcessingIds(prev => new Set(prev).add(applicationId))
    
    try {
      const adminUserId = '00000000-0000-0000-0000-000000000000' // Dummy UUID
      const result = await rejectApplication(applicationId, adminUserId, reason || undefined)

      if (result.success) {
        onSuccess?.('Başvuru reddedildi')
        fetchApplications()
      } else {
        onError?.(result.error || 'Reddetme başarısız')
      }
    } catch (error: any) {
      onError?.(error.message || 'Bir hata oluştu')
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(applicationId)
        return newSet
      })
    }
  }

  const handleReopen = async (applicationId: string) => {
    setProcessingIds(prev => new Set(prev).add(applicationId))
    
    try {
      const result = await reopenApplication(applicationId)

      if (result.success) {
        onSuccess?.('Başvuru tekrar değerlendirmeye açıldı')
        fetchApplications()
      } else {
        onError?.(result.error || 'Yeniden açma başarısız')
      }
    } catch (error: any) {
      onError?.(error.message || 'Bir hata oluştu')
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(applicationId)
        return newSet
      })
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const displayList = showRejected ? rejectedApplications : applications
  const color = type === 'kurye' ? 'blue' : 'orange'

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-white">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          {type === 'kurye' ? 'Kurye' : 'Restoran'} Başvuruları
        </h2>
        <button
          onClick={() => setShowRejected(!showRejected)}
          className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors border ${
            showRejected
              ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'
              : 'bg-orange-600/90 text-white border-orange-500/40 hover:bg-orange-600'
          }`}
        >
          {showRejected ? 'Bekleyen Başvurular' : 'Reddedilen Başvurular'}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Bekleyen</p>
          <p className="text-white text-2xl font-bold">{applications.length}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Reddedilen</p>
          <p className="text-white text-2xl font-bold">{rejectedApplications.length}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm">Toplam</p>
          <p className="text-white text-2xl font-bold">
            {applications.length + rejectedApplications.length}
          </p>
        </div>
      </div>

      {/* Applications List */}
      {displayList.length === 0 ? (
        <div className="bg-slate-800 p-8 rounded-lg text-center">
          <p className="text-slate-400">
            {showRejected ? 'Reddedilen başvuru yok' : 'Bekleyen başvuru yok'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayList.map((app) => {
            const data = app.full_data as any
            const isProcessing = processingIds.has(app.id)

            return (
              <div
                key={app.id}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {data.firstName} {data.lastName}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {formatDate(app.created_at)}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    app.status === 'beklemede'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {app.status === 'beklemede' ? 'Beklemede' : 'Reddedildi'}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-slate-400 text-sm">E-posta</p>
                    <p className="text-white">{data.email}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Telefon</p>
                    <p className="text-white">{data.phone}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Yaş</p>
                    <p className="text-white">{data.age}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">İkamet</p>
                    <p className="text-white">{data.location}</p>
                  </div>
                  {type === 'kurye' && (
                    <div>
                      <p className="text-slate-400 text-sm">Tecrübe</p>
                      <p className="text-white">{data.experience}</p>
                    </div>
                  )}
                  {type === 'restoran' && (
                    <>
                      <div>
                        <p className="text-slate-400 text-sm">İşletme Adı</p>
                        <p className="text-white">{data.businessName}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-slate-400 text-sm">İşletme Adresi</p>
                        <p className="text-white">{data.businessAddress}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Koordinatlar</p>
                        <p className="text-white">
                          📍 {data.latitude}, {data.longitude}
                        </p>
                      </div>
                    </>
                  )}
                  <div>
                    <p className="text-slate-400 text-sm">Kullanıcı Adı</p>
                    <p className="text-white font-mono">{data.username}</p>
                  </div>
                </div>

                {app.rejection_reason && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">
                      <strong>Ret Nedeni:</strong> {app.rejection_reason}
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  {app.status === 'beklemede' ? (
                    <>
                      <button
                        onClick={() => handleApprove(app.id)}
                        disabled={isProcessing}
                        className={`flex-1 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-700 text-white font-medium rounded-lg transition-colors disabled:cursor-not-allowed`}
                      >
                        {isProcessing ? 'İşleniyor...' : 'Onayla'}
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        disabled={isProcessing}
                        className="flex-1 py-2 bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
                      >
                        {isProcessing ? 'İşleniyor...' : 'Reddet'}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleReopen(app.id)}
                      disabled={isProcessing}
                      className={`flex-1 py-2 bg-${color}-600 hover:bg-${color}-700 disabled:bg-slate-700 text-white font-medium rounded-lg transition-colors disabled:cursor-not-allowed`}
                    >
                      {isProcessing ? 'İşleniyor...' : 'Tekrar Değerlendir'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
