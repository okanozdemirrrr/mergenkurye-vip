(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
// Build sırasında env variables kontrolü - ASLA HATA VERME!
const supabaseUrl = ("TURBOPACK compile-time value", "https://gskjyujftydpejhrvubb.supabase.co") || 'https://placeholder.supabase.co';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_k14C9Jm7FvZ5MEhZW4j1zA_xlV69mOT") || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';
// Sadece client-side'da uyarı ver
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
        storageKey: 'supabase.auth.token'
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/AdminDataProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDataProvider",
    ()=>AdminDataProvider,
    "useAdminData",
    ()=>useAdminData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/AdminDataProvider.tsx
 * @description Admin Panel için merkezi veri yönetimi
 * Tüm admin sayfaları bu provider'dan veri alır
 */ 'use client';
;
;
const AdminDataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AdminDataProvider({ children }) {
    _s();
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deliveredPackages, setDeliveredPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [couriers, setCouriers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [restaurants, setRestaurants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [todayDeliveredCount, setTodayDeliveredCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCourierId, setSelectedCourierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRestaurantId, setSelectedRestaurantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchPackages = async ()=>{
        try {
            // ⚡ EGRESS OPTİMİZASYONU: Sadece gerekli kolonlar + limit
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id, order_number, status, amount, payment_method, customer_name, customer_phone, delivery_address, content, platform, created_at, getting_ready_at, ready_at, assigned_at, picked_up_at, delivered_at, courier_id, restaurant_id, restaurants(id, name, phone)').in('status', [
                'new_order',
                'getting_ready',
                'ready',
                'assigned',
                'picking_up',
                'on_the_way'
            ]).order('created_at', {
                ascending: false
            }).limit(500) // ⚡ Maksimum 500 aktif sipariş
            ;
            if (error) throw error;
            console.log('📦 Admin Panel - Aktif siparişler:', {
                total: data?.length || 0,
                byStatus: {
                    new_order: data?.filter((p)=>p.status === 'new_order').length || 0,
                    getting_ready: data?.filter((p)=>p.status === 'getting_ready').length || 0,
                    ready: data?.filter((p)=>p.status === 'ready').length || 0,
                    assigned: data?.filter((p)=>p.status === 'assigned').length || 0,
                    picking_up: data?.filter((p)=>p.status === 'picking_up').length || 0,
                    on_the_way: data?.filter((p)=>p.status === 'on_the_way').length || 0
                }
            });
            const transformedData = (data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: Array.isArray(pkg.restaurants) && pkg.restaurants.length > 0 ? pkg.restaurants[0] : pkg.restaurants || null,
                    restaurants: undefined
                }));
            setPackages(transformedData);
        } catch (error) {
            console.error('Siparişler yüklenirken hata:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const fetchDeliveredPackages = async ()=>{
        try {
            // ⚡ EGRESS OPTİMİZASYONU: Sadece son 7 günün delivered/cancelled paketleri
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id, order_number, status, amount, payment_method, customer_name, customer_phone, delivery_address, content, created_at, getting_ready_at, ready_at, assigned_at, picked_up_at, delivered_at, cancelled_at, courier_id, restaurant_id, applied_price, delivered_by_courier_id, restaurants(id, name), couriers!packages_courier_id_fkey(id, full_name)').in('status', [
                'delivered',
                'cancelled'
            ]).gte('created_at', sevenDaysAgo.toISOString()) // ⚡ Son 7 gün
            .order('created_at', {
                ascending: false
            }).limit(1000) // ⚡ Maksimum 1000 kayıt
            ;
            if (error) throw error;
            console.log('📦 AdminDataProvider - Teslim edilmiş paketler:', {
                count: data?.length || 0,
                sample: data?.slice(0, 3).map((p)=>({
                        id: p.id,
                        status: p.status,
                        amount: p.amount,
                        payment_method: p.payment_method,
                        delivered_at: p.delivered_at,
                        courier_id: p.courier_id,
                        applied_price: p.applied_price
                    }))
            });
            const transformedData = (data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: pkg.restaurants,
                    courier_name: pkg.couriers?.full_name,
                    restaurants: undefined,
                    couriers: undefined
                }));
            transformedData.sort((a, b)=>{
                const dateA = a.status === 'cancelled' && a.cancelled_at ? new Date(a.cancelled_at).getTime() : a.delivered_at ? new Date(a.delivered_at).getTime() : 0;
                const dateB = b.status === 'cancelled' && b.cancelled_at ? new Date(b.cancelled_at).getTime() : b.delivered_at ? new Date(b.delivered_at).getTime() : 0;
                return dateB - dateA;
            });
            console.log('📦 AdminDataProvider - Transform sonrası:', {
                count: transformedData.length,
                deliveredCount: transformedData.filter((p)=>p.status === 'delivered').length
            });
            setDeliveredPackages(transformedData);
        } catch (error) {
            console.error('Geçmiş siparişler yüklenirken hata:', error);
        }
    };
    const fetchCouriers = async ()=>{
        try {
            // ⚡ EGRESS OPTİMİZASYONU: Sadece gerekli courier kolonları (last_location dahil)
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').select('id, username, full_name, is_active, package_rate, payment_type, account_status, last_location').order('full_name', {
                ascending: true
            });
            if (error) throw error;
            // BUSINESS DAY LOGIC: İş günü sabah 05:00'da başlar
            const now = new Date();
            const currentHour = now.getHours();
            const todayStart = new Date(now);
            if (currentHour < 5) {
                // Gece yarısından sonra, dün sabah 05:00
                todayStart.setDate(todayStart.getDate() - 1);
            }
            todayStart.setHours(5, 0, 0, 0);
            console.log('📅 Admin Panel - Business Day Start:', todayStart.toISOString());
            // Her kurye için borç ve teslimat bilgilerini çek
            const couriersWithData = await Promise.all((data || []).map(async (courier)=>{
                // Legacy courier_debts devre dışı. Tek kaynak ledger.
                const totalDebt = 0;
                // Bugün teslim edilen paketleri çek (delivered + ücretli iptaller)
                const { data: todayDeliveries } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id, status, is_chargeable_cancellation').eq('delivered_by_courier_id', courier.id).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').gte('delivered_at', todayStart.toISOString());
                const todayDeliveryCount = (todayDeliveries || []).length;
                // Aktif paketleri çek (assigned, picking_up, on_the_way)
                const { data: activePackages } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id').eq('courier_id', courier.id).in('status', [
                    'assigned',
                    'picking_up',
                    'on_the_way'
                ]);
                const activePackageCount = (activePackages || []).length;
                // Bu haftanın teslimat sayısı (Pazartesi 05:00'den itibaren, delivered + ücretli iptaller)
                const now2 = new Date();
                const dayOfWeek = now2.getDay() // 0=Pazar, 1=Pazartesi...
                ;
                const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
                const weekStart = new Date(now2);
                weekStart.setDate(weekStart.getDate() - diffToMonday);
                weekStart.setHours(5, 0, 0, 0);
                // Eğer şu an Pazartesi 05:00'den önceyse, geçen haftanın Pazartesisini al
                if (now2 < weekStart) {
                    weekStart.setDate(weekStart.getDate() - 7);
                }
                const { data: weeklyDeliveries } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id').eq('delivered_by_courier_id', courier.id).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').gte('delivered_at', weekStart.toISOString());
                const weeklyDeliveryCount = (weeklyDeliveries || []).length;
                return {
                    ...courier,
                    id: courier.id,
                    full_name: courier.full_name || 'İsimsiz Kurye',
                    is_active: Boolean(courier.is_active),
                    deliveryCount: weeklyDeliveryCount,
                    weeklyDeliveryCount,
                    todayDeliveryCount,
                    activePackageCount,
                    totalDebt
                };
            }));
            setCouriers(couriersWithData);
        } catch (error) {
            console.error('Kuryeler yüklenemedi:', error);
        }
    };
    const fetchRestaurants = async ()=>{
        console.log('🍽️ fetchRestaurants başladı');
        try {
            // ⚡ EGRESS OPTİMİZASYONU: Sadece gerekli restaurant kolonları
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('id, name, phone, address, package_fee, is_active, logo_url').order('name', {
                ascending: true
            });
            if (error) throw error;
            console.log('🍽️ Restaurants çekildi:', data?.length, data);
            setRestaurants(data || []);
        } catch (error) {
            console.error('Restoranlar yüklenemedi:', error);
        }
    };
    const fetchTodayDeliveredCount = async ()=>{
        try {
            // BUSINESS DAY LOGIC: İş günü sabah 05:00'da başlar
            const now = new Date();
            const currentHour = now.getHours();
            const todayStart = new Date(now);
            if (currentHour < 5) {
                todayStart.setDate(todayStart.getDate() - 1);
            }
            todayStart.setHours(5, 0, 0, 0);
            console.log('📅 Admin Panel - Today Delivered Count Start:', todayStart.toISOString());
            // ⚡ EGRESS OPTİMİZASYONU: head: true ile sadece count çek, veri çekme!
            // Delivered + Ücretli İptaller
            const { count, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id', {
                count: 'exact',
                head: true
            }).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').gte('delivered_at', todayStart.toISOString());
            if (error) throw error;
            console.log('📊 Bugün teslim edilen toplam (delivered + ücretli iptaller):', count);
            setTodayDeliveredCount(count || 0);
        } catch (error) {
            console.error('Günlük teslimat sayısı yüklenemedi:', error);
            setTodayDeliveredCount(0);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDataProvider.useEffect": ()=>{
            fetchPackages();
            fetchDeliveredPackages();
            fetchCouriers();
            fetchRestaurants();
            fetchTodayDeliveredCount();
            // 🔥 ÇELİK GİBİ REALTIME BAĞLANTI - SESSIZ YENİDEN BAĞLANMA
            let packagesChannel = null;
            let couriersChannel = null;
            let reconnectTimers = [];
            const setupRealtimeWithRetry = {
                "AdminDataProvider.useEffect.setupRealtimeWithRetry": async (channelName, table, callback, retryCount = 0)=>{
                    try {
                        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(channelName).on('postgres_changes', {
                            event: '*',
                            schema: 'public',
                            table
                        }, callback);
                        const status = await new Promise({
                            "AdminDataProvider.useEffect.setupRealtimeWithRetry": (resolve)=>{
                                channel.subscribe({
                                    "AdminDataProvider.useEffect.setupRealtimeWithRetry": (status)=>{
                                        resolve(status);
                                    }
                                }["AdminDataProvider.useEffect.setupRealtimeWithRetry"]);
                            }
                        }["AdminDataProvider.useEffect.setupRealtimeWithRetry"]);
                        if (status === 'SUBSCRIBED') {
                            console.log(`✅ Realtime bağlandı: ${channelName}`);
                            return channel;
                        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
                            console.warn(`⚠️ Realtime bağlantı hatası: ${channelName} - ${status}`);
                            // Sessiz yeniden bağlanma (3 saniye sonra)
                            const timer = setTimeout({
                                "AdminDataProvider.useEffect.setupRealtimeWithRetry.timer": ()=>{
                                    console.log(`🔄 Yeniden bağlanılıyor: ${channelName}`);
                                    setupRealtimeWithRetry(channelName, table, callback, retryCount + 1);
                                }
                            }["AdminDataProvider.useEffect.setupRealtimeWithRetry.timer"], 3000);
                            reconnectTimers.push(timer);
                            return null;
                        }
                        return channel;
                    } catch (error) {
                        console.error(`❌ Realtime subscription hatası: ${channelName}`, error);
                        // Hata durumunda da yeniden bağlanmayı dene (maksimum 10 deneme)
                        if (retryCount < 10) {
                            const timer = setTimeout({
                                "AdminDataProvider.useEffect.setupRealtimeWithRetry.timer": ()=>{
                                    console.log(`🔄 Hata sonrası yeniden bağlanılıyor: ${channelName} (Deneme: ${retryCount + 1})`);
                                    setupRealtimeWithRetry(channelName, table, callback, retryCount + 1);
                                }
                            }["AdminDataProvider.useEffect.setupRealtimeWithRetry.timer"], 3000);
                            reconnectTimers.push(timer);
                        } else {
                            console.error(`❌ Maksimum yeniden bağlanma denemesi aşıldı: ${channelName}`);
                        }
                        return null;
                    }
                }
            }["AdminDataProvider.useEffect.setupRealtimeWithRetry"];
            // ⚡ REALTIME OPTİMİZASYONU: Full refetch yerine incremental update
            setupRealtimeWithRetry('packages-changes', 'packages', {
                "AdminDataProvider.useEffect": async (payload)=>{
                    console.log('📦 Realtime package event:', payload.eventType, payload.new?.id);
                    if (payload.eventType === 'INSERT') {
                        // Yeni paket eklendi - restaurant bilgisini çek ve state'e ekle
                        const newPackage = payload.new;
                        if ([
                            'new_order',
                            'getting_ready',
                            'ready',
                            'assigned',
                            'picking_up',
                            'on_the_way'
                        ].includes(newPackage.status)) {
                            // Restaurant bilgisini çek
                            const { data: restaurant } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('id, name, phone').eq('id', newPackage.restaurant_id).single();
                            const packageWithRestaurant = {
                                ...newPackage,
                                restaurant: restaurant || null
                            };
                            setPackages({
                                "AdminDataProvider.useEffect": (prev)=>[
                                        packageWithRestaurant,
                                        ...prev
                                    ].slice(0, 500)
                            }["AdminDataProvider.useEffect"]);
                        }
                    } else if (payload.eventType === 'UPDATE') {
                        // Paket güncellendi - sadece bu paketi güncelle
                        const updatedPackage = payload.new;
                        setPackages({
                            "AdminDataProvider.useEffect": (prev)=>{
                                const index = prev.findIndex({
                                    "AdminDataProvider.useEffect.index": (p)=>p.id === updatedPackage.id
                                }["AdminDataProvider.useEffect.index"]);
                                if (index !== -1) {
                                    const newList = [
                                        ...prev
                                    ];
                                    // Mevcut restaurant bilgisini koru
                                    newList[index] = {
                                        ...newList[index],
                                        ...updatedPackage
                                    };
                                    return newList;
                                }
                                return prev;
                            }
                        }["AdminDataProvider.useEffect"]);
                        // Delivered/cancelled ise deliveredPackages'e ekle
                        if ([
                            'delivered',
                            'cancelled'
                        ].includes(updatedPackage.status)) {
                            // Restaurant bilgisini çek
                            const { data: restaurant } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('id, name').eq('id', updatedPackage.restaurant_id).single();
                            const packageWithRestaurant = {
                                ...updatedPackage,
                                restaurant: restaurant || null
                            };
                            setDeliveredPackages({
                                "AdminDataProvider.useEffect": (prev)=>[
                                        packageWithRestaurant,
                                        ...prev
                                    ].slice(0, 1000)
                            }["AdminDataProvider.useEffect"]);
                            setPackages({
                                "AdminDataProvider.useEffect": (prev)=>prev.filter({
                                        "AdminDataProvider.useEffect": (p)=>p.id !== updatedPackage.id
                                    }["AdminDataProvider.useEffect"])
                            }["AdminDataProvider.useEffect"]);
                        }
                    } else if (payload.eventType === 'DELETE') {
                        // Paket silindi - state'den çıkar
                        setPackages({
                            "AdminDataProvider.useEffect": (prev)=>prev.filter({
                                    "AdminDataProvider.useEffect": (p)=>p.id !== payload.old.id
                                }["AdminDataProvider.useEffect"])
                        }["AdminDataProvider.useEffect"]);
                        setDeliveredPackages({
                            "AdminDataProvider.useEffect": (prev)=>prev.filter({
                                    "AdminDataProvider.useEffect": (p)=>p.id !== payload.old.id
                                }["AdminDataProvider.useEffect"])
                        }["AdminDataProvider.useEffect"]);
                    }
                    // Count'u güncelle (hafif sorgu)
                    fetchTodayDeliveredCount();
                }
            }["AdminDataProvider.useEffect"]).then({
                "AdminDataProvider.useEffect": (channel)=>{
                    packagesChannel = channel;
                }
            }["AdminDataProvider.useEffect"]);
            // ⚡ REALTIME OPTİMİZASYONU: Courier değişikliklerinde incremental update
            setupRealtimeWithRetry('couriers-changes', 'couriers', {
                "AdminDataProvider.useEffect": (payload)=>{
                    console.log('👤 Realtime courier event:', payload.eventType, payload.new?.id);
                    if (payload.eventType === 'UPDATE') {
                        setCouriers({
                            "AdminDataProvider.useEffect": (prev)=>{
                                const index = prev.findIndex({
                                    "AdminDataProvider.useEffect.index": (c)=>c.id === payload.new.id
                                }["AdminDataProvider.useEffect.index"]);
                                if (index !== -1) {
                                    const newList = [
                                        ...prev
                                    ];
                                    newList[index] = {
                                        ...newList[index],
                                        ...payload.new
                                    };
                                    return newList;
                                }
                                return prev;
                            }
                        }["AdminDataProvider.useEffect"]);
                    } else {
                        // INSERT/DELETE durumunda full refetch (nadir)
                        fetchCouriers();
                    }
                }
            }["AdminDataProvider.useEffect"]).then({
                "AdminDataProvider.useEffect": (channel)=>{
                    couriersChannel = channel;
                }
            }["AdminDataProvider.useEffect"]);
            // ⚡ POLLING OPTİMİZASYONU: 30 saniye yerine 60 saniye
            const refreshInterval = setInterval({
                "AdminDataProvider.useEffect.refreshInterval": ()=>{
                    fetchPackages();
                    fetchDeliveredPackages();
                    fetchCouriers();
                    fetchRestaurants();
                    fetchTodayDeliveredCount();
                }
            }["AdminDataProvider.useEffect.refreshInterval"], 60000) // 60 saniye
            ;
            return ({
                "AdminDataProvider.useEffect": ()=>{
                    // Tüm reconnect timer'larını temizle
                    reconnectTimers.forEach({
                        "AdminDataProvider.useEffect": (timer)=>clearTimeout(timer)
                    }["AdminDataProvider.useEffect"]);
                    // Kanalları temizle
                    if (packagesChannel) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(packagesChannel);
                    if (couriersChannel) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(couriersChannel);
                    clearInterval(refreshInterval);
                }
            })["AdminDataProvider.useEffect"];
        }
    }["AdminDataProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminDataContext.Provider, {
        value: {
            packages,
            deliveredPackages,
            couriers,
            restaurants,
            todayDeliveredCount,
            isLoading,
            successMessage,
            errorMessage,
            setSuccessMessage,
            setErrorMessage,
            selectedCourierId,
            setSelectedCourierId,
            selectedRestaurantId,
            setSelectedRestaurantId,
            fetchPackages,
            fetchDeliveredPackages,
            fetchCouriers,
            fetchRestaurants,
            fetchTodayDeliveredCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/admin/AdminDataProvider.tsx",
        lineNumber: 465,
        columnNumber: 5
    }, this);
}
_s(AdminDataProvider, "mpOTrbkyH1nroUFaOBTmvCMruPk=");
_c = AdminDataProvider;
function useAdminData() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AdminDataContext);
    if (context === undefined) {
        throw new Error('useAdminData must be used within AdminDataProvider');
    }
    return context;
}
_s1(useAdminData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AdminDataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/dateHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Date and Time Helper Functions
/**
 * Türkiye saatine göre tarih/saat formatlar
 * Tüm timestamp'leri tutarlı şekilde Türkiye saatine çevirir
 */ __turbopack_context__.s([
    "calculateDeliveryDuration",
    ()=>calculateDeliveryDuration,
    "formatShortDateTime",
    ()=>formatShortDateTime,
    "formatTurkishDate",
    ()=>formatTurkishDate,
    "formatTurkishDateTime",
    ()=>formatTurkishDateTime,
    "formatTurkishTime",
    ()=>formatTurkishTime
]);
function formatTurkishTime(dateString) {
    if (!dateString) return '-';
    try {
        // String'i Date objesine çevir
        const date = new Date(dateString);
        // Geçersiz tarih kontrolü
        if (isNaN(date.getTime())) {
            console.warn('⚠️ Geçersiz tarih:', dateString);
            return '-';
        }
        // Türkiye saatine çevir ve formatla
        return date.toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Istanbul'
        });
    } catch (error) {
        console.error('❌ Tarih formatlama hatası:', error, dateString);
        return '-';
    }
}
function formatTurkishDate(dateString) {
    if (!dateString) return '-';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.warn('⚠️ Geçersiz tarih:', dateString);
            return '-';
        }
        return date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'Europe/Istanbul'
        });
    } catch (error) {
        console.error('❌ Tarih formatlama hatası:', error, dateString);
        return '-';
    }
}
function formatTurkishDateTime(dateString) {
    if (!dateString) return '-';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.warn('⚠️ Geçersiz tarih:', dateString);
            return '-';
        }
        return date.toLocaleString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Istanbul'
        });
    } catch (error) {
        console.error('❌ Tarih formatlama hatası:', error, dateString);
        return '-';
    }
}
function formatShortDateTime(dateString) {
    if (!dateString) return '-';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.warn('⚠️ Geçersiz tarih:', dateString);
            return '-';
        }
        // Gün ve Ay İsmi (Örn: 11 May)
        const datePart = date.toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'short',
            timeZone: 'Europe/Istanbul'
        });
        // Saat:Dakika (Örn: 17:40)
        const timePart = date.toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Istanbul'
        });
        return `${datePart} - ${timePart}`;
    } catch (error) {
        console.error('❌ Tarih formatlama hatası:', error, dateString);
        return '-';
    }
}
function calculateDeliveryDuration(pickedUpAt, deliveredAt) {
    if (!pickedUpAt || !deliveredAt) return null;
    try {
        const pickupTime = new Date(pickedUpAt).getTime();
        const deliveryTime = new Date(deliveredAt).getTime();
        const durationMs = deliveryTime - pickupTime;
        return Math.round(durationMs / 1000 / 60) // dakikaya çevir
        ;
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourierPaymentSettingsModal",
    ()=>CourierPaymentSettingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/components/modals/CourierPaymentSettingsModal.tsx
 * @description Kurye Ödeme Ayarları Modalı
 * Admin panelinde kurye başına ödeme türü (paket başı/saatlik) ve ücret belirleme
 */ 'use client';
;
;
function CourierPaymentSettingsModal({ courier, onClose, onSuccess }) {
    _s();
    const [paymentType, setPaymentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('paket_basi');
    const [packageRate, setPackageRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Mevcut ayarları yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourierPaymentSettingsModal.useEffect": ()=>{
            if (courier.payment_type) {
                setPaymentType(courier.payment_type);
            }
            if (courier.package_rate) {
                setPackageRate(courier.package_rate.toString());
            }
        }
    }["CourierPaymentSettingsModal.useEffect"], [
        courier
    ]);
    const handleSave = async ()=>{
        if (!packageRate || isNaN(Number(packageRate)) || Number(packageRate) <= 0) {
            setError('Geçerli bir ücret giriniz');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
                payment_type: paymentType,
                package_rate: Number(packageRate)
            }).eq('id', courier.id);
            if (updateError) throw updateError;
            onSuccess();
            onClose();
        } catch (err) {
            setError(err.message || 'Ayarlar kaydedilirken hata oluştu');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-md w-full p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-slate-900",
                            children: "💰 Kazanç Şekli Ayarları"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-500 hover:text-slate-700 text-2xl",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-3 bg-slate-50 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            children: "Kurye:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold text-slate-900",
                            children: courier.full_name
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-slate-700 mb-3",
                            children: "Ödeme Türü"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "paymentType",
                                            value: "paket_basi",
                                            checked: paymentType === 'paket_basi',
                                            onChange: (e)=>setPaymentType(e.target.value),
                                            className: "w-4 h-4 text-orange-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-900",
                                                    children: "📦 Paket Başı"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600",
                                                    children: "Her teslim edilen paket için sabit ücret"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "paymentType",
                                            value: "saatlik",
                                            checked: paymentType === 'saatlik',
                                            onChange: (e)=>setPaymentType(e.target.value),
                                            className: "w-4 h-4 text-orange-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-slate-900",
                                                    children: "⏰ Saatlik"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600",
                                                    children: "Sabit maaş + paket başı ek ücret"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-slate-700 mb-2",
                            children: paymentType === 'paket_basi' ? 'Paket Başı Ücret (TL)' : 'Paket Başı Ek Ücret (TL)'
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            step: "0.01",
                            min: "0",
                            value: packageRate,
                            onChange: (e)=>setPackageRate(e.target.value),
                            placeholder: paymentType === 'paket_basi' ? 'Örn: 65.00' : 'Örn: 13.00',
                            className: "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        paymentType === 'saatlik' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-600 mt-1",
                            children: "* Sabit maaş ayrıca manuel takip edilir, burada sadece paket başı ek ücret girilir"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-600",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 px-4 py-3 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors",
                            children: "İptal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: loading,
                            className: "flex-1 px-4 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                            children: loading ? 'Kaydediliyor...' : 'Kaydet'
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(CourierPaymentSettingsModal, "ou/abaxmzYYi2FeEBb5If4M29DU=");
_c = CourierPaymentSettingsModal;
var _c;
__turbopack_context__.k.register(_c, "CourierPaymentSettingsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/modals/CourierDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourierDetailModal",
    ()=>CourierDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$CourierPaymentSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/modals/CourierPaymentSettingsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function normalizePackages(data) {
    return (data || []).map((pkg)=>({
            ...pkg,
            restaurant: Array.isArray(pkg.restaurants) && pkg.restaurants.length > 0 ? pkg.restaurants[0] : pkg.restaurants || null,
            restaurants: undefined
        }));
}
function CourierDetailModal({ show, onClose, courier, selectedCourierId, courierDebts, getPlatformBadgeClass, getPlatformDisplayName }) {
    _s();
    const [earningsMode, setEarningsMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaymentSettings, setShowPaymentSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaymentBreakdown, setShowPaymentBreakdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSettlementPackages, setOpenSettlementPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unpaidEarningsPackages, setUnpaidEarningsPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingPackages, setLoadingPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [processingSettlement, setProcessingSettlement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [processingEarningsPayment, setProcessingEarningsPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchSettlementPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CourierDetailModal.useCallback[fetchSettlementPackages]": async ()=>{
            if (!selectedCourierId) return;
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, restaurants(*)').eq('status', 'delivered').eq('delivered_by_courier_id', selectedCourierId).or('is_courier_settled.is.null,is_courier_settled.eq.false').order('delivered_at', {
                ascending: false
            });
            if (error) throw error;
            setOpenSettlementPackages(normalizePackages(data));
        }
    }["CourierDetailModal.useCallback[fetchSettlementPackages]"], [
        selectedCourierId
    ]);
    const fetchUnpaidEarningsPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CourierDetailModal.useCallback[fetchUnpaidEarningsPackages]": async ()=>{
            if (!selectedCourierId) return;
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, restaurants(*)').eq('status', 'delivered').eq('delivered_by_courier_id', selectedCourierId).or('is_courier_earned_paid.is.null,is_courier_earned_paid.eq.false').order('delivered_at', {
                ascending: false
            });
            if (error) throw error;
            setUnpaidEarningsPackages(normalizePackages(data));
        }
    }["CourierDetailModal.useCallback[fetchUnpaidEarningsPackages]"], [
        selectedCourierId
    ]);
    const fetchActiveList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CourierDetailModal.useCallback[fetchActiveList]": async ()=>{
            if (!show || !selectedCourierId) return;
            setLoadingPackages(true);
            try {
                if (earningsMode) {
                    await fetchUnpaidEarningsPackages();
                } else {
                    await fetchSettlementPackages();
                }
            } catch (err) {
                console.error('Kurye paketleri yüklenemedi:', err);
            } finally{
                setLoadingPackages(false);
            }
        }
    }["CourierDetailModal.useCallback[fetchActiveList]"], [
        earningsMode,
        fetchSettlementPackages,
        fetchUnpaidEarningsPackages,
        selectedCourierId,
        show
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourierDetailModal.useEffect": ()=>{
            void fetchActiveList();
        }
    }["CourierDetailModal.useEffect"], [
        fetchActiveList
    ]);
    const settlementSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CourierDetailModal.useMemo[settlementSummary]": ()=>{
            const cash = openSettlementPackages.filter({
                "CourierDetailModal.useMemo[settlementSummary].cash": (p)=>p.payment_method === 'cash'
            }["CourierDetailModal.useMemo[settlementSummary].cash"]).reduce({
                "CourierDetailModal.useMemo[settlementSummary].cash": (sum, p)=>sum + Number(p.amount || 0)
            }["CourierDetailModal.useMemo[settlementSummary].cash"], 0);
            const card = openSettlementPackages.filter({
                "CourierDetailModal.useMemo[settlementSummary].card": (p)=>p.payment_method === 'card'
            }["CourierDetailModal.useMemo[settlementSummary].card"]).reduce({
                "CourierDetailModal.useMemo[settlementSummary].card": (sum, p)=>sum + Number(p.amount || 0)
            }["CourierDetailModal.useMemo[settlementSummary].card"], 0);
            const iban = openSettlementPackages.filter({
                "CourierDetailModal.useMemo[settlementSummary].iban": (p)=>p.payment_method === 'iban'
            }["CourierDetailModal.useMemo[settlementSummary].iban"]).reduce({
                "CourierDetailModal.useMemo[settlementSummary].iban": (sum, p)=>sum + Number(p.amount || 0)
            }["CourierDetailModal.useMemo[settlementSummary].iban"], 0);
            const grandTotal = cash + card + iban;
            return {
                cashTotal: cash,
                cardTotal: card,
                ibanTotal: iban,
                grandTotal,
                packageCount: openSettlementPackages.length
            };
        }
    }["CourierDetailModal.useMemo[settlementSummary]"], [
        openSettlementPackages
    ]);
    const earningsPackageCount = unpaidEarningsPackages.length;
    const packageRate = Number(courier?.package_rate || 0);
    const earningsAmount = earningsPackageCount * packageRate;
    const personalDebt = courierDebts.reduce((sum, d)=>sum + Number(d.remaining_amount || 0), 0);
    const handleGunSonuAl = async ()=>{
        if (!selectedCourierId || !courier) return;
        if (openSettlementPackages.length === 0) {
            alert('Açık hesapta bekleyen paket yok.');
            return;
        }
        const confirmed = window.confirm(`${openSettlementPackages.length} paket için tahsilat kapatılacak. Onaylıyor musunuz?`);
        if (!confirmed) return;
        setProcessingSettlement(true);
        try {
            const packageIds = openSettlementPackages.map((p)=>p.id).filter(Boolean);
            const deliveredAtList = openSettlementPackages.map((p)=>p.delivered_at).filter((v)=>Boolean(v)).sort((a, b)=>new Date(a).getTime() - new Date(b).getTime());
            const minDeliveredAt = deliveredAtList[0] || new Date().toISOString();
            const maxDeliveredAt = deliveredAtList[deliveredAtList.length - 1] || new Date().toISOString();
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                is_courier_settled: true,
                courier_settled_at: new Date().toISOString()
            }).eq('status', 'delivered').eq('delivered_by_courier_id', selectedCourierId).or('is_courier_settled.is.null,is_courier_settled.eq.false');
            if (updateError) throw updateError;
            const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('courier_settlements').insert({
                courier_id: selectedCourierId,
                start_date: minDeliveredAt.split('T')[0],
                end_date: maxDeliveredAt.split('T')[0],
                amount_paid: settlementSummary.grandTotal,
                created_by: 'admin',
                notes: 'Admin modalinden flag bazli gun sonu alindi'
            });
            if (insertError) throw insertError;
            await fetchSettlementPackages();
            alert(`Tahsilat kapatildi.\nPaket: ${packageIds.length}\nTutar: ${settlementSummary.grandTotal.toFixed(2)} ₺`);
        } catch (err) {
            console.error('Gün sonu alma hatası:', err);
            alert(`Gün sonu alma sırasında hata: ${err?.message || err}`);
        } finally{
            setProcessingSettlement(false);
        }
    };
    const handleHakedisOde = async ()=>{
        if (!selectedCourierId) return;
        if (unpaidEarningsPackages.length === 0) {
            alert('Ödenmemiş hakediş paketi yok.');
            return;
        }
        const confirmed = window.confirm(`${unpaidEarningsPackages.length} paket için hakediş odemesi kapatilacak. Onaylıyor musunuz?`);
        if (!confirmed) return;
        setProcessingEarningsPayment(true);
        try {
            const packageIds = unpaidEarningsPackages.map((p)=>p.id).filter(Boolean);
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                is_courier_earned_paid: true
            }).eq('status', 'delivered').eq('delivered_by_courier_id', selectedCourierId).or('is_courier_earned_paid.is.null,is_courier_earned_paid.eq.false');
            if (error) throw error;
            await fetchUnpaidEarningsPackages();
            alert(`Hakediş ödendi olarak işaretlendi.\nPaket: ${packageIds.length}\nToplam: ${(packageIds.length * packageRate).toFixed(2)} ₺`);
        } catch (err) {
            console.error('Hakediş ödeme hatası:', err);
            alert(`Hakediş ödeme sırasında hata: ${err?.message || err}`);
        } finally{
            setProcessingEarningsPayment(false);
        }
    };
    if (!show || !selectedCourierId || !courier) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-950 border border-slate-800 rounded-lg max-w-6xl w-full max-h-[92vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-950",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 flex-1 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-slate-100 tracking-tight",
                                                children: courier.full_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 tracking-tight",
                                                children: "Detaylı Rapor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 ml-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setEarningsMode(!earningsMode),
                                                className: `px-3 py-1.5 rounded text-xs font-medium border transition-colors tracking-tight ${earningsMode ? 'bg-blue-600/30 text-blue-300 border-blue-500/50' : 'bg-blue-900/20 text-blue-400 border-blue-800/40 hover:bg-blue-900/40'}`,
                                                children: earningsMode ? '← Tahsilat/Borç' : 'Kazanç'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowPaymentSettings(true),
                                                className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-medium border border-slate-700 transition-colors tracking-tight",
                                                children: "Kazanç Ayarları"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            !earningsMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleGunSonuAl,
                                                disabled: processingSettlement || openSettlementPackages.length === 0,
                                                className: "px-3 py-1.5 bg-emerald-900/60 hover:bg-emerald-900/80 text-emerald-300 rounded text-xs font-medium border border-emerald-800/50 transition-colors tracking-tight disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: processingSettlement ? 'İşleniyor...' : 'Gün Sonu Al'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this),
                                            earningsMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleHakedisOde,
                                                disabled: processingEarningsPayment || unpaidEarningsPackages.length === 0,
                                                className: "px-3 py-1.5 bg-orange-900/50 hover:bg-orange-900/70 text-orange-300 rounded text-xs font-medium border border-orange-700/50 transition-colors tracking-tight disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: processingEarningsPayment ? 'İşleniyor...' : 'Hakedişi Öde'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onClose();
                                },
                                className: "text-slate-500 hover:text-slate-200 text-xl ml-4 w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto max-h-[calc(92vh-72px)] bg-slate-950",
                        children: earningsMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 rounded-lg p-5 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-slate-600 tracking-tight uppercase font-medium mb-1",
                                                        children: "ÖDENMEMİŞ PAKETLER"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-slate-100 tracking-tight",
                                                        children: loadingPackages ? '...' : earningsPackageCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 mt-1 tracking-tight",
                                                        children: "Açık hesapta bekleyen paketler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-slate-600 tracking-tight uppercase font-medium mb-1",
                                                        children: "TOPLAM HAKEDİŞ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-emerald-500 tracking-tight",
                                                        children: [
                                                            loadingPackages ? '...' : earningsAmount.toFixed(0),
                                                            "₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 mt-1 tracking-tight",
                                                        children: [
                                                            earningsPackageCount,
                                                            " × ",
                                                            packageRate,
                                                            "₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 border-b border-slate-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-slate-200 tracking-tight",
                                                children: "Ödenmemiş Hakediş Paketleri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this),
                                        loadingPackages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 tracking-tight",
                                                    children: "Yükleniyor..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this) : unpaidEarningsPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-slate-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-2 opacity-30",
                                                    children: "✅"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm tracking-tight",
                                                    children: "Ödenmemiş hakediş paketi yok"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 332,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-slate-800 bg-slate-900/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Sipariş"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Tarih"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Restoran"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Müşteri"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-right py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Tutar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: unpaidEarningsPackages.map((pkg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: `border-b border-slate-800/50 ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2 px-4 text-xs text-slate-200 tracking-tight",
                                                                        children: pkg.order_number || '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2 px-4 text-xs text-slate-400 tracking-tight",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.delivered_at)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2 px-4 text-xs text-slate-400 tracking-tight",
                                                                        children: pkg.restaurant?.name || '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2 px-4 text-xs text-slate-300 tracking-tight",
                                                                        children: pkg.customer_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2 px-4 text-right text-xs font-medium text-emerald-500 tracking-tight",
                                                                        children: [
                                                                            pkg.amount,
                                                                            "₺"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, pkg.id, true, {
                                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 338,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setShowPaymentBreakdown(true),
                                            className: "bg-slate-900 border border-slate-800 rounded-lg p-4 cursor-pointer hover:border-slate-700 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 tracking-tight mb-2",
                                                    children: "PAKET SAYISI"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-slate-100 tracking-tight",
                                                    children: settlementSummary.packageCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600 mt-1 tracking-tight",
                                                    children: "Açık hesapta bekleyen paketler"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 tracking-tight mb-2",
                                                    children: "HAKEDİŞ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-emerald-500 tracking-tight",
                                                    children: [
                                                        earningsAmount.toFixed(0),
                                                        "₺"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600 mt-1 tracking-tight",
                                                    children: packageRate > 0 ? `${earningsPackageCount} Paket × ${packageRate}₺` : 'Paket başı ücret belirlenmedi'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 tracking-tight mb-2",
                                                    children: "KASAYA BORÇ (TAHSİLAT)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-2xl font-bold tracking-tight ${settlementSummary.grandTotal > 0 ? 'text-orange-500' : 'text-slate-500'}`,
                                                    children: [
                                                        settlementSummary.grandTotal.toLocaleString('tr-TR', {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        }),
                                                        "₺"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600 mt-1 tracking-tight",
                                                    children: [
                                                        settlementSummary.grandTotal > 0 ? `${settlementSummary.packageCount} paket · mutabakat bekliyor` : 'Açık tahsilat yok',
                                                        personalDebt > 0 ? ` · Kişisel borç: ${personalDebt.toFixed(2)}₺` : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 border border-slate-800 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 border-b border-slate-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-slate-200 tracking-tight",
                                                children: "Açık Hesapta Bekleyen Paketler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 413,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        loadingPackages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 tracking-tight",
                                                    children: "Yükleniyor..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, this) : openSettlementPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-slate-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-2 opacity-30",
                                                    children: "📦"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm tracking-tight",
                                                    children: "Açık hesapta bekleyen paket yok"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 424,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-slate-800 bg-slate-900/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Sipariş"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Tarih"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Müşteri"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Restoran"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "İçerik"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-right py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Tutar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Konum"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Ödeme"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "text-left py-2.5 px-4 text-xs font-medium text-slate-500 tracking-tight",
                                                                    children: "Süre"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: openSettlementPackages.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: `border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${index % 2 === 0 ? 'bg-slate-900/30' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium text-slate-200 text-xs tracking-tight",
                                                                                    children: order.order_number || '......'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                                    lineNumber: 454,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                order.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-[10px] py-0.5 px-1.5 rounded ${getPlatformBadgeClass(order.platform)}`,
                                                                                    children: getPlatformDisplayName(order.platform)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                                    lineNumber: 458,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 452,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-300 tracking-tight",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTurkishTime"])(order.delivered_at)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                                lineNumber: 465,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[10px] text-slate-600",
                                                                                children: order.delivered_at ? new Date(order.delivered_at).toLocaleDateString('tr-TR') : '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                                lineNumber: 468,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 464,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4 text-xs text-slate-300 tracking-tight",
                                                                        children: order.customer_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-slate-400 tracking-tight",
                                                                            children: order.restaurant?.name || 'Bilinmeyen'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "max-w-[120px] text-[11px] text-slate-500 truncate tracking-tight",
                                                                            children: order.content || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 479,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 478,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4 text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-emerald-500 text-xs tracking-tight",
                                                                            children: [
                                                                                order.amount,
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "max-w-[100px] text-[10px] text-slate-600 truncate",
                                                                            children: order.delivery_address
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `px-1.5 py-0.5 rounded text-[10px] font-medium ${order.payment_method === 'cash' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/30' : order.payment_method === 'iban' ? 'bg-blue-900/30 text-blue-400 border border-blue-800/30' : 'bg-orange-900/30 text-orange-400 border border-orange-800/30'}`,
                                                                            children: order.payment_method === 'cash' ? 'Nakit' : order.payment_method === 'iban' ? 'IBAN' : 'Kart'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-2.5 px-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-slate-400 tracking-tight",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDeliveryDuration"])(order.picked_up_at, order.delivered_at)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                            lineNumber: 505,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, order.id, true, {
                                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                lineNumber: 430,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            showPaymentBreakdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-lg max-w-md w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-5 py-3.5 border-b border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-200 tracking-tight",
                                    children: "Ödeme Detayları"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 525,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        setShowPaymentBreakdown(false);
                                    },
                                    className: "text-slate-500 hover:text-slate-200 text-lg",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-800 p-3 rounded flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 tracking-tight",
                                                    children: "Nakit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600 mt-0.5",
                                                    children: [
                                                        openSettlementPackages.filter((o)=>o.payment_method === 'cash').length,
                                                        " sipariş"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-bold text-emerald-500 tracking-tight",
                                            children: [
                                                settlementSummary.cashTotal.toFixed(2),
                                                "₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 545,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 538,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-800 p-3 rounded flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 tracking-tight",
                                                    children: "Kart"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600 mt-0.5",
                                                    children: [
                                                        openSettlementPackages.filter((o)=>o.payment_method === 'card').length,
                                                        " sipariş"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-bold text-orange-400 tracking-tight",
                                            children: [
                                                settlementSummary.cardTotal.toFixed(2),
                                                "₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 556,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                settlementSummary.ibanTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-800 p-3 rounded flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 tracking-tight",
                                                    children: "IBAN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-600 mt-0.5",
                                                    children: [
                                                        openSettlementPackages.filter((o)=>o.payment_method === 'iban').length,
                                                        " sipariş"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-bold text-blue-400 tracking-tight",
                                            children: [
                                                settlementSummary.ibanTotal.toFixed(2),
                                                "₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 568,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 border border-slate-700 p-3 rounded flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 font-medium tracking-tight",
                                            children: "BU DÖNEM ÖDENECEK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 574,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-orange-300 tracking-tight",
                                            children: [
                                                settlementSummary.grandTotal.toFixed(2),
                                                "₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-slate-500",
                                    children: "Açık hesapta bekleyen paketler"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 pb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowPaymentBreakdown(false),
                                className: "w-full px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-medium border border-slate-700 transition-colors tracking-tight",
                                children: "Kapat"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                                lineNumber: 582,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                            lineNumber: 581,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                    lineNumber: 523,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                lineNumber: 522,
                columnNumber: 9
            }, this),
            showPaymentSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$CourierPaymentSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourierPaymentSettingsModal"], {
                courier: courier,
                onClose: ()=>setShowPaymentSettings(false),
                onSuccess: ()=>{
                    window.location.reload();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
                lineNumber: 595,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/modals/CourierDetailModal.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(CourierDetailModal, "QO+IV0I0XrGl4e7aw1yP5S8oZbY=");
_c = CourierDetailModal;
var _c;
__turbopack_context__.k.register(_c, "CourierDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/restaurantService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllRestaurantsUnpaidBalances",
    ()=>getAllRestaurantsUnpaidBalances,
    "getRestaurantFinancials",
    ()=>getRestaurantFinancials,
    "getRestaurantPeriodFinancials",
    ()=>getRestaurantPeriodFinancials,
    "handleRestaurantPayment",
    ()=>handleRestaurantPayment,
    "processRestaurantPayment",
    ()=>processRestaurantPayment
]);
/**
 * @file src/services/restaurantService.ts
 * @description Restoran Finansal Servisi — Paket Bazlı is_paid_to_restaurant Mimarisi
 *
 * YENİ SİSTEM:
 * - Kümülatif global bakiye YOK
 * - Her paket is_paid_to_restaurant flag'i taşır
 * - Hesaplama: filtrelenen tarih aralığındaki ödenmemiş paketler üzerinden
 * - Ödeme: Supabase RPC (process_restaurant_payment) ile atomik transaction
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
async function getRestaurantPeriodFinancials(restaurantId, startDate, endDate) {
    try {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('get_restaurant_period_financials', {
            p_restaurant_id: restaurantId,
            p_start_date: start.toISOString(),
            p_end_date: end.toISOString()
        });
        if (error) {
            console.error('❌ RPC Hatası (get_restaurant_period_financials):', JSON.stringify(error, null, 2));
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true,
            data: data
        };
    } catch (err) {
        console.error('❌ getRestaurantPeriodFinancials CATCH:', err.message);
        return {
            success: false,
            error: err.message
        };
    }
}
async function getAllRestaurantsUnpaidBalances(startDate, endDate) {
    try {
        // Tarih parametrelerini hazırla (boşsa null gönder → RPC tüm zamanları döner)
        const params = {};
        if (startDate && endDate) {
            const start = new Date(startDate);
            start.setHours(0, 0, 0, 0);
            const end = new Date(endDate);
            end.setHours(23, 59, 59, 999);
            params.p_start_date = start.toISOString();
            params.p_end_date = end.toISOString();
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('get_all_restaurants_unpaid_balances', params);
        if (error) {
            console.error('❌ RPC Hatası (get_all_restaurants_unpaid_balances):', JSON.stringify(error, null, 2));
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true,
            data: data || []
        };
    } catch (err) {
        console.error('❌ getAllRestaurantsUnpaidBalances CATCH:', err.message);
        return {
            success: false,
            error: err.message
        };
    }
}
async function processRestaurantPayment(restaurantId, _startDate, endDate, notes) {
    try {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        console.log('📤 Ödeme RPC çağrılıyor (tüm geçmiş kapatılıyor):', {
            restaurant_id: restaurantId,
            end: end.toISOString()
        });
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('process_restaurant_payment', {
            p_restaurant_id: restaurantId,
            p_end_date: end.toISOString(),
            p_notes: notes || null
        });
        if (error) {
            console.error('❌ RPC Hatası (process_restaurant_payment):', JSON.stringify(error, null, 2));
            return {
                success: false,
                error: error.message
            };
        }
        const result = data;
        if (!result?.success) {
            return {
                success: false,
                error: result?.error || 'Ödeme işlemi başarısız'
            };
        }
        console.log('✅ Ödeme başarılı:', JSON.stringify(result, null, 2));
        return {
            success: true,
            message: result.message,
            data: {
                package_count: result.package_count,
                revenue: result.revenue,
                cost: result.cost,
                net_paid: result.net_paid
            }
        };
    } catch (err) {
        console.error('❌ processRestaurantPayment CATCH:', JSON.stringify({
            name: err?.name,
            message: err?.message
        }, null, 2));
        return {
            success: false,
            error: err?.message || 'Beklenmeyen hata'
        };
    }
}
async function getRestaurantFinancials(restaurantId, startDate, endDate) {
    if (startDate && endDate) {
        const result = await getRestaurantPeriodFinancials(restaurantId, startDate, endDate);
        if (result.success && result.data) {
            // Eski formata dönüştür (geriye uyumluluk)
            return {
                success: true,
                data: {
                    package_fee: result.data.package_fee,
                    current_balance: result.data.net_payable,
                    period: {
                        revenue: result.data.unpaid_revenue + result.data.paid_revenue,
                        cost: result.data.unpaid_cost + result.data.paid_package_count * result.data.package_fee,
                        total_package_count: result.data.total_package_count,
                        delivered_count: result.data.total_package_count
                    }
                }
            };
        }
        return result;
    }
    return {
        success: false,
        error: 'Tarih aralığı gerekli'
    };
}
async function handleRestaurantPayment(restaurantId, amountPaid, notes, periodStart, periodEnd) {
    if (periodStart && periodEnd) {
        return processRestaurantPayment(String(restaurantId), periodStart, periodEnd, notes);
    }
    return {
        success: false,
        error: 'Tarih aralığı belirtilmeli (yeni sistem)'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RestaurantDetailModal",
    ()=>RestaurantDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$restaurantService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/restaurantService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/components/modals/RestaurantDetailModal.tsx
 * @description B2B SaaS Kurallarına Uygun Restoran Finans Paneli (Hero Card Mimarisi)
 */ 'use client';
;
;
;
;
// 📌 KATMAN 3: Saniye Saniye Paket Yaşam Döngüsü (Vertical Timeline)
function DrawerOrderRow({ pkg }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Saniye saniye zaman damgalarını biçimlendir (Güvenli Tarih Formatlama)
    const formatTimelineTime = (isoString)=>{
        if (!isoString) return null;
        try {
            const date = new Date(isoString);
            if (isNaN(date.getTime())) return null;
            return {
                time: date.toLocaleTimeString('tr-TR', {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                date: date.toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'short'
                })
            };
        } catch (e) {
            return null;
        }
    };
    // Kart başlığındaki tarihi güvenli biçimlendir
    const safeFormatHeaderDate = (isoString)=>{
        if (!isoString) return '-';
        try {
            const date = new Date(isoString);
            if (isNaN(date.getTime())) return '-';
            return date.toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return '-';
        }
    };
    // Accordion içeriğini güvenli şekilde render eden fonksiyon (Try-Catch Sarmalı)
    const renderAccordionContent = ()=>{
        try {
            // Akış aşamaları (Optional Chaining & Fallback)
            const steps = [
                {
                    label: 'Siparişin Sisteme Düşmesi (Yeni Sipariş)',
                    time: pkg?.created_at,
                    icon: '📥',
                    color: 'emerald'
                },
                {
                    label: 'Hazırlanmaya Başlanması',
                    time: pkg?.getting_ready_at,
                    icon: '👨‍🍳',
                    color: 'emerald'
                },
                {
                    label: 'Hazır Olması',
                    time: pkg?.ready_at,
                    icon: '✅',
                    color: 'emerald'
                },
                {
                    label: 'Kuryenin Kabul Etmesi',
                    time: pkg?.assigned_at,
                    icon: '🛵',
                    color: 'emerald'
                },
                {
                    label: 'Kuryenin Restorandan Teslim Alması',
                    time: pkg?.picked_up_at,
                    icon: '📦',
                    color: 'emerald'
                },
                pkg?.status === 'cancelled' ? {
                    label: 'Siparişin İptal Edilmesi',
                    time: pkg?.cancelled_at,
                    icon: '❌',
                    color: 'rose'
                } : {
                    label: 'Müşteriye Teslim Edilmesi',
                    time: pkg?.delivered_at,
                    icon: '🏁',
                    color: 'emerald'
                }
            ];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-slate-850 bg-slate-950/40 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1",
                                        children: "👤 Müşteri Bilgileri"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 font-semibold",
                                        children: pkg?.customer_name ?? 'Bilinmeyen Müşteri'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    pkg?.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 mt-0.5 font-medium",
                                        children: pkg.customer_phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1",
                                        children: "🛵 Teslimat Bilgisi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 font-semibold",
                                        children: pkg?.courier_name ?? 'Atanmadı'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 truncate mt-0.5 font-medium",
                                        title: pkg?.delivery_address ?? 'Adres Belirtilmemiş',
                                        children: [
                                            "📍 ",
                                            pkg?.delivery_address ?? 'Adres Belirtilmemiş'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-1 pr-1 py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-3",
                                children: "🕒 DENETİM İZİ (AUDIT LOG)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative border-l border-slate-850 ml-3 space-y-5",
                                children: steps.map((step, idx)=>{
                                    const formatted = formatTimelineTime(step.time);
                                    const isCompleted = !!formatted;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pl-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute -left-3 top-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] z-10 transition-all ${isCompleted ? step.color === 'rose' ? 'bg-rose-950/80 border-rose-500 text-rose-400' : 'bg-emerald-950/80 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-850 text-slate-600'}`,
                                                children: step.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this),
                                            idx < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute left-[-1px] top-6 w-[2px] h-[calc(100%+12px)] pointer-events-none -translate-x-1/2 z-0 ${isCompleted && !!steps[idx + 1]?.time ? 'bg-emerald-500/40' : 'bg-slate-850'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 105,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-semibold ${isCompleted ? 'text-slate-200' : 'text-slate-500'}`,
                                                        children: step.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 23
                                                    }, this),
                                                    isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-[10px] font-bold text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-slate-300",
                                                                children: formatted.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: formatted.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-600 italic",
                                                        children: "Gerçekleşmedi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this);
        } catch (err) {
            console.error("❌ Accordion render hatası:", err);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-slate-850 bg-rose-950/10 text-rose-400 text-xs rounded-b-xl",
                children: "⚠️ Sipariş detayları yüklenirken bir hata oluştu. Bazı veriler eksik veya bozuk olabilir."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 border border-slate-800/80 rounded-xl overflow-hidden transition-all duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "w-full p-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-slate-300",
                                children: [
                                    "#",
                                    pkg?.order_number || pkg?.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500 font-medium",
                                children: safeFormatHeaderDate(pkg?.created_at)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-extrabold text-slate-200 text-sm",
                                children: [
                                    (pkg?.amount ?? 0).toLocaleString('tr-TR', {
                                        minimumFractionDigits: 2
                                    }),
                                    " ₺"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            pkg?.status === 'cancelled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 bg-rose-500/10 text-rose-400 rounded text-[10px] font-bold border border-rose-500/20 uppercase tracking-wider",
                                children: "İptal (Ücretli)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wider",
                                children: "Teslim Edildi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-slate-400 text-xs transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`,
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            isExpanded && renderAccordionContent()
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(DrawerOrderRow, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = DrawerOrderRow;
function RestaurantDetailModal({ restaurantId, globalStartDate, globalEndDate, onClose, onPaymentClick, restaurant, onRefetch }) {
    _s1();
    // Sipariş listesi (Periyot Tablosu)
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Finansal Veriler (Yeni Paket Bazlı Sistem)
    const [financials, setFinancials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('phone_orders');
    const [paymentHistory, setPaymentHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ── KATMAN 2: İlgili Dönemin Paket Listesi (Sliding Drawer) State'leri ──
    const [selectedPaymentForDetails, setSelectedPaymentForDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drawerOrders, setDrawerOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingDrawerOrders, setLoadingDrawerOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchDrawerOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RestaurantDetailModal.useCallback[fetchDrawerOrders]": async (payment)=>{
            setLoadingDrawerOrders(true);
            try {
                // Ödemenin kapsadığı tarih aralığı
                const start = payment.period_start ? new Date(payment.period_start) : new Date(new Date(payment.created_at).getTime() - 14 * 24 * 60 * 60 * 1000) // Fallback 14 gün öncesi
                ;
                start.setHours(0, 0, 0, 0);
                const end = payment.period_end ? new Date(payment.period_end) : new Date(payment.created_at);
                end.setHours(23, 59, 59, 999);
                // Teslim edilen siparişler
                const { data: deliveredData, error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, couriers!delivered_by_courier_id(full_name)').eq('restaurant_id', restaurantId).eq('status', 'delivered').gte('delivered_at', start.toISOString()).lte('delivered_at', end.toISOString());
                if (delErr) throw delErr;
                // Ücretli iptal edilen siparişler
                const { data: cancelledData, error: canErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, couriers!delivered_by_courier_id(full_name)').eq('restaurant_id', restaurantId).eq('status', 'cancelled').eq('is_chargeable_cancellation', true).gte('created_at', start.toISOString()).lte('created_at', end.toISOString());
                if (canErr) throw canErr;
                const combined = [
                    ...deliveredData || [],
                    ...cancelledData || []
                ].map({
                    "RestaurantDetailModal.useCallback[fetchDrawerOrders].combined": (pkg)=>({
                            ...pkg,
                            courier_name: pkg.couriers?.full_name,
                            couriers: undefined
                        })
                }["RestaurantDetailModal.useCallback[fetchDrawerOrders].combined"]).sort({
                    "RestaurantDetailModal.useCallback[fetchDrawerOrders].combined": (a, b)=>new Date(b.delivered_at || b.created_at || 0).getTime() - new Date(a.delivered_at || a.created_at || 0).getTime()
                }["RestaurantDetailModal.useCallback[fetchDrawerOrders].combined"]);
                setDrawerOrders(combined);
            } catch (err) {
                console.error('❌ Drawer sipariş verisi hatası:', err.message);
                setDrawerOrders([]);
            } finally{
                setLoadingDrawerOrders(false);
            }
        }
    }["RestaurantDetailModal.useCallback[fetchDrawerOrders]"], [
        restaurantId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestaurantDetailModal.useEffect": ()=>{
            if (selectedPaymentForDetails) {
                fetchDrawerOrders(selectedPaymentForDetails);
            } else {
                setDrawerOrders([]);
            }
        }
    }["RestaurantDetailModal.useEffect"], [
        selectedPaymentForDetails,
        fetchDrawerOrders
    ]);
    // Veri Çekme
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RestaurantDetailModal.useCallback[fetchData]": async ()=>{
            setIsLoading(true);
            try {
                // 1. Dönem Finansalları (Paket Bazlı is_paid Sistemi)
                const finResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$restaurantService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRestaurantPeriodFinancials"])(restaurantId, globalStartDate, globalEndDate);
                if (finResult.success && finResult.data) {
                    setFinancials(finResult.data);
                } else {
                    console.error('❌ Finansal özet hatası:', finResult.error);
                }
                // 2. Sadece tabloyu doldurmak için gerekli olan dönem siparişleri
                const start = new Date(globalStartDate);
                start.setHours(0, 0, 0, 0);
                const end = new Date(globalEndDate);
                end.setHours(23, 59, 59, 999);
                const { data: deliveredData, error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, couriers!delivered_by_courier_id(full_name)').eq('restaurant_id', restaurantId).eq('status', 'delivered').gte('delivered_at', start.toISOString()).lte('delivered_at', end.toISOString());
                if (delErr) throw delErr;
                const { data: cancelledData, error: canErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, couriers!delivered_by_courier_id(full_name)').eq('restaurant_id', restaurantId).eq('status', 'cancelled').eq('is_chargeable_cancellation', true).gte('created_at', start.toISOString()).lte('created_at', end.toISOString());
                if (canErr) throw canErr;
                const combined = [
                    ...deliveredData || [],
                    ...cancelledData || []
                ].map({
                    "RestaurantDetailModal.useCallback[fetchData].combined": (pkg)=>({
                            ...pkg,
                            courier_name: pkg.couriers?.full_name,
                            couriers: undefined
                        })
                }["RestaurantDetailModal.useCallback[fetchData].combined"]).sort({
                    "RestaurantDetailModal.useCallback[fetchData].combined": (a, b)=>new Date(b.delivered_at || b.created_at || 0).getTime() - new Date(a.delivered_at || a.created_at || 0).getTime()
                }["RestaurantDetailModal.useCallback[fetchData].combined"]);
                setOrders(combined);
            } catch (error) {
                console.error('❌ Veri hatası:', error.message);
                setOrders([]);
            } finally{
                setIsLoading(false);
            }
        }
    }["RestaurantDetailModal.useCallback[fetchData]"], [
        restaurantId,
        globalStartDate,
        globalEndDate
    ]);
    const fetchPaymentHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RestaurantDetailModal.useCallback[fetchPaymentHistory]": async ()=>{
            try {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('restaurant_payment_transactions').select('*').eq('restaurant_id', restaurantId).order('created_at', {
                    ascending: false
                }).limit(50);
                if (error) throw error;
                setPaymentHistory(data || []);
            } catch (error) {
                console.error('❌ Ödeme geçmişi hatası:', error.message);
                setPaymentHistory([]);
            }
        }
    }["RestaurantDetailModal.useCallback[fetchPaymentHistory]"], [
        restaurantId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestaurantDetailModal.useEffect": ()=>{
            fetchData();
            fetchPaymentHistory();
        }
    }["RestaurantDetailModal.useEffect"], [
        fetchData,
        fetchPaymentHistory
    ]);
    // 🔥 KRİTİK: onRefetch değiştiğinde (ödeme sonrası) verileri yeniden çek
    const [prevRefetch, setPrevRefetch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(onRefetch);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestaurantDetailModal.useEffect": ()=>{
            if (onRefetch !== undefined && onRefetch !== prevRefetch) {
                setPrevRefetch(onRefetch);
                console.log('🔄 Ödeme sonrası refetch tetiklendi, RPC yeniden çağrılıyor...');
                fetchData();
                fetchPaymentHistory();
            }
        }
    }["RestaurantDetailModal.useEffect"], [
        onRefetch
    ]);
    const guncelBakiye = financials?.net_payable ?? 0;
    const unpaidCount = financials?.unpaid_package_count ?? 0;
    // 📞 Telefon & 📱 Uygulama siparişlerini filtreleme mantığı
    const filteredOrders = orders.filter((pkg)=>{
        if (activeTab === 'phone_orders') {
            return !pkg.platform || pkg.platform !== 'web';
        }
        if (activeTab === 'web_orders') {
            return pkg.platform === 'web';
        }
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
        onClick: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-950 border border-slate-800 rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col",
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-100 tracking-tight",
                                        children: [
                                            restaurant.name,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 font-normal",
                                                children: "| Finans Yönetimi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 416,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg p-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 text-slate-300 text-sm font-medium",
                                                children: globalStartDate
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 424,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 text-slate-300 text-sm font-medium",
                                                children: globalEndDate
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 425,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            fetchData();
                                            fetchPaymentHistory();
                                        },
                                        className: "px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-sm border border-slate-700 transition-colors",
                                        title: "Yenile",
                                        children: "🔄"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onClose();
                                },
                                className: "flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-300 hover:bg-slate-800 rounded transition-colors text-2xl font-light",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto flex-1 admin-scrollbar",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-24 text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    children: "Veriler Hesaplanıyor (RPC)..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-2xl p-8 border-2 shadow-2xl relative overflow-hidden ${guncelBakiye > 0 ? 'bg-gradient-to-br from-emerald-900/80 to-slate-900 border-emerald-500/50 shadow-emerald-900/20' : guncelBakiye < 0 ? 'bg-gradient-to-br from-rose-900/80 to-slate-900 border-rose-500/50 shadow-rose-900/20' : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-slate-900/50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex flex-col md:flex-row justify-between items-center gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-slate-300 font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full bg-current animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Dönem Ödenmemiş Bakiye"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-6xl font-black text-white tracking-tighter",
                                                                    children: Math.abs(guncelBakiye).toLocaleString('tr-TR', {
                                                                        minimumFractionDigits: 2
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl text-white/60 font-bold",
                                                                    children: "₺"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/60 text-sm mt-2 font-medium",
                                                            children: unpaidCount > 0 ? `${unpaidCount} ödenmemiş paket (${globalStartDate} — ${globalEndDate})` : 'Bu dönemde ödenmemiş paket yok ✓'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3 min-w-[200px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onPaymentClick(guncelBakiye),
                                                            disabled: unpaidCount === 0,
                                                            className: `w-full py-4 px-6 rounded-xl font-black text-lg transition-all shadow-lg ${unpaidCount > 0 ? 'bg-emerald-500 hover:bg-emerald-400 text-emerald-950 shadow-emerald-500/30' : 'bg-slate-700 text-slate-400 cursor-not-allowed shadow-none'}`,
                                                            children: unpaidCount > 0 ? '💳 HESAP ÖDE' : '✓ ÖDENDİ'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-center text-white/40 font-medium",
                                                            children: [
                                                                "Bitiş tarihine (",
                                                                globalEndDate,
                                                                ") kadar olan tüm ödenmemiş bakiyeyi kapatır"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-slate-200 tracking-tight flex items-center gap-2",
                                                    children: [
                                                        "📅 Dönem Ekstresi",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-normal text-slate-500 bg-slate-900 border border-slate-800 px-2 py-1 rounded",
                                                            children: [
                                                                globalStartDate,
                                                                " — ",
                                                                globalEndDate
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex bg-slate-900 p-1 rounded-lg border border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab('phone_orders'),
                                                            className: `px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'phone_orders' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-300'}`,
                                                            children: "Telefon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab('web_orders'),
                                                            className: `px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'web_orders' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-300'}`,
                                                            children: "Uygulama"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveTab('payments'),
                                                            className: `px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'payments' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-300'}`,
                                                            children: "Ödemeler"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this),
                                        activeTab !== 'payments' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900/50 border border-slate-800 rounded-xl p-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-slate-500 tracking-widest uppercase mb-1",
                                                                    children: "Ödenmemiş Ciro"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-black text-slate-200",
                                                                    children: [
                                                                        (financials?.unpaid_revenue ?? 0).toLocaleString('tr-TR', {
                                                                            minimumFractionDigits: 2
                                                                        }),
                                                                        " ₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 553,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mt-1",
                                                                    children: [
                                                                        financials?.unpaid_package_count ?? 0,
                                                                        " ödenmemiş paket"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-rose-950/20 border border-rose-900/30 rounded-xl p-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-rose-500/70 tracking-widest uppercase mb-1",
                                                                    children: "Kurye Masrafı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-black text-rose-400",
                                                                    children: [
                                                                        (financials?.unpaid_cost ?? 0).toLocaleString('tr-TR', {
                                                                            minimumFractionDigits: 2
                                                                        }),
                                                                        " ₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-500/50 mt-1",
                                                                    children: [
                                                                        financials?.unpaid_package_count ?? 0,
                                                                        " paket × ",
                                                                        financials?.package_fee ?? 0,
                                                                        "₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 564,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-rose-950/20 border border-rose-900/30 rounded-xl p-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-rose-500/70 tracking-widest uppercase mb-1",
                                                                    children: "KOMİSYON KESİNTİSİ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-black text-rose-400",
                                                                    children: [
                                                                        (financials?.unpaid_commission ?? 0).toLocaleString('tr-TR', {
                                                                            minimumFractionDigits: 2
                                                                        }),
                                                                        " ₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-500/50 mt-1",
                                                                    children: "Sistem komisyon kesintisi"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 574,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `border rounded-xl p-5 ${(financials?.net_payable ?? 0) > 0 ? 'bg-emerald-950/20 border-emerald-900/30' : 'bg-slate-900/50 border-slate-800'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-emerald-500/70 tracking-widest uppercase mb-1",
                                                                    children: "Net Ödenecek"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-2xl font-black ${(financials?.net_payable ?? 0) > 0 ? 'text-emerald-400' : 'text-slate-400'}`,
                                                                    children: [
                                                                        (financials?.net_payable ?? 0).toLocaleString('tr-TR', {
                                                                            minimumFractionDigits: 2
                                                                        }),
                                                                        " ₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-emerald-500/50 mt-1",
                                                                    children: "Ciro - Masraf - Komisyon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900/50 border border-slate-800 rounded-xl p-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-slate-500 tracking-widest uppercase mb-1",
                                                                    children: "Ödenmiş"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-black text-slate-500",
                                                                    children: [
                                                                        ((financials?.paid_revenue ?? 0) - (financials?.paid_package_count ?? 0) * (financials?.package_fee ?? 0)).toLocaleString('tr-TR', {
                                                                            minimumFractionDigits: 2
                                                                        }),
                                                                        " ₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-600 mt-1",
                                                                    children: [
                                                                        financials?.paid_package_count ?? 0,
                                                                        " ödenmiş paket ✓"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 596,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden",
                                                    children: filteredOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-16 text-slate-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Bu kategoride sipariş bulunamadı"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-sm text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "text-xs text-slate-400 uppercase bg-slate-950/50 border-b border-slate-800",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium",
                                                                                children: "No"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 611,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium",
                                                                                children: "Oluşturulma"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 612,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium",
                                                                                children: "Müşteri"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 613,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium",
                                                                                children: "Kurye"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 614,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium",
                                                                                children: "Tutar"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 615,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium",
                                                                                children: "Teslim Tarihi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 616,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-6 py-4 font-medium text-right",
                                                                                children: "Durum"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 617,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-slate-800/50",
                                                                    children: filteredOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-slate-800/30 transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 font-medium text-slate-300",
                                                                                    children: order.order_number || '......'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 623,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 text-slate-400",
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTurkishTime"])(order.created_at)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 626,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 text-slate-400 truncate max-w-[120px]",
                                                                                    children: order.customer_name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 629,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 text-slate-500",
                                                                                    children: order.courier_name || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 font-bold text-slate-300 whitespace-nowrap",
                                                                                    children: [
                                                                                        order.amount,
                                                                                        " ₺"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 text-slate-400 whitespace-nowrap",
                                                                                    children: order.delivered_at ? new Date(order.delivered_at).toLocaleString('tr-TR', {
                                                                                        day: '2-digit',
                                                                                        month: 'short',
                                                                                        hour: '2-digit',
                                                                                        minute: '2-digit',
                                                                                        timeZone: 'Europe/Istanbul'
                                                                                    }).replace(', ', ' - ') : '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 632,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-6 py-4 text-right",
                                                                                    children: order.status === 'cancelled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-2 py-1 bg-rose-500/10 text-rose-400 rounded text-xs font-bold border border-rose-500/20",
                                                                                        children: "İptal (Ücretli)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                        lineNumber: 645,
                                                                                        columnNumber: 39
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs font-bold border border-emerald-500/20",
                                                                                        children: "Teslim Edildi"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                        lineNumber: 649,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                    lineNumber: 643,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, order.id, true, {
                                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                            lineNumber: 622,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /* Ödeme Geçmişi */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden",
                                            children: paymentHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-16 text-slate-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Henüz ödeme kaydı bulunmuyor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 666,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-slate-800/50 space-y-2 p-4",
                                                children: paymentHistory.map((payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>setSelectedPaymentForDetails(payment),
                                                        className: "p-6 flex justify-between items-center bg-slate-900/30 border border-slate-800 hover:bg-slate-850/40 hover:border-slate-700 rounded-xl cursor-pointer transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 pr-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-slate-200 text-base",
                                                                        children: new Date(payment.created_at).toLocaleDateString('tr-TR', {
                                                                            day: 'numeric',
                                                                            month: 'long',
                                                                            year: 'numeric'
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    payment.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-400 mt-1 font-medium",
                                                                        children: payment.notes
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                        lineNumber: 681,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500 mt-2.5 flex items-center gap-1 font-medium bg-slate-950/60 border border-slate-900 px-2.5 py-1 rounded-md w-fit",
                                                                        children: [
                                                                            "📅 Kapsanan Dönem: ",
                                                                            payment.period_start && payment.period_end ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400 font-semibold",
                                                                                        children: new Date(payment.period_start).toLocaleDateString('tr-TR', {
                                                                                            day: 'numeric',
                                                                                            month: 'short',
                                                                                            year: 'numeric'
                                                                                        })
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                        lineNumber: 687,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-600",
                                                                                        children: "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                        lineNumber: 690,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400 font-semibold",
                                                                                        children: new Date(payment.period_end).toLocaleDateString('tr-TR', {
                                                                                            day: 'numeric',
                                                                                            month: 'short',
                                                                                            year: 'numeric'
                                                                                        })
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                        lineNumber: 691,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-500 font-semibold italic",
                                                                                children: "Tüm Zamanlar / Belirtilmemiş"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                                lineNumber: 696,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-2xl font-black text-emerald-400 tracking-tight",
                                                                            children: [
                                                                                "+ ",
                                                                                payment.amount_paid.toLocaleString('tr-TR', {
                                                                                    minimumFractionDigits: 2
                                                                                }),
                                                                                " ₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                            lineNumber: 702,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500 text-lg transition-transform hover:translate-x-1 duration-200",
                                                                        children: "➔"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, payment.id, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 670,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 664,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            selectedPaymentForDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300",
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedPaymentForDetails(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                lineNumber: 725,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-y-0 right-0 max-w-2xl w-full bg-slate-950 border-l border-slate-850 h-full flex flex-col shadow-2xl z-[70] transition-transform duration-300 ease-in-out transform ${selectedPaymentForDetails ? 'translate-x-0' : 'translate-x-full'}`,
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                },
                children: selectedPaymentForDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center p-6 border-b border-slate-850 bg-slate-900/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-slate-100 flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "💰 Dönem Ekstresi Detayı"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                lineNumber: 744,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 743,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-1 font-medium",
                                            children: selectedPaymentForDetails.period_start && selectedPaymentForDetails.period_end ? `Kapsanan Dönem: ${new Date(selectedPaymentForDetails.period_start).toLocaleDateString('tr-TR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })} - ${new Date(selectedPaymentForDetails.period_end).toLocaleDateString('tr-TR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}` : `Kapsanan Dönem: Tüm Zamanlar (Maksimum 14 Gün)`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 746,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 742,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPaymentForDetails(null),
                                    className: "w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-900 rounded-lg transition-colors text-2xl",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 754,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                            lineNumber: 741,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 space-y-4 admin-scrollbar bg-slate-950/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/40 border border-slate-850/80 rounded-2xl p-6 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-500 font-extrabold uppercase tracking-wider",
                                                            children: "Makbuz Tutarı"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-3xl font-black text-emerald-400 mt-1",
                                                            children: [
                                                                selectedPaymentForDetails.amount_paid.toLocaleString('tr-TR', {
                                                                    minimumFractionDigits: 2
                                                                }),
                                                                " ₺"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-xs font-black uppercase",
                                                    children: "Tam Ödeme"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 765,
                                            columnNumber: 17
                                        }, this),
                                        selectedPaymentForDetails.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-4 border-t border-slate-800/80 pt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500 font-bold uppercase tracking-wider block mb-1",
                                                    children: "Açıklama / Not:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 21
                                                }, this),
                                                selectedPaymentForDetails.notes
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 777,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 764,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mt-6 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-xs font-bold text-slate-400 uppercase tracking-widest",
                                            children: "📦 İlgili Dönemin Paketleri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 785,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-extrabold text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full",
                                            children: [
                                                drawerOrders.length,
                                                " Paket"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 786,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 784,
                                    columnNumber: 15
                                }, this),
                                loadingDrawerOrders ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-20 text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 793,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium",
                                            children: "Sipariş Denetim İzi Çekiliyor..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 794,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 792,
                                    columnNumber: 17
                                }, this) : drawerOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-20 text-slate-500 bg-slate-900/20 rounded-xl border border-slate-900 border-dashed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Bu ödeme dönemine ait paket bulunamadı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                        lineNumber: 798,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 797,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: drawerOrders.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerOrderRow, {
                                            pkg: pkg
                                        }, pkg.id, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                            lineNumber: 803,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                                    lineNumber: 801,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                            lineNumber: 763,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
                lineNumber: 732,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
_s1(RestaurantDetailModal, "iCdmRGJainYvJFRnhZiDujs4QQA=");
_c1 = RestaurantDetailModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "DrawerOrderRow");
__turbopack_context__.k.register(_c1, "RestaurantDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/calculations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tek merkez: kurye tahsilat, hakediş ve dönem borcu hesapları.
 * Admin + Kurye paneli yalnızca bu modülü kullanmalı.
 */ __turbopack_context__.s([
    "APP_TIMEZONE_OFFSET_HOURS",
    ()=>APP_TIMEZONE_OFFSET_HOURS,
    "assertPackageAmount",
    ()=>assertPackageAmount,
    "calculateCourierCollectionTotals",
    ()=>calculateCourierCollectionTotals,
    "calculateCourierEarnings",
    ()=>calculateCourierEarnings,
    "calculatePeriodAccount",
    ()=>calculatePeriodAccount,
    "calculateSettlementsPaid",
    ()=>calculateSettlementsPaid,
    "getBusinessDayDateTimeLocal",
    ()=>getBusinessDayDateTimeLocal,
    "isCollectionEligible",
    ()=>isCollectionEligible,
    "isEarningsEligible",
    ()=>isEarningsEligible,
    "isExcludedCancellation",
    ()=>isExcludedCancellation,
    "parseFilterInputToUtcIso",
    ()=>parseFilterInputToUtcIso,
    "resolveFilterUtcRange",
    ()=>resolveFilterUtcRange,
    "settlementPaidAmount",
    ()=>settlementPaidAmount,
    "toDateOnly",
    ()=>toDateOnly,
    "toDateTimeLocalValue",
    ()=>toDateTimeLocalValue,
    "wallClockToUtcIso",
    ()=>wallClockToUtcIso
]);
const APP_TIMEZONE_OFFSET_HOURS = 3 // Europe/Istanbul (GMT+3)
;
function assertFiniteNumber(value, field, context) {
    if (value === undefined || value === null) {
        throw new Error(`[calculations] ${field} eksik${context ? ` (${context})` : ''}`);
    }
    const n = Number(value);
    if (!Number.isFinite(n)) {
        throw new Error(`[calculations] ${field} geçersiz sayı: ${String(value)}${context ? ` (${context})` : ''}`);
    }
    return n;
}
function isExcludedCancellation(pkg) {
    return pkg.status === 'cancelled' && pkg.is_chargeable_cancellation !== true;
}
function isEarningsEligible(pkg) {
    if (isExcludedCancellation(pkg)) return false;
    if (pkg.status === 'delivered') return true;
    return pkg.status === 'cancelled' && pkg.is_chargeable_cancellation === true;
}
function isCollectionEligible(pkg) {
    if (isExcludedCancellation(pkg)) return false;
    return pkg.status === 'delivered';
}
function assertPackageAmount(pkg, context) {
    if (!isCollectionEligible(pkg) && !isEarningsEligible(pkg)) {
        throw new Error(`[calculations] Paket hesaba dahil değil: status=${pkg.status} id=${pkg.id} (${context})`);
    }
    return assertFiniteNumber(pkg.amount, 'amount', context);
}
function parseFilterInputToUtcIso(value, boundary) {
    const trimmed = value?.trim();
    if (!trimmed) {
        throw new Error(`[calculations] Tarih filtresi boş (${boundary})`);
    }
    const withTime = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
    if (withTime) {
        const [, y, mo, d, h, mi] = withTime.map(Number);
        if (boundary === 'start') {
            return wallClockToUtcIso(y, mo, d, h, mi, 0, 0);
        }
        return wallClockToUtcIso(y, mo, d, h, mi, 59, 999);
    }
    const dateOnly = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateOnly) {
        const [, y, mo, d] = dateOnly.map(Number);
        if (boundary === 'start') {
            return wallClockToUtcIso(y, mo, d, 0, 0, 0, 0);
        }
        return wallClockToUtcIso(y, mo, d, 23, 59, 59, 999);
    }
    throw new Error(`[calculations] Geçersiz tarih formatı: ${value}`);
}
function wallClockToUtcIso(year, month, day, hour, minute, second, ms) {
    const utcMs = Date.UTC(year, month - 1, day, hour, minute, second, ms) - APP_TIMEZONE_OFFSET_HOURS * 60 * 60 * 1000;
    return new Date(utcMs).toISOString();
}
function toDateTimeLocalValue(d) {
    const shifted = new Date(d.getTime() + APP_TIMEZONE_OFFSET_HOURS * 60 * 60 * 1000);
    const y = shifted.getUTCFullYear();
    const m = String(shifted.getUTCMonth() + 1).padStart(2, '0');
    const day = String(shifted.getUTCDate()).padStart(2, '0');
    const h = String(shifted.getUTCHours()).padStart(2, '0');
    const min = String(shifted.getUTCMinutes()).padStart(2, '0');
    return `${y}-${m}-${day}T${h}:${min}`;
}
function getBusinessDayDateTimeLocal(now = new Date()) {
    const trNow = new Date(now.getTime() + APP_TIMEZONE_OFFSET_HOURS * 60 * 60 * 1000);
    const hour = trNow.getUTCHours();
    const start = new Date(trNow);
    if (hour < 5) {
        start.setUTCDate(start.getUTCDate() - 1);
    }
    start.setUTCHours(5, 0, 0, 0);
    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 1);
    end.setUTCHours(4, 59, 0, 0);
    return {
        start: toDateTimeLocalValue(new Date(start.getTime() - APP_TIMEZONE_OFFSET_HOURS * 60 * 60 * 1000)),
        end: toDateTimeLocalValue(new Date(end.getTime() - APP_TIMEZONE_OFFSET_HOURS * 60 * 60 * 1000))
    };
}
function resolveFilterUtcRange(startInput, endInput) {
    return {
        startIso: parseFilterInputToUtcIso(startInput, 'start'),
        endIso: parseFilterInputToUtcIso(endInput, 'end')
    };
}
function toDateOnly(value) {
    if (!value) throw new Error('[calculations] toDateOnly: boş değer');
    return value.includes('T') ? value.split('T')[0] : value;
}
function calculateCourierCollectionTotals(packages) {
    if (!Array.isArray(packages)) {
        throw new Error('[calculations] packages dizisi değil');
    }
    let cash = 0;
    let card = 0;
    let iban = 0;
    let count = 0;
    for(let i = 0; i < packages.length; i++){
        const pkg = packages[i];
        if (!isCollectionEligible(pkg)) continue;
        const amount = assertFiniteNumber(pkg.amount, `packages[${i}].amount`, 'collection');
        count += 1;
        if (pkg.payment_method === 'cash') cash += amount;
        else if (pkg.payment_method === 'card') card += amount;
        else if (pkg.payment_method === 'iban') iban += amount;
        else {
            throw new Error(`[calculations] Bilinmeyen payment_method: ${String(pkg.payment_method)} id=${pkg.id}`);
        }
    }
    return {
        cash,
        card,
        iban,
        count,
        total: cash + card + iban
    };
}
function calculateCourierEarnings(packages, packageRate) {
    const rate = assertFiniteNumber(packageRate, 'packageRate', 'earnings');
    if (!Array.isArray(packages)) {
        throw new Error('[calculations] packages dizisi değil (earnings)');
    }
    let count = 0;
    for(let i = 0; i < packages.length; i++){
        if (isEarningsEligible(packages[i])) count += 1;
    }
    return {
        count,
        amount: count * rate
    };
}
function calculateSettlementsPaid(settlements) {
    if (!Array.isArray(settlements)) {
        throw new Error('[calculations] settlements dizisi değil');
    }
    let sum = 0;
    for(let i = 0; i < settlements.length; i++){
        const row = settlements[i];
        const paid = row.received_amount !== undefined && row.received_amount !== null ? assertFiniteNumber(row.received_amount, `settlements[${i}].received_amount`) : assertFiniteNumber(row.amount_paid, `settlements[${i}].amount_paid`);
        sum += paid;
    }
    return sum;
}
function calculatePeriodAccount(collectionPackages, settlements, packageRate = 0) {
    const collection = calculateCourierCollectionTotals(collectionPackages);
    const settlementsPaid = calculateSettlementsPaid(settlements);
    const earnings = calculateCourierEarnings(collectionPackages, packageRate);
    const payableDebt = Math.max(0, collection.total - settlementsPaid);
    return {
        ...collection,
        settlementsPaid,
        payableDebt,
        earningsPackageCount: earnings.count,
        earningsAmount: earnings.amount
    };
}
function settlementPaidAmount(row) {
    if (row.received_amount !== undefined && row.received_amount !== null) {
        return assertFiniteNumber(row.received_amount, 'received_amount');
    }
    return assertFiniteNumber(row.amount_paid, 'amount_paid');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/courierLedger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCourierLedgerAccount",
    ()=>fetchCourierLedgerAccount,
    "fetchCourierLedgerPeriodAccount",
    ()=>fetchCourierLedgerPeriodAccount,
    "fetchCourierOpenLedgerPackages",
    ()=>fetchCourierOpenLedgerPackages,
    "fetchCourierOpenLedgerPackagesInRange",
    ()=>fetchCourierOpenLedgerPackagesInRange,
    "fetchCourierUnpaidEarningsPackages",
    ()=>fetchCourierUnpaidEarningsPackages,
    "saveCourierSettlementLedger",
    ()=>saveCourierSettlementLedger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculations.ts [app-client] (ecmascript)");
;
function fetchCourierOpenLedgerPackages(supabase, courierId, select = 'id, amount, payment_method, status, is_chargeable_cancellation, delivered_at, order_number') {
    if (!courierId) {
        throw new Error('[courierLedger] courierId eksik');
    }
    return supabase.from('packages').select(select).eq('delivered_by_courier_id', courierId).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').or('is_courier_settled.is.null,is_courier_settled.eq.false').order('delivered_at', {
        ascending: false
    });
}
function fetchCourierOpenLedgerPackagesInRange(supabase, courierId, startDate, endDate, select = 'id, amount, payment_method, status, is_chargeable_cancellation, delivered_at, order_number') {
    if (!courierId) {
        throw new Error('[courierLedger] courierId eksik');
    }
    return supabase.from('packages').select(select).eq('delivered_by_courier_id', courierId).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').or('is_courier_settled.is.null,is_courier_settled.eq.false').order('delivered_at', {
        ascending: false
    });
}
function fetchCourierUnpaidEarningsPackages(supabase, courierId, select = 'id, amount, payment_method, status, is_chargeable_cancellation, delivered_at, order_number') {
    if (!courierId) {
        throw new Error('[courierLedger] courierId eksik');
    }
    return supabase.from('packages').select(select).eq('delivered_by_courier_id', courierId).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').or('is_courier_earned_paid.is.null,is_courier_earned_paid.eq.false').order('delivered_at', {
        ascending: false
    });
}
async function fetchCourierLedgerAccount(supabase, courierId, packageRate) {
    const { data: packages, error } = await fetchCourierOpenLedgerPackages(supabase, courierId, 'amount, payment_method, status, is_chargeable_cancellation');
    if (error) {
        throw new Error(`[courierLedger] Açık paketler okunamadı: ${error.message}`);
    }
    if (!Array.isArray(packages)) {
        throw new Error('[courierLedger] packages yanıtı dizi değil');
    }
    const collection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCourierCollectionTotals"])(packages);
    const earnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCourierEarnings"])(packages, packageRate);
    return {
        ...collection,
        earningsPackageCount: earnings.count,
        earningsAmount: earnings.amount,
        payableDebt: collection.total
    };
}
async function fetchCourierLedgerPeriodAccount(supabase, courierId, startDate, endDate, packageRate) {
    void startDate;
    void endDate;
    const { data: packages, error } = await fetchCourierOpenLedgerPackages(supabase, courierId, 'amount, payment_method, status, is_chargeable_cancellation');
    if (error) {
        throw new Error(`[courierLedger] Dönem açık paketleri okunamadı: ${error.message}`);
    }
    if (!Array.isArray(packages)) {
        throw new Error('[courierLedger] packages yanıtı dizi değil');
    }
    const { data: earningsPackages, error: earningsError } = await fetchCourierUnpaidEarningsPackages(supabase, courierId, 'amount, payment_method, status, is_chargeable_cancellation');
    if (earningsError) {
        throw new Error(`[courierLedger] Hakediş paketleri okunamadı: ${earningsError.message}`);
    }
    if (!Array.isArray(earningsPackages)) {
        throw new Error('[courierLedger] earningsPackages yanıtı dizi değil');
    }
    const collection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCourierCollectionTotals"])(packages);
    const earnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCourierEarnings"])(earningsPackages, packageRate);
    return {
        ...collection,
        earningsPackageCount: earnings.count,
        earningsAmount: earnings.amount,
        payableDebt: collection.total
    };
}
async function saveCourierSettlementLedger(supabase, courierId, payload, scope) {
    if (!courierId) {
        throw new Error('[courierLedger] courierId eksik');
    }
    const received = Number(payload.received_amount);
    if (!Number.isFinite(received) || received <= 0) {
        throw new Error('[courierLedger] received_amount geçersiz');
    }
    const usePeriod = Boolean(scope?.startDate?.trim()) && Boolean(scope?.endDate?.trim());
    const periodRange = usePeriod ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFilterUtcRange"])(scope.startDate, scope.endDate) : null;
    const { data, error } = await supabase.rpc('save_courier_settlement_transactional', {
        p_courier_id: courierId,
        p_received_amount: received,
        p_total_cash: payload.total_cash,
        p_total_card: payload.total_card,
        p_total_iban: payload.total_iban,
        p_total_earned: payload.total_earned,
        p_remaining_debt: payload.remaining_debt,
        p_notes: payload.notes ?? null,
        p_created_by: payload.created_by ?? 'admin',
        p_start_date: payload.start_date ?? new Date().toISOString().split('T')[0],
        p_end_date: payload.end_date ?? new Date().toISOString().split('T')[0],
        p_scope_start: periodRange?.startIso ?? null,
        p_scope_end: periodRange?.endIso ?? null
    });
    if (error) {
        throw new Error(`[courierLedger] Mutabakat transaction RPC başarısız: ${error.message}`);
    }
    const row = Array.isArray(data) ? data[0] : data;
    const settlementId = row?.settlement_id;
    const packagesMarked = Number(row?.packages_marked ?? 0);
    if (!settlementId) {
        throw new Error('[courierLedger] RPC settlement_id dönmedi');
    }
    if (!Number.isFinite(packagesMarked) || packagesMarked <= 0) {
        throw new Error('[courierLedger] RPC paket işaretleme sonucu geçersiz');
    }
    return {
        settlementId,
        packagesMarked
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndOfDayModalNew",
    ()=>EndOfDayModalNew
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierLedger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/courierLedger.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/components/modals/EndOfDayModalNew.tsx
 * @description Kurye Gün Sonu Mutabakatı — Ledger (courier_settlement_id)
 */ 'use client';
;
;
;
function EndOfDayModalNew({ show, onClose, courier, startDate, endDate, onSuccess }) {
    _s();
    const [cashTotal, setCashTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cardTotal, setCardTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ibanTotal, setIbanTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [deliveryCount, setDeliveryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [amountReceived, setAmountReceived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const loadLedger = async ()=>{
        if (!courier?.id) {
            throw new Error('Kurye ID bulunamadı');
        }
        setLoading(true);
        if (!startDate?.trim() || !endDate?.trim()) {
            throw new Error('Mutabakat için tarih aralığı seçin');
        }
        const account = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierLedger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCourierLedgerPeriodAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"], courier.id, startDate, endDate, courier.package_rate ?? 0);
        setDeliveryCount(account.count);
        setCashTotal(account.cash);
        setCardTotal(account.card);
        setIbanTotal(account.iban);
        const total = account.payableDebt;
        setAmountReceived(total > 0 ? total.toFixed(2) : '');
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndOfDayModalNew.useEffect": ()=>{
            if (!show) return;
            setAmountReceived('');
            setNotes('');
            loadLedger().catch({
                "EndOfDayModalNew.useEffect": (err)=>{
                    console.error(err);
                    alert(err instanceof Error ? err.message : String(err));
                    setLoading(false);
                }
            }["EndOfDayModalNew.useEffect"]);
        }
    }["EndOfDayModalNew.useEffect"], [
        show,
        courier.id,
        courier.package_rate,
        startDate,
        endDate
    ]);
    const handleSubmit = async ()=>{
        setProcessing(true);
        try {
            if (!courier?.id) {
                throw new Error('Kaydetme Başarısız: Kurye ID bulunamadı');
            }
            const confirmed = window.confirm('Tahsilatı onaylıyor musunuz?');
            if (!confirmed) return;
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('process_courier_settlement_flags', {
                p_courier_id: courier.id,
                p_created_by: 'admin',
                p_notes: notes || null
            });
            if (error) {
                throw new Error(`Mutabakat RPC hatası: ${error.message}`);
            }
            const result = data;
            if (!result?.success) {
                throw new Error(result?.error || 'Mutabakat işlemi başarısız');
            }
            const settlementId = result.settlement_id || '—';
            const packagesMarked = Number(result.package_count || 0);
            const totalAmount = Number(result.total_amount || 0);
            alert(`Mutabakat kaydedildi.\nMakbuz: ${settlementId}\nİşaretlenen paket: ${packagesMarked}\nTahsil edilen: ${totalAmount.toFixed(2)} ₺`);
            onSuccess();
            onClose();
        } catch (error) {
            console.error(error);
            const message = error instanceof Error ? error.message : String(error);
            alert(message);
        } finally{
            setProcessing(false);
        }
    };
    if (!show) return null;
    const totalCollection = cashTotal + cardTotal + ibanTotal;
    const received = parseFloat(amountReceived) || 0;
    const totalDebt = totalCollection;
    const difference = received - totalDebt;
    const courierEarnings = (courier.package_rate || 0) * deliveryCount;
    const hesaplananBorc = Math.max(0, totalDebt - received);
    const isFullySettled = deliveryCount === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 border border-slate-800 rounded-lg max-w-xl w-full max-h-[92vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-6 py-4 border-b border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-slate-100 tracking-tight",
                                    children: "Gün Sonu Mutabakatı"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 tracking-tight mt-0.5",
                                    children: [
                                        courier.full_name,
                                        " · ",
                                        startDate,
                                        " — ",
                                        endDate
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                onClose();
                            },
                            className: "text-slate-500 hover:text-slate-200 text-xl w-8 h-8 flex items-center justify-center rounded hover:bg-slate-800 transition-colors",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(92vh-72px)] bg-slate-950",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-600 tracking-tight",
                                children: "Hesaplanıyor..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this) : isFullySettled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-emerald-900/20 border border-emerald-800/40 rounded-lg p-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl block mb-2",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-emerald-400 tracking-tight",
                                        children: "Açık cari yok"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 mt-1",
                                        children: "Tüm teslimler mutabakata bağlanmış."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "w-full px-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded text-xs font-medium border border-slate-800",
                                children: "Kapat"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-600 tracking-tight uppercase mb-2 font-medium",
                                        children: "Tahsilat Bilgileri (seçili dönem, mutabakat bekleyen)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 border border-slate-800 rounded p-3 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 tracking-tight",
                                                        children: "Nakit Toplam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-bold text-emerald-500 tracking-tight",
                                                        children: [
                                                            cashTotal.toFixed(2),
                                                            "₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 border border-slate-800 rounded p-3 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 tracking-tight",
                                                        children: "Kart Toplam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-bold text-orange-400 tracking-tight",
                                                        children: [
                                                            cardTotal.toFixed(2),
                                                            "₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 border border-slate-800 rounded p-3 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 tracking-tight",
                                                        children: "IBAN Toplam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-bold text-blue-400 tracking-tight",
                                                        children: [
                                                            ibanTotal.toFixed(2),
                                                            "₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-600 tracking-tight uppercase mb-2 font-medium",
                                        children: "Kurye Performansı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-900 border border-slate-800 rounded p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 tracking-tight",
                                                        children: "Attığı Paket"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold text-slate-100 tracking-tight",
                                                        children: deliveryCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center pt-3 border-t border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-500 tracking-tight",
                                                                children: "Kurye Kazancı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-slate-600 mt-0.5",
                                                                children: courier.package_rate ? `${deliveryCount} × ${courier.package_rate}₺` : 'Paket ücreti belirlenmedi'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold text-emerald-500 tracking-tight",
                                                        children: [
                                                            courierEarnings.toFixed(0),
                                                            "₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-900/20 border border-amber-700/40 rounded p-3 mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-amber-400 tracking-tight text-center",
                                    children: "⚠️ NAKİT + KART + IBAN = TOPLAM TAHSİLAT, HAKEDİŞ AYRICA ÖDENİR"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-rose-900/20 border border-rose-800/40 rounded-lg p-4 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-rose-400 tracking-tight uppercase mb-2 font-medium",
                                        children: "Toplam Kalan Borç"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-black text-rose-400 tracking-tight mb-1",
                                        children: [
                                            hesaplananBorc.toFixed(2),
                                            "₺"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-rose-500/60 tracking-tight",
                                        children: "Seçili dönemdeki açık paketlerin tahsilat toplamı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 tracking-tight mb-1.5 font-medium uppercase",
                                        children: "Kuryeden Alınan Tutar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "0.01",
                                        value: amountReceived,
                                        onChange: (e)=>setAmountReceived(e.target.value),
                                        placeholder: `${totalDebt.toFixed(2)}`,
                                        autoFocus: true,
                                        className: "w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded text-lg font-bold text-slate-100 placeholder-slate-600 outline-none focus:border-emerald-500 transition-colors tracking-tight"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-slate-400 tracking-tight mb-1.5 font-medium uppercase",
                                        children: "Not (Opsiyonel)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value),
                                        placeholder: "Eksik ödeme notu...",
                                        rows: 2,
                                        className: "w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded text-sm text-slate-300 placeholder-slate-600 outline-none focus:border-emerald-500 transition-colors tracking-tight resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this),
                            amountReceived && !isNaN(parseFloat(amountReceived)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5",
                                children: difference < 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-rose-900/20 border border-rose-800/40 rounded p-3 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-rose-400 font-medium",
                                            children: "EKSİK ÖDEME"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                            lineNumber: 291,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-black text-rose-500",
                                            children: [
                                                Math.abs(difference).toFixed(2),
                                                "₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                            lineNumber: 292,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                    lineNumber: 290,
                                    columnNumber: 21
                                }, this) : difference > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-900/20 border border-emerald-800/40 rounded p-3 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-emerald-400 font-medium",
                                            children: "FAZLA ÖDEME"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                            lineNumber: 296,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-black text-emerald-500",
                                            children: [
                                                "+",
                                                difference.toFixed(2),
                                                "₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                            lineNumber: 297,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                    lineNumber: 295,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-900/20 border border-emerald-800/40 rounded p-3 text-center text-sm font-bold text-emerald-400",
                                    children: "TAM ÖDEME"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                    lineNumber: 300,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 288,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        disabled: processing,
                                        className: "flex-1 px-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded text-xs font-medium border border-slate-800 disabled:opacity-50",
                                        children: "İptal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSubmit,
                                        disabled: processing || !amountReceived,
                                        className: "flex-1 px-3 py-2.5 bg-emerald-900/60 hover:bg-emerald-900/80 text-emerald-300 rounded text-xs font-medium border border-emerald-800/50 disabled:opacity-50",
                                        children: processing ? 'Kaydediliyor...' : 'Mutabakatı Kaydet'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                                lineNumber: 307,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(EndOfDayModalNew, "StR3VsLYyAsQWzzrbYVJGR76+GI=");
_c = EndOfDayModalNew;
var _c;
__turbopack_context__.k.register(_c, "EndOfDayModalNew");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/modals/PayDebtModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PayDebtModal",
    ()=>PayDebtModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-client] (ecmascript)");
/**
 * @file src/app/admin/components/modals/PayDebtModal.tsx
 * @description Kurye Borç Ödeme Modalı.
 * Kuryelerin geçmişten kalan borçlarını (açıklarını) kapatmak için kullanılır. 
 * Kısmi ödeme veya tam ödeme imkanı sunar, ödeme sonrası kalan borç miktarını anlık hesaplar.
 */ 'use client';
;
;
function PayDebtModal({ show, onClose, courier, selectedCourierId, payDebtAmount, setPayDebtAmount, onConfirm, processing, courierDebts, loadingDebts }) {
    if (!show || !selectedCourierId || !courier) return null;
    const totalDebt = courierDebts.reduce((sum, d)=>sum + d.remaining_amount, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto admin-scrollbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-slate-900",
                            children: [
                                "💳 Borç Ödemesi - ",
                                courier.full_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 mt-1",
                            children: new Date().toLocaleDateString('tr-TR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: loadingDebts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                lineNumber: 58,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500",
                                children: "Borçlar yükleniyor..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                lineNumber: 59,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                        lineNumber: 57,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-slate-900 mb-4",
                                        children: "📋 Mevcut Borçlar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, this),
                                    courierDebts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-2",
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 69,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Ödenmemiş borç yok"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 70,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mb-4",
                                        children: courierDebts.map((debt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center bg-red-50 p-3 rounded-lg border border-red-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-700",
                                                        children: [
                                                            "📅 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTurkishDate"])(debt.debt_date),
                                                            " gününden kalan"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-bold text-red-600",
                                                        children: [
                                                            debt.remaining_amount.toFixed(2),
                                                            " ₺"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, debt.id, true, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 75,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 37
                                    }, this),
                                    courierDebts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-100 p-4 rounded-xl border-2 border-red-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-bold text-red-700",
                                                    children: "💰 TOPLAM BORÇ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-black text-red-700",
                                                    children: [
                                                        totalDebt.toFixed(2),
                                                        " ₺"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                lineNumber: 64,
                                columnNumber: 29
                            }, this),
                            courierDebts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700 mb-2",
                                                children: "💵 Ödenen Tutar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 106,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.01",
                                                value: payDebtAmount,
                                                onChange: (e)=>setPayDebtAmount(e.target.value),
                                                placeholder: "Örn: 50.00",
                                                autoFocus: true,
                                                className: "w-full px-4 py-3 bg-slate-800 border-slate-700-2 border-slate-300 rounded-xl text-lg font-bold text-slate-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 37
                                    }, this),
                                    payDebtAmount && !isNaN(parseFloat(payDebtAmount)) && (()=>{
                                        const payment = parseFloat(payDebtAmount);
                                        const remaining = totalDebt - payment;
                                        if (payment > totalDebt) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-yellow-50 p-4 rounded-xl border-2 border-yellow-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-black text-yellow-700",
                                                                children: "⚠️ UYARI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-yellow-600 mt-2",
                                                                children: "Ödeme tutarı toplam borçtan fazla olamaz!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 127,
                                                columnNumber: 49
                                            }, this);
                                        } else if (remaining > 0) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-orange-50 p-4 rounded-xl border-2 border-orange-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-base font-bold text-orange-700",
                                                                    children: "📉 KALAN BORÇ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-black text-orange-700",
                                                                    children: [
                                                                        remaining.toFixed(2),
                                                                        " ₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-orange-600 mt-2",
                                                            children: "Kısmi ödeme yapılıyor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 142,
                                                columnNumber: 49
                                            }, this);
                                        } else {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-green-50 p-4 rounded-xl border-2 border-green-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-black text-green-700",
                                                                children: "✓ TAM ÖDEME"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-green-600 mt-2",
                                                                children: "Borç tamamen kapanacak"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 160,
                                                columnNumber: 49
                                            }, this);
                                        }
                                    })(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onClose,
                                                className: "flex-1 px-4 py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300:bg-slate-600 transition-colors",
                                                children: "İptal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 178,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onConfirm,
                                                disabled: processing || !payDebtAmount || parseFloat(payDebtAmount) > totalDebt,
                                                className: "flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 53
                                                        }, this),
                                                        "İşleniyor..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 49
                                                }, this) : '✓ Ödemeyi Onayla'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                                lineNumber: 184,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                                        lineNumber: 177,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/components/modals/PayDebtModal.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = PayDebtModal;
var _c;
__turbopack_context__.k.register(_c, "PayDebtModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RestaurantPaymentModal",
    ()=>RestaurantPaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/components/modals/RestaurantPaymentModal.tsx
 * @description Restoran Ödeme Onay Modalı — Paket Bazlı is_paid Mimarisi
 *
 * YENİ SİSTEM:
 * - Kullanıcı tutar GİRMEZ. Sistem net ödenmesi gerekeni hesaplar.
 * - "Onayla" dediğinde filtrelenen tarih aralığındaki tüm paketler ödendi olarak işaretlenir.
 * - Filtre dışı paketlere DOKUNULMAZ.
 */ 'use client';
;
function RestaurantPaymentModal({ show, onClose, restaurant, selectedRestaurantId, guncelBakiye, restaurantPaymentAmount, setRestaurantPaymentAmount, onConfirm, processing, startDate, endDate }) {
    _s();
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localError, setLocalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestaurantPaymentModal.useEffect": ()=>{
            if (show) {
                setShowConfetti(false);
                setLocalError(null);
            }
        }
    }["RestaurantPaymentModal.useEffect"], [
        show
    ]);
    if (!show || !selectedRestaurantId || !restaurant) return null;
    const handleConfirmPayment = async ()=>{
        setLocalError(null);
        try {
            // 🔥 KRİTİK: Ödeme işlemini BEKLE (atomik RPC)
            await onConfirm();
            // Başarılıysa konfeti göster
            setShowConfetti(true);
            setTimeout(()=>{
                setShowConfetti(false);
                onClose();
            }, 2000);
        } catch (error) {
            console.error('❌ Ödeme hatası:', error);
            // Hata mesajını modal içinde göster (modal kapanmasın!)
            const errorMsg = error?.message || 'Beklenmeyen bir hata oluştu';
            // "❌" ile başlayan mesajları aynen göster, diğerlerine prefix ekle
            setLocalError(errorMsg.startsWith('❌') ? errorMsg : `❌ ${errorMsg}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4",
        onClick: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            if (!showConfetti) onClose();
        },
        children: [
            showConfetti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-[70] flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center animate-bounce",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-8xl mb-4",
                                children: "🎉"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl font-black text-emerald-400 mb-2",
                                children: "ÖDEME BAŞARILI!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl text-emerald-300",
                                children: "Paketler ödendi olarak işaretlendi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: [
                            ...Array(20)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute animate-ping",
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 0.5}s`,
                                    fontSize: `${Math.random() * 20 + 20}px`
                                },
                                children: [
                                    '🎊',
                                    '✨',
                                    '💰',
                                    '✅',
                                    '🎉'
                                ][Math.floor(Math.random() * 5)]
                            }, i, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-950 rounded-2xl max-w-lg w-full border border-slate-800 shadow-2xl",
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center p-6 border-b border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-black text-white",
                                        children: "💰 Dönem Ödemesi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-400 mt-1 font-medium",
                                        children: restaurant.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    onClose();
                                },
                                className: "text-slate-400 hover:text-white transition-colors text-2xl ml-4 hover:bg-slate-800 rounded-lg w-10 h-10 flex items-center justify-center",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            startDate && endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 uppercase tracking-wider font-bold mb-1",
                                        children: "Seçili Dönem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-white",
                                        children: [
                                            startDate,
                                            " — ",
                                            endDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-emerald-900/40 to-emerald-950/40 p-6 rounded-2xl border-2 border-emerald-500/30 shadow-2xl shadow-emerald-900/30 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-emerald-400/70 text-xs font-bold uppercase tracking-wider mb-2",
                                            children: "Net Ödenecek Tutar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-5xl font-black mb-2 tracking-tight ${guncelBakiye > 0 ? 'text-emerald-300' : 'text-slate-400'}`,
                                            children: [
                                                guncelBakiye.toFixed(2),
                                                " ₺"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-emerald-400/60 text-xs font-medium",
                                            children: guncelBakiye > 0 ? 'Bu dönemdeki ödenmemiş paketlerin net tutarı' : '✓ Bu dönemde ödenmemiş paket yok'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            localError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-rose-950/60 border border-rose-500/50 rounded-xl p-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-300 text-sm font-bold",
                                        children: localError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-400/70 text-xs mt-1",
                                        children: "Hata devam ediyorsa lütfen veritabanı bağlantısını kontrol edin veya sayfayı yenileyin."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-950/30 p-4 rounded-xl border border-amber-700/30 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-400 text-sm font-bold mb-1",
                                        children: "⚠️ Dikkat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-300/70 text-xs leading-relaxed",
                                        children: [
                                            "Bu işlem, seçili dönemdeki tüm ödenmemiş paketleri ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: '"ödendi"'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                                lineNumber: 171,
                                                columnNumber: 66
                                            }, this),
                                            " olarak işaretleyecektir. Filtre dışındaki paketlere dokunulmaz. Bu işlem geri alınamaz."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onClose();
                                        },
                                        className: "flex-1 px-4 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-colors border border-slate-700",
                                        children: "İptal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleConfirmPayment();
                                        },
                                        disabled: processing || guncelBakiye <= 0,
                                        className: "flex-1 px-4 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/20",
                                        children: processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                "İşleniyor..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this) : '✓ Ödemeyi Onayla'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(RestaurantPaymentModal, "bJf6+MNOipeT+YRM7DspRp+sN/w=");
_c = RestaurantPaymentModal;
var _c;
__turbopack_context__.k.register(_c, "RestaurantPaymentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lib/platformUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Platform Badge Utility
// Platforma göre renk ve stil döndürür
__turbopack_context__.s([
    "getPlatformBadgeClass",
    ()=>getPlatformBadgeClass,
    "getPlatformDisplayName",
    ()=>getPlatformDisplayName
]);
function getPlatformBadgeClass(platform) {
    if (!platform) {
        return 'bg-slate-700 text-slate-300';
    }
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('trendyol')) {
        return 'bg-orange-500/20 text-orange-500';
    }
    if (platformLower.includes('getir')) {
        return 'bg-purple-500/20 text-purple-500';
    }
    if (platformLower.includes('yemeksepeti')) {
        return 'bg-red-500/20 text-red-500';
    }
    if (platformLower.includes('migros')) {
        return 'bg-yellow-500/20 text-yellow-500';
    }
    return 'bg-slate-700 text-slate-300';
}
function getPlatformDisplayName(platform) {
    if (!platform) {
        return 'Diğer';
    }
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('trendyol')) {
        return 'Trendyol';
    }
    if (platformLower.includes('getir')) {
        return 'Getir';
    }
    if (platformLower.includes('yemeksepeti')) {
        return 'Yemeksepeti';
    }
    if (platformLower.includes('migros')) {
        return 'Migros';
    }
    return platform.charAt(0).toUpperCase() + platform.slice(1);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePersistedDateRange.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePersistedDateRange",
    ()=>usePersistedDateRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function readStored(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed?.start && parsed?.end) return parsed;
    } catch  {
    /* ignore */ }
    return null;
}
function writeStored(key, range) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    sessionStorage.setItem(key, JSON.stringify(range));
}
function usePersistedDateRange(storageKey) {
    _s();
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "usePersistedDateRange.useState": ()=>{
            initializedRef.current = true;
            return readStored(storageKey) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBusinessDayDateTimeLocal"])();
        }
    }["usePersistedDateRange.useState"]);
    const setStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePersistedDateRange.useCallback[setStartDate]": (start)=>{
            setRange({
                "usePersistedDateRange.useCallback[setStartDate]": (prev)=>{
                    const next = {
                        ...prev,
                        start
                    };
                    writeStored(storageKey, next);
                    return next;
                }
            }["usePersistedDateRange.useCallback[setStartDate]"]);
        }
    }["usePersistedDateRange.useCallback[setStartDate]"], [
        storageKey
    ]);
    const setEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePersistedDateRange.useCallback[setEndDate]": (end)=>{
            setRange({
                "usePersistedDateRange.useCallback[setEndDate]": (prev)=>{
                    const next = {
                        ...prev,
                        end
                    };
                    writeStored(storageKey, next);
                    return next;
                }
            }["usePersistedDateRange.useCallback[setEndDate]"]);
        }
    }["usePersistedDateRange.useCallback[setEndDate]"], [
        storageKey
    ]);
    const applyPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePersistedDateRange.useCallback[applyPreset]": (preset)=>{
            writeStored(storageKey, preset);
            setRange(preset);
        }
    }["usePersistedDateRange.useCallback[applyPreset]"], [
        storageKey
    ]);
    /** Dışarıdan bugüne zorla yazmayı engellemek için ref — effect'lerde kullanma */ const getRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePersistedDateRange.useCallback[getRange]": ()=>range
    }["usePersistedDateRange.useCallback[getRange]"], [
        range
    ]);
    return {
        startDate: range.start,
        endDate: range.end,
        setStartDate,
        setEndDate,
        applyPreset,
        getRange,
        storageKey
    };
}
_s(usePersistedDateRange, "CD2ISvE1XrZrUj+M8FZ5mnRYFEY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/courierAccount.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computePeriodPayableDebt",
    ()=>computePeriodPayableDebt,
    "fetchCourierCollectionPackages",
    ()=>fetchCourierCollectionPackages,
    "fetchCourierDeliveredPackages",
    ()=>fetchCourierDeliveredPackages,
    "fetchCourierLifetimeDebt",
    ()=>fetchCourierLifetimeDebt,
    "fetchCourierPeriodAccount",
    ()=>fetchCourierPeriodAccount,
    "fetchCourierPeriodSettlements",
    ()=>fetchCourierPeriodSettlements,
    "fetchCourierUnsettledPackages",
    ()=>fetchCourierUnsettledPackages,
    "markCourierCollectionSettled",
    ()=>markCourierCollectionSettled,
    "sumCollectionByPaymentMethod",
    ()=>sumCollectionByPaymentMethod,
    "toFilterIso",
    ()=>toFilterIso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculations.ts [app-client] (ecmascript)");
;
;
function toFilterIso(value, boundary) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFilterInputToUtcIso"])(value, boundary);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyCourierDeliveryFilter(query, courierId) {
    return query.or(`delivered_by_courier_id.eq.${courierId},and(courier_id.eq.${courierId},delivered_by_courier_id.is.null)`);
}
async function fetchCourierCollectionPackages(supabase, courierId, startDate, endDate, select = 'amount, payment_method, status, is_chargeable_cancellation') {
    const { startIso, endIso } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFilterUtcRange"])(startDate, endDate);
    let query = supabase.from('packages').select(select).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').is('courier_settlement_id', null).is('courier_settled_at', null).gte('delivered_at', startIso).lte('delivered_at', endIso);
    query = applyCourierDeliveryFilter(query, courierId);
    return query;
}
const fetchCourierUnsettledPackages = fetchCourierCollectionPackages;
async function fetchCourierDeliveredPackages(supabase, courierId, startDate, endDate, select = '*, restaurants(name, phone, address)') {
    const { startIso, endIso } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFilterUtcRange"])(startDate, endDate);
    let query = supabase.from('packages').select(select, {
        count: 'exact'
    }).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').gte('delivered_at', startIso).lte('delivered_at', endIso).order('delivered_at', {
        ascending: false
    });
    query = applyCourierDeliveryFilter(query, courierId);
    return query;
}
async function fetchCourierPeriodSettlements(supabase, courierId, startDate, endDate) {
    const rangeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDateOnly"])(startDate);
    const rangeEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDateOnly"])(endDate);
    const withReceived = await supabase.from('courier_settlements').select('amount_paid, received_amount').eq('courier_id', courierId).lte('start_date', rangeEnd).gte('end_date', rangeStart);
    if (!withReceived.error) return withReceived;
    return supabase.from('courier_settlements').select('amount_paid').eq('courier_id', courierId).lte('start_date', rangeEnd).gte('end_date', rangeStart);
}
async function fetchCourierPeriodAccount(supabase, courierId, startDate, endDate, packageRate = 0) {
    const { data: packages, error: packagesError } = await fetchCourierCollectionPackages(supabase, courierId, startDate, endDate);
    if (packagesError) throw packagesError;
    const { data: settlements, error: settlementsError } = await fetchCourierPeriodSettlements(supabase, courierId, startDate, endDate);
    if (settlementsError) throw settlementsError;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePeriodAccount"])(packages || [], settlements || [], packageRate);
}
async function markCourierCollectionSettled(supabase, courierId, startDate, endDate) {
    const { startIso, endIso } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFilterUtcRange"])(startDate, endDate);
    const settledAt = new Date().toISOString();
    let query = supabase.from('packages').update({
        courier_settled_at: settledAt
    }).eq('status', 'delivered').is('courier_settled_at', null).gte('delivered_at', startIso).lte('delivered_at', endIso);
    query = applyCourierDeliveryFilter(query, courierId);
    return query;
}
async function fetchCourierLifetimeDebt(supabase, courierId) {
    const { fetchCourierLedgerAccount } = await __turbopack_context__.A("[project]/src/utils/courierLedger.ts [app-client] (ecmascript, async loader)");
    const account = await fetchCourierLedgerAccount(supabase, courierId, 0);
    return account.payableDebt;
}
function sumCollectionByPaymentMethod(packages) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateCourierCollectionTotals"])(packages);
}
function computePeriodPayableDebt(totals, settlementsPaid) {
    return Math.max(0, totals.total - settlementsPaid);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/hooks/useAdminCourierModal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminCourierModal",
    ()=>useAdminCourierModal
]);
/**
 * @file src/app/admin/hooks/useAdminCourierModal.ts
 * @description Kurye Modal Yönetimi Custom Hook
 * 
 * ÖNEMLİ: Bu dosyadaki tüm mantık AdminModals.tsx'ten birebir taşınmıştır.
 * HİÇBİR MANTIK DEĞİŞİKLİĞİ YAPILMAMIŞTIR.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePersistedDateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePersistedDateRange.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/utils/courierAccount.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAdminCourierModal({ courierId, modalType, setSuccessMessage, setErrorMessage, fetchCouriers }) {
    _s();
    const [selectedCourierOrders, setSelectedCourierOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [courierDebts, setCourierDebts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const dateStorageKey = courierId ? `admin-courier-range-${courierId}` : 'admin-courier-range';
    const { startDate: courierStartDate, endDate: courierEndDate, setStartDate: setCourierStartDate, setEndDate: setCourierEndDate, applyPreset: applyCourierDatePreset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePersistedDateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistedDateRange"])(dateStorageKey);
    const [loadingDebts, setLoadingDebts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEndOfDayModal, setShowEndOfDayModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [endOfDayAmount, setEndOfDayAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [endOfDayProcessing, setEndOfDayProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPayDebtModal, setShowPayDebtModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payDebtAmount, setPayDebtAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [payDebtProcessing, setPayDebtProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize dates - Varsayılan olarak bugün
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAdminCourierModal.useEffect": ()=>{
            if (modalType === 'courier' && courierId) {
                fetchCourierOrders(courierId);
                fetchCourierDebts(courierId);
            }
        }
    }["useAdminCourierModal.useEffect"], [
        modalType,
        courierId,
        courierStartDate,
        courierEndDate
    ]);
    // Fetch Courier Orders - delivered_by_courier_id kullan (kurye değişikliğinde bile doğru kurye görünsün)
    const fetchCourierOrders = async (id)=>{
        try {
            let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, restaurants(*)').eq('delivered_by_courier_id', id) // courier_id yerine delivered_by_courier_id
            .eq('status', 'delivered').order('delivered_at', {
                ascending: false
            });
            if (courierStartDate && courierEndDate) {
                query = query.gte('delivered_at', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toFilterIso"])(courierStartDate, 'start')).lte('delivered_at', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toFilterIso"])(courierEndDate, 'end'));
            }
            const { data, error } = await query;
            if (error) throw error;
            const transformedData = (data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: Array.isArray(pkg.restaurants) && pkg.restaurants.length > 0 ? pkg.restaurants[0] : pkg.restaurants || null,
                    restaurants: undefined
                }));
            setSelectedCourierOrders(transformedData);
        } catch (error) {
            console.error('Kurye siparişleri yüklenirken hata:', error.message);
        }
    };
    // Fetch Courier Debts - ORİJİNAL MANTIK
    const fetchCourierDebts = async (id)=>{
        setLoadingDebts(true);
        try {
            console.warn('[ledger] courier_debts devre dışı. Kurye borcu courier_settlements üzerinden takip edilir.');
            setCourierDebts([]);
        } catch (error) {
            console.error('Borçlar yüklenemedi:', error);
            setCourierDebts([]);
        } finally{
            setLoadingDebts(false);
        }
    };
    // Handle End of Day - ORİJİNAL MANTIK
    const handleEndOfDay = async (calculateCashSummary)=>{
        void calculateCashSummary;
        setErrorMessage('Legacy gün sonu (courier_debts) devre dışı. Yeni akış: Ledger mutabakatı.');
        setTimeout(()=>setErrorMessage(''), 4000);
    };
    // Handle Pay Debt - ORİJİNAL MANTIK
    const handlePayDebt = async ()=>{
        if (!courierId) return;
        void payDebtAmount;
        setPayDebtProcessing(true);
        setErrorMessage('Legacy borç ödeme (courier_debts) devre dışı. Kurye borcu yalnızca ledger üzerinden takip edilir.');
        setTimeout(()=>setErrorMessage(''), 4000);
        setPayDebtProcessing(false);
    };
    return {
        // State
        selectedCourierOrders,
        courierDebts,
        courierStartDate,
        setCourierStartDate,
        courierEndDate,
        setCourierEndDate,
        loadingDebts,
        showEndOfDayModal,
        setShowEndOfDayModal,
        endOfDayAmount,
        setEndOfDayAmount,
        endOfDayProcessing,
        showPayDebtModal,
        setShowPayDebtModal,
        payDebtAmount,
        setPayDebtAmount,
        payDebtProcessing,
        // Functions
        fetchCourierOrders,
        fetchCourierDebts,
        handleEndOfDay,
        handlePayDebt
    };
}
_s(useAdminCourierModal, "cL3IwJJEnFsgI+3/f1haUvBn/io=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePersistedDateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistedDateRange"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/hooks/useAdminRestaurantModal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminRestaurantModal",
    ()=>useAdminRestaurantModal
]);
/**
 * @file src/app/admin/hooks/useAdminRestaurantModal.ts
 * @description Restoran Modal Yönetimi — Paket Bazlı is_paid_to_restaurant Mimarisi
 *
 * YENİ SİSTEM:
 * - processRestaurantPayment RPC ile atomik ödeme
 * - Tarih aralığı zorunlu (filtrelenen dönem ödenir)
 * - Filtre dışı paketlere dokunulmaz
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$restaurantService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/restaurantService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAdminRestaurantModal({ restaurantId, modalType, setSuccessMessage, setErrorMessage, fetchRestaurants, parentStartDate, parentEndDate }) {
    _s();
    // ── Ödeme Modalı State ──────────────────────────────────────
    const [showRestaurantPaymentModal, setShowRestaurantPaymentModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [restaurantPaymentAmount, setRestaurantPaymentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [restaurantPaymentProcessing, setRestaurantPaymentProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Dönem bakiyesi — RestaurantDetailModal'dan gelir
    const [guncelBakiye, setGuncelBakiye] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Refetch trigger — ödeme sonrası RestaurantDetailModal'ı yenile
    const [refetchTrigger, setRefetchTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // ── Tarih State'leri ────────────────────────────────────────
    const [restaurantStartDate, setRestaurantStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(parentStartDate || '');
    const [restaurantEndDate, setRestaurantEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(parentEndDate || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAdminRestaurantModal.useEffect": ()=>{
            if (parentStartDate && parentEndDate) {
                setRestaurantStartDate(parentStartDate);
                setRestaurantEndDate(parentEndDate);
            }
        }
    }["useAdminRestaurantModal.useEffect"], [
        parentStartDate,
        parentEndDate
    ]);
    // ── ÖDEME İŞLEMİ (YENİ SİSTEM) ──────────────────────────────
    /**
   * p_end_date'e kadar tüm ödenmemiş paketleri kapatır (geçmiş dahil).
   * Atomik RPC: packages UPDATE + payment INSERT tek transaction.
   */ const handleRestaurantPayment = async ()=>{
        // 1. Restoran ID kontrolü
        if (!restaurantId) {
            const errMsg = '❌ Restoran ID bulunamadı!';
            setErrorMessage(errMsg);
            setTimeout(()=>setErrorMessage(''), 5000);
            throw new Error(errMsg) // PaymentModal'ın catch bloğunu tetikle
            ;
        }
        // 2. Bitiş tarihi kontrolü — boşsa parentEndDate'i fallback olarak kullan
        const effectiveEndDate = restaurantEndDate || parentEndDate || '';
        if (!effectiveEndDate) {
            const errMsg = '❌ Bitiş tarihi seçilmeli! Lütfen ana ekrandan tarih filtresi seçin.';
            setErrorMessage(errMsg);
            setTimeout(()=>setErrorMessage(''), 5000);
            throw new Error(errMsg);
        }
        setRestaurantPaymentProcessing(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$restaurantService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processRestaurantPayment"])(restaurantId, restaurantStartDate || parentStartDate || '', effectiveEndDate, `Bakiye Kapatıldı — ${effectiveEndDate} tarihine kadar`);
            if (result.success) {
                const msg = result.message || '✅ Ödeme başarıyla kaydedildi';
                const detail = result.data ? ` (${result.data.package_count} paket, ${result.data.net_paid?.toFixed(2)} ₺ net)` : '';
                setSuccessMessage(msg + detail);
                setTimeout(()=>setSuccessMessage(''), 4000);
                // UI anında güncelle
                setGuncelBakiye(0);
                setRestaurantPaymentAmount('');
                // Listeleri yenile — anında refetch (timeout yok)
                fetchRestaurants();
                setRefetchTrigger((prev)=>prev + 1);
            // 🚪 Modal'ı kapatmayı PaymentModal'a bırak (konfeti sonrası)
            // setShowRestaurantPaymentModal(false) — PaymentModal zaten onClose çağıracak
            } else {
                // Başarısız sonuç → throw et ki PaymentModal hata gösterebilsin
                const errMsg = result.error || 'Ödeme kaydedilemedi';
                setErrorMessage(`❌ ${errMsg}`);
                setTimeout(()=>setErrorMessage(''), 8000);
                throw new Error(errMsg);
            }
        } catch (error) {
            console.error('❌ handleRestaurantPayment CATCH:', error);
            // Eğer hata zaten setErrorMessage ile gösterilmemişse göster
            if (!error.message?.includes('Ödeme kaydedilemedi') && !error.message?.includes('❌')) {
                const errMsg = `❌ Beklenmeyen hata: ${error.message || 'Bilinmeyen hata'}`;
                setErrorMessage(errMsg);
                setTimeout(()=>setErrorMessage(''), 8000);
            }
            throw error // PaymentModal'ın catch bloğunu tetikle
            ;
        } finally{
            setRestaurantPaymentProcessing(false);
        }
    };
    return {
        // Ödeme Modal State
        showRestaurantPaymentModal,
        setShowRestaurantPaymentModal,
        restaurantPaymentAmount,
        setRestaurantPaymentAmount,
        restaurantPaymentProcessing,
        // Bakiye
        guncelBakiye,
        setGuncelBakiye,
        // Refetch
        refetchTrigger,
        // Tarih
        restaurantStartDate,
        setRestaurantStartDate,
        restaurantEndDate,
        setRestaurantEndDate,
        // İşlemler
        handleRestaurantPayment
    };
}
_s(useAdminRestaurantModal, "2giGHqDHD9uxMJnjQDuE5SzhqZU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/AdminModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminModals",
    ()=>AdminModals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/AdminDataProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$CourierDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/modals/CourierDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$RestaurantDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/modals/RestaurantDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$EndOfDayModalNew$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/modals/EndOfDayModalNew.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$PayDebtModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/modals/PayDebtModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$RestaurantPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/modals/RestaurantPaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$hooks$2f$useAdminCourierModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/hooks/useAdminCourierModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$hooks$2f$useAdminRestaurantModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/hooks/useAdminRestaurantModal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/AdminModals.tsx
 * @description Admin Panel Modal Yöneticisi
 * 
 * REFACTOR: RestaurantDetailModal artık STATELESS.
 * - Kendi tarih state'i yok → globalStartDate/globalEndDate proplarıyla çalışır
 * - show prop'u yok → conditional render ile açılıp kapanır  
 * - closeModal → router.back() yerine URL temizleme (çifte-back problemi çözüldü)
 * - Auto-fetch: Modal mount olduğu an veri çeker
 */ 'use client';
;
;
;
;
;
;
;
;
;
;
function AdminModals() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { couriers, restaurants, setSuccessMessage, setErrorMessage, fetchCouriers, fetchRestaurants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"])();
    const modalType = searchParams.get('modal');
    const courierId = searchParams.get('courierId');
    const restaurantId = searchParams.get('restaurantId');
    // 🎯 Ana sayfadan gelen tarih parametrelerini oku
    const parentStartDate = searchParams.get('parentStartDate');
    const parentEndDate = searchParams.get('parentEndDate');
    // Kurye Modal Hook
    const courierModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$hooks$2f$useAdminCourierModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminCourierModal"])({
        courierId,
        modalType,
        setSuccessMessage,
        setErrorMessage,
        fetchCouriers
    });
    // Restoran Modal Hook (ödeme ve borç modalleri için hâlâ lazım)
    const restaurantModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$hooks$2f$useAdminRestaurantModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminRestaurantModal"])({
        restaurantId,
        modalType,
        setSuccessMessage,
        setErrorMessage,
        fetchRestaurants,
        parentStartDate,
        parentEndDate
    });
    // 🔥 CLEAN CLOSE: URL parametrelerini temizle, router.back() KULLANMA!
    // router.back() çifte-back sorununa neden oluyordu.
    const closeModal = ()=>{
        router.replace(pathname, {
            scroll: false
        });
    };
    const courier = couriers.find((c)=>c.id === courierId);
    const restaurant = restaurants.find((r)=>r.id === restaurantId);
    // 🎯 RestaurantDetailModal için tarih hesaplama
    // Parent'tan tarih geliyorsa onu kullan, yoksa Business Day (05:00) mantığı
    const getGlobalDates = ()=>{
        if (parentStartDate && parentEndDate) {
            return {
                start: parentStartDate,
                end: parentEndDate
            };
        }
        // Fallback: Business Day (bugün)
        const now = new Date();
        const currentHour = now.getHours();
        const todayStart = new Date(now);
        if (currentHour < 5) {
            todayStart.setDate(todayStart.getDate() - 1);
        }
        todayStart.setHours(5, 0, 0, 0);
        return {
            start: todayStart.toISOString().split('T')[0],
            end: new Date().toISOString().split('T')[0]
        };
    };
    const globalDates = getGlobalDates();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            modalType === 'courier' && courierId && courier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$CourierDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourierDetailModal"], {
                show: true,
                onClose: closeModal,
                courier: courier,
                selectedCourierId: courierId,
                courierDebts: courierModal.courierDebts,
                getPlatformBadgeClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"],
                getPlatformDisplayName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformDisplayName"]
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminModals.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            courierModal.showEndOfDayModal && courier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$EndOfDayModalNew$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EndOfDayModalNew"], {
                show: courierModal.showEndOfDayModal,
                onClose: ()=>courierModal.setShowEndOfDayModal(false),
                courier: courier,
                startDate: courierModal.courierStartDate,
                endDate: courierModal.courierEndDate,
                onSuccess: ()=>{
                    setSuccessMessage('✅ Gün sonu mutabakatı başarıyla kaydedildi!');
                    courierModal.setShowEndOfDayModal(false);
                    // Kurye verilerini yenile
                    fetchCouriers();
                    if (courierId) {
                        courierModal.fetchCourierOrders(courierId);
                    }
                }
            }, `eod-${courierId}-${courierModal.courierStartDate}-${courierModal.courierEndDate}`, false, {
                fileName: "[project]/src/app/admin/AdminModals.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$PayDebtModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PayDebtModal"], {
                show: courierModal.showPayDebtModal,
                onClose: ()=>courierModal.setShowPayDebtModal(false),
                courier: courier,
                selectedCourierId: courierId,
                payDebtAmount: courierModal.payDebtAmount,
                setPayDebtAmount: courierModal.setPayDebtAmount,
                onConfirm: courierModal.handlePayDebt,
                processing: courierModal.payDebtProcessing,
                courierDebts: courierModal.courierDebts,
                loadingDebts: courierModal.loadingDebts
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminModals.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            modalType === 'restaurant' && restaurantId && restaurant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$RestaurantDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestaurantDetailModal"], {
                restaurantId: restaurantId,
                globalStartDate: globalDates.start,
                globalEndDate: globalDates.end,
                onClose: closeModal,
                onPaymentClick: (guncelBakiye)=>{
                    restaurantModal.setGuncelBakiye(guncelBakiye);
                    restaurantModal.setShowRestaurantPaymentModal(true);
                },
                restaurant: restaurant,
                onRefetch: restaurantModal.refetchTrigger
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminModals.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this),
            restaurantModal.showRestaurantPaymentModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$modals$2f$RestaurantPaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestaurantPaymentModal"], {
                show: restaurantModal.showRestaurantPaymentModal,
                onClose: ()=>restaurantModal.setShowRestaurantPaymentModal(false),
                restaurant: restaurant,
                selectedRestaurantId: restaurantId,
                guncelBakiye: restaurantModal.guncelBakiye,
                restaurantPaymentAmount: restaurantModal.restaurantPaymentAmount,
                setRestaurantPaymentAmount: restaurantModal.setRestaurantPaymentAmount,
                onConfirm: restaurantModal.handleRestaurantPayment,
                processing: restaurantModal.restaurantPaymentProcessing
            }, `${restaurantId}_${Date.now()}`, false, {
                fileName: "[project]/src/app/admin/AdminModals.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(AdminModals, "Ve48Po5Iz3+5WlrNrRKsJmqh3ms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$hooks$2f$useAdminCourierModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminCourierModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$hooks$2f$useAdminRestaurantModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminRestaurantModal"]
    ];
});
_c = AdminModals;
var _c;
__turbopack_context__.k.register(_c, "AdminModals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/AdminDataProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/AdminModals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DesignModeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DesignModeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/layout.tsx
 * @description Admin Panel Layout - Sidebar ve Auth kontrolü
 */ 'use client';
;
;
;
;
;
;
;
;
;
function AdminLayout({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginForm, setLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: ''
    });
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCourierSubmenu, setShowCourierSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRestaurantSubmenu, setShowRestaurantSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLayout.useEffect": ()=>{
            if (pathname?.startsWith('/admin/kuryeler')) {
                setShowCourierSubmenu(true);
            }
            if (pathname?.startsWith('/admin/restoranlar')) {
                setShowRestaurantSubmenu(true);
            }
        }
    }["AdminLayout.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLayout.useEffect": ()=>{
            setIsMounted(true);
        }
    }["AdminLayout.useEffect"], []);
    // Android Back Button Handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLayout.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !isMounted) return;
            let backButtonListener;
            const setupBackButton = {
                "AdminLayout.useEffect.setupBackButton": async ()=>{
                    try {
                        backButtonListener = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].addListener('backButton', {
                            "AdminLayout.useEffect.setupBackButton": ({ canGoBack })=>{
                                if (!canGoBack) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].minimizeApp();
                                } else {
                                    window.history.back();
                                }
                            }
                        }["AdminLayout.useEffect.setupBackButton"]);
                    } catch (error) {
                        console.log('Back button listener eklenemedi:', error);
                    }
                }
            }["AdminLayout.useEffect.setupBackButton"];
            setupBackButton();
            return ({
                "AdminLayout.useEffect": ()=>{
                    if (backButtonListener) {
                        backButtonListener.remove();
                    }
                }
            })["AdminLayout.useEffect"];
        }
    }["AdminLayout.useEffect"], [
        isMounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLayout.useEffect": ()=>{
            const checkAuthAndRedirect = {
                "AdminLayout.useEffect.checkAuthAndRedirect": async ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    if (!isMounted) return;
                    setIsCheckingAuth(true);
                    try {
                        // KATİ ROTA GÜVENLİĞİ: Sadece admin olarak giriş yapıldıysa içeri al
                        const adminLoggedIn = localStorage.getItem('admin_logged_in');
                        if (adminLoggedIn === 'true') {
                            setIsLoggedIn(true);
                        } else {
                            // Admin değilse veya session yoksa içeri alma, bekleme
                            setIsLoggedIn(false);
                            // Güvenlik amacıyla izinsiz girişte direkt kök dizine fırlat (isteğe bağlı ama kullanıcı "anında / at" dedi)
                            if (pathname !== '/admin' && !pathname.startsWith('/admin')) {
                                window.location.href = '/';
                            }
                        }
                    } catch (error) {
                        console.error('Auth kontrolü hatası:', error);
                        setIsLoggedIn(false);
                        window.location.href = '/';
                    } finally{
                        setIsCheckingAuth(false);
                    }
                }
            }["AdminLayout.useEffect.checkAuthAndRedirect"];
            checkAuthAndRedirect();
        }
    }["AdminLayout.useEffect"], [
        isMounted
    ]);
    const handleLogin = async (e)=>{
        e.preventDefault();
        const adminUser = ("TURBOPACK compile-time value", "admin") || 'admin';
        const adminPass = ("TURBOPACK compile-time value", "admin123") || 'admin123';
        if (loginForm.username === adminUser && loginForm.password === adminPass) {
            localStorage.setItem('admin_logged_in', 'true');
            setIsLoggedIn(true);
            setSuccessMessage('Giriş başarılı!');
            setTimeout(()=>setSuccessMessage(''), 2000);
        } else {
            setErrorMessage('Kullanıcı adı veya şifre hatalı!');
            setTimeout(()=>setErrorMessage(''), 3000);
        }
    };
    const isActive = (path)=>pathname === path;
    if (!isMounted || isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-400 text-sm tracking-wide uppercase",
                children: "Yükleniyor"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/layout.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleLogin,
                className: "bg-slate-900 p-7 rounded-lg border border-slate-800 w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Logo",
                                className: "w-16 h-16 mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold text-white tracking-tight mb-1",
                                children: "Yönetim Girişi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm",
                                children: "Operasyon paneli"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Kullanıcı Adı",
                        className: "w-full p-2.5 mb-3 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm",
                        value: loginForm.username,
                        onChange: (e)=>setLoginForm({
                                ...loginForm,
                                username: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Şifre",
                        className: "w-full p-2.5 mb-4 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm",
                        value: loginForm.password,
                        onChange: (e)=>setLoginForm({
                                ...loginForm,
                                password: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors",
                        children: "Giriş Yap"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-sm mt-3 text-center",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 157,
                        columnNumber: 28
                    }, this),
                    successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-400 text-sm mt-3 text-center",
                        children: successMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 158,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/layout.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    const navClass = (active)=>`block w-full text-left px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors ${active ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'}`;
    const subNavClass = (active)=>`block w-full text-left px-3.5 py-2 rounded-md text-sm transition-colors ${active ? 'bg-orange-500/10 text-orange-300' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowMenu(!showMenu),
                className: "fixed top-4 left-4 z-50 bg-slate-900 text-slate-200 p-2.5 rounded-md border border-slate-800 shadow-md hover:bg-slate-800 transition-colors",
                "aria-label": "Menü",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/layout.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/60",
                        onClick: ()=>setShowMenu(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-slate-900 w-72 h-full overflow-y-auto p-5 border-r border-slate-800 admin-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-7 text-center border-b border-slate-800 pb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "Logo",
                                        className: "w-14 h-14 mx-auto mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold text-white tracking-tight",
                                        children: "Yönetim Paneli"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500 mt-0.5 tracking-wide uppercase",
                                        children: "Operasyon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        onClick: ()=>setShowMenu(false),
                                        className: navClass(isActive('/admin')),
                                        children: "Canlı Takip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin/gecmis",
                                        onClick: ()=>setShowMenu(false),
                                        className: navClass(isActive('/admin/gecmis')),
                                        children: "Geçmiş Siparişler"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin/istatistikler",
                                        onClick: ()=>setShowMenu(false),
                                        className: navClass(isActive('/admin/istatistikler')),
                                        children: "Genel İstatistikler"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowCourierSubmenu(!showCourierSubmenu),
                                                className: navClass(!!pathname?.startsWith('/admin/kuryeler')),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        "Kuryeler",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-500",
                                                            children: showCourierSubmenu ? '▾' : '▸'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/layout.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/layout.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/layout.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            showCourierSubmenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-2 mt-1 space-y-0.5 border-l border-slate-800 pl-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/kuryeler/hesaplar",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/kuryeler/hesaplar')),
                                                        children: "Hesaplar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/kuryeler/mutabakatlar",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/kuryeler/mutabakatlar')),
                                                        children: "Mutabakatlar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/kuryeler/performans",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/kuryeler/performans')),
                                                        children: "Performans"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/kuryeler/kazanclar",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/kuryeler/kazanclar')),
                                                        children: "Kazançlar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/kuryeler/basvurular",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/kuryeler/basvurular')),
                                                        children: "Başvurular"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/layout.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowRestaurantSubmenu(!showRestaurantSubmenu),
                                                className: navClass(!!pathname?.startsWith('/admin/restoranlar')),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        "Restoranlar",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-500",
                                                            children: showRestaurantSubmenu ? '▾' : '▸'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/layout.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/layout.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/layout.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            showRestaurantSubmenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-2 mt-1 space-y-0.5 border-l border-slate-800 pl-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/restoranlar/liste",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/restoranlar/liste')),
                                                        children: "Liste"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/restoranlar/detaylar",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/restoranlar/detaylar')),
                                                        children: "Sipariş Detayları"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/restoranlar/borc",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/restoranlar/borc')),
                                                        children: "Borçlar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/restoranlar/odemeler",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/restoranlar/odemeler')),
                                                        children: "Ödemeler"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin/restoranlar/basvurular",
                                                        onClick: ()=>setShowMenu(false),
                                                        className: subNavClass(isActive('/admin/restoranlar/basvurular')),
                                                        children: "Başvurular"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/layout.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/layout.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/layout.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignModeToggle, {}, void 0, false, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: async ()=>{
                                    try {
                                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                                    } catch (error) {
                                        console.error('SignOut hatası:', error);
                                    }
                                    const savedDesign = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DesignModeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_MODE_STORAGE_KEY"]);
                                    localStorage.clear();
                                    sessionStorage.clear();
                                    if (savedDesign === 'classic' || savedDesign === 'pro') {
                                        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DesignModeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_MODE_STORAGE_KEY"], savedDesign);
                                    }
                                    window.location.href = '/';
                                },
                                className: "w-full mt-3 bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-300 px-4 py-2.5 rounded-md text-sm font-medium border border-slate-700 hover:border-red-900/50 transition-colors",
                                children: "Çıkış Yap"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/layout.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-6 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDataProvider"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminMessages, {}, void 0, false, {
                                    fileName: "[project]/src/app/admin/layout.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminModals"], {}, void 0, false, {
                                    fileName: "[project]/src/app/admin/layout.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                children
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/layout.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/layout.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/layout.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(AdminLayout, "s7FHcHNCmPpkcccDmrb6UKcdV70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminLayout;
function DesignModeToggle() {
    _s1();
    const { mode, setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DesignModeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignMode"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 p-3 rounded-md border border-slate-800 bg-slate-950/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-wide text-slate-500 mb-2 font-semibold",
                children: "Tasarım Modu"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode('pro'),
                        className: `px-2.5 py-2 rounded-md text-xs font-medium transition-colors border ${mode === 'pro' ? 'bg-orange-500/15 text-orange-300 border-orange-500/40' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'}`,
                        children: "Pro"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMode('classic'),
                        className: `px-2.5 py-2 rounded-md text-xs font-medium transition-colors border ${mode === 'classic' ? 'bg-orange-500/15 text-orange-300 border-orange-500/40' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'}`,
                        children: "Klasik"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/layout.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-600 mt-2 leading-relaxed",
                children: mode === 'pro' ? 'Kurumsal, sade arayüz' : 'Daha yuvarlak, eski görünüm'
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/layout.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
_s1(DesignModeToggle, "z1FQikRqBojZRn+jozIkJZjFIVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DesignModeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignMode"]
    ];
});
_c1 = DesignModeToggle;
function AdminMessages() {
    _s2();
    const { successMessage, errorMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 bg-green-950/40 border border-green-900/50 rounded-md text-green-300 text-sm",
                children: successMessage
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 361,
                columnNumber: 9
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 bg-red-950/40 border border-red-900/50 rounded-md text-red-300 text-sm",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s2(AdminMessages, "gGKZ6bad22tmfU0iR8s16KMuua4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"]
    ];
});
_c2 = AdminMessages;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AdminLayout");
__turbopack_context__.k.register(_c1, "DesignModeToggle");
__turbopack_context__.k.register(_c2, "AdminMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_913ef429._.js.map