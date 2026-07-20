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
"[project]/src/components/CourierEarningsStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourierEarningsStats",
    ()=>CourierEarningsStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/components/CourierEarningsStats.tsx
 * @description Kurye dönem özeti — admin gün sonu mutabakatı ile aynı (settled_at)
 */ 'use client';
;
;
function CourierEarningsStats({ courierId, packageRate = 0 }) {
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cash: 0,
        card: 0,
        iban: 0,
        count: 0,
        payableDebt: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CourierEarningsStats.useCallback[refresh]": async ()=>{
            if (!courierId) return;
            setLoading(true);
            try {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('amount, payment_method').eq('status', 'delivered').eq('delivered_by_courier_id', courierId).or('is_courier_settled.is.null,is_courier_settled.eq.false');
                if (error) throw error;
                const list = data || [];
                const cash = list.filter({
                    "CourierEarningsStats.useCallback[refresh].cash": (p)=>p.payment_method === 'cash'
                }["CourierEarningsStats.useCallback[refresh].cash"]).reduce({
                    "CourierEarningsStats.useCallback[refresh].cash": (sum, p)=>sum + Number(p.amount || 0)
                }["CourierEarningsStats.useCallback[refresh].cash"], 0);
                const card = list.filter({
                    "CourierEarningsStats.useCallback[refresh].card": (p)=>p.payment_method === 'card'
                }["CourierEarningsStats.useCallback[refresh].card"]).reduce({
                    "CourierEarningsStats.useCallback[refresh].card": (sum, p)=>sum + Number(p.amount || 0)
                }["CourierEarningsStats.useCallback[refresh].card"], 0);
                const iban = list.filter({
                    "CourierEarningsStats.useCallback[refresh].iban": (p)=>p.payment_method === 'iban'
                }["CourierEarningsStats.useCallback[refresh].iban"]).reduce({
                    "CourierEarningsStats.useCallback[refresh].iban": (sum, p)=>sum + Number(p.amount || 0)
                }["CourierEarningsStats.useCallback[refresh].iban"], 0);
                const payableDebt = cash + card + iban;
                setAccount({
                    cash,
                    card,
                    iban,
                    count: list.length,
                    payableDebt
                });
            } catch (error) {
                console.error('❌ Dönem özeti hesaplanamadı:', error);
            } finally{
                setLoading(false);
            }
        }
    }["CourierEarningsStats.useCallback[refresh]"], [
        courierId,
        packageRate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourierEarningsStats.useEffect": ()=>{
            refresh();
        }
    }["CourierEarningsStats.useEffect"], [
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourierEarningsStats.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`courier-settlements-${courierId}`).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'courier_settlements',
                filter: `courier_id=eq.${courierId}`
            }, {
                "CourierEarningsStats.useEffect.channel": ()=>refresh()
            }["CourierEarningsStats.useEffect.channel"]).subscribe();
            return ({
                "CourierEarningsStats.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["CourierEarningsStats.useEffect"];
        }
    }["CourierEarningsStats.useEffect"], [
        courierId,
        refresh
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 p-3 rounded-xl border border-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/CourierEarningsStats.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CourierEarningsStats.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 p-3 rounded-xl border border-slate-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-500 mb-2 text-center",
                children: "Admin ile aynı · seçili dönemde mutabakat bekleyen paketler"
            }, void 0, false, {
                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400 mb-1",
                                children: "📦 Paket"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-blue-400",
                                children: account.count
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400 mb-1",
                                children: "💵 Nakit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-green-400",
                                children: [
                                    account.cash.toFixed(0),
                                    "₺"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400 mb-1",
                                children: "💳 Kart"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-blue-400",
                                children: [
                                    account.card.toFixed(0),
                                    "₺"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400 mb-1",
                                children: "🏦 IBAN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-orange-400",
                                children: [
                                    account.iban.toFixed(0),
                                    "₺"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-orange-900/50 to-red-900/50 border-2 border-orange-500/50 px-3 py-3 rounded-lg col-span-2 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-orange-200",
                                        children: "💰 Bu dönem ödenecek"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    account.payableDebt === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded",
                                        children: "✅ Kapatıldı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black text-orange-100",
                                children: [
                                    account.payableDebt.toFixed(2),
                                    "₺"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-orange-300 mt-1",
                                children: "Nakit + Kart + IBAN (mutabakat bekleyen paketler)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourierEarningsStats.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CourierEarningsStats.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CourierEarningsStats.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(CourierEarningsStats, "di01gA53OAfKN4iSU8rMyBI+HKU=");
_c = CourierEarningsStats;
var _c;
__turbopack_context__.k.register(_c, "CourierEarningsStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/courierPushNotificationService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationService",
    ()=>notificationService
]);
/**
 * @file src/utils/courierPushNotificationService.ts
 * @description Kurye FCM Token Kayıt Servisi
 * 
 * AMAÇ:
 * - Kurye cihazından FCM token al
 * - Token'ı Supabase'e kaydet
 * - Uygulama kapalıyken bile bildirim alabilsin
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
;
;
class CourierPushNotificationService {
    isInitialized = false;
    courierId = null;
    async initialize(courierId) {
        if (this.isInitialized) {
            console.log('⚠️ Kurye push notification zaten başlatılmış');
            return;
        }
        this.courierId = courierId;
        console.log('🚀 Kurye push notification başlatılıyor, courier_id:', courierId);
        // Sadece native platformda çalış
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            console.log('ℹ️ Web platformu, native push notifications atlanıyor');
            return;
        }
        try {
            // 1. İzin durumunu kontrol et
            const permStatus = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].checkPermissions();
            console.log('📋 Mevcut izin durumu:', permStatus.receive);
            // 2. İzin iste (eğer henüz verilmemişse)
            if (permStatus.receive === 'prompt' || permStatus.receive === 'prompt-with-rationale') {
                console.log('🙏 Bildirim izni isteniyor...');
                const requestResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].requestPermissions();
                console.log('✅ İzin sonucu:', requestResult.receive);
                if (requestResult.receive === 'denied') {
                    console.warn('❌ Bildirim izni reddedildi');
                    return;
                }
            }
            // 3. Android 8.0+ için Bildirim Kanalı oluştur (ŞART — kanal yoksa bildirim düşmez!)
            // Bu işlem idempotent'tir: kanal zaten varsa üzerine yazar, hata vermez.
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === 'android') {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].createChannel({
                        id: 'mergen_high_priority',
                        name: 'Acil Siparişler',
                        description: 'Yeni sipariş bildirimleri — ses ve titreşim ile',
                        importance: 5,
                        visibility: 1,
                        sound: 'default',
                        vibration: true,
                        lights: true,
                        lightColor: '#FF6B00' // Turuncu ışık (Alda Gel brand rengi)
                    });
                    console.log('✅ mergen_high_priority kanalı oluşturuldu/güncellendi');
                } catch (channelError) {
                    console.warn('⚠️ Kanal oluşturma hatası (önemsiz):', channelError);
                }
            }
            // 4. Cihazı FCM'e kaydet
            console.log('📱 Cihaz FCM\'e kaydediliyor...');
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].register();
            // 5. Registration event listener - FCM Token alındığında
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].addListener('registration', async (token)=>{
                console.log('🎉 FCM Token alındı:', token.value);
                await this.saveFcmTokenToDatabase(token.value);
            });
            // 6. Registration hatası listener
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].addListener('registrationError', (error)=>{
                console.error('❌ FCM kayıt hatası:', error);
            });
            // 7. Foreground bildirim listener — uygulama açıkken gelen push'lar
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].addListener('pushNotificationReceived', (notification)=>{
                console.log('🔔 Foreground push notification alındı:', notification);
            // Realtime hook zaten ses çalıyor, burada sadece log
            });
            // 8. Background bildirim tıklama listener
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].addListener('pushNotificationActionPerformed', (notification)=>{
                console.log('👆 Bildirime tıklandı:', notification);
            // Burada yönlendirme yapılabilir
            });
            this.isInitialized = true;
            console.log('✅ Kurye push notification başarıyla başlatıldı');
        } catch (error) {
            console.error('❌ Kurye push notification başlatma hatası:', error);
        }
    }
    async saveFcmTokenToDatabase(token) {
        if (!this.courierId) {
            console.warn('⚠️ Courier ID yok, token kaydedilemedi');
            return;
        }
        try {
            console.log('💾 FCM Token veritabanına kaydediliyor...');
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
                fcm_token: token
            }).eq('id', this.courierId);
            if (error) throw error;
            console.log('✅ FCM Token başarıyla kaydedildi:', {
                courierId: this.courierId,
                token: token.substring(0, 20) + '...'
            });
        } catch (error) {
            console.error('❌ FCM Token kaydetme hatası:', error.message);
        }
    }
    cleanup() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$push$2d$notifications$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushNotifications"].removeAllListeners();
        }
        this.isInitialized = false;
        this.courierId = null;
        console.log('🧹 Kurye push notification temizlendi');
    }
}
const notificationService = new CourierPushNotificationService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCourierRealtimeNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCourierRealtimeNotifications",
    ()=>useCourierRealtimeNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierPushNotificationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/courierPushNotificationService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
/**
 * @file src/hooks/useCourierRealtimeNotifications.ts
 * @description Kurye Paneli - Realtime Bildirim Hook (Foreground Protection)
 * 
 * SENARYO:
 * - Supabase Realtime ile packages tablosunu dinle (UPDATE)
 * - Şart: status === 'assigned' && courier_id === kendi ID'si
 * - Aksiyon: Toast + Audio (uygulama açıkken native push düşmeyebilir)
 * - Initial load koruması (useRef)
 * 
 * NOT: Bu sadece FOREGROUND koruma. Asıl bildirim Admin'den FCM ile gelir.
 */ 'use client';
;
;
;
function useCourierRealtimeNotifications(courierId, isLoggedIn) {
    _s();
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Audio'yu hazırla
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCourierRealtimeNotifications.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Audio oluştur
            audioRef.current = new Audio(`/notification.mp3?v=${Date.now()}`);
            audioRef.current.volume = 0.8;
            // Audio unlock için kullanıcı etkileşimi bekle
            const unlockAudio = {
                "useCourierRealtimeNotifications.useEffect.unlockAudio": ()=>{
                    if (audioRef.current) {
                        audioRef.current.volume = 0;
                        audioRef.current.play().then({
                            "useCourierRealtimeNotifications.useEffect.unlockAudio": ()=>{
                                audioRef.current.pause();
                                audioRef.current.currentTime = 0;
                                audioRef.current.volume = 0.8;
                                console.log('✅ Kurye audio unlocked');
                            }
                        }["useCourierRealtimeNotifications.useEffect.unlockAudio"]).catch({
                            "useCourierRealtimeNotifications.useEffect.unlockAudio": ()=>{}
                        }["useCourierRealtimeNotifications.useEffect.unlockAudio"]);
                    }
                    document.removeEventListener('click', unlockAudio);
                    document.removeEventListener('touchstart', unlockAudio);
                }
            }["useCourierRealtimeNotifications.useEffect.unlockAudio"];
            document.addEventListener('click', unlockAudio, {
                once: true
            });
            document.addEventListener('touchstart', unlockAudio, {
                once: true
            });
            return ({
                "useCourierRealtimeNotifications.useEffect": ()=>{
                    if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                    }
                    document.removeEventListener('click', unlockAudio);
                    document.removeEventListener('touchstart', unlockAudio);
                }
            })["useCourierRealtimeNotifications.useEffect"];
        }
    }["useCourierRealtimeNotifications.useEffect"], []);
    // FCM Token kaydı (Native Push için)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCourierRealtimeNotifications.useEffect": ()=>{
            if (!isLoggedIn || !courierId) return;
            // FCM token'ı kaydet
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierPushNotificationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationService"].initialize(courierId);
            return ({
                "useCourierRealtimeNotifications.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierPushNotificationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationService"].cleanup();
                }
            })["useCourierRealtimeNotifications.useEffect"];
        }
    }["useCourierRealtimeNotifications.useEffect"], [
        courierId,
        isLoggedIn
    ]);
    // Realtime subscription (Foreground protection)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCourierRealtimeNotifications.useEffect": ()=>{
            if (!isLoggedIn || !courierId) {
                console.log('⏸️ Kurye bildirimleri durduruldu - Giriş yapılmamış');
                return;
            }
            console.log('🔔 Kurye Realtime bildirimleri başlatılıyor, courier_id:', courierId);
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`courier-assignments-${courierId}`).on('postgres_changes', {
                event: 'UPDATE',
                schema: 'public',
                table: 'packages',
                filter: `courier_id=eq.${courierId}`
            }, {
                "useCourierRealtimeNotifications.useEffect.channel": (payload)=>{
                    console.log('📦 Kurye Realtime UPDATE event:', payload);
                    // İLK RENDER KORUMASI
                    if (isInitialMount.current) {
                        console.log('⏭️ İlk render - bildirim atlandı');
                        return;
                    }
                    const oldOrder = payload.old;
                    const newOrder = payload.new;
                    // Yeni atama kontrolü: status 'assigned' oldu VE önceden bu kuryeye ait değildi
                    const isNewAssignment = newOrder.status === 'assigned' && String(newOrder.courier_id) === String(courierId) && String(oldOrder.courier_id) !== String(courierId);
                    if (isNewAssignment) {
                        console.log('🔔 YENİ PAKET ATANDI (Kurye Foreground):', newOrder);
                        // 1. SES ÇAL
                        if (audioRef.current) {
                            audioRef.current.currentTime = 0;
                            audioRef.current.play().then({
                                "useCourierRealtimeNotifications.useEffect.channel": ()=>console.log('✅ Kurye bildirimi sesi çalıyor')
                            }["useCourierRealtimeNotifications.useEffect.channel"]).catch({
                                "useCourierRealtimeNotifications.useEffect.channel": (err)=>console.error('❌ Ses çalma hatası:', err)
                            }["useCourierRealtimeNotifications.useEffect.channel"]);
                        }
                        // 2. TOAST GÖSTER
                        const restaurantName = newOrder.restaurant?.name || 'Restoran';
                        const customerAddress = newOrder.delivery_address || 'Adres belirtilmemiş';
                        showToast('🚀 YENİ SİPARİŞ!', `${restaurantName} - ${customerAddress}`);
                    }
                }
            }["useCourierRealtimeNotifications.useEffect.channel"]).subscribe({
                "useCourierRealtimeNotifications.useEffect.channel": (status)=>{
                    console.log('📡 Kurye Realtime status:', status);
                    if (status === 'SUBSCRIBED') {
                        // 2 saniye sonra initial load korumasını kaldır
                        setTimeout({
                            "useCourierRealtimeNotifications.useEffect.channel": ()=>{
                                isInitialMount.current = false;
                                console.log('🔓 Kurye initial load koruması kaldırıldı');
                            }
                        }["useCourierRealtimeNotifications.useEffect.channel"], 2000);
                    }
                }
            }["useCourierRealtimeNotifications.useEffect.channel"]);
            return ({
                "useCourierRealtimeNotifications.useEffect": ()=>{
                    console.log('🔌 Kurye bildirimleri kapatılıyor');
                    isInitialMount.current = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useCourierRealtimeNotifications.useEffect"];
        }
    }["useCourierRealtimeNotifications.useEffect"], [
        courierId,
        isLoggedIn
    ]);
}
_s(useCourierRealtimeNotifications, "YJWJiNLQMI+/IKAKgBIE6fClHIk=");
// Toast gösterme fonksiyonu
function showToast(title, body) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const toastContainer = document.createElement('div');
    toastContainer.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    z-index: 999999;
    max-width: 90%;
    animation: slideDown 0.3s ease-out;
    font-family: system-ui, -apple-system, sans-serif;
  `;
    toastContainer.innerHTML = `
    <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">
      ${title}
    </div>
    <div style="font-size: 14px; opacity: 0.95;">
      ${body}
    </div>
  `;
    const style = document.createElement('style');
    style.textContent = `
    @keyframes slideDown {
      from {
        transform: translateX(-50%) translateY(-100px);
        opacity: 0;
      }
      to {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
    }
  `;
    document.head.appendChild(style);
    document.body.appendChild(toastContainer);
    setTimeout(()=>{
        toastContainer.style.animation = 'slideDown 0.3s ease-out reverse';
        setTimeout(()=>{
            if (document.body.contains(toastContainer)) {
                document.body.removeChild(toastContainer);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 300);
    }, 5000);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCourierLocationBroadcast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCourierLocationBroadcast",
    ()=>useCourierLocationBroadcast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
/**
 * @file src/hooks/useCourierLocationBroadcast.ts
 * @description Kurye Anlık Konum Yayını (Supabase Broadcast + Background Geolocation Watcher)
 *
 * MİMARİ:
 * - Bu hook, cihaz ekranı kilitliyken veya uygulama arka plandayken Android Doze Mode
 *   tarafından öldürülmeyen Foreground Service ve Background Geolocation yapısını kurar.
 * - Mesafe filtresi (distanceFilter) 15 metreye ayarlanmıştır.
 * - Konum değiştiğinde Supabase Broadcast kanalı üzerinden anlık yayını gerçekleştirir (DB I/O harcamaz).
 */ 'use client';
;
;
const BROADCAST_CHANNEL = 'courier-live-locations';
const BROADCAST_EVENT = 'location_update';
function useCourierLocationBroadcast({ courierId, courierName, isActive }) {
    _s();
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const watcherIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const webWatcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCourierLocationBroadcast.useEffect": ()=>{
            if (!isActive || !courierId) {
                console.log('📡 Broadcast devre dışı: isActive=', isActive, 'courierId=', courierId);
                return;
            }
            // Broadcast kanalını oluştur ve subscribe ol
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(BROADCAST_CHANNEL, {
                config: {
                    broadcast: {
                        self: false
                    }
                }
            });
            channel.subscribe({
                "useCourierLocationBroadcast.useEffect": (status)=>{
                    if (status === 'SUBSCRIBED') {
                        console.log('📡 Kurye broadcast kanalına bağlandı:', BROADCAST_CHANNEL);
                    }
                }
            }["useCourierLocationBroadcast.useEffect"]);
            channelRef.current = channel;
            // Arka plan konum takibini (Background Watcher) başlat
            const startTracking = {
                "useCourierLocationBroadcast.useEffect.startTracking": async ()=>{
                    try {
                        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.navigator.userAgent.includes('Mobile')) {
                            const bgGeoModule = await (()=>{
                                const e = new Error("Cannot find module '@capacitor-community/background-geolocation'");
                                e.code = 'MODULE_NOT_FOUND';
                                throw e;
                            })();
                            const BackgroundGeolocationPlugin = bgGeoModule.BackgroundGeolocationPlugin ?? bgGeoModule.default?.BackgroundGeolocationPlugin ?? bgGeoModule.default;
                            console.log('🔄 Arka plan konum takibi ve Foreground Service başlatılıyor...');
                            // Watcher ekle
                            const watcherId = await BackgroundGeolocationPlugin.addWatcher({
                                backgroundTitle: 'Mergen MERGEN aktif',
                                backgroundMessage: 'konum paylaşıyor',
                                requestPermissions: true,
                                stale: false,
                                distanceFilter: 15 // Mesafe filtresi 15 metre
                            }, {
                                "useCourierLocationBroadcast.useEffect.startTracking": async (location, error)=>{
                                    if (error) {
                                        console.error('❌ Arka plan konum hatası:', error);
                                        return;
                                    }
                                    if (!location) return;
                                    const { latitude, longitude, accuracy, speed, bearing, time } = location;
                                    const timestamp = time || Date.now();
                                    // Temel doğruluk filtresi
                                    if (!latitude || !longitude || latitude === 0 || longitude === 0) return;
                                    if (accuracy && accuracy > 100) return;
                                    // Supabase Broadcast ile anlık gönder (DB'ye yazmaz)
                                    if (channelRef.current) {
                                        channelRef.current.send({
                                            type: 'broadcast',
                                            event: BROADCAST_EVENT,
                                            payload: {
                                                courierId,
                                                courierName: courierName || 'Kurye',
                                                latitude,
                                                longitude,
                                                accuracy: accuracy || null,
                                                speed: speed || null,
                                                heading: bearing || null,
                                                timestamp: new Date(timestamp).toISOString()
                                            }
                                        }).then({
                                            "useCourierLocationBroadcast.useEffect.startTracking": ()=>{
                                                console.log('📡 Background Geolocation Broadcast gönderildi:', {
                                                    lat: latitude.toFixed(5),
                                                    lng: longitude.toFixed(5),
                                                    acc: accuracy?.toFixed(0) + 'm'
                                                });
                                            }
                                        }["useCourierLocationBroadcast.useEffect.startTracking"]).catch({
                                            "useCourierLocationBroadcast.useEffect.startTracking": (err)=>{
                                                console.error('❌ Broadcast gönderilemedi:', err);
                                            }
                                        }["useCourierLocationBroadcast.useEffect.startTracking"]);
                                    }
                                }
                            }["useCourierLocationBroadcast.useEffect.startTracking"]);
                            watcherIdRef.current = watcherId;
                            console.log('✅ Arka plan konum watcher başarıyla kuruldu, ID:', watcherId);
                        } else {
                            // Web platformu fallback
                            startWebFallback();
                        }
                    } catch (capacitorError) {
                        console.warn('⚠️ Capacitor Background Geolocation API hatası/desteklenmiyor, Web Geolocation API\'ye geçiliyor...', capacitorError);
                        startWebFallback();
                    }
                }
            }["useCourierLocationBroadcast.useEffect.startTracking"];
            const startWebFallback = {
                "useCourierLocationBroadcast.useEffect.startWebFallback": ()=>{
                    if (typeof navigator !== 'undefined' && navigator.geolocation) {
                        console.log('🔄 Web Geolocation watchPosition başlatılıyor...');
                        const webId = navigator.geolocation.watchPosition({
                            "useCourierLocationBroadcast.useEffect.startWebFallback.webId": (position)=>{
                                const { latitude, longitude, accuracy, speed, heading } = position.coords;
                                const timestamp = position.timestamp;
                                if (!latitude || !longitude || latitude === 0 || longitude === 0) return;
                                if (accuracy && accuracy > 100) return;
                                if (channelRef.current) {
                                    channelRef.current.send({
                                        type: 'broadcast',
                                        event: BROADCAST_EVENT,
                                        payload: {
                                            courierId,
                                            courierName: courierName || 'Kurye',
                                            latitude,
                                            longitude,
                                            accuracy: accuracy || null,
                                            speed: speed || null,
                                            heading: heading || null,
                                            timestamp: new Date(timestamp).toISOString()
                                        }
                                    }).then({
                                        "useCourierLocationBroadcast.useEffect.startWebFallback.webId": ()=>{
                                            console.log('📡 Web Geolocation Broadcast gönderildi:', {
                                                lat: latitude.toFixed(5),
                                                lng: longitude.toFixed(5)
                                            });
                                        }
                                    }["useCourierLocationBroadcast.useEffect.startWebFallback.webId"]).catch({
                                        "useCourierLocationBroadcast.useEffect.startWebFallback.webId": ()=>{}
                                    }["useCourierLocationBroadcast.useEffect.startWebFallback.webId"]);
                                }
                            }
                        }["useCourierLocationBroadcast.useEffect.startWebFallback.webId"], {
                            "useCourierLocationBroadcast.useEffect.startWebFallback.webId": (err)=>console.error('❌ Web Geolocation watchPosition hatası:', err.message)
                        }["useCourierLocationBroadcast.useEffect.startWebFallback.webId"], {
                            enableHighAccuracy: true,
                            timeout: 15000,
                            maximumAge: 0
                        });
                        webWatcherRef.current = webId;
                    }
                }
            }["useCourierLocationBroadcast.useEffect.startWebFallback"];
            startTracking();
            return ({
                "useCourierLocationBroadcast.useEffect": ()=>{
                    // Temizlik işlemleri
                    const stopTracking = {
                        "useCourierLocationBroadcast.useEffect.stopTracking": async ()=>{
                            // Mobile watcher temizliği
                            if (watcherIdRef.current) {
                                try {
                                    const bgGeoModule = await (()=>{
                                        const e = new Error("Cannot find module '@capacitor-community/background-geolocation'");
                                        e.code = 'MODULE_NOT_FOUND';
                                        throw e;
                                    })();
                                    const BackgroundGeolocationPlugin = bgGeoModule.BackgroundGeolocationPlugin ?? bgGeoModule.default?.BackgroundGeolocationPlugin ?? bgGeoModule.default;
                                    await BackgroundGeolocationPlugin.removeWatcher({
                                        id: watcherIdRef.current
                                    });
                                    console.log('🛑 Arka plan konum watcher durduruldu');
                                } catch (e) {
                                    console.error('❌ Arka plan watcher durdurulurken hata:', e);
                                }
                                watcherIdRef.current = null;
                            }
                            // Web watcher temizliği
                            if (webWatcherRef.current !== null && typeof navigator !== 'undefined' && navigator.geolocation) {
                                navigator.geolocation.clearWatch(webWatcherRef.current);
                                console.log('🛑 Web Geolocation watchPosition durduruldu');
                                webWatcherRef.current = null;
                            }
                            // Kanal temizliği
                            if (channelRef.current) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channelRef.current);
                                channelRef.current = null;
                                console.log('📡 Kurye broadcast kanalından ayrıldı');
                            }
                        }
                    }["useCourierLocationBroadcast.useEffect.stopTracking"];
                    stopTracking();
                }
            })["useCourierLocationBroadcast.useEffect"];
        }
    }["useCourierLocationBroadcast.useEffect"], [
        courierId,
        courierName,
        isActive
    ]);
}
_s(useCourierLocationBroadcast, "HC4eXMClMJeeB757BhTlsPqZ0Zs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PullToRefresh.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PullToRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/components/PullToRefresh.tsx
 * @description Pull-to-Refresh wrapper component for mobile UX
 */ 'use client';
;
;
function PullToRefresh({ onRefresh, children, darkMode = false }) {
    _s();
    const [pullDistance, setPullDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canPull, setCanPull] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const PULL_THRESHOLD = 80 // Minimum pull distance to trigger refresh
    ;
    const MAX_PULL = 120 // Maximum visual pull distance
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PullToRefresh.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleTouchStart = {
                "PullToRefresh.useEffect.handleTouchStart": (e)=>{
                    // Sadece sayfa en üstteyken pull-to-refresh aktif
                    const scrollTop = container.scrollTop;
                    if (scrollTop === 0) {
                        touchStartY.current = e.touches[0].clientY;
                        setCanPull(true);
                    } else {
                        setCanPull(false);
                    }
                }
            }["PullToRefresh.useEffect.handleTouchStart"];
            const handleTouchMove = {
                "PullToRefresh.useEffect.handleTouchMove": (e)=>{
                    if (!canPull || isRefreshing) return;
                    const touchY = e.touches[0].clientY;
                    const distance = touchY - touchStartY.current;
                    // Sadece aşağı doğru çekme
                    if (distance > 0) {
                        // Overscroll effect - yavaşlatma
                        const dampedDistance = Math.min(distance * 0.5, MAX_PULL);
                        setPullDistance(dampedDistance);
                        // Varsayılan scroll davranışını engelle
                        if (dampedDistance > 10) {
                            e.preventDefault();
                        }
                    }
                }
            }["PullToRefresh.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "PullToRefresh.useEffect.handleTouchEnd": async ()=>{
                    if (!canPull || isRefreshing) return;
                    // Eşik değeri aşıldıysa refresh tetikle
                    if (pullDistance >= PULL_THRESHOLD) {
                        setIsRefreshing(true);
                        setPullDistance(PULL_THRESHOLD); // Spinner pozisyonunu sabitle
                        try {
                            await onRefresh();
                        } catch (error) {
                            console.error('Pull-to-refresh error:', error);
                        } finally{
                            setIsRefreshing(false);
                            setPullDistance(0);
                        }
                    } else {
                        // Eşik aşılmadıysa geri çek
                        setPullDistance(0);
                    }
                    setCanPull(false);
                }
            }["PullToRefresh.useEffect.handleTouchEnd"];
            container.addEventListener('touchstart', handleTouchStart, {
                passive: true
            });
            container.addEventListener('touchmove', handleTouchMove, {
                passive: false
            });
            container.addEventListener('touchend', handleTouchEnd, {
                passive: true
            });
            return ({
                "PullToRefresh.useEffect": ()=>{
                    container.removeEventListener('touchstart', handleTouchStart);
                    container.removeEventListener('touchmove', handleTouchMove);
                    container.removeEventListener('touchend', handleTouchEnd);
                }
            })["PullToRefresh.useEffect"];
        }
    }["PullToRefresh.useEffect"], [
        canPull,
        pullDistance,
        isRefreshing,
        onRefresh
    ]);
    const spinnerOpacity = Math.min(pullDistance / PULL_THRESHOLD, 1);
    const spinnerRotation = pullDistance / PULL_THRESHOLD * 360;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            transform: `translateY(${pullDistance}px)`,
            transition: isRefreshing || pullDistance === 0 ? 'transform 0.3s ease-out' : 'none'
        },
        className: "jsx-ff693afc4b22039f" + " " + "relative h-screen overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: `${PULL_THRESHOLD}px`,
                    transform: `translateY(-${PULL_THRESHOLD - pullDistance}px)`,
                    opacity: spinnerOpacity,
                    transition: pullDistance === 0 ? 'opacity 0.3s ease-out' : 'none'
                },
                className: "jsx-ff693afc4b22039f" + " " + "absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ff693afc4b22039f" + " " + "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: isRefreshing ? 'rotate(0deg)' : `rotate(${spinnerRotation}deg)`,
                                animation: isRefreshing ? 'spin 1s linear infinite' : 'none'
                            },
                            className: "jsx-ff693afc4b22039f" + " " + `w-8 h-8 border-3 rounded-full ${darkMode ? 'border-slate-600 border-t-orange-500' : 'border-gray-300 border-t-orange-600'}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/PullToRefresh.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        pullDistance >= PULL_THRESHOLD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-ff693afc4b22039f" + " " + `text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                            children: isRefreshing ? 'Yenileniyor...' : 'Bırakın'
                        }, void 0, false, {
                            fileName: "[project]/src/components/PullToRefresh.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PullToRefresh.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PullToRefresh.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ff693afc4b22039f",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PullToRefresh.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(PullToRefresh, "5naRoF5cvAuIdKoQ6bco5Tc5kJA=");
_c = PullToRefresh;
var _c;
__turbopack_context__.k.register(_c, "PullToRefresh");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChangelogModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangelogModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ChangelogModal({ userType, userId }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChangelogModal.useEffect": ()=>{
            checkIfShouldShow();
        }
    }["ChangelogModal.useEffect"], [
        userId,
        userType
    ]);
    const checkIfShouldShow = async ()=>{
        if (!userId) {
            setIsChecking(false);
            return;
        }
        try {
            // Kullanıcı tipine göre doğru tabloyu seç
            const tableName = userType === 'courier' ? 'couriers' : userType === 'restaurant' ? 'restaurants' : 'admins';
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).select('has_seen_v2_update').eq('id', userId).single();
            if (error) {
                console.error('Changelog kontrol hatası:', error);
                setIsChecking(false);
                return;
            }
            // Eğer kullanıcı henüz görmemişse modalı göster
            if (data && data.has_seen_v2_update === false) {
                setIsVisible(true);
            }
        } catch (error) {
            console.error('Changelog kontrol hatası:', error);
        } finally{
            setIsChecking(false);
        }
    };
    const handleClose = async ()=>{
        // Optimistic UI: Modalı ANINDA kapat
        setIsVisible(false);
        // Arka planda veritabanını güncelle
        if (!userId) return;
        try {
            const tableName = userType === 'courier' ? 'couriers' : userType === 'restaurant' ? 'restaurants' : 'admins';
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(tableName).update({
                has_seen_v2_update: true
            }).eq('id', userId);
            console.log('✅ Changelog görüldü olarak işaretlendi');
        } catch (error) {
            console.error('❌ Changelog güncelleme hatası:', error);
        }
    };
    // Kontrol devam ediyorsa veya modal görünmeyecekse hiçbir şey render etme
    if (isChecking || !isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl",
                                    children: "🚀"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-white",
                                            children: "Alda-Gel Kurye v2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChangelogModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-400",
                                            children: "Güncelleme Yayında!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChangelogModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChangelogModal.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 text-lg leading-relaxed",
                            children: "Sistemimizi sizin için daha hızlı, daha güvenilir ve daha kullanışlı hale getirdik. İşte yeni özellikler:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "📱"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Tam Mobil Uyumluluk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm leading-relaxed",
                                                        children: "Restoran paneli artık telefonlarda kusursuz çalışıyor. 3'lü finansal kartlarla net kârınızı telefondan anında görün."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "💰"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Gelişmiş Finansal Mutabakat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm leading-relaxed",
                                                        children: "Kurye gün sonu ve hakediş hesaplamaları tamamen şeffaf ve yeni nesil 'Business' tasarıma geçirildi."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "⏱️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Detaylı Sipariş Zaman Çizelgesi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm leading-relaxed",
                                                        children: "Siparişlerin oluşturulma, hazırlanma, kuryeye atanma ve teslim edilme saatleri saniyesi saniyesine geri getirildi."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "💳"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Kurye Kazanç Yönetimi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm leading-relaxed",
                                                        children: "Kuryelerin ödenmemiş paketleri ve hakedişleri artık sistem üzerinden tek tıkla ('Öde' butonu ile) yönetiliyor."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "🛠️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Sistem Hızlandırması"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm leading-relaxed",
                                                        children: "Ekranların kapanmama, donma veya yanlış tarih getirme hataları (bug'lar) sıfırdan yazılan 'Stateless' mimariyle kökünden çözüldü."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/50 rounded-xl p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-200 text-sm text-center leading-relaxed",
                                children: "💜 Daha iyi bir deneyim için çalışmaya devam ediyoruz. Geri bildirimleriniz bizim için çok değerli!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl",
                            children: "✨ Harika, Anladım!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChangelogModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ChangelogModal.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ChangelogModal.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(ChangelogModal, "CTcIRRUt8el6E30cCZ/0yoNT7MY=");
_c = ChangelogModal;
var _c;
__turbopack_context__.k.register(_c, "ChangelogModal");
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
"[project]/src/services/courierLoginService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateCourier",
    ()=>authenticateCourier,
    "getCourierAccountStatusError",
    ()=>getCourierAccountStatusError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
;
function isMissingCourierLoginRpc(error) {
    if (!error) return false;
    const code = error.code ?? '';
    const message = (error.message ?? '').toLowerCase();
    return code === 'PGRST202' || code === '42883' || message.includes('courier_login') || message.includes('could not find the function');
}
function mapAccountStatusError(status) {
    if (status === 'terminated') {
        return '❌ Hesabınız kapatılmış! Yöneticinizle iletişime geçin.';
    }
    if (status === 'suspended') {
        return '❌ Hesabınız askıya alınmış! Yöneticinizle iletişime geçin.';
    }
    return null;
}
async function loginViaDirectQuery(username, password) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').select('id, full_name, username, account_status').eq('username', username).eq('password', password).maybeSingle();
    if (error) {
        return {
            ok: false,
            reason: 'db_error',
            message: error.message
        };
    }
    if (!data) {
        return {
            ok: false,
            reason: 'invalid_credentials'
        };
    }
    const accountError = mapAccountStatusError(data.account_status);
    if (!accountError) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
            is_active: true,
            status: 'idle'
        }).eq('id', data.id);
    }
    return {
        ok: true,
        courier: data
    };
}
async function authenticateCourier(username, password) {
    const trimmedUsername = username.trim();
    const { data: rpcRows, error: rpcError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('courier_login', {
        p_username: trimmedUsername,
        p_password: password
    });
    if (!rpcError) {
        const courier = rpcRows?.[0];
        if (!courier) {
            return {
                ok: false,
                reason: 'invalid_credentials'
            };
        }
        return {
            ok: true,
            courier
        };
    }
    if (!isMissingCourierLoginRpc(rpcError)) {
        return {
            ok: false,
            reason: 'db_error',
            message: rpcError.message
        };
    }
    return loginViaDirectQuery(trimmedUsername, password);
}
function getCourierAccountStatusError(accountStatus) {
    return mapAccountStatusError(accountStatus);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/kurye/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KuryePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/preferences/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourierEarningsStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CourierEarningsStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCourierRealtimeNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCourierRealtimeNotifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCourierLocationBroadcast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCourierLocationBroadcast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PullToRefresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PullToRefresh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangelogModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChangelogModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePersistedDateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePersistedDateRange.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/utils/courierAccount.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierLedger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/courierLedger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$courierLoginService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/courierLoginService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
/**
 * @file src/app/kurye/page.tsx
 * @description Kurye Arayüzü Uygulaması.
 * Kuryelerin kendilerine atanan paketleri gördüğü, teslimat süreçlerini 
 * (yola çıktı, teslim edildi vb.) yönettiği ve günlük performanslarını 
 * takip ettiği ana mobil uyumlu arayüzdür. Sesli komut desteği ve 
 * anlık bildirim özelliklerini içerir.
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
;
;
;
;
;
// ============================================
// SAMSUN OPERASYON BÖLGESI TANIMLARI
// ============================================
const OPERATION_BOUNDS = {
    minLat: 41.20,
    maxLat: 41.60,
    minLng: 35.90,
    maxLng: 36.40 // Samsun doğu sınırı
};
const OPERATION_CENTER = {
    lat: 41.494714153011856,
    lng: 36.07827997146362
};
// Geliştirme ortamı kontrolü
const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
// ============================================
// TELEFON NUMARASI FORMATTER (WhatsApp için)
// ============================================
/**
 * Telefon numarasını WhatsApp wa.me formatına çevirir
 * @param phone - Ham telefon numarası (boşluklu, tireli, parantezli olabilir)
 * @returns 905xxxxxxxxx formatında 12 haneli numara
 * 
 * Örnekler:
 * - "0505 123 45 67" -> "905051234567"
 * - "(505) 123-4567" -> "905051234567"
 * - "+90 505 123 45 67" -> "905051234567"
 * - "5051234567" -> "905051234567"
 * - "905051234567" -> "905051234567"
 */ const formatPhoneForWhatsApp = (phone)=>{
    if (!phone) return '';
    // 1. Tüm özel karakterleri temizle (sadece rakamlar kalsın)
    let cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
    // 2. Ülke kodu mantığı
    if (cleaned.startsWith('0')) {
        // 0505... -> 905...
        cleaned = '90' + cleaned.substring(1);
    } else if (cleaned.startsWith('5')) {
        // 505... -> 905...
        cleaned = '90' + cleaned;
    } else if (!cleaned.startsWith('90')) {
        // Diğer durumlar için başına 90 ekle
        cleaned = '90' + cleaned;
    }
    // 3. 12 haneli olmalı (905xxxxxxxxx)
    if (cleaned.length !== 12) {
        console.warn('⚠️ Geçersiz telefon numarası formatı:', phone, '-> Temizlenmiş:', cleaned);
    }
    return cleaned;
};
// KALICI OTURUM YONETIMI - MULTIPLE STORAGE
const STORAGE_KEYS = {
    LOGIN: 'kurye_logged_in',
    COURIER_ID: 'kurye_logged_courier_id',
    BACKUP_LOGIN: 'kurye_backup_logged_in',
    BACKUP_COURIER_ID: 'kurye_backup_courier_id'
};
// Kalici storage fonksiyonlari
const saveSession = async (courierId)=>{
    try {
        // 1. localStorage (hizli erisim)
        localStorage.setItem(STORAGE_KEYS.LOGIN, 'true');
        localStorage.setItem(STORAGE_KEYS.COURIER_ID, courierId);
        localStorage.setItem(STORAGE_KEYS.BACKUP_LOGIN, 'true');
        localStorage.setItem(STORAGE_KEYS.BACKUP_COURIER_ID, courierId);
        // 2. Capacitor Preferences (native storage)
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].set({
            key: STORAGE_KEYS.LOGIN,
            value: 'true'
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].set({
            key: STORAGE_KEYS.COURIER_ID,
            value: courierId
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].set({
            key: STORAGE_KEYS.BACKUP_LOGIN,
            value: 'true'
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].set({
            key: STORAGE_KEYS.BACKUP_COURIER_ID,
            value: courierId
        });
        // 3. IndexedDB (browser persistent storage)
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'indexedDB' in window) {
            const request = indexedDB.open('KuryeDB', 1);
            request.onupgradeneeded = ()=>{
                const db = request.result;
                if (!db.objectStoreNames.contains('sessions')) {
                    db.createObjectStore('sessions');
                }
            };
            request.onsuccess = ()=>{
                const db = request.result;
                const transaction = db.transaction([
                    'sessions'
                ], 'readwrite');
                const store = transaction.objectStore('sessions');
                store.put('true', 'logged_in');
                store.put(courierId, 'courier_id');
            };
        }
        console.log('Oturum 3 farkli storage a kaydedildi');
    } catch (error) {
        console.error('Oturum kaydetme hatasi:', error);
    }
};
const loadSession = async ()=>{
    try {
        // 1. Capacitor Preferences'tan dene
        const { value: prefLoggedIn } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].get({
            key: STORAGE_KEYS.LOGIN
        });
        const { value: prefCourierId } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].get({
            key: STORAGE_KEYS.COURIER_ID
        });
        if (prefLoggedIn === 'true' && prefCourierId) {
            console.log('Capacitor Preferences tan oturum bulundu');
            return {
                loggedIn: true,
                courierId: prefCourierId
            };
        }
        // 2. localStorage'dan dene
        const localLoggedIn = localStorage.getItem(STORAGE_KEYS.LOGIN);
        const localCourierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (localLoggedIn === 'true' && localCourierId) {
            console.log('localStorage dan oturum bulundu');
            // Diger storage lara da kaydet
            await saveSession(localCourierId);
            return {
                loggedIn: true,
                courierId: localCourierId
            };
        }
        // 3. Backup localStorage'dan dene
        const backupLoggedIn = localStorage.getItem(STORAGE_KEYS.BACKUP_LOGIN);
        const backupCourierId = localStorage.getItem(STORAGE_KEYS.BACKUP_COURIER_ID);
        if (backupLoggedIn === 'true' && backupCourierId) {
            console.log('Backup localStorage dan oturum bulundu');
            await saveSession(backupCourierId);
            return {
                loggedIn: true,
                courierId: backupCourierId
            };
        }
        // 4. IndexedDB'den dene
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'indexedDB' in window) {
            return new Promise((resolve)=>{
                const request = indexedDB.open('KuryeDB', 1);
                request.onsuccess = ()=>{
                    const db = request.result;
                    if (db.objectStoreNames.contains('sessions')) {
                        const transaction = db.transaction([
                            'sessions'
                        ], 'readonly');
                        const store = transaction.objectStore('sessions');
                        const loggedInReq = store.get('logged_in');
                        const courierIdReq = store.get('courier_id');
                        loggedInReq.onsuccess = ()=>{
                            courierIdReq.onsuccess = ()=>{
                                if (loggedInReq.result === 'true' && courierIdReq.result) {
                                    console.log('IndexedDB den oturum bulundu');
                                    saveSession(courierIdReq.result);
                                    resolve({
                                        loggedIn: true,
                                        courierId: courierIdReq.result
                                    });
                                } else {
                                    resolve({
                                        loggedIn: false,
                                        courierId: null
                                    });
                                }
                            };
                        };
                    } else {
                        resolve({
                            loggedIn: false,
                            courierId: null
                        });
                    }
                };
                request.onerror = ()=>resolve({
                        loggedIn: false,
                        courierId: null
                    });
            });
        }
        return {
            loggedIn: false,
            courierId: null
        };
    } catch (error) {
        console.error('Oturum yukleme hatasi:', error);
        return {
            loggedIn: false,
            courierId: null
        };
    }
};
const clearSession = async ()=>{
    try {
        // 1. Kurye-spesifik localStorage temizliği
        localStorage.removeItem(STORAGE_KEYS.LOGIN);
        localStorage.removeItem(STORAGE_KEYS.COURIER_ID);
        localStorage.removeItem(STORAGE_KEYS.BACKUP_LOGIN);
        localStorage.removeItem(STORAGE_KEYS.BACKUP_COURIER_ID);
        // 2. Capacitor Preferences temizliği
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].remove({
            key: STORAGE_KEYS.LOGIN
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].remove({
            key: STORAGE_KEYS.COURIER_ID
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].remove({
            key: STORAGE_KEYS.BACKUP_LOGIN
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].remove({
            key: STORAGE_KEYS.BACKUP_COURIER_ID
        });
        // 3. IndexedDB temizliği
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'indexedDB' in window) {
            const request = indexedDB.open('KuryeDB', 1);
            request.onsuccess = ()=>{
                const db = request.result;
                if (db.objectStoreNames.contains('sessions')) {
                    const transaction = db.transaction([
                        'sessions'
                    ], 'readwrite');
                    const store = transaction.objectStore('sessions');
                    store.clear();
                }
            };
        }
        // 4. Supabase auth token temizliği
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        console.log('✅ Tüm oturum verileri temizlendi (localStorage, Preferences, IndexedDB, Supabase Auth)');
    } catch (error) {
        console.error('❌ Oturum temizleme hatası:', error);
    }
};
function KuryePage() {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginForm, setLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: ''
    });
    const [selectedCourierId, setSelectedCourierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deliveredCount, setDeliveredCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedPaymentMethods, setSelectedPaymentMethods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showIbanModal, setShowIbanModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ibanPackageId, setIbanPackageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ibanPackageAmount, setIbanPackageAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Ücretlendirilmiş İptal State'leri
    const [showCancelModal, setShowCancelModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cancellingPackage, setCancellingPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cancelLoading, setCancelLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cashTotal, setCashTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cardTotal, setCardTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showSummary, setShowSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [courierStatus, setCourierStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [is_active, setIs_active] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusUpdating, setStatusUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true) // Varsayılan dark mode
    ;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('packages') // Aktif sekme
    ;
    // Google Play Uyumlu Belirgin İzin Beyanı Modalı State'leri
    const [showLocationDisclosure, setShowLocationDisclosure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingStatusParams, setPendingStatusParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [courierName, setCourierName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('') // Giriş yapan kuryenin ismi
    ;
    const [courierNameLoading, setCourierNameLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true) // Kurye adı yükleniyor mu?
    ;
    // YENİ: Ödeme sistemi state'leri
    const [courierPaymentType, setCourierPaymentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('paket_basi');
    const [courierPackageRate, setCourierPackageRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [todayDeliveredPackages, setTodayDeliveredPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]) // Bugünkü teslim edilenler
    ;
    const [filteredPackages, setFilteredPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]) // Filtrelenmiş paketler
    ;
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1) // Mevcut sayfa
    ;
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1) // Toplam sayfa sayısı
    ;
    const [unsettledAmount, setUnsettledAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // Tüm zamanlar cari borç
    ;
    const [unpaidEarningsAmount, setUnpaidEarningsAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // is_courier_earned_paid=false bazlı rozet
    ;
    const [periodAccount, setPeriodAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cash: 0,
        card: 0,
        iban: 0,
        count: 0,
        total: 0,
        payableDebt: 0
    });
    const ITEMS_PER_PAGE = 30 // Sayfa başına öğe sayısı
    ;
    // Realtime bildirimler + FCM Token kaydı (UPDATE event'leri + Push)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCourierRealtimeNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCourierRealtimeNotifications"])(selectedCourierId, isLoggedIn);
    // 📡 CANLI KONUM YAYINI (Supabase Broadcast - DB I/O Harcamayan WebSocket yapısı)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCourierLocationBroadcast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCourierLocationBroadcast"])({
        courierId: selectedCourierId || '',
        courierName: courierName || 'Kurye',
        isActive: isLoggedIn && is_active
    });
    // Şifre değiştirme modal state'leri
    const [showPasswordModal, setShowPasswordModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordForm, setPasswordForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordUpdating, setPasswordUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordError, setPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const historyRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePersistedDateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistedDateRange"])('kurye-history-range');
    const historyStartDate = historyRange.startDate;
    const historyEndDate = historyRange.endDate;
    const setHistoryStartDate = historyRange.setStartDate;
    const setHistoryEndDate = historyRange.setEndDate;
    // SESLİ KOMUT STATE'LERİ
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voiceCommand, setVoiceCommand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [recognition, setRecognition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVoiceHelp, setShowVoiceHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // Sesli komut yardım pop-up'ı
    ;
    const voiceTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null) // Timeout referansı
    ;
    // SCROLL POZİSYONU KORUMA
    const scrollPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // PACKAGES REF - Sesli komutlar için güncel state
    const packagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // SAYISAL ETİKETLEME (SLOT SYSTEM) - SABİT NUMARALANDIRMA
    const [packageSlots, setPackageSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}) // packageId -> slotNumber
    ;
    // ============================================
    // PULL-TO-REFRESH HANDLER
    // ============================================
    const handleRefresh = async ()=>{
        await Promise.all([
            fetchPackages(false),
            fetchDeliveredCount(),
            fetchTodayDeliveredPackages(),
            fetchUnpaidEarningsBadge(),
            fetchAccountOpenPackages()
        ]);
    };
    // ============================================
    // PUSH NOTIFICATIONS HOOK
    // ============================================
    // ŞİFRE DEĞİŞTİRME FONKSİYONU
    // ============================================
    const handlePasswordChange = async (e)=>{
        e.preventDefault();
        setPasswordError('');
        // Validasyon
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setPasswordError('Yeni şifreler eşleşmiyor!');
            return;
        }
        if (passwordForm.newPassword.length < 6) {
            setPasswordError('Yeni şifre en az 6 karakter olmalıdır!');
            return;
        }
        if (!passwordForm.oldPassword) {
            setPasswordError('Eski şifrenizi girin!');
            return;
        }
        setPasswordUpdating(true);
        try {
            // Önce mevcut kullanıcının email'ini al
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user?.email) {
                setPasswordError('Kullanıcı bilgileri alınamadı!');
                return;
            }
            // Eski şifreyi doğrula
            const { error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email: user.email,
                password: passwordForm.oldPassword
            });
            if (signInError) {
                setPasswordError('Eski şifre hatalı!');
                return;
            }
            // Şifreyi güncelle
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
                password: passwordForm.newPassword
            });
            if (updateError) {
                setPasswordError('Şifre güncellenemedi: ' + updateError.message);
                return;
            }
            // Başarılı
            setSuccessMessage('Şifreniz başarıyla güncellendi!');
            setShowPasswordModal(false);
            setPasswordForm({
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            // Success mesajını 3 saniye sonra temizle
            setTimeout(()=>setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Şifre güncelleme hatası:', error);
            setPasswordError('Şifre güncellenemedi: ' + error.message);
        } finally{
            setPasswordUpdating(false);
        }
    };
    // Packages değiştiğinde ref'i güncelle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            packagesRef.current = packages;
        }
    }["KuryePage.useEffect"], [
        packages
    ]);
    // Paketlere SABİT slot numarası ata (en küçük boş numarayı doldur)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (packages.length === 0) {
                setPackageSlots({});
                return;
            }
            setPackageSlots({
                "KuryePage.useEffect": (prevSlots)=>{
                    const newSlots = {};
                    const currentPackageIds = packages.map({
                        "KuryePage.useEffect.currentPackageIds": (p)=>p.id
                    }["KuryePage.useEffect.currentPackageIds"]);
                    // Mevcut paketlerin slot'larını koru (SABİT KALSIN)
                    currentPackageIds.forEach({
                        "KuryePage.useEffect": (pkgId)=>{
                            if (prevSlots[pkgId]) {
                                newSlots[pkgId] = prevSlots[pkgId];
                            }
                        }
                    }["KuryePage.useEffect"]);
                    // Yeni paketler için en küçük boş slot'u bul ve ata
                    currentPackageIds.forEach({
                        "KuryePage.useEffect": (pkgId)=>{
                            if (!newSlots[pkgId]) {
                                const usedSlots = Object.values(newSlots);
                                // En küçük boş numarayı bul (1-10 arası)
                                for(let i = 1; i <= 10; i++){
                                    if (!usedSlots.includes(i)) {
                                        newSlots[pkgId] = i;
                                        break;
                                    }
                                }
                            }
                        }
                    }["KuryePage.useEffect"]);
                    return newSlots;
                }
            }["KuryePage.useEffect"]);
        }
    }["KuryePage.useEffect"], [
        packages.map({
            "KuryePage.useEffect": (p)=>p.id
        }["KuryePage.useEffect"]).sort().join(',')
    ]);
    // Sesli komut yardım pop-up'ı - SADECE DİNLEME MODUNDA 10 saniye sonra göster
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (!isMounted || !isLoggedIn || !isListening) {
                return;
            }
            const timer = setTimeout({
                "KuryePage.useEffect.timer": ()=>{
                    setShowVoiceHelp(true);
                }
            }["KuryePage.useEffect.timer"], 10000) // 10 saniye
            ;
            return ({
                "KuryePage.useEffect": ()=>clearTimeout(timer)
            })["KuryePage.useEffect"];
        }
    }["KuryePage.useEffect"], [
        isMounted,
        isLoggedIn,
        isListening
    ]);
    // Build-safe mount kontrolü
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            setIsMounted(true);
        }
    }["KuryePage.useEffect"], []);
    // Android Back Button Handler - Tab-Aware
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !isMounted) return;
            let backButtonListener;
            const setupBackButton = {
                "KuryePage.useEffect.setupBackButton": async ()=>{
                    try {
                        // Android back button'a basıldığında
                        backButtonListener = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].addListener('backButton', {
                            "KuryePage.useEffect.setupBackButton": ()=>{
                                // Eğer ana sekme (packages) dışındaysa, önce ana sekmeye dön
                                if (activeTab !== 'packages') {
                                    setActiveTab('packages');
                                } else {
                                    // Ana sekmedeyse uygulamayı minimize et (Login'e dönme!)
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$app$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["App"].minimizeApp();
                                }
                            }
                        }["KuryePage.useEffect.setupBackButton"]);
                    } catch (error) {
                        console.log('Back button listener eklenemedi (web ortamı olabilir):', error);
                    }
                }
            }["KuryePage.useEffect.setupBackButton"];
            setupBackButton();
            return ({
                "KuryePage.useEffect": ()=>{
                    // Cleanup
                    if (backButtonListener) {
                        backButtonListener.remove();
                    }
                }
            })["KuryePage.useEffect"];
        }
    }["KuryePage.useEffect"], [
        isMounted,
        activeTab
    ]);
    // ÇELİK GİBİ OTURUM KONTROLÜ - SAYFA YENİLENDİĞİNDE DIŞARI ATMA!
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!isMounted) return;
            setIsCheckingAuth(true);
            const checkSession = {
                "KuryePage.useEffect.checkSession": async ()=>{
                    try {
                        const session = await loadSession();
                        if (session.loggedIn && session.courierId) {
                            console.log('✅ Kalıcı oturum bulundu:', session.courierId);
                            setIsLoggedIn(true);
                            setSelectedCourierId(session.courierId);
                            setIsCheckingAuth(false);
                            return;
                        }
                        // KATI ROTA GÜVENLİĞİ: Kurye değilse anında ana sayfaya at
                        setIsLoggedIn(false);
                        window.location.href = '/';
                    } catch (error) {
                        console.error('Session kontrolü hatası:', error);
                        setIsLoggedIn(false);
                        window.location.href = '/';
                    } finally{
                        setIsCheckingAuth(false);
                    }
                }
            }["KuryePage.useEffect.checkSession"];
            checkSession();
        }
    }["KuryePage.useEffect"], [
        isMounted
    ]);
    // Heartbeat fonksiyonu - Kurye aktiflik sinyali
    const sendHeartbeat = async ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
                updated_at: new Date().toISOString()
            }).eq('id', courierId);
        } catch (error) {
            console.error('Heartbeat hatası:', error);
        }
    };
    const fetchPackages = async (isInitialLoad = false)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            if (isInitialLoad) setIsLoading(true);
            await sendHeartbeat();
            // ⚡ OPTİMİZE: Sadece gerekli kolonları çek + LIMIT
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id, order_number, customer_name, customer_phone, delivery_address, amount, status, payment_method, content, created_at, assigned_at, ready_at, picked_up_at, restaurant_id, platform, latitude, longitude, restaurants(name, phone, address)').eq('courier_id', courierId).in('status', [
                'new',
                'preparing',
                'ready',
                'assigned',
                'picking_up',
                'on_the_way'
            ]).order('created_at', {
                ascending: false
            }).limit(50);
            if (error) throw error;
            const transformed = (data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: pkg.restaurants
                }));
            setPackages(transformed);
        } catch (error) {
            // ⚡ Timeout hatası için özel mesaj
            const errorMsg = error.message?.toLowerCase() || '';
            if (errorMsg.includes('timeout') || errorMsg.includes('statement timeout')) {
                setErrorMessage('⏱️ Bağlantı yavaş, tekrar deneniyor...');
                setTimeout(()=>fetchPackages(isInitialLoad), 2000);
                return;
            }
            // İnternet hatalarını sessizce geç
            if (errorMsg.includes('failed to fetch') || errorMsg.includes('network')) {
                console.warn('⚠️ Bağlantı hatası (sessiz):', error.message);
                return; // Eski veriler ekranda kalsın
            }
            console.error('❌ Paketler yüklenemedi:', error);
            setErrorMessage('Paketler yüklenemedi: ' + error.message);
        } finally{
            if (isInitialLoad) setIsLoading(false);
        }
    };
    const fetchDailyStats = async ()=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            const todayStart = new Date();
            todayStart.setHours(0, 0, 0, 0);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('amount, payment_method, status').eq('delivered_by_courier_id', courierId) // courier_id yerine delivered_by_courier_id
            .eq('status', 'delivered').gte('delivered_at', todayStart.toISOString());
            if (error) throw error;
            if (data) {
                setDeliveredCount(data.length);
                setCashTotal(data.filter((p)=>p.payment_method === 'cash').reduce((sum, p)=>{
                    return sum + (p.amount || 0);
                }, 0));
                setCardTotal(data.filter((p)=>p.payment_method === 'card').reduce((sum, p)=>{
                    return sum + (p.amount || 0);
                }, 0));
            }
        } catch (error) {
            // ⚡ Timeout hatası için özel mesaj
            const errorMsg = error.message?.toLowerCase() || '';
            if (errorMsg.includes('timeout') || errorMsg.includes('statement timeout')) {
                console.warn('⏱️ İstatistikler timeout, atlanıyor');
                return;
            }
            // İnternet hatalarını sessizce geç
            if (errorMsg.includes('failed to fetch') || errorMsg.includes('network')) {
                console.warn('⚠️ Bağlantı hatası (sessiz):', error.message);
                return;
            }
            console.error('❌ İstatistik yüklenemedi:', error);
            setErrorMessage('İstatistikler yüklenemedi: ' + error.message);
        }
    };
    // Üst bar "Kazanç" rozeti: is_courier_earned_paid = false paket sayısı * package_rate
    const fetchUnpaidEarningsBadge = async ()=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            const { count, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id', {
                count: 'exact',
                head: true
            }).eq('delivered_by_courier_id', courierId).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').or('is_courier_earned_paid.is.null,is_courier_earned_paid.eq.false');
            if (error) throw error;
            const pkgCount = count || 0;
            setUnpaidEarningsAmount(pkgCount * (courierPackageRate || 0));
        } catch (error) {
            console.error('❌ Kazanç rozeti hesaplanamadı:', error);
        }
    };
    // Bugünkü teslim edilen paketleri çek
    const fetchTodayDeliveredPackages = async ()=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            const todayStart = new Date();
            todayStart.setHours(0, 0, 0, 0);
            // ⚡ OPTİMİZE: Sadece gerekli kolonları çek + LIMIT
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id, order_number, customer_name, delivery_address, amount, payment_method, status, delivered_at, restaurant_id, restaurants(name)').eq('delivered_by_courier_id', courierId) // courier_id yerine delivered_by_courier_id
            .or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').gte('created_at', todayStart.toISOString()).order('created_at', {
                ascending: false
            }).limit(100) // ⚡ LIMIT ekle
            ;
            if (error) throw error;
            console.log('📦 Bugün teslim edilen paketler:', data?.length || 0);
            const transformed = (data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: pkg.restaurants
                }));
            setTodayDeliveredPackages(transformed);
        } catch (error) {
            // ⚡ Timeout hatası için özel mesaj
            const errorMsg = error.message?.toLowerCase() || '';
            if (errorMsg.includes('timeout') || errorMsg.includes('statement timeout')) {
                console.warn('⏱️ Geçmiş paketler timeout, atlanıyor');
                return;
            }
            if (errorMsg.includes('failed to fetch') || errorMsg.includes('network')) {
                console.warn('⚠️ Bağlantı hatası (sessiz):', error.message);
                return;
            }
            console.error('❌ Geçmiş paketler yüklenemedi:', error);
        }
    };
    const fetchCourierStatus = async ()=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            setCourierNameLoading(true); // Loading başlat
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').select('status, is_active, full_name, payment_type, package_rate').eq('id', courierId).maybeSingle();
            if (error) throw error;
            if (data) {
                setCourierStatus(data.status);
                setIs_active(data.is_active || false);
                setCourierName(data.full_name || ''); // Hardcode fallback kaldırıldı
                // YENİ: Ödeme bilgilerini state'e kaydet
                setCourierPaymentType(data.payment_type || 'paket_basi');
                setCourierPackageRate(data.package_rate || 0);
            }
        } catch (error) {
            // ⚡ Timeout hatası için özel mesaj
            const errorMsg = error.message?.toLowerCase() || '';
            if (errorMsg.includes('timeout') || errorMsg.includes('statement timeout')) {
                console.warn('⏱️ Kurye durumu timeout, tekrar deneniyor...');
                setTimeout(()=>fetchCourierStatus(), 3000);
                return;
            }
            // İnternet hatalarını sessizce geç
            if (errorMsg.includes('failed to fetch') || errorMsg.includes('network')) {
                console.warn('⚠️ Bağlantı hatası (sessiz):', error.message);
                return;
            }
            console.error('❌ Kurye durumu alınamadı:', error);
            setErrorMessage('Kurye durumu alınamadı: ' + error.message);
        } finally{
            setCourierNameLoading(false); // Loading bitir
        }
    };
    // AKILLI NAVİGASYON - Koordinat veya Adres Bazlı
    const handleOpenNavigation = (pkg)=>{
        console.log('🗺️ Navigasyon açılıyor:', {
            latitude: pkg.latitude,
            longitude: pkg.longitude,
            address: pkg.delivery_address
        });
        // Koordinat varsa hassas navigasyon kullan
        if (pkg.latitude && pkg.longitude) {
            const lat = pkg.latitude;
            const lng = pkg.longitude;
            // Cihaz tespiti
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
            const isAndroid = /android/i.test(userAgent);
            console.log('📱 Cihaz:', {
                isIOS,
                isAndroid
            });
            if (isIOS) {
                // iOS - Apple Maps
                const appleMapsUrl = `maps://maps.apple.com/?q=${lat},${lng}&dirflg=d`;
                console.log('🍎 Apple Maps URL:', appleMapsUrl);
                window.location.href = appleMapsUrl;
                // Fallback: Apple Maps açılmazsa Google Maps'e yönlendir
                setTimeout(()=>{
                    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
                    window.open(googleMapsUrl, '_blank');
                }, 1500);
            } else {
                // Android / Web - Google Maps
                const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
                console.log('🤖 Google Maps URL:', googleMapsUrl);
                window.open(googleMapsUrl, '_blank');
            }
            console.log('✅ Koordinat bazlı navigasyon başlatıldı');
        } else {
            // Koordinat yoksa adres bazlı navigasyon
            console.warn('⚠️ Koordinat bulunamadı, adres bazlı navigasyon kullanılıyor');
            const address = encodeURIComponent(pkg.delivery_address);
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
            console.log('🗺️ Adres bazlı Maps URL:', mapsUrl);
            window.open(mapsUrl, '_blank');
        }
    };
    const updateCourierStatus = async (newStatus, newIsActive)=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) {
            setErrorMessage('Kurye ID bulunamadı');
            return;
        }
        try {
            setStatusUpdating(true);
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
                status: newStatus,
                is_active: newIsActive
            }).eq('id', courierId);
            if (error) throw error;
            setCourierStatus(newStatus);
            setIs_active(newIsActive);
            setSuccessMessage(newIsActive ? '✅ Aktif duruma geçildi!' : '❌ Pasif duruma geçildi!');
            setTimeout(()=>setSuccessMessage(''), 2000);
        } catch (error) {
            console.error('❌ Durum güncellenemedi:', error);
            setErrorMessage('Durum güncellenemedi: ' + error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
        } finally{
            setStatusUpdating(false);
        }
    };
    // SESLİ KOMUT FONKSİYONLARI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !isMounted) return;
            // Web Speech API desteği kontrolü
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                console.warn('Tarayıcı ses tanıma desteklemiyor');
                return;
            }
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.lang = 'tr-TR';
            recognitionInstance.continuous = false; // Tek cümle sonrası otomatik dur
            recognitionInstance.interimResults = true; // Cümle bitmeden algılamaya başla
            recognitionInstance.maxAlternatives = 1;
            recognitionInstance.onresult = ({
                "KuryePage.useEffect": (event)=>{
                    const last = event.results.length - 1;
                    const result = event.results[last];
                    // Final result (kesin sonuç) geldiğinde işle
                    if (result.isFinal) {
                        const transcript = result[0].transcript.toLowerCase();
                        console.log('🎤 Final transcript:', transcript);
                        setVoiceCommand(transcript);
                        // Komut algılandı, hemen durdur ve işle
                        recognitionInstance.abort(); // Zorla durdur
                        setIsListening(false);
                        handleVoiceCommand(transcript);
                    } else {
                        // Interim result (geçici sonuç) - sadece log
                        const transcript = result[0].transcript.toLowerCase();
                        console.log('🎤 Interim transcript:', transcript);
                        setVoiceCommand(transcript);
                    }
                }
            })["KuryePage.useEffect"];
            recognitionInstance.onerror = ({
                "KuryePage.useEffect": (event)=>{
                    console.error('Ses tanıma hatası:', event.error);
                    setIsListening(false);
                    if (event.error === 'not-allowed') {
                        setErrorMessage('Mikrofon izni gerekli');
                        setTimeout({
                            "KuryePage.useEffect": ()=>setErrorMessage('')
                        }["KuryePage.useEffect"], 3000);
                    } else if (event.error === 'aborted') {
                        // Abort normal, hata değil
                        console.log('🛑 Recognition aborted (normal)');
                    }
                }
            })["KuryePage.useEffect"];
            recognitionInstance.onend = ({
                "KuryePage.useEffect": ()=>{
                    console.log('🛑 Recognition ended');
                    setIsListening(false);
                }
            })["KuryePage.useEffect"];
            setRecognition(recognitionInstance);
            // Media Session API - Bluetooth/Interkom kontrolleri
            if ('mediaSession' in navigator) {
                navigator.mediaSession.setActionHandler('pause', {
                    "KuryePage.useEffect": ()=>{
                        toggleVoiceRecognition();
                    }
                }["KuryePage.useEffect"]);
                navigator.mediaSession.setActionHandler('play', {
                    "KuryePage.useEffect": ()=>{
                        if (isListening) {
                            toggleVoiceRecognition();
                        }
                    }
                }["KuryePage.useEffect"]);
            }
            return ({
                "KuryePage.useEffect": ()=>{
                    if (recognitionInstance) {
                        recognitionInstance.abort();
                    }
                }
            })["KuryePage.useEffect"];
        }
    }["KuryePage.useEffect"], [
        isMounted
    ]);
    const playBeep = ()=>{
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    };
    const speak = (text)=>{
        if ('speechSynthesis' in window) {
            // Önce konuşmayı durdur
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'tr-TR';
            utterance.rate = 0.9; // Daha yavaş ve anlaşılır
            utterance.pitch = 1.1; // Daha nazik ve profesyonel ton
            utterance.volume = 1.0;
            // Sesleri yükle ve Türkçe kadın sesini seç
            const setVoiceAndSpeak = ()=>{
                const voices = window.speechSynthesis.getVoices();
                console.log('🎙️ Mevcut sesler:', voices.map((v)=>({
                        name: v.name,
                        lang: v.lang
                    })));
                // Türkçe kadın sesi ara (öncelik sırasına göre)
                const turkishFemaleVoice = voices.find((voice)=>voice.lang === 'tr-TR' && voice.name.includes('Filiz')) || // Google Türkçe kadın
                voices.find((voice)=>voice.lang === 'tr-TR' && voice.name.includes('Yelda')) || // Microsoft Türkçe kadın
                voices.find((voice)=>voice.lang === 'tr-TR' && voice.name.includes('Female')) || voices.find((voice)=>voice.lang === 'tr-TR' && !voice.name.includes('Male')) || voices.find((voice)=>voice.lang.startsWith('tr'));
                if (turkishFemaleVoice) {
                    utterance.voice = turkishFemaleVoice;
                    console.log('🎙️ Seçilen ses:', turkishFemaleVoice.name, turkishFemaleVoice.lang);
                } else {
                    console.warn('⚠️ Türkçe kadın sesi bulunamadı, varsayılan ses kullanılıyor');
                }
                window.speechSynthesis.speak(utterance);
            };
            // Sesler yüklenmişse hemen kullan, yoksa yüklenene kadar bekle
            if (window.speechSynthesis.getVoices().length > 0) {
                setVoiceAndSpeak();
            } else {
                window.speechSynthesis.onvoiceschanged = ()=>{
                    setVoiceAndSpeak();
                };
            }
        }
    };
    const toggleVoiceRecognition = ()=>{
        if (!recognition) return;
        if (isListening) {
            // Dinleme durduruluyor
            recognition.abort();
            setIsListening(false);
            // Timeout'u temizle
            if (voiceTimeoutRef.current) {
                clearTimeout(voiceTimeoutRef.current);
                voiceTimeoutRef.current = null;
            }
        } else {
            // Dinleme başlatılıyor
            try {
                recognition.start();
                setIsListening(true);
                playBeep();
                // Müziği sustur (Audio Focus)
                if ('mediaSession' in navigator) {
                    navigator.mediaSession.playbackState = 'paused';
                }
                // 6 saniye sonra otomatik kapat (PC için)
                voiceTimeoutRef.current = setTimeout(()=>{
                    if (recognition && isListening) {
                        console.log('⏱️ 6 saniye timeout - otomatik kapatılıyor');
                        recognition.abort();
                        setIsListening(false);
                        speak('Zaman aşımı');
                    }
                }, 6000);
            } catch (error) {
                console.error('Ses tanıma başlatılamadı:', error);
                setErrorMessage('Mikrofon başlatılamadı');
                setTimeout(()=>setErrorMessage(''), 3000);
            }
        }
    };
    const handleVoiceCommand = async (command)=>{
        const transcript = command.toLowerCase().trim();
        console.log('🎤 SESLİ KOMUT ALINDI:', transcript);
        // Timeout'u temizle
        if (voiceTimeoutRef.current) {
            clearTimeout(voiceTimeoutRef.current);
            voiceTimeoutRef.current = null;
        }
        // Komut işleme başladı - recognition'ı zorla durdur
        if (recognition && isListening) {
            recognition.stop(); // Önce normal durdur
            recognition.abort(); // Sonra zorla durdur
            setIsListening(false);
        }
        // Müziği tekrar başlat
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'playing';
        }
        // Sayı çıkarma - Regex ile ekleri temizle ve saf sayıyı al
        const numberWords = {
            'bir': 1,
            'iki': 2,
            'üç': 3,
            'dört': 4,
            'beş': 5,
            'altı': 6,
            'yedi': 7,
            'sekiz': 8,
            'dokuz': 9,
            'on': 10
        };
        let slotNumber = null;
        // Ekleri temizle (birin -> bir, ikinin -> iki, üçü -> üç)
        const cleanedTranscript = transcript.replace(/([a-zğüşıöç]+)(in|ın|un|ün|i|ı|u|ü|e|a|nin|nın|nun|nün)\b/gi, '$1');
        console.log('🧹 Temizlenmiş transcript:', cleanedTranscript);
        for (const [word, num] of Object.entries(numberWords)){
            // Kelime sınırlarını kontrol et (tam eşleşme)
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(cleanedTranscript)) {
                slotNumber = num;
                console.log('� Slot numarası tespit edildi:', slotNumber);
                break;
            }
        }
        // REF'ten güncel paketleri al
        const currentPackages = packagesRef.current;
        console.log('📦 Ref\'ten alınan paket sayısı:', currentPackages.length);
        // SAYISAL KOMUTLAR - ID ile paket bul
        if (slotNumber) {
            console.log('📦 Aktif paketler:', currentPackages.filter((p)=>p.status !== 'delivered').map((p)=>({
                    id: p.id,
                    customer: p.customer_name,
                    status: p.status
                })));
            // ID'den paketi bul
            const pkg = currentPackages.find((p)=>p.id === slotNumber && p.status !== 'delivered');
            console.log('📦 Bulunan paket:', pkg ? {
                id: pkg.id,
                status: pkg.status
            } : null);
            if (!pkg) {
                console.warn('⚠️ Paket bulunamadı, id:', slotNumber);
                speak(`${slotNumber} bulunamadı`);
                return;
            }
            console.log('✅ İşlem yapılacak paket:', {
                id: pkg.id,
                customer: pkg.customer_name,
                status: pkg.status
            });
            // [Numara] kabul / onayla / tamam
            if (transcript.includes('kabul') || transcript.includes('onayla') || transcript.includes('tamam')) {
                console.log('🟢 KABUL komutu tetiklendi, packageId:', pkg.id, 'status:', pkg.status);
                if (pkg.status === 'assigned' || pkg.status === 'waiting') {
                    console.log('🟢 handleAcceptPackage çağrılıyor...');
                    await handleAcceptPackage(pkg.id);
                    const customerName = pkg.customer_name.split(' ')[0] // İlk isim
                    ;
                    speak(`${slotNumber} numara kabul edildi. Yolun açık olsun ${customerName} Bey'e gidiyorsun`);
                } else {
                    console.log('⚠️ Paket zaten kabul edilmiş, mevcut status:', pkg.status);
                    speak('Bu paket zaten kabul edilmiş');
                }
                return;
            }
            // [Numara] aldım / paket bende / teslim al
            if (transcript.includes('aldım') || transcript.includes('bende') || transcript.includes('teslim al')) {
                console.log('🟡 TESLIM AL komutu tetiklendi, packageId:', pkg.id, 'status:', pkg.status);
                if (pkg.status === 'picking_up') {
                    console.log('🟡 handleUpdateStatus çağrılıyor...');
                    await handleUpdateStatus(pkg.id, 'on_the_way', {
                        picked_up_at: new Date().toISOString()
                    });
                    speak(`${slotNumber} numara alındı. Güvenli sürüşler`);
                } else {
                    console.log('⚠️ Paket picking_up durumunda değil, mevcut status:', pkg.status);
                    speak('Önce kabul edin');
                }
                return;
            }
            // [Numara] bitti / teslim edildi / teslim / kapat (+ ödeme yöntemi)
            if (transcript.includes('bitti') || transcript.includes('teslim') || transcript.includes('kapat')) {
                console.log('🔵 TESLİM ET komutu tetiklendi, packageId:', pkg.id, 'status:', pkg.status);
                if (pkg.status !== 'on_the_way') {
                    console.log('⚠️ Paket on_the_way durumunda değil, mevcut status:', pkg.status);
                    speak('Önce paketi restorandan almalısınız');
                    return;
                }
                // Ödeme yöntemini transcript'ten algıla
                let paymentMethod = selectedPaymentMethods[pkg.id];
                if (transcript.includes('nakit') || transcript.includes('nakıt')) {
                    paymentMethod = 'cash';
                    setSelectedPaymentMethods((prev)=>({
                            ...prev,
                            [pkg.id]: 'cash'
                        }));
                    console.log('💵 Ödeme yöntemi sesli komuttan algılandı: NAKİT');
                } else if (transcript.includes('kart') || transcript.includes('kredi')) {
                    paymentMethod = 'card';
                    setSelectedPaymentMethods((prev)=>({
                            ...prev,
                            [pkg.id]: 'card'
                        }));
                    console.log('💳 Ödeme yöntemi sesli komuttan algılandı: KART');
                }
                console.log('💳 Ödeme yöntemi:', paymentMethod);
                if (!paymentMethod) {
                    console.warn('⚠️ Ödeme yöntemi seçilmemiş');
                    speak('Lütfen ödeme yöntemini nakit veya kart olarak belirtin. Örneğin, bir nakit teslim veya bir kart teslim diyebilirsiniz');
                    setErrorMessage('Lütfen ödeme yöntemini seçin!');
                    setTimeout(()=>setErrorMessage(''), 3000);
                    return;
                }
                console.log('🔵 handleDeliver çağrılıyor...');
                await handleDeliver(pkg.id);
                const paymentText = paymentMethod === 'cash' ? 'nakit' : 'kart';
                speak(`${slotNumber} numara ${paymentText} olarak teslim edildi. Harika iş`);
                return;
            }
            // [Numara] dükkan / restoran / işletme
            if (transcript.includes('dükkan') || transcript.includes('restoran') || transcript.includes('işletme')) {
                console.log('🏪 DÜKKAN ARA komutu tetiklendi');
                console.log('📞 Restoran bilgisi:', pkg.restaurant);
                if (pkg.restaurant?.phone) {
                    const phoneNumber = pkg.restaurant.phone;
                    const restaurantName = pkg.restaurant.name;
                    console.log('📞 Aranacak numara:', phoneNumber);
                    window.location.href = `tel:${phoneNumber}`;
                    speak(`${restaurantName} restoranı aranıyor`);
                } else {
                    console.warn('⚠️ Restoran telefonu yok');
                    speak('Restoran telefon numarası bulunamadı');
                }
                return;
            }
            // [Numara] müşteri / kişi / ara
            if (transcript.includes('müşteri') || transcript.includes('kişi') || transcript.includes('ara')) {
                console.log('📞 MÜŞTERİ ARA komutu tetiklendi');
                console.log('📞 Müşteri telefonu:', pkg.customer_phone);
                if (pkg.customer_phone) {
                    const customerName = pkg.customer_name.split(' ')[0];
                    console.log('📞 Aranacak numara:', pkg.customer_phone);
                    window.location.href = `tel:${pkg.customer_phone}`;
                    speak(`${customerName} Bey aranıyor`);
                } else {
                    console.warn('⚠️ Müşteri telefonu yok');
                    speak('Müşteri telefon numarası bulunamadı');
                }
                return;
            }
            // [Numara] konum / yol / harita / navigasyon
            if (transcript.includes('konum') || transcript.includes('yol') || transcript.includes('harita') || transcript.includes('navigasyon')) {
                console.log('🗺️ NAVİGASYON komutu tetiklendi');
                handleOpenNavigation(pkg);
                speak('Navigasyon açılıyor. Güvenli sürüşler');
                return;
            }
        }
        // GENEL KOMUTLAR (numarasız) - İlk aktif paketi kullan
        console.log('🔄 Genel komut modu (numarasız)');
        // Kabul
        if (transcript.includes('kabul') || transcript.includes('onayla') || transcript.includes('tamam')) {
            const pendingPackage = currentPackages.find((pkg)=>pkg.status === 'assigned' || pkg.status === 'waiting');
            console.log('🟢 Genel KABUL komutu, bulunan paket:', pendingPackage);
            if (pendingPackage) {
                await handleAcceptPackage(pendingPackage.id);
                speak('Kabul edildi');
            } else {
                speak('Paket yok');
            }
            return;
        }
        // Teslim Et (genel komut - numarasız)
        if (transcript.includes('bitti') || transcript.includes('teslim') || transcript.includes('kapat')) {
            const activePackage = currentPackages.find((pkg)=>pkg.status === 'on_the_way');
            console.log('🔵 Genel TESLİM komutu, bulunan paket:', activePackage);
            if (activePackage) {
                // Ödeme yöntemini transcript'ten algıla
                let paymentMethod = selectedPaymentMethods[activePackage.id];
                if (transcript.includes('nakit') || transcript.includes('nakıt')) {
                    paymentMethod = 'cash';
                    setSelectedPaymentMethods((prev)=>({
                            ...prev,
                            [activePackage.id]: 'cash'
                        }));
                    console.log('💵 Ödeme yöntemi sesli komuttan algılandı: NAKİT');
                } else if (transcript.includes('kart') || transcript.includes('kredi')) {
                    paymentMethod = 'card';
                    setSelectedPaymentMethods((prev)=>({
                            ...prev,
                            [activePackage.id]: 'card'
                        }));
                    console.log('💳 Ödeme yöntemi sesli komuttan algılandı: KART');
                }
                if (!paymentMethod) {
                    speak('Nakit mi kart mı');
                    setErrorMessage('Lütfen ödeme yöntemini seçin!');
                    setTimeout(()=>setErrorMessage(''), 3000);
                    return;
                }
                await handleDeliver(activePackage.id);
                speak(`${paymentMethod === 'cash' ? 'Nakit' : 'Kart'} teslim edildi`);
            } else {
                speak('Paket yok');
            }
            return;
        }
        // Müşteri Ara
        if (transcript.includes('müşteri') || transcript.includes('kişi')) {
            const activePackage = currentPackages.find((pkg)=>pkg.status !== 'delivered');
            console.log('📞 Genel MÜŞTERİ ARA komutu, bulunan paket:', activePackage);
            if (activePackage && activePackage.customer_phone) {
                window.location.href = `tel:${activePackage.customer_phone}`;
                speak('Müşteri aranıyor');
            } else {
                speak('Telefon yok');
            }
            return;
        }
        // Dükkan Ara
        if (transcript.includes('dükkan') || transcript.includes('restoran') || transcript.includes('işletme')) {
            const activePackage = currentPackages.find((pkg)=>pkg.status !== 'delivered');
            console.log('🏪 Genel DÜKKAN ARA komutu, bulunan paket:', activePackage);
            if (activePackage && activePackage.restaurant?.phone) {
                window.location.href = `tel:${activePackage.restaurant.phone}`;
                speak('Dükkan aranıyor');
            } else {
                speak('Telefon yok');
            }
            return;
        }
        // Navigasyon
        if (transcript.includes('konum') || transcript.includes('yol') || transcript.includes('harita') || transcript.includes('navigasyon')) {
            const activePackage = currentPackages.find((pkg)=>pkg.status !== 'delivered');
            console.log('🗺️ Genel NAVİGASYON komutu, bulunan paket:', activePackage);
            if (activePackage) {
                handleOpenNavigation(activePackage);
                speak('Navigasyon açılıyor');
            } else {
                speak('Paket yok');
            }
            return;
        }
        // Adres Sorgula
        if (transcript.includes('sıra') || transcript.includes('nere') || transcript.includes('adres')) {
            const activePackage = currentPackages.find((pkg)=>pkg.status !== 'delivered');
            console.log('📍 ADRES SORGULA komutu, bulunan paket:', activePackage);
            if (activePackage) {
                const address = activePackage.delivery_address;
                const amount = activePackage.amount;
                speak(`${address}. ${amount} lira`);
            } else {
                speak('Paket yok');
            }
            return;
        }
        console.warn('⚠️ Komut anlaşılamadı:', transcript);
    // Sessizce geç, kullanıcıyı rahatsız etme
    };
    // Tarih aralığına göre paketleri filtrele - BUSINESS DAY LOGIC (Saniyesine Kadar Filtreleme)
    const filterPackagesByDateRange = async (start, end)=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            const [listResult, account] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchCourierDeliveredPackages"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"], courierId, start, end),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierLedger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCourierLedgerPeriodAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"], courierId, start, end, courierPackageRate)
            ]);
            if (listResult.error) throw listResult.error;
            const transformed = (listResult.data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: pkg.restaurants
                }));
            setFilteredPackages(transformed);
            setTotalPages(Math.ceil((listResult.count || 0) / ITEMS_PER_PAGE));
            setCurrentPage(1);
            setPeriodAccount({
                cash: account.cash,
                card: account.card,
                iban: account.iban,
                count: account.count,
                total: account.total,
                payableDebt: account.payableDebt
            });
        } catch (error) {
            console.error('❌ Paket filtreleme hatası:', error);
        }
    };
    // Hesap sekmesi (tarih filtresiz): açık mutabakat paketleri
    const fetchAccountOpenPackages = async ()=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*, restaurants(*)').eq('delivered_by_courier_id', courierId).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)').or('is_courier_settled.is.null,is_courier_settled.eq.false').order('delivered_at', {
                ascending: false
            });
            if (error) throw error;
            const list = (data || []).map((pkg)=>({
                    ...pkg,
                    restaurant: pkg.restaurants
                }));
            const cash = list.filter((p)=>p.payment_method === 'cash').reduce((sum, p)=>sum + Number(p.amount || 0), 0);
            const card = list.filter((p)=>p.payment_method === 'card').reduce((sum, p)=>sum + Number(p.amount || 0), 0);
            const iban = list.filter((p)=>p.payment_method === 'iban').reduce((sum, p)=>sum + Number(p.amount || 0), 0);
            setFilteredPackages(list);
            setTotalPages(Math.max(1, Math.ceil(list.length / ITEMS_PER_PAGE)));
            setCurrentPage(1);
            setPeriodAccount({
                cash,
                card,
                iban,
                count: list.length,
                total: cash + card + iban,
                payableDebt: cash + card + iban
            });
        } catch (error) {
            console.error('❌ Hesap sekmesi verileri alınamadı:', error);
        }
    };
    // CARİ HESAP MANTIĞI - Kalan Borç Hesaplama (Admin Paneli ile Aynı)
    const fetchUnsettledAmount = async ()=>{
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) return;
        try {
            const remainingDebt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$courierAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchCourierLifetimeDebt"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"], courierId);
            setUnsettledAmount(remainingDebt);
        } catch (error) {
            console.error('❌ Kalan borç hesaplanamadı:', error);
        }
    };
    // Mevcut sayfadaki paketleri al
    const getCurrentPagePackages = ()=>{
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredPackages.slice(startIndex, endIndex);
    };
    // Scroll pozisyonunu kaydet
    const saveScrollPosition = (containerId)=>{
        const container = document.getElementById(containerId);
        if (container) {
            scrollPositionRef.current[containerId] = container.scrollTop;
        }
    };
    // Scroll pozisyonunu geri yükle
    const restoreScrollPosition = (containerId)=>{
        const container = document.getElementById(containerId);
        if (container && scrollPositionRef.current[containerId] !== undefined) {
            container.scrollTop = scrollPositionRef.current[containerId];
        }
    };
    // Veri güncellendiğinde scroll pozisyonunu koru
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (activeTab === 'earnings') {
                restoreScrollPosition('earnings-scroll-container');
            } else if (activeTab === 'history') {
                restoreScrollPosition('history-scroll-container');
            }
        }
    }["KuryePage.useEffect"], [
        filteredPackages,
        todayDeliveredPackages,
        activeTab
    ]);
    // Geçmiş sekmesi: sekme ilk açılışında yükle (tarih "bugün"e ezilmesin)
    const historyLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (!isLoggedIn || activeTab !== 'history') {
                historyLoadedRef.current = false;
                return;
            }
            if (historyLoadedRef.current) return;
            historyLoadedRef.current = true;
            const { start, end } = historyRange.getRange();
            filterPackagesByDateRange(start, end);
        }
    }["KuryePage.useEffect"], [
        activeTab,
        isLoggedIn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (!isLoggedIn || activeTab !== 'earnings') return;
            fetchAccountOpenPackages();
        }
    }["KuryePage.useEffect"], [
        activeTab,
        isLoggedIn,
        courierPackageRate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (!isLoggedIn || !selectedCourierId) return;
            fetchUnpaidEarningsBadge();
        }
    }["KuryePage.useEffect"], [
        courierPackageRate,
        isLoggedIn,
        selectedCourierId
    ]);
    const handleAcceptPackage = async (packageId)=>{
        setIsUpdating((prev)=>new Set(prev).add(packageId));
        try {
            // Basit UPDATE
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                status: 'picking_up',
                accepted_at: new Date().toISOString()
            }).eq('id', packageId);
            if (error) throw error;
            // Yerel state'i anında güncelle
            setPackages((prev)=>prev.map((pkg)=>pkg.id === packageId ? {
                        ...pkg,
                        status: 'picking_up',
                        accepted_at: new Date().toISOString()
                    } : pkg));
            setSuccessMessage('✅ Paket kabul edildi!');
            setTimeout(()=>setSuccessMessage(''), 2000);
        } catch (error) {
            console.error('Kabul hatası:', error);
            setErrorMessage('❌ Hata: ' + error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
            // Hata durumunda yenile
            await fetchPackages(false);
        } finally{
            setIsUpdating((prev)=>{
                const newSet = new Set(prev);
                newSet.delete(packageId);
                return newSet;
            });
        }
    };
    // Ücretlendirilmiş İptal Handlers
    const handleOpenCancelModal = (pkg)=>{
        setCancellingPackage(pkg);
        setShowCancelModal(true);
    };
    const handleConfirmCancel = async ()=>{
        if (!cancellingPackage) return;
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) {
            setErrorMessage('❌ Kurye kimliği bulunamadı, lütfen sayfayı yenileyin');
            setTimeout(()=>setErrorMessage(''), 3000);
            return;
        }
        setCancelLoading(true);
        try {
            // Ücretli iptal: paket fiziksel olarak teslim alınmış olmalı
            const isChargeable = Boolean(cancellingPackage.picked_up_at || cancellingPackage.status === 'on_the_way');
            const cancelUpdate = {
                status: 'cancelled',
                is_chargeable_cancellation: isChargeable,
                cancelled_at: new Date().toISOString(),
                cancelled_by: 'courier'
            };
            if (isChargeable) {
                cancelUpdate.delivered_at = new Date().toISOString();
                cancelUpdate.delivered_by_courier_id = courierId;
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update(cancelUpdate).eq('id', cancellingPackage.id);
            if (error) throw error;
            // Yerel state'i anında güncelle - paketi listeden çıkar
            setPackages((prev)=>prev.filter((pkg)=>pkg.id !== cancellingPackage.id));
            setSuccessMessage(isChargeable ? '✅ Sipariş ücretlendirilmiş olarak iptal edildi!' : '✅ Sipariş ücretsiz olarak iptal edildi!');
            setTimeout(()=>setSuccessMessage(''), 3000);
            // Modalı kapat
            setShowCancelModal(false);
            setCancellingPackage(null);
            // İstatistikleri ve verileri yenile
            fetchDailyStats();
            fetchTodayDeliveredPackages();
        } catch (error) {
            console.error('İptal hatası:', error);
            setErrorMessage('❌ Hata: ' + error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
        } finally{
            setCancelLoading(false);
        }
    };
    const handleDeliver = async (packageId)=>{
        const paymentMethod = selectedPaymentMethods[packageId];
        if (!paymentMethod) {
            setErrorMessage('Lütfen ödeme yöntemini seçin!');
            setTimeout(()=>setErrorMessage(''), 3000);
            return;
        }
        // Güvenlik kontrolü: Kurye ID'si yoksa işlemi durdur
        const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
        if (!courierId) {
            setErrorMessage('❌ Kurye kimliği bulunamadı, lütfen sayfayı yenileyin');
            setTimeout(()=>setErrorMessage(''), 3000);
            return;
        }
        // IBAN seçildiyse modal aç
        if (paymentMethod === 'iban') {
            const pkg = packages.find((p)=>p.id === packageId);
            if (pkg) {
                setIbanPackageId(packageId);
                setIbanPackageAmount(pkg.amount);
                setShowIbanModal(true);
            }
            return;
        }
        setIsUpdating((prev)=>new Set(prev).add(packageId));
        try {
            // Basit UPDATE - delivered_by_courier_id ekle (kurye değişikliğinde bile doğru kurye kaydedilsin)
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                status: 'delivered',
                delivered_at: new Date().toISOString(),
                payment_method: paymentMethod,
                delivered_by_courier_id: courierId // Teslimatı yapan kurye
            }).eq('id', packageId);
            if (error) throw error;
            // Yerel state'i anında güncelle - paketi listeden çıkar
            setPackages((prev)=>prev.filter((pkg)=>pkg.id !== packageId));
            // İstatistikleri güncelle
            setDeliveredCount((prev)=>prev + 1);
            const pkg = packages.find((p)=>p.id === packageId);
            if (pkg) {
                if (paymentMethod === 'cash') {
                    setCashTotal((prev)=>prev + pkg.amount);
                } else {
                    setCardTotal((prev)=>prev + pkg.amount);
                }
            }
            setSuccessMessage('✅ Paket teslim edildi!');
            setTimeout(()=>setSuccessMessage(''), 2000);
            // Arka planda yenile
            fetchTodayDeliveredPackages();
        } catch (error) {
            console.error('Teslim hatası:', error);
            setErrorMessage('❌ Hata: ' + error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
            // Hata durumunda yenile
            await fetchPackages(false);
            await fetchDailyStats();
        } finally{
            setIsUpdating((prev)=>{
                const newSet = new Set(prev);
                newSet.delete(packageId);
                return newSet;
            });
        }
    };
    // IBAN ile ödeme gönderildi
    const handleIbanPaymentSent = async ()=>{
        if (!ibanPackageId) return;
        // Güvenlik kontrolü: Kurye ID'si yoksa işlemi durdur
        if (!selectedCourierId) {
            setErrorMessage('❌ Kurye kimliği bulunamadı, lütfen sayfayı yenileyin');
            setTimeout(()=>setErrorMessage(''), 3000);
            return;
        }
        setIsUpdating((prev)=>new Set(prev).add(ibanPackageId));
        setShowIbanModal(false);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                status: 'delivered',
                delivered_at: new Date().toISOString(),
                payment_method: 'iban',
                delivered_by_courier_id: selectedCourierId // Teslimatı yapan kurye
            }).eq('id', ibanPackageId);
            if (error) throw error;
            // Yerel state'i anında güncelle - paketi listeden çıkar
            setPackages((prev)=>prev.filter((pkg)=>pkg.id !== ibanPackageId));
            // İstatistikleri güncelle
            setDeliveredCount((prev)=>prev + 1);
            setSuccessMessage('✅ IBAN ödemesi kaydedildi, paket teslim edildi!');
            setTimeout(()=>setSuccessMessage(''), 2000);
        } catch (error) {
            console.error('IBAN teslim hatası:', error);
            setErrorMessage('❌ Hata: ' + error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
        } finally{
            setIsUpdating((prev)=>{
                const newSet = new Set(prev);
                newSet.delete(ibanPackageId);
                return newSet;
            });
            setIbanPackageId(null);
            setIbanPackageAmount(0);
        }
    };
    // IBAN kopyalama fonksiyonu
    const copyIbanToClipboard = ()=>{
        const iban = 'TR66 0015 7000 0000 0076 2180 38';
        navigator.clipboard.writeText(iban.replace(/\s/g, ''));
        setSuccessMessage('✅ IBAN kopyalandı!');
        setTimeout(()=>setSuccessMessage(''), 2000);
    };
    // Arka plan konum takibi başlat - Çift bildirim ve kaynak tüketimini önlemek için devre dışı bırakılmıştır.
    // Bu işlev artık 15m filtreli ve Foreground Service destekli olarak useCourierLocationBroadcast hook'u tarafından yönetilmektedir.
    const startBackgroundLocationTracking = async (courierId)=>{
        console.log('ℹ️ Arka plan konum takibi ve Broadcast işlemleri useCourierLocationBroadcast hook\'u tarafından yönetilmektedir.');
        return null;
    };
    // Arka plan konum takibini durdur
    const stopBackgroundLocationTracking = async (watcherId)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            if (window.navigator.userAgent.includes('Mobile')) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const bgGeoModule = await (()=>{
                    const e = new Error("Cannot find module '@capacitor-community/background-geolocation'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
                const BackgroundGeolocationPlugin = bgGeoModule.BackgroundGeolocationPlugin ?? bgGeoModule.default?.BackgroundGeolocationPlugin ?? bgGeoModule.default;
                await BackgroundGeolocationPlugin.removeWatcher({
                    id: watcherId
                });
                console.log('🛑 Arka plan konum takibi durduruldu');
            } else {
                console.log('ℹ️ Background geolocation sadece mobil cihazlarda desteklenir');
            }
        } catch (error) {
            console.error('❌ Arka plan konum takibi durdurulamadı:', error);
        }
    };
    // Son geçerli konum (sıçrama filtresi için)
    const lastValidLocationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // İki konum arasındaki mesafeyi hesapla (Haversine formülü - metre cinsinden)
    const calculateDistance = (lat1, lon1, lat2, lon2)=>{
        const R = 6371e3 // Dünya yarıçapı (metre)
        ;
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c // Metre cinsinden mesafe
        ;
    };
    // Konum güncellemesi fonksiyonu - ULTRA GÜÇLENDİRİLMİŞ FİLTRELEME
    const updateCourierLocation = async (courierId)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            // Capacitor Geolocation plugin'ini kullan (daha güvenilir)
            const geoModule = await __turbopack_context__.A("[project]/node_modules/@capacitor/geolocation/dist/esm/index.js [app-client] (ecmascript, async loader)");
            const Geolocation = geoModule.Geolocation;
            if (!Geolocation) return;
            // İzin kontrolü
            const permission = await Geolocation.checkPermissions();
            console.log('📍 Konum izni durumu:', permission);
            if (permission.location !== 'granted') {
                console.log('📍 Konum izni isteniyor...');
                const requestResult = await Geolocation.requestPermissions();
                if (requestResult.location !== 'granted') {
                    console.error('❌ Konum izni reddedildi');
                    return;
                }
            }
            // ============================================
            // DONANIM ZORLAMASI: GPS ONLY - CACHE YOK
            // ============================================
            const position = await Geolocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0 // ✅ CACHE KULLANMA - Her zaman yeni GPS verisi al
            });
            const { latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed } = position.coords;
            const timestamp = position.timestamp;
            console.log('🛰️ GPS Verisi Alındı:', {
                lat: latitude.toFixed(6),
                lng: longitude.toFixed(6),
                accuracy: accuracy ? `${accuracy.toFixed(0)}m` : 'N/A',
                timestamp: new Date(timestamp).toISOString()
            });
            // ============================================
            // FİLTRE 1: NULL/ZERO KONTROLÜ
            // ============================================
            if (!latitude || !longitude || latitude === 0 || longitude === 0) {
                console.warn('❌ FİLTRE 1 REDDEDİLDİ: Geçersiz koordinatlar (0,0 veya null)');
                console.warn('❌ Son geçerli konum korunuyor');
                return;
            }
            // ============================================
            // FİLTRE 2: DOĞRULUK BARAJI (Accuracy Threshold)
            // ============================================
            // Baz istasyonu verilerini engelle (1000m+ accuracy)
            if (!accuracy || accuracy > 1000) {
                console.warn('❌ FİLTRE 2 REDDEDİLDİ: Baz istasyonu verisi tespit edildi!');
                console.warn(`❌ Accuracy: ${accuracy ? accuracy.toFixed(0) : 'N/A'}m - Maksimum: 1000m`);
                console.warn('❌ Bu muhtemelen mobil operatör verisi, GPS değil');
                return;
            }
            // Yüksek hassasiyet kontrolü (100m threshold)
            if (accuracy > 100) {
                console.warn('❌ FİLTRE 2 REDDEDİLDİ: Konum doğruluğu çok düşük');
                console.warn(`❌ Accuracy: ${accuracy.toFixed(0)}m - Minimum gereksinim: 100m`);
                console.warn('❌ Sadece yüksek hassasiyetli GPS verisi kabul edilir');
                return;
            }
            console.log(`✅ FİLTRE 2 GEÇTİ: Doğruluk kabul edilebilir (${accuracy.toFixed(0)}m)`);
            // ============================================
            // FİLTRE 3: COĞRAFİ ÇİT (Samsun Geofencing)
            // ============================================
            // Production'da Samsun dışı konumları DOĞRUDAN ÇÖPE AT
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                console.log('ℹ️ Geliştirme ortamı - Coğrafi çit devre dışı');
            }
            // ============================================
            // FİLTRE 4: HIZ VE MESAFE FİLTRESİ (Velocity Check)
            // ============================================
            if (lastValidLocationRef.current) {
                const lastLoc = lastValidLocationRef.current;
                const distance = calculateDistance(lastLoc.latitude, lastLoc.longitude, latitude, longitude);
                const timeDiff = (timestamp - lastLoc.timestamp) / 1000 // saniye
                ;
                // Sıfır bölme hatası kontrolü
                if (timeDiff <= 0) {
                    console.error('❌ FİLTRE 4 REDDEDİLDİ: Zaman farkı sıfır veya negatif');
                    return;
                }
                const calculatedSpeed = distance / timeDiff // m/s
                ;
                const speedKmh = calculatedSpeed * 3.6 // km/h
                ;
                // İmkansız hız kontrolü (Işınlanma engelleme)
                const MAX_SPEED_KMH = 120 // Motor için makul maksimum hız
                ;
                if (speedKmh > MAX_SPEED_KMH) {
                    console.error('⚡ FİLTRE 4 REDDEDİLDİ: IŞINLANMA TESPİT EDİLDİ!');
                    console.error(`⚡ Mesafe: ${distance.toFixed(0)}m (${(distance / 1000).toFixed(1)} km)`);
                    console.error(`⚡ Süre: ${timeDiff.toFixed(1)} saniye`);
                    console.error(`⚡ Hesaplanan Hız: ${speedKmh.toFixed(0)} km/h`);
                    console.error(`⚡ Maksimum İzin Verilen: ${MAX_SPEED_KMH} km/h`);
                    console.error('⚡ Bu muhtemelen mobil operatör hatası veya mock location');
                    console.error('⚡ VERİ BLOKLAND - Kurye son bilinen konumda kalacak');
                    return;
                }
                // Şüpheli hız uyarısı (80+ km/h)
                if (speedKmh > 80) {
                    console.warn(`⚠️ Yüksek hız tespit edildi: ${speedKmh.toFixed(0)} km/h`);
                    console.warn('⚠️ Kurye muhtemelen araçla hareket ediyor');
                }
                console.log(`✅ FİLTRE 4 GEÇTİ: Hız makul (${speedKmh.toFixed(1)} km/h, ${distance.toFixed(0)}m / ${timeDiff.toFixed(1)}s)`);
            } else {
                console.log('ℹ️ FİLTRE 4 ATLANDI: İlk konum güncellemesi (karşılaştırma yok)');
            }
            // ============================================
            // ✅ TÜM FİLTRELER GEÇTİ - VERİ GÜVENİLİR
            // ============================================
            console.log('🎉 TÜM FİLTRELER GEÇTİ - Konum güvenilir ve geçerli');
            console.log('📍 Onaylanan Konum:', {
                latitude: latitude.toFixed(6),
                longitude: longitude.toFixed(6),
                accuracy: `${accuracy.toFixed(0)}m`,
                speed: speed ? `${(speed * 3.6).toFixed(1)} km/h` : 'durgun',
                heading: heading ? `${heading.toFixed(0)}°` : 'bilinmiyor',
                altitude: altitude ? `${altitude.toFixed(0)}m` : 'bilinmiyor'
            });
            // Son geçerli konumu güncelle (sıçrama filtresi için)
            lastValidLocationRef.current = {
                latitude,
                longitude,
                timestamp
            };
            // Veritabanına kaydet
            const locationData = {
                latitude,
                longitude,
                accuracy: accuracy || null,
                altitude: altitude || null,
                heading: heading || null,
                speed: speed || null,
                updated_at: new Date(timestamp).toISOString(),
                last_seen: new Date().toISOString()
            };
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
                last_location: locationData
            }).eq('id', courierId);
            if (error) {
                console.error('❌ Konum güncellenemedi:', error);
            } else {
                console.log('✅ Konum veritabanına kaydedildi');
                console.log('📊 Veri:', locationData);
            }
        } catch (error) {
            console.error('❌ Konum alınamadı:', error);
            console.error('❌ Hata mesajı:', error.message);
            // Fallback: Web API kullan (aynı filtrelerle)
            console.log('🔄 Web Geolocation API deneniyor...');
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position)=>{
                    const { latitude, longitude, accuracy } = position.coords;
                    const timestamp = position.timestamp;
                    // AYNI FİLTRELERİ UYGULA
                    if (!latitude || !longitude || latitude === 0 || longitude === 0) {
                        console.error('❌ Web API FİLTRE 1: Geçersiz koordinatlar');
                        return;
                    }
                    // Doğruluk barajı
                    if (!accuracy || accuracy > 1000) {
                        console.error('❌ Web API FİLTRE 2: Baz istasyonu verisi');
                        return;
                    }
                    if (accuracy > 100) {
                        console.error('❌ Web API FİLTRE 2: Doğruluk çok düşük:', accuracy);
                        return;
                    }
                    // Samsun sınır kontrolü (Geliştirme ortamında devre dışı)
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    console.log('✅ Web API konum geçerli:', {
                        latitude,
                        longitude,
                        accuracy
                    });
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('couriers').update({
                            last_location: {
                                latitude,
                                longitude,
                                accuracy,
                                updated_at: new Date(timestamp).toISOString(),
                                last_seen: new Date().toISOString()
                            }
                        }).eq('id', courierId);
                        console.log('✅ Web API ile konum kaydedildi');
                    } catch (err) {
                        console.error('❌ Web API konum kaydetme hatası:', err);
                    }
                }, (err)=>console.error('❌ Web API konum hatası:', err), {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 0
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KuryePage.useEffect": ()=>{
            if (isLoggedIn) {
                const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
                if (!courierId) return;
                // İlk yükleme - ⚡ PARALEL ÇALIŞTIR
                Promise.all([
                    fetchPackages(true),
                    fetchDailyStats(),
                    fetchCourierStatus(),
                    fetchUnpaidEarningsBadge()
                ]).then({
                    "KuryePage.useEffect": ()=>{
                        // İkincil yüklemeler - daha az kritik
                        fetchTodayDeliveredPackages();
                        fetchUnsettledAmount();
                        fetchAccountOpenPackages();
                    }
                }["KuryePage.useEffect"]);
                // İlk konum güncellemesi - HEMEN yap
                console.log('📍 İlk konum güncellemesi başlatılıyor...');
                updateCourierLocation(courierId);
                // 5 saniye sonra bir daha güncelle (ilk güncelleme başarısız olursa)
                setTimeout({
                    "KuryePage.useEffect": ()=>{
                        console.log('📍 İkinci konum güncellemesi...');
                        updateCourierLocation(courierId);
                    }
                }["KuryePage.useEffect"], 5000);
                // Arka plan konum takibini başlat
                let backgroundWatcherId = null;
                startBackgroundLocationTracking(courierId).then({
                    "KuryePage.useEffect": (watcherId)=>{
                        backgroundWatcherId = watcherId;
                    }
                }["KuryePage.useEffect"]);
                // Her 20 saniyede bir konum güncelle (daha sık)
                const locationInterval = setInterval({
                    "KuryePage.useEffect.locationInterval": ()=>{
                        updateCourierLocation(courierId);
                    }
                }["KuryePage.useEffect.locationInterval"], 20000) // 20 saniye
                ;
                // REALTIME ONLY - Canlı yayın modu
                // ⚠️ ÖNEMLİ: Supabase Dashboard -> Database -> Replication -> 'packages' tablosunu işaretleyin!
                console.log('🔴 Kurye Realtime dinleme başlatıldı - Canlı yayın modu aktif');
                console.log('📍 Dinlenen kurye ID:', courierId);
                // Realtime callback fonksiyonları - her zaman güncel state'e erişmek için burada tanımla
                const handlePackageChange = {
                    "KuryePage.useEffect.handlePackageChange": async (payload)=>{
                        console.log('📦 Paket değişikliği algılandı:', payload.eventType, 'ID:', payload.new?.id || payload.old?.id);
                        console.log('📦 Old courier_id:', payload.old?.courier_id, 'New courier_id:', payload.new?.courier_id);
                        console.log('📦 Old status:', payload.old?.status, 'New status:', payload.new?.status);
                        // ⚠️ ERKEN ÇIKIŞ 1: Teslim edilmiş veya iptal edilmiş paketleri atla
                        if (payload.new?.status === 'delivered' || payload.new?.status === 'cancelled') {
                            console.log('⏭️ Paket teslim edilmiş/iptal edilmiş, atlanıyor');
                            // ⚡ OPTİMİZE: Sadece gerekli fonksiyonları çağır
                            Promise.all([
                                fetchDailyStats(),
                                fetchUnpaidEarningsBadge(),
                                fetchAccountOpenPackages()
                            ]);
                            return;
                        }
                        // ⚠️ ERKEN ÇIKIŞ 2: Bu paket bu kuryeyle alakalı değilse, işlem yapma
                        const isRelevantToThisCourier = payload.new?.courier_id === courierId || // Şu an bu kuryeye ait
                        payload.old?.courier_id === courierId // Önceden bu kuryeye aitti
                        ;
                        if (!isRelevantToThisCourier) {
                            console.log('⏭️ Bu paket başka kuryeye ait, atlanıyor');
                            return; // Gereksiz state güncellemesini önle
                        }
                        // 1. Kuryenin kendi yaptığı işlemleri filtrele (assigned → picking_up → on_the_way → delivered)
                        const isSelfAction = payload.old?.courier_id === courierId && // Zaten bu kuryeye aitti
                        payload.new?.courier_id === courierId && // Hala bu kuryeye ait
                        payload.old?.status !== payload.new?.status // Sadece status değişti (kendi işlemi)
                        ;
                        // 2. Yeni paket atandı mı kontrol et (courier_id DEĞİŞTİ - NULL/başka kuryeden bu kuryeye)
                        const isNewAssignment = payload.eventType === 'UPDATE' && payload.new?.courier_id === courierId && // Şimdi bu kuryeye ait
                        payload.old?.courier_id !== courierId && // Önceden bu kuryeye ait DEĞİLDİ (null veya başka kurye)
                        payload.new?.status !== 'delivered' && // Teslim edilmemiş
                        payload.new?.status !== 'cancelled' // İptal edilmemiş
                        ;
                        console.log('📦 isSelfAction:', isSelfAction, '| isNewAssignment:', isNewAssignment);
                        // Self-action ise bildirim ÇALMA
                        if (isSelfAction) {
                            console.log('🔇 Kuryenin kendi işlemi (status: ' + payload.old?.status + ' → ' + payload.new?.status + ')');
                        } else if (isNewAssignment) {
                            console.log('🎯 Yeni paket atandı! Sipariş No:', payload.new?.order_number || 'Yeni', '- Tutar:', payload.new?.amount || 0, '₺');
                        } else {
                            console.log('ℹ️ Paket güncellendi ama yeni atama değil');
                        }
                        // State'i güncelle - ⚡ OPTİMİZE: Sadece gerekli fonksiyonları çağır
                        Promise.all([
                            fetchPackages(false),
                            fetchDailyStats(),
                            fetchUnpaidEarningsBadge(),
                            fetchAccountOpenPackages()
                        ]);
                        console.log('✅ Kurye state güncellendi (packages)');
                    }
                }["KuryePage.useEffect.handlePackageChange"];
                const handleCourierStatusChange = {
                    "KuryePage.useEffect.handleCourierStatusChange": async (payload)=>{
                        // Sadece status veya is_active değiştiğinde güncelle
                        const oldRecord = payload.old;
                        const newRecord = payload.new;
                        if (oldRecord && newRecord) {
                            const statusChanged = oldRecord.status !== newRecord.status;
                            const activeChanged = oldRecord.is_active !== newRecord.is_active;
                            if (statusChanged || activeChanged) {
                                console.log('👤 Kurye durumu değişti:', {
                                    status: statusChanged ? `${oldRecord.status} → ${newRecord.status}` : 'değişmedi',
                                    is_active: activeChanged ? `${oldRecord.is_active} → ${newRecord.is_active}` : 'değişmedi'
                                });
                                await fetchCourierStatus();
                                console.log('✅ Kurye state güncellendi (status)');
                            }
                        } else {
                            console.log('👤 Kurye durumu güncellendi');
                            await fetchCourierStatus();
                            console.log('✅ Kurye state güncellendi (status)');
                        }
                    }
                }["KuryePage.useEffect.handleCourierStatusChange"];
                // 🔥 ÇELİK GİBİ REALTIME BAĞLANTI - SESSIZ YENİDEN BAĞLANMA
                let packagesChannel = null;
                let courierChannel = null;
                let reconnectTimers = [];
                const setupPackagesRealtimeWithRetry = {
                    "KuryePage.useEffect.setupPackagesRealtimeWithRetry": async (retryCount = 0)=>{
                        try {
                            packagesChannel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`courier-packages-${courierId}`, {
                                config: {
                                    broadcast: {
                                        self: true
                                    }
                                }
                            }).on('postgres_changes', {
                                event: '*',
                                schema: 'public',
                                table: 'packages'
                            }, handlePackageChange);
                            const status = await new Promise({
                                "KuryePage.useEffect.setupPackagesRealtimeWithRetry": (resolve)=>{
                                    packagesChannel.subscribe({
                                        "KuryePage.useEffect.setupPackagesRealtimeWithRetry": (status)=>{
                                            resolve(status);
                                        }
                                    }["KuryePage.useEffect.setupPackagesRealtimeWithRetry"]);
                                }
                            }["KuryePage.useEffect.setupPackagesRealtimeWithRetry"]);
                            if (status === 'SUBSCRIBED') {
                                console.log('✅ Kurye Paketler Realtime bağlandı');
                            } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
                                console.warn(`⚠️ Kurye Paketler Realtime hatası: ${status}`);
                                const timer = setTimeout({
                                    "KuryePage.useEffect.setupPackagesRealtimeWithRetry.timer": ()=>{
                                        console.log('🔄 Kurye Paketler Realtime yeniden bağlanılıyor...');
                                        setupPackagesRealtimeWithRetry(retryCount + 1);
                                    }
                                }["KuryePage.useEffect.setupPackagesRealtimeWithRetry.timer"], 3000);
                                reconnectTimers.push(timer);
                            }
                        } catch (error) {
                            console.error('❌ Kurye Paketler Realtime subscription hatası:', error);
                            if (retryCount < 10) {
                                const timer = setTimeout({
                                    "KuryePage.useEffect.setupPackagesRealtimeWithRetry.timer": ()=>{
                                        console.log(`🔄 Hata sonrası yeniden bağlanılıyor (Deneme: ${retryCount + 1})`);
                                        setupPackagesRealtimeWithRetry(retryCount + 1);
                                    }
                                }["KuryePage.useEffect.setupPackagesRealtimeWithRetry.timer"], 3000);
                                reconnectTimers.push(timer);
                            }
                        }
                    }
                }["KuryePage.useEffect.setupPackagesRealtimeWithRetry"];
                const setupCourierRealtimeWithRetry = {
                    "KuryePage.useEffect.setupCourierRealtimeWithRetry": async (retryCount = 0)=>{
                        try {
                            courierChannel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`courier-status-${courierId}`).on('postgres_changes', {
                                event: 'UPDATE',
                                schema: 'public',
                                table: 'couriers',
                                filter: `id=eq.${courierId}`
                            }, handleCourierStatusChange);
                            const status = await new Promise({
                                "KuryePage.useEffect.setupCourierRealtimeWithRetry": (resolve)=>{
                                    courierChannel.subscribe({
                                        "KuryePage.useEffect.setupCourierRealtimeWithRetry": (status)=>{
                                            resolve(status);
                                        }
                                    }["KuryePage.useEffect.setupCourierRealtimeWithRetry"]);
                                }
                            }["KuryePage.useEffect.setupCourierRealtimeWithRetry"]);
                            if (status === 'SUBSCRIBED') {
                                console.log('✅ Kurye Durumu Realtime bağlandı');
                            } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
                                console.warn(`⚠️ Kurye Durumu Realtime hatası: ${status}`);
                                const timer = setTimeout({
                                    "KuryePage.useEffect.setupCourierRealtimeWithRetry.timer": ()=>{
                                        console.log('🔄 Kurye Durumu Realtime yeniden bağlanılıyor...');
                                        setupCourierRealtimeWithRetry(retryCount + 1);
                                    }
                                }["KuryePage.useEffect.setupCourierRealtimeWithRetry.timer"], 3000);
                                reconnectTimers.push(timer);
                            }
                        } catch (error) {
                            console.error('❌ Kurye Durumu Realtime subscription hatası:', error);
                            if (retryCount < 10) {
                                const timer = setTimeout({
                                    "KuryePage.useEffect.setupCourierRealtimeWithRetry.timer": ()=>{
                                        console.log(`🔄 Hata sonrası yeniden bağlanılıyor (Deneme: ${retryCount + 1})`);
                                        setupCourierRealtimeWithRetry(retryCount + 1);
                                    }
                                }["KuryePage.useEffect.setupCourierRealtimeWithRetry.timer"], 3000);
                                reconnectTimers.push(timer);
                            }
                        }
                    }
                }["KuryePage.useEffect.setupCourierRealtimeWithRetry"];
                // 🔥 CARİ HESAP REALTIME - courier_settlements tablosunu dinle
                const setupSettlementsRealtimeWithRetry = {
                    "KuryePage.useEffect.setupSettlementsRealtimeWithRetry": async (retryCount = 0)=>{
                        try {
                            const settlementsChannel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`courier-settlements-${courierId}`).on('postgres_changes', {
                                event: '*',
                                schema: 'public',
                                table: 'courier_settlements',
                                filter: `courier_id=eq.${courierId}`
                            }, {
                                "KuryePage.useEffect.setupSettlementsRealtimeWithRetry.settlementsChannel": async (payload)=>{
                                    console.log('💰 Realtime: Gün sonu mutabakatı güncellendi:', payload);
                                    await fetchUnsettledAmount();
                                    if (historyStartDate && historyEndDate) {
                                        await filterPackagesByDateRange(historyStartDate, historyEndDate);
                                    }
                                }
                            }["KuryePage.useEffect.setupSettlementsRealtimeWithRetry.settlementsChannel"]);
                            const status = await new Promise({
                                "KuryePage.useEffect.setupSettlementsRealtimeWithRetry": (resolve)=>{
                                    settlementsChannel.subscribe({
                                        "KuryePage.useEffect.setupSettlementsRealtimeWithRetry": (status)=>{
                                            resolve(status);
                                        }
                                    }["KuryePage.useEffect.setupSettlementsRealtimeWithRetry"]);
                                }
                            }["KuryePage.useEffect.setupSettlementsRealtimeWithRetry"]);
                            if (status === 'SUBSCRIBED') {
                                console.log('✅ Kurye Settlements Realtime bağlandı');
                            } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
                                console.warn(`⚠️ Kurye Settlements Realtime hatası: ${status}`);
                                const timer = setTimeout({
                                    "KuryePage.useEffect.setupSettlementsRealtimeWithRetry.timer": ()=>{
                                        console.log('🔄 Kurye Settlements Realtime yeniden bağlanılıyor...');
                                        setupSettlementsRealtimeWithRetry(retryCount + 1);
                                    }
                                }["KuryePage.useEffect.setupSettlementsRealtimeWithRetry.timer"], 3000);
                                reconnectTimers.push(timer);
                            }
                        } catch (error) {
                            console.error('❌ Kurye Settlements Realtime subscription hatası:', error);
                            if (retryCount < 10) {
                                const timer = setTimeout({
                                    "KuryePage.useEffect.setupSettlementsRealtimeWithRetry.timer": ()=>{
                                        console.log(`🔄 Hata sonrası yeniden bağlanılıyor (Deneme: ${retryCount + 1})`);
                                        setupSettlementsRealtimeWithRetry(retryCount + 1);
                                    }
                                }["KuryePage.useEffect.setupSettlementsRealtimeWithRetry.timer"], 3000);
                                reconnectTimers.push(timer);
                            }
                        }
                    }
                }["KuryePage.useEffect.setupSettlementsRealtimeWithRetry"];
                setupPackagesRealtimeWithRetry();
                setupCourierRealtimeWithRetry();
                setupSettlementsRealtimeWithRetry(); // Cari Hesap Realtime
                return ({
                    "KuryePage.useEffect": ()=>{
                        console.log('🔴 Realtime dinleme durduruldu');
                        // Tüm reconnect timer'larını temizle
                        reconnectTimers.forEach({
                            "KuryePage.useEffect": (timer)=>clearTimeout(timer)
                        }["KuryePage.useEffect"]);
                        // Kanalları temizle
                        if (packagesChannel) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(packagesChannel);
                        if (courierChannel) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(courierChannel);
                        clearInterval(locationInterval);
                        if (backgroundWatcherId) {
                            stopBackgroundLocationTracking(backgroundWatcherId);
                        }
                    }
                })["KuryePage.useEffect"];
            }
        }
    }["KuryePage.useEffect"], [
        isLoggedIn
    ]);
    const handleUpdateStatus = async (packageId, nextStatus, additionalData = {})=>{
        try {
            // Kurye ID'yi al ve güvenlik kontrolü yap
            const courierId = localStorage.getItem(STORAGE_KEYS.COURIER_ID);
            if (!courierId) {
                setErrorMessage('❌ Kurye kimliği bulunamadı, lütfen sayfayı yenileyin');
                setTimeout(()=>setErrorMessage(''), 3000);
                return;
            }
            // IBAN seçildiyse ve delivered durumuna geçiliyorsa modal aç
            if (nextStatus === 'delivered' && additionalData.payment_method === 'iban') {
                const pkg = packages.find((p)=>p.id === packageId);
                if (pkg) {
                    setIbanPackageId(packageId);
                    setIbanPackageAmount(pkg.amount);
                    setShowIbanModal(true);
                }
                return;
            }
            setIsUpdating((prev)=>new Set(prev).add(packageId));
            // Basit UPDATE - delivered durumunda delivered_by_courier_id ekle
            const updateData = {
                status: nextStatus,
                ...additionalData
            };
            if (nextStatus === 'delivered') {
                updateData.delivered_by_courier_id = courierId; // Teslimatı yapan kurye
                console.log('✅ delivered_by_courier_id set ediliyor:', courierId);
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').update(updateData).eq('id', packageId);
            if (error) throw error;
            // Yerel state'i anında güncelle
            if (nextStatus === 'delivered') {
                // Teslim edilenler listeden çıkar
                setPackages((prev)=>prev.filter((pkg)=>pkg.id !== packageId));
                setDeliveredCount((prev)=>prev + 1);
                // İstatistikleri güncelle
                const pkg = packages.find((p)=>p.id === packageId);
                if (pkg && additionalData.payment_method) {
                    if (additionalData.payment_method === 'cash') {
                        setCashTotal((prev)=>prev + pkg.amount);
                    } else if (additionalData.payment_method === 'card') {
                        setCardTotal((prev)=>prev + pkg.amount);
                    }
                }
                fetchTodayDeliveredPackages();
            } else {
                setPackages((prev)=>prev.map((pkg)=>pkg.id === packageId ? {
                            ...pkg,
                            status: nextStatus,
                            ...additionalData
                        } : pkg));
            }
            setSuccessMessage('✅ Durum güncellendi!');
            setTimeout(()=>setSuccessMessage(''), 2000);
        } catch (error) {
            console.error('Durum güncelleme hatası:', error);
            setErrorMessage('❌ Hata: ' + error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
            // Hata durumunda yenile
            await fetchPackages(false);
        } finally{
            setIsUpdating((prev)=>{
                const n = new Set(prev);
                n.delete(packageId);
                return n;
            });
        }
    };
    const calculateDuration = (start, end)=>{
        if (!start || !end) return "-";
        const diff = Math.floor((new Date(end).getTime() - new Date(start).getTime()) / 60000);
        return `${diff} dk`;
    };
    // RENDER BLOKLAMA - Oturum kontrolü tamamlanmadan hiçbir şey gösterme!
    if (!isMounted || isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2467,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-sm",
                        children: "Yükleniyor..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2468,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kurye/page.tsx",
                lineNumber: 2466,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/kurye/page.tsx",
            lineNumber: 2465,
            columnNumber: 7
        }, this);
    }
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleLogin,
                className: "bg-slate-900 p-8 rounded-2xl border border-slate-800 w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Logo",
                                className: "w-48 h-48 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 2479,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-white mb-2",
                                children: "Kurye Girişi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 2484,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2478,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Kullanıcı Adı",
                        className: "w-full p-3 mb-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors",
                        onChange: (e)=>setLoginForm({
                                ...loginForm,
                                username: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2488,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Şifre",
                        className: "w-full p-3 mb-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors",
                        onChange: (e)=>setLoginForm({
                                ...loginForm,
                                password: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2493,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors",
                        children: "Giriş Yap"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2498,
                        columnNumber: 11
                    }, this),
                    errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-sm mt-3 text-center",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2501,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mb-2",
                                children: "Henüz sisteme dahil değil misin?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 2505,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register-kurye",
                                className: "text-blue-400 hover:text-blue-300 font-medium transition-colors inline-block",
                                children: "Kayıt Ol →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 2506,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2504,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kurye/page.tsx",
                lineNumber: 2477,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/kurye/page.tsx",
            lineNumber: 2476,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangelogModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userType: "courier",
                userId: selectedCourierId
            }, void 0, false, {
                fileName: "[project]/src/app/kurye/page.tsx",
                lineNumber: 2521,
                columnNumber: 5
            }, this),
            showLocationDisclosure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-2xl mx-auto",
                            children: "📍"
                        }, void 0, false, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 2527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-white text-center",
                            children: "Konum Takibi ve Arka Plan İzni"
                        }, void 0, false, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 2531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-slate-300 text-sm leading-relaxed space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Mergen Kurye uygulaması, siz ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: '"Çevrimiçi"'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2537,
                                            columnNumber: 44
                                        }, this),
                                        " durumdayken:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2536,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside space-y-1.5 pl-1 text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Size en yakın siparişleri atayabilmek,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2540,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Müşterilere ve restoranlara teslimat süresini canlı iletebilmek,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2541,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Harita üzerinde konum doğruluğunu sağlamak"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2542,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2539,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "amacıyla uygulama kapalıyken veya arka plandayken dahi ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "kesintisiz olarak konum verilerinizi toplar ve sunucuya iletir."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2545,
                                            columnNumber: 70
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2544,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs bg-slate-800 p-2.5 rounded border border-slate-700",
                                    children: [
                                        "⚠️ Cihazınızda konum izinlerini ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: '"Her zaman izin ver (Allow all the time)"'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2548,
                                            columnNumber: 47
                                        }, this),
                                        " olarak seçmeli ve pil tasarruf modunu ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: '"Kısıtlamasız"'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2548,
                                            columnNumber: 144
                                        }, this),
                                        " yapmalısınız."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2547,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 2535,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowLocationDisclosure(false);
                                        if (pendingStatusParams) {
                                            updateCourierStatus(pendingStatusParams.status, pendingStatusParams.isActive);
                                            setPendingStatusParams(null);
                                        }
                                    },
                                    className: "w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition-colors text-sm",
                                    children: "Kabul Ediyorum ve Çevrimiçi Ol"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2553,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowLocationDisclosure(false);
                                        setPendingStatusParams(null);
                                    },
                                    className: "w-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white font-medium py-2.5 px-4 rounded-xl transition-colors text-sm",
                                    children: "Kabul Etmiyorum / Vazgeç"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 2552,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/kurye/page.tsx",
                    lineNumber: 2526,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kurye/page.tsx",
                lineNumber: 2525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-screen flex flex-col overflow-hidden ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-100 text-gray-900'}`,
                children: [
                    isLoggedIn && activeTab === 'packages' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-0 left-0 right-0 z-[9998] p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900/95 backdrop-blur-sm rounded-lg p-2 border border-slate-800 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/logo.png",
                                            alt: "Mergen",
                                            className: "w-12 h-12 object-contain flex-shrink-0",
                                            style: {
                                                filter: 'var(--logo-filter)',
                                                WebkitFilter: 'var(--logo-filter)',
                                                opacity: 'var(--logo-opacity)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2589,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xs font-bold truncate",
                                                    children: "📦 Kurye Paneli"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2602,
                                                    columnNumber: 19
                                                }, this),
                                                courierNameLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 2605,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-slate-400 rounded-full animate-pulse",
                                                            style: {
                                                                animationDelay: '0.2s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 2606,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 bg-slate-400 rounded-full animate-pulse",
                                                            style: {
                                                                animationDelay: '0.4s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 2607,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2604,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 truncate",
                                                    children: courierName || 'Kullanıcı'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2610,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800 px-2 py-1 rounded border border-slate-700 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: "Bugün"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2616,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-green-400",
                                                    children: deliveredCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2617,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2615,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-green-900 to-emerald-900 px-2 py-1 rounded border border-green-700 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-green-300",
                                                    children: "💰 Kazanç"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2622,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-green-100",
                                                    children: [
                                                        unpaidEarningsAmount.toFixed(0),
                                                        "₺"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 2623,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2621,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2587,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 2586,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 2585,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2584,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PullToRefresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onRefresh: handleRefresh,
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto pt-20 pb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-2xl mx-auto px-2 sm:px-0",
                                    children: [
                                        showVoiceHelp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-blue-500/50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-3xl",
                                                                        children: "🎤"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2645,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-xl font-bold text-white",
                                                                        children: "Sesli Komut Rehberi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2646,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2644,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowVoiceHelp(false),
                                                                className: "text-white hover:bg-white/20 rounded-lg p-2 transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-6 h-6",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M6 18L18 6M6 6l12 12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2653,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2652,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2648,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 2643,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-blue-500/10 border border-blue-500/30 rounded-xl p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-blue-300 text-sm leading-relaxed",
                                                                    children: [
                                                                        "🎯 ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "Nasıl Kullanılır:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 2663,
                                                                            columnNumber: 24
                                                                        }, this),
                                                                        " Mikrofon butonuna basın veya interkom tuşuna basın, komutunuzu söyleyin. Paket numarasını söyleyip ardından işlemi belirtin."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2662,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2661,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-green-400 font-bold mb-2 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl",
                                                                                        children: "✅"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2673,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " Paketi Kabul Etmek"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2672,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-300 text-sm mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "1 kabul"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2676,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "1 onayla"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2677,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "1 tamam"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2678,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2675,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2671,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-yellow-400 font-bold mb-2 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl",
                                                                                        children: "📦"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2685,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " Paketi Teslim Almak (Restorandan)"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2684,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-300 text-sm mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "2 aldım"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2688,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "2 paket bende"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2689,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "2 teslim al"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2690,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2687,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2683,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-blue-400 font-bold mb-2 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl",
                                                                                        children: "🏁"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2697,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " Paketi Teslim Etmek (Müşteriye)"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2696,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-300 text-sm mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "3 bitti"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2700,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "3 teslim edildi"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2701,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "3 kapat"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2702,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2699,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2695,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-orange-400 font-bold mb-2 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl",
                                                                                        children: "🏪"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2709,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " Restoranı Aramak"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2708,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-300 text-sm mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "4 dükkan"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2712,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "4 restoran"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2713,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "4 işletme"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2714,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2711,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2707,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-purple-400 font-bold mb-2 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl",
                                                                                        children: "📞"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2721,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " Müşteriyi Aramak"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2720,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-300 text-sm mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "5 müşteri"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2724,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "5 kişi"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2725,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "5 ara"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2726,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2723,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2719,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-slate-800/50 rounded-xl p-4 border border-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-pink-400 font-bold mb-2 flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xl",
                                                                                        children: "🗺️"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2733,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " Akıllı Navigasyon Açmak"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2732,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-300 text-sm mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "6 konum"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2736,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "6 yol"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2737,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "6 harita"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2738,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    " veya",
                                                                                    ' ',
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-white font-mono bg-slate-700 px-2 py-1 rounded",
                                                                                        children: "6 navigasyon"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 2739,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2735,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-pink-300 mt-2",
                                                                                children: "💡 Koordinat varsa hassas GPS navigasyonu, yoksa adres bazlı yönlendirme açılır"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 2741,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2731,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2669,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-purple-300 text-xs leading-relaxed",
                                                                    children: [
                                                                        "💡 ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "İpucu:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 2750,
                                                                            columnNumber: 24
                                                                        }, this),
                                                                        " Paket numaraları ekranın sol üstünde mor-pembe renkli kutularda gösterilir. Komutları söylerken net ve yavaş konuşun. Bluetooth kulaklık kullanıyorsanız, play/pause tuşu ile de mikrofonu açabilirsiniz."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2749,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2748,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowVoiceHelp(false),
                                                                className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all active:scale-95",
                                                                children: "Anladım, Başlayalım! 🚀"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2756,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 2659,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 2641,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2640,
                                            columnNumber: 11
                                        }, this),
                                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center",
                                            children: successMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2768,
                                            columnNumber: 11
                                        }, this),
                                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center",
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2774,
                                            columnNumber: 11
                                        }, this),
                                        activeTab === 'packages' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 sm:space-y-3",
                                            children: packages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8 sm:py-12 text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl sm:text-4xl mb-2",
                                                        children: "📦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 2784,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-sm",
                                                        children: "Atanmış paket bulunmuyor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 2785,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 2783,
                                                columnNumber: 15
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center mb-3 sm:mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-600 px-4 py-2 rounded-xl border border-blue-500 shadow-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm sm:text-base text-white font-bold text-center",
                                                                children: [
                                                                    packages.length,
                                                                    " aktif paket"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 2792,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 2791,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 2790,
                                                        columnNumber: 17
                                                    }, this),
                                                    packages.map((pkg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start mb-2 sm:mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2 mb-1 flex-wrap",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-lg font-black text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-lg shadow-lg",
                                                                                            children: packageSlots[pkg.id] || '?'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2806,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded",
                                                                                            children: pkg.order_number || '......'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2809,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `text-xs font-bold px-2 py-0.5 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2813,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded",
                                                                                            children: pkg.restaurant?.name || 'Restoran'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2817,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>{
                                                                                                const formattedPhone = formatPhoneForWhatsApp(pkg.customer_phone);
                                                                                                const message = `Merhaba, ben yemeğini getiren kuryeyim. POS cihazım geçici bir sebepten dolayı arızalandı. Sipariş tutarı olan *${pkg.amount} TL*'yi ödemek için TR66 0015 7000 0000 0076 2180 38 IBAN numarasına gönderebilirsiniz. (Alıcı Ad Soyad: Ayşe Yarım)`;
                                                                                                const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
                                                                                                window.open(url, '_blank');
                                                                                            },
                                                                                            className: "text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded transition-colors flex items-center gap-1",
                                                                                            children: "💳 IBAN At"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2823,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        (pkg.status === 'assigned' || pkg.status === 'picking_up' || pkg.status === 'on_the_way') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>handleOpenCancelModal(pkg),
                                                                                            className: "text-xs px-2 py-0.5 bg-red-600 hover:bg-red-700 text-white rounded transition-colors flex items-center gap-1 font-semibold shadow-sm",
                                                                                            children: "❌ İptal"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2838,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2804,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-sm sm:text-base text-white",
                                                                                    children: pkg.customer_name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2846,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                pkg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-slate-400 mt-1",
                                                                                    children: [
                                                                                        "📦 ",
                                                                                        pkg.content
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2850,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2",
                                                                                    children: pkg.status === 'on_the_way' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-slate-400 mb-2",
                                                                                                children: [
                                                                                                    "📞 ",
                                                                                                    pkg.customer_phone
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 2859,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: `grid gap-2 ${pkg.latitude && pkg.longitude && pkg.platform === 'web' ? 'grid-cols-3' : 'grid-cols-2'}`,
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: `tel:${pkg.customer_phone}`,
                                                                                                        className: "inline-flex items-center justify-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-xl",
                                                                                                                children: "📞"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                                lineNumber: 2865,
                                                                                                                columnNumber: 37
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                children: "Ara"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                                lineNumber: 2866,
                                                                                                                columnNumber: 37
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                        lineNumber: 2861,
                                                                                                        columnNumber: 35
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                        href: `https://wa.me/${formatPhoneForWhatsApp(pkg.customer_phone)}?text=${encodeURIComponent(`Merhaba ${pkg.customer_name}, siparişiniz yolda! 🏍️\n\nSiparişinizi buradan takip edebilirsiniz:\n${("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"}/takip?kod=${pkg.order_number}\n\nMergen Kurye`)}`,
                                                                                                        target: "_blank",
                                                                                                        rel: "noopener noreferrer",
                                                                                                        className: "inline-flex items-center justify-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-xl",
                                                                                                                children: "💬"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                                lineNumber: 2874,
                                                                                                                columnNumber: 37
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                children: "WhatsApp"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                                lineNumber: 2875,
                                                                                                                columnNumber: 37
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                        lineNumber: 2868,
                                                                                                        columnNumber: 35
                                                                                                    }, this),
                                                                                                    pkg.latitude && pkg.longitude && pkg.platform === 'web' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        onClick: ()=>{
                                                                                                            const url = `https://www.google.com/maps/dir/?api=1&destination=${pkg.latitude},${pkg.longitude}`;
                                                                                                            window.open(url, '_blank');
                                                                                                        },
                                                                                                        className: "inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-xl",
                                                                                                                children: "🗺️"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                                lineNumber: 2886,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                children: "Konuma Git"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                                lineNumber: 2887,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                        lineNumber: 2879,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 2860,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true) : /* Diğer durumlarda: Maskelenmiş numara + WhatsApp butonu (assigned ve picking_up için) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-slate-500",
                                                                                                children: [
                                                                                                    "📞 ",
                                                                                                    pkg.customer_phone.substring(0, 4),
                                                                                                    " **** ",
                                                                                                    pkg.customer_phone.substring(pkg.customer_phone.length - 2)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 2895,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            (pkg.status === 'assigned' || pkg.status === 'picking_up') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                href: `https://wa.me/${formatPhoneForWhatsApp(pkg.customer_phone)}?text=${encodeURIComponent(`Merhaba ${pkg.customer_name}, siparişinizi aldım! 🏍️\n\nSiparişinizi buradan takip edebilirsiniz:\n${("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"}/takip?kod=${pkg.order_number}\n\nMergen Kurye`)}`,
                                                                                                target: "_blank",
                                                                                                rel: "noopener noreferrer",
                                                                                                className: "inline-flex items-center gap-2 mt-2 py-2 px-4 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-xs font-medium rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: "💬"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                        lineNumber: 2905,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: "Takip Linki Gönder"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                        lineNumber: 2906,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 2899,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2855,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                (pkg.status === 'assigned' || pkg.status === 'picking_up' || pkg.status === 'on_the_way') && pkg.restaurant?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "mt-2 p-2 bg-orange-50 rounded-lg border border-orange-200",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-start gap-2 mb-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs",
                                                                                                    children: "🍽️"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                    lineNumber: 2918,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "text-xs font-medium text-orange-900",
                                                                                                            children: pkg.restaurant.name
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                            lineNumber: 2920,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "text-xs text-orange-700 break-all",
                                                                                                            children: [
                                                                                                                "📞 ",
                                                                                                                pkg.restaurant.phone
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                            lineNumber: 2923,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        pkg.restaurant.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "text-xs text-orange-700 mt-1",
                                                                                                            children: [
                                                                                                                "📍 ",
                                                                                                                pkg.restaurant.address
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                            lineNumber: 2927,
                                                                                                            columnNumber: 35
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                    lineNumber: 2919,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2917,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: `tel:${pkg.restaurant.phone}`,
                                                                                            className: "block w-full py-1.5 px-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-xs sm:text-sm font-medium rounded transition-colors text-center mt-2",
                                                                                            children: "📞 Restoranı Ara"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2933,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2916,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 2803,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-col items-end gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xl font-bold text-green-400",
                                                                                            children: [
                                                                                                pkg.amount,
                                                                                                "₺"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2944,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        pkg.ready_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[10px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20 flex items-center gap-1 animate-pulse",
                                                                                            children: [
                                                                                                "⏰ Hazır: ",
                                                                                                new Date(pkg.ready_at).toLocaleTimeString('tr-TR', {
                                                                                                    hour: '2-digit',
                                                                                                    minute: '2-digit'
                                                                                                })
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                                            lineNumber: 2946,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2943,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-slate-500 mt-1",
                                                                                    children: pkg.payment_method === 'cash' ? 'Nakit' : 'Kart'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 2951,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 2942,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2802,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-2 p-2 bg-slate-800/50 rounded-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-300",
                                                                        children: pkg.delivery_address
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2959,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2958,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-block px-2 py-1 rounded text-xs font-medium ${pkg.status === 'new' ? 'bg-slate-500/20 text-slate-400' : pkg.status === 'preparing' ? 'bg-amber-500/20 text-amber-400' : pkg.status === 'ready' || pkg.status === 'assigned' ? 'bg-blue-500/20 text-blue-400' : pkg.status === 'picking_up' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`,
                                                                        children: pkg.status === 'new' ? 'Paket Bekleniyor' : pkg.status === 'preparing' ? 'Hazırlanıyor' : pkg.status === 'ready' || pkg.status === 'assigned' ? 'Yeni Paket (Hazır)' : pkg.status === 'picking_up' ? 'Almaya Git' : 'Teslimatta'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 2964,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2963,
                                                                    columnNumber: 21
                                                                }, this),
                                                                (pkg.status === 'new' || pkg.status === 'preparing' || pkg.status === 'ready' || pkg.status === 'assigned') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    disabled: isUpdating.has(pkg.id) || pkg.status === 'new' || pkg.status === 'preparing',
                                                                    onClick: ()=>handleUpdateStatus(pkg.id, 'picking_up'),
                                                                    className: `w-full py-2 sm:py-2.5 text-white text-sm sm:text-base font-bold rounded-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${pkg.status === 'new' || pkg.status === 'preparing' ? 'bg-slate-700 grayscale cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`,
                                                                    children: isUpdating.has(pkg.id) ? 'İşleniyor...' : pkg.status === 'new' ? 'Paket Bekleniyor...' : pkg.status === 'preparing' ? 'Hazırlanıyor...' : 'Kabul Et'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2981,
                                                                    columnNumber: 23
                                                                }, this),
                                                                pkg.status === 'picking_up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    disabled: isUpdating.has(pkg.id),
                                                                    onClick: ()=>handleUpdateStatus(pkg.id, 'on_the_way', {
                                                                            picked_up_at: new Date().toISOString()
                                                                        }),
                                                                    className: "w-full py-2 sm:py-2.5 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 text-white text-sm sm:text-base font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                                    children: isUpdating.has(pkg.id) ? 'İşleniyor...' : 'Paketi Aldım'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 2998,
                                                                    columnNumber: 23
                                                                }, this),
                                                                pkg.status === 'on_the_way' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-3 gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setSelectedPaymentMethods({
                                                                                            ...selectedPaymentMethods,
                                                                                            [pkg.id]: 'cash'
                                                                                        }),
                                                                                    className: `py-2 rounded-lg border font-medium text-sm transition-colors ${selectedPaymentMethods[pkg.id] === 'cash' ? 'bg-green-600 border-green-600 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'}`,
                                                                                    children: "💵 Nakit"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 3010,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setSelectedPaymentMethods({
                                                                                            ...selectedPaymentMethods,
                                                                                            [pkg.id]: 'card'
                                                                                        }),
                                                                                    className: `py-2 rounded-lg border font-medium text-sm transition-colors ${selectedPaymentMethods[pkg.id] === 'card' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'}`,
                                                                                    children: "💳 Kart"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 3019,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setSelectedPaymentMethods({
                                                                                            ...selectedPaymentMethods,
                                                                                            [pkg.id]: 'iban'
                                                                                        }),
                                                                                    className: `py-2 rounded-lg border font-medium text-sm transition-colors ${selectedPaymentMethods[pkg.id] === 'iban' ? 'bg-purple-600 border-purple-600 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'}`,
                                                                                    children: "🏦 IBAN"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                                    lineNumber: 3028,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3009,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            disabled: !selectedPaymentMethods[pkg.id] || isUpdating.has(pkg.id),
                                                                            onClick: ()=>handleUpdateStatus(pkg.id, 'delivered', {
                                                                                    payment_method: selectedPaymentMethods[pkg.id],
                                                                                    delivered_at: new Date().toISOString()
                                                                                }),
                                                                            className: "w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                                            children: isUpdating.has(pkg.id) ? 'Teslim Ediliyor...' : 'Teslim Et'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3038,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3008,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, pkg.id, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 2800,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 2781,
                                            columnNumber: 11
                                        }, this),
                                        activeTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 sm:space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-bold text-white mb-3 text-center",
                                                            children: "Tarih Aralığı Seçin (İş Günü: 05:00 - 04:59)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3062,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 items-end",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-xs text-slate-400 mb-1 block",
                                                                            children: "Başlangıç"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3065,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "datetime-local",
                                                                            value: historyStartDate,
                                                                            onChange: (e)=>setHistoryStartDate(e.target.value),
                                                                            className: "w-full px-2 py-1.5 bg-slate-800 border border-slate-700 rounded text-xs text-white focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3066,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3064,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-xs text-slate-400 mb-1 block",
                                                                            children: "Bitiş"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3074,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "datetime-local",
                                                                            value: historyEndDate,
                                                                            onChange: (e)=>setHistoryEndDate(e.target.value),
                                                                            className: "w-full px-2 py-1.5 bg-slate-800 border border-slate-700 rounded text-xs text-white focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3075,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3073,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>filterPackagesByDateRange(historyStartDate, historyEndDate),
                                                                    className: "px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors",
                                                                    children: "Göster"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3082,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3063,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3061,
                                                    columnNumber: 13
                                                }, this),
                                                filteredPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-3 rounded-xl border border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-500 mb-2 text-center",
                                                            children: [
                                                                "Özet: mutabakat bekleyen · Liste: dönemdeki tüm teslimler (",
                                                                filteredPackages.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3094,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "📦 Mutabakat"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3099,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-blue-400",
                                                                            children: periodAccount.count
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3100,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3098,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "💵 Nakit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3103,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-green-400",
                                                                            children: [
                                                                                periodAccount.cash.toFixed(0),
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3104,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3102,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "💳 Kart"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3107,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-blue-400",
                                                                            children: [
                                                                                periodAccount.card.toFixed(0),
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3108,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3106,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "🏦 IBAN"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3111,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-orange-400",
                                                                            children: [
                                                                                periodAccount.iban.toFixed(0),
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3112,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3110,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gradient-to-br from-orange-900/50 to-red-900/50 border-2 border-orange-500/50 px-3 py-2 rounded-lg col-span-2 shadow-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-bold text-orange-200 mb-1",
                                                                            children: "💰 Bu dönem ödenecek"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3115,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-lg font-black text-orange-100",
                                                                            children: [
                                                                                periodAccount.payableDebt.toFixed(2),
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3116,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[8px] text-orange-300 mt-0.5",
                                                                            children: "Seçili dönemde courier_settlement_id boş paketler (admin ile aynı)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3119,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3114,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3097,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3093,
                                                    columnNumber: 15
                                                }, this),
                                                filteredPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 sm:py-12 text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-3xl sm:text-4xl mb-2",
                                                            children: "📋"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3129,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs sm:text-sm",
                                                            children: "Bu tarih aralığında paket yok"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3130,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3128,
                                                    columnNumber: 15
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 p-2 sm:p-3 rounded-xl border border-slate-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-slate-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-white",
                                                                        children: filteredPackages.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3137,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " paket bulundu"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3136,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3135,
                                                            columnNumber: 17
                                                        }, this),
                                                        filteredPackages.map((pkg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-start mb-2 sm:mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded",
                                                                                                children: pkg.order_number || '......'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3148,
                                                                                                columnNumber: 27
                                                                                            }, this),
                                                                                            pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-xs font-bold px-2 py-0.5 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3152,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-xs px-2 py-0.5 rounded ${pkg.status === 'delivered' ? 'bg-green-500/20 text-green-400' : pkg.status === 'cancelled' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`,
                                                                                                children: [
                                                                                                    pkg.status === 'delivered' && '✓ Teslim Edildi',
                                                                                                    pkg.status === 'cancelled' && '✕ Ücretli İptal'
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3156,
                                                                                                columnNumber: 27
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3147,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-sm sm:text-base text-white",
                                                                                        children: pkg.customer_name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3167,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-500 mt-1",
                                                                                        children: [
                                                                                            "📞 ",
                                                                                            pkg.customer_phone.substring(0, 4),
                                                                                            " **** ",
                                                                                            pkg.customer_phone.substring(pkg.customer_phone.length - 2)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3171,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    pkg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-400 mt-1",
                                                                                        children: [
                                                                                            "📦 ",
                                                                                            pkg.content
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3178,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3146,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xl font-bold text-green-400",
                                                                                        children: [
                                                                                            pkg.amount,
                                                                                            "₺"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3184,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-500",
                                                                                        children: pkg.payment_method === 'cash' ? '💵 Nakit' : pkg.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3185,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3183,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3145,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mb-2 p-2 bg-slate-800/50 rounded-lg",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-300",
                                                                            children: [
                                                                                "📍 ",
                                                                                pkg.delivery_address
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3193,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3192,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mb-2 p-2 bg-slate-800/50 rounded-lg space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between text-xs",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400",
                                                                                        children: "📅 Sipariş Tarihi:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3199,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-300",
                                                                                        children: pkg.created_at ? new Date(pkg.created_at).toLocaleDateString('tr-TR') : '-'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3200,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3198,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between text-xs",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400",
                                                                                        children: "📋 Atama Saati:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3203,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-blue-400",
                                                                                        children: pkg.assigned_at ? new Date(pkg.assigned_at).toLocaleTimeString('tr-TR', {
                                                                                            hour: '2-digit',
                                                                                            minute: '2-digit'
                                                                                        }) : '-'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3204,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3202,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between text-xs",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400",
                                                                                        children: "📦 Aldım Saati:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3207,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-yellow-400",
                                                                                        children: pkg.picked_up_at ? new Date(pkg.picked_up_at).toLocaleTimeString('tr-TR', {
                                                                                            hour: '2-digit',
                                                                                            minute: '2-digit'
                                                                                        }) : '-'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3208,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3206,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between text-xs",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400",
                                                                                        children: "🚚 Teslim Saati:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3211,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-green-400",
                                                                                        children: pkg.delivered_at ? new Date(pkg.delivered_at).toLocaleTimeString('tr-TR', {
                                                                                            hour: '2-digit',
                                                                                            minute: '2-digit'
                                                                                        }) : '-'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3212,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3210,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3197,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    pkg.restaurant?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2 bg-orange-900/20 rounded-lg border border-orange-800",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-orange-300",
                                                                            children: [
                                                                                "🍽️ ",
                                                                                pkg.restaurant.name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3219,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3218,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    pkg.picked_up_at && pkg.delivered_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 p-2 bg-blue-900/20 rounded-lg border border-blue-800",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-blue-300 text-center",
                                                                            children: [
                                                                                "⏰ ",
                                                                                new Date(pkg.picked_up_at).toLocaleTimeString('tr-TR', {
                                                                                    hour: '2-digit',
                                                                                    minute: '2-digit'
                                                                                }),
                                                                                " saatinde kabul ettiğiniz bu paketi ",
                                                                                new Date(pkg.delivered_at).toLocaleTimeString('tr-TR', {
                                                                                    hour: '2-digit',
                                                                                    minute: '2-digit'
                                                                                }),
                                                                                " saatinde müşteriye ulaştırdınız"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3228,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3227,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, pkg.id, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3143,
                                                                columnNumber: 19
                                                            }, this))
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3059,
                                            columnNumber: 11
                                        }, this),
                                        activeTab === 'earnings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 sm:space-y-3",
                                            children: [
                                                selectedCourierId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CourierEarningsStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourierEarningsStats"], {
                                                    courierId: selectedCourierId,
                                                    packageRate: courierPackageRate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3251,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-3 rounded-xl border border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-sm font-bold text-white",
                                                                    children: "Teslim Edilen Paketler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3260,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-400",
                                                                    children: [
                                                                        "Sayfa ",
                                                                        currentPage,
                                                                        " / ",
                                                                        totalPages
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3261,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3259,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "earnings-scroll-container",
                                                            className: "space-y-2 max-h-96 overflow-y-auto admin-scrollbar",
                                                            style: {
                                                                WebkitOverflowScrolling: 'touch'
                                                            },
                                                            onScroll: ()=>saveScrollPosition('earnings-scroll-container'),
                                                            children: getCurrentPagePackages().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center py-8 text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-3xl mb-2",
                                                                        children: "📦"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3273,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs",
                                                                        children: "Göster butonuna basın"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3274,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3272,
                                                                columnNumber: 19
                                                            }, this) : getCurrentPagePackages().map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 p-2 rounded-lg border border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-start mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded",
                                                                                                children: pkg.order_number || '......'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3282,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-xs font-bold px-2 py-0.5 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3286,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3281,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-sm text-white",
                                                                                        children: pkg.customer_name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3291,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-500 mt-1",
                                                                                        children: [
                                                                                            "📞 ",
                                                                                            pkg.customer_phone.substring(0, 4),
                                                                                            " **** ",
                                                                                            pkg.customer_phone.substring(pkg.customer_phone.length - 2)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3293,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-400 mt-1",
                                                                                        children: [
                                                                                            "📍 ",
                                                                                            pkg.delivery_address
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3297,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-2 space-y-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-slate-500",
                                                                                                children: [
                                                                                                    "📅 Sipariş: ",
                                                                                                    new Date(pkg.created_at || '').toLocaleDateString('tr-TR')
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3301,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-blue-400",
                                                                                                children: [
                                                                                                    "✅ Kabul: ",
                                                                                                    pkg.accepted_at ? new Date(pkg.accepted_at).toLocaleTimeString('tr-TR', {
                                                                                                        hour: '2-digit',
                                                                                                        minute: '2-digit'
                                                                                                    }) : '-'
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3304,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-green-400",
                                                                                                children: [
                                                                                                    "🚚 Teslim: ",
                                                                                                    pkg.delivered_at ? new Date(pkg.delivered_at).toLocaleTimeString('tr-TR', {
                                                                                                        hour: '2-digit',
                                                                                                        minute: '2-digit'
                                                                                                    }) : '-'
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                                lineNumber: 3307,
                                                                                                columnNumber: 29
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3300,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3280,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-lg font-bold text-green-400",
                                                                                        children: [
                                                                                            pkg.amount,
                                                                                            "₺"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3313,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-500",
                                                                                        children: pkg.payment_method === 'cash' ? '💵 Nakit' : pkg.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                                        lineNumber: 3314,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3312,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3279,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, pkg.id, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3278,
                                                                    columnNumber: 21
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3265,
                                                            columnNumber: 15
                                                        }, this),
                                                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex justify-center items-center gap-1 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                                                    disabled: currentPage === 1,
                                                                    className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:text-slate-600 text-white text-xs rounded transition-colors",
                                                                    children: "‹"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3328,
                                                                    columnNumber: 19
                                                                }, this),
                                                                Array.from({
                                                                    length: totalPages
                                                                }, (_, i)=>i + 1).map((page)=>{
                                                                    // İlk 3, son 3 ve mevcut sayfa civarındaki 2 sayfayı göster
                                                                    if (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1 || page <= 3 || page > totalPages - 3) {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setCurrentPage(page),
                                                                            className: `px-3 py-1.5 text-xs rounded transition-colors ${currentPage === page ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 hover:bg-slate-700 text-white'}`,
                                                                            children: page
                                                                        }, page, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3347,
                                                                            columnNumber: 25
                                                                        }, this);
                                                                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-500 px-1",
                                                                            children: "..."
                                                                        }, page, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3362,
                                                                            columnNumber: 30
                                                                        }, this);
                                                                    }
                                                                    return null;
                                                                }),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                                                                    disabled: currentPage === totalPages,
                                                                    className: "px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:text-slate-600 text-white text-xs rounded transition-colors",
                                                                    children: "›"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3368,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3326,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3258,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3248,
                                            columnNumber: 11
                                        }, this),
                                        activeTab === 'account' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-4 rounded-xl border border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl",
                                                                    children: "🏍️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3387,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: courierNameLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-6 w-32 bg-slate-700 rounded animate-pulse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3393,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-4 w-20 bg-slate-700 rounded animate-pulse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3394,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3392,
                                                                        columnNumber: 21
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "text-xl font-bold text-white",
                                                                                children: courierName || 'Kullanıcı'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3398,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-slate-400",
                                                                                children: "Kurye"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3399,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3390,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3386,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-3 bg-slate-800/50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-white",
                                                                            children: "Aktif Durum"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3408,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: is_active ? 'Yeni paketler alabilirsiniz' : 'Yeni paket alamazsınız'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3409,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3407,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        if (!is_active) {
                                                                            setPendingStatusParams({
                                                                                status: 'idle',
                                                                                isActive: true
                                                                            });
                                                                            setShowLocationDisclosure(true);
                                                                        } else {
                                                                            updateCourierStatus('idle', false);
                                                                        }
                                                                    },
                                                                    disabled: statusUpdating,
                                                                    className: `relative w-14 h-7 rounded-full transition-all duration-300 disabled:opacity-50 ${is_active ? 'bg-green-600' : 'bg-slate-700'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${is_active ? 'left-7' : 'left-0.5'}`,
                                                                        children: statusUpdating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                                lineNumber: 3432,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3431,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3426,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3413,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3406,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3385,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-4 rounded-xl border border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-bold text-white mb-3",
                                                            children: "Bugünkü İstatistikler"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3442,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "Teslim"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3445,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-green-400",
                                                                            children: deliveredCount
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3446,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3444,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "💵 Nakit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3449,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-yellow-400",
                                                                            children: [
                                                                                cashTotal,
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3450,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3448,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "💳 Kart"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3453,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-purple-400",
                                                                            children: [
                                                                                cardTotal,
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3454,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3452,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-slate-800/50 px-2 py-2 rounded-lg col-span-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-400 mb-1",
                                                                            children: "Toplam Kazanç"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3457,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base font-bold text-blue-400",
                                                                            children: [
                                                                                (courierPackageRate || 0) * deliveredCount,
                                                                                "₺"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3458,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                                    lineNumber: 3456,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3443,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3441,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowPasswordModal(true),
                                                    className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl",
                                                            children: "🔐"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3468,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Şifreyi Güncelle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3469,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3464,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    id: "btn-kurye-logout",
                                                    onClick: async ()=>{
                                                        // 1. Supabase'den çıkış yap (Hard kill)
                                                        try {
                                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                                                        } catch (e) {
                                                            console.error('SignOut hatası', e);
                                                        }
                                                        // 2. Kurye spesifik ve genel tüm verileri temizle
                                                        await clearSession();
                                                        localStorage.clear();
                                                        sessionStorage.clear();
                                                        // 3. State temizliği
                                                        setIsLoggedIn(false);
                                                        setSelectedCourierId(null);
                                                        setPackages([]);
                                                        // 4. Sayfayı tamamen yenileterek state'lerin sıfırlanmasını sağla
                                                        window.location.href = '/';
                                                    },
                                                    className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl",
                                                            children: "🚪"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3498,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Çıkış Yap"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3499,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3473,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3383,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 2636,
                                    columnNumber: 11
                                }, this),
                                showSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 bg-black/80 z-50 p-2 sm:p-4 overflow-y-auto flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md w-full bg-slate-900 rounded-xl p-3 sm:p-4 border border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-base sm:text-lg font-bold text-white",
                                                        children: "Günlük Rapor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3511,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowSummary(false),
                                                        className: "text-slate-400 hover:text-white text-2xl active:scale-90",
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3512,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3510,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryList, {
                                                courierId: selectedCourierId,
                                                calculateDuration: calculateDuration
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3515,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-4 border-t border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-base font-bold mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-300",
                                                                children: "Toplam Kazanç:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3519,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-400",
                                                                children: [
                                                                    (cashTotal + cardTotal).toFixed(2),
                                                                    " ₺"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3520,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3518,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowSummary(false),
                                                        className: "w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors",
                                                        children: "Kapat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3522,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3517,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kurye/page.tsx",
                                        lineNumber: 3509,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3508,
                                    columnNumber: 11
                                }, this),
                                showIbanModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-900 rounded-2xl border-2 border-purple-500/50 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sticky top-0 bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-white",
                                                        children: "💳 Ödeme Bilgileri"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3541,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setShowIbanModal(false);
                                                            setIbanPackageId(null);
                                                            setIbanPackageAmount(0);
                                                        },
                                                        className: "text-slate-400 hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M6 18L18 6M6 6l12 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3551,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3550,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3542,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3540,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-200 text-sm mb-2",
                                                                children: "Ödenecek Tutar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3560,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-4xl font-bold",
                                                                children: [
                                                                    ibanPackageAmount,
                                                                    "₺"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3561,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3559,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-800 p-4 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-xs mb-1",
                                                                children: "Alıcı Adı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3566,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-semibold text-lg",
                                                                children: "Ayşe Yarım"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3567,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3565,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-800 p-4 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-xs mb-2",
                                                                children: "IBAN Numarası"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3572,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-mono text-sm flex-1 break-all",
                                                                        children: "TR66 0015 7000 0000 0076 2180 38"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3574,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: copyIbanToClipboard,
                                                                        className: "bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0",
                                                                        children: "📋 Kopyala"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                                        lineNumber: 3577,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3573,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3571,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white p-6 rounded-xl flex flex-col items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/iban-qr.png",
                                                            alt: "IBAN QR Kod",
                                                            className: "w-64 h-64 object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3588,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3587,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-center text-slate-400 text-xs -mt-3",
                                                        children: "QR kodu okutarak IBAN'a ödeme yapabilirsiniz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3594,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleIbanPaymentSent,
                                                        disabled: isUpdating.has(ibanPackageId || 0),
                                                        className: "w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: isUpdating.has(ibanPackageId || 0) ? 'İşleniyor...' : '✅ Ödeme Gönderildi'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3599,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-center text-slate-500 text-xs",
                                                        children: 'Bu butona bastığınızda paket "Teslim Edildi" olarak işaretlenecektir'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3607,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3557,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kurye/page.tsx",
                                        lineNumber: 3538,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3537,
                                    columnNumber: 11
                                }, this),
                                showCancelModal && cancellingPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-900 rounded-2xl border-2 border-red-500/50 shadow-2xl w-full max-w-md overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-950/30 border-b border-slate-800 p-5 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-red-500 flex items-center gap-2",
                                                        children: "🚫 Ücretlendirilmiş İptal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3622,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setShowCancelModal(false);
                                                            setCancellingPackage(null);
                                                        },
                                                        className: "text-slate-400 hover:text-white transition-colors text-2xl font-bold",
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3625,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3621,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-200 text-lg leading-relaxed text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-red-400",
                                                                children: cancellingPackage.order_number || '......'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3639,
                                                                columnNumber: 17
                                                            }, this),
                                                            ' ',
                                                            "numaralı siparişi iptal etmek istediğinize emin misiniz?"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3638,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-red-400 font-medium",
                                                            children: "⚠️ Bu işlem siparişi kuryeye ücretlendirilmiş olarak iptal edecek, restoranın borcuna yansıtacak ve geri alınamayacaktır."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3646,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3645,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setShowCancelModal(false);
                                                                    setCancellingPackage(null);
                                                                },
                                                                disabled: cancelLoading,
                                                                className: "flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-all disabled:opacity-50",
                                                                children: "Hayır"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3653,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleConfirmCancel,
                                                                disabled: cancelLoading,
                                                                className: "flex-[2] py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-red-600/20",
                                                                children: cancelLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                                            lineNumber: 3670,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "İptal Ediliyor..."
                                                                    ]
                                                                }, void 0, true) : 'Evet, İptal Et'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                                lineNumber: 3663,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3652,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/kurye/page.tsx",
                                                lineNumber: 3637,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/kurye/page.tsx",
                                        lineNumber: 3619,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3618,
                                    columnNumber: 9
                                }, this),
                                showPasswordModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 bg-black/80 z-50 p-4 overflow-y-auto flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md w-full bg-slate-900 rounded-xl p-6 border border-slate-700 shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handlePasswordChange,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-white",
                                                            children: "🔐 Şifre Güncelle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3690,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setShowPasswordModal(false);
                                                                setPasswordForm({
                                                                    oldPassword: '',
                                                                    newPassword: '',
                                                                    confirmPassword: ''
                                                                });
                                                                setPasswordError('');
                                                            },
                                                            className: "text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg transition-colors text-slate-400 hover:text-white hover:bg-slate-800",
                                                            children: "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3691,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3689,
                                                    columnNumber: 15
                                                }, this),
                                                passwordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-300 text-sm",
                                                        children: passwordError
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kurye/page.tsx",
                                                        lineNumber: 3707,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3706,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2 text-slate-300",
                                                            children: "Eski Şifre"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3713,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            value: passwordForm.oldPassword,
                                                            onChange: (e)=>setPasswordForm((prev)=>({
                                                                        ...prev,
                                                                        oldPassword: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 rounded-lg border bg-slate-800 border-slate-700 text-white focus:border-blue-500 outline-none transition-colors",
                                                            placeholder: "Mevcut şifrenizi girin",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3716,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3712,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2 text-slate-300",
                                                            children: "Yeni Şifre"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3728,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            value: passwordForm.newPassword,
                                                            onChange: (e)=>setPasswordForm((prev)=>({
                                                                        ...prev,
                                                                        newPassword: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 rounded-lg border bg-slate-800 border-slate-700 text-white focus:border-blue-500 outline-none transition-colors",
                                                            placeholder: "Yeni şifrenizi girin (min 6 karakter)",
                                                            required: true,
                                                            minLength: 6
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3731,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3727,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2 text-slate-300",
                                                            children: "Yeni Şifre (Tekrar)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3744,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            value: passwordForm.confirmPassword,
                                                            onChange: (e)=>setPasswordForm((prev)=>({
                                                                        ...prev,
                                                                        confirmPassword: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 rounded-lg border bg-slate-800 border-slate-700 text-white focus:border-blue-500 outline-none transition-colors",
                                                            placeholder: "Yeni şifrenizi tekrar girin",
                                                            required: true,
                                                            minLength: 6
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3747,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3743,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                setShowPasswordModal(false);
                                                                setPasswordForm({
                                                                    oldPassword: '',
                                                                    newPassword: '',
                                                                    confirmPassword: ''
                                                                });
                                                                setPasswordError('');
                                                            },
                                                            className: "flex-1 px-4 py-3 rounded-lg font-semibold transition-colors bg-slate-700 hover:bg-slate-600 text-white",
                                                            children: "İptal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3760,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: passwordUpdating,
                                                            className: "flex-1 px-4 py-3 rounded-lg font-semibold transition-colors bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed",
                                                            children: passwordUpdating ? '⏳ Güncelleniyor...' : '✅ Güncelle'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kurye/page.tsx",
                                                            lineNumber: 3771,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kurye/page.tsx",
                                                    lineNumber: 3759,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3687,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kurye/page.tsx",
                                        lineNumber: 3686,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3685,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 2635,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 2634,
                        columnNumber: 7
                    }, this),
                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 right-0 w-full bg-slate-900 border-t border-slate-800 z-50 safe-area-bottom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-around w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('packages'),
                                    className: `flex-1 flex flex-col items-center py-3 transition-all ${activeTab === 'packages' ? 'text-blue-400' : 'text-slate-400 active:text-slate-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mb-1",
                                            children: "📦"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3798,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            children: "Aktif"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3799,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3791,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('history'),
                                    className: `flex-1 flex flex-col items-center py-3 transition-all ${activeTab === 'history' ? 'text-blue-400' : 'text-slate-400 active:text-slate-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mb-1",
                                            children: "📋"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3810,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            children: "Geçmişim"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3811,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3803,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('earnings'),
                                    className: `flex-1 flex flex-col items-center py-3 transition-all ${activeTab === 'earnings' ? 'text-blue-400' : 'text-slate-400 active:text-slate-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mb-1",
                                            children: "💰"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3822,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            children: "Hesap"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3823,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3815,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('account'),
                                    className: `flex-1 flex flex-col items-center py-3 transition-all ${activeTab === 'account' ? 'text-blue-400' : 'text-slate-400 active:text-slate-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mb-1",
                                            children: "👤"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3834,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            children: "Profil"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kurye/page.tsx",
                                            lineNumber: 3835,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kurye/page.tsx",
                                    lineNumber: 3827,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/kurye/page.tsx",
                            lineNumber: 3789,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 3788,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kurye/page.tsx",
                lineNumber: 2580,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
    //TURBOPACK unreachable
    ;
    async function handleLogin(e) {
        e.preventDefault();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const loginResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$courierLoginService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateCourier"])(loginForm.username, loginForm.password);
            if (!loginResult.ok) {
                if (loginResult.reason === 'db_error') {
                    console.error('Veritabanı hatası:', loginResult.message);
                    setErrorMessage("Veritabanı hatası!");
                    return;
                }
                setErrorMessage("Hatalı kullanıcı adı veya şifre!");
                return;
            }
            const data = loginResult.courier;
            const accountError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$courierLoginService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCourierAccountStatusError"])(data.account_status);
            if (accountError) {
                setErrorMessage(accountError);
                return;
            }
            // Kurye oturumunu başlat - KALICI STORAGE
            await saveSession(data.id);
            // Yeni auth sistemi için de kaydet (otomatik giriş için)
            localStorage.setItem('auth_logged_in', 'true');
            localStorage.setItem('auth_user_type', 'courier');
            localStorage.setItem('auth_user', JSON.stringify({
                id: data.id,
                username: data.username,
                fullName: data.full_name,
                userType: 'courier'
            }));
            setIsLoggedIn(true);
            setSelectedCourierId(data.id);
        } catch (error) {
            console.error('Giriş hatası:', error);
            setErrorMessage("Giriş hatası: " + error.message);
        }
    }
}
_s(KuryePage, "xi1hJsHq9i/2C76M9XkRjt7JR4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCourierRealtimeNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCourierRealtimeNotifications"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCourierLocationBroadcast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCourierLocationBroadcast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePersistedDateRange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistedDateRange"]
    ];
});
_c = KuryePage;
function SummaryList({ courierId, calculateDuration }) {
    _s1();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SummaryList.useEffect": ()=>{
            const fetchHistory = {
                "SummaryList.useEffect.fetchHistory": async ()=>{
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*').eq('courier_id', courierId).eq('status', 'delivered').gte('created_at', new Date(new Date().setHours(0, 0, 0, 0)).toISOString());
                    setHistory(data || []);
                }
            }["SummaryList.useEffect.fetchHistory"];
            fetchHistory();
        }
    }["SummaryList.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 max-h-64 overflow-y-auto",
        children: history.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800/50 p-3 rounded-lg flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-sm text-white",
                                children: p.customer_name
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 3912,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: p.payment_method === 'cash' ? 'Nakit' : p.payment_method === 'iban' ? 'IBAN' : 'Kart'
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 3913,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 3911,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-blue-400 font-medium",
                                children: calculateDuration(p.picked_up_at, p.delivered_at)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 3918,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-bold text-sm",
                                children: [
                                    p.amount,
                                    " ₺"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kurye/page.tsx",
                                lineNumber: 3919,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kurye/page.tsx",
                        lineNumber: 3917,
                        columnNumber: 11
                    }, this)
                ]
            }, p.id, true, {
                fileName: "[project]/src/app/kurye/page.tsx",
                lineNumber: 3910,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/kurye/page.tsx",
        lineNumber: 3908,
        columnNumber: 5
    }, this);
}
_s1(SummaryList, "PUqjgfw0ccPwtx6QxD6fWqJYeMQ=");
_c1 = SummaryList;
var _c, _c1;
__turbopack_context__.k.register(_c, "KuryePage");
__turbopack_context__.k.register(_c1, "SummaryList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_064715e7._.js.map