-- ============================================
-- companies tablosuna ornek sirket kaydi ekler
-- Tekrar calistirilabilir (ayni code varsa tekrar eklemez)
-- ============================================

DO $$
DECLARE
  v_id UUID := gen_random_uuid();
  v_code TEXT := 'MERGEN001';
  v_name TEXT := 'Mergen Teknoloji';
  has_id BOOLEAN;
  has_code BOOLEAN;
  has_company_code BOOLEAN;
  has_name BOOLEAN;
  has_company_name BOOLEAN;
  has_logo_url BOOLEAN;
  has_primary_color BOOLEAN;
  has_secondary_color BOOLEAN;
  has_accent_color BOOLEAN;
  has_is_active BOOLEAN;
  has_created_at BOOLEAN;
  has_updated_at BOOLEAN;
  has_existing_code BOOLEAN := false;
  sql_cols TEXT := '';
  sql_vals TEXT := '';
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'companies'
  ) THEN
    RAISE EXCEPTION 'public.companies tablosu bulunamadi';
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'id'
  ) INTO has_id;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'code'
  ) INTO has_code;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'company_code'
  ) INTO has_company_code;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'name'
  ) INTO has_name;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'company_name'
  ) INTO has_company_name;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'logo_url'
  ) INTO has_logo_url;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'primary_color'
  ) INTO has_primary_color;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'secondary_color'
  ) INTO has_secondary_color;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'accent_color'
  ) INTO has_accent_color;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'is_active'
  ) INTO has_is_active;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'created_at'
  ) INTO has_created_at;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'updated_at'
  ) INTO has_updated_at;

  -- code kolonu varsa ayni code ile duplicate eklemeyelim
  IF has_code THEN
    EXECUTE 'SELECT EXISTS (SELECT 1 FROM public.companies WHERE code = $1)'
      INTO has_existing_code
      USING v_code;

    IF has_existing_code THEN
      RAISE NOTICE 'companies.code=% zaten var, insert atlandi', v_code;
      RETURN;
    END IF;
  END IF;

  IF has_company_code THEN
    EXECUTE 'SELECT EXISTS (SELECT 1 FROM public.companies WHERE company_code = $1)'
      INTO has_existing_code
      USING v_code;

    IF has_existing_code THEN
      RAISE NOTICE 'companies.company_code=% zaten var, insert atlandi', v_code;
      RETURN;
    END IF;
  END IF;

  IF has_id THEN
    sql_cols := sql_cols || 'id,';
    sql_vals := sql_vals || quote_literal(v_id::text) || '::uuid,';
  END IF;

  IF has_code THEN
    sql_cols := sql_cols || 'code,';
    sql_vals := sql_vals || quote_literal(v_code) || ',';
  END IF;

  IF has_company_code THEN
    sql_cols := sql_cols || 'company_code,';
    sql_vals := sql_vals || quote_literal(v_code) || ',';
  END IF;

  IF has_name THEN
    sql_cols := sql_cols || 'name,';
    sql_vals := sql_vals || quote_literal(v_name) || ',';
  END IF;

  IF has_company_name THEN
    sql_cols := sql_cols || 'company_name,';
    sql_vals := sql_vals || quote_literal(v_name) || ',';
  END IF;

  IF has_logo_url THEN
    sql_cols := sql_cols || 'logo_url,';
    sql_vals := sql_vals || 'null,';
  END IF;

  IF has_primary_color THEN
    sql_cols := sql_cols || 'primary_color,';
    sql_vals := sql_vals || quote_literal('#f97316') || ',';
  END IF;

  IF has_secondary_color THEN
    sql_cols := sql_cols || 'secondary_color,';
    sql_vals := sql_vals || quote_literal('#ea580c') || ',';
  END IF;

  IF has_accent_color THEN
    sql_cols := sql_cols || 'accent_color,';
    sql_vals := sql_vals || quote_literal('#fb923c') || ',';
  END IF;

  IF has_is_active THEN
    sql_cols := sql_cols || 'is_active,';
    sql_vals := sql_vals || 'true,';
  END IF;

  IF has_created_at THEN
    sql_cols := sql_cols || 'created_at,';
    sql_vals := sql_vals || 'now(),';
  END IF;

  IF has_updated_at THEN
    sql_cols := sql_cols || 'updated_at,';
    sql_vals := sql_vals || 'now(),';
  END IF;

  IF sql_cols = '' THEN
    RAISE EXCEPTION 'companies tablosunda kullanilabilir kolon bulunamadi';
  END IF;

  sql_cols := left(sql_cols, length(sql_cols) - 1);
  sql_vals := left(sql_vals, length(sql_vals) - 1);

  EXECUTE 'INSERT INTO public.companies (' || sql_cols || ') VALUES (' || sql_vals || ')';
  RAISE NOTICE 'Sirket kaydi eklendi. code=%, id=%', v_code, v_id;
END $$;

-- Kontrol:
SELECT * FROM public.companies ORDER BY 1 DESC;
