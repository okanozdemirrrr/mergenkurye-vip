(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/components/LiveMapComponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveMapComponent",
    ()=>LiveMapComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/app/admin/components/LiveMapComponent.tsx
 * @description Canlı Malatya Haritası - Kurye ve Paket Takibi
 */ 'use client';
;
;
;
;
;
// Dynamic React-Leaflet components to prevent SSR errors
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.TileLayer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Marker), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Marker;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Popup), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = Popup;
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Tooltip), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = Tooltip;
const MapUpdater = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/components/MapUpdater.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.MapUpdater
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/components/MapUpdater.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c5 = MapUpdater;
// Safely require Leaflet on the client side
let L;
if ("TURBOPACK compile-time truthy", 1) {
    L = __turbopack_context__.r("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
}
function LiveMapComponent({ packages, couriers: initialCouriers, restaurants: initialRestaurants, onRefresh, onLiveCouriersChange }) {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        41.494714153011856,
        36.07827997146362
    ]);
    const [todayHeatmapPoints, setTodayHeatmapPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Restoran ve Kurye verileri state'te tutulur
    const [restaurants, setRestaurants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialRestaurants || []);
    const [couriers, setCouriers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCouriers || []);
    // 🔴 CANLI KONUMLAR: DB'den değil, Broadcast'ten (WebSocket)
    const [liveLocations, setLiveLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const BROADCAST_CHANNEL = 'courier-live-locations';
    const STALE_THRESHOLD_MS = 30_000 // 30 saniyeden eski konumu "eski" say
    ;
    // Veritabanından restoranları yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapComponent.useEffect": ()=>{
            async function fetchRestaurants() {
                try {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('id, name, latitude, longitude, phone, address');
                    if (error) {
                        console.error('Supabase restaurants query error:', error);
                    } else if (data) {
                        setRestaurants(data);
                    }
                } catch (err) {
                    console.error('Error fetching restaurants:', err);
                }
            }
            fetchRestaurants();
        }
    }["LiveMapComponent.useEffect"], []);
    // Veritabanından aktif kuryeleri yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapComponent.useEffect": ()=>{
            async function fetchActiveCouriers() {
                try {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').select('*').eq('is_active', true);
                    if (error) {
                        console.error('SUPABASE HATASI DETAYI:', JSON.stringify(error, null, 2));
                        console.error('Tablo İsmi Kontrolü:', 'couriers');
                        return;
                    } else if (data) {
                        setCouriers(data);
                    }
                } catch (err) {
                    console.error('Error fetching active couriers:', err);
                }
            }
            fetchActiveCouriers();
        }
    }["LiveMapComponent.useEffect"], []);
    // Prop güncellemelerini state'e yansıt (Senkronizasyon - Sadece Kuryeler için, Restoranlar DB'den koordinatlı çekiliyor)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapComponent.useEffect": ()=>{
            if (initialCouriers && initialCouriers.length > 0) {
                setCouriers(initialCouriers);
            }
        }
    }["LiveMapComponent.useEffect"], [
        initialCouriers
    ]);
    // ✅ BROADCAST LISTENER: Kurye canlı konumlarını WebSocket ile al
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapComponent.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(BROADCAST_CHANNEL, {
                config: {
                    broadcast: {
                        ack: false
                    }
                }
            });
            channel.on('broadcast', {
                event: 'location'
            }, {
                "LiveMapComponent.useEffect": (payload)=>{
                    console.log('📡 Canlı konum yayını alındı:', payload);
                    const { courierId, courierName, latitude, longitude, accuracy, timestamp } = payload.payload;
                    // 1. liveLocations state'ini güncelle
                    setLiveLocations({
                        "LiveMapComponent.useEffect": (prev)=>({
                                ...prev,
                                [courierId]: {
                                    courierId,
                                    courierName,
                                    latitude,
                                    longitude,
                                    accuracy,
                                    timestamp,
                                    lastSeenMs: Date.now()
                                }
                            })
                    }["LiveMapComponent.useEffect"]);
                    // 2. couriers state'ine gelen veriyi güncelle (last_location alanını güncelle/ekle)
                    setCouriers({
                        "LiveMapComponent.useEffect": (prevCouriers)=>{
                            const exists = prevCouriers.some({
                                "LiveMapComponent.useEffect.exists": (c)=>c.id === courierId
                            }["LiveMapComponent.useEffect.exists"]);
                            if (exists) {
                                return prevCouriers.map({
                                    "LiveMapComponent.useEffect": (c)=>{
                                        if (c.id === courierId) {
                                            return {
                                                ...c,
                                                last_location: {
                                                    latitude,
                                                    longitude,
                                                    updated_at: timestamp
                                                }
                                            };
                                        }
                                        return c;
                                    }
                                }["LiveMapComponent.useEffect"]);
                            } else {
                                return [
                                    ...prevCouriers,
                                    {
                                        id: courierId,
                                        full_name: courierName,
                                        is_active: true,
                                        last_location: {
                                            latitude,
                                            longitude,
                                            updated_at: timestamp
                                        }
                                    }
                                ];
                            }
                        }
                    }["LiveMapComponent.useEffect"]);
                }
            }["LiveMapComponent.useEffect"]).subscribe({
                "LiveMapComponent.useEffect": (status)=>{
                    console.log(`📡 Broadcast kanal abonelik durumu (${BROADCAST_CHANNEL}):`, status);
                }
            }["LiveMapComponent.useEffect"]);
            channelRef.current = channel;
            return ({
                "LiveMapComponent.useEffect": ()=>{
                    console.log('🔌 Harita aboneliği kapatılıyor...');
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["LiveMapComponent.useEffect"];
        }
    }["LiveMapComponent.useEffect"], []);
    // Koordinatı olan kuryeleri filtrele
    const couriersWithCoords = couriers.filter((courier)=>{
        const live = liveLocations[courier.id];
        if (live) return true;
        return !!(courier.last_location?.latitude && courier.last_location?.longitude && courier.is_active);
    });
    // Haritadaki aktif kurye sayısını üst bileşene bildir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapComponent.useEffect": ()=>{
            if (onLiveCouriersChange) {
                onLiveCouriersChange(couriersWithCoords.length);
            }
        }
    }["LiveMapComponent.useEffect"], [
        couriersWithCoords.length,
        onLiveCouriersChange
    ]);
    // Client-side rendering kontrolü
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapComponent.useEffect": ()=>{
            setIsClient(true);
            // Leaflet CSS'ini dinamik olarak yükle
            if ("TURBOPACK compile-time truthy", 1) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
                link.crossOrigin = '';
                document.head.appendChild(link);
            }
        }
    }["LiveMapComponent.useEffect"], []);
    // SSR sırasında loading göster
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center bg-slate-800 rounded-xl text-slate-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin text-3xl mb-2",
                        children: "🗺️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: "Harita yükleniyor..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this);
    }
    // Paket durumuna göre ikon oluştur
    const getPackageIcon = (pkg)=>{
        const isUnassigned = !pkg.courier_id;
        if (isUnassigned) {
            return L.divIcon({
                html: `
          <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
            <div style="
              position: absolute;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #ef4444;
              opacity: 0.4;
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            "></div>
            <div style="
              background: #ef4444;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 3px solid #ef4444;
              box-shadow: 0 0 0 2px white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              position: relative;
              z-index: 1;
            ">📦</div>
          </div>
          <style>
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 0.4; }
              50% { transform: scale(1.3); opacity: 0.1; }
            }
          </style>
        `,
                className: '',
                iconSize: [
                    32,
                    32
                ],
                iconAnchor: [
                    16,
                    16
                ],
                popupAnchor: [
                    0,
                    -16
                ]
            });
        }
        return L.divIcon({
            html: `
        <div style="
          background: #22c55e;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid #22c55e;
          box-shadow: 0 0 0 2px white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        ">📦</div>
      `,
            className: '',
            iconSize: [
                24,
                24
            ],
            iconAnchor: [
                12,
                12
            ],
            popupAnchor: [
                0,
                -12
            ]
        });
    };
    // Kurye durumuna göre ikon oluştur
    const getCourierIcon = (courier)=>{
        const courierPackages = packages.filter((pkg)=>pkg.courier_id === courier.id && pkg.status !== 'delivered' && pkg.status !== 'cancelled');
        let color = '#22c55e' // Varsayılan: Yeşil (Boşta)
        ;
        if (courierPackages.length > 0) {
            const hasPickedUpPackage = courierPackages.some((pkg)=>pkg.status === 'picking_up' || pkg.status === 'on_the_way');
            if (hasPickedUpPackage) {
                color = '#ef4444'; // Kırmızı: Teslimat yapıyor
            } else {
                const hasAssignedPackage = courierPackages.some((pkg)=>pkg.status === 'assigned');
                if (hasAssignedPackage) {
                    color = '#eab308'; // Sarı: Restoran yolunda
                }
            }
        }
        const firstName = courier.full_name?.split(' ')[0] || 'Kurye';
        return L.divIcon({
            html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <div style="
            background: ${color};
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 3px solid ${color};
            box-shadow: 0 0 0 2px white, 0 0 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          ">🏍️</div>
          <div style="
            background: rgba(0, 0, 0, 0.75);
            color: white;
            padding: 1px 4px;
            border-radius: 3px;
            font-size: 9px;
            font-weight: 600;
            white-space: nowrap;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            pointer-events: none;
          ">${firstName}</div>
        </div>
      `,
            className: '',
            iconSize: [
                32,
                45
            ],
            iconAnchor: [
                16,
                22
            ],
            popupAnchor: [
                0,
                -22
            ]
        });
    };
    // Restoran ikonu oluştur
    const getRestaurantIcon = (name)=>{
        return L.divIcon({
            html: `
        <div style="
          background: #f97316;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">🍽️</div>
      `,
            className: '',
            iconSize: [
                24,
                24
            ],
            iconAnchor: [
                12,
                12
            ],
            popupAnchor: [
                0,
                -12
            ]
        });
    };
    const packagesWithCoords = packages.filter((pkg)=>pkg.latitude && pkg.longitude && pkg.status !== 'delivered' && pkg.status !== 'cancelled');
    const restaurantsWithCoords = restaurants.filter((restaurant)=>restaurant.latitude && restaurant.longitude);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-4' : 'relative w-full h-full'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full rounded-xl overflow-hidden border border-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsFullscreen(!isFullscreen),
                        className: "absolute top-4 right-4 z-[1000] bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg shadow-lg transition-colors",
                        title: isFullscreen ? 'Küçült' : 'Büyüt',
                        children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                            lineNumber: 435,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                            lineNumber: 435,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                        lineNumber: 430,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: async ()=>{
                            console.log('🧹 Manuel harita temizliği başlatıldı');
                            setTodayHeatmapPoints([]);
                            const twentyFourHoursAgo = new Date();
                            twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
                            const { supabase } = await __turbopack_context__.A("[project]/src/app/lib/supabase.ts [app-client] (ecmascript, async loader)");
                            const { data, error } = await supabase.from('packages').select('latitude, longitude, created_at, status').gte('created_at', twentyFourHoursAgo.toISOString()).not('status', 'in', '("delivered","cancelled")');
                            if (!error && data) {
                                const points = data.filter((pkg)=>pkg.latitude && pkg.longitude).map((pkg)=>({
                                        lat: pkg.latitude,
                                        lng: pkg.longitude
                                    }));
                                setTimeout(()=>{
                                    setTodayHeatmapPoints(points);
                                    console.log('✅ Manuel temizlik tamamlandı, nokta sayısı:', points.length);
                                }, 100);
                            }
                            if (onRefresh) onRefresh();
                        },
                        className: "absolute top-4 right-16 z-[1000] bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg shadow-lg transition-colors text-sm font-medium",
                        title: "Haritayı Yenile",
                        children: "🧹 Temizle"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                        center: mapCenter,
                        zoom: 15,
                        style: {
                            height: '100%',
                            width: '100%'
                        },
                        zoomControl: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUpdater, {
                                center: mapCenter
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                                url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            restaurantsWithCoords.map((restaurant)=>{
                                if (!restaurant) return null;
                                const restaurantPackages = packages.filter((pkg)=>pkg.restaurant_id === restaurant.id && pkg.status !== 'delivered' && pkg.status !== 'cancelled');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                                    position: [
                                        restaurant.latitude,
                                        restaurant.longitude
                                    ],
                                    icon: getRestaurantIcon(restaurant.name),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popup, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-orange-600",
                                                    children: [
                                                        "🍽️ ",
                                                        restaurant.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs mt-1",
                                                    children: [
                                                        restaurant.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Telefon:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 51
                                                                }, this),
                                                                " ",
                                                                restaurant.phone
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 46
                                                        }, this),
                                                        restaurant.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Adres:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 53
                                                                }, this),
                                                                " ",
                                                                restaurant.address
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 48
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Aktif Siparişler:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " ",
                                                                restaurantPackages.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 25
                                                        }, this),
                                                        restaurantPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 space-y-1",
                                                            children: restaurantPackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] bg-slate-100 p-1 rounded",
                                                                    children: [
                                                                        "📦 ",
                                                                        pkg.order_number || `#${pkg.id}`,
                                                                        " - ",
                                                                        pkg.status === 'waiting' ? '⏳ Bekliyor' : pkg.status === 'assigned' ? '👤 Atandı' : pkg.status === 'picking_up' ? '🏃 Alınıyor' : pkg.status === 'on_the_way' ? '🚗 Yolda' : pkg.status
                                                                    ]
                                                                }, pkg.id, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                            lineNumber: 505,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                        lineNumber: 504,
                                        columnNumber: 19
                                    }, this)
                                }, `restaurant-${restaurant.id}`, false, {
                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                    lineNumber: 499,
                                    columnNumber: 17
                                }, this);
                            }),
                            packagesWithCoords.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                                    position: [
                                        pkg.latitude,
                                        pkg.longitude
                                    ],
                                    icon: getPackageIcon(pkg),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popup, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-orange-600",
                                                    children: [
                                                        "📦 ",
                                                        pkg.order_number || `#${pkg.id}`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Restoran:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                pkg.restaurant?.name || 'Bilinmiyor'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Müşteri:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                pkg.customer_name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Adres:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 547,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                pkg.delivery_address
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Tutar:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                pkg.amount,
                                                                "₺"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Durum:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                !pkg.courier_id ? '🔴 SAHİPSİZ' : '🟢 ATANMIŞ'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                            lineNumber: 542,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                        lineNumber: 541,
                                        columnNumber: 17
                                    }, this)
                                }, `pkg-${pkg.id}`, false, {
                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)),
                            couriersWithCoords.map((courier)=>{
                                const courierPackages = packages.filter((pkg)=>pkg.courier_id === courier.id && pkg.status !== 'delivered' && pkg.status !== 'cancelled');
                                const live = liveLocations[courier.id];
                                const lat = live?.latitude ?? courier.last_location?.latitude;
                                const lng = live?.longitude ?? courier.last_location?.longitude;
                                const isLive = !!live;
                                const lastSeenSec = live ? Math.round((Date.now() - (live.lastSeenMs ?? 0)) / 1000) : null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                                    position: [
                                        lat,
                                        lng
                                    ],
                                    icon: getCourierIcon(courier),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                            direction: "top",
                                            offset: [
                                                0,
                                                -20
                                            ],
                                            opacity: 0.9,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-xs",
                                                children: courier.full_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                lineNumber: 581,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                            lineNumber: 580,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popup, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-orange-600",
                                                        children: [
                                                            "🏍️ ",
                                                            courier.full_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `font-semibold mb-1 ${isLive ? 'text-green-600' : 'text-gray-500'}`,
                                                                children: isLive ? `📡 CANLI (${lastSeenSec}s önce)` : '⚠️ SON KONUM (DB)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Durum:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                        lineNumber: 592,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    courier.is_active ? '✅ Aktif' : '❌ Pasif'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Telefon:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                        lineNumber: 593,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    courier.phone || '-'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                lineNumber: 593,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Üzerindeki Paketler:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    courierPackages.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 25
                                                            }, this),
                                                            courierPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 space-y-1",
                                                                children: courierPackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] bg-slate-100 p-1 rounded",
                                                                        children: [
                                                                            "📦 ",
                                                                            pkg.order_number || `#${pkg.id}`,
                                                                            " - ",
                                                                            pkg.status === 'assigned' ? '⏳ Atandı' : pkg.status === 'picking_up' ? '🏃 Alıyor' : pkg.status === 'on_the_way' ? '🚗 Yolda' : pkg.status
                                                                        ]
                                                                    }, pkg.id, true, {
                                                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                        lineNumber: 600,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                                lineNumber: 584,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                            lineNumber: 583,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `courier-${courier.id}`, true, {
                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                    lineNumber: 575,
                                    columnNumber: 17
                                }, this);
                            }),
                            todayHeatmapPoints.map((point, index)=>{
                                const heatmapIcon = L.divIcon({
                                    html: `
                  <div style="
                    width: 8px;
                    height: 8px;
                    background: #ef4444;
                    border-radius: 50%;
                    opacity: 0.7;
                    pointer-events: none;
                    box-shadow: 0 0 4px rgba(239, 68, 68, 0.5);
                  "></div>
                `,
                                    className: '',
                                    iconSize: [
                                        8,
                                        8
                                    ],
                                    iconAnchor: [
                                        4,
                                        4
                                    ]
                                });
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                                    position: [
                                        point.lat,
                                        point.lng
                                    ],
                                    icon: heatmapIcon,
                                    interactive: false
                                }, `heatmap-${index}`, false, {
                                    fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                                    lineNumber: 637,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/components/LiveMapComponent.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(LiveMapComponent, "rdK0Tu4bZSl8Vfebrb1vFfiwP4g=");
_c6 = LiveMapComponent;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "Popup");
__turbopack_context__.k.register(_c4, "Tooltip");
__turbopack_context__.k.register(_c5, "MapUpdater");
__turbopack_context__.k.register(_c6, "LiveMapComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/components/LiveMapComponent.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/components/LiveMapComponent.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_admin_components_LiveMapComponent_tsx_1d7c31c8._.js.map