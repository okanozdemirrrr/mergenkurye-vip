(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PWAInstallPrompt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAInstallPrompt",
    ()=>PWAInstallPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * @file src/components/PWAInstallPrompt.tsx
 * @description PWA Kurulum İstemi ve Service Worker Kaydı
 */ 'use client';
;
function PWAInstallPrompt() {
    _s();
    const [deferredPrompt, setDeferredPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showInstallPrompt, setShowInstallPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIOS, setIsIOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStandalone, setIsStandalone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PWAInstallPrompt.useEffect": ()=>{
            // Service Worker'ı kaydet
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').then({
                    "PWAInstallPrompt.useEffect": (registration)=>{
                        console.log('✅ Service Worker registered:', registration.scope);
                        // Güncelleme kontrolü
                        registration.addEventListener('updatefound', {
                            "PWAInstallPrompt.useEffect": ()=>{
                                const newWorker = registration.installing;
                                if (newWorker) {
                                    newWorker.addEventListener('statechange', {
                                        "PWAInstallPrompt.useEffect": ()=>{
                                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                                console.log('🔄 New Service Worker available');
                                                // Kullanıcıya güncelleme bildirimi göster
                                                if (confirm('Yeni bir güncelleme mevcut. Sayfayı yenilemek ister misiniz?')) {
                                                    newWorker.postMessage({
                                                        type: 'SKIP_WAITING'
                                                    });
                                                    window.location.reload();
                                                }
                                            }
                                        }
                                    }["PWAInstallPrompt.useEffect"]);
                                }
                            }
                        }["PWAInstallPrompt.useEffect"]);
                    }
                }["PWAInstallPrompt.useEffect"]).catch({
                    "PWAInstallPrompt.useEffect": (error)=>{
                        console.error('❌ Service Worker registration failed:', error);
                    }
                }["PWAInstallPrompt.useEffect"]);
            }
            // Kullanıcı daha önce dismiss ettiyse hiç gösterme
            const hasDeclined = localStorage.getItem('pwa_prompt_dismissed');
            if (hasDeclined === 'true') {
                return;
            }
            // iOS kontrolü
            const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            setIsIOS(isIOSDevice);
            // Standalone mode kontrolü (zaten kurulu mu?)
            const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
            setIsStandalone(isInStandaloneMode);
            // iOS için otomatik göster (3 saniye sonra)
            if (isIOSDevice && !isInStandaloneMode) {
                setTimeout({
                    "PWAInstallPrompt.useEffect": ()=>setShowInstallPrompt(true)
                }["PWAInstallPrompt.useEffect"], 3000);
            }
            // Android/Chrome için install prompt
            const handleBeforeInstallPrompt = {
                "PWAInstallPrompt.useEffect.handleBeforeInstallPrompt": (e)=>{
                    e.preventDefault();
                    setDeferredPrompt(e);
                    if (!isInStandaloneMode) {
                        setTimeout({
                            "PWAInstallPrompt.useEffect.handleBeforeInstallPrompt": ()=>setShowInstallPrompt(true)
                        }["PWAInstallPrompt.useEffect.handleBeforeInstallPrompt"], 3000); // 3 saniye sonra göster
                    }
                }
            }["PWAInstallPrompt.useEffect.handleBeforeInstallPrompt"];
            window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            // App kurulduğunda
            window.addEventListener('appinstalled', {
                "PWAInstallPrompt.useEffect": ()=>{
                    console.log('✅ PWA installed successfully');
                    setShowInstallPrompt(false);
                    setDeferredPrompt(null);
                    localStorage.setItem('pwa_prompt_dismissed', 'true');
                }
            }["PWAInstallPrompt.useEffect"]);
            return ({
                "PWAInstallPrompt.useEffect": ()=>{
                    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
                }
            })["PWAInstallPrompt.useEffect"];
        }
    }["PWAInstallPrompt.useEffect"], []);
    const handleInstallClick = async ()=>{
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        if (outcome === 'dismissed') {
            localStorage.setItem('pwa_prompt_dismissed', 'true');
        } else if (outcome === 'accepted') {
            localStorage.setItem('pwa_prompt_dismissed', 'true');
        }
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
    };
    const handleDismiss = ()=>{
        setShowInstallPrompt(false);
        localStorage.setItem('pwa_prompt_dismissed', 'true');
    };
    // Zaten kuruluysa hiçbir şey gösterme
    if (isStandalone) {
        return null;
    }
    // iOS için özel talimat
    if (isIOS && !isStandalone && showInstallPrompt) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-xl shadow-2xl border border-orange-500 animate-slide-up",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Ana Ekrana Ekle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-orange-100 mb-2",
                                children: "Daha iyi deneyim için uygulamayı ana ekranınıza ekleyin:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "text-xs text-orange-100 space-y-1 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "1. Aşağıdaki ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Paylaş"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                                lineNumber: 135,
                                                columnNumber: 32
                                            }, this),
                                            " butonuna dokunun"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "2. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: '"Ana Ekrana Ekle"'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                                lineNumber: 136,
                                                columnNumber: 22
                                            }, this),
                                            " seçeneğini bulun"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "3. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: '"Ekle"'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                                lineNumber: 137,
                                                columnNumber: 22
                                            }, this),
                                            " butonuna dokunun"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors",
                                children: "Anladım"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDismiss,
                        className: "text-white/80 hover:text-white text-xl font-bold",
                        "aria-label": "Kapat",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PWAInstallPrompt.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this);
    }
    // Android/Chrome için install butonu
    if (showInstallPrompt && deferredPrompt) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-xl shadow-2xl border border-orange-500 animate-slide-up",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Uygulamayı Yükle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-orange-100 mb-3",
                                children: "Daha hızlı erişim için Mergen Kurye'yi cihazınıza yükleyin. İnternet olmadan da çalışır!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleInstallClick,
                                        className: "bg-white text-orange-600 font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm",
                                        children: "Yükle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDismiss,
                                        className: "bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm",
                                        children: "Daha Sonra"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDismiss,
                        className: "text-white/80 hover:text-white text-xl font-bold",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PWAInstallPrompt.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(PWAInstallPrompt, "Xb9z0mBZA96eAquoB4fSLgeHTSs=");
_c = PWAInstallPrompt;
var _c;
__turbopack_context__.k.register(_c, "PWAInstallPrompt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // LocalStorage'dan sepeti yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const savedCart = localStorage.getItem('alda_gel_cart');
            if (savedCart) {
                try {
                    setCart(JSON.parse(savedCart));
                } catch (error) {
                    console.error('Sepet yüklenemedi:', error);
                }
            }
        }
    }["CartProvider.useEffect"], []);
    // Sepet değiştiğinde LocalStorage'a kaydet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            localStorage.setItem('alda_gel_cart', JSON.stringify(cart));
        }
    }["CartProvider.useEffect"], [
        cart
    ]);
    const addToCart = (product, quantity = 1, note)=>{
        setCart((prevCart)=>{
            const existingItem = prevCart.find((item)=>item.product.id === product.id);
            if (existingItem) {
                // Ürün zaten sepette, miktarı artır
                return prevCart.map((item)=>item.product.id === product.id ? {
                        ...item,
                        quantity: item.quantity + quantity,
                        item_note: note || item.item_note
                    } : item);
            } else {
                // Yeni ürün ekle
                return [
                    ...prevCart,
                    {
                        product,
                        quantity,
                        item_note: note
                    }
                ];
            }
        });
    };
    const removeFromCart = (productId)=>{
        setCart((prevCart)=>prevCart.filter((item)=>item.product.id !== productId));
    };
    const updateQuantity = (productId, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart((prevCart)=>prevCart.map((item)=>item.product.id === productId ? {
                        ...item,
                        quantity
                    } : item));
        }
    };
    const updateNote = (productId, note)=>{
        setCart((prevCart)=>prevCart.map((item)=>item.product.id === productId ? {
                    ...item,
                    item_note: note
                } : item));
    };
    const clearCart = ()=>{
        setCart([]);
        localStorage.removeItem('alda_gel_cart');
    };
    const getCartTotal = ()=>{
        return cart.reduce((total, item)=>total + item.product.price * item.quantity, 0);
    };
    const getCartItemCount = ()=>{
        return cart.reduce((count, item)=>count + item.quantity, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            updateNote,
            clearCart,
            getCartTotal,
            getCartItemCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/CartContext.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "gPYbNUmWK8tVVPcrFDrHV23HVlE=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/NotificationContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotification",
    ()=>useNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
/**
 * @file src/contexts/NotificationContext.tsx
 * @description Panel-bazlı Bildirim Sistemi Context
 * 
 * ÖZELLİKLER:
 * - Audio yönetimi (loop ve tek seferlik)
 * - Browser autoplay policy bypass
 * - Memory leak önleme
 * - Native push notification desteği
 */ 'use client';
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NotificationProvider({ children }) {
    _s();
    const loopingAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shortAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAudioReady, setIsAudioReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAudioUnlocked, setIsAudioUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationPermission, setNotificationPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    // Audio dosyalarını initialize et
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            // Cache busting için timestamp ekle
            const timestamp = Date.now();
            console.log('🔊 Audio dosyaları yükleniyor...', `/notification.mp3?v=${timestamp}`);
            // Looping audio (Restoran ve Admin için)
            loopingAudioRef.current = new Audio(`/notification.mp3?v=${timestamp}`);
            loopingAudioRef.current.loop = true;
            loopingAudioRef.current.volume = 0.8;
            loopingAudioRef.current.addEventListener('loadstart', {
                "NotificationProvider.useEffect": ()=>console.log('🔊 Looping audio yüklenmeye başladı')
            }["NotificationProvider.useEffect"]);
            loopingAudioRef.current.addEventListener('canplay', {
                "NotificationProvider.useEffect": ()=>console.log('✅ Looping audio hazır')
            }["NotificationProvider.useEffect"]);
            loopingAudioRef.current.addEventListener('error', {
                "NotificationProvider.useEffect": (e)=>console.error('❌ Looping audio hatası:', e)
            }["NotificationProvider.useEffect"]);
            // Short audio (Kurye için)
            shortAudioRef.current = new Audio(`/notification.mp3?v=${timestamp}`);
            shortAudioRef.current.loop = false;
            shortAudioRef.current.volume = 0.8;
            shortAudioRef.current.addEventListener('loadstart', {
                "NotificationProvider.useEffect": ()=>console.log('🔊 Short audio yüklenmeye başladı')
            }["NotificationProvider.useEffect"]);
            shortAudioRef.current.addEventListener('canplay', {
                "NotificationProvider.useEffect": ()=>console.log('✅ Short audio hazır')
            }["NotificationProvider.useEffect"]);
            shortAudioRef.current.addEventListener('error', {
                "NotificationProvider.useEffect": (e)=>console.error('❌ Short audio hatası:', e)
            }["NotificationProvider.useEffect"]);
            // Audio'nun yüklendiğini işaretle
            const handleCanPlay = {
                "NotificationProvider.useEffect.handleCanPlay": ()=>setIsAudioReady(true)
            }["NotificationProvider.useEffect.handleCanPlay"];
            loopingAudioRef.current.addEventListener('canplaythrough', handleCanPlay);
            // Notification permission durumunu kontrol et
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'Notification' in window) {
                setNotificationPermission(Notification.permission);
            }
            // Audio unlock için click listener ekle (SADECE BİR KEZ)
            const unlockAudio = {
                "NotificationProvider.useEffect.unlockAudio": ()=>{
                    if (!isAudioUnlocked && loopingAudioRef.current && shortAudioRef.current) {
                        console.log('🔓 Audio unlock deneniyor...');
                        // ÖNCE EVENT LISTENER'LARI KALDIR (Tekrar çalmasın)
                        document.removeEventListener('click', unlockAudio);
                        document.removeEventListener('touchstart', unlockAudio);
                        // Sessiz bir ses çal (unlock için) - volume 0 yap
                        loopingAudioRef.current.volume = 0;
                        shortAudioRef.current.volume = 0;
                        const unlockPromise1 = loopingAudioRef.current.play().then({
                            "NotificationProvider.useEffect.unlockAudio.unlockPromise1": ()=>{
                                loopingAudioRef.current.pause();
                                loopingAudioRef.current.currentTime = 0;
                                loopingAudioRef.current.volume = 0.8; // Volume'u geri yükle
                                console.log('✅ Looping audio unlocked');
                            }
                        }["NotificationProvider.useEffect.unlockAudio.unlockPromise1"]).catch({
                            "NotificationProvider.useEffect.unlockAudio.unlockPromise1": ()=>{
                                loopingAudioRef.current.volume = 0.8;
                            }
                        }["NotificationProvider.useEffect.unlockAudio.unlockPromise1"]);
                        const unlockPromise2 = shortAudioRef.current.play().then({
                            "NotificationProvider.useEffect.unlockAudio.unlockPromise2": ()=>{
                                shortAudioRef.current.pause();
                                shortAudioRef.current.currentTime = 0;
                                shortAudioRef.current.volume = 0.8; // Volume'u geri yükle
                                console.log('✅ Short audio unlocked');
                            }
                        }["NotificationProvider.useEffect.unlockAudio.unlockPromise2"]).catch({
                            "NotificationProvider.useEffect.unlockAudio.unlockPromise2": ()=>{
                                shortAudioRef.current.volume = 0.8;
                            }
                        }["NotificationProvider.useEffect.unlockAudio.unlockPromise2"]);
                        Promise.all([
                            unlockPromise1,
                            unlockPromise2
                        ]).then({
                            "NotificationProvider.useEffect.unlockAudio": ()=>{
                                setIsAudioUnlocked(true);
                                console.log('🎉 Audio tamamen unlocked!');
                            }
                        }["NotificationProvider.useEffect.unlockAudio"]);
                    }
                }
            }["NotificationProvider.useEffect.unlockAudio"];
            // İlk tıklamada audio'yu unlock et
            document.addEventListener('click', unlockAudio, {
                once: true
            });
            document.addEventListener('touchstart', unlockAudio, {
                once: true
            });
            // Cleanup
            return ({
                "NotificationProvider.useEffect": ()=>{
                    if (loopingAudioRef.current) {
                        loopingAudioRef.current.pause();
                        loopingAudioRef.current.removeEventListener('canplaythrough', handleCanPlay);
                        loopingAudioRef.current = null;
                    }
                    if (shortAudioRef.current) {
                        shortAudioRef.current.pause();
                        shortAudioRef.current = null;
                    }
                    // Event listener'ları temizle (once: true olduğu için otomatik temizlenir ama yine de ekleyelim)
                    document.removeEventListener('click', unlockAudio);
                    document.removeEventListener('touchstart', unlockAudio);
                }
            })["NotificationProvider.useEffect"];
        }
    }["NotificationProvider.useEffect"], [
        isAudioUnlocked
    ]); // isAudioUnlocked dependency ekle
    // Looping audio başlat (Restoran/Admin)
    const playLoopingAudio = ()=>{
        console.log('🔊 playLoopingAudio çağrıldı, unlocked:', isAudioUnlocked);
        if (loopingAudioRef.current && isAudioUnlocked) {
            console.log('✅ loopingAudioRef mevcut ve unlocked');
            loopingAudioRef.current.currentTime = 0;
            loopingAudioRef.current.play().then(()=>console.log('✅ Looping audio başarıyla çalıyor')).catch((err)=>{
                console.error('❌ Looping audio oynatılamadı:', err);
            });
        } else {
            console.warn('⚠️ Audio henüz unlock edilmemiş veya ref null');
        }
    };
    // Looping audio durdur
    const stopLoopingAudio = ()=>{
        if (loopingAudioRef.current) {
            loopingAudioRef.current.pause();
            loopingAudioRef.current.currentTime = 0;
        }
    };
    // Kısa audio çal (Kurye - 3-4 saniye)
    const playShortAudio = ()=>{
        console.log('🔊 playShortAudio çağrıldı, unlocked:', isAudioUnlocked);
        if (shortAudioRef.current && isAudioUnlocked) {
            console.log('✅ shortAudioRef mevcut ve unlocked');
            shortAudioRef.current.currentTime = 0;
            shortAudioRef.current.play().then(()=>console.log('✅ Audio başarıyla çalıyor')).catch((err)=>{
                console.error('❌ Audio oynatılamadı:', err);
            });
            // 4 saniye sonra durdur
            setTimeout(()=>{
                if (shortAudioRef.current) {
                    shortAudioRef.current.pause();
                    shortAudioRef.current.currentTime = 0;
                }
            }, 4000);
        } else {
            console.warn('⚠️ Audio henüz unlock edilmemiş veya ref null');
        }
    };
    // Native notification izni iste
    const requestNotificationPermission = async ()=>{
        if (("TURBOPACK compile-time value", "object") === 'undefined' || !('Notification' in window)) {
            return 'denied';
        }
        if (Notification.permission === 'granted') {
            return 'granted';
        }
        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            setNotificationPermission(permission);
            return permission;
        }
        return Notification.permission;
    };
    // Native notification göster
    const showNativeNotification = (title, body)=>{
        if (("TURBOPACK compile-time value", "object") === 'undefined' || !('Notification' in window)) {
            console.warn('⚠️ Bu tarayıcı native notification desteklemiyor');
            return;
        }
        if (Notification.permission === 'granted') {
            try {
                const notification = new Notification(title, {
                    body,
                    icon: '/icon-192x192.png',
                    badge: '/icon-192x192.png',
                    tag: 'mergen-kurye',
                    requireInteraction: false,
                    silent: false
                });
                // 10 saniye sonra otomatik kapat
                setTimeout(()=>notification.close(), 10000);
            } catch (error) {
                console.error('❌ Native notification gösterilemedi:', error);
            }
        } else {
            console.warn('⚠️ Notification izni verilmemiş');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            playLoopingAudio,
            stopLoopingAudio,
            playShortAudio,
            isAudioReady,
            requestNotificationPermission,
            showNativeNotification,
            notificationPermission
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/NotificationContext.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(NotificationProvider, "k0vU3GXDjZhASYF2kA5LTxoSyBs=");
_c = NotificationProvider;
function useNotification() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within NotificationProvider');
    }
    return context;
}
_s1(useNotification, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/DesignModeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESIGN_MODE_STORAGE_KEY",
    ()=>STORAGE_KEY,
    "DesignModeProvider",
    ()=>DesignModeProvider,
    "preserveDesignModeDuringClear",
    ()=>preserveDesignModeDuringClear,
    "useDesignMode",
    ()=>useDesignMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const STORAGE_KEY = 'design_mode';
const DesignModeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function applyDesignMode(mode) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-design-mode', mode);
}
function readStoredMode() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'classic' ? 'classic' : 'pro';
}
function DesignModeProvider({ children }) {
    _s();
    const [mode, setModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pro');
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignModeProvider.useEffect": ()=>{
            const initial = readStoredMode();
            setModeState(initial);
            applyDesignMode(initial);
            setReady(true);
        }
    }["DesignModeProvider.useEffect"], []);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignModeProvider.useCallback[setMode]": (next)=>{
            setModeState(next);
            applyDesignMode(next);
            localStorage.setItem(STORAGE_KEY, next);
        }
    }["DesignModeProvider.useCallback[setMode]"], []);
    const toggleMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignModeProvider.useCallback[toggleMode]": ()=>{
            setMode(mode === 'pro' ? 'classic' : 'pro');
        }
    }["DesignModeProvider.useCallback[toggleMode]"], [
        mode,
        setMode
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignModeProvider.useMemo[value]": ()=>({
                mode,
                setMode,
                toggleMode,
                isClassic: mode === 'classic',
                isPro: mode === 'pro'
            })
    }["DesignModeProvider.useMemo[value]"], [
        mode,
        setMode,
        toggleMode
    ]);
    // Flash önlemek için ilk paint'te de attribute set edilmiş olur (layout script)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignModeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/DesignModeContext.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
_s(DesignModeProvider, "IgBB1Aa/Fpmbmm+Cabf+3ptx1eQ=");
_c = DesignModeProvider;
function useDesignMode() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DesignModeContext);
    if (!ctx) {
        throw new Error('useDesignMode must be used within DesignModeProvider');
    }
    return ctx;
}
_s1(useDesignMode, "/dMy7t63NXD4eYACoT93CePwGrg=");
function preserveDesignModeDuringClear(clearFn) {
    const saved = localStorage.getItem(STORAGE_KEY);
    clearFn();
    if (saved === 'classic' || saved === 'pro') {
        localStorage.setItem(STORAGE_KEY, saved);
        applyDesignMode(saved);
    }
}
;
var _c;
__turbopack_context__.k.register(_c, "DesignModeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_fc316ac0._.js.map