/**
 * @file src/app/admin/layout.tsx
 * @description Admin Panel Layout - Sidebar ve Auth kontrolü
 */
'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { App } from '@capacitor/app'
import { supabase } from '../lib/supabase'
import { AdminDataProvider, useAdminData } from './AdminDataProvider'
import { AdminModals } from './AdminModals'
import { NotificationProvider } from '@/contexts/NotificationContext'
import { useDesignMode, DESIGN_MODE_STORAGE_KEY } from '@/contexts/DesignModeContext'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [showMenu, setShowMenu] = useState(false)
  const [showCourierSubmenu, setShowCourierSubmenu] = useState(false)
  const [showRestaurantSubmenu, setShowRestaurantSubmenu] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (pathname?.startsWith('/admin/kuryeler')) {
      setShowCourierSubmenu(true)
    }
    if (pathname?.startsWith('/admin/restoranlar')) {
      setShowRestaurantSubmenu(true)
    }
  }, [pathname])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Android Back Button Handler
  useEffect(() => {
    if (typeof window === 'undefined' || !isMounted) return

    let backButtonListener: any

    const setupBackButton = async () => {
      try {
        backButtonListener = await App.addListener('backButton', ({ canGoBack }) => {
          if (!canGoBack) {
            App.minimizeApp()
          } else {
            window.history.back()
          }
        })
      } catch (error) {
        console.log('Back button listener eklenemedi:', error)
      }
    }

    setupBackButton()

    return () => {
      if (backButtonListener) {
        backButtonListener.remove()
      }
    }
  }, [isMounted])

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (typeof window === 'undefined') return
      if (!isMounted) return

      setIsCheckingAuth(true)

      try {
        // KATİ ROTA GÜVENLİĞİ: Sadece admin olarak giriş yapıldıysa içeri al
        const adminLoggedIn = localStorage.getItem('admin_logged_in')
        
        if (adminLoggedIn === 'true') {
          setIsLoggedIn(true)
        } else {
          // Admin değilse veya session yoksa içeri alma, bekleme
          setIsLoggedIn(false)
          // Güvenlik amacıyla izinsiz girişte direkt kök dizine fırlat (isteğe bağlı ama kullanıcı "anında / at" dedi)
          if (pathname !== '/admin' && !pathname.startsWith('/admin')) {
             window.location.href = '/'
          }
        }
      } catch (error) {
        console.error('Auth kontrolü hatası:', error)
        setIsLoggedIn(false)
        window.location.href = '/'
      } finally {
        setIsCheckingAuth(false)
      }
    }

    checkAuthAndRedirect()
  }, [isMounted])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const adminUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin'
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'

    if (loginForm.username === adminUser && loginForm.password === adminPass) {
      localStorage.setItem('admin_logged_in', 'true')
      setIsLoggedIn(true)
      setSuccessMessage('Giriş başarılı!')
      setTimeout(() => setSuccessMessage(''), 2000)
    } else {
      setErrorMessage('Kullanıcı adı veya şifre hatalı!')
      setTimeout(() => setErrorMessage(''), 3000)
    }
  }

  const isActive = (path: string) => pathname === path

  if (!isMounted || isCheckingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-slate-400 text-sm tracking-wide uppercase">Yükleniyor</div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-slate-900 p-7 rounded-lg border border-slate-800 w-full max-w-md">
          <div className="text-center mb-7">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-3" />
            <h1 className="text-xl font-semibold text-white tracking-tight mb-1">Yönetim Girişi</h1>
            <p className="text-slate-500 text-sm">Operasyon paneli</p>
          </div>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            className="w-full p-2.5 mb-3 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm"
            value={loginForm.username}
            onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Şifre"
            className="w-full p-2.5 mb-4 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm"
            value={loginForm.password}
            onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
          />
          <button className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors">
            Giriş Yap
          </button>
          {errorMessage && <p className="text-red-400 text-sm mt-3 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-400 text-sm mt-3 text-center">{successMessage}</p>}
        </form>
      </div>
    )
  }

  const navClass = (active: boolean) =>
    `block w-full text-left px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors ${
      active
        ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
        : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'
    }`

  const subNavClass = (active: boolean) =>
    `block w-full text-left px-3.5 py-2 rounded-md text-sm transition-colors ${
      active
        ? 'bg-orange-500/10 text-orange-300'
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`

  return (
    <div className="min-h-screen bg-slate-950">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-4 left-4 z-50 bg-slate-900 text-slate-200 p-2.5 rounded-md border border-slate-800 shadow-md hover:bg-slate-800 transition-colors"
        aria-label="Menü"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {showMenu && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setShowMenu(false)} />
          <div className="relative bg-slate-900 w-72 h-full overflow-y-auto p-5 border-r border-slate-800 admin-scrollbar">
            <div className="mb-7 text-center border-b border-slate-800 pb-5">
              <img src="/logo.png" alt="Logo" className="w-14 h-14 mx-auto mb-2" />
              <h2 className="text-sm font-semibold text-white tracking-tight">Yönetim Paneli</h2>
              <p className="text-[11px] text-slate-500 mt-0.5 tracking-wide uppercase">Operasyon</p>
            </div>

            <nav className="space-y-1">
              <Link href="/admin" onClick={() => setShowMenu(false)} className={navClass(isActive('/admin'))}>
                Canlı Takip
              </Link>

              <Link href="/admin/gecmis" onClick={() => setShowMenu(false)} className={navClass(isActive('/admin/gecmis'))}>
                Geçmiş Siparişler
              </Link>

              <Link href="/admin/istatistikler" onClick={() => setShowMenu(false)} className={navClass(isActive('/admin/istatistikler'))}>
                Genel İstatistikler
              </Link>

              <div>
                <button
                  onClick={() => setShowCourierSubmenu(!showCourierSubmenu)}
                  className={navClass(!!pathname?.startsWith('/admin/kuryeler'))}
                >
                  <span className="flex items-center justify-between">
                    Kuryeler
                    <span className="text-[10px] text-slate-500">{showCourierSubmenu ? '▾' : '▸'}</span>
                  </span>
                </button>

                {showCourierSubmenu && (
                  <div className="ml-2 mt-1 space-y-0.5 border-l border-slate-800 pl-2">
                    <Link href="/admin/kuryeler/hesaplar" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/kuryeler/hesaplar'))}>
                      Hesaplar
                    </Link>
                    <Link href="/admin/kuryeler/mutabakatlar" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/kuryeler/mutabakatlar'))}>
                      Mutabakatlar
                    </Link>
                    <Link href="/admin/kuryeler/performans" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/kuryeler/performans'))}>
                      Performans
                    </Link>
                    <Link href="/admin/kuryeler/kazanclar" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/kuryeler/kazanclar'))}>
                      Kazançlar
                    </Link>
                    <Link href="/admin/kuryeler/basvurular" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/kuryeler/basvurular'))}>
                      Başvurular
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setShowRestaurantSubmenu(!showRestaurantSubmenu)}
                  className={navClass(!!pathname?.startsWith('/admin/restoranlar'))}
                >
                  <span className="flex items-center justify-between">
                    Restoranlar
                    <span className="text-[10px] text-slate-500">{showRestaurantSubmenu ? '▾' : '▸'}</span>
                  </span>
                </button>

                {showRestaurantSubmenu && (
                  <div className="ml-2 mt-1 space-y-0.5 border-l border-slate-800 pl-2">
                    <Link href="/admin/restoranlar/liste" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/restoranlar/liste'))}>
                      Liste
                    </Link>
                    <Link href="/admin/restoranlar/detaylar" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/restoranlar/detaylar'))}>
                      Sipariş Detayları
                    </Link>
                    <Link href="/admin/restoranlar/borc" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/restoranlar/borc'))}>
                      Borçlar
                    </Link>
                    <Link href="/admin/restoranlar/odemeler" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/restoranlar/odemeler'))}>
                      Ödemeler
                    </Link>
                    <Link href="/admin/restoranlar/basvurular" onClick={() => setShowMenu(false)} className={subNavClass(isActive('/admin/restoranlar/basvurular'))}>
                      Başvurular
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            <DesignModeToggle />

            <button
              onClick={async () => {
                try {
                  await supabase.auth.signOut()
                } catch (error) {
                  console.error('SignOut hatası:', error)
                }
                const savedDesign = localStorage.getItem(DESIGN_MODE_STORAGE_KEY)
                localStorage.clear()
                sessionStorage.clear()
                if (savedDesign === 'classic' || savedDesign === 'pro') {
                  localStorage.setItem(DESIGN_MODE_STORAGE_KEY, savedDesign)
                }
                window.location.href = '/'
              }}
              className="w-full mt-3 bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-300 px-4 py-2.5 rounded-md text-sm font-medium border border-slate-700 hover:border-red-900/50 transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      )}

      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <NotificationProvider>
            <AdminDataProvider>
              <AdminMessages />
              <AdminModals />
              {children}
            </AdminDataProvider>
          </NotificationProvider>
        </div>
      </div>
    </div>
  )
}

function DesignModeToggle() {
  const { mode, setMode } = useDesignMode()

  return (
    <div className="mt-8 p-3 rounded-md border border-slate-800 bg-slate-950/60">
      <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-2 font-semibold">Tasarım Modu</p>
      <div className="grid grid-cols-2 gap-1.5">
        <button
          type="button"
          onClick={() => setMode('pro')}
          className={`px-2.5 py-2 rounded-md text-xs font-medium transition-colors border ${
            mode === 'pro'
              ? 'bg-orange-500/15 text-orange-300 border-orange-500/40'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
        >
          Pro
        </button>
        <button
          type="button"
          onClick={() => setMode('classic')}
          className={`px-2.5 py-2 rounded-md text-xs font-medium transition-colors border ${
            mode === 'classic'
              ? 'bg-orange-500/15 text-orange-300 border-orange-500/40'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
        >
          Klasik
        </button>
      </div>
      <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
        {mode === 'pro' ? 'Kurumsal, sade arayüz' : 'Daha yuvarlak, eski görünüm'}
      </p>
    </div>
  )
}

function AdminMessages() {
  const { successMessage, errorMessage } = useAdminData()
  
  return (
    <>
      {successMessage && (
        <div className="mb-4 p-3 bg-green-950/40 border border-green-900/50 rounded-md text-green-300 text-sm">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-950/40 border border-red-900/50 rounded-md text-red-300 text-sm">
          {errorMessage}
        </div>
      )}
    </>
  )
}
