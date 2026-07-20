module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/applications/action/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
function getServiceRoleKey() {
    return process.env.SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_JWT;
}
function getRpcName(payload) {
    if (payload.action === 'approve') {
        if (payload.application_type === 'kurye') return 'approve_courier_application';
        if (payload.application_type === 'restoran') return 'approve_restaurant_application';
        return null;
    }
    if (payload.action === 'reject') return 'reject_application';
    if (payload.action === 'reopen') return 'reopen_application';
    return null;
}
function isUuid(value) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
async function resolveCompanyId(supabase, requestedCompanyId) {
    if (requestedCompanyId && isUuid(requestedCompanyId)) {
        const { data: existingCompany, error: existingError } = await supabase.from('companies').select('id').eq('id', requestedCompanyId).maybeSingle();
        if (!existingError && existingCompany?.id) {
            return {
                companyId: existingCompany.id
            };
        }
    }
    const { data: fallbackCompany, error: fallbackError } = await supabase.from('companies').select('id').limit(1).maybeSingle();
    if (fallbackError) {
        return {
            companyId: null,
            error: fallbackError.message || 'Şirket kaydı okunamadı'
        };
    }
    if (!fallbackCompany?.id) {
        return {
            companyId: null,
            error: 'Onay için companies tablosunda en az 1 kayıt olmalı. Önce bir şirket kaydı oluşturun.'
        };
    }
    return {
        companyId: fallbackCompany.id
    };
}
function mapActionError(message) {
    if (message.includes('permission denied for table users')) {
        return 'Veritabanı izin hatası: users tablosu için yetki eksik. SQL fonksiyonunu SECURITY DEFINER olarak oluşturun ve fonksiyon sahibinin users tablosunda gerekli yetkileri olduğundan emin olun.';
    }
    if (message.includes('permission denied for schema public')) {
        return 'Veritabanı izin hatası: public schema erişimi yok.';
    }
    if (message.includes('users_company_id_fkey')) {
        return 'Geçersiz company_id: users kaydı için companies tablosunda karşılık gelen şirket bulunamadı.';
    }
    return message;
}
async function POST(request) {
    try {
        const supabaseUrl = ("TURBOPACK compile-time value", "https://gskjyujftydpejhrvubb.supabase.co");
        const serviceRoleKey = getServiceRoleKey();
        if (!supabaseUrl || !serviceRoleKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Sunucu Supabase yapılandırması eksik. NEXT_PUBLIC_SUPABASE_URL ve SERVICE_ROLE_KEY gerekli.'
            }, {
                status: 500
            });
        }
        const payload = await request.json();
        const rpcName = getRpcName(payload);
        if (!payload.action || !payload.application_id || !rpcName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Geçersiz istek verisi'
            }, {
                status: 400
            });
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, serviceRoleKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        });
        const args = {
            application_id: payload.application_id
        };
        if (payload.action === 'approve') {
            if (!payload.admin_user_id) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Onay için eksik parametre'
                }, {
                    status: 400
                });
            }
            const { companyId, error: companyResolveError } = await resolveCompanyId(supabase, payload.company_id_param);
            if (!companyId) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: companyResolveError || 'Geçerli şirket bulunamadı'
                }, {
                    status: 400
                });
            }
            args.admin_user_id = payload.admin_user_id;
            args.company_id_param = companyId;
        } else if (payload.action === 'reject') {
            if (!payload.admin_user_id) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Red için admin bilgisi gerekli'
                }, {
                    status: 400
                });
            }
            args.admin_user_id = payload.admin_user_id;
            args.reason = payload.reason ?? null;
        }
        const { data, error } = await supabase.rpc(rpcName, args);
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: mapActionError(error.message || 'İşlem başarısız')
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data ?? {
            success: true
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : 'Beklenmeyen hata'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6bed834e._.js.map