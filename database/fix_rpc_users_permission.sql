-- ============================================
-- RPC fonksiyonlari icin users tablo izinleri
-- Supabase SQL Editor'de calistirin
-- ============================================

-- 1) users tablosu izinleri
GRANT USAGE ON SCHEMA public TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.users TO service_role;

-- 2) Fonksiyonlarin yetkili rol ile calistigindan emin ol
-- Not: imza farkliysa SQL Editor hata verebilir; mevcut imzaya gore duzenleyin.
ALTER FUNCTION public.approve_courier_application(UUID, UUID, UUID) SECURITY DEFINER;
ALTER FUNCTION public.approve_restaurant_application(UUID, UUID, UUID) SECURITY DEFINER;
ALTER FUNCTION public.reject_application(UUID, UUID, TEXT) SECURITY DEFINER;
ALTER FUNCTION public.reopen_application(UUID) SECURITY DEFINER;

-- 3) Fonksiyon execute yetkisi
GRANT EXECUTE ON FUNCTION public.approve_courier_application(UUID, UUID, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.approve_restaurant_application(UUID, UUID, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.reject_application(UUID, UUID, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.reopen_application(UUID) TO service_role;
