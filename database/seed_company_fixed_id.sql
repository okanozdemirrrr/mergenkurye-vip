-- ============================================
-- Canli ortamdaki eski sabit company_id icin hizli fix
-- ID: 81b7cb2e-701c-4b54-949a-209f86eaa099
-- ============================================

DO $$
DECLARE
  v_id UUID := '81b7cb2e-701c-4b54-949a-209f86eaa099';
  v_code TEXT := 'MERGEN001';
  v_name TEXT := 'Mergen Teknoloji';
  has_company_code BOOLEAN;
  has_company_name BOOLEAN;
  has_code BOOLEAN;
  has_name BOOLEAN;
  has_logo_url BOOLEAN;
  has_primary_color BOOLEAN;
  has_secondary_color BOOLEAN;
  has_accent_color BOOLEAN;
  has_is_active BOOLEAN;
  has_created_at BOOLEAN;
  has_updated_at BOOLEAN;
  company_code_exists BOOLEAN := false;
  sql_cols TEXT := 'id,';
  sql_vals TEXT := quote_literal(v_id::text) || '::uuid,';
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = 'companies'
  ) THEN
    RAISE EXCEPTION 'public.companies tablosu bulunamadi';
  END IF;

  -- Zaten varsa tekrar ekleme
  IF EXISTS (SELECT 1 FROM public.companies WHERE id = v_id) THEN
    RAISE NOTICE 'companies kaydi zaten var. id=%', v_id;
    RETURN;
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'company_code'
  ) INTO has_company_code;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'company_name'
  ) INTO has_company_name;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'code'
  ) INTO has_code;

  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'companies' AND column_name = 'name'
  ) INTO has_name;

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

  -- Kod/ad kolonlarindan uygun olani doldur
  IF has_company_code THEN
    EXECUTE 'SELECT EXISTS (SELECT 1 FROM public.companies WHERE company_code = $1)'
      INTO company_code_exists
      USING v_code;
    IF company_code_exists THEN
      v_code := v_code || '_LEGACY';
    END IF;

    sql_cols := sql_cols || 'company_code,';
    sql_vals := sql_vals || quote_literal(v_code) || ',';
  ELSIF has_code THEN
    EXECUTE 'SELECT EXISTS (SELECT 1 FROM public.companies WHERE code = $1)'
      INTO company_code_exists
      USING v_code;
    IF company_code_exists THEN
      v_code := v_code || '_LEGACY';
    END IF;

    sql_cols := sql_cols || 'code,';
    sql_vals := sql_vals || quote_literal(v_code) || ',';
  ELSE
    RAISE EXCEPTION 'companies tablosunda code/company_code kolonu bulunamadi';
  END IF;

  IF has_company_name THEN
    sql_cols := sql_cols || 'company_name,';
    sql_vals := sql_vals || quote_literal(v_name) || ',';
  ELSIF has_name THEN
    sql_cols := sql_cols || 'name,';
    sql_vals := sql_vals || quote_literal(v_name) || ',';
  ELSE
    RAISE EXCEPTION 'companies tablosunda name/company_name kolonu bulunamadi';
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

  sql_cols := left(sql_cols, length(sql_cols) - 1);
  sql_vals := left(sql_vals, length(sql_vals) - 1);

  EXECUTE 'INSERT INTO public.companies (' || sql_cols || ') VALUES (' || sql_vals || ')';
  RAISE NOTICE 'companies kaydi eklendi. id=%', v_id;
  RETURN;

  RAISE EXCEPTION 'companies kolon yapisi beklenenden farkli. Lutfen tablo kolonlarini paylasin.';
END $$;

SELECT id, * FROM public.companies WHERE id = '81b7cb2e-701c-4b54-949a-209f86eaa099';
