-- ============================================
-- Onay fonksiyonlari: kayitlari dogru tablolara yaz
-- Sorun: users tablosuna yazilip couriers/restaurants'ta gorunmeme
-- ============================================

-- Kurye onay fonksiyonu
CREATE OR REPLACE FUNCTION public.approve_courier_application(
  application_id UUID,
  admin_user_id UUID,
  company_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  app_data JSONB;
  resolved_company_id UUID;
  new_courier_id UUID;
  full_name_text TEXT;
BEGIN
  SELECT full_data INTO app_data
  FROM public.applications
  WHERE id = application_id
    AND type = 'kurye'
    AND status = 'beklemede';

  IF app_data IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Başvuru bulunamadı veya zaten işlenmiş'
    );
  END IF;

  -- Gecerli company id bul
  SELECT c.id
  INTO resolved_company_id
  FROM public.companies c
  WHERE c.id = company_id_param
  LIMIT 1;

  IF resolved_company_id IS NULL THEN
    SELECT c.id
    INTO resolved_company_id
    FROM public.companies c
    ORDER BY c.created_at NULLS LAST, c.id
    LIMIT 1;
  END IF;

  IF resolved_company_id IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'companies tablosunda geçerli bir şirket bulunamadı'
    );
  END IF;

  full_name_text := trim(
    concat(
      COALESCE(app_data->>'firstName', ''),
      ' ',
      COALESCE(app_data->>'lastName', '')
    )
  );

  INSERT INTO public.couriers (
    full_name,
    phone,
    username,
    password,
    is_active,
    account_status,
    status,
    company_id,
    created_at
  )
  VALUES (
    NULLIF(full_name_text, ''),
    app_data->>'phone',
    app_data->>'username',
    app_data->>'password',
    true,
    'active',
    'idle',
    resolved_company_id,
    NOW()
  )
  RETURNING id INTO new_courier_id;

  UPDATE public.applications
  SET
    status = 'onaylandi',
    approved_at = NOW(),
    approved_by = admin_user_id
  WHERE id = application_id;

  RETURN json_build_object(
    'success', true,
    'message', 'Kurye başvurusu onaylandı',
    'courier_id', new_courier_id
  );
EXCEPTION
  WHEN unique_violation THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Aynı kullanıcı adıyla kurye zaten mevcut'
    );
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'error', SQLERRM
    );
END;
$$;

-- Restoran onay fonksiyonu
CREATE OR REPLACE FUNCTION public.approve_restaurant_application(
  application_id UUID,
  admin_user_id UUID,
  company_id_param UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  app_data JSONB;
  resolved_company_id UUID;
  new_restaurant_id UUID;
  restaurant_name TEXT;
BEGIN
  SELECT full_data INTO app_data
  FROM public.applications
  WHERE id = application_id
    AND type = 'restoran'
    AND status = 'beklemede';

  IF app_data IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Başvuru bulunamadı veya zaten işlenmiş'
    );
  END IF;

  -- Gecerli company id bul
  SELECT c.id
  INTO resolved_company_id
  FROM public.companies c
  WHERE c.id = company_id_param
  LIMIT 1;

  IF resolved_company_id IS NULL THEN
    SELECT c.id
    INTO resolved_company_id
    FROM public.companies c
    ORDER BY c.created_at NULLS LAST, c.id
    LIMIT 1;
  END IF;

  IF resolved_company_id IS NULL THEN
    RETURN json_build_object(
      'success', false,
      'error', 'companies tablosunda geçerli bir şirket bulunamadı'
    );
  END IF;

  -- Formda businessName bos olabiliyor, bu durumda username'i restoran adi yap
  restaurant_name := COALESCE(
    NULLIF(app_data->>'businessName', ''),
    NULLIF(app_data->>'username', ''),
    trim(concat(COALESCE(app_data->>'firstName', ''), ' ', COALESCE(app_data->>'lastName', '')))
  );

  INSERT INTO public.restaurants (
    name,
    email,
    phone,
    address,
    latitude,
    longitude,
    username,
    password,
    company_id,
    is_active,
    created_at
  )
  VALUES (
    restaurant_name,
    app_data->>'email',
    app_data->>'phone',
    COALESCE(NULLIF(app_data->>'businessAddress', ''), app_data->>'location'),
    CASE WHEN NULLIF(app_data->>'latitude', '') IS NULL THEN NULL ELSE (app_data->>'latitude')::DECIMAL END,
    CASE WHEN NULLIF(app_data->>'longitude', '') IS NULL THEN NULL ELSE (app_data->>'longitude')::DECIMAL END,
    app_data->>'username',
    app_data->>'password',
    resolved_company_id,
    true,
    NOW()
  )
  RETURNING id INTO new_restaurant_id;

  UPDATE public.applications
  SET
    status = 'onaylandi',
    approved_at = NOW(),
    approved_by = admin_user_id,
    restaurant_id = new_restaurant_id
  WHERE id = application_id;

  RETURN json_build_object(
    'success', true,
    'message', 'Restoran başvurusu onaylandı',
    'restaurant_id', new_restaurant_id
  );
EXCEPTION
  WHEN unique_violation THEN
    RETURN json_build_object(
      'success', false,
      'error', 'Aynı kullanıcı adı/restoran adı zaten mevcut'
    );
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'error', SQLERRM
    );
END;
$$;

GRANT EXECUTE ON FUNCTION public.approve_courier_application(UUID, UUID, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.approve_restaurant_application(UUID, UUID, UUID) TO service_role;
