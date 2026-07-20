'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type DesignMode = 'pro' | 'classic'

const STORAGE_KEY = 'design_mode'

type DesignModeContextValue = {
  mode: DesignMode
  setMode: (mode: DesignMode) => void
  toggleMode: () => void
  isClassic: boolean
  isPro: boolean
}

const DesignModeContext = createContext<DesignModeContextValue | undefined>(undefined)

function applyDesignMode(mode: DesignMode) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-design-mode', mode)
}

function readStoredMode(): DesignMode {
  if (typeof window === 'undefined') return 'pro'
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'classic' ? 'classic' : 'pro'
}

export function DesignModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<DesignMode>('pro')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const initial = readStoredMode()
    setModeState(initial)
    applyDesignMode(initial)
    setReady(true)
  }, [])

  const setMode = useCallback((next: DesignMode) => {
    setModeState(next)
    applyDesignMode(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleMode = useCallback(() => {
    setMode(mode === 'pro' ? 'classic' : 'pro')
  }, [mode, setMode])

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode,
      isClassic: mode === 'classic',
      isPro: mode === 'pro',
    }),
    [mode, setMode, toggleMode]
  )

  // Flash önlemek için ilk paint'te de attribute set edilmiş olur (layout script)
  if (!ready && typeof window === 'undefined') {
    return children
  }

  return <DesignModeContext.Provider value={value}>{children}</DesignModeContext.Provider>
}

export function useDesignMode() {
  const ctx = useContext(DesignModeContext)
  if (!ctx) {
    throw new Error('useDesignMode must be used within DesignModeProvider')
  }
  return ctx
}

/** localStorage.clear sonrası tasarım tercihini geri yazar */
export function preserveDesignModeDuringClear(clearFn: () => void) {
  const saved = localStorage.getItem(STORAGE_KEY)
  clearFn()
  if (saved === 'classic' || saved === 'pro') {
    localStorage.setItem(STORAGE_KEY, saved)
    applyDesignMode(saved)
  }
}

export { STORAGE_KEY as DESIGN_MODE_STORAGE_KEY }
