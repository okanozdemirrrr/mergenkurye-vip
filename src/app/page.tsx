'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { login } from '@/services/authService'
import { Preferences } from '@capacitor/preferences'

type LoginType = 'courier' | 'restaurant' | 'admin' | null

const COURIER_STORAGE_KEYS = {
  LOGIN: 'kurye_logged_in',
  COURIER_ID: 'kurye_logged_courier_id',
}
const RESTORAN_STORAGE_KEY = 'restoran_logged_in'
const ADMIN_STORAGE_KEY = 'admin_logged_in'

const ROLE_META = {
  admin: {
    title: 'Yönetim',
    description: 'Operasyon, kurye ve restoran kontrolü',
    accent: 'border-orange-500/40 hover:border-orange-500',
    text: 'text-orange-400',
  },
  restaurant: {
    title: 'Restoran',
    description: 'Sipariş, menü ve raporlama',
    accent: 'border-orange-500/40 hover:border-orange-500',
    text: 'text-orange-400',
  },
  courier: {
    title: 'Kurye',
    description: 'Teslimat ve rota yönetimi',
    accent: 'border-orange-500/40 hover:border-orange-500',
    text: 'text-orange-400',
  },
} as const

export default function LoginPage() {
  const router = useRouter()
  const [isAuthLoading, setIsAuthLoading] = useState(true)
  const [selectedType, setSelectedType] = useState<LoginType>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const checkExistingSession = async () => {
      try {
        const { value: prefKurye } = await Preferences.get({ key: COURIER_STORAGE_KEYS.LOGIN })
        const { value: prefCourierId } = await Preferences.get({ key: COURIER_STORAGE_KEYS.COURIER_ID })

        if (prefKurye === 'true' && prefCourierId) {
          router.replace('/kurye')
          return
        }

        const localKurye = localStorage.getItem(COURIER_STORAGE_KEYS.LOGIN)
        const localCourierId = localStorage.getItem(COURIER_STORAGE_KEYS.COURIER_ID)

        if (localKurye === 'true' && localCourierId) {
          router.replace('/kurye')
          return
        }

        if (localStorage.getItem(RESTORAN_STORAGE_KEY) === 'true') {
          router.replace('/restoran')
          return
        }

        if (localStorage.getItem(ADMIN_STORAGE_KEY) === 'true') {
          router.replace('/admin')
          return
        }
      } catch (error) {
        console.error('[RootPage] Session kontrolü hatası:', error)
        const localKurye = localStorage.getItem(COURIER_STORAGE_KEYS.LOGIN)
        const localCourierId = localStorage.getItem(COURIER_STORAGE_KEYS.COURIER_ID)
        if (localKurye === 'true' && localCourierId) {
          router.replace('/kurye')
          return
        }
      } finally {
        setIsAuthLoading(false)
      }
    }

    checkExistingSession()
  }, [router])

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Alda Gel" className="w-16 h-16 mb-5 opacity-90" />
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-slate-500 text-xs tracking-wide uppercase">Yükleniyor</p>
      </div>
    )
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setIsLoading(true)

    try {
      if (!username || !password || !selectedType) {
        setErrorMessage('Lütfen tüm alanları doldurun')
        setIsLoading(false)
        return
      }

      const response = await login({
        companyCode: 'DEFAULT',
        username,
        password,
        userType: selectedType
      })

      if (response.success && response.user) {
        if (response.user.userType === 'courier') router.push('/kurye')
        else if (response.user.userType === 'restaurant') router.push('/restoran')
        else if (response.user.userType === 'admin') router.push('/admin')
      } else {
        setErrorMessage(response.error || 'Giriş yapılırken bir hata oluştu')
      }
    } catch (error) {
      console.error('Login error:', error)
      setErrorMessage('Giriş yapılırken bir hata oluştu')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    setSelectedType(null)
    setUsername('')
    setPassword('')
    setErrorMessage('')
  }

  if (!selectedType) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-10">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-white tracking-tight mb-1">Alda Gel</h1>
            <p className="text-slate-500 text-sm">Operasyon paneline giriş</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['admin', 'restaurant', 'courier'] as const).map((role) => {
              const meta = ROLE_META[role]
              return (
                <button
                  key={role}
                  id={`btn-${role === 'restaurant' ? 'restoran' : role === 'courier' ? 'kurye' : 'admin'}-select`}
                  onClick={() => setSelectedType(role)}
                  className={`group text-left bg-slate-900 border ${meta.accent} rounded-lg p-5 transition-colors`}
                >
                  <p className="ui-label mb-2">Panel</p>
                  <h2 className="text-lg font-semibold text-white mb-1 tracking-tight">{meta.title}</h2>
                  <p className="text-slate-500 text-sm mb-4">{meta.description}</p>
                  <span className={`inline-flex items-center text-sm font-medium ${meta.text}`}>
                    Devam et
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="text-center mt-10 text-slate-600 text-xs tracking-wide">
            © 2026 Alda Gel
          </div>
        </div>
      </div>
    )
  }

  const meta = ROLE_META[selectedType]

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <button
          onClick={handleBack}
          className="mb-6 flex items-center text-slate-500 hover:text-slate-300 text-sm transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Geri
        </button>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-7">
          <div className="text-center mb-7">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-white tracking-tight mb-1">{meta.title} Girişi</h2>
            <p className="text-slate-500 text-sm">{meta.description}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5 tracking-wide uppercase">Kullanıcı Adı</label>
              <input
                id="input-username"
                type="text"
                placeholder="Kullanıcı adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5 tracking-wide uppercase">Şifre</label>
              <input
                id="input-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm"
                required
              />
            </div>

            {errorMessage && (
              <div className="bg-red-950/40 border border-red-900/60 rounded-md p-3 text-red-300 text-sm">
                {errorMessage}
              </div>
            )}

            <button
              id="btn-login-submit"
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>

            {selectedType !== 'admin' && (
              <div className="text-center pt-1">
                <p className="text-slate-500 text-sm">
                  Hesabınız yok mu?{' '}
                  <Link
                    href={selectedType === 'courier' ? '/register-kurye' : '/register-restoran'}
                    className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    Başvuru yap
                  </Link>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
