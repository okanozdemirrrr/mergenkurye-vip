-- ============================================
-- Daha once onaylanmis basvurulari couriers/restaurants'a geri yaz
-- Kullan: fix_approval_functions_insert_target_tables.sql sonrasi
-- ============================================

DO $$
DECLARE
  fallback_company_id UUID;
  app RECORD;
  generated_name TEXT;
BEGIN
  SELECT id INTO fallback_company_id
  FROM public.companies
  ORDER BY created_at NULLS LAST, id
  LIMIT 1;

  IF fallback_company_id IS NULL THEN
    RAISE EXCEPTION 'companies tablosunda kayit yok';
  END IF;

  -- Kurye basvurulari
  FOR app IN
    SELECT id, full_data
    FROM public.applications
    WHERE type = 'kurye' AND status = 'onaylandi'
  LOOP
    IF NOT EXISTS (
      SELECT 1
      FROM public.couriers c
      WHERE c.username = app.full_data->>'username'
    ) THEN
      generated_name := trim(
        concat(
          COALESCE(app.full_data->>'firstName', ''),
          ' ',
          COALESCE(app.full_data->>'lastName', '')
        )
      );

      INSERT INTO public.couriers (
        full_name, phone, username, password, is_active, account_status, status, company_id, created_at
      )
      VALUES (
        NULLIF(generated_name, ''),
        app.full_data->>'phone',
        app.full_data->>'username',
        app.full_data->>'password',
        true,
        'active',
        'idle',
        fallback_company_id,
        NOW()
      );
    END IF;
  END LOOP;

  -- Restoran basvurulari
  FOR app IN
    SELECT id, full_data
    FROM public.applications
    WHERE type = 'restoran' AND status = 'onaylandi'
  LOOP
    generated_name := COALESCE(
      NULLIF(app.full_data->>'businessName', ''),
      NULLIF(app.full_data->>'username', ''),
      trim(concat(COALESCE(app.full_data->>'firstName', ''), ' ', COALESCE(app.full_data->>'lastName', '')))
    );

    IF NOT EXISTS (
      SELECT 1
      FROM public.restaurants r
      WHERE r.username = app.full_data->>'username'
         OR r.name = generated_name
    ) THEN
      INSERT INTO public.restaurants (
        name, email, phone, address, latitude, longitude, username, password, company_id, is_active, created_at
      )
      VALUES (
        generated_name,
        app.full_data->>'email',
        app.full_data->>'phone',
        COALESCE(NULLIF(app.full_data->>'businessAddress', ''), app.full_data->>'location'),
        CASE WHEN NULLIF(app.full_data->>'latitude', '') IS NULL THEN NULL ELSE (app.full_data->>'latitude')::DECIMAL END,
        CASE WHEN NULLIF(app.full_data->>'longitude', '') IS NULL THEN NULL ELSE (app.full_data->>'longitude')::DECIMAL END,
        app.full_data->>'username',
        app.full_data->>'password',
        fallback_company_id,
        true,
        NOW()
      );
    END IF;
  END LOOP;
END $$;

-- Kontrol
SELECT 'couriers' AS table_name, count(*) AS total FROM public.couriers
UNION ALL
SELECT 'restaurants' AS table_name, count(*) AS total FROM public.restaurants;
