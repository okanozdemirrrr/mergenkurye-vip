(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75254,e=>{"use strict";var t=e.i(71645);let s=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim(),i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let r=(0,t.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:n="",children:o,iconNode:d,...c},u)=>(0,t.createElement)("svg",{ref:u,...a,width:i,height:i,stroke:e,strokeWidth:l?24*Number(r)/Number(i):r,className:s("lucide",n),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,s])=>(0,t.createElement)(e,s)),...Array.isArray(o)?o:[o]])),l=(e,a)=>{let l=(0,t.forwardRef)(({className:l,...n},o)=>(0,t.createElement)(r,{ref:o,iconNode:a,className:s(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...n}));return l.displayName=i(e),l};e.s(["default",()=>l],75254)},72499,e=>{"use strict";let t;var s=e.i(43476),i=e.i(71645),a=e.i(75254);let r=(0,a.default)("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]),l=(0,a.default)("minimize-2",[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]);var n=e.i(17388),o=e.i(70703);let d=(0,o.default)(()=>e.A(52169).then(e=>e.MapContainer),{loadableGenerated:{modules:[94970]},ssr:!1}),c=(0,o.default)(()=>e.A(52169).then(e=>e.TileLayer),{loadableGenerated:{modules:[94970]},ssr:!1}),u=(0,o.default)(()=>e.A(52169).then(e=>e.Marker),{loadableGenerated:{modules:[94970]},ssr:!1}),h=(0,o.default)(()=>e.A(52169).then(e=>e.Popup),{loadableGenerated:{modules:[94970]},ssr:!1}),p=(0,o.default)(()=>e.A(52169).then(e=>e.Tooltip),{loadableGenerated:{modules:[94970]},ssr:!1}),m=(0,o.default)(()=>e.A(27436).then(e=>({default:e.MapUpdater})),{loadableGenerated:{modules:[6158]},ssr:!1});function x({packages:a,couriers:o,restaurants:x,onRefresh:g,onLiveCouriersChange:f}){let[v,b]=(0,i.useState)(!1),[y,j]=(0,i.useState)(!1),[w]=(0,i.useState)([41.494714153011856,36.07827997146362]),[k,N]=(0,i.useState)([]),[A,_]=(0,i.useState)(x||[]),[z,S]=(0,i.useState)(o||[]),[C,M]=(0,i.useState)({}),$=(0,i.useRef)(null),T="courier-live-locations";(0,i.useEffect)(()=>{!async function(){try{let{data:e,error:t}=await n.supabase.from("restaurants").select("id, name, latitude, longitude, phone, address");t?console.error("Supabase restaurants query error:",t):e&&_(e)}catch(e){console.error("Error fetching restaurants:",e)}}()},[]),(0,i.useEffect)(()=>{!async function(){try{let{data:e,error:t}=await n.supabase.from("couriers").select("*").eq("is_active",!0);if(t){console.error("SUPABASE HATASI DETAYI:",JSON.stringify(t,null,2)),console.error("Tablo İsmi Kontrolü:","couriers");return}e&&S(e)}catch(e){console.error("Error fetching active couriers:",e)}}()},[]),(0,i.useEffect)(()=>{o&&o.length>0&&S(o)},[o]),(0,i.useEffect)(()=>{let e=n.supabase.channel(T,{config:{broadcast:{ack:!1}}});return e.on("broadcast",{event:"location"},e=>{console.log("📡 Canlı konum yayını alındı:",e);let{courierId:t,courierName:s,latitude:i,longitude:a,accuracy:r,timestamp:l}=e.payload;M(e=>({...e,[t]:{courierId:t,courierName:s,latitude:i,longitude:a,accuracy:r,timestamp:l,lastSeenMs:Date.now()}})),S(e=>e.some(e=>e.id===t)?e.map(e=>e.id===t?{...e,last_location:{latitude:i,longitude:a,updated_at:l}}:e):[...e,{id:t,full_name:s,is_active:!0,last_location:{latitude:i,longitude:a,updated_at:l}}])}).subscribe(e=>{console.log(`📡 Broadcast kanal abonelik durumu (${T}):`,e)}),$.current=e,()=>{console.log("🔌 Harita aboneliği kapatılıyor..."),n.supabase.removeChannel(e)}},[]);let E=z.filter(e=>!!C[e.id]||!!(e.last_location?.latitude&&e.last_location?.longitude&&e.is_active));if((0,i.useEffect)(()=>{f&&f(E.length)},[E.length,f]),(0,i.useEffect)(()=>{b(!0);{let e=document.createElement("link");e.rel="stylesheet",e.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",e.integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=",e.crossOrigin="",document.head.appendChild(e)}},[]),!v)return(0,s.jsx)("div",{className:"h-full flex items-center justify-center bg-slate-800 rounded-xl text-slate-400",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"animate-spin text-3xl mb-2",children:"🗺️"}),(0,s.jsx)("div",{className:"text-sm",children:"Harita yükleniyor..."})]})});let I=a.filter(e=>e.latitude&&e.longitude&&"delivered"!==e.status&&"cancelled"!==e.status),B=A.filter(e=>e.latitude&&e.longitude);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:`${y?"fixed inset-0 z-50 bg-slate-950 p-4":"relative w-full h-full"}`,children:(0,s.jsxs)("div",{className:"relative w-full h-full rounded-xl overflow-hidden border border-slate-700",children:[(0,s.jsx)("button",{onClick:()=>j(!y),className:"absolute top-4 right-4 z-[1000] bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg shadow-lg transition-colors",title:y?"Küçült":"Büyüt",children:y?(0,s.jsx)(l,{size:20}):(0,s.jsx)(r,{size:20})}),(0,s.jsx)("button",{onClick:async()=>{console.log("🧹 Manuel harita temizliği başlatıldı"),N([]);let t=new Date;t.setHours(t.getHours()-24);let{supabase:s}=await e.A(61144),{data:i,error:a}=await s.from("packages").select("latitude, longitude, created_at, status").gte("created_at",t.toISOString()).not("status","in",'("delivered","cancelled")');if(!a&&i){let e=i.filter(e=>e.latitude&&e.longitude).map(e=>({lat:e.latitude,lng:e.longitude}));setTimeout(()=>{N(e),console.log("✅ Manuel temizlik tamamlandı, nokta sayısı:",e.length)},100)}g&&g()},className:"absolute top-4 right-16 z-[1000] bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg shadow-lg transition-colors text-sm font-medium",title:"Haritayı Yenile",children:"🧹 Temizle"}),(0,s.jsxs)(d,{center:w,zoom:15,style:{height:"100%",width:"100%"},zoomControl:!0,children:[(0,s.jsx)(m,{center:w}),(0,s.jsx)(c,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'}),B.map(e=>{if(!e)return null;let i=a.filter(t=>t.restaurant_id===e.id&&"delivered"!==t.status&&"cancelled"!==t.status);return(0,s.jsx)(u,{position:[e.latitude,e.longitude],icon:(e.name,t.divIcon({html:`
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
      `,className:"",iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]})),children:(0,s.jsx)(h,{children:(0,s.jsxs)("div",{className:"text-sm",children:[(0,s.jsxs)("div",{className:"font-bold text-orange-600",children:["🍽️ ",e.name]}),(0,s.jsxs)("div",{className:"text-xs mt-1",children:[e.phone&&(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Telefon:"})," ",e.phone]}),e.address&&(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Adres:"})," ",e.address]}),(0,s.jsxs)("div",{className:"mt-1",children:[(0,s.jsx)("strong",{children:"Aktif Siparişler:"})," ",i.length]}),i.length>0&&(0,s.jsx)("div",{className:"mt-1 space-y-1",children:i.map(e=>(0,s.jsxs)("div",{className:"text-[10px] bg-slate-100 p-1 rounded",children:["📦 ",e.order_number||`#${e.id}`," - ","waiting"===e.status?"⏳ Bekliyor":"assigned"===e.status?"👤 Atandı":"picking_up"===e.status?"🏃 Alınıyor":"on_the_way"===e.status?"🚗 Yolda":e.status]},e.id))})]})]})})},`restaurant-${e.id}`)}),I.map(e=>(0,s.jsx)(u,{position:[e.latitude,e.longitude],icon:e.courier_id?t.divIcon({html:`
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
      `,className:"",iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}):t.divIcon({html:`
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
        `,className:"",iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]}),children:(0,s.jsx)(h,{children:(0,s.jsxs)("div",{className:"text-sm",children:[(0,s.jsxs)("div",{className:"font-bold text-orange-600",children:["📦 ",e.order_number||`#${e.id}`]}),(0,s.jsxs)("div",{className:"text-xs mt-1",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Restoran:"})," ",e.restaurant?.name||"Bilinmiyor"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Müşteri:"})," ",e.customer_name]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Adres:"})," ",e.delivery_address]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Tutar:"})," ",e.amount,"₺"]}),(0,s.jsxs)("div",{className:"mt-1",children:[(0,s.jsx)("strong",{children:"Durum:"})," ",e.courier_id?"🟢 ATANMIŞ":"🔴 SAHİPSİZ"]})]})]})})},`pkg-${e.id}`)),E.map(e=>{let i,r,l,n=a.filter(t=>t.courier_id===e.id&&"delivered"!==t.status&&"cancelled"!==t.status),o=C[e.id],d=o?.latitude??e.last_location?.latitude,c=o?.longitude??e.last_location?.longitude,m=!!o,x=o?Math.round((Date.now()-(o.lastSeenMs??0))/1e3):null;return(0,s.jsxs)(u,{position:[d,c],icon:(i=a.filter(t=>t.courier_id===e.id&&"delivered"!==t.status&&"cancelled"!==t.status),r="#22c55e",i.length>0&&(i.some(e=>"picking_up"===e.status||"on_the_way"===e.status)?r="#ef4444":i.some(e=>"assigned"===e.status)&&(r="#eab308")),l=e.full_name?.split(" ")[0]||"Kurye",t.divIcon({html:`
        <div style="display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <div style="
            background: ${r};
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 3px solid ${r};
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
          ">${l}</div>
        </div>
      `,className:"",iconSize:[32,45],iconAnchor:[16,22],popupAnchor:[0,-22]})),children:[(0,s.jsx)(p,{direction:"top",offset:[0,-20],opacity:.9,children:(0,s.jsx)("span",{className:"font-semibold text-xs",children:e.full_name})}),(0,s.jsx)(h,{children:(0,s.jsxs)("div",{className:"text-sm",children:[(0,s.jsxs)("div",{className:"font-bold text-orange-600",children:["🏍️ ",e.full_name]}),(0,s.jsxs)("div",{className:"text-xs mt-1",children:[(0,s.jsx)("div",{className:`font-semibold mb-1 ${m?"text-green-600":"text-gray-500"}`,children:m?`📡 CANLI (${x}s \xf6nce)`:"⚠️ SON KONUM (DB)"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Durum:"})," ",e.is_active?"✅ Aktif":"❌ Pasif"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Telefon:"})," ",e.phone||"-"]}),(0,s.jsxs)("div",{className:"mt-1",children:[(0,s.jsx)("strong",{children:"Üzerindeki Paketler:"})," ",n.length]}),n.length>0&&(0,s.jsx)("div",{className:"mt-1 space-y-1",children:n.map(e=>(0,s.jsxs)("div",{className:"text-[10px] bg-slate-100 p-1 rounded",children:["📦 ",e.order_number||`#${e.id}`," - ","assigned"===e.status?"⏳ Atandı":"picking_up"===e.status?"🏃 Alıyor":"on_the_way"===e.status?"🚗 Yolda":e.status]},e.id))})]})]})})]},`courier-${e.id}`)}),k.map((e,i)=>{let a=t.divIcon({html:`
                  <div style="
                    width: 8px;
                    height: 8px;
                    background: #ef4444;
                    border-radius: 50%;
                    opacity: 0.7;
                    pointer-events: none;
                    box-shadow: 0 0 4px rgba(239, 68, 68, 0.5);
                  "></div>
                `,className:"",iconSize:[8,8],iconAnchor:[4,4]});return(0,s.jsx)(u,{position:[e.lat,e.lng],icon:a,interactive:!1},`heatmap-${i}`)})]})]})})})}t=e.r(32322),e.s(["LiveMapComponent",()=>x],72499)},84759,e=>{e.n(e.i(72499))},52169,e=>{e.v(t=>Promise.all(["static/chunks/374deb93b1e6b138.js"].map(t=>e.l(t))).then(()=>t(94970)))},27436,e=>{e.v(t=>Promise.all(["static/chunks/9676ff8cd336643c.js"].map(t=>e.l(t))).then(()=>t(6158)))},61144,e=>{e.v(e=>Promise.resolve().then(()=>e(17388)))}]);