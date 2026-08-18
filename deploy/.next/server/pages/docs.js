(()=>{var e={};e.id=3172,e.ids=[3172,2888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},6631:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.r(t),a.d(t,{config:()=>f,default:()=>u,getServerSideProps:()=>y,getStaticPaths:()=>p,getStaticProps:()=>m,reportWebVitals:()=>g,routeModule:()=>w,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>h,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>b});var r=a(7093),s=a(5244),n=a(1323),c=a(5949),o=a(3414),l=a(333),d=e([o]);o=(d.then?(await d)():d)[0];let u=(0,n.l)(l,"default"),m=(0,n.l)(l,"getStaticProps"),p=(0,n.l)(l,"getStaticPaths"),y=(0,n.l)(l,"getServerSideProps"),f=(0,n.l)(l,"config"),g=(0,n.l)(l,"reportWebVitals"),b=(0,n.l)(l,"unstable_getStaticProps"),_=(0,n.l)(l,"unstable_getStaticPaths"),h=(0,n.l)(l,"unstable_getStaticParams"),x=(0,n.l)(l,"unstable_getServerProps"),S=(0,n.l)(l,"unstable_getServerSideProps"),w=new r.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/docs",pathname:"/docs",bundlePath:"",filename:""},components:{App:o.default,Document:c.default},userland:l});i()}catch(e){i(e)}})},5193:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.d(t,{Z:()=>o});var r=a(997),s=a(3936);a(6689);var n=a(3291);a(1163);var c=e([n]);n=(c.then?(await c)():c)[0];let o=function(){let e=(0,n.useSelector)(e=>e.setting);return(0,n.useDispatch)(),r.jsx("div",{className:(0,s.Z)("full-center fixed top-0 left-0 w-full h-full backdrop-blur-sm z-[100000] transition-medium bg-white/80 dark:bg-[#0C0C0C]/85",e.loading?"pointer-events-auto opacity-1":"pointer-events-none select-none opacity-0"),children:r.jsx("img",{src:"/favi.webp",alt:"",className:"w-14 h-14 animate-logo-pulse motion-reduce:animate-none"})})};i()}catch(e){i(e)}})},8174:(e,t,a)=>{"use strict";a.d(t,{Df:()=>s,P0:()=>r,gL:()=>i});let i=[{category:"موجودی",items:[{slug:"balance",title:"دریافت موجودی",method:"GET",path:"/api/gateway/balance",auth:!0,description:"موجودی و کارمزد حساب شما را به تفکیک ارز و شبکه برمی‌گرداند.",params:[],curl:`curl -X GET "{BASE_URL}/api/gateway/balance" \\
  -H "Authorization: Bearer {api_key}"`,responses:[{label:"موفق",status:200,body:`[
    {
        "currency": "DAI",
        "network": "ETH",
        "balance": "0",
        "commission": null
    }
]`},{label:"خطا",status:400,body:`{
    "status": -1,
    "errors": [
        "وارد کردن فیلد api key الزامی است."
    ]
}`}]}]},{category:"درگاه پرداخت",items:[{slug:"create-invoice",title:"ایجاد فاکتور پرداخت",method:"POST",path:"/api/gateway/create-invoice",auth:!0,description:"یک فاکتور پرداخت جدید برای مشتری شما ایجاد می‌کند و لینک صفحه پرداخت را برمی‌گرداند تا مشتری با ارز دیجیتال دلخواه خود آن را تسویه کند.",params:[{name:"amount",required:!0,type:"number",description:"مبلغ فاکتور، بر اساس واحد مشخص‌شده در to_currency."},{name:"order_id",required:!0,type:"string",description:"شناسه سفارش در سیستم شما، برای پیگیری این تراکنش."},{name:"to_currency",required:!1,type:"string",description:"واحد مبلغ amount. مقادیر مجاز: IRT، IRR، ROB، USD، AED، EUR، TRY، GBP، CNY، INR، PKR — پیش‌فرض USD."},{name:"currency",required:!1,type:"string",description:"برای محدود کردن پرداخت به یک ارز دیجیتال مشخص (مثلاً USDT)."},{name:"network",required:!1,type:"string",description:"شبکه بلاکچین مشخص برای دریافت پرداخت، همراه با currency."},{name:"lifetime",required:!1,type:"number",description:"مدت اعتبار فاکتور بر حسب دقیقه."},{name:"status_callback",required:!1,type:"url",description:"مشتری پس از اتمام تراکنش با متد GET به این آدرس هدایت می‌شود."},{name:"success_callback",required:!1,type:"url",description:"پس از پرداخت موفق، اطلاعات تراکنش با متد POST به این آدرس ارسال می‌شود."},{name:"fail_callback",required:!1,type:"url",description:"در صورت شکست پرداخت، با متد POST فراخوانی می‌شود."},{name:"description",required:!1,type:"string",description:"توضیح دلخواه شما برای این تراکنش."}],curl:`curl -X POST "{BASE_URL}/api/gateway/create-invoice" \\
  -H "Authorization: Bearer {api_key}" \\
  -F "amount=200000" \\
  -F "order_id=2" \\
  -F "to_currency=irt" \\
  -F "lifetime=20" \\
  -F "description=Transaction Number 2"`,responses:[{label:"موفق",status:200,body:`{
    "status": 1,
    "uuid": "a13f908c-5422-4b14-a832-1bed6ae6da7f",
    "id": 1094,
    "data": null,
    "url": "{BASE_URL}/api/gateway/pay-invoice/a13f908c-5422-4b14-a832-1bed6ae6da7f"
}`},{label:"خطا",status:400,body:`{
    "status": -1,
    "errors": [
        "وارد کردن فیلد api key الزامی است."
    ]
}`}]}]},{category:"پرداخت‌ها",items:[{slug:"payment-list",title:"لیست پرداخت‌ها",method:"POST",path:"/api/gateway/payment-list",auth:!0,description:"فهرست فاکتورهای پرداخت ثبت‌شده در درگاه شما را برمی‌گرداند.",params:[],curl:`curl -X POST "{BASE_URL}/api/gateway/payment-list" \\
  -H "Authorization: Bearer {api_key}"`,responses:[{label:"پاسخ",status:200,note:"پاسخ آرایه‌ای از فاکتورهای پرداخت است؛ ساختار هر آیتم مشابه پاسخ \xabجزئیات یک پرداخت\xbb است."}]},{slug:"payment-detail",title:"جزئیات یک پرداخت",method:"POST",path:"/api/gateway/payment-detail",auth:!0,description:"اطلاعات و وضعیت لحظه‌ای یک فاکتور پرداخت مشخص را برمی‌گرداند.",params:[{name:"uuid",required:!0,type:"string",in:"query",description:"شناسه یکتای فاکتور، دریافت‌شده از پاسخ ایجاد فاکتور."}],curl:`curl -X POST "{BASE_URL}/api/gateway/payment-detail?uuid=c0070f29-2bc1-4ed9-9acb-4a8e2661bd19" \\
  -H "Authorization: Bearer {api_key}"`,responses:[{label:"پاسخ",status:200,note:"ساختار پاسخ مشابه بدنه‌ای است که در وب‌هوک‌های وضعیت پرداخت ارسال می‌شود (نگاه کنید به بخش کال‌بک‌ها):",body:`{
    "type": "factor-payment",
    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",
    "status": "paid",
    "final": true,
    "order_id": "2",
    "client": {
        "email": null,
        "paid_amount_crypto": "0.54748715",
        "crypto_currency": "GRAM",
        "crypto_network": "ton",
        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",
        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"
    },
    "commission": {
        "merchant_amount": 0.5255877,
        "commission_amount": 0.0218995,
        "commission_percent": 4
    },
    "fiat": {
        "amount": "1.00",
        "currency": "usd"
    }
}`}]}]},{category:"کال‌بک‌ها",items:[{slug:"callbacks",title:"وب‌هوک‌های وضعیت پرداخت",method:"POST",path:"success_callback / fail_callback",auth:!1,description:"با تنظیم success_callback و fail_callback هنگام ایجاد فاکتور، رمزینو به‌محض تغییر وضعیت تراکنش، بدنه‌ای مشابه نمونه‌های زیر را با متد POST به آدرس شما ارسال می‌کند. status_callback نیز مشابه است، با این تفاوت که مشتری با متد GET به آن آدرس هدایت می‌شود. وضعیت‌های دیگری مانند underpaid و expired نیز ممکن است ارسال شوند.",params:[],curl:null,responses:[{label:"پرداخت شده (paid)",status:200,body:`{
    "type": "factor-payment",
    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",
    "status": "paid",
    "final": true,
    "order_id": "2",
    "client": {
        "email": null,
        "paid_amount_crypto": "0.54748715",
        "crypto_currency": "GRAM",
        "crypto_network": "ton",
        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",
        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"
    },
    "commission": {
        "merchant_amount": 0.5255877,
        "commission_amount": 0.0218995,
        "commission_percent": 4
    },
    "fiat": {
        "amount": "1.00",
        "currency": "usd"
    }
}`},{label:"بیش‌پرداخت (over-paid)",status:200,body:`{
    "type": "factor-payment",
    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",
    "status": "over-paid",
    "final": true,
    "order_id": "2",
    "client": {
        "email": null,
        "paid_amount_crypto": "0.54748715",
        "crypto_currency": "GRAM",
        "crypto_network": "ton",
        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",
        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"
    },
    "commission": {
        "merchant_amount": 0.5255877,
        "commission_amount": 0.0218995,
        "commission_percent": 4
    },
    "fiat": {
        "amount": "1.00",
        "currency": "usd"
    }
}`},{label:"در انتظار (pending)",status:200,body:`{
    "type": "factor-payment",
    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",
    "status": "pending",
    "final": false,
    "order_id": "2",
    "client": {
        "email": null,
        "paid_amount_crypto": "0.54748715",
        "crypto_currency": "GRAM",
        "crypto_network": "ton",
        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",
        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"
    },
    "commission": {
        "merchant_amount": 0.5255877,
        "commission_amount": 0.0218995,
        "commission_percent": 4
    },
    "fiat": {
        "amount": "1.00",
        "currency": "usd"
    }
}`},{label:"لغو شده (cancelled)",status:200,body:`{
    "type": "factor-payment",
    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",
    "status": "cancelled",
    "final": false,
    "order_id": "2",
    "client": {
        "email": null,
        "paid_amount_crypto": "0.54748715",
        "crypto_currency": "GRAM",
        "crypto_network": "ton",
        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",
        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"
    },
    "commission": {
        "merchant_amount": 0.5255877,
        "commission_amount": 0.0218995,
        "commission_percent": 4
    },
    "fiat": {
        "amount": "1.00",
        "currency": "usd"
    }
}`}]}]},{category:"ارزها",items:[{slug:"currencies",title:"لیست ارزهای پشتیبانی‌شده",method:"GET",path:"/api/gateway/currencies",auth:!1,description:"لیست بیش از ۱۵۰ ارز دیجیتال و شبکه پشتیبانی‌شده، به همراه حداقل/حداکثر مبلغ فاکتور و قیمت لحظه‌ای هرکدام. این مسیر نیازی به احراز هویت ندارد.",params:[],curl:'curl -X GET "{BASE_URL}/api/gateway/currencies"',responses:[{label:"موفق (نمونه، از میان ۱۵۰+ مورد)",status:200,body:`[
    {
        "name": "BTC",
        "network": "BTC",
        "min": 0.00002,
        "max": 100,
        "price": 65377.46304,
        "img": "{BASE_URL}/images/crypto/BTC.svg"
    },
    {
        "name": "ETH",
        "network": "ETH",
        "min": 0.001,
        "max": 1000,
        "price": 1909.94246,
        "img": "{BASE_URL}/images/crypto/ETH.svg"
    },
    {
        "name": "USDT",
        "network": "TRON",
        "min": 1,
        "max": 1000000,
        "price": 1,
        "img": "{BASE_URL}/images/crypto/USDT.svg"
    },
    {
        "name": "BNB",
        "network": "BSC",
        "min": 0.005,
        "max": 1000000,
        "price": 601.47464,
        "img": "{BASE_URL}/images/crypto/BNB.svg"
    },
    {
        "name": "TON",
        "network": "TON",
        "min": 0.1,
        "max": 1000000,
        "price": 1.293408,
        "img": "{BASE_URL}/images/crypto/TON.svg"
    }
]`}]}]}],r=i.flatMap(e=>e.items.map(t=>({...t,category:e.category}))),s=e=>r.find(t=>t.slug===e)},3936:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});let i=function(...e){return e.filter(Boolean).join(" ")}},4012:(e,t,a)=>{"use strict";a.d(t,{Au:()=>s,ZP:()=>n,qH:()=>r});var i=a(1163);a(6689);let r=()=>{},s=()=>{let e=document.querySelectorAll(".fade-in"),t=window.innerHeight/5*4;e.forEach(e=>{e.getBoundingClientRect().top<t+150&&(e.dataset.animation="active")})};function n(){let{pathname:e}=(0,i.useRouter)();return null}},3414:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.r(t),a.d(t,{default:()=>_});var r=a(997),s=a(3532),n=a.n(s),c=a(9816),o=a.n(c);a(8722),a(2996),a(9176);var l=a(4012),d=a(968),u=a.n(d),m=a(3291),p=a(7442),y=a(5193);a(8819);var f=a(3590);a(6764),a(9239);var g=a(5941);a(6689);var b=e([m,p,y,f,g]);[m,p,y,f,g]=b.then?(await b)():b;let _=function(e){let{Component:t,pageProps:a}=e;return(0,l.ZP)(),(0,r.jsxs)(r.Fragment,{children:[r.jsx(g.SWRConfig,{value:{revalidateOnFocus:!1},children:(0,r.jsxs)(m.Provider,{store:p.Z,children:[r.jsx(y.Z,{}),r.jsx(t,{...a,className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])+" "+(a&&null!=a.className&&a.className||"")})]})}),r.jsx(f.ToastContainer,{style:{fontFamily:`${n().style.fontFamily} !important`,direction:"rtl",fontWeight:500},rtl:!0,progressClassName:"toastify-progress",toastClassName:"toast_card"}),(0,r.jsxs)(u(),{children:[r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{property:"og:locale",content:"fa_IR",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{property:"og:type",content:"website",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{property:"og:site_name",content:"Ramzino",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{property:"og:image:width",content:"2000",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{property:"og:image:height",content:"2000",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{name:"robots",content:"noindex",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"icon",href:"/favicon.ico",sizes:"any",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"icon",type:"image/x-icon",href:"/images/favi.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/icons/192.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"512x512",href:"/icons/512.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"manifest",href:"/manifest.json",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"mask-icon",href:"/icons/70.svg",color:"#1c1c1c",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("meta",{name:"msapplication-config",content:"/browserconfig.xml",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/120.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/152.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"apple-touch-icon",sizes:"167x167",href:"/icons/167.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])}),r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/180.webp",className:o().dynamic([["a4d6d5a1619f98e",[n().style.fontFamily]]])})]}),r.jsx(o(),{id:"a4d6d5a1619f98e",dynamic:[n().style.fontFamily],children:`:root{--font-yekan:${n().style.fontFamily}}`})]})};i()}catch(e){i(e)}})},5949:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var i=a(997),r=a(6859),s=a.n(r);class n extends s(){render(){return(0,i.jsxs)(r.Html,{lang:"fa-IR",children:[i.jsx(r.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}}let c=n},333:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r,getServerSideProps:()=>s});var i=a(8174);function r(){return null}let s=async()=>({redirect:{destination:`/docs/${i.P0[0].slug}`,permanent:!1}})},7173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var i=a(1698);let r={openModalAvatars:!1,userData:null,authentication:null},s=(e=r,t)=>{switch(t.type){case i.xv:return{...e,openModalAvatars:t.payload};case i.RT:return{...e,userData:t.payload};case i.G9:return{...e,authentication:t.payload};default:return e}}},1698:(e,t,a)=>{"use strict";a.d(t,{G9:()=>s,RT:()=>r,xv:()=>i});let i="OPEN_MODAL_AVATARS",r="SET_USER_DATA",s="SET_DATA_AUTHENTICATION"},2923:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var i=a(6227);let r={loading:!1},s=(e=r,t)=>{switch(t.type){case i.s:return{...e,loading:!0};case i.c:return{...e,loading:!1};default:return e}}},6227:(e,t,a)=>{"use strict";a.d(t,{c:()=>r,s:()=>i});let i="START_LOADING",r="END_LOADING"},7323:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.d(t,{Z:()=>o});var r=a(9871),s=a(7173),n=a(2923),c=e([r]);r=(c.then?(await c)():c)[0];let o=(0,r.combineReducers)({profile:s.Z,setting:n.Z});i()}catch(e){i(e)}})},7442:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.d(t,{Z:()=>c});var r=a(3258),s=a(7323),n=e([r,s]);[r,s]=n.then?(await n)():n;let c=(0,r.configureStore)({reducer:s.Z});i()}catch(e){i(e)}})},9239:()=>{},6764:()=>{},5244:(e,t)=>{"use strict";var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9816:e=>{"use strict";e.exports=require("styled-jsx/style")},3258:e=>{"use strict";e.exports=import("@reduxjs/toolkit")},3291:e=>{"use strict";e.exports=import("react-redux")},3590:e=>{"use strict";e.exports=import("react-toastify")},9871:e=>{"use strict";e.exports=import("redux")},5941:e=>{"use strict";e.exports=import("swr")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[4567,8677,6859],()=>a(6631));module.exports=i})();