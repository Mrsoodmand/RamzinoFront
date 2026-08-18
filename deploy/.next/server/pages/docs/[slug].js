"use strict";(()=>{var e={};e.id=3939,e.ids=[3939],e.modules={7106:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>f,default:()=>m,getServerSideProps:()=>u,getStaticPaths:()=>x,getStaticProps:()=>p,reportWebVitals:()=>b,routeModule:()=>_,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>k,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>g});var r=a(7093),i=a(5244),c=a(1323),l=a(5949),n=a(3414),o=a(3521),d=e([n,o]);[n,o]=d.then?(await d)():d;let m=(0,c.l)(o,"default"),p=(0,c.l)(o,"getStaticProps"),x=(0,c.l)(o,"getStaticPaths"),u=(0,c.l)(o,"getServerSideProps"),f=(0,c.l)(o,"config"),b=(0,c.l)(o,"reportWebVitals"),g=(0,c.l)(o,"unstable_getStaticProps"),h=(0,c.l)(o,"unstable_getStaticPaths"),y=(0,c.l)(o,"unstable_getStaticParams"),j=(0,c.l)(o,"unstable_getServerProps"),k=(0,c.l)(o,"unstable_getServerSideProps"),_=new r.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/docs/[slug]",pathname:"/docs/[slug]",bundlePath:"",filename:""},components:{App:n.default,Document:l.default},userland:o});s()}catch(e){s(e)}})},52:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(997),r=a(3936),i=a(5152),c=a.n(i),l=a(1664),n=a.n(l),o=a(6689);let d=c()(()=>a.e(2865).then(a.bind(a,2865)),{loadableGenerated:{modules:["components/common/Breadcrumb/index.jsx -> icons/Layout/IconLeft.svg"]},ssr:!1}),m=function({list:e}){return(0,s.jsxs)("div",{className:"center gap-1 sm:gap-1.5 container mt-3 md:mt-10 overflow-auto none-scroll fade-in",children:[s.jsx(n(),{href:"/",className:"min-w-fit center gap-1.5 sm:gap-[9px] text-[#43464C] dark:text-[#CDCDCD] font-semibold text-xs sm:text-sm  ",children:"رمزینو"}),e?.map((t,a)=>s.jsxs(o.Fragment,{children:[s.jsx(d,{className:"scale-75 sm:scale-90 md:scale-100 min-w-fit dark:[&>path]:stroke-[#FAFAFA]"}),a==e.length-1?s.jsx("span",{className:r.Z((e?.length,""),"min-w-fit text-[#43464C] dark:text-[#F2F2F2] font-semibold text-xs sm:text-sm hover:opacity-80"),children:t?.text}):s.jsx(n(),{href:t?.href,className:r.Z((e?.length,""),"min-w-fit text-[#43464C] dark:text-[#F2F2F2] font-semibold text-xs sm:text-sm hover:opacity-80"),children:t?.text})]},a))]})}},4510:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(997),r=a(968),i=a.n(r);let c=function({data:e}){return e?.metaTitle?(0,s.jsxs)(i(),{children:[s.jsx("title",{children:e.metaTitle}),s.jsx("meta",{name:"description",property:"description",content:e.metaDescription})]}):null}},8174:(e,t,a)=>{a.d(t,{Df:()=>i,P0:()=>r,gL:()=>s});let s=[{category:"موجودی",items:[{slug:"balance",title:"دریافت موجودی",method:"GET",path:"/api/gateway/balance",auth:!0,description:"موجودی و کارمزد حساب شما را به تفکیک ارز و شبکه برمی‌گرداند.",params:[],curl:`curl -X GET "{BASE_URL}/api/gateway/balance" \\
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
]`}]}]}],r=s.flatMap(e=>e.items.map(t=>({...t,category:e.category}))),i=e=>r.find(t=>t.slug===e)},3878:(e,t,a)=>{a.d(t,{Z:()=>b});var s=a(997),r=a(5152),i=a.n(r),c=a(3936),l=a(1664),n=a.n(l),o=a(6689),d=a(8174);let m=i()(()=>Promise.resolve().then(a.bind(a,2312)),{loadableGenerated:{modules:["components/view/Doc/Sidebar/index.jsx -> icons/Layout/IconSearch.svg"]},ssr:!1}),p=function({activeSlug:e}){let[t,a]=(0,o.useState)(""),[r,i]=(0,o.useState)([]),l=(0,o.useMemo)(()=>{let e=t.trim();return e?d.gL.map(t=>({...t,items:t.items.filter(t=>t.title.includes(e))})).filter(e=>e.items.length):d.gL},[t]);return(0,s.jsxs)("div",{className:"bg-white h-svh lg:h-[96vh] -mb-20 overflow-auto none-scroll py-10",children:[s.jsx("div",{className:"max-w-[290px] mx-auto",children:(0,s.jsxs)("div",{className:"center bg-[#F5F5F6] dark:bg-[#02151B] rounded-lg w-full h-[51px] sm:h-[57px] px-3 sm:px-4 mb-6 sm:mb-[33px] z-50",children:[s.jsx("input",{value:t,onChange:e=>a(e.target.value),placeholder:"جستجو در مستندات API",className:"h-full w-full bg-[#fff] bg-opacity-0 border-none outline-none font-semibold text-xs sm:text-sm text-[#373A41] placeholder:text-[#373A41] dark:text-[#f5f5f5] dark:font-medium dark:placeholder:text-[#f5f5f5]"}),s.jsx(m,{className:"dark:[&>path]:stroke-[#f5f5f5] scale-90 sm:scale-100"})]})}),s.jsx("div",{className:"max-w-[290px] mx-auto",children:s.jsx("ul",{children:l?.map((t,a)=>{let l=r.includes(t.category);return s.jsxs("li",{className:"text-[#373A41] dark:text-[#f5f5f5] dark:font-medium font-semibold text-sm sm:text-base mb-5 sm:mb-7 last:mb-0 cursor-pointer",onClick:()=>i(e=>l?e.filter(e=>e!==t.category):[...e,t.category]),children:[t.category,s.jsx("ul",{className:c.Z("flex flex-col gap-[14px] overflow-hidden",l?"max-h-0":"mt-[14px] max-h-screen"),children:t.items?.map(t=>s.jsx("li",{children:s.jsxs(n(),{href:`/docs/${t.slug}`,className:c.Z("text-[13px] sm:text-sm gap-[7px] center group hover:opacity-80",t.slug===e?"text-[#003E52] dark:text-primary font-semibold":"text-[#373A41] dark:text-[#f5f5f5]"),children:[s.jsx("i",{className:c.Z("w-[14px] h-[2px] block group-hover:w-[20px]",t.slug===e?"bg-primary":"bg-[#B1B1B1] dark:bg-[#ccccccd3]")}),t.title]})},t.slug))})]},t.category)})})})]})},x=i()(()=>Promise.resolve().then(a.bind(a,7386)),{loadableGenerated:{modules:["components/view/Doc/index.jsx -> icons/Layout/IconArrowBottom.svg"]},ssr:!1}),u="https://ramzino.me";function f({children:e}){return s.jsx("pre",{dir:"ltr",className:"mt-3 bg-[#052C29] px-5 py-5 text-[#EDEDED] text-xs sm:text-[13px] font-mono overflow-auto whitespace-pre-wrap break-all rounded-[5px]",children:e})}let b=function({doc:e}){let[t,a]=(0,o.useState)(!1);if(!e)return s.jsx("main",{className:"p-10 text-title",children:"مستندی با این آدرس پیدا نشد."});let r=e.curl?.replaceAll("{BASE_URL}",u);return(0,s.jsxs)("main",{className:"container relative flex justify-between flex-col 2md:flex-row 2md:items-start",children:[s.jsx("div",{onClick:()=>a(!1),className:(0,c.Z)("fixed inset-0 z-[19] bg-black/10 backdrop-blur-sm lg:hidden",t?"opacity-100":"opacity-0 pointer-events-none")}),(0,s.jsxs)("aside",{className:(0,c.Z)("z-[20] w-[320px] min-w-[320px] sm:w-[346px] sm:min-w-[346px] fixed lg:sticky lg:self-start top-[65px] sm:top-[85px] lg:top-[85px] right-0 lg:right-auto lg:translate-x-0",t?"translate-x-0":"translate-x-full "),children:[s.jsx(p,{activeSlug:e.slug}),s.jsx("button",{onClick:()=>a(e=>!e),className:"absolute left-0 top-[100px] full-center w-7 h-7 rounded-l-md -translate-x-full z-[22] bg-white shadow-medium lg:hidden",children:s.jsx(x,{className:(0,c.Z)("dark:[&>path]:stroke-[#fff]",t?"-rotate-90":"rotate-90")})})]}),(0,s.jsxs)("article",{className:"mainBlog p-6 sm:p-10",children:[s.jsx("div",{className:"text-primaryText dark:text-[#CBCBCB] text-xs sm:text-sm mb-2",children:e.category}),s.jsx("h1",{className:"text-[#373A41] dark:text-[#fff] font-semibold text-lg sm:text-xl mb-5",children:e.title}),(0,s.jsxs)("div",{className:"flex items-center flex-wrap gap-2.5 mb-5",children:[s.jsx("span",{className:(0,c.Z)("rounded-[4px] px-2.5 py-1 text-xs font-semibold","GET"===e.method?"bg-[#45BD54] text-white":"bg-primaryDark text-white"),children:e.method}),s.jsx("span",{dir:"ltr",className:"rounded-[4px] px-2.5 py-1 text-xs font-mono bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#EDEDED]",children:e.path}),s.jsx("span",{className:"rounded-[4px] px-2.5 py-1 text-xs font-semibold bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#EDEDED]",children:e.auth?"نیازمند API Key":"بدون نیاز به احراز هویت"})]}),s.jsx("p",{className:"text-sm sm:text-base text-primaryText dark:text-[#ccc] leading-7",children:e.description}),e.params?.length?(0,s.jsxs)("div",{className:"mt-8",children:[s.jsx("h2",{className:"text-title dark:text-[#fff] font-semibold text-base sm:text-lg mb-4",children:"پارامترها"}),s.jsx("div",{className:"border border-solid border-[#D9D9D9] dark:border-[#0F3F4E] rounded-[5px] overflow-hidden",children:e.params.map((t,a)=>(0,s.jsxs)("div",{className:(0,c.Z)("flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 px-4 py-3.5",a!==e.params.length-1&&"border-b border-solid border-[#D9D9D9] dark:border-[#0F3F4E]"),children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 sm:w-[160px] sm:shrink-0",children:[s.jsx("span",{dir:"ltr",className:"font-mono text-sm text-title dark:text-[#fff] font-semibold",children:t.name}),s.jsx("span",{className:(0,c.Z)("text-[11px] rounded-[3px] px-1.5 py-0.5",t.required?"bg-[#45BD54]/10 text-[#2E8C39] dark:text-[#7CD787]":"bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#CBCBCB]"),children:t.required?"الزامی":"اختیاری"})]}),s.jsx("div",{className:"text-sm text-primaryText dark:text-[#DFDFDF]",children:t.description})]},t.name))})]}):null,e.responses?.length?(0,s.jsxs)("div",{className:"mt-8",children:[s.jsx("h2",{className:"text-title dark:text-[#fff] font-semibold text-base sm:text-lg mb-4",children:"نمونه پاسخ"}),e.responses.map(e=>(0,s.jsxs)("div",{className:"mb-6 last:mb-0",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2.5",children:[s.jsx("span",{className:"text-sm font-semibold text-title dark:text-[#fff]",children:e.label}),s.jsx("span",{dir:"ltr",className:"text-[11px] font-mono rounded-[3px] px-1.5 py-0.5 bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#CBCBCB]",children:e.status})]}),e.note?s.jsx("p",{className:"text-sm text-primaryText dark:text-[#CBCBCB] mt-2",children:e.note}):null,e.body?s.jsx(f,{children:e.body.replaceAll("{BASE_URL}",u)}):null]},e.label))]}):null]}),(0,s.jsxs)("section",{className:"w-full 2md:w-[390px] min-w-[390px] bg-[#031F1D] py-10 sm:pt-14 px-6 2md:sticky 2md:top-[85px] 2md:self-start 2md:max-h-[calc(100vh-85px)] 2md:overflow-auto",children:[(0,s.jsxs)("div",{className:"mb-6 text-[#fff] font-semibold text-base center gap-4",children:[s.jsx("i",{className:"block bg-[#00AF8E] h-[19px] w-1"}),"نمونه درخواست"]}),r?s.jsx(f,{children:r}):s.jsx("p",{className:"text-[#CBCBCB] text-sm",children:"این یک وب‌هوک است؛ رمزینو آن را به آدرس تنظیم‌شده توسط شما فراخوانی می‌کند، نه برعکس."})]})]})}},3521:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>m,getStaticPaths:()=>p,getStaticProps:()=>x});var r=a(997),i=a(52),c=a(4510),l=a(523),n=a(3878),o=a(8174),d=e([l]);l=(d.then?(await d)():d)[0];let m=function({doc:e}){return(0,r.jsxs)(l.Z,{children:[r.jsx(c.Z,{data:e&&{metaTitle:`${e.title} | مستندات API رمزینو`,metaDescription:e.description}}),e?r.jsx(i.Z,{list:[{text:"مستندات API",href:"/docs"},{text:e.title,href:"#"}]}):null,r.jsx(n.Z,{doc:e})]})},p=async()=>({paths:o.P0.map(e=>({params:{slug:e.slug}})),fallback:!1}),x=async({params:e})=>({props:{doc:(0,o.Df)(e?.slug)||null}});s()}catch(e){s(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},9816:e=>{e.exports=require("styled-jsx/style")},8916:e=>{e.exports=import("@react-aria/focus")},7001:e=>{e.exports=import("@react-aria/interactions")},3258:e=>{e.exports=import("@reduxjs/toolkit")},9648:e=>{e.exports=import("axios")},3291:e=>{e.exports=import("react-redux")},3590:e=>{e.exports=import("react-toastify")},9871:e=>{e.exports=import("redux")},3877:e=>{e.exports=import("swiper")},3015:e=>{e.exports=import("swiper/react")},5941:e=>{e.exports=import("swr")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[4567,8677,6859,7637,2567,1225],()=>a(7106));module.exports=s})();