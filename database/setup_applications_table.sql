-- ============================================
-- applications tablosu + public schema izinleri
-- Supabase SQL Editor'de çalıştırın
-- ============================================

-- 1) public schema erişim izinleri (yeni Supabase projelerinde sık eksik kalır)
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON SCHEMA public TO postgres, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO postgres, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT ALL ON TABLES TO postgres, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT ALL ON SEQUENCES TO postgres, service_role;

-- 2) applications tablosu
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(20) NOT NULL CHECK (type IN ('kurye', 'restoran')),
  status VARCHAR(20) NOT NULL DEFAULT 'beklemede'
    CHECK (status IN ('beklemede', 'onaylandi', 'reddedildi')),
  full_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  restaurant_id UUID REFERENCES public.restaurants(id),
  approved_at TIMESTAMPTZ,
  approved_by UUID,
  rejected_at TIMESTAMPTZ,
  rejection_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_applications_type ON public.applications(type);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);

-- 3) RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "applications_select_authenticated" ON public.applications;
CREATE POLICY "applications_select_authenticated"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "applications_insert_anon" ON public.applications;
CREATE POLICY "applications_insert_anon"
  ON public.applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4) tablo izinleri
GRANT SELECT, INSERT, UPDATE, DELETE ON public.applications TO service_role;
GRANT SELECT, INSERT ON public.applications TO anon;
GRANT SELECT ON public.applications TO authenticated;
