module.exports = [
"[project]/src/components/ui/OrderActionMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderActionMenu",
    ()=>OrderActionMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function OrderActionMenu({ package: pkg, isOpen, onToggle, onCancel, onUpdateAmount, showCancel = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onToggle();
                },
                className: "p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors",
                title: "Menü",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-600 dark:text-slate-400 text-lg",
                    children: "⋮"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/OrderActionMenu.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/OrderActionMenu.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-8 bg-white dark:bg-slate-700 rounded-lg shadow-xl border border-slate-200 dark:border-slate-600 py-1 min-w-[180px] z-30 flex flex-col",
                children: [
                    onUpdateAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onToggle();
                            onUpdateAmount(pkg);
                        },
                        className: "w-full px-4 py-2.5 text-left text-sm text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors whitespace-nowrap",
                        children: "Sipariş Tutarı Değiştir"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/OrderActionMenu.tsx",
                        lineNumber: 38,
                        columnNumber: 25
                    }, this),
                    showCancel && onCancel && pkg.status !== 'cancelled' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onToggle();
                            onCancel(pkg.id, `Sipariş: ${pkg.order_number || pkg.id}\nMüşteri: ${pkg.customer_name}\nTutar: ${pkg.amount}₺`);
                        },
                        className: "w-full px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors whitespace-nowrap",
                        children: "Siparişi İptal Et"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/OrderActionMenu.tsx",
                        lineNumber: 50,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/OrderActionMenu.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/OrderActionMenu.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/admin/components/CourierTransferModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourierTransferModal",
    ()=>CourierTransferModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
/**
 * @file src/app/admin/components/CourierTransferModal.tsx
 * @description Kriz Yönetimi - Kurye Devir Modal'ı
 * Sahada kaza/arıza durumunda paketin durumunu bozmadan başka kuryeye devredilmesi
 */ 'use client';
