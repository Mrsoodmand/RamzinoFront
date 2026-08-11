export const apiDocs = [
  {
    category: "موجودی",
    items: [
      {
        slug: "balance",
        title: "دریافت موجودی",
        method: "GET",
        path: "/api/gateway/balance",
        auth: true,
        description:
          "موجودی و کارمزد حساب شما را به تفکیک ارز و شبکه برمی‌گرداند.",
        params: [],
        curl: `curl -X GET "{BASE_URL}/api/gateway/balance" \\\n  -H "Authorization: Bearer {api_key}"`,
        responses: [
          {
            label: "موفق",
            status: 200,
            body: `[\n    {\n        "currency": "DAI",\n        "network": "ETH",\n        "balance": "0",\n        "commission": null\n    }\n]`,
          },
          {
            label: "خطا",
            status: 400,
            body: `{\n    "status": -1,\n    "errors": [\n        "وارد کردن فیلد api key الزامی است."\n    ]\n}`,
          },
        ],
      },
    ],
  },
  {
    category: "درگاه پرداخت",
    items: [
      {
        slug: "create-invoice",
        title: "ایجاد فاکتور پرداخت",
        method: "POST",
        path: "/api/gateway/create-invoice",
        auth: true,
        description:
          "یک فاکتور پرداخت جدید برای مشتری شما ایجاد می‌کند و لینک صفحه پرداخت را برمی‌گرداند تا مشتری با ارز دیجیتال دلخواه خود آن را تسویه کند.",
        params: [
          {
            name: "amount",
            required: true,
            type: "number",
            description: "مبلغ فاکتور، بر اساس واحد مشخص‌شده در to_currency.",
          },
          {
            name: "order_id",
            required: true,
            type: "string",
            description: "شناسه سفارش در سیستم شما، برای پیگیری این تراکنش.",
          },
          {
            name: "to_currency",
            required: false,
            type: "string",
            description:
              "واحد مبلغ amount. مقادیر مجاز: IRT، IRR، ROB، USD، AED، EUR، TRY، GBP، CNY، INR، PKR — پیش‌فرض USD.",
          },
          {
            name: "currency",
            required: false,
            type: "string",
            description:
              "برای محدود کردن پرداخت به یک ارز دیجیتال مشخص (مثلاً USDT).",
          },
          {
            name: "network",
            required: false,
            type: "string",
            description:
              "شبکه بلاکچین مشخص برای دریافت پرداخت، همراه با currency.",
          },
          {
            name: "lifetime",
            required: false,
            type: "number",
            description: "مدت اعتبار فاکتور بر حسب دقیقه.",
          },
          {
            name: "status_callback",
            required: false,
            type: "url",
            description:
              "مشتری پس از اتمام تراکنش با متد GET به این آدرس هدایت می‌شود.",
          },
          {
            name: "success_callback",
            required: false,
            type: "url",
            description:
              "پس از پرداخت موفق، اطلاعات تراکنش با متد POST به این آدرس ارسال می‌شود.",
          },
          {
            name: "fail_callback",
            required: false,
            type: "url",
            description: "در صورت شکست پرداخت، با متد POST فراخوانی می‌شود.",
          },
          {
            name: "description",
            required: false,
            type: "string",
            description: "توضیح دلخواه شما برای این تراکنش.",
          },
        ],
        curl: `curl -X POST "{BASE_URL}/api/gateway/create-invoice" \\\n  -H "Authorization: Bearer {api_key}" \\\n  -F "amount=200000" \\\n  -F "order_id=2" \\\n  -F "to_currency=irt" \\\n  -F "lifetime=20" \\\n  -F "description=Transaction Number 2"`,
        responses: [
          {
            label: "موفق",
            status: 200,
            body: `{\n    "status": 1,\n    "uuid": "a13f908c-5422-4b14-a832-1bed6ae6da7f",\n    "id": 1094,\n    "data": null,\n    "url": "{BASE_URL}/api/gateway/pay-invoice/a13f908c-5422-4b14-a832-1bed6ae6da7f"\n}`,
          },
          {
            label: "خطا",
            status: 400,
            body: `{\n    "status": -1,\n    "errors": [\n        "وارد کردن فیلد api key الزامی است."\n    ]\n}`,
          },
        ],
      },
    ],
  },
  {
    category: "پرداخت‌ها",
    items: [
      {
        slug: "payment-list",
        title: "لیست پرداخت‌ها",
        method: "POST",
        path: "/api/gateway/payment-list",
        auth: true,
        description: "فهرست فاکتورهای پرداخت ثبت‌شده در درگاه شما را برمی‌گرداند.",
        params: [],
        curl: `curl -X POST "{BASE_URL}/api/gateway/payment-list" \\\n  -H "Authorization: Bearer {api_key}"`,
        responses: [
          {
            label: "پاسخ",
            status: 200,
            note: "پاسخ آرایه‌ای از فاکتورهای پرداخت است؛ ساختار هر آیتم مشابه پاسخ «جزئیات یک پرداخت» است.",
          },
        ],
      },
      {
        slug: "payment-detail",
        title: "جزئیات یک پرداخت",
        method: "POST",
        path: "/api/gateway/payment-detail",
        auth: true,
        description: "اطلاعات و وضعیت لحظه‌ای یک فاکتور پرداخت مشخص را برمی‌گرداند.",
        params: [
          {
            name: "uuid",
            required: true,
            type: "string",
            in: "query",
            description: "شناسه یکتای فاکتور، دریافت‌شده از پاسخ ایجاد فاکتور.",
          },
        ],
        curl: `curl -X POST "{BASE_URL}/api/gateway/payment-detail?uuid=c0070f29-2bc1-4ed9-9acb-4a8e2661bd19" \\\n  -H "Authorization: Bearer {api_key}"`,
        responses: [
          {
            label: "پاسخ",
            status: 200,
            note: "ساختار پاسخ مشابه بدنه‌ای است که در وب‌هوک‌های وضعیت پرداخت ارسال می‌شود (نگاه کنید به بخش کال‌بک‌ها):",
            body: `{\n    "type": "factor-payment",\n    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",\n    "status": "paid",\n    "final": true,\n    "order_id": "2",\n    "client": {\n        "email": null,\n        "paid_amount_crypto": "0.54748715",\n        "crypto_currency": "GRAM",\n        "crypto_network": "ton",\n        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",\n        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"\n    },\n    "commission": {\n        "merchant_amount": 0.5255877,\n        "commission_amount": 0.0218995,\n        "commission_percent": 4\n    },\n    "fiat": {\n        "amount": "1.00",\n        "currency": "usd"\n    }\n}`,
          },
        ],
      },
    ],
  },
  {
    category: "کال‌بک‌ها",
    items: [
      {
        slug: "callbacks",
        title: "وب‌هوک‌های وضعیت پرداخت",
        method: "POST",
        path: "success_callback / fail_callback",
        auth: false,
        description:
          "با تنظیم success_callback و fail_callback هنگام ایجاد فاکتور، رمزینو به‌محض تغییر وضعیت تراکنش، بدنه‌ای مشابه نمونه‌های زیر را با متد POST به آدرس شما ارسال می‌کند. status_callback نیز مشابه است، با این تفاوت که مشتری با متد GET به آن آدرس هدایت می‌شود. وضعیت‌های دیگری مانند underpaid و expired نیز ممکن است ارسال شوند.",
        params: [],
        curl: null,
        responses: [
          {
            label: "پرداخت شده (paid)",
            status: 200,
            body: `{\n    "type": "factor-payment",\n    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",\n    "status": "paid",\n    "final": true,\n    "order_id": "2",\n    "client": {\n        "email": null,\n        "paid_amount_crypto": "0.54748715",\n        "crypto_currency": "GRAM",\n        "crypto_network": "ton",\n        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",\n        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"\n    },\n    "commission": {\n        "merchant_amount": 0.5255877,\n        "commission_amount": 0.0218995,\n        "commission_percent": 4\n    },\n    "fiat": {\n        "amount": "1.00",\n        "currency": "usd"\n    }\n}`,
          },
          {
            label: "بیش‌پرداخت (over-paid)",
            status: 200,
            body: `{\n    "type": "factor-payment",\n    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",\n    "status": "over-paid",\n    "final": true,\n    "order_id": "2",\n    "client": {\n        "email": null,\n        "paid_amount_crypto": "0.54748715",\n        "crypto_currency": "GRAM",\n        "crypto_network": "ton",\n        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",\n        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"\n    },\n    "commission": {\n        "merchant_amount": 0.5255877,\n        "commission_amount": 0.0218995,\n        "commission_percent": 4\n    },\n    "fiat": {\n        "amount": "1.00",\n        "currency": "usd"\n    }\n}`,
          },
          {
            label: "در انتظار (pending)",
            status: 200,
            body: `{\n    "type": "factor-payment",\n    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",\n    "status": "pending",\n    "final": false,\n    "order_id": "2",\n    "client": {\n        "email": null,\n        "paid_amount_crypto": "0.54748715",\n        "crypto_currency": "GRAM",\n        "crypto_network": "ton",\n        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",\n        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"\n    },\n    "commission": {\n        "merchant_amount": 0.5255877,\n        "commission_amount": 0.0218995,\n        "commission_percent": 4\n    },\n    "fiat": {\n        "amount": "1.00",\n        "currency": "usd"\n    }\n}`,
          },
          {
            label: "لغو شده (cancelled)",
            status: 200,
            body: `{\n    "type": "factor-payment",\n    "uuid": "ccad3ffa-f1c0-421c-bccf-af8984a656fc",\n    "status": "cancelled",\n    "final": false,\n    "order_id": "2",\n    "client": {\n        "email": null,\n        "paid_amount_crypto": "0.54748715",\n        "crypto_currency": "GRAM",\n        "crypto_network": "ton",\n        "from": "UQD9ZiUQWjwhimg9iOMHY89FbNGGySG8jaHMJzpcsfObJaFx",\n        "txid": "f1130ccdbc69429b17d7a59c74d45b40ddc50924d04865d06e37d48ad27536ed"\n    },\n    "commission": {\n        "merchant_amount": 0.5255877,\n        "commission_amount": 0.0218995,\n        "commission_percent": 4\n    },\n    "fiat": {\n        "amount": "1.00",\n        "currency": "usd"\n    }\n}`,
          },
        ],
      },
    ],
  },
  {
    category: "ارزها",
    items: [
      {
        slug: "currencies",
        title: "لیست ارزهای پشتیبانی‌شده",
        method: "GET",
        path: "/api/gateway/currencies",
        auth: false,
        description:
          "لیست بیش از ۱۵۰ ارز دیجیتال و شبکه پشتیبانی‌شده، به همراه حداقل/حداکثر مبلغ فاکتور و قیمت لحظه‌ای هرکدام. این مسیر نیازی به احراز هویت ندارد.",
        params: [],
        curl: `curl -X GET "{BASE_URL}/api/gateway/currencies"`,
        responses: [
          {
            label: "موفق (نمونه، از میان ۱۵۰+ مورد)",
            status: 200,
            body: `[\n    {\n        "name": "BTC",\n        "network": "BTC",\n        "min": 0.00002,\n        "max": 100,\n        "price": 65377.46304,\n        "img": "{BASE_URL}/images/crypto/BTC.svg"\n    },\n    {\n        "name": "ETH",\n        "network": "ETH",\n        "min": 0.001,\n        "max": 1000,\n        "price": 1909.94246,\n        "img": "{BASE_URL}/images/crypto/ETH.svg"\n    },\n    {\n        "name": "USDT",\n        "network": "TRON",\n        "min": 1,\n        "max": 1000000,\n        "price": 1,\n        "img": "{BASE_URL}/images/crypto/USDT.svg"\n    },\n    {\n        "name": "BNB",\n        "network": "BSC",\n        "min": 0.005,\n        "max": 1000000,\n        "price": 601.47464,\n        "img": "{BASE_URL}/images/crypto/BNB.svg"\n    },\n    {\n        "name": "TON",\n        "network": "TON",\n        "min": 0.1,\n        "max": 1000000,\n        "price": 1.293408,\n        "img": "{BASE_URL}/images/crypto/TON.svg"\n    }\n]`,
          },
        ],
      },
    ],
  },
];

export const flatDocs = apiDocs.flatMap((section) =>
  section.items.map((item) => ({ ...item, category: section.category }))
);

export const getDocBySlug = (slug) =>
  flatDocs.find((item) => item.slug === slug);
