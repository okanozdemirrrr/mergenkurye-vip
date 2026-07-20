module.exports = [
"[project]/node_modules/@capacitor/app/dist/esm/web.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_@capacitor_app_dist_esm_web_42eccd87.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/@capacitor/app/dist/esm/web.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/node_modules/@capacitor/preferences/dist/esm/web.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_@capacitor_preferences_dist_esm_web_fbdb5478.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/@capacitor/preferences/dist/esm/web.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/src/utils/courierLedger.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/src/utils/courierLedger.ts [app-ssr] (ecmascript)");
    });
});
}),
];