;
;
;
function CourierTransferModal({ package: pkg, couriers, onClose, onSuccess }) {
    const [selectedCourierId, setSelectedCourierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTransferring, setIsTransferring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sadece aktif kuryeleri göster (mevcut kurye hariç)
    const availableCouriers = couriers.filter((c)=>c.is_active && c.id !== pkg.courier_id);
    const handleTransfer = async ()=>{
        if (!selectedCourierId) {
            setError('Lütfen bir kurye seçin');
            return;
        }
        // 🚫 GÜVENLİK KONTROLÜ: Sadece teslim edilmiş paketlerde devir yapılamaz!
        const blockedStatuses = [
            'delivered'
        ];
        if (blockedStatuses.includes(pkg.status)) {
            setError(`❌ Bu paket "${pkg.status}" durumunda! Teslim edildikten sonra devir yapılamaz.`);
            return;
        }
        setIsTransferring(true);
        setError(null);
        try {
            // KRİTİK: Sadece courier_id güncelleniyor, status ve timestamp'ler korunuyor
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                courier_id: selectedCourierId
            }).eq('id', pkg.id);
            if (updateError) throw updateError;
            // 📝 Sıra dışı devir işlemini order_logs tablosuna kaydet
            try {
                const oldCourierName = currentCourier?.full_name || 'Bilinmeyen';
                const newCourierName = couriers.find((c)=>c.id === selectedCourierId)?.full_name || 'Bilinmeyen';
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('order_logs').insert({
                    package_id: pkg.id,
                    action: 'courier_reassigned',
                    details: {
                        previous_courier_id: pkg.courier_id,
                        previous_courier_name: oldCourierName,
                        new_courier_id: selectedCourierId,
                        new_courier_name: newCourierName,
                        pkg_status: pkg.status,
                        note: pkg.status === 'on_the_way' ? `Sipariş yoldayken ${oldCourierName}'den ${newCourierName}'ye devredildi.` : `Sipariş devredildi: ${oldCourierName} -> ${newCourierName}`
                    },
                    created_at: new Date().toISOString()
                });
                console.log('✅ Kurye devri loglandı');
            } catch (logErr) {
                console.error('⚠️ Kurye devri loglanamadı:', logErr);
            }
            // Başarılı
            onSuccess();
            onClose();
        } catch (err) {
            console.error('❌ Kurye devir hatası:', err);
            setError(err.message || 'Kurye devri başarısız oldu');
        } finally{
            setIsTransferring(false);
        }
    };
    const currentCourier = couriers.find((c)=>c.id === pkg.courier_id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 rounded-xl p-6 max-w-md w-full border border-orange-500 shadow-2xl relative z-[10000]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4 pb-4 border-b border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-orange-400 flex items-center gap-2",
                                    children: "🚨 Kurye Devret"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 mt-1",
                                    children: "Kriz Yönetimi - Paket durumu korunur"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-800 p-4 rounded-lg mb-4 border border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-orange-400",
                                    children: pkg.order_number || '......'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-2 py-1 rounded text-xs font-semibold ${pkg.status === 'assigned' ? 'bg-purple-900/50 text-purple-300' : pkg.status === 'picking_up' ? 'bg-orange-900/50 text-orange-300' : 'bg-yellow-900/50 text-yellow-300'}`,
                                    children: pkg.status === 'assigned' ? '👤 Atandı' : pkg.status === 'picking_up' ? '🏃 Alınıyor' : '🚗 Yolda'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white",
                            children: [
                                "👤 ",
                                pkg.customer_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400 mt-1",
                            children: [
                                "📍 ",
                                pkg.delivery_address
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/20 border border-red-700 p-3 rounded-lg mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-red-400 mb-1",
                            children: "Mevcut Kurye:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-white",
                            children: [
                                "🚴 ",
                                currentCourier?.full_name || 'Bilinmeyen'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-semibold text-white mb-3",
                            children: "Yeni Kurye Seçin:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this),
                        availableCouriers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-900/20 border border-yellow-700 p-3 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-yellow-400",
                                children: "⚠️ Müsait aktif kurye bulunmuyor"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                lineNumber: 154,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 max-h-48 overflow-y-auto",
                            children: availableCouriers.map((courier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedCourierId(courier.id),
                                    className: `p-3 rounded-lg border cursor-pointer transition-all ${selectedCourierId === courier.id ? 'bg-orange-600 border-orange-500 text-white' : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: [
                                                            "🚴 ",
                                                            courier.full_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs opacity-75",
                                                        children: [
                                                            "📦 ",
                                                            courier.activePackageCount || 0,
                                                            " aktif paket"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                                lineNumber: 171,
                                                columnNumber: 41
                                            }, this),
                                            selectedCourierId === courier.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white",
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                                lineNumber: 178,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 37
                                    }, this)
                                }, courier.id, false, {
                                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 159,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/20 border border-red-700 p-3 rounded-lg mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-400",
                        children: [
                            "❌ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                        lineNumber: 192,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 191,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-900/20 border border-blue-700 p-3 rounded-lg mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-300",
                        children: "ℹ️ Paket durumu ve zaman bilgileri korunacak, sadece kurye değişecektir."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                        lineNumber: 198,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: isTransferring,
                            className: "flex-1 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors",
                            children: "İptal"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 205,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleTransfer,
                            disabled: !selectedCourierId || isTransferring || availableCouriers.length === 0,
                            className: "flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-colors",
                            children: isTransferring ? '⏳ Devrediliyor...' : '✅ Kurye Devret'
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                            lineNumber: 212,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
                    lineNumber: 204,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
            lineNumber: 100,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/components/CourierTransferModal.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/admin/components/CompactOrderCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactOrderCard",
    ()=>CompactOrderCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
/**
 * @file src/app/admin/components/CompactOrderCard.tsx
 * @description Kompakt sipariş kartı - 6 kart yan yana sığacak şekilde optimize edilmiş
 */ 'use client';
;
;
;
function CompactOrderCard({ package: pkg, couriers, isMenuOpen, onMenuToggle, onCardClick, onCancelOrder }) {
    const courierName = pkg.courier_id ? couriers.find((c)=>c.id === pkg.courier_id)?.full_name || 'Bilinmeyen' : 'Atanmadı';
    const getStatusBadge = (status)=>{
        switch(status){
            case 'assigned':
                return {
                    text: 'Atandı',
                    class: 'bg-orange-500 text-white'
                };
            case 'picking_up':
                return {
                    text: 'Alınıyor',
                    class: 'bg-blue-500 text-white'
                };
            case 'on_the_way':
                return {
                    text: 'Yolda',
                    class: 'bg-purple-500 text-white'
                };
            default:
                return {
                    text: status,
                    class: 'bg-gray-500 text-white'
                };
        }
    };
    const getPaymentBadge = (method)=>{
        switch(method){
            case 'cash':
                return {
                    text: 'Nakit',
                    class: 'bg-green-100 text-green-700'
                };
            case 'iban':
                return {
                    text: 'IBAN',
                    class: 'bg-purple-100 text-purple-700'
                };
            case 'card':
                return {
                    text: 'Kart',
                    class: 'bg-blue-100 text-blue-700'
                };
            default:
                return {
                    text: method,
                    class: 'bg-gray-100 text-gray-700'
                };
        }
    };
    const handleStatusChange = async ()=>{
        const statusOptions = [
            {
                value: 'waiting',
                label: '⏳ Beklemede'
            },
            {
                value: 'ready',
                label: '✅ Hazır'
            },
            {
                value: 'assigned',
                label: '👤 Atandı'
            },
            {
                value: 'picking_up',
                label: '🏃 Alınıyor'
            },
            {
                value: 'on_the_way',
                label: '🚗 Yolda'
            },
            {
                value: 'delivered',
                label: '✅ Teslim Edildi'
            },
            {
                value: 'cancelled',
                label: '❌ İptal Edildi'
            }
        ];
        const choice = prompt(`Sipariş #${pkg.order_number} için yeni durum seçin:\n\n` + statusOptions.map((opt, i)=>`${i + 1}. ${opt.label}`).join('\n') + `\n\nMevcut durum: ${pkg.status}\n\nSeçiminizi girin (1-7):`);
        if (!choice) return;
        const index = parseInt(choice) - 1;
        if (index < 0 || index >= statusOptions.length) {
            alert('Geçersiz seçim!');
            return;
        }
        const newStatus = statusOptions[index].value;
        if (newStatus === pkg.status) {
            alert('Aynı durumu seçtiniz!');
            return;
        }
        try {
            const updates = {
                status: newStatus
            };
            if (newStatus === 'assigned' && !pkg.assigned_at) {
                updates.assigned_at = new Date().toISOString();
            }
            if (newStatus === 'picking_up' && !pkg.picked_up_at) {
                updates.picked_up_at = new Date().toISOString();
            }
            if (newStatus === 'delivered' && !pkg.delivered_at) {
                updates.delivered_at = new Date().toISOString();
                // Admin panelinden teslim ediliyorsa, mevcut courier_id'yi delivered_by_courier_id olarak kaydet
                if (pkg.courier_id) {
                    updates.delivered_by_courier_id = pkg.courier_id;
                }
            }
            if (newStatus === 'cancelled' && !pkg.cancelled_at) {
                updates.cancelled_at = new Date().toISOString();
                updates.cancelled_by = 'admin';
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update(updates).eq('id', pkg.id);
            if (error) throw error;
            alert('✅ Sipariş durumu başarıyla güncellendi!');
            onMenuToggle();
        } catch (error) {
            console.error('❌ Durum güncelleme hatası:', error);
            alert('❌ Durum güncellenirken hata oluştu!');
        }
    };
    const statusBadge = getStatusBadge(pkg.status);
    const paymentBadge = getPaymentBadge(pkg.payment_method);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-white rounded-lg border border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onCardClick,
                className: "absolute inset-0 z-0 rounded-lg cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 right-1 z-20",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onMenuToggle,
                            className: "p-1 hover:bg-slate-100 rounded transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-slate-600",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this),
                        isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-1 z-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleStatusChange,
                                    className: "w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors",
                                    children: "🔄 Sipariş Durumunu Değiştir"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                    lineNumber: 152,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const reason = prompt('İptal nedeni:');
                                        if (reason) {
                                            onCancelOrder(pkg.id, reason);
                                            onMenuToggle();
                                        }
                                    },
                                    className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors",
                                    children: "❌ Sipariş İptal Et"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 left-1 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-[9px] py-0.5 px-1.5 rounded font-bold ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                lineNumber: 177,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 pt-6 space-y-1.5 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-black text-orange-600",
                            children: [
                                "#",
                                pkg.order_number || '......'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-[10px] px-2 py-0.5 rounded-full font-bold ${statusBadge.class}`,
                            children: statusBadge.text
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                            lineNumber: 195,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 194,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-black text-green-600",
                            children: [
                                pkg.amount,
                                "₺"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-100"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 207,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-slate-500 mb-0.5",
                                children: "Kurye"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold text-slate-800 truncate px-1",
                                children: courierName
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-slate-500 mb-0.5",
                                children: "Müşteri"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-700 truncate px-1",
                                children: pkg.customer_name
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-slate-500 mb-0.5",
                                children: "Adres"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 227,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-slate-600 truncate px-1",
                                title: pkg.delivery_address,
                                children: pkg.delivery_address
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-[10px] px-2 py-0.5 rounded font-medium ${paymentBadge.class}`,
                            children: paymentBadge.text
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                            lineNumber: 235,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/CompactOrderCard.tsx",
        lineNumber: 130,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/admin/components/OrderDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderDrawer",
    ()=>OrderDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CourierTransferModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/CourierTransferModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CompactOrderCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/CompactOrderCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-ssr] (ecmascript)");
/**
 * @file src/app/admin/components/OrderDrawer.tsx
 * @description Modüler Sipariş Takip Drawer'ı - Sağ üstten açılır panel
 * Aktif siparişleri şık bir drawer içinde gösterir
 */ 'use client';
;
;
;
;
;
;
function OrderDrawer({ packages, couriers, openDropdownId, setOpenDropdownId, handleCancelOrder }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPackage, setSelectedPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transferPackage, setTransferPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Aktif operasyondaki paketleri filtrele (iptal edilenler HARİÇ)
    const activeOperationPackages = packages.filter((pkg)=>(pkg.status === 'assigned' || pkg.status === 'picking_up' || pkg.status === 'on_the_way') && pkg.status !== 'cancelled');
    const getStatusText = (status)=>{
        switch(status){
            case 'waiting':
                return 'Beklemede';
            case 'assigned':
                return 'Atandı';
            case 'picking_up':
                return 'Alınıyor';
            case 'on_the_way':
                return 'Yolda';
            case 'delivered':
                return 'Teslim Edildi';
            case 'cancelled':
                return 'İptal Edildi';
            default:
                return status;
        }
    };
    // ESC tuşu ile kapatma
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return ()=>window.removeEventListener('keydown', handleEsc);
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            transferPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CourierTransferModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourierTransferModal"], {
                package: transferPackage,
                couriers: couriers,
                onClose: ()=>setTransferPackage(null),
                onSuccess: ()=>{
                    console.log('✅ Kurye devri başarılı');
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                lineNumber: 68,
                columnNumber: 17
            }, this),
            selectedPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center p-4",
                onClick: ()=>setSelectedPackage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4 sticky top-0 bg-slate-900 pb-4 border-b border-slate-700 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white",
                                    children: "📦 Sipariş Detayları"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPackage(null),
                                    className: "text-slate-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-orange-400",
                                            children: selectedPackage.order_number || '......'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 97,
                                            columnNumber: 33
                                        }, this),
                                        selectedPackage.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm py-1 px-3 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(selectedPackage.platform)}`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(selectedPackage.platform)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 text-sm",
                                                children: "Durum:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1.5 rounded-full text-sm font-semibold ${selectedPackage.status === 'cancelled' ? 'bg-red-900/50 text-red-300' : selectedPackage.status === 'waiting' ? 'bg-yellow-900/50 text-yellow-300' : selectedPackage.status === 'assigned' ? 'bg-orange-900/50 text-orange-300' : selectedPackage.status === 'picking_up' ? 'bg-orange-900/50 text-orange-300' : selectedPackage.status === 'on_the_way' ? 'bg-blue-900/50 text-blue-300' : 'bg-green-900/50 text-green-300'}`,
                                                children: getStatusText(selectedPackage.status)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Restoran"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-semibold",
                                                    children: [
                                                        "🍽️ ",
                                                        selectedPackage.restaurant?.name || 'Bilinmeyen'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Tutar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-400 font-bold text-xl",
                                                    children: [
                                                        selectedPackage.amount,
                                                        "₺"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 130,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 125,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-2",
                                            children: "Müşteri Bilgileri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Ad Soyad"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: [
                                                        "👤 ",
                                                        selectedPackage.customer_name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 33
                                        }, this),
                                        selectedPackage.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Telefon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: [
                                                        "📞 ",
                                                        selectedPackage.customer_phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Teslimat Adresi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: [
                                                        "📍 ",
                                                        selectedPackage.delivery_address
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, this),
                                selectedPackage.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs mb-1",
                                            children: "Paket İçeriği"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 158,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-orange-200",
                                            children: [
                                                "📝 ",
                                                selectedPackage.content
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 159,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 text-sm",
                                                children: "Ödeme Yöntemi:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 166,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded text-sm font-medium ${selectedPackage.payment_method === 'cash' ? 'bg-green-900/50 text-green-300' : selectedPackage.payment_method === 'iban' ? 'bg-purple-900/50 text-purple-300' : 'bg-orange-900/50 text-orange-300'}`,
                                                children: selectedPackage.payment_method === 'cash' ? '💵 Nakit' : selectedPackage.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 167,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                        lineNumber: 165,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, this),
                                selectedPackage.courier_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs mb-1",
                                                        children: "Atanan Kurye"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white",
                                                        children: [
                                                            "🚴 ",
                                                            couriers.find((c)=>c.id === selectedPackage.courier_id)?.full_name || 'Bilinmeyen'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 183,
                                                columnNumber: 41
                                            }, this),
                                            (selectedPackage.status === 'assigned' || selectedPackage.status === 'picking_up' || selectedPackage.status === 'on_the_way') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    console.log('🚨 Kurye Devret butonuna tıklandı!');
                                                    setTransferPackage(selectedPackage);
                                                    setSelectedPackage(null); // Detay modal'ını kapat
                                                },
                                                className: "bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 absolute top-2 right-2",
                                                style: {
                                                    pointerEvents: 'auto',
                                                    position: 'absolute',
                                                    zIndex: 99999,
                                                    top: '8px',
                                                    right: '8px'
                                                },
                                                children: "🚨 Kurye Devret"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 191,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                        lineNumber: 182,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 181,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-2",
                                            children: "⏱️ Zaman Çizelgesi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "📝 Oluşturulma:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.created_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 220,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "👨‍🍳 Hazırlamaya Başlama:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.getting_ready_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.getting_ready_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "✅ Hazır Olma:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.ready_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.ready_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 236,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "✔️ Kurye Kabul Saati:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.assigned_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.assigned_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 244,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "🏪 Esnaftan Alınma:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.picked_up_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.picked_up_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 252,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "🎯 Teslim Edilme:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.delivered_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.delivered_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                            lineNumber: 260,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 216,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                lineNumber: 80,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-[200]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsOpen(!isOpen),
                    className: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            children: "📦"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 278,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Anlık Sipariş Takibi"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 279,
                            columnNumber: 17
                        }, this),
                        activeOperationPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black rounded-full w-7 h-7 flex items-center justify-center animate-pulse shadow-lg",
                            children: activeOperationPackages.length
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 282,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 transition-opacity duration-300",
                style: {
                    zIndex: 9998
                },
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                lineNumber: 291,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-screen w-[90%] max-w-7xl bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                style: {
                    zIndex: 9999
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                        lineNumber: 308,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold",
                                                children: "Anlık Sipariş Takibi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 310,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-orange-100",
                                                children: [
                                                    activeOperationPackages.length,
                                                    " aktif sipariş"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                                lineNumber: 311,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                        lineNumber: 309,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                lineNumber: 307,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-white hover:bg-white/20 rounded-lg p-2 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                        lineNumber: 321,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 320,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 h-[calc(100vh-80px)] overflow-y-auto bg-slate-50",
                        children: activeOperationPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16 text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-4",
                                    children: "📭"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 330,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-semibold",
                                    children: "Şu an yolda olan sipariş yok"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 331,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mt-2",
                                    children: "Yeni siparişler geldiğinde burada görünecek"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 332,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 329,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2",
                            children: activeOperationPackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CompactOrderCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompactOrderCard"], {
                                    package: pkg,
                                    couriers: couriers,
                                    isMenuOpen: openDropdownId === pkg.id,
                                    onMenuToggle: ()=>setOpenDropdownId(openDropdownId === pkg.id ? null : pkg.id),
                                    onCardClick: ()=>setSelectedPackage(pkg),
                                    onCancelOrder: handleCancelOrder
                                }, pkg.id, false, {
                                    fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                                    lineNumber: 337,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                            lineNumber: 335,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/OrderDrawer.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/admin/components/CourierDailyRoutes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourierDailyRoutes",
    ()=>CourierDailyRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculations.ts [app-ssr] (ecmascript)");
/**
 * @file CourierDailyRoutes.tsx
 * @description Kurye günlük rota ve performans — bugünkü teslimler (frontend filtre)
 */ 'use client';
;
;
;
;
function CourierDailyRoutes({ couriers }) {
    const [allPackages, setAllPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCourierId, setSelectedCourierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTodayDelivered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setLoadError(null);
        try {
            const { start, end } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessDayDateTimeLocal"])();
            const startIso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseFilterInputToUtcIso"])(start, 'start');
            const endIso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseFilterInputToUtcIso"])(end, 'end');
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('id, order_number, delivery_address, delivered_by_courier_id, delivered_at, content').eq('status', 'delivered').gte('delivered_at', startIso).lte('delivered_at', endIso).not('delivered_by_courier_id', 'is', null).order('delivered_at', {
                ascending: false
            });
            if (error) throw error;
            const rows = data || [];
            setAllPackages(rows);
            const firstWithData = rows.find((p)=>p.delivered_by_courier_id)?.delivered_by_courier_id;
            setSelectedCourierId((prev)=>{
                if (prev && rows.some((p)=>p.delivered_by_courier_id === prev)) return prev;
                return firstWithData ?? null;
            });
        } catch (err) {
            let msg = 'Veriler yüklenemedi';
            if (err instanceof Error) msg = err.message;
            else if (err && typeof err === 'object' && 'message' in err) msg = String(err.message);
            else if (typeof err === 'string') msg = err;
            setLoadError(msg);
            setAllPackages([]);
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTodayDelivered();
    }, [
        fetchTodayDelivered
    ]);
    const courierNameById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const c of couriers){
            if (c.id && c.full_name) map.set(c.id, c.full_name);
        }
        return map;
    }, [
        couriers
    ]);
    const activeCouriersWithToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const counts = new Map();
        for (const p of allPackages){
            if (!p.delivered_by_courier_id) continue;
            counts.set(p.delivered_by_courier_id, (counts.get(p.delivered_by_courier_id) ?? 0) + 1);
        }
        const active = couriers.filter((c)=>c.is_active);
        const withDeliveries = active.filter((c)=>counts.has(c.id)).sort((a, b)=>(counts.get(b.id) ?? 0) - (counts.get(a.id) ?? 0));
        if (withDeliveries.length > 0) return withDeliveries;
        return active.sort((a, b)=>(a.full_name || '').localeCompare(b.full_name || '', 'tr'));
    }, [
        couriers,
        allPackages
    ]);
    const filteredPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedCourierId) return [];
        let list = allPackages.filter((p)=>p.delivered_by_courier_id === selectedCourierId);
        const q = searchQuery.trim().toLowerCase();
        if (q) {
            list = list.filter((p)=>(p.delivery_address || '').toLowerCase().includes(q));
        }
        return list;
    }, [
        allPackages,
        selectedCourierId,
        searchQuery
    ]);
    const toggleExpand = (id)=>{
        setExpandedId((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 shadow-md rounded-lg p-3 border border-slate-800 h-full flex flex-col lg:sticky lg:top-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold text-white tracking-tight",
                        children: "Kurye Günlük Rota"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>fetchTodayDelivered(),
                        disabled: loading,
                        className: "text-[10px] text-slate-400 hover:text-orange-400 disabled:opacity-50",
                        title: "Yenile",
                        children: "↻"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-400 px-1 mb-2",
                children: loadError
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5 overflow-x-auto admin-scrollbar pb-2 px-0.5 shrink-0",
                children: [
                    activeCouriersWithToday.map((c)=>{
                        const isSelected = selectedCourierId === c.id;
                        const count = allPackages.filter((p)=>p.delivered_by_courier_id === c.id).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setSelectedCourierId(c.id);
                                setSearchQuery('');
                                setExpandedId(null);
                            },
                            className: `shrink-0 px-2.5 py-1 rounded-full text-xs font-medium transition-colors border ${isSelected ? 'bg-orange-600 text-white border-orange-500' : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'}`,
                            children: [
                                c.full_name,
                                count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `ml-1 ${isSelected ? 'text-orange-100' : 'text-slate-500'}`,
                                    children: [
                                        "(",
                                        count,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, c.id, true, {
                            fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this);
                    }),
                    activeCouriersWithToday.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-500 px-1",
                        children: "Aktif kurye yok"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        placeholder: "Adres ara...",
                        disabled: !selectedCourierId || loading,
                        className: "flex-1 min-w-0 px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 bg-orange-600/20 text-orange-300 border border-orange-600/40 px-2 py-1 rounded-full text-xs font-bold tabular-nums",
                        children: filteredPackages.length
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 max-h-[600px] overflow-y-auto admin-scrollbar rounded-lg border border-slate-800/80 bg-slate-950/50",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-6 border-2 border-slate-600 border-t-orange-500 rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this) : !selectedCourierId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 text-center py-8",
                    children: "Kurye seçin"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, this) : filteredPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 text-center py-8",
                    children: searchQuery.trim() ? 'Aramaya uygun paket yok' : 'Bugün teslim kaydı yok'
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-slate-800/80",
                    children: filteredPackages.map((pkg)=>{
                        const open = expandedId === pkg.id;
                        const code = pkg.order_number || `#${pkg.id}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleExpand(pkg.id),
                                className: `w-full text-left px-2.5 py-2 hover:bg-slate-800/60 transition-colors ${open ? 'bg-slate-800/40' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-start gap-2 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-orange-500 font-medium shrink-0 ${open ? 'text-orange-400' : 'text-orange-500'}`,
                                                children: code
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                                lineNumber: 235,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-300 flex-1 line-clamp-2",
                                                children: pkg.delivery_address || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                                lineNumber: 242,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 shrink-0 mt-0.5",
                                                children: pkg.delivered_at ? new Date(pkg.delivered_at).toLocaleTimeString('tr-TR', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) : '--:--'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                                lineNumber: 245,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600 text-[10px] shrink-0",
                                                children: open ? '▲' : '▼'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                                lineNumber: 253,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                        lineNumber: 234,
                                        columnNumber: 21
                                    }, this),
                                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 pl-0 pt-2 border-t border-slate-700/50 text-xs text-slate-400 whitespace-pre-wrap",
                                        children: pkg.content?.trim() ? pkg.content : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-slate-600",
                                            children: "İçerik bilgisi yok"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                            lineNumber: 262,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                        lineNumber: 258,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                                lineNumber: 227,
                                columnNumber: 19
                            }, this)
                        }, pkg.id, false, {
                            fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                            lineNumber: 226,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            selectedCourierId && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-600 mt-1.5 px-1 text-center",
                children: [
                    courierNameById.get(selectedCourierId) ?? 'Kurye',
                    " · iş günü teslimleri"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/components/CourierDailyRoutes.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/components/LiveTrackingTab.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveTrackingTab",
    ()=>LiveTrackingTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$OrderActionMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/OrderActionMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$OrderDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/OrderDrawer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CourierTransferModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/CourierTransferModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CourierDailyRoutes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/CourierDailyRoutes.tsx [app-ssr] (ecmascript)");
;
/**
 * @file src/app/admin/components/LiveTrackingTab.tsx
 * @description Canlı Takip Paneli Bileşeni.
 * Aktif operasyonların (bekleyen, atanan, yolda olan siparişler) gerçek zamanlı 
 * izlendiği ve yönetildiği ana sekmeyi oluşturur. Siparişlere kurye atama, 
 * sipariş iptali (3 nokta menüsü üzerinden) ve kuryelerin anlık yük durumlarını 
 * görüntüleme yeteneklerine sahiptir.
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
// Harita bileşenini dinamik olarak yükle (SSR devre dışı)
const LiveMapComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/components/LiveMapComponent.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-center text-slate-500",
            children: "Harita yükleniyor..."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
            lineNumber: 24,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
});
function LiveTrackingTab({ packages, couriers, restaurants, isLoading, selectedCouriers, assigningIds, openDropdownId, setOpenDropdownId, handleCourierChange, handleAssignCourier, handleCancelOrder, todayDeliveredCount }) {
    const [selectedPackage, setSelectedPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transferPackage, setTransferPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [liveCouriersCount, setLiveCouriersCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Sol panel: Sahipsiz paketler (kurye atanmamış ve iptal edilmemiş)
    // Yeni akışta: new_order, getting_ready, ready durumları da gösterilecek
    const unassignedPackages = packages.filter((pkg)=>!pkg.courier_id && pkg.status !== 'cancelled' && pkg.status !== 'delivered');
    // Sağ panel: Kurye atanmış paketler (iptal edilmemiş)
    const assignedPackages = packages.filter((pkg)=>pkg.courier_id && pkg.status !== 'cancelled');
    const getStatusText = (status)=>{
        switch(status){
            case 'new_order':
                return 'Yeni Sipariş';
            case 'getting_ready':
                return 'Hazırlanıyor';
            case 'ready':
                return 'Hazır';
            case 'assigned':
                return 'Atandı';
            case 'picking_up':
                return 'Alınıyor';
            case 'on_the_way':
                return 'Yolda';
            case 'delivered':
                return 'Teslim Edildi';
            case 'cancelled':
                return 'İptal Edildi';
            default:
                return status;
        }
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'new_order':
                return '●';
            case 'getting_ready':
                return '●';
            case 'ready':
                return '●';
            case 'assigned':
                return '●';
            case 'picking_up':
                return '●';
            case 'on_the_way':
                return '●';
            case 'delivered':
                return '●';
            case 'cancelled':
                return '●';
            default:
                return '●';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            transferPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CourierTransferModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourierTransferModal"], {
                package: transferPackage,
                couriers: couriers,
                onClose: ()=>setTransferPackage(null),
                onSuccess: ()=>{
                    // Realtime sayesinde otomatik güncellenecek
                    console.log('✅ Kurye devri başarılı');
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                lineNumber: 103,
                columnNumber: 17
            }, this),
            selectedPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4",
                onClick: ()=>setSelectedPackage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4 sticky top-0 bg-slate-900 pb-4 border-b border-slate-700 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-white tracking-tight",
                                    children: "Sipariş Detayları"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPackage(null),
                                    className: "text-slate-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                            lineNumber: 119,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-orange-400",
                                            children: selectedPackage.order_number || '......'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this),
                                        selectedPackage.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm py-1 px-3 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(selectedPackage.platform)}`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(selectedPackage.platform)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 137,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 text-sm",
                                                children: "Durum:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 146,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1.5 rounded-full text-sm font-semibold ${selectedPackage.status === 'cancelled' ? 'bg-red-900/50 text-red-300' : selectedPackage.status === 'new_order' ? 'bg-blue-900/50 text-blue-300' : selectedPackage.status === 'getting_ready' ? 'bg-cyan-900/50 text-cyan-300' : selectedPackage.status === 'ready' ? 'bg-teal-900/50 text-teal-300' : selectedPackage.status === 'waiting' ? 'bg-yellow-900/50 text-yellow-300' : selectedPackage.status === 'assigned' ? 'bg-purple-900/50 text-purple-300' : selectedPackage.status === 'picking_up' ? 'bg-orange-900/50 text-orange-300' : selectedPackage.status === 'on_the_way' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-green-900/50 text-green-300'}`,
                                                children: getStatusText(selectedPackage.status)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 147,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                        lineNumber: 145,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Restoran"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-semibold",
                                                    children: selectedPackage.restaurant?.name || 'Bilinmeyen'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 165,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-800 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Tutar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-400 font-bold text-xl",
                                                    children: [
                                                        selectedPackage.amount,
                                                        "₺"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 169,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-2",
                                            children: "Müşteri Bilgileri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 177,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Ad Soyad"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: selectedPackage.customer_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this),
                                        selectedPackage.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Telefon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: selectedPackage.customer_phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 183,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-1",
                                                    children: "Teslimat Adresi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white",
                                                    children: selectedPackage.delivery_address
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, this),
                                selectedPackage.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs mb-1",
                                            children: "Paket İçeriği"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 197,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-orange-200",
                                            children: selectedPackage.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 198,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 196,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 text-sm",
                                                children: "Ödeme Yöntemi:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 205,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded text-sm font-medium ${selectedPackage.payment_method === 'cash' ? 'bg-green-900/50 text-green-300' : selectedPackage.payment_method === 'iban' ? 'bg-purple-900/50 text-purple-300' : 'bg-orange-900/50 text-orange-300'}`,
                                                children: selectedPackage.payment_method === 'cash' ? 'Nakit' : selectedPackage.payment_method === 'iban' ? 'IBAN' : 'Kart'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 206,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                        lineNumber: 204,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 203,
                                    columnNumber: 29
                                }, this),
                                selectedPackage.courier_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs mb-1",
                                                        children: "Atanan Kurye"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white",
                                                        children: couriers.find((c)=>c.id === selectedPackage.courier_id)?.full_name || 'Bilinmeyen'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 222,
                                                columnNumber: 41
                                            }, this),
                                            (selectedPackage.status === 'assigned' || selectedPackage.status === 'picking_up' || selectedPackage.status === 'on_the_way') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setTransferPackage(selectedPackage);
                                                },
                                                className: "bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1",
                                                children: "Kurye Devret"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 228,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                        lineNumber: 221,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 220,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 p-4 rounded-lg space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-2",
                                            children: "Zaman Çizelgesi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 244,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Oluşturulma:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.created_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 246,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Hazırlamaya Başlama:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.getting_ready_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.getting_ready_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 254,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Hazır Olma:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.ready_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.ready_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 262,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Kurye Kabul:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.assigned_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.assigned_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 270,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Esnaftan Alınma:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.picked_up_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.picked_up_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 278,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Teslim Edilme:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: selectedPackage.delivered_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(selectedPackage.delivered_at) : '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 286,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 243,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                            lineNumber: 130,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$OrderDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderDrawer"], {
                packages: assignedPackages,
                couriers: couriers,
                openDropdownId: openDropdownId,
                setOpenDropdownId: setOpenDropdownId,
                handleCancelOrder: handleCancelOrder
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row w-full gap-4 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col gap-4 min-w-[500px] w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 shadow-md rounded-lg p-3 border border-slate-800 w-full",
                                    style: {
                                        position: 'relative',
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2 flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold tracking-tight text-white",
                                                    children: "Canlı Harita"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 uppercase tracking-wide text-[10px]",
                                                                    children: "Toplam"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-white ui-stat",
                                                                    children: packages.filter((pkg)=>pkg.latitude && pkg.longitude && pkg.status !== 'delivered' && pkg.status !== 'cancelled').length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 uppercase tracking-wide text-[10px]",
                                                                    children: "Yolda"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-orange-400 ui-stat",
                                                                    children: packages.filter((pkg)=>pkg.latitude && pkg.longitude && (pkg.status === 'assigned' || pkg.status === 'picking_up' || pkg.status === 'on_the_way')).length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 uppercase tracking-wide text-[10px]",
                                                                    children: "Bekleyen"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-yellow-400 ui-stat",
                                                                    children: packages.filter((pkg)=>pkg.latitude && pkg.longitude && pkg.status === 'waiting').length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-500 uppercase tracking-wide text-[10px]",
                                                                    children: "Kuryeler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-white ui-stat",
                                                                    children: liveCouriersCount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hidden lg:flex items-center gap-2 ml-2 pl-2 border-l border-slate-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-2 h-2 rounded-full bg-red-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400",
                                                                            children: "Sahipsiz"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-2 h-2 rounded-full bg-yellow-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 342,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400",
                                                                            children: "Restoran yolu"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 343,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-2 h-2 rounded-full bg-green-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 346,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400",
                                                                            children: "Atanmış"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 313,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[500px] rounded-md overflow-hidden border border-slate-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveMapComponent, {
                                                packages: packages,
                                                couriers: couriers,
                                                restaurants: restaurants,
                                                onLiveCouriersChange: setLiveCouriersCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 353,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 352,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 312,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 shadow-md rounded-lg p-3 border border-slate-800 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-semibold mb-3 text-white tracking-tight",
                                            children: "Canlı Sipariş Takibi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 363,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-full text-center py-8 text-slate-500",
                                                children: "Siparişler yükleniyor..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 367,
                                                columnNumber: 33
                                            }, this) : unassignedPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-full text-center py-8 text-slate-500",
                                                children: "Kurye bekleyen sipariş bulunmuyor."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 369,
                                                columnNumber: 33
                                            }, this) : unassignedPackages.map((pkg)=>{
                                                const isWebOrder = pkg.platform === 'web';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative p-3 rounded-lg border-l-4 shadow-sm cursor-pointer transition-colors ${isWebOrder ? 'bg-amber-900/20 hover:bg-amber-900/30 border-yellow-500/30' : 'bg-slate-800 hover:bg-slate-700 border-slate-700'} ${pkg.status === 'waiting' ? 'border-l-yellow-500' : pkg.status === 'assigned' ? 'border-l-orange-500' : pkg.status === 'picking_up' ? 'border-l-orange-500' : 'border-l-red-500'} border-r border-t border-b`,
                                                    children: [
                                                        isWebOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute top-2 right-2 px-2 py-0.5 text-xs font-bold bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded-md z-20",
                                                            children: "WEB"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>setSelectedPackage(pkg),
                                                            className: "absolute inset-0 z-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>setSelectedPackage(pkg),
                                                            className: "absolute inset-0 z-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-2 left-2 z-20",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$OrderActionMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderActionMenu"], {
                                                                package: pkg,
                                                                isOpen: openDropdownId === pkg.id,
                                                                onToggle: ()=>setOpenDropdownId(openDropdownId === pkg.id ? null : pkg.id),
                                                                onCancel: handleCancelOrder
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-2 ml-8 relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs font-bold px-2 py-1 rounded ${pkg.order_number ? 'text-orange-600 bg-orange-900/50' : 'text-slate-400 bg-slate-100 animate-pulse'}`,
                                                                            children: pkg.order_number || '......'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 403,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        pkg.platform && pkg.platform !== 'web' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs py-0.5 px-2 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-white flex items-center gap-1",
                                                                    children: [
                                                                        "🕐 ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.created_at)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-2 ml-8 relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-orange-900/50 text-orange-300 px-2 py-1 rounded text-sm font-bold",
                                                                    children: [
                                                                        "🍽️ ",
                                                                        pkg.restaurant?.name || 'Bilinmeyen'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold text-green-400",
                                                                    children: [
                                                                        pkg.amount,
                                                                        "₺"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 ml-8 relative z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${pkg.status === 'cancelled' ? 'bg-red-900/50 text-red-300' : pkg.status === 'new_order' ? 'bg-blue-900/50 text-blue-300' : pkg.status === 'getting_ready' ? 'bg-cyan-900/50 text-cyan-300' : pkg.status === 'ready' ? 'bg-teal-900/50 text-teal-300 animate-pulse' : pkg.status === 'assigned' ? 'bg-purple-900/50 text-purple-300' : pkg.status === 'picking_up' ? 'bg-orange-900/50 text-orange-300' : pkg.status === 'on_the_way' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-green-900/50 text-green-300'}`,
                                                                children: [
                                                                    getStatusIcon(pkg.status),
                                                                    " ",
                                                                    getStatusText(pkg.status).toUpperCase()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 mb-3 ml-8 relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-sm text-white",
                                                                    children: [
                                                                        "👤 ",
                                                                        pkg.customer_name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 45
                                                                }, this),
                                                                pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-white",
                                                                    children: [
                                                                        "📞 ",
                                                                        pkg.customer_phone
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 49
                                                                }, this),
                                                                pkg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-white",
                                                                            children: "Paket İçeriği:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 452,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-orange-200 bg-orange-900/30 p-1.5 rounded border border-orange-700",
                                                                            children: [
                                                                                "📝 ",
                                                                                pkg.content
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-white",
                                                                            children: "Adres:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 459,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-100 overflow-hidden",
                                                                            style: {
                                                                                display: '-webkit-box',
                                                                                WebkitLineClamp: 2,
                                                                                WebkitBoxOrient: 'vertical'
                                                                            },
                                                                            children: [
                                                                                "📍 ",
                                                                                pkg.delivery_address
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `px-2 py-1 rounded text-xs font-medium ${pkg.payment_method === 'cash' ? 'bg-green-900/50 text-green-300' : pkg.payment_method === 'iban' ? 'bg-purple-900/50 text-purple-300' : 'bg-orange-900/50 text-orange-300'}`,
                                                                        children: pkg.payment_method === 'cash' ? '💵 Nakit' : pkg.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 41
                                                        }, this),
                                                        !pkg.courier_id && pkg.status === 'ready' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-slate-700 pt-2 space-y-2 relative z-20",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedCouriers[pkg.id] || '',
                                                                    onChange: (e)=>handleCourierChange(pkg.id, e.target.value),
                                                                    className: "w-full bg-slate-700 text-white border border-slate-600 rounded px-2 py-2 min-h-[44px] text-xs focus:ring-1 focus:ring-orange-500 focus:border-transparent",
                                                                    disabled: assigningIds.has(pkg.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Kurye Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        couriers.filter((c)=>c.is_active).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            disabled: true,
                                                                            children: "⚠️ Aktif Kurye Bulunmuyor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 57
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    disabled: true,
                                                                                    children: [
                                                                                        "Kurye Seçin (Aktif: ",
                                                                                        couriers.filter((c)=>c.is_active).length,
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                    lineNumber: 488,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                couriers.filter((c)=>c.is_active).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: c.id,
                                                                                        children: [
                                                                                            c.full_name,
                                                                                            " (",
                                                                                            c.todayDeliveryCount || 0,
                                                                                            " bugün, ",
                                                                                            c.activePackageCount || 0,
                                                                                            " aktif)"
                                                                                        ]
                                                                                    }, c.id, true, {
                                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                        lineNumber: 492,
                                                                                        columnNumber: 69
                                                                                    }, this))
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleAssignCourier(pkg.id),
                                                                    disabled: !selectedCouriers[pkg.id] || assigningIds.has(pkg.id),
                                                                    className: "w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-3 py-2 min-h-[44px] rounded text-xs font-semibold transition-all",
                                                                    children: assigningIds.has(pkg.id) ? '⏳ Atanıyor...' : '✅ Kurye Ata'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 45
                                                        }, this),
                                                        pkg.courier_id && (pkg.status === 'assigned' || pkg.status === 'picking_up' || pkg.status === 'on_the_way') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-slate-700 pt-2 relative z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-orange-900/50 text-orange-300 px-2 py-1 rounded text-xs font-medium",
                                                                    children: [
                                                                        "🚴 ",
                                                                        couriers.find((c)=>c.id === pkg.courier_id)?.full_name || 'Bilinmeyen'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, pkg.id, true, {
                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 37
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                            lineNumber: 365,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 362,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                            lineNumber: 311,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row gap-4 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[320px] shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-900 shadow-xl rounded-2xl p-2 sticky top-4 border border-slate-800 w-[320px] shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-bold text-white",
                                                        children: "🚴 Kurye Durumları"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: [
                                                            "✅ ",
                                                            todayDeliveredCount,
                                                            " bugün"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 530,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 max-h-[500px] overflow-y-auto overflow-x-auto",
                                                children: couriers.filter((c)=>c.is_active).map((c)=>{
                                                    const courierPackages = assignedPackages.filter((pkg)=>pkg.courier_id === c.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-slate-800 rounded-lg border border-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mb-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-xs text-white",
                                                                        children: c.full_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                        lineNumber: 546,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-green-400 block font-semibold",
                                                                                children: [
                                                                                    "📦 ",
                                                                                    c.todayDeliveryCount || 0,
                                                                                    " bugün"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                lineNumber: 548,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-orange-400 block font-semibold",
                                                                                children: [
                                                                                    "🚚 ",
                                                                                    c.activePackageCount || 0,
                                                                                    " üzerinde"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                lineNumber: 551,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-1.5",
                                                                children: [
                                                                    !c.is_active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-bold",
                                                                        children: "⚫ AKTİF DEĞİL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 62
                                                                    }, this),
                                                                    c.is_active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] bg-green-900/50 text-green-300 px-1.5 py-0.5 rounded font-bold",
                                                                        children: "🟢 AKTİF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 41
                                                            }, this),
                                                            courierPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1.5 space-y-1",
                                                                children: courierPackages.map((pkg)=>{
                                                                    const restoranAdi = pkg.restaurant?.name ?? restaurants.find((r)=>String(r.id) === String(pkg.restaurant_id))?.name ?? 'Restoran';
                                                                    const adres = pkg.delivery_address || '—';
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setSelectedPackage(pkg),
                                                                        className: "w-full overflow-hidden cursor-pointer hover:bg-slate-700/80 py-1 px-1.5 rounded transition-colors",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-0.5 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-1.5 min-w-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `shrink-0 px-1.5 py-0.5 rounded-full font-semibold text-[10px] ${pkg.status === 'waiting' ? 'bg-yellow-900/50 text-yellow-300' : pkg.status === 'assigned' ? 'bg-orange-900/50 text-orange-300' : pkg.status === 'picking_up' ? 'bg-orange-900/50 text-orange-300' : 'bg-red-900/50 text-red-300'}`,
                                                                                            children: pkg.status === 'waiting' ? '⏳ Bekliyor' : pkg.status === 'assigned' ? '👤 Atandı' : pkg.status === 'picking_up' ? '🏃 Alıyor' : '🚗 Yolda'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                            lineNumber: 582,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-orange-400 text-[11px] truncate min-w-0",
                                                                                            children: restoranAdi
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                            lineNumber: 601,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                    lineNumber: 581,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-400 text-[11px] truncate block pl-0",
                                                                                    children: adres
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                                    lineNumber: 605,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                            lineNumber: 580,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    }, pkg.id, false, {
                                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 57
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 37
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                                lineNumber: 536,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                        lineNumber: 529,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 528,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[350px] shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$CourierDailyRoutes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CourierDailyRoutes"], {
                                        couriers: couriers
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                        lineNumber: 622,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                                    lineNumber: 621,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                            lineNumber: 527,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                    lineNumber: 309,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/components/LiveTrackingTab.tsx",
                lineNumber: 307,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/services/orderService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignCourier",
    ()=>assignCourier,
    "cancelOrder",
    ()=>cancelOrder,
    "updateOrderStatus",
    ()=>updateOrderStatus
]);
/**
 * @file src/services/orderService.ts
 * @description Sipariş İşlemleri Servisi.
 * Siparişlerin yaşam döngüsünü yönetir. Sipariş iptali, kurye atama ve 
 * sipariş durumu güncellemeleri gibi temel veritabanı işlemlerini gerçekleştirir.
 * @version 2.0 - Push notification support added
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
;
async function cancelOrder(packageId, details = 'Sipariş iptal edilecek') {
    try {
        const confirmed = window.confirm(`Bu siparişi iptal etmek istediğinizden emin misiniz?\n\n${details}`);
        if (!confirmed) return {
            success: false,
            cancelled: true
        };
        // 1. Mevcut sipariş durumunu kontrol et
        const { data: packageData, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('status, assigned_at, picked_up_at, courier_id').eq('id', packageId).single();
        if (fetchError) throw fetchError;
        // 2. Ücretli iptal: kurye paketi fiziksel olarak teslim almış olmalı
        const isChargeableCancellation = Boolean(packageData.picked_up_at || packageData.status === 'on_the_way');
        console.log('🔍 İptal Analizi:', {
            packageId,
            currentStatus: packageData.status,
            courierId: packageData.courier_id,
            pickedUpAt: packageData.picked_up_at,
            isChargeableCancellation,
            reason: isChargeableCancellation ? '💰 Ücretli İptal (Paket teslim alındı)' : '🆓 Ücretsiz İptal (Paket teslim alınmadı)'
        });
        // 3. İptal işlemini gerçekleştir
        const updatePayload = {
            status: 'cancelled',
            cancelled_at: new Date().toISOString(),
            cancelled_by: 'admin',
            is_chargeable_cancellation: isChargeableCancellation
        };
        if (isChargeableCancellation && packageData.courier_id) {
            updatePayload.delivered_by_courier_id = packageData.courier_id;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update(updatePayload).eq('id', packageId);
        if (error) throw error;
        // 4. Kullanıcıya bilgi ver
        if (isChargeableCancellation) {
            alert('⚠️ Ücretli İptal\n\nKurye paketi aldığı için bu iptal hesaplamalara dahil edilecek.\n(Restoran borcu, kurye kazancı)');
        }
        return {
            success: true,
            isChargeableCancellation
        };
    } catch (error) {
        console.error('Sipariş iptal hatası:', error);
        return {
            success: false,
            error
        };
    }
}
async function assignCourier(packageId, courierId) {
    try {
        // 1. Paket bilgilerini al (bildirim için gerekli + durum kontrolü)
        const { data: packageData, error: packageError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('customer_name, delivery_address, restaurant_id, status, restaurants(name)').eq('id', packageId).single();
        if (packageError) throw packageError;
        // 🚫 GÜVENLİK KONTROLÜ: Kurye paketi aldıysa başka kuryeye atanamaz!
        const blockedStatuses = [
            'picking_up',
            'on_the_way',
            'delivered'
        ];
        if (blockedStatuses.includes(packageData.status)) {
            alert(`❌ Bu paket "${packageData.status}" durumunda!\n\nKurye paketi aldıktan sonra başka kuryeye atanamaz.`);
            return {
                success: false,
                error: 'Paket kurye tarafından alındı, atanamaz'
            };
        }
        // 2. Kurye ata
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
            courier_id: courierId,
            status: 'assigned',
            assigned_at: new Date().toISOString()
        }).eq('id', packageId);
        if (error) throw error;
        // 3. Push Notification Gönder (Trendyol Formatı)
        try {
            const restaurantName = packageData.restaurants?.name || 'Restoran';
            const deliveryAddress = packageData.delivery_address || packageData.customer_name || 'Müşteri';
            console.log('🔥 DEBUG: Push notification tetikleniyor:', {
                courierId,
                packageId,
                restaurantName,
                deliveryAddress,
                packageData: packageData
            });
            // API route'a istek gönder (absolute URL ile)
            const baseUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", "https://mergenkurye-demo-psi.vercel.app") || 'http://localhost:3000';
            const apiUrl = `${baseUrl}/api/send-push`;
            console.log('🔥 DEBUG: API URL:', apiUrl);
            const requestBody = {
                courierId,
                restaurantName,
                deliveryAddress,
                customerName: packageData.customer_name
            };
            console.log('🔥 DEBUG: Request Body:', JSON.stringify(requestBody, null, 2));
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            console.log('🔥 DEBUG: API Response Status:', response.status);
            console.log('🔥 DEBUG: API Response OK:', response.ok);
            const result = await response.json();
            console.log('🔥 DEBUG: API Response Body:', result);
            if (response.ok) {
                console.log('✅ Push notification başarıyla gönderildi:', result);
                alert(`✅ Kurye atandı ve bildirim gönderildi!\n\nKurye: ${result.courierName}\nBildirim: ${result.title}`);
            } else {
                console.warn('⚠️ Push notification gönderilemedi:', result);
                alert(`⚠️ Kurye atandı ama bildirim gönderilemedi!\n\nHata: ${result.error}\nDetay: ${result.details || 'Yok'}`);
            }
        } catch (pushError) {
            console.error('❌ Push notification hatası (kurye atama başarılı):', pushError);
            alert(`❌ Push notification hatası!\n\n${pushError}\n\nKurye atandı ama bildirim gönderilemedi.`);
        // Push notification hatası kurye atama işlemini etkilemez
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Kurye atama hatası:', error);
        return {
            success: false,
            error
        };
    }
}
async function updateOrderStatus(packageId, status, additionalData) {
    try {
        const updateData = {
            status,
            ...additionalData
        };
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update(updateData).eq('id', packageId);
        if (error) throw error;
        return {
            success: true
        };
    } catch (error) {
        console.error('Durum güncelleme hatası:', error);
        return {
            success: false,
            error
        };
    }
}
}),
"[project]/src/hooks/useAdminRealtimeNotifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminRealtimeNotifications",
    ()=>useAdminRealtimeNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
/**
 * @file src/hooks/useAdminRealtimeNotifications.ts
 * @description Admin Paneli - Realtime Bildirim Hook
 * 
 * SENARYO:
 * - Supabase Realtime ile packages tablosunu dinle (INSERT)
 * - Şart: status === 'new_order' (herhangi bir restoran için)
 * - Aksiyon: Toast + Audio
 * - Initial load koruması (useRef)
 */ 'use client';
;
;
function useAdminRealtimeNotifications(isLoggedIn) {
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Audio'yu hazırla
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Audio unlock için kullanıcı etkileşimi bekle
        const unlockAudio = undefined;
    }, []);
    // Realtime subscription
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoggedIn) {
            console.log('⏸️ Admin bildirimleri durduruldu - Giriş yapılmamış');
            return;
        }
        console.log('🔔 Admin Realtime bildirimleri başlatılıyor');
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel('admin-new-orders').on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'packages'
        }, (payload)=>{
            console.log('📦 Admin Realtime INSERT event:', payload);
            // İLK RENDER KORUMASI
            if (isInitialMount.current) {
                console.log('⏭️ İlk render - bildirim atlandı');
                return;
            }
            const newOrder = payload.new;
            // Sadece 'new_order' statusundaki siparişler
            if (newOrder && newOrder.status === 'new_order') {
                console.log('🔔 SİSTEME YENİ SİPARİŞ DÜŞTÜ (Admin):', newOrder);
                // 1. SES ÇAL
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().then(()=>console.log('✅ Admin bildirimi sesi çalıyor')).catch((err)=>console.error('❌ Ses çalma hatası:', err));
                }
                // 2. TOAST GÖSTER
                showToast('🚀 Sisteme Yeni Sipariş Düştü!', `Sipariş #${newOrder.id} - ${newOrder.customer_name || 'Müşteri'}`);
            }
        }).subscribe((status)=>{
            console.log('📡 Admin Realtime status:', status);
            if (status === 'SUBSCRIBED') {
                // 2 saniye sonra initial load korumasını kaldır
                setTimeout(()=>{
                    isInitialMount.current = false;
                    console.log('🔓 Admin initial load koruması kaldırıldı');
                }, 2000);
            }
        });
        return ()=>{
            console.log('🔌 Admin bildirimleri kapatılıyor');
            isInitialMount.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
        };
    }, [
        isLoggedIn
    ]);
}
// Toast gösterme fonksiyonu
function showToast(title, body) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const toastContainer = undefined;
    const style = undefined;
}
}),
"[project]/src/hooks/useReadyPackageNotification.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReadyPackageNotification",
    ()=>useReadyPackageNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
/**
 * @file src/hooks/useReadyPackageNotification.ts
 * @description Paket 'ready' durumuna geçtiğinde ses ve bildirim gönderen hook
 */ 'use client';
;
;
function useReadyPackageNotification() {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasRequestedPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Bildirim izni iste (sadece bir kez)
        if (!hasRequestedPermission.current && ("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'Notification' in window) //TURBOPACK unreachable
        ;
        // Audio element'i hazırla
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // 2. Realtime dinleyici
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel('ready-package-notifications').on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'packages'
        }, (payload)=>{
            const oldStatus = payload.old?.status;
            const newStatus = payload.new?.status;
            console.log('📦 Paket güncellendi:', {
                id: payload.new.id,
                oldStatus,
                newStatus,
                willTrigger: newStatus === 'ready' && oldStatus !== 'ready'
            });
            // Sadece 'ready' durumuna GEÇİŞTE tetikle (spam önleme)
            if (newStatus === 'ready' && oldStatus !== 'ready') {
                console.log('🎉 Paket hazır durumuna geçti - Bildirim tetikleniyor!');
                // 3. Ses çal
                if (audioRef.current) {
                    audioRef.current.play().catch((error)=>{
                        console.warn('⚠️ Ses çalınamadı (autoplay engeli):', error);
                    });
                }
                // 4. Tarayıcı bildirimi
                if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'Notification' in window) //TURBOPACK unreachable
                ;
            }
        }).subscribe();
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
        };
    }, []);
}
}),
"[project]/src/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$LiveTrackingTab$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/components/LiveTrackingTab.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/AdminDataProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$orderService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/orderService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAdminRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAdminRealtimeNotifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReadyPackageNotification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReadyPackageNotification.ts [app-ssr] (ecmascript)");
/**
 * @file src/app/admin/page.tsx
 * @description Admin Ana Sayfa
 */ 'use client';
;
;
;
;
;
;
;
function AdminPage() {
    const { packages, couriers, restaurants, isLoading, setSuccessMessage, setErrorMessage, fetchPackages, todayDeliveredCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$AdminDataProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAdminData"])();
    const [selectedCouriers, setSelectedCouriers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [assigningIds, setAssigningIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [openDropdownId, setOpenDropdownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Realtime bildirimler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAdminRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAdminRealtimeNotifications"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReadyPackageNotification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadyPackageNotification"])();
    const handleCourierChange = (packageId, courierId)=>{
        setSelectedCouriers((prev)=>({
                ...prev,
                [packageId]: courierId
            }));
    };
    const handleAssignCourier = async (packageId)=>{
        const courierId = selectedCouriers[packageId];
        if (!courierId) {
            setErrorMessage('Lütfen kurye seçin!');
            setTimeout(()=>setErrorMessage(''), 3000);
            return;
        }
        setAssigningIds((prev)=>new Set(prev).add(packageId));
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$orderService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignCourier"])(packageId, courierId);
            setSuccessMessage('Kurye atandı!');
            setTimeout(()=>setSuccessMessage(''), 2000);
            await fetchPackages();
        } catch (error) {
            setErrorMessage(error.message);
            setTimeout(()=>setErrorMessage(''), 3000);
        } finally{
            setAssigningIds((prev)=>{
                const newSet = new Set(prev);
                newSet.delete(packageId);
                return newSet;
            });
        }
    };
    const handleCancelOrder = async (packageId, details = '')=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$orderService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelOrder"])(packageId, details);
            if (result.cancelled) return;
            if (result.success) {
                setSuccessMessage('Sipariş iptal edildi!');
                setTimeout(()=>setSuccessMessage(''), 2000);
                await fetchPackages();
            }
        } catch (error) {
            setErrorMessage(error.message || 'Sipariş iptal edilemedi');
            setTimeout(()=>setErrorMessage(''), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$components$2f$LiveTrackingTab$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveTrackingTab"], {
        packages: packages,
        couriers: couriers,
        restaurants: restaurants,
        isLoading: isLoading,
        selectedCouriers: selectedCouriers,
        assigningIds: assigningIds,
        openDropdownId: openDropdownId,
        setOpenDropdownId: setOpenDropdownId,
        handleCourierChange: handleCourierChange,
        handleAssignCourier: handleAssignCourier,
        handleCancelOrder: handleCancelOrder,
        todayDeliveredCount: todayDeliveredCount
    }, void 0, false, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_ca3b3b49._.js.map