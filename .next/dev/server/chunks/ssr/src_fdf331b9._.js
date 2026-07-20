module.exports = [
"[project]/src/utils/statusHelpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @file src/utils/statusHelpers.ts
 * @description Sipariş Durum Yönetimi - Merkezi Helper Fonksiyonlar
 */ __turbopack_context__.s([
    "STATUS_CONFIG",
    ()=>STATUS_CONFIG,
    "canTransitionTo",
    ()=>canTransitionTo,
    "filterActivePackages",
    ()=>filterActivePackages,
    "filterByStatus",
    ()=>filterByStatus,
    "filterCompletedPackages",
    ()=>filterCompletedPackages,
    "getNextValidStatuses",
    ()=>getNextValidStatuses,
    "getStatusBadgeClass",
    ()=>getStatusBadgeClass,
    "getStatusBadgeHTML",
    ()=>getStatusBadgeHTML,
    "getStatusBgClass",
    ()=>getStatusBgClass,
    "getStatusChangeMessage",
    ()=>getStatusChangeMessage,
    "getStatusColor",
    ()=>getStatusColor,
    "getStatusLabel",
    ()=>getStatusLabel,
    "getStatusPriority",
    ()=>getStatusPriority,
    "getStatusTextClass",
    ()=>getStatusTextClass,
    "isActiveStatus",
    ()=>isActiveStatus,
    "isCompletedStatus",
    ()=>isCompletedStatus,
    "isValidStatus",
    ()=>isValidStatus,
    "normalizeStatus",
    ()=>normalizeStatus,
    "sortByStatusPriority",
    ()=>sortByStatusPriority,
    "statusFromCode",
    ()=>statusFromCode,
    "statusToCode",
    ()=>statusToCode
]);
const STATUS_CONFIG = {
    new_order: {
        code: 0,
        label: 'YENİ SİPARİŞ',
        labelShort: 'Yeni',
        color: 'blue',
        bgClass: 'bg-blue-600',
        textClass: 'text-blue-600',
        badgeClass: 'bg-blue-900/50 text-blue-300',
        description: 'Atama bekliyor'
    },
    getting_ready: {
        code: 1,
        label: 'HAZIRLANIYOR',
        labelShort: 'Hazırlanıyor',
        color: 'cyan',
        bgClass: 'bg-cyan-600',
        textClass: 'text-cyan-600',
        badgeClass: 'bg-cyan-900/50 text-cyan-300',
        description: 'Restoran hazırlıyor'
    },
    ready: {
        code: 2,
        label: 'HAZIR',
        labelShort: 'Hazır',
        color: 'teal',
        bgClass: 'bg-teal-600',
        textClass: 'text-teal-600',
        badgeClass: 'bg-teal-900/50 text-teal-300',
        description: 'Kurye ataması bekliyor'
    },
    assigned: {
        code: 3,
        label: 'ATANDI',
        labelShort: 'Atandı',
        color: 'purple',
        bgClass: 'bg-purple-600',
        textClass: 'text-purple-600',
        badgeClass: 'bg-purple-900/50 text-purple-300',
        description: 'Kurye atandı'
    },
    picking_up: {
        code: 4,
        label: 'ALINIYOR',
        labelShort: 'Alınıyor',
        color: 'orange',
        bgClass: 'bg-orange-600',
        textClass: 'text-orange-600',
        badgeClass: 'bg-orange-900/50 text-orange-300',
        description: 'Restorandan alınıyor'
    },
    on_the_way: {
        code: 5,
        label: 'YOLDA',
        labelShort: 'Yolda',
        color: 'yellow',
        bgClass: 'bg-yellow-600',
        textClass: 'text-yellow-600',
        badgeClass: 'bg-yellow-900/50 text-yellow-300',
        description: 'Teslimat yolunda'
    },
    delivered: {
        code: 6,
        label: 'TESLİM EDİLDİ',
        labelShort: 'Teslim',
        color: 'green',
        bgClass: 'bg-green-600',
        textClass: 'text-green-600',
        badgeClass: 'bg-green-900/50 text-green-300',
        description: 'Başarıyla teslim edildi'
    },
    cancelled: {
        code: 7,
        label: 'İPTAL EDİLDİ',
        labelShort: 'İptal',
        color: 'red',
        bgClass: 'bg-red-600',
        textClass: 'text-red-600',
        badgeClass: 'bg-red-900/50 text-red-300',
        description: 'Sipariş iptal edildi'
    }
};
function getStatusBadgeClass(status) {
    return STATUS_CONFIG[status]?.badgeClass || 'bg-gray-900/50 text-gray-300';
}
function getStatusLabel(status, short = false) {
    const config = STATUS_CONFIG[status];
    if (!config) return status;
    return short ? config.labelShort : config.label;
}
function getStatusColor(status) {
    return STATUS_CONFIG[status]?.color || 'gray';
}
function getStatusBgClass(status) {
    return STATUS_CONFIG[status]?.bgClass || 'bg-gray-600';
}
function getStatusTextClass(status) {
    return STATUS_CONFIG[status]?.textClass || 'text-gray-600';
}
function normalizeStatus(status) {
    // Eski 'waiting' değerini 'new_order'a çevir
    if (status === 'waiting' || status === 'pending') {
        return 'new_order';
    }
    // Geçerli status'leri kontrol et
    const validStatuses = [
        'new_order',
        'getting_ready',
        'ready',
        'assigned',
        'picking_up',
        'on_the_way',
        'delivered',
        'cancelled'
    ];
    if (status && validStatuses.includes(status)) {
        return status;
    }
    // Default: new_order
    return 'new_order';
}
function statusFromCode(code) {
    const entry = Object.entries(STATUS_CONFIG).find(([_, config])=>config.code === code);
    return entry?.[0] || 'new_order';
}
function statusToCode(status) {
    return STATUS_CONFIG[status]?.code ?? 0;
}
function isValidStatus(status) {
    if (!status) return false;
    const validStatuses = [
        'new_order',
        'getting_ready',
        'ready',
        'assigned',
        'picking_up',
        'on_the_way',
        'delivered',
        'cancelled'
    ];
    return validStatuses.includes(status);
}
function isActiveStatus(status) {
    return status !== 'delivered' && status !== 'cancelled';
}
function isCompletedStatus(status) {
    return status === 'delivered' || status === 'cancelled';
}
function canTransitionTo(currentStatus, nextStatus) {
    const transitions = {
        new_order: [
            'getting_ready',
            'cancelled'
        ],
        getting_ready: [
            'ready',
            'cancelled'
        ],
        ready: [
            'assigned',
            'cancelled'
        ],
        assigned: [
            'picking_up',
            'cancelled'
        ],
        picking_up: [
            'on_the_way',
            'cancelled'
        ],
        on_the_way: [
            'delivered',
            'cancelled'
        ],
        delivered: [],
        cancelled: [] // İptal edildikten sonra değiştirilemez
    };
    return transitions[currentStatus]?.includes(nextStatus) || false;
}
function getNextValidStatuses(currentStatus) {
    const transitions = {
        new_order: [
            'getting_ready',
            'cancelled'
        ],
        getting_ready: [
            'ready',
            'cancelled'
        ],
        ready: [
            'assigned',
            'cancelled'
        ],
        assigned: [
            'picking_up',
            'cancelled'
        ],
        picking_up: [
            'on_the_way',
            'cancelled'
        ],
        on_the_way: [
            'delivered',
            'cancelled'
        ],
        delivered: [],
        cancelled: []
    };
    return transitions[currentStatus] || [];
}
function getStatusPriority(status) {
    // Öncelik sırası (düşük numara = yüksek öncelik)
    const priorities = {
        new_order: 1,
        getting_ready: 2,
        ready: 3,
        assigned: 4,
        picking_up: 5,
        on_the_way: 6,
        delivered: 7,
        cancelled: 8 // En düşük öncelik
    };
    return priorities[status] || 999;
}
function sortByStatusPriority(packages) {
    return [
        ...packages
    ].sort((a, b)=>{
        const priorityA = getStatusPriority(a.status);
        const priorityB = getStatusPriority(b.status);
        return priorityA - priorityB;
    });
}
function filterByStatus(packages, statuses) {
    return packages.filter((pkg)=>statuses.includes(pkg.status));
}
function filterActivePackages(packages) {
    return packages.filter((pkg)=>isActiveStatus(pkg.status));
}
function filterCompletedPackages(packages) {
    return packages.filter((pkg)=>isCompletedStatus(pkg.status));
}
function getStatusChangeMessage(oldStatus, newStatus, orderNumber) {
    const order = orderNumber ? `${orderNumber} numaralı sipariş` : 'Sipariş';
    const messages = {
        new_order: `${order} sisteme eklendi`,
        getting_ready: `${order} hazırlanmaya başlandı`,
        ready: `${order} hazır, kurye ataması bekleniyor`,
        assigned: `${order} kuryeye atandı`,
        picking_up: `${order} restorandan alınıyor`,
        on_the_way: `${order} teslimat yolunda`,
        delivered: `${order} başarıyla teslim edildi`,
        cancelled: `${order} iptal edildi`
    };
    return messages[newStatus] || `${order} durumu güncellendi`;
}
function getStatusBadgeHTML(status) {
    const config = STATUS_CONFIG[status];
    if (!config) return `<span class="px-3 py-1 rounded-full text-sm font-semibold bg-gray-900/50 text-gray-300">${status}</span>`;
    return `<span class="px-3 py-1 rounded-full text-sm font-semibold ${config.badgeClass}">${config.label}</span>`;
}
}),
"[project]/src/app/lib/orderItems.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeOrderItems",
    ()=>normalizeOrderItems
]);
function normalizeOrderItems(raw) {
    let arr = raw;
    if (typeof raw === 'string') {
        try {
            arr = JSON.parse(raw);
        } catch  {
            return [];
        }
    }
    if (!Array.isArray(arr)) return [];
    return arr.map((item)=>({
            product_id: item.product_id,
            product_name: String(item.product_name || item.name || 'Ürün'),
            quantity: Number(item.quantity || 1),
            price: Number(item.price ?? item.unit_price ?? 0),
            base_price: item.base_price != null ? Number(item.base_price) : undefined,
            selected_options: Array.isArray(item.selected_options) ? item.selected_options : [],
            item_note: item.item_note ?? item.note ?? null
        }));
}
}),
"[project]/src/app/lib/formatDeliveryAddress.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDeliveryAddress",
    ()=>formatDeliveryAddress,
    "formatStoredDeliveryAddress",
    ()=>formatStoredDeliveryAddress,
    "parseDeliveryAddress",
    ()=>parseDeliveryAddress
]);
function formatDeliveryAddress(address) {
    const street = address.street ?? address.street_address ?? '';
    const door = address.door_no ?? address.door_number ?? '';
    const base = `${address.district}, ${address.neighborhood}, ${street}, Kat: ${address.floor}, No: ${door}`;
    const tarif = (address.directions ?? address.description ?? address.notes ?? '').trim();
    return tarif ? `${base} | Tarif: ${tarif}` : base;
}
function parseDeliveryAddress(raw) {
    if (!raw?.trim()) return {
        address: raw ?? '',
        tarif: null
    };
    const tarifMatch = raw.match(/\s*\|\s*Tarif:\s*(.+)$/i);
    if (tarifMatch) {
        return {
            address: raw.slice(0, tarifMatch.index).trim(),
            tarif: tarifMatch[1].trim() || null
        };
    }
    const legacy = raw.trim().match(/^[^-]+\s*-\s*([^,]+),\s*([^,]+),\s*Kat:\s*([^,]+),\s*No:\s*(.+)$/i);
    if (legacy) {
        const [, neighborhood, district, floor, door] = legacy;
        return {
            address: `${district.trim()}, ${neighborhood.trim()}, Kat: ${floor.trim()}, No: ${door.trim()}`,
            tarif: null
        };
    }
    return {
        address: raw.trim(),
        tarif: null
    };
}
function formatStoredDeliveryAddress(raw) {
    const { address, tarif } = parseDeliveryAddress(raw);
    return tarif ? `${address} | Tarif: ${tarif}` : address;
}
}),
"[project]/src/utils/dateHelpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/lib/platformUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/restoran/components/UpdateAmountModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpdateAmountModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function UpdateAmountModal({ packageId, currentAmount, packageStatus, orderNumber, onClose, onSuccess, darkMode }) {
    const [newAmount, setNewAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentAmount.toString());
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Tutar güncellenebilir mi kontrol et
    const canUpdateAmount = ![
        'on_the_way',
        'delivered',
        'cancelled'
    ].includes(packageStatus);
    const handleUpdate = async ()=>{
        // Validasyon
        const amount = parseFloat(newAmount);
        if (isNaN(amount) || amount < 0) {
            setErrorMessage('Lütfen geçerli bir tutar girin!');
            return;
        }
        if (amount === currentAmount) {
            setErrorMessage('Yeni tutar mevcut tutarla aynı!');
            return;
        }
        setIsUpdating(true);
        setErrorMessage('');
        try {
            // Önce paketin durumunu kontrol et (race condition için)
            const { data: pkg, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('status').eq('id', packageId).single();
            if (fetchError) throw fetchError;
            // Eğer kurye tam o saniyede paketi aldıysa
            if ([
                'on_the_way',
                'delivered',
                'cancelled'
            ].includes(pkg.status)) {
                setErrorMessage('⚠️ Paket yola çıktığı için tutar artık değiştirilemez!');
                setIsUpdating(false);
                return;
            }
            // Tutarı güncelle
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                amount
            }).eq('id', packageId);
            if (updateError) throw updateError;
            console.log('✅ Tutar başarıyla güncellendi:', {
                packageId,
                oldAmount: currentAmount,
                newAmount: amount
            });
            onSuccess();
            onClose();
        } catch (error) {
            console.error('❌ Tutar güncellenirken hata:', error);
            setErrorMessage('Tutar güncellenemedi: ' + error.message);
        } finally{
            setIsUpdating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `rounded-xl p-6 max-w-md w-full border shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                            children: "💰 Tutarı Güncelle"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: `text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                orderNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-4 p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                            children: "Sipariş No:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`,
                            children: orderNumber
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this),
                !canUpdateAmount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 p-4 bg-red-900/30 border border-red-700/50 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-300 text-sm",
                        children: "⚠️ Bu sipariş artık yola çıktığı, teslim edildiği veya iptal edildiği için tutar değiştirilemez."
                    }, void 0, false, {
                        fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                    children: "Mevcut Tutar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`,
                                        children: [
                                            currentAmount,
                                            "₺"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block text-sm font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                    children: "Yeni Tutar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    step: "0.01",
                                    min: "0",
                                    value: newAmount,
                                    onChange: (e)=>setNewAmount(e.target.value),
                                    className: `w-full px-4 py-3 rounded-lg border text-lg font-bold ${darkMode ? 'bg-slate-800 border-slate-700 text-white focus:border-orange-500' : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'} outline-none transition-colors`,
                                    placeholder: "Yeni tutarı girin",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-300 text-sm",
                                children: errorMessage
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                lineNumber: 160,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: `flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`,
                                    children: "İptal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUpdate,
                                    disabled: isUpdating,
                                    className: `flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'} disabled:opacity-50 disabled:cursor-not-allowed`,
                                    children: isUpdating ? '⏳ Güncelleniyor...' : '✅ Güncelle'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/restoran/components/UpdateAmountModal.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/restoran/components/CancelOrderModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CancelOrderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * @file src/app/restoran/components/CancelOrderModal.tsx
 * @description Restoran sipariş iptal modal'ı - Katı kurallarla
 */ 'use client';
;
;
function CancelOrderModal({ package: pkg, restaurantId, onClose, onSuccess, darkMode }) {
    const [selectedReason, setSelectedReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customReason, setCustomReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    console.log('🎯 CancelOrderModal açıldı:', {
        packageId: pkg.id,
        orderNumber: pkg.order_number,
        restaurantId,
        packageData: pkg
    });
    const cancellationReasons = [
        'Ürün kalmadı',
        'Müşteri iptal etti',
        'Restoran kapalı',
        'Adres hatalı',
        'Müşteriye ulaşılamadı',
        'Diğer'
    ];
    const handleCancel = async ()=>{
        const reason = selectedReason === 'Diğer' ? customReason : selectedReason;
        if (!reason.trim()) {
            alert('Lütfen iptal sebebini seçin veya yazın!');
            return;
        }
        console.log('🔍 İptal işlemi başlatılıyor:', {
            packageId: pkg.id,
            packageIdType: typeof pkg.id,
            orderNumber: pkg.order_number,
            restaurantId: restaurantId,
            restaurantIdType: typeof restaurantId,
            cancellationReason: reason,
            fullPackage: pkg
        });
        setIsSubmitting(true);
        try {
            const payload = {
                packageId: pkg.id,
                restaurantId: restaurantId,
                cancellationReason: reason
            };
            console.log('📤 API\'ye gönderilen payload:', payload);
            const response = await fetch('/api/restaurant-cancel-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            console.log('📡 API yanıtı:', {
                status: response.status,
                statusText: response.statusText,
                data
            });
            if (!response.ok) {
                // Sistem yapılandırma hatası (500 - API Key eksik)
                if (response.status === 500 && data.technicalDetails) {
                    alert(`🔧 ${data.error}\n\n` + `${data.message}\n\n` + `📋 Teknik Detay: ${data.technicalDetails}\n\n` + `${data.debug?.hint ? '💡 Çözüm: ' + data.debug.hint : ''}`);
                    return;
                }
                // Paket bulunamadı (404)
                if (response.status === 404) {
                    const debugInfo = data.debug ? `\n\n🔍 Debug:\n` + `- Package ID: ${data.debug.packageId} (${data.debug.packageIdType})\n` + `- Hata: ${data.debug.errorMessage || 'Bilinmiyor'}\n` + `- Kod: ${data.debug.errorCode || 'Yok'}\n` + `${data.debug.errorHint ? '- İpucu: ' + data.debug.errorHint : ''}` : '';
                    alert(`❌ ${data.error}\n\n${data.message}${debugInfo}`);
                    return;
                }
                // Yetki hatası veya durum uygun değil (403)
                if (response.status === 403) {
                    if (data.technicalDetails) {
                        // Yetkilendirme hatası (RLS, API Key vb.)
                        alert(`🔒 ${data.error}\n\n` + `${data.message}\n\n` + `📋 Teknik Detay: ${data.technicalDetails}\n\n` + `${data.debug?.hint ? '💡 Çözüm: ' + data.debug.hint : ''}`);
                    } else if (data.currentStatus) {
                        // Sipariş durumu uygun değil
                        alert(`⚠️ ${data.error}\n\n` + `${data.message}\n\n` + `📊 Mevcut Durum: ${data.currentStatus}\n` + `💡 ${data.hint || ''}`);
                    } else {
                        // Genel yetki hatası
                        alert(`❌ ${data.error}\n\n${data.message}`);
                    }
                    return;
                }
                // Diğer hatalar
                const debugInfo = data.debug ? `\n\n🔍 Debug:\n${JSON.stringify(data.debug, null, 2)}` : '';
                alert(`❌ Hata (${response.status}): ${data.error}\n\n` + `${data.message || 'Bilinmeyen hata'}` + `${data.technicalDetails ? '\n\n📋 Teknik: ' + data.technicalDetails : ''}` + `${debugInfo}`);
                return;
            }
            // Başarılı
            alert(`✅ ${data.message}\n\n📦 Sipariş #${data.orderNumber || pkg.order_number}\n${data.notifiedCourier ? '📱 Kurye bilgilendirildi.' : ''}`);
            onSuccess();
            onClose();
        } catch (error) {
            console.error('❌ İptal hatası:', error);
            // Network hatası
            if (error instanceof TypeError && error.message.includes('fetch')) {
                alert(`🌐 Bağlantı Hatası\n\n` + `Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edin.\n\n` + `Teknik: ${error.message}`);
                return;
            }
            // Genel hata
            alert(`❌ Sipariş iptal edilirken bir hata oluştu!\n\n` + `${error instanceof Error ? error.message : 'Bilinmeyen hata'}\n\n` + `Lütfen tekrar deneyin veya sistem yöneticisine bildirin.`);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `rounded-xl p-6 max-w-md w-full shadow-2xl ${darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white'}`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                            children: "⚠️ Siparişi İptal Et"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: `text-2xl font-bold ${darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                    children: "Sipariş No:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `ml-2 font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`,
                                    children: [
                                        "#",
                                        pkg.order_number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                    children: "Müşteri:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `ml-2 ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: pkg.customer_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                    children: "Tutar:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `ml-2 font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`,
                                    children: [
                                        pkg.amount,
                                        "₺"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/20 border border-red-700 rounded-lg p-3 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-300 text-sm font-semibold",
                            children: "⚠️ Bu işlem geri alınamaz!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: "Sipariş iptal edildiğinde kurye bilgilendirilecek ve admin paneline kayıt düşecektir. Kurye yola çıktıysa iptal edemezsiniz."
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: `block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                            children: [
                                "İptal Sebebi ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-400",
                                    children: "*"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: cancellationReasons.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedReason(reason),
                                    className: `w-full text-left px-4 py-2 rounded-lg border transition-colors ${selectedReason === reason ? darkMode ? 'bg-orange-600 border-orange-600 text-white' : 'bg-orange-500 border-orange-500 text-white' : darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'}`,
                                    children: reason
                                }, reason, false, {
                                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                selectedReason === 'Diğer' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: `block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                            children: "Açıklama"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: customReason,
                            onChange: (e)=>setCustomReason(e.target.value),
                            placeholder: "İptal sebebini yazın...",
                            rows: 3,
                            className: `w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                    lineNumber: 264,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: isSubmitting,
                            className: `flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} disabled:opacity-50`,
                            children: "Vazgeç"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCancel,
                            disabled: isSubmitting || !selectedReason || selectedReason === 'Diğer' && !customReason.trim(),
                            className: "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: isSubmitting ? '⏳ İptal Ediliyor...' : '❌ İptal Et'
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/restoran/components/CancelOrderModal.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/hooks/useRestaurantRealtimeNotifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playRestaurantAlert",
    ()=>playRestaurantAlert,
    "stopRestaurantAlert",
    ()=>stopRestaurantAlert,
    "useRestaurantRealtimeNotifications",
    ()=>useRestaurantRealtimeNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
/**
 * @file src/hooks/useRestaurantRealtimeNotifications.ts
 * @description Restoran Paneli - Realtime Bildirim Hook
 *
 * SENARYO:
 * - Supabase Realtime ile packages tablosunu dinle (INSERT)
 * - Şart: restaurant_id === mevcut restoran ID && platform === 'web'
 * - Aksiyon: Toast + Looping Audio (alert.mp3)
 * - Initial load koruması (useRef)
 */ 'use client';
;
;
// Global ses nesnesi — bileşen dışında, döngüsel alarm
let alertAudio = null;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function stopRestaurantAlert() {
    if (alertAudio) {
        alertAudio.pause();
        alertAudio.currentTime = 0;
    }
}
function playRestaurantAlert() {
    if (alertAudio) {
        alertAudio.currentTime = 0;
        alertAudio.play().then(()=>console.log('✅ Web sipariş alarmı çalıyor (loop)')).catch((e)=>console.log('Otomatik oynatma engellendi', e));
    }
}
function useRestaurantRealtimeNotifications(restaurantId, isLoggedIn) {
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [audioUnlocked, setAudioUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // İlk etkileşimde tarayıcı autoplay kilidini aç
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const unlockAudio = undefined;
    }, []);
    // Realtime subscription
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoggedIn || !restaurantId) {
            console.log('⏸️ Restoran bildirimleri durduruldu - Giriş yapılmamış');
            return;
        }
        console.log('🔔 Restoran Realtime bildirimleri başlatılıyor, restaurant_id:', restaurantId);
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel(`restaurant-orders-${restaurantId}`).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'packages',
            filter: `restaurant_id=eq.${restaurantId}`
        }, (payload)=>{
            console.log('📦 Restoran Realtime INSERT event:', payload);
            if (isInitialMount.current) {
                console.log('⏭️ İlk render - bildirim atlandı');
                return;
            }
            const newOrder = payload.new;
            const isNewWebOrder = newOrder?.status === 'new_order' && newOrder?.platform === 'web';
            if (!isNewWebOrder) return;
            console.log('🔔 YENİ WEB SİPARİŞİ (Restoran):', newOrder);
            showToast('🌐 Yeni Web Siparişi!', `Sipariş #${newOrder.order_number || newOrder.id} - ${newOrder.customer_name}`);
        }).subscribe((status)=>{
            console.log('📡 Restoran Realtime status:', status);
            if (status === 'SUBSCRIBED') {
                setTimeout(()=>{
                    isInitialMount.current = false;
                    console.log('🔓 Restoran initial load koruması kaldırıldı');
                }, 2000);
            }
        });
        return ()=>{
            console.log('🔌 Restoran bildirimleri kapatılıyor');
            isInitialMount.current = true;
            stopRestaurantAlert();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
        };
    }, [
        restaurantId,
        isLoggedIn
    ]);
    return {
        audioUnlocked
    };
}
function showToast(title, body) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const toastContainer = undefined;
    const style = undefined;
}
}),
"[project]/src/app/restoran/components/KanbanBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KanbanBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$statusHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/statusHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$orderItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/orderItems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$formatDeliveryAddress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/formatDeliveryAddress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$UpdateAmountModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/components/UpdateAmountModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$CancelOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/components/CancelOrderModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRestaurantRealtimeNotifications.ts [app-ssr] (ecmascript)");
'use client';
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
const PACKAGE_DETAIL_SELECT = 'id, order_number, status, created_at, amount, subtotal, delivery_fee, customer_name, customer_phone, delivery_address, payment_method, items, platform, content, courier_id, getting_ready_at, ready_at, assigned_at, picked_up_at, delivered_at';
const formatPrice = (value)=>`${value.toFixed(2)}₺`;
function KanbanBoard({ packages, onRefresh, darkMode, couriers = [], restaurantId, restaurantName, isPackageDelayed = ()=>false, getDelayedMinutes = ()=>0 }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPackage, setSelectedPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailPackage, setDetailPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detailLoading, setDetailLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updateAmountPackage, setUpdateAmountPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cancelPackage, setCancelPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedPackage) {
            setDetailPackage(null);
            setDetailLoading(false);
            return;
        }
        let cancelled = false;
        setDetailLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select(PACKAGE_DETAIL_SELECT).eq('id', selectedPackage.id).single().then(({ data, error })=>{
            if (cancelled) return;
            if (error) {
                console.error('Sipariş detayı yüklenemedi:', error);
                setDetailPackage(selectedPackage);
            } else {
                setDetailPackage({
                    ...selectedPackage,
                    ...data
                });
            }
            setDetailLoading(false);
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        selectedPackage
    ]);
    // Siparişleri duruma göre filtrele
    const newOrders = packages.filter((p)=>p.status === 'new_order');
    const gettingReady = packages.filter((p)=>p.status === 'getting_ready');
    const ready = packages.filter((p)=>[
            'ready',
            'assigned',
            'picking_up',
            'on_the_way'
        ].includes(p.status));
    const handleStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (packageId, newStatus)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopRestaurantAlert"])();
        setLoading(packageId);
        try {
            const timestampField = newStatus === 'getting_ready' ? 'getting_ready_at' : 'ready_at';
            // Durumu güncelle
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').update({
                status: newStatus,
                [timestampField]: new Date().toISOString()
            }).eq('id', packageId);
            if (error) {
                console.error('Durum güncellenirken hata:', error);
                throw error;
            }
            console.log('✅ Sipariş durumu başarıyla güncellendi');
            onRefresh();
        } catch (error) {
            console.error('Durum güncellenirken hata:', error);
            alert('Durum güncellenemedi! Lütfen veritabanı trigger\'ını kontrol edin.');
        } finally{
            setLoading(null);
        }
    }, [
        onRefresh
    ]);
    const formatTime = (dateString)=>{
        if (!dateString) return '-';
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return '-';
            return date.toLocaleTimeString('tr-TR', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Istanbul'
            });
        } catch  {
            return '-';
        }
    };
    const getStatusText = (status)=>{
        switch(status){
            case 'new_order':
                return 'Yeni Sipariş';
            case 'getting_ready':
                return 'Hazırlanıyor';
            case 'ready':
                return 'Hazır';
            case 'assigned':
                return 'Kurye Atandı';
            case 'picking_up':
                return 'Kurye Alıyor';
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
    const getStatusBadgeClassDynamic = (status)=>{
        switch(status){
            case 'ready':
                return 'bg-teal-900/50 text-teal-300';
            case 'assigned':
                return 'bg-purple-900/50 text-purple-300';
            case 'picking_up':
                return 'bg-orange-900/50 text-orange-300';
            case 'on_the_way':
                return 'bg-yellow-900/50 text-yellow-300';
            default:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$statusHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStatusBadgeClass"])(status);
        }
    };
    const OrderCard = ({ pkg, showButton, buttonText, buttonAction })=>{
        // İptal edilebilir mi kontrolü
        const canCancel = [
            'new_order',
            'getting_ready',
            'ready',
            'assigned',
            'picking_up'
        ].includes(pkg.status);
        // 🔔 Gecikmiş sipariş kontrolü
        const isDelayed = isPackageDelayed(pkg.id);
        const delayedMinutes = isDelayed ? getDelayedMinutes(pkg) : 0;
        const isWebOrder = pkg.platform === 'web';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopRestaurantAlert"])();
                setSelectedPackage(pkg);
            },
            className: `relative p-4 rounded-lg border cursor-pointer ${isDelayed ? darkMode ? 'bg-red-900/30 border-red-700 animate-pulse' : 'bg-red-50 border-red-300 animate-pulse' : isWebOrder ? darkMode ? 'bg-amber-900/20 border-yellow-500/30' : 'bg-yellow-500/10 border-yellow-500/30' : darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} shadow-sm hover:shadow-md transition-shadow ${isDelayed ? 'ring-2 ring-red-500/50' : ''}`,
            children: [
                isDelayed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-3 p-2 rounded-lg ${darkMode ? 'bg-red-800/50 border border-red-700' : 'bg-red-100 border border-red-300'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-xs font-bold ${darkMode ? 'text-red-300' : 'text-red-700'} flex items-center gap-1`,
                            children: [
                                "⏰ ",
                                delayedMinutes,
                                " dakikadır bekliyor!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-xs ${darkMode ? 'text-red-400' : 'text-red-600'} mt-1`,
                            children: "Lütfen hazırlık durumunu güncelleyin!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-3 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: `font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: pkg.customer_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 212,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                    children: pkg.customer_phone
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 215,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 211,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 justify-end shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs px-2 py-1 rounded ${getStatusBadgeClassDynamic(pkg.status)}`,
                                    children: getStatusText(pkg.status)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 220,
                                    columnNumber: 11
                                }, this),
                                isWebOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 text-xs font-bold bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded-md",
                                    children: "WEB"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 219,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 210,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-xs mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium mb-1",
                            children: [
                                "📦 ",
                                pkg.content
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 233,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs opacity-75",
                            children: [
                                "📍 ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$formatDeliveryAddress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDeliveryAddress"])(pkg.delivery_address).address?.substring(0, 50),
                                "..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 234,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 232,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mt-3 pt-3 border-t border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`,
                                    children: [
                                        "₺",
                                        pkg.amount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 240,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs ${darkMode ? 'text-slate-500' : 'text-gray-400'}`,
                                    children: formatTime(pkg.created_at)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 243,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 239,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                showButton && buttonAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        buttonAction();
                                    },
                                    disabled: loading === pkg.id,
                                    className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${darkMode ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'} disabled:opacity-50 disabled:cursor-not-allowed`,
                                    children: loading === pkg.id ? '⏳' : buttonText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                canCancel && restaurantId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        console.log('🔴 İptal butonuna tıklandı:', {
                                            pkgId: pkg.id,
                                            pkgOrderNumber: pkg.order_number,
                                            restaurantId,
                                            fullPackage: pkg
                                        });
                                        setCancelPackage(pkg);
                                    },
                                    className: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors",
                                    title: "Siparişi İptal Et",
                                    children: "❌"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                !canCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: true,
                                    className: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-600 text-gray-400 cursor-not-allowed",
                                    title: "Kurye yola çıktığı için iptal edemezsiniz",
                                    children: "🔒"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 248,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 238,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
            lineNumber: 175,
            columnNumber: 5
        }, this);
    };
    const Column = ({ title, count, icon, color, orders, showButton, buttonText, buttonAction })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-gray-50 border-gray-200'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 border-b ${darkMode ? 'border-slate-800' : 'border-gray-200'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `font-bold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2.5 py-0.5 rounded-full text-xs font-bold ${color}`,
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 326,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-3 max-h-[60vh] lg:max-h-[calc(100vh-300px)] overflow-y-auto",
                    children: orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center py-12 ${darkMode ? 'text-slate-500' : 'text-gray-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl mb-2",
                                children: "📭"
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Sipariş yok"
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this) : orders.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderCard, {
                            pkg: pkg,
                            showButton: showButton,
                            buttonText: buttonText,
                            buttonAction: buttonAction ? ()=>buttonAction(pkg) : undefined
                        }, pkg.id, false, {
                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 341,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
            lineNumber: 320,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            cancelPackage && restaurantId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$CancelOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                package: cancelPackage,
                restaurantId: restaurantId,
                onClose: ()=>setCancelPackage(null),
                onSuccess: ()=>{
                    onRefresh();
                    setCancelPackage(null);
                },
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this),
            updateAmountPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$UpdateAmountModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                packageId: updateAmountPackage.id,
                currentAmount: updateAmountPackage.amount,
                packageStatus: updateAmountPackage.status,
                orderNumber: updateAmountPackage.order_number,
                onClose: ()=>setUpdateAmountPackage(null),
                onSuccess: ()=>{
                    onRefresh();
                // Başarı mesajı göster (opsiyonel)
                },
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                lineNumber: 380,
                columnNumber: 9
            }, this),
            selectedPackage && (()=>{
                const pkg = detailPackage || selectedPackage;
                const orderItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$orderItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeOrderItems"])(pkg.items);
                const { address: displayAddress, tarif: addressTarif } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$formatDeliveryAddress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDeliveryAddress"])(pkg.delivery_address);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4",
                    onClick: ()=>setSelectedPackage(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`,
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex justify-between items-center mb-4 sticky top-0 pb-4 border-b z-10 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                        children: "📦 Sipariş Detayları"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedPackage(null),
                                        className: `text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`,
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-lg font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`,
                                                        children: pkg.order_number || '......'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, this),
                                                    pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-sm py-1 px-3 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            restaurantName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                children: [
                                                    "🏪 ",
                                                    restaurantName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                    children: "Durum:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1.5 rounded-full text-sm font-semibold ${pkg.status === 'cancelled' ? 'bg-red-900/50 text-red-300' : pkg.status === 'new_order' ? 'bg-blue-900/50 text-blue-300' : pkg.status === 'getting_ready' ? 'bg-cyan-900/50 text-cyan-300' : pkg.status === 'ready' ? 'bg-teal-900/50 text-teal-300' : pkg.status === 'assigned' ? 'bg-purple-900/50 text-purple-300' : pkg.status === 'picking_up' ? 'bg-orange-900/50 text-orange-300' : pkg.status === 'on_the_way' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-green-900/50 text-green-300'}`,
                                                    children: getStatusText(pkg.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg border ${darkMode ? 'bg-[#0f172a] border-[#475569]' : 'bg-gray-800 border-gray-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`,
                                                children: "🛒 Sipariş İçeriği"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this),
                                            detailLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-sm py-4 text-center ${darkMode ? 'text-slate-400' : 'text-gray-400'}`,
                                                children: "Ürünler yükleniyor..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 468,
                                                columnNumber: 19
                                            }, this) : orderItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm italic ${darkMode ? 'text-slate-400' : 'text-gray-400'}`,
                                                children: "Ürün bilgisi bulunamadı"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 472,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: orderItems.map((item, index)=>{
                                                    const lineTotal = item.quantity * item.price;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `pb-4 ${index < orderItems.length - 1 ? `border-b ${darkMode ? 'border-slate-700' : 'border-gray-600'}` : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `font-bold ${darkMode ? 'text-white' : 'text-gray-100'}`,
                                                                                children: item.product_name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                                lineNumber: 486,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`,
                                                                                children: [
                                                                                    item.quantity,
                                                                                    " adet × ",
                                                                                    formatPrice(item.price)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                                lineNumber: 489,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `font-bold shrink-0 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`,
                                                                        children: formatPrice(lineTotal)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 27
                                                            }, this),
                                                            item.selected_options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: `mt-2 space-y-0.5 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-400'}`,
                                                                children: item.selected_options.map((opt, optIndex)=>{
                                                                    const priceDiff = Number(opt.price_diff ?? 0);
                                                                    const priceSuffix = priceDiff !== 0 ? ` (${priceDiff > 0 ? '+' : ''}${formatPrice(priceDiff)})` : '';
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: [
                                                                            "– ",
                                                                            opt.group_name || 'Opsiyon',
                                                                            ": ",
                                                                            opt.option_name,
                                                                            priceSuffix
                                                                        ]
                                                                    }, `${opt.option_id || opt.option_name}-${optIndex}`, true, {
                                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 35
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 29
                                                            }, this),
                                                            item.item_note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `mt-2 text-xs italic ${darkMode ? 'text-slate-300' : 'text-gray-300'}`,
                                                                children: [
                                                                    "📝 ",
                                                                    item.item_note
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, `${item.product_name}-${index}`, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg space-y-3 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "Müşteri Bilgileri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 526,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                        children: "Ad Soyad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 528,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "👤 ",
                                                            pkg.customer_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 527,
                                                columnNumber: 17
                                            }, this),
                                            pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                        children: "Telefon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "📞 ",
                                                            pkg.customer_phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 532,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                        children: "Teslimat Adresi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "📍 ",
                                                            displayAddress
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                        children: "Adres Tarifi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 19
                                                    }, this),
                                                    addressTarif ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `italic ${darkMode ? 'text-orange-300' : 'text-orange-700'}`,
                                                        children: [
                                                            "🧭 ",
                                                            addressTarif
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm italic ${darkMode ? 'text-slate-500' : 'text-gray-400'}`,
                                                        children: "Tarif girilmemiş"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 541,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "Tutar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, this),
                                                    ![
                                                        'on_the_way',
                                                        'delivered',
                                                        'cancelled'
                                                    ].includes(pkg.status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setUpdateAmountPackage(pkg);
                                                            setSelectedPackage(null);
                                                        },
                                                        className: `text-xs px-3 py-1 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`,
                                                        children: "✏️ Güncelle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    pkg.subtotal != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                                children: "Ara Toplam"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 574,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: darkMode ? 'text-white' : 'text-gray-900',
                                                                children: formatPrice(Number(pkg.subtotal))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 575,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 21
                                                    }, this),
                                                    pkg.delivery_fee != null && Number(pkg.delivery_fee) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                                children: "Teslimat"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: darkMode ? 'text-white' : 'text-gray-900',
                                                                children: formatPrice(Number(pkg.delivery_fee))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex justify-between pt-2 border-t ${darkMode ? 'border-slate-700' : 'border-gray-200'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                                                children: "Genel Toplam"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold text-xl ${darkMode ? 'text-orange-400' : 'text-orange-600'}`,
                                                                children: formatPrice(Number(pkg.amount))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                'on_the_way',
                                                'delivered',
                                                'cancelled'
                                            ].includes(pkg.status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs mt-2 ${darkMode ? 'text-slate-500' : 'text-gray-500'}`,
                                                children: "⚠️ Tutar artık değiştirilemez"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, this),
                                    pkg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                children: "Paket İçeriği"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: darkMode ? 'text-orange-200' : 'text-orange-700',
                                                children: [
                                                    "📝 ",
                                                    pkg.content
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 602,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                    children: "Ödeme Yöntemi:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1 rounded text-sm font-medium ${pkg.payment_method === 'cash' ? 'bg-green-900/50 text-green-300' : pkg.payment_method === 'iban' ? 'bg-purple-900/50 text-purple-300' : 'bg-orange-900/50 text-orange-300'}`,
                                                    children: pkg.payment_method === 'cash' ? '💵 Nakit' : pkg.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    pkg.courier_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                children: "Atanan Kurye"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: darkMode ? 'text-white' : 'text-gray-900',
                                                children: [
                                                    "🚴 ",
                                                    couriers.find((c)=>c.id === pkg.courier_id)?.full_name || 'Bilinmeyen'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 626,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 624,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-lg space-y-2 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "Zaman Bilgileri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 632,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "Oluşturulma:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "🕐 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.created_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 633,
                                                columnNumber: 17
                                            }, this),
                                            pkg.getting_ready_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "Hazırlanmaya Başlandı:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "🕐 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.getting_ready_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 638,
                                                columnNumber: 19
                                            }, this),
                                            pkg.ready_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "Hazır Oldu:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "🕐 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.ready_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 648,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 646,
                                                columnNumber: 19
                                            }, this),
                                            pkg.assigned_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "Kuryeye Atandı:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "🕐 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.assigned_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 652,
                                                columnNumber: 19
                                            }, this),
                                            pkg.picked_up_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "Alındı:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "🕐 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.picked_up_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 658,
                                                columnNumber: 19
                                            }, this),
                                            pkg.delivered_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "Teslim Edildi:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-white' : 'text-gray-900',
                                                        children: [
                                                            "🕐 ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTurkishTime"])(pkg.delivered_at)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                                lineNumber: 664,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this);
            })(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                        title: "Yeni Siparişler",
                        count: newOrders.length,
                        icon: "🔔",
                        color: darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700',
                        orders: newOrders,
                        showButton: true,
                        buttonText: "Hazırla",
                        buttonAction: (pkg)=>handleStatusChange(pkg.id, 'getting_ready')
                    }, void 0, false, {
                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                        lineNumber: 678,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                        title: "Hazırlanan",
                        count: gettingReady.length,
                        icon: "👨‍🍳",
                        color: darkMode ? 'bg-cyan-900/50 text-cyan-300' : 'bg-cyan-100 text-cyan-700',
                        orders: gettingReady,
                        showButton: true,
                        buttonText: "Hazır",
                        buttonAction: (pkg)=>handleStatusChange(pkg.id, 'ready')
                    }, void 0, false, {
                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                        lineNumber: 690,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                        title: "Hazır",
                        count: ready.length,
                        icon: "✅",
                        color: darkMode ? 'bg-teal-900/50 text-teal-300' : 'bg-teal-100 text-teal-700',
                        orders: ready,
                        showButton: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                        lineNumber: 702,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/restoran/components/KanbanBoard.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/restoran/components/NewOrderModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewOrderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$RestoranProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/RestoranProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$formatDeliveryAddress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/formatDeliveryAddress.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// ─── Yardımcı: Adres Birleştir ────────────────────────────────────────────────
function buildAddress(c) {
    if (c.address) return c.address;
    if (c.district || c.neighborhood || c.street_address || c.floor || c.door_number) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$formatDeliveryAddress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDeliveryAddress"])({
            district: c.district,
            neighborhood: c.neighborhood,
            street_address: c.street_address,
            floor: c.floor,
            door_number: c.door_number
        });
    }
    return '';
}
function NewCustomerModal({ darkMode, onClose, onSaved, restaurantId, prefillName }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        full_name: prefillName || '',
        phone: '',
        address: ''
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSave = async (e)=>{
        e.preventDefault();
        if (!form.full_name.trim() || !form.phone.trim()) {
            setErr('İsim ve telefon zorunludur');
            return;
        }
        setSaving(true);
        setErr('');
        try {
            // INSERT — restaurant_id KESİNİKLLE zorunlu
            if (!restaurantId) {
                setErr('Restoran kimliği bulunamadı. Lütfen tekrar giriş yapın.');
                return;
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('customers').insert([
                {
                    full_name: form.full_name.trim(),
                    name: form.full_name.trim().split(' ')[0],
                    surname: form.full_name.trim().split(' ').slice(1).join(' ') || '',
                    phone: form.phone.trim(),
                    address: form.address.trim(),
                    restaurant_id: restaurantId
                }
            ]).select('id, full_name, phone, address, restaurant_id').single();
            if (error) throw error;
            onSaved(data);
        } catch (e) {
            const msg = e.message || '';
            if (msg.includes('customers_phone_key') || msg.includes('customers_phone_restaurant_unique') || msg.includes('duplicate key')) {
                setErr('Bu telefon numarası zaten kayıtlı. Farklı bir numara girin.');
            } else {
                setErr(msg || 'Kayıt hatası');
            }
        } finally{
            setSaving(false);
        }
    };
    const bg = darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-orange-500' : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-md rounded-2xl shadow-2xl ${darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-gray-200'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-between px-6 py-4 border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                            children: "👤 Yeni Müşteri Ekle"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: `text-2xl leading-none ${darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSave,
                    className: "p-6 space-y-4",
                    children: [
                        err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2",
                            children: err
                        }, void 0, false, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 114,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                    children: [
                                        "İsim Soyisim ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    type: "text",
                                    value: form.full_name,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                full_name: e.target.value
                                            })),
                                    placeholder: "Ahmet Yılmaz",
                                    className: `w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${bg}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                    children: [
                                        "Telefon ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 122
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    value: form.phone,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                phone: e.target.value
                                            })),
                                    placeholder: "05XX XXX XX XX",
                                    className: `w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${bg}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                    children: "Adres"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 2,
                                    value: form.address,
                                    onChange: (e)=>setForm((p)=>({
                                                ...p,
                                                address: e.target.value
                                            })),
                                    placeholder: "Atatürk Mah. İnönü Cad. No:12",
                                    className: `w-full px-3 py-2.5 rounded-lg border outline-none transition-colors resize-none ${bg}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: `flex-1 py-2.5 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                    children: "İptal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: saving,
                                    className: "flex-1 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50",
                                    children: saving ? '⏳ Kaydediliyor...' : '✅ Kaydet'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function NewOrderModal({ onClose, onSuccess, restaurantId, darkMode }) {
    // --- CRM State ---
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showNewCustomerModal, setShowNewCustomerModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { cidCustomer, setCidCustomer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$RestoranProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRestoran"])();
    // --- Form State ---
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        customerName: cidCustomer?.full_name || '',
        customerPhone: cidCustomer?.phone || '',
        deliveryAddress: cidCustomer?.address || '',
        packageAmount: '',
        content: ''
    });
    // CID ile müşteri geldiyse direkt seçili yap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cidCustomer) {
            setFormData({
                customerName: cidCustomer.full_name,
                customerPhone: cidCustomer.phone,
                deliveryAddress: cidCustomer.address,
                packageAmount: '',
                content: ''
            });
            setSearchQuery(cidCustomer.full_name);
        }
    }, [
        cidCustomer
    ]);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ── Dropdown dışı tıklama ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return ()=>document.removeEventListener('mousedown', handler);
    }, []);
    // ── Müşteri Arama (debounced) ──
    const searchCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (q)=>{
        if (!q.trim() || q.trim().length < 2) {
            setSearchResults([]);
            setShowDropdown(false);
            return;
        }
        setIsSearching(true);
        try {
            // KESİN İZOLASYON: sadece bu restoranin müşterileri arasında ara
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('id, full_name, phone, address, restaurant_id, district, neighborhood, street_address, floor, door_number').eq('restaurant_id', restaurantId) // başka restoranin verisi gelmesin
            .not('restaurant_id', 'is', null) // null kayıtları dışla
            .or(`full_name.ilike.%${q}%,phone.ilike.%${q}%,address.ilike.%${q}%`).limit(6);
            if (error) {
                // Schema cache hatası veya başka hata → boş sonuç, ASLA filtresiz çekme
                console.warn('searchCustomers error:', error.message);
                setSearchResults([]);
                setShowDropdown(false);
                return;
            }
            setSearchResults(data || []);
            setShowDropdown(true);
        } catch  {} finally{
            setIsSearching(false);
        }
    }, [
        restaurantId
    ]);
    const handleSearchChange = (e)=>{
        const val = e.target.value;
        setSearchQuery(val);
        setSelectedCustomer(null);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(()=>searchCustomers(val), 280);
    };
    // ── Müşteri Seç ──
    const selectCustomer = (c)=>{
        setSelectedCustomer(c);
        setSearchQuery(c.full_name);
        setShowDropdown(false);
        setFormData((prev)=>({
                ...prev,
                customerName: c.full_name,
                customerPhone: c.phone || '',
                deliveryAddress: buildAddress(c)
            }));
    };
    // ── Yeni Müşteri Kaydedildi ──
    const handleNewCustomerSaved = (c)=>{
        setShowNewCustomerModal(false);
        selectCustomer(c);
    };
    // ── CRM Seçimini Temizle ──
    const clearCustomer = ()=>{
        setSelectedCustomer(null);
        setSearchQuery('');
        setCidCustomer(null);
        setFormData((prev)=>({
                ...prev,
                customerName: '',
                customerPhone: '',
                deliveryAddress: ''
            }));
    };
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!paymentMethod) {
            setError('Lütfen ödeme yöntemi seçin');
            return;
        }
        setIsSubmitting(true);
        setError('');
        try {
            // 1. SNAPSHOT: Restoranın güncel package_fee'sini al
            const { data: restaurantData, error: restaurantError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('package_fee').eq('id', restaurantId).single();
            if (restaurantError) throw restaurantError;
            const appliedPrice = restaurantData?.package_fee || 100;
            // 2. INSERT: applied_price ile birlikte kaydet
            const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').insert([
                {
                    customer_name: formData.customerName,
                    customer_phone: formData.customerPhone,
                    delivery_address: formData.deliveryAddress,
                    amount: parseFloat(formData.packageAmount),
                    content: formData.content,
                    status: 'new_order',
                    payment_method: paymentMethod,
                    restaurant_id: restaurantId,
                    applied_price: appliedPrice,
                    created_at: new Date().toISOString()
                }
            ]);
            if (insertError) throw insertError;
            onSuccess();
            onClose();
        } catch (err) {
            setError(err.message || 'Sipariş eklenemedi');
        } finally{
            setIsSubmitting(false);
        }
    };
    // ── Style Helpers ──
    const input = `w-full px-3 py-2.5 rounded-lg border outline-none transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-orange-500' : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'}`;
    const label = `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto ${darkMode ? 'bg-slate-900' : 'bg-white'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center justify-between p-6 border-b sticky top-0 z-10 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-gray-200 bg-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "🍽️ Yeni Sipariş"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                            children: "Müşteri ara veya bilgileri manuel gir"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCidCustomer(null);
                                        onClose();
                                    },
                                    className: `text-2xl ${darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "p-6 space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-xl border p-4 space-y-4 ${darkMode ? 'border-orange-500/30 bg-orange-500/5' : 'border-orange-200 bg-orange-50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500 text-lg",
                                                    children: "👤"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-700'}`,
                                                    children: "Müşteri Seçimi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 17
                                                }, this),
                                                selectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto flex items-center gap-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-2 py-0.5",
                                                    children: "✓ Kayıtlı müşteri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: searchRef,
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm",
                                                                    children: "🔍"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: searchQuery,
                                                                    onChange: handleSearchChange,
                                                                    onFocus: ()=>searchResults.length > 0 && setShowDropdown(true),
                                                                    placeholder: "İsim, telefon veya adres ara...",
                                                                    className: `w-full pl-9 pr-3 py-2.5 rounded-lg border outline-none transition-colors ${selectedCustomer ? darkMode ? 'bg-green-900/20 border-green-600 text-white' : 'bg-green-50 border-green-400 text-gray-900' : darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-orange-500' : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'}`,
                                                                    disabled: isSubmitting
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 21
                                                                }, this),
                                                                isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin inline-block"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this),
                                                        selectedCustomer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: clearCustomer,
                                                            className: "px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors bg-red-500/10 border-red-500/40 text-red-400 hover:bg-red-500/20",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowNewCustomerModal(true),
                                                            className: "whitespace-nowrap px-3 py-2.5 rounded-lg border text-sm font-semibold transition-colors bg-orange-600 hover:bg-orange-700 text-white border-orange-600",
                                                            children: "+ Yeni"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute left-0 right-0 top-full mt-1 rounded-xl border shadow-2xl z-30 overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`,
                                                    children: searchResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-3 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                children: "Müşteri bulunamadı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setShowDropdown(false);
                                                                    setShowNewCustomerModal(true);
                                                                },
                                                                className: "mt-2 text-sm text-orange-500 hover:text-orange-400 font-medium",
                                                                children: "+ Yeni müşteri olarak ekle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            searchResults.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>selectCustomer(c),
                                                                    className: `w-full text-left px-4 py-3 transition-colors border-b last:border-0 ${darkMode ? 'border-slate-700 hover:bg-slate-700' : 'border-gray-100 hover:bg-orange-50'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                                                                    children: c.full_name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                                    lineNumber: 450,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                                    children: c.phone
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                                    lineNumber: 453,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                            lineNumber: 449,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        buildAddress(c) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: `text-xs mt-0.5 truncate ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                            children: [
                                                                                "📍 ",
                                                                                buildAddress(c)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                            lineNumber: 456,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, c.id, true, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setShowDropdown(false);
                                                                    setShowNewCustomerModal(true);
                                                                },
                                                                className: `w-full px-4 py-2.5 text-sm text-center font-medium text-orange-500 hover:text-orange-400 transition-colors ${darkMode ? 'bg-slate-800/50' : 'bg-gray-50'}`,
                                                                children: "+ Yeni kayıtlı müşteri ekle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: label,
                                                            children: [
                                                                "Müşteri Adı ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-400",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 56
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "customerName",
                                                            value: formData.customerName,
                                                            onChange: handleChange,
                                                            required: true,
                                                            placeholder: "Ahmet Yılmaz",
                                                            className: input,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: label,
                                                            children: [
                                                                "Telefon ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-400",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            name: "customerPhone",
                                                            value: formData.customerPhone,
                                                            onChange: handleChange,
                                                            required: true,
                                                            placeholder: "05XX XXX XX XX",
                                                            className: input,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 476,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: label,
                                                    children: [
                                                        "Teslimat Adresi ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "deliveryAddress",
                                                    value: formData.deliveryAddress,
                                                    onChange: handleChange,
                                                    required: true,
                                                    rows: 2,
                                                    placeholder: "Atatürk Mah. İnönü Cad. No:123 Kat:3",
                                                    className: `${input} resize-none`,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 506,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-xl border p-4 space-y-4 ${darkMode ? 'border-slate-700' : 'border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: "📦"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                    children: "Sipariş Detayları"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: label,
                                                    children: [
                                                        "Paket İçeriği ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "content",
                                                    value: formData.content,
                                                    onChange: handleChange,
                                                    required: true,
                                                    rows: 2,
                                                    placeholder: "2x Döner, 1x Ayran, 1x Baklava",
                                                    className: `${input} resize-none`,
                                                    disabled: isSubmitting
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: label,
                                                            children: [
                                                                "Tutar (₺) ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-400",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 54
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "packageAmount",
                                                            value: formData.packageAmount,
                                                            onChange: handleChange,
                                                            required: true,
                                                            min: "0",
                                                            step: "0.01",
                                                            placeholder: "0.00",
                                                            className: input,
                                                            disabled: isSubmitting
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: label,
                                                            children: [
                                                                "Ödeme Yöntemi ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-400",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 58
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-1.5 h-[42px]",
                                                            children: [
                                                                [
                                                                    'cash',
                                                                    '💵',
                                                                    'Nakit'
                                                                ],
                                                                [
                                                                    'card',
                                                                    '💳',
                                                                    'Kart'
                                                                ],
                                                                [
                                                                    'iban',
                                                                    '🏦',
                                                                    'IBAN'
                                                                ]
                                                            ].map(([val, icon, lbl])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setPaymentMethod(val),
                                                                    disabled: isSubmitting,
                                                                    className: `h-full rounded-lg border text-xs font-semibold transition-colors ${paymentMethod === val ? val === 'cash' ? 'bg-green-600 border-green-600 text-white' : val === 'card' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-purple-600 border-purple-600 text-white' : darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'} disabled:opacity-50`,
                                                                    children: [
                                                                        icon,
                                                                        " ",
                                                                        lbl
                                                                    ]
                                                                }, val, true, {
                                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                                    lineNumber: 564,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-500/20 border border-red-500/50 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-400 text-sm",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                        lineNumber: 590,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClose,
                                            disabled: isSubmitting,
                                            className: `flex-1 py-3 rounded-xl font-semibold transition-colors ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} disabled:opacity-50`,
                                            children: "İptal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "flex-2 flex-grow-[2] py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors disabled:opacity-50",
                                            children: isSubmitting ? '⏳ Kaydediliyor...' : '🚀 Sipariş Oluştur'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                            lineNumber: 606,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            showNewCustomerModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewCustomerModal, {
                darkMode: darkMode,
                restaurantId: restaurantId,
                prefillName: searchQuery,
                onClose: ()=>setShowNewCustomerModal(false),
                onSaved: handleNewCustomerSaved
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/components/NewOrderModal.tsx",
                lineNumber: 620,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/PullToRefresh.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PullToRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * @file src/components/PullToRefresh.tsx
 * @description Pull-to-Refresh wrapper component for mobile UX
 */ 'use client';
;
;
;
function PullToRefresh({ onRefresh, children, darkMode = false }) {
    const [pullDistance, setPullDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canPull, setCanPull] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const PULL_THRESHOLD = 80 // Minimum pull distance to trigger refresh
    ;
    const MAX_PULL = 120 // Maximum visual pull distance
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        const handleTouchStart = (e)=>{
            // Sadece sayfa en üstteyken pull-to-refresh aktif
            const scrollTop = container.scrollTop;
            if (scrollTop === 0) {
                touchStartY.current = e.touches[0].clientY;
                setCanPull(true);
            } else {
                setCanPull(false);
            }
        };
        const handleTouchMove = (e)=>{
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
        };
        const handleTouchEnd = async ()=>{
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
        };
        container.addEventListener('touchstart', handleTouchStart, {
            passive: true
        });
        container.addEventListener('touchmove', handleTouchMove, {
            passive: false
        });
        container.addEventListener('touchend', handleTouchEnd, {
            passive: true
        });
        return ()=>{
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [
        canPull,
        pullDistance,
        isRefreshing,
        onRefresh
    ]);
    const spinnerOpacity = Math.min(pullDistance / PULL_THRESHOLD, 1);
    const spinnerRotation = pullDistance / PULL_THRESHOLD * 360;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            transform: `translateY(${pullDistance}px)`,
            transition: isRefreshing || pullDistance === 0 ? 'transform 0.3s ease-out' : 'none'
        },
        className: "jsx-ff693afc4b22039f" + " " + "relative h-screen overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: `${PULL_THRESHOLD}px`,
                    transform: `translateY(-${PULL_THRESHOLD - pullDistance}px)`,
                    opacity: spinnerOpacity,
                    transition: pullDistance === 0 ? 'opacity 0.3s ease-out' : 'none'
                },
                className: "jsx-ff693afc4b22039f" + " " + "absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ff693afc4b22039f" + " " + "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        pullDistance >= PULL_THRESHOLD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/src/hooks/useRestaurantReminder.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRestaurantReminder",
    ()=>useRestaurantReminder
]);
/**
 * @file src/hooks/useRestaurantReminder.ts
 * @description Restoran hatırlatıcı sistemi - Siparişler 10 dakikadan fazla beklediyse uyarı ver
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DEFAULT_CONFIG = {
    warningThresholdMinutes: 10,
    soundIntervalMinutes: 2
};
function useRestaurantReminder(packages, config = {}) {
    const finalConfig = {
        ...DEFAULT_CONFIG,
        ...config
    };
    const [delayedPackages, setDelayedPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSoundPlayedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const checkIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Audio'yu initialize et
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return ()=>{
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);
    // Paketleri kontrol et
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDelayedPackages = ()=>{
            const now = Date.now();
            const delayed = new Set();
            console.log('🔍 Hatırlatıcı kontrolü başladı:', {
                packageCount: packages.length,
                threshold: finalConfig.warningThresholdMinutes
            });
            packages.forEach((pkg)=>{
                // Sadece 'new_order' ve 'getting_ready' statüsündeki paketleri kontrol et
                if (pkg.status !== 'new_order' && pkg.status !== 'getting_ready') {
                    return;
                }
                const createdAt = new Date(pkg.created_at).getTime();
                const elapsedMinutes = (now - createdAt) / (1000 * 60);
                console.log('📦 Paket kontrol ediliyor:', {
                    id: pkg.id,
                    orderNumber: pkg.order_number,
                    status: pkg.status,
                    createdAt: pkg.created_at,
                    elapsedMinutes: elapsedMinutes.toFixed(2),
                    isDelayed: elapsedMinutes >= finalConfig.warningThresholdMinutes
                });
                // Eşik değerini aştıysa delayed listesine ekle
                if (elapsedMinutes >= finalConfig.warningThresholdMinutes) {
                    delayed.add(pkg.id);
                    console.log('⚠️ GECİKMİŞ PAKET BULUNDU:', {
                        id: pkg.id,
                        orderNumber: pkg.order_number,
                        elapsedMinutes: elapsedMinutes.toFixed(2)
                    });
                }
            });
            console.log('✅ Kontrol tamamlandı:', {
                delayedCount: delayed.size,
                delayedPackages: Array.from(delayed)
            });
            setDelayedPackages(delayed);
            // Eğer gecikmiş paket varsa ve ses çalma zamanı geldiyse
            if (delayed.size > 0) {
                const timeSinceLastSound = (now - lastSoundPlayedRef.current) / (1000 * 60);
                console.log('🔊 Ses kontrolü:', {
                    timeSinceLastSound: timeSinceLastSound.toFixed(2),
                    soundInterval: finalConfig.soundIntervalMinutes,
                    shouldPlaySound: timeSinceLastSound >= finalConfig.soundIntervalMinutes
                });
                if (timeSinceLastSound >= finalConfig.soundIntervalMinutes) {
                    console.log('🔊 SES ÇALINIYOR!');
                    playReminderSound();
                    lastSoundPlayedRef.current = now;
                }
            }
        };
        // İlk kontrolü hemen yap
        checkDelayedPackages();
        // Her 60 saniyede bir kontrol et
        checkIntervalRef.current = setInterval(checkDelayedPackages, 60 * 1000);
        return ()=>{
            if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current);
            }
        };
    }, [
        packages,
        finalConfig.warningThresholdMinutes,
        finalConfig.soundIntervalMinutes
    ]);
    const playReminderSound = ()=>{
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((error)=>{
                console.warn('⚠️ Hatırlatıcı sesi çalınamadı:', error);
            });
        }
    };
    const isPackageDelayed = (packageId)=>{
        return delayedPackages.has(packageId);
    };
    const getDelayedMinutes = (pkg)=>{
        const now = Date.now();
        const createdAt = new Date(pkg.created_at).getTime();
        return Math.floor((now - createdAt) / (1000 * 60));
    };
    return {
        delayedPackages,
        isPackageDelayed,
        getDelayedMinutes,
        hasDelayedPackages: delayedPackages.size > 0
    };
}
}),
"[project]/src/app/restoran/components/RestaurantDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RestaurantDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$KanbanBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/components/KanbanBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$NewOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/components/NewOrderModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PullToRefresh$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PullToRefresh.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/platformUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantReminder$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRestaurantReminder.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRestaurantRealtimeNotifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$RestoranProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/RestoranProvider.tsx [app-ssr] (ecmascript)");
'use client';
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
function RestaurantDashboard({ restaurantId, darkMode, setDarkMode }) {
    const [restaurant, setRestaurant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deliveredPackages, setDeliveredPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [couriers, setCouriers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { showNewOrderModal, setShowNewOrderModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$RestoranProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRestoran"])();
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('active');
    const [displayLimit, setDisplayLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50) // 🎯 Teslim edilenler listesi gösterim limiti
    ;
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0) // 🎯 Teslim edilenler listesi sayfa numarası (0'dan başlar)
    ;
    // Bugünün tarihini YYYY-MM-DD formatında al (varsayılan filtre)
    const getTodayString = ()=>{
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    };
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getTodayString);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getTodayString);
    const [cancelledPackages, setCancelledPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const printReceiptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>{});
    // 🎯 Manuel Filtreleme için Temporary State
    const [tempStartDate, setTempStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getTodayString);
    const [tempEndDate, setTempEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getTodayString);
    // Günlük finansal özet state'leri
    const [todayStats, setTodayStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        packageCount: 0,
        chargeableCount: 0,
        unitPackageFee: 0,
        totalPackageCost: 0,
        totalRevenue: 0,
        totalCommission: 0,
        netRevenue: 0,
        isLoading: true
    });
    // 🔔 Akıllı Hatırlatıcı Sistemi
    const { isPackageDelayed, getDelayedMinutes, hasDelayedPackages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantReminder$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRestaurantReminder"])(packages, {
        warningThresholdMinutes: 10,
        soundIntervalMinutes: 2 // Her 2 dakikada bir ses
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            await fetchRestaurant();
            await fetchTodayStats();
        };
        loadData();
        fetchPackages();
        fetchCouriers();
    }, [
        restaurantId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!restaurantId) return;
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel('public:packages').on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'packages',
            filter: `restaurant_id=eq.${restaurantId}`
        }, (payload)=>{
            const newOrder = payload.new;
            setPackages((prev)=>{
                if (prev.some((p)=>p.id === newOrder.id)) return prev;
                return [
                    newOrder,
                    ...prev
                ];
            });
            if (newOrder.platform === 'web' && (newOrder.status === 'new_order' || newOrder.status === 'new')) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playRestaurantAlert"])();
            }
            fetchTodayStats();
        }).on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'packages',
            filter: `restaurant_id=eq.${restaurantId}`
        }, (payload)=>{
            const updated = payload.new;
            setPackages((prev)=>prev.map((p)=>p.id === updated.id ? {
                        ...p,
                        ...updated
                    } : p));
            setDeliveredPackages((prev)=>prev.map((p)=>p.id === updated.id ? {
                        ...p,
                        ...updated
                    } : p));
            setCancelledPackages((prev)=>prev.map((p)=>p.id === updated.id ? {
                        ...p,
                        ...updated
                    } : p));
            fetchTodayStats();
        }).on('postgres_changes', {
            event: 'DELETE',
            schema: 'public',
            table: 'packages',
            filter: `restaurant_id=eq.${restaurantId}`
        }, (payload)=>{
            const removedId = payload.old.id;
            setPackages((prev)=>prev.filter((p)=>p.id !== removedId));
            setDeliveredPackages((prev)=>prev.filter((p)=>p.id !== removedId));
            setCancelledPackages((prev)=>prev.filter((p)=>p.id !== removedId));
            fetchTodayStats();
        }).subscribe((status)=>{
            console.log('📡 Restoran Realtime status:', status);
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
        };
    }, [
        restaurantId
    ]);
    // ✅ KRİTİK FIX: Tab değişince, filtre uygulanınca veya sayfa değişince veriyi çek
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!restaurantId) return;
        fetchPackages();
    }, [
        activeTab,
        startDate,
        endDate,
        currentPage
    ]);
    const fetchRestaurant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('id, name, logo_url, package_fee').eq('id', restaurantId).single();
            if (error) throw error;
            setRestaurant(data);
        } catch (error) {
            console.error('Restoran bilgisi alınamadı:', error);
        }
    }, [
        restaurantId
    ]);
    const fetchPackages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // İlk yüklemede loading göster, sonrasında sessiz güncelle
        if (packages.length === 0) {
            setIsLoading(true);
        }
        try {
            if (activeTab === 'active') {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('*').eq('restaurant_id', restaurantId).in('status', [
                    'new_order',
                    'getting_ready',
                    'ready',
                    'assigned',
                    'picking_up',
                    'on_the_way'
                ]).order('created_at', {
                    ascending: false
                });
                if (error) throw error;
                setPackages(data || []);
            } else if (activeTab === 'delivered') {
                // Teslim edilen siparişler - MANUEL FİLTRELEME (sadece startDate/endDate değiştiğinde)
                let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select(`
            *,
            courier:couriers!packages_courier_id_fkey(full_name)
          `).eq('restaurant_id', restaurantId).eq('status', 'delivered').order('delivered_at', {
                    ascending: false
                });
                // ✅ KESİN DÜZELTME: new Date() UTC offset'i bozar.
                // "YYYY-MM-DD" → doğrudan string olarak gönder, Supabase local time olarak işler.
                const effectiveStart = startDate || getTodayString();
                const effectiveEnd = endDate || getTodayString();
                console.log('🔍 [DEBUG] Giden Parametreler (delivered):', {
                    restaurantId,
                    effectiveStart,
                    effectiveEnd,
                    startISO: `${effectiveStart}T00:00:00`,
                    endISO: `${effectiveEnd}T23:59:59`,
                    currentPage,
                    displayLimit
                });
                query = query.gte('delivered_at', `${effectiveStart}T00:00:00`);
                query = query.lte('delivered_at', `${effectiveEnd}T23:59:59`);
                // Sayfalama optimizasyonu - SQL seviyesinde kısıtlama (range)
                const fromOffset = currentPage * displayLimit;
                const toOffset = (currentPage + 1) * displayLimit - 1;
                query = query.range(fromOffset, toOffset);
                const { data, error } = await query;
                console.log('🔍 [DEBUG] Supabase Yanıtı (delivered):', {
                    data,
                    error,
                    count: data?.length
                });
                if (error) throw error;
                setDeliveredPackages(data || []);
            } else if (activeTab === 'cancelled') {
                // İptal edilen siparişler
                let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select(`
            *,
            courier:couriers!packages_courier_id_fkey(full_name)
          `).eq('restaurant_id', restaurantId).eq('status', 'cancelled').order('cancelled_at', {
                    ascending: false
                });
                // ✅ KESİN DÜZELTME: new Date() UTC offset'i bozar.
                const effectiveCancelStart = startDate || getTodayString();
                const effectiveCancelEnd = endDate || getTodayString();
                console.log('🔍 [DEBUG] Giden Parametreler (cancelled):', {
                    restaurantId,
                    effectiveCancelStart,
                    effectiveCancelEnd,
                    startISO: `${effectiveCancelStart}T00:00:00`,
                    endISO: `${effectiveCancelEnd}T23:59:59`
                });
                query = query.gte('cancelled_at', `${effectiveCancelStart}T00:00:00`);
                query = query.lte('cancelled_at', `${effectiveCancelEnd}T23:59:59`);
                const { data, error } = await query;
                console.log('🔍 [DEBUG] Supabase Yanıtı (cancelled):', {
                    data,
                    error,
                    count: data?.length
                });
                if (error) throw error;
                setCancelledPackages(data || []);
            }
        } catch (error) {
            console.error('Siparişler alınamadı:', error);
        } finally{
            if (packages.length === 0) {
                setIsLoading(false);
            }
        }
    }, [
        restaurantId,
        activeTab,
        startDate,
        endDate,
        packages.length,
        displayLimit,
        currentPage
    ]);
    const fetchCouriers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('couriers').select('id, full_name').order('full_name');
            if (error) throw error;
            setCouriers(data || []);
        } catch (error) {
            console.error('Kuryeler alınamadı:', error);
        }
    }, []);
    const fetchTodayStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const todayStart = new Date();
            todayStart.setHours(0, 0, 0, 0);
            const todayEnd = new Date();
            todayEnd.setHours(23, 59, 59, 999);
            const rangeStart = todayStart.getTime();
            const rangeEnd = todayEnd.getTime();
            const fallbackFee = restaurant?.package_fee ?? 0;
            const { data: pkgs, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('packages').select('amount, status, delivered_at, created_at, is_chargeable_cancellation, applied_price, commission_amount').eq('restaurant_id', restaurantId).eq('is_paid_to_restaurant', false).or('status.eq.delivered,and(status.eq.cancelled,is_chargeable_cancellation.eq.true)');
            if (error) throw error;
            let packageCount = 0;
            let totalRevenue = 0;
            let totalCommission = 0;
            let totalPackageCost = 0;
            for (const pkg of pkgs || []){
                let inRange = false;
                if (pkg.status === 'delivered' && pkg.delivered_at) {
                    const t = new Date(pkg.delivered_at).getTime();
                    inRange = t >= rangeStart && t <= rangeEnd;
                } else if (pkg.status === 'cancelled' && pkg.is_chargeable_cancellation && pkg.created_at) {
                    const t = new Date(pkg.created_at).getTime();
                    inRange = t >= rangeStart && t <= rangeEnd;
                }
                if (!inRange) continue;
                packageCount++;
                totalPackageCost += Number(pkg.applied_price ?? fallbackFee);
                if (pkg.status === 'delivered') {
                    totalRevenue += Number(pkg.amount ?? 0);
                    totalCommission += Number(pkg.commission_amount ?? 0);
                }
            }
            const netRevenue = totalRevenue - totalPackageCost - totalCommission;
            setTodayStats({
                packageCount,
                chargeableCount: packageCount,
                unitPackageFee: 0,
                totalPackageCost,
                totalRevenue,
                totalCommission,
                netRevenue,
                isLoading: false
            });
        } catch (error) {
            console.error('Günlük istatistikler alınamadı:', error);
            setTodayStats((prev)=>({
                    ...prev,
                    isLoading: false
                }));
        }
    }, [
        restaurantId,
        restaurant?.package_fee
    ]);
    // Restoran package_fee yüklendiğinde istatistikleri güncel birim ücretle yeniden hesapla
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!restaurantId || restaurant === null) return;
        fetchTodayStats();
    }, [
        restaurant?.package_fee,
        restaurantId,
        fetchTodayStats
    ]);
    const handleNewOrderSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSuccessMessage('✅ Yeni sipariş başarıyla oluşturuldu!');
        setTimeout(()=>setSuccessMessage(''), 3000);
        fetchPackages();
    }, [
        fetchPackages
    ]);
    const handleRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await Promise.all([
            fetchRestaurant(),
            fetchPackages(),
            fetchTodayStats()
        ]);
    }, [
        fetchRestaurant,
        fetchPackages,
        fetchTodayStats
    ]);
    // 🎯 Manuel Filtreleme Fonksiyonları
    const handleApplyFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setStartDate(tempStartDate);
        setEndDate(tempEndDate);
        setCurrentPage(0); // Filtre uygulandığında sayfayı sıfırla
    }, [
        tempStartDate,
        tempEndDate
    ]);
    const handleClearFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTempStartDate('');
        setTempEndDate('');
        setStartDate('');
        setEndDate('');
        setCurrentPage(0); // Filtre temizlendiğinde sayfayı sıfırla
    }, []);
    const printReceipt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((orderData)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const iframe = undefined;
        const doc = undefined;
        // Tarihi formatla
        let formattedDate;
        const restaurantName = undefined;
        const getPaymentMethodLabel = undefined;
        // Ürünleri HTML formatına dönüştür
        const getProductsHtml = undefined;
        const htmlContent = undefined;
    }, [
        restaurant
    ]);
    printReceiptRef.current = printReceipt;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowNewOrderModal(true),
                className: "fixed bottom-6 left-6 p-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-2xl transition-all hover:scale-110 z-[9999] group",
                title: "Yeni Sipariş",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "5",
                                x2: "12",
                                y2: "19"
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "12",
                                x2: "19",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 577,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse",
                        children: "YENİ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PullToRefresh$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onRefresh: handleRefresh,
                darkMode: darkMode,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `min-h-screen py-6 px-4 ${darkMode ? 'bg-slate-950' : 'bg-gray-100'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: `text-4xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                        children: restaurant?.name || 'RESTORAN PANELİ'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 590,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                        children: "Sipariş Yönetim Sistemi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 593,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center gap-2 mt-4 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveTab('active');
                                                    setCurrentPage(0);
                                                },
                                                className: `text-sm px-3 py-2 md:text-base md:px-6 md:py-2 rounded-lg font-semibold transition-all ${activeTab === 'active' ? darkMode ? 'bg-orange-600 text-white' : 'bg-orange-500 text-white' : darkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`,
                                                children: "📦 Aktif Siparişler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 599,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveTab('delivered');
                                                    setCurrentPage(0);
                                                },
                                                className: `text-sm px-3 py-2 md:text-base md:px-6 md:py-2 rounded-lg font-semibold transition-all ${activeTab === 'delivered' ? darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white' : darkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`,
                                                children: "✅ Teslim Edilenler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 613,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveTab('cancelled');
                                                    setCurrentPage(0);
                                                },
                                                className: `text-sm px-3 py-2 md:text-base md:px-6 md:py-2 rounded-lg font-semibold transition-all ${activeTab === 'cancelled' ? darkMode ? 'bg-red-600 text-white' : 'bg-red-500 text-white' : darkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`,
                                                children: "❌ İptal Edilenler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 627,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 598,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 589,
                                columnNumber: 9
                            }, this),
                            successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-400 text-center font-medium",
                                    children: successMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this),
                            activeTab === 'active' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-4 md:p-6 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                                children: "📦 Bugünkü Paket Sayısı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 19
                                                            }, this),
                                                            todayStats.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-7 w-14 bg-slate-700 animate-pulse rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 665,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-2xl font-black ${darkMode ? 'text-blue-400' : 'text-blue-600'}`,
                                                                children: todayStats.packageCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs mt-0.5 ${darkMode ? 'text-slate-500' : 'text-gray-500'}`,
                                                                children: "Teslim edildi + Ücretli iptal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl opacity-20",
                                                        children: "📦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 659,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 656,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-4 md:p-6 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`,
                                                                children: "💸 Paket Masrafı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 19
                                                            }, this),
                                                            todayStats.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-7 w-20 bg-slate-700 animate-pulse rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-2xl font-black ${darkMode ? 'text-orange-400' : 'text-orange-600'}`,
                                                                children: [
                                                                    todayStats.totalPackageCost.toFixed(0),
                                                                    "₺"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs mt-0.5 ${darkMode ? 'text-slate-500' : 'text-gray-500'}`,
                                                                children: [
                                                                    todayStats.packageCount,
                                                                    " paket · applied_price toplamı"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl opacity-20",
                                                        children: "💸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 683,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 680,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-4 md:p-6 rounded-xl border-2 ${darkMode ? 'bg-gradient-to-br from-green-900/30 to-slate-900 border-green-700/50' : 'bg-gradient-to-br from-green-50 to-white border-green-300'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs font-medium mb-1 ${darkMode ? 'text-green-300' : 'text-green-700'}`,
                                                                children: "💰 Bugünkü Hak Ediş"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 19
                                                            }, this),
                                                            todayStats.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-7 w-28 bg-green-700/30 animate-pulse rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-2xl font-black ${darkMode ? 'text-green-400' : 'text-green-600'}`,
                                                                children: [
                                                                    todayStats.netRevenue.toFixed(0),
                                                                    "₺"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs mt-0.5 ${darkMode ? 'text-green-500/70' : 'text-green-600/70'}`,
                                                                children: [
                                                                    "Ciro: ",
                                                                    todayStats.totalRevenue.toFixed(0),
                                                                    "₺ - Masraf: ",
                                                                    todayStats.totalPackageCost.toFixed(0),
                                                                    "₺"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl opacity-30",
                                                        children: "💰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 707,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 704,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            activeTab === 'active' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center py-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 735,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                    lineNumber: 734,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$KanbanBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    packages: packages,
                                    onRefresh: fetchPackages,
                                    darkMode: darkMode,
                                    couriers: couriers,
                                    restaurantId: restaurantId,
                                    restaurantName: restaurant?.name,
                                    isPackageDelayed: isPackageDelayed,
                                    getDelayedMinutes: getDelayedMinutes
                                }, void 0, false, {
                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                    lineNumber: 738,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false),
                            activeTab === 'delivered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 border-b ${darkMode ? 'border-slate-800' : 'border-gray-200'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-[200px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                            children: "Başlangıç Tarihi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: tempStartDate,
                                                            onChange: (e)=>setTempStartDate(e.target.value),
                                                            className: `w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-[200px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                            children: "Bitiş Tarihi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: tempEndDate,
                                                            onChange: (e)=>setTempEndDate(e.target.value),
                                                            className: `w-full px-3 py-2 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-2 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-blue-50 border-blue-200'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-medium mb-0.5 ${darkMode ? 'text-slate-400' : 'text-blue-600'}`,
                                                            children: "Toplam Paket"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 795,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-2xl font-black ${darkMode ? 'text-blue-400' : 'text-blue-700'}`,
                                                            children: deliveredPackages.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleApplyFilter,
                                                            className: `px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`,
                                                            children: "🔍 Filtrele"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleClearFilter,
                                                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`,
                                                            children: "Temizle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 814,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 756,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center py-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 832,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 831,
                                            columnNumber: 17
                                        }, this) : deliveredPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-center py-12 ${darkMode ? 'text-slate-500' : 'text-gray-400'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl mb-2",
                                                    children: "📭"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: "Teslim edilmiş sipariş bulunmuyor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 835,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mb-4 p-4 rounded-xl border flex items-center gap-3 transition-all duration-300 ${darkMode ? 'bg-blue-950/20 border-blue-900/40 text-blue-300 shadow-lg shadow-blue-950/10' : 'bg-blue-50 border-blue-150 text-blue-850 shadow-sm'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl shrink-0",
                                                            children: "💡"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs sm:text-sm font-semibold tracking-wide leading-relaxed",
                                                            children: "Paketlerinizin tamamına ulaşmak için en aşağıdan yön tuşlarını kullanabilirsiniz."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: deliveredPackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-4 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-750' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} transition-colors`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-4 items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-[250px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `text-sm font-bold px-2 py-1 rounded ${darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-100 text-orange-700'}`,
                                                                                        children: pkg.order_number || '......'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 867,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `text-xs py-0.5 px-2 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 873,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `text-xs px-2 py-1 rounded ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`,
                                                                                        children: "✅ Teslim Edildi"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 877,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 866,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `space-y-1 text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-semibold",
                                                                                        children: [
                                                                                            "👤 ",
                                                                                            pkg.customer_name
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 885,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs",
                                                                                        children: [
                                                                                            "📞 ",
                                                                                            pkg.customer_phone
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 886,
                                                                                        columnNumber: 52
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs",
                                                                                        children: [
                                                                                            "📍 ",
                                                                                            pkg.delivery_address
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 887,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    pkg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs",
                                                                                        children: [
                                                                                            "📝 ",
                                                                                            pkg.content
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 888,
                                                                                        columnNumber: 45
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 884,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 865,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-[200px]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: `text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                                            children: "Kurye"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                            lineNumber: 896,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "font-medium",
                                                                                            children: [
                                                                                                "🚴 ",
                                                                                                pkg.courier?.full_name || 'Bilinmeyen'
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                            lineNumber: 897,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                    lineNumber: 895,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: `text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                                            children: "Ödeme"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                            lineNumber: 900,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `inline-block px-2 py-1 rounded text-xs font-medium ${pkg.payment_method === 'cash' ? 'bg-green-900/50 text-green-300' : pkg.payment_method === 'iban' ? 'bg-purple-900/50 text-purple-300' : 'bg-orange-900/50 text-orange-300'}`,
                                                                                            children: pkg.payment_method === 'cash' ? '💵 Nakit' : pkg.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                            lineNumber: 901,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                    lineNumber: 899,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                            lineNumber: 894,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 893,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right min-w-[160px] flex flex-col justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-2xl font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`,
                                                                                children: [
                                                                                    pkg.amount,
                                                                                    "₺"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 916,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `text-[10px] sm:text-xs space-y-1 font-medium ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "whitespace-nowrap",
                                                                                        children: [
                                                                                            "🕐 Oluşturulma: ",
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortDateTime"])(pkg.created_at)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 920,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    pkg.delivered_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "whitespace-nowrap font-bold text-green-500/80",
                                                                                        children: [
                                                                                            "✅ Teslim: ",
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortDateTime"])(pkg.delivered_at)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                        lineNumber: 922,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 919,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 915,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, pkg.id, false, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 855,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 853,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center mt-8 pt-6 border-t border-dashed border-slate-700/30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-semibold mb-3 tracking-wider uppercase ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                            children: [
                                                                "Sipariş Gösterimi (Sayfa ",
                                                                currentPage + 1,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 933,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 flex-wrap justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setCurrentPage((prev)=>Math.max(0, prev - 1)),
                                                                    disabled: currentPage === 0,
                                                                    className: `p-2.5 rounded-lg border transition-all duration-200 ${currentPage === 0 ? 'opacity-40 cursor-not-allowed border-slate-800 text-slate-500' : darkMode ? 'bg-slate-800 hover:bg-slate-750 text-white border-slate-700 hover:scale-105 active:scale-95' : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300 hover:scale-105 active:scale-95 shadow-sm'}`,
                                                                    title: "Önceki Sayfa",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "15 18 9 12 15 6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                            lineNumber: 951,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 950,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                    lineNumber: 938,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex items-center gap-2 p-1.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-gray-100 border-gray-200'}`,
                                                                    children: [
                                                                        50,
                                                                        100,
                                                                        200,
                                                                        500
                                                                    ].map((limit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setDisplayLimit(limit);
                                                                                setCurrentPage(0);
                                                                            },
                                                                            className: `px-5 py-2 text-sm font-bold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${displayLimit === limit ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30' : darkMode ? 'bg-slate-800 hover:bg-slate-750 text-slate-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`,
                                                                            children: limit
                                                                        }, limit, false, {
                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                            lineNumber: 962,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setCurrentPage((prev)=>prev + 1),
                                                                    disabled: deliveredPackages.length < displayLimit,
                                                                    className: `p-2.5 rounded-lg border transition-all duration-200 ${deliveredPackages.length < displayLimit ? 'opacity-40 cursor-not-allowed border-slate-800 text-slate-500' : darkMode ? 'bg-slate-800 hover:bg-slate-750 text-white border-slate-700 hover:scale-105 active:scale-95' : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300 hover:scale-105 active:scale-95 shadow-sm'}`,
                                                                    title: "Sonraki Sayfa",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "9 18 15 12 9 6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                            lineNumber: 995,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 994,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                    lineNumber: 982,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 936,
                                                            columnNumber: 21
                                                        }, this),
                                                        deliveredPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs mt-3 font-semibold ${darkMode ? 'text-slate-500' : 'text-gray-500'}`,
                                                            children: [
                                                                "Gösterilen: ",
                                                                currentPage * displayLimit + 1,
                                                                " - ",
                                                                currentPage * displayLimit + deliveredPackages.length,
                                                                " arası siparişler"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 932,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 829,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this),
                            activeTab === 'cancelled' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-xl p-6 ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-lg`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "❌ İptal Edilen Siparişler"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: startDate,
                                                        onChange: (e)=>setStartDate(e.target.value),
                                                        className: `px-3 py-2 rounded-lg border text-sm ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: darkMode ? 'text-slate-400' : 'text-gray-600',
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: endDate,
                                                        onChange: (e)=>setEndDate(e.target.value),
                                                        className: `px-3 py-2 rounded-lg border text-sm ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center py-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 1049,
                                            columnNumber: 17
                                        }, this) : cancelledPackages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-center py-12 ${darkMode ? 'text-slate-500' : 'text-gray-400'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl mb-2",
                                                    children: "✅"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 1054,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: "İptal edilmiş sipariş bulunmuyor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 1053,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: cancelledPackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-4 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-750' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} transition-colors`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-4 items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-[250px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 mb-2 flex-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-sm font-bold px-2 py-1 rounded ${darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-100 text-orange-700'}`,
                                                                                children: pkg.order_number || '......'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1072,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            pkg.platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-xs py-0.5 px-2 rounded ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformBadgeClass"])(pkg.platform)}`,
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$platformUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformDisplayName"])(pkg.platform)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1078,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-xs px-2 py-1 rounded ${darkMode ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-700'}`,
                                                                                children: "❌ İptal Edildi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1082,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            pkg.is_chargeable_cancellation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-xs px-2 py-1 rounded font-bold ${darkMode ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' : 'bg-yellow-100 text-yellow-800 border border-yellow-300'}`,
                                                                                children: "💰 Ücretlendirildi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1090,
                                                                                columnNumber: 31
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-xs px-2 py-1 rounded ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`,
                                                                                children: "🆓 Ücretsiz İptal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1096,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 1071,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `space-y-1 text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold",
                                                                                children: [
                                                                                    "👤 ",
                                                                                    pkg.customer_name
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1105,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            pkg.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs",
                                                                                children: [
                                                                                    "📞 ",
                                                                                    pkg.customer_phone
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1106,
                                                                                columnNumber: 52
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs",
                                                                                children: [
                                                                                    "📍 ",
                                                                                    pkg.delivery_address
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1107,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            pkg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs",
                                                                                children: [
                                                                                    "📝 ",
                                                                                    pkg.content
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1108,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            pkg.cancellation_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-xs mt-2 p-2 rounded ${darkMode ? 'bg-red-900/20 text-red-300' : 'bg-red-50 text-red-700'}`,
                                                                                children: [
                                                                                    "⚠️ İptal Nedeni: ",
                                                                                    pkg.cancellation_reason
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1110,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 1104,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 1070,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-[200px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`,
                                                                    children: [
                                                                        pkg.courier?.full_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: `text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                                    children: "Kurye"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                    lineNumber: 1124,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "🚴 ",
                                                                                        pkg.courier.full_name
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                    lineNumber: 1125,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                            lineNumber: 1123,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: `text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                                    children: "Ödeme"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                    lineNumber: 1129,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `inline-block px-2 py-1 rounded text-xs font-medium ${pkg.payment_method === 'cash' ? 'bg-green-900/50 text-green-300' : pkg.payment_method === 'iban' ? 'bg-purple-900/50 text-purple-300' : 'bg-orange-900/50 text-orange-300'}`,
                                                                                    children: pkg.payment_method === 'cash' ? '💵 Nakit' : pkg.payment_method === 'iban' ? '🏦 IBAN' : '💳 Kart'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                    lineNumber: 1130,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                            lineNumber: 1128,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 1120,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right min-w-[160px] flex flex-col justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-2xl font-bold mb-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`,
                                                                        children: [
                                                                            pkg.amount,
                                                                            "₺"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 1145,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-[10px] sm:text-xs space-y-1 font-medium ${darkMode ? 'text-slate-400' : 'text-gray-500'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "whitespace-nowrap",
                                                                                children: [
                                                                                    "🕐 Oluşturulma: ",
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortDateTime"])(pkg.created_at)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1149,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            pkg.cancelled_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "whitespace-nowrap font-bold text-red-500/80",
                                                                                children: [
                                                                                    "❌ İptal: ",
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatShortDateTime"])(pkg.cancelled_at)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                                lineNumber: 1151,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                        lineNumber: 1148,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                                lineNumber: 1144,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 23
                                                    }, this)
                                                }, pkg.id, false, {
                                                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 1015,
                                columnNumber: 11
                            }, this),
                            showNewOrderModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$NewOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClose: ()=>setShowNewOrderModal(false),
                                onSuccess: handleNewOrderSuccess,
                                restaurantId: restaurantId,
                                darkMode: darkMode
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 1166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                id: "receipt-printer",
                                className: "hidden",
                                style: {
                                    display: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                                lineNumber: 1175,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                        lineNumber: 587,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                    lineNumber: 585,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/components/RestaurantDashboard.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ChangelogModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangelogModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ChangelogModal({ userType, userId }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkIfShouldShow();
    }, [
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from(tableName).select('has_seen_v2_update').eq('id', userId).single();
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from(tableName).update({
                has_seen_v2_update: true
            }).eq('id', userId);
            console.log('✅ Changelog görüldü olarak işaretlendi');
        } catch (error) {
            console.error('❌ Changelog güncelleme hatası:', error);
        }
    };
    // Kontrol devam ediyorsa veya modal görünmeyecekse hiçbir şey render etme
    if (isChecking || !isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl",
                                    children: "🚀"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChangelogModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-white",
                                            children: "Alda-Gel Kurye v2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChangelogModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 text-lg leading-relaxed",
                            children: "Sistemimizi sizin için daha hızlı, daha güvenilir ve daha kullanışlı hale getirdik. İşte yeni özellikler:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChangelogModal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "📱"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Tam Mobil Uyumluluk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "💰"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Gelişmiş Finansal Mutabakat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "⏱️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Detaylı Sipariş Zaman Çizelgesi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "💳"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Kurye Kazanç Yönetimi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl flex-shrink-0",
                                                children: "🛠️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChangelogModal.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Sistem Hızlandırması"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChangelogModal.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/50 rounded-xl p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/app/restoran/page_NEW.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RestoranPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$RestaurantDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/components/RestaurantDashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRestaurantRealtimeNotifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangelogModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChangelogModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const LOGIN_STORAGE_KEY = 'restoran_logged_in';
const LOGIN_RESTAURANT_ID_KEY = 'restoran_logged_restaurant_id';
function RestoranPage() {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckingAuth, setIsCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginForm, setLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: ''
    });
    const [selectedRestaurantId, setSelectedRestaurantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [restaurants, setRestaurants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAudioUnlocked, setIsAudioUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Realtime bildirimler (INSERT event'leri için)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRestaurantRealtimeNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRestaurantRealtimeNotifications"])(selectedRestaurantId ? parseInt(selectedRestaurantId) : null, isLoggedIn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoggedIn) return;
        const handleUnlock = ()=>{
            setIsAudioUnlocked(true);
            window.removeEventListener('click', handleUnlock);
        };
        window.addEventListener('click', handleUnlock);
        return ()=>{
            window.removeEventListener('click', handleUnlock);
        };
    }, [
        isLoggedIn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMounted) return;
        const checkAuth = async ()=>{
            try {
                // 1. Önce Supabase session kontrolü yap
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (session && session.user) {
                    // Supabase session varsa, restoran ID'sini al
                    const restaurantId = session.user.id;
                    localStorage.setItem(LOGIN_STORAGE_KEY, 'true');
                    localStorage.setItem(LOGIN_RESTAURANT_ID_KEY, restaurantId);
                    setIsLoggedIn(true);
                    setSelectedRestaurantId(restaurantId);
                    setIsCheckingAuth(false);
                    return;
                }
                // 2. Supabase session yoksa, localStorage kontrolü yap
                const loggedIn = localStorage.getItem(LOGIN_STORAGE_KEY) === 'true';
                const restaurantId = localStorage.getItem(LOGIN_RESTAURANT_ID_KEY);
                if (loggedIn && restaurantId) {
                    setIsLoggedIn(true);
                    setSelectedRestaurantId(restaurantId);
                }
            } catch (error) {
                console.error('Auth kontrolü hatası:', error);
            } finally{
                setIsCheckingAuth(false);
            }
        };
        checkAuth();
    }, [
        isMounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMounted) return;
        fetchRestaurants();
    }, [
        isMounted
    ]);
    const fetchRestaurants = async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('id, name, password').order('name');
            if (error) throw error;
            setRestaurants(data || []);
        } catch (error) {
            console.error('Restoranlar alınamadı:', error);
        }
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoginError('');
        const restaurant = restaurants.find((r)=>r.name === loginForm.username);
        if (!restaurant) {
            setLoginError('Restoran bulunamadı');
            return;
        }
        if (restaurant.password !== loginForm.password) {
            setLoginError('Şifre hatalı');
            return;
        }
        localStorage.setItem(LOGIN_STORAGE_KEY, 'true');
        localStorage.setItem(LOGIN_RESTAURANT_ID_KEY, restaurant.id);
        setIsLoggedIn(true);
        setSelectedRestaurantId(restaurant.id);
    };
    const handleLogout = async ()=>{
        try {
            // 1. Supabase'den çıkış yap
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        } catch (error) {
            console.error('SignOut hatası:', error);
        }
        // 2. localStorage'dan restoran key'lerini temizle
        localStorage.removeItem(LOGIN_STORAGE_KEY);
        localStorage.removeItem(LOGIN_RESTAURANT_ID_KEY);
        // 3. State'leri temizle
        setIsLoggedIn(false);
        setSelectedRestaurantId(null);
        setLoginForm({
            username: '',
            password: ''
        });
        // 4. Ana sayfaya yönlendir
        window.location.href = '/';
    };
    if (!isMounted || isCheckingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/page_NEW.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/restoran/page_NEW.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this);
    }
    // Sayfa içeriği artık layout'tan gelen isLoggedIn state'ine güveniyor
    // RestoranPage render oluyorsa zaten layout girişi doğrulamıştır.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isAudioUnlocked && isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 z-[99999] bg-amber-500 text-black text-center text-sm font-semibold py-2 px-4 shadow-lg animate-pulse pointer-events-none",
                children: "🔊 Sesi Aktifleştirmek İçin Ekrana Tıklayın"
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/page_NEW.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangelogModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                userType: "restaurant",
                userId: selectedRestaurantId
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/page_NEW.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$components$2f$RestaurantDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                restaurantId: selectedRestaurantId,
                darkMode: darkMode,
                setDarkMode: setDarkMode
            }, void 0, false, {
                fileName: "[project]/src/app/restoran/page_NEW.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/restoran/page.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$page_NEW$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/page_NEW.tsx [app-ssr] (ecmascript)");
/**
 * @file src/app/restoran/page.tsx
 * @description Restoran Paneli - Kanban Board ile Sipariş Yönetimi
 * Yeni sipariş akışı: new_order → getting_ready → ready
 */ 'use client';
;
}),
"[project]/src/app/restoran/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$page_NEW$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/restoran/page.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$restoran$2f$page_NEW$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/restoran/page_NEW.tsx [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=src_fdf331b9._.js.map