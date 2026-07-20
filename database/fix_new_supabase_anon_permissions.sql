-- ============================================
-- Yeni Supabase projesi: anon/authenticated izinleri
-- Hata: permission denied for table couriers/restaurants/packages
-- Supabase SQL Editor'de bir kez calistirin
-- ============================================

-- 1) Schema izinleri
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON SCHEMA public TO postgres, service_role;

-- 2) Mevcut tablolara temel grant (RLS policy ile birlikte calisir)
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO anon, authenticated, service_role;

-- 3) Kritik tablolar icin RLS + acik policy
DO $$
DECLARE
  tbl TEXT;
  tables TEXT[] := ARRAY[
    'couriers',
    'restaurants',
    'packages',
    'applications',
    'companies',
    'courier_settlements',
    'order_logs',
    'market_products',
    'customers',
    'reviews',
    'notifications',
    'categories',
    'products',
    'product_option_groups',
    'product_options',
    'cart_items',
    'restaurant_payment_transactions',
    'restaurant_debts'
  ];
BEGIN
  FOREACH tbl IN ARRAY tables
  LOOP
    IF EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = tbl
    ) THEN
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', tbl);

      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', tbl || '_select_all', tbl);
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', tbl || '_insert_all', tbl);
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', tbl || '_update_all', tbl);
      EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', tbl || '_delete_all', tbl);

      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR SELECT TO anon, authenticated USING (true)',
        tbl || '_select_all', tbl
      );
      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR INSERT TO anon, authenticated WITH CHECK (true)',
        tbl || '_insert_all', tbl
      );
      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true)',
        tbl || '_update_all', tbl
      );
      EXECUTE format(
        'CREATE POLICY %I ON public.%I FOR DELETE TO anon, authenticated USING (true)',
        tbl || '_delete_all', tbl
      );

      RAISE NOTICE 'RLS policy olusturuldu: %', tbl;
    ELSE
      RAISE NOTICE 'Tablo yok, atlandi: %', tbl;
    END IF;
  END LOOP;
END $$;

-- 4) Realtime (varsa) - admin canli takip icin
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    BEGIN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.packages;
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
    BEGIN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.couriers;
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
    BEGIN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.restaurants;
    EXCEPTION WHEN duplicate_object THEN NULL;
    END;
  END IF;
END $$;

-- 5) Kontrol
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('couriers', 'restaurants', 'packages', 'applications', 'companies')
ORDER BY tablename;
