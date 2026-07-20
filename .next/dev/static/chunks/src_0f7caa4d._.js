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
"[project]/src/services/authService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyTheme",
    ()=>applyTheme,
    "getSession",
    ()=>getSession,
    "hasRole",
    ()=>hasRole,
    "isAuthenticated",
    ()=>isAuthenticated,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "resetTheme",
    ()=>resetTheme,
    "saveSession",
    ()=>saveSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$courierLoginService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/courierLoginService.ts [app-client] (ecmascript)");
;
;
async function login(credentials) {
    try {
        const { username, password, userType } = credentials;
        // Admin Girişi (Sabit)
        if (userType === 'admin') {
            if (username === 'admin' && password === 'admin123') {
                const authUser = {
                    id: 'admin-123',
                    companyId: '',
                    companyCode: '',
                    companyName: 'Alda Gel Admin',
                    username: 'admin',
                    fullName: 'Sistem Yöneticisi',
                    email: null,
                    userType: 'admin',
                    theme: {
                        primaryColor: '#f97316',
                        secondaryColor: '#ea580c',
                        accentColor: '#fb923c'
                    },
                    logoUrl: null
                };
                saveSession(authUser);
                return {
                    success: true,
                    user: authUser
                };
            }
            return {
                success: false,
                error: 'Admin kullanıcı adı veya şifre hatalı'
            };
        }
        // Kurye Girişi (pasif kuryeler de giriş yapabilir)
        if (userType === 'courier') {
            const loginResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$courierLoginService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateCourier"])(username, password);
            if (!loginResult.ok) {
                if (loginResult.reason === 'db_error') {
                    return {
                        success: false,
                        error: 'Giriş yapılırken bir hata oluştu'
                    };
                }
                return {
                    success: false,
                    error: 'Kurye kullanıcı adı veya şifre hatalı'
                };
            }
            const user = loginResult.courier;
            const accountError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$courierLoginService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCourierAccountStatusError"])(user.account_status);
            if (accountError) {
                return {
                    success: false,
                    error: accountError
                };
            }
            const authUser = {
                id: user.id,
                companyId: '',
                companyCode: '',
                companyName: 'Alda Gel Kurye',
                username: user.username,
                fullName: user.full_name || user.username,
                email: null,
                userType: 'courier',
                theme: {
                    primaryColor: '#f97316',
                    secondaryColor: '#ea580c',
                    accentColor: '#fb923c'
                },
                logoUrl: null
            };
            saveSession(authUser);
            return {
                success: true,
                user: authUser
            };
        }
        // Restoran Girişi
        if (userType === 'restaurant') {
            // Restoran tablosunda 'username' yerine 'name' alanı kullanılıyor
            const { data: user, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('restaurants').select('*').eq('name', username).eq('password', password).eq('is_active', true).single();
            if (error || !user) {
                return {
                    success: false,
                    error: 'Restoran adı veya şifre hatalı'
                };
            }
            const authUser = {
                id: user.id,
                companyId: user.company_id || '',
                companyCode: '',
                companyName: user.name,
                username: user.name,
                fullName: user.name,
                email: null,
                userType: 'restaurant',
                theme: {
                    primaryColor: '#f97316',
                    secondaryColor: '#ea580c',
                    accentColor: '#fb923c'
                },
                logoUrl: user.logo_url
            };
            saveSession(authUser);
            return {
                success: true,
                user: authUser
            };
        }
        return {
            success: false,
            error: 'Geçersiz giriş tipi'
        };
    } catch (error) {
        console.error('Login error:', error);
        return {
            success: false,
            error: 'Giriş yapılırken bir hata oluştu'
        };
    }
}
function saveSession(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem('auth_user', JSON.stringify(user));
    localStorage.setItem('auth_logged_in', 'true');
    localStorage.setItem('auth_company_id', user.companyId);
    localStorage.setItem('auth_user_type', user.userType);
    // Eski sistem ile uyumluluk için
    if (user.userType === 'courier') {
        localStorage.setItem('kurye_logged_in', 'true');
        localStorage.setItem('kurye_logged_courier_id', user.id);
    } else if (user.userType === 'restaurant') {
        localStorage.setItem('restoran_logged_in', 'true');
        localStorage.setItem('restoran_logged_restaurant_id', user.id);
    } else if (user.userType === 'admin') {
        localStorage.setItem('admin_logged_in', 'true');
    }
    // Tema renklerini uygula
    applyTheme(user.theme);
}
function getSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const userJson = localStorage.getItem('auth_user');
        if (!userJson) return null;
        const user = JSON.parse(userJson);
        // Tema renklerini uygula
        applyTheme(user.theme);
        return user;
    } catch (error) {
        console.error('Session parse error:', error);
        return null;
    }
}
function logout() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Tüm auth verilerini temizle
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_logged_in');
    localStorage.removeItem('auth_company_id');
    localStorage.removeItem('auth_user_type');
    // Eski sistem verileri
    localStorage.removeItem('kurye_logged_in');
    localStorage.removeItem('kurye_logged_courier_id');
    localStorage.removeItem('restoran_logged_in');
    localStorage.removeItem('restoran_logged_restaurant_id');
    localStorage.removeItem('admin_logged_in');
    // Tema renklerini sıfırla
    resetTheme();
    // Ana sayfaya yönlendir (Login seçim ekranı)
    window.location.href = '/';
}
function applyTheme(theme) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.primaryColor);
    root.style.setProperty('--color-secondary', theme.secondaryColor);
    root.style.setProperty('--color-accent', theme.accentColor);
}
function resetTheme() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', '#f97316');
    root.style.setProperty('--color-secondary', '#ea580c');
    root.style.setProperty('--color-accent', '#fb923c');
}
function isAuthenticated() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem('auth_logged_in') === 'true';
}
function hasRole(requiredRole) {
    const user = getSession();
    return user?.userType === requiredRole;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/authService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/preferences/dist/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const COURIER_STORAGE_KEYS = {
    LOGIN: 'kurye_logged_in',
    COURIER_ID: 'kurye_logged_courier_id'
};
const RESTORAN_STORAGE_KEY = 'restoran_logged_in';
const ADMIN_STORAGE_KEY = 'admin_logged_in';
const ROLE_META = {
    admin: {
        title: 'Yönetim',
        description: 'Operasyon, kurye ve restoran kontrolü',
        accent: 'border-orange-500/40 hover:border-orange-500',
        text: 'text-orange-400'
    },
    restaurant: {
        title: 'Restoran',
        description: 'Sipariş, menü ve raporlama',
        accent: 'border-orange-500/40 hover:border-orange-500',
        text: 'text-orange-400'
    },
    courier: {
        title: 'Kurye',
        description: 'Teslimat ve rota yönetimi',
        accent: 'border-orange-500/40 hover:border-orange-500',
        text: 'text-orange-400'
    }
};
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isAuthLoading, setIsAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPage.useEffect": ()=>{
            const checkExistingSession = {
                "LoginPage.useEffect.checkExistingSession": async ()=>{
                    try {
                        const { value: prefKurye } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].get({
                            key: COURIER_STORAGE_KEYS.LOGIN
                        });
                        const { value: prefCourierId } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$preferences$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Preferences"].get({
                            key: COURIER_STORAGE_KEYS.COURIER_ID
                        });
                        if (prefKurye === 'true' && prefCourierId) {
                            router.replace('/kurye');
                            return;
                        }
                        const localKurye = localStorage.getItem(COURIER_STORAGE_KEYS.LOGIN);
                        const localCourierId = localStorage.getItem(COURIER_STORAGE_KEYS.COURIER_ID);
                        if (localKurye === 'true' && localCourierId) {
                            router.replace('/kurye');
                            return;
                        }
                        if (localStorage.getItem(RESTORAN_STORAGE_KEY) === 'true') {
                            router.replace('/restoran');
                            return;
                        }
                        if (localStorage.getItem(ADMIN_STORAGE_KEY) === 'true') {
                            router.replace('/admin');
                            return;
                        }
                    } catch (error) {
                        console.error('[RootPage] Session kontrolü hatası:', error);
                        const localKurye = localStorage.getItem(COURIER_STORAGE_KEYS.LOGIN);
                        const localCourierId = localStorage.getItem(COURIER_STORAGE_KEYS.COURIER_ID);
                        if (localKurye === 'true' && localCourierId) {
                            router.replace('/kurye');
                            return;
                        }
                    } finally{
                        setIsAuthLoading(false);
                    }
                }
            }["LoginPage.useEffect.checkExistingSession"];
            checkExistingSession();
        }
    }["LoginPage.useEffect"], [
        router
    ]);
    if (isAuthLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.png",
                    alt: "Alda Gel",
                    className: "w-16 h-16 mb-5 opacity-90"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 text-xs tracking-wide uppercase",
                    children: "Yükleniyor"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    const handleLogin = async (e)=>{
        e.preventDefault();
        setErrorMessage('');
        setIsLoading(true);
        try {
            if (!username || !password || !selectedType) {
                setErrorMessage('Lütfen tüm alanları doldurun');
                setIsLoading(false);
                return;
            }
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])({
                companyCode: 'DEFAULT',
                username,
                password,
                userType: selectedType
            });
            if (response.success && response.user) {
                if (response.user.userType === 'courier') router.push('/kurye');
                else if (response.user.userType === 'restaurant') router.push('/restoran');
                else if (response.user.userType === 'admin') router.push('/admin');
            } else {
                setErrorMessage(response.error || 'Giriş yapılırken bir hata oluştu');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Giriş yapılırken bir hata oluştu');
        } finally{
            setIsLoading(false);
        }
    };
    const handleBack = ()=>{
        setSelectedType(null);
        setUsername('');
        setPassword('');
        setErrorMessage('');
    };
    if (!selectedType) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-950 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Logo",
                                className: "w-16 h-16 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-semibold text-white tracking-tight mb-1",
                                children: "Alda Gel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm",
                                children: "Operasyon paneline giriş"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                        children: [
                            'admin',
                            'restaurant',
                            'courier'
                        ].map((role)=>{
                            const meta = ROLE_META[role];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: `btn-${role === 'restaurant' ? 'restoran' : role === 'courier' ? 'kurye' : 'admin'}-select`,
                                onClick: ()=>setSelectedType(role),
                                className: `group text-left bg-slate-900 border ${meta.accent} rounded-lg p-5 transition-colors`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "ui-label mb-2",
                                        children: "Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-white mb-1 tracking-tight",
                                        children: meta.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm mb-4",
                                        children: meta.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center text-sm font-medium ${meta.text}`,
                                        children: [
                                            "Devam et",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, role, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-10 text-slate-600 text-xs tracking-wide",
                        children: "© 2026 Alda Gel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this);
    }
    const meta = ROLE_META[selectedType];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-950 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBack,
                    className: "mb-6 flex items-center text-slate-500 hover:text-slate-300 text-sm transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        "Geri"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-lg p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    alt: "Logo",
                                    className: "w-14 h-14 mx-auto mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-white tracking-tight mb-1",
                                    children: [
                                        meta.title,
                                        " Girişi"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm",
                                    children: meta.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleLogin,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-slate-400 mb-1.5 tracking-wide uppercase",
                                            children: "Kullanıcı Adı"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "input-username",
                                            type: "text",
                                            placeholder: "Kullanıcı adı",
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value),
                                            className: "w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-slate-400 mb-1.5 tracking-wide uppercase",
                                            children: "Şifre"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "input-password",
                                            type: "password",
                                            placeholder: "••••••••",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            className: "w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-600 outline-none focus:border-orange-500 transition-colors text-sm",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-950/40 border border-red-900/60 rounded-md p-3 text-red-300 text-sm",
                                    children: errorMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "btn-login-submit",
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                selectedType !== 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center pt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm",
                                        children: [
                                            "Hesabınız yok mu?",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: selectedType === 'courier' ? '/register-kurye' : '/register-restoran',
                                                className: "text-orange-400 hover:text-orange-300 font-medium transition-colors",
                                                children: "Başvuru yap"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "KStAr4IcF3v9Mne6aJg4IarNaPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0f7caa4d._.js.map