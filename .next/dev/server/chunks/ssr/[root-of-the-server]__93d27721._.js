module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/PWAInstallPrompt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAInstallPrompt",
    ()=>PWAInstallPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * @file src/components/PWAInstallPrompt.tsx
 * @description PWA Kurulum İstemi ve Service Worker Kaydı
 */ 'use client';
;
;
function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showInstallPrompt, setShowInstallPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIOS, setIsIOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStandalone, setIsStandalone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Service Worker'ı kaydet
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then((registration)=>{
                console.log('✅ Service Worker registered:', registration.scope);
                // Güncelleme kontrolü
                registration.addEventListener('updatefound', ()=>{
                    const newWorker = registration.installing;
                    if (newWorker) {
                        newWorker.addEventListener('statechange', ()=>{
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
                        });
                    }
                });
            }).catch((error)=>{
                console.error('❌ Service Worker registration failed:', error);
            });
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
            setTimeout(()=>setShowInstallPrompt(true), 3000);
        }
        // Android/Chrome için install prompt
        const handleBeforeInstallPrompt = (e)=>{
            e.preventDefault();
            setDeferredPrompt(e);
            if (!isInStandaloneMode) {
                setTimeout(()=>setShowInstallPrompt(true), 3000); // 3 saniye sonra göster
            }
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        // App kurulduğunda
        window.addEventListener('appinstalled', ()=>{
            console.log('✅ PWA installed successfully');
            setShowInstallPrompt(false);
            setDeferredPrompt(null);
            localStorage.setItem('pwa_prompt_dismissed', 'true');
        });
        return ()=>{
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-xl shadow-2xl border border-orange-500 animate-slide-up",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Ana Ekrana Ekle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-orange-100 mb-2",
                                children: "Daha iyi deneyim için uygulamayı ana ekranınıza ekleyin:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "text-xs text-orange-100 space-y-1 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "1. Aşağıdaki ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "2. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "3. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-xl shadow-2xl border border-orange-500 animate-slide-up",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg mb-1",
                                children: "Uygulamayı Yükle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-orange-100 mb-3",
                                children: "Daha hızlı erişim için Mergen Kurye'yi cihazınıza yükleyin. İnternet olmadan da çalışır!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleInstallClick,
                                        className: "bg-white text-orange-600 font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm",
                                        children: "Yükle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PWAInstallPrompt.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/app/context/CartContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // LocalStorage'dan sepeti yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedCart = localStorage.getItem('alda_gel_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Sepet yüklenemedi:', error);
            }
        }
    }, []);
    // Sepet değiştiğinde LocalStorage'a kaydet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('alda_gel_cart', JSON.stringify(cart));
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
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
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
}),
"[project]/src/contexts/NotificationContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotification",
    ()=>useNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NotificationProvider({ children }) {
    const loopingAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shortAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAudioReady, setIsAudioReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAudioUnlocked, setIsAudioUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationPermission, setNotificationPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('default');
    // Audio dosyalarını initialize et
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Cache busting için timestamp ekle
        const timestamp = Date.now();
        console.log('🔊 Audio dosyaları yükleniyor...', `/notification.mp3?v=${timestamp}`);
        // Looping audio (Restoran ve Admin için)
        loopingAudioRef.current = new Audio(`/notification.mp3?v=${timestamp}`);
        loopingAudioRef.current.loop = true;
        loopingAudioRef.current.volume = 0.8;
        loopingAudioRef.current.addEventListener('loadstart', ()=>console.log('🔊 Looping audio yüklenmeye başladı'));
        loopingAudioRef.current.addEventListener('canplay', ()=>console.log('✅ Looping audio hazır'));
        loopingAudioRef.current.addEventListener('error', (e)=>console.error('❌ Looping audio hatası:', e));
        // Short audio (Kurye için)
        shortAudioRef.current = new Audio(`/notification.mp3?v=${timestamp}`);
        shortAudioRef.current.loop = false;
        shortAudioRef.current.volume = 0.8;
        shortAudioRef.current.addEventListener('loadstart', ()=>console.log('🔊 Short audio yüklenmeye başladı'));
        shortAudioRef.current.addEventListener('canplay', ()=>console.log('✅ Short audio hazır'));
        shortAudioRef.current.addEventListener('error', (e)=>console.error('❌ Short audio hatası:', e));
        // Audio'nun yüklendiğini işaretle
        const handleCanPlay = ()=>setIsAudioReady(true);
        loopingAudioRef.current.addEventListener('canplaythrough', handleCanPlay);
        // Notification permission durumunu kontrol et
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'Notification' in window) //TURBOPACK unreachable
        ;
        // Audio unlock için click listener ekle (SADECE BİR KEZ)
        const unlockAudio = ()=>{
            if (!isAudioUnlocked && loopingAudioRef.current && shortAudioRef.current) {
                console.log('🔓 Audio unlock deneniyor...');
                // ÖNCE EVENT LISTENER'LARI KALDIR (Tekrar çalmasın)
                document.removeEventListener('click', unlockAudio);
                document.removeEventListener('touchstart', unlockAudio);
                // Sessiz bir ses çal (unlock için) - volume 0 yap
                loopingAudioRef.current.volume = 0;
                shortAudioRef.current.volume = 0;
                const unlockPromise1 = loopingAudioRef.current.play().then(()=>{
                    loopingAudioRef.current.pause();
                    loopingAudioRef.current.currentTime = 0;
                    loopingAudioRef.current.volume = 0.8; // Volume'u geri yükle
                    console.log('✅ Looping audio unlocked');
                }).catch(()=>{
                    loopingAudioRef.current.volume = 0.8;
                });
                const unlockPromise2 = shortAudioRef.current.play().then(()=>{
                    shortAudioRef.current.pause();
                    shortAudioRef.current.currentTime = 0;
                    shortAudioRef.current.volume = 0.8; // Volume'u geri yükle
                    console.log('✅ Short audio unlocked');
                }).catch(()=>{
                    shortAudioRef.current.volume = 0.8;
                });
                Promise.all([
                    unlockPromise1,
                    unlockPromise2
                ]).then(()=>{
                    setIsAudioUnlocked(true);
                    console.log('🎉 Audio tamamen unlocked!');
                });
            }
        };
        // İlk tıklamada audio'yu unlock et
        document.addEventListener('click', unlockAudio, {
            once: true
        });
        document.addEventListener('touchstart', unlockAudio, {
            once: true
        });
        // Cleanup
        return ()=>{
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
        };
    }, [
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
        if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('Notification' in window)) {
            return 'denied';
        }
        //TURBOPACK unreachable
        ;
    };
    // Native notification göster
    const showNativeNotification = (title, body)=>{
        if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('Notification' in window)) {
            console.warn('⚠️ Bu tarayıcı native notification desteklemiyor');
            return;
        }
        //TURBOPACK unreachable
        ;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
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
function useNotification() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within NotificationProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__93d27721._.js.map