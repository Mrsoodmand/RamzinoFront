# RamzinoFront — Project Documentation

`RamzinoFront` is the **public marketing/docs site** for Ramzino, a crypto payment-gateway platform. It is deliberately separate from the merchant/admin panels (which live in the `Ramzino` Laravel repo as server-rendered Blade views) — this app's only job is to explain the product, publish content, and convert a visitor into a sign-up, then hand off to the backend's own login pages. It talks to the backend **exclusively** through one read-mostly JSON API (`front-api-v1`); it has no admin/user dashboard of its own. For the backend (admin panel, merchant panel, gateway system, database), see `../Ramzino/PROJECT_DOCUMENTATION.md`.

## 1. Tech Stack

| Concern | Library |
|---|---|
| Framework | Next.js **14.2** (Pages Router) |
| UI | React 18, Tailwind CSS, `@headlessui/react`, `swiper` (sliders) |
| State | Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) |
| Data fetching | `swr` + `axios` |
| Misc | `react-otp-input` (OTP entry), `react-toastify` (toasts), `react-spinners`, `@svgr/webpack` (SVG-as-component), `@builder.io/partytown` (offload 3rd-party scripts to a worker) |

`package.json`'s `name` field is `"Jhane-mohtava"` — a leftover from before the project was renamed to Ramzino; worth a cleanup but harmless.

## 2. Pages (`pages/`, Next.js file-based routing)

| Route | File | Purpose |
|---|---|---|
| `/` | `index.js` | Home / landing page |
| `/auth/login`, `/auth/register` | `auth/login.js`, `auth/register.js` | Links into the backend's actual auth flow |
| `/gateway` | `gateway.js` | Product page for the payment gateway |
| `/crypto` | `crypto.js` | Crypto market overview |
| `/currency` | `currency/index.js` | Currency list |
| `/blogs`, `/blogs/[slug]` | `blogs/index.js`, `blogs/[slug].js` | Blog listing + single post |
| `/docs`, `/docs/[slug]` | `docs/index.js`, `docs/[slug].js` | Help/documentation articles |
| `/doc-api` | `doc-api.js` | API reference page (backed by `components/view/DocApi`) |
| `/fee/deal`, `/fee/harvest` | `fee/deal.js`, `fee/harvest.js` | Fee/commission explainer pages |
| `/tags/[slug]` | `tags/[slug].js` | Tag-filtered content |
| `/about-us`, `/contact-us`, `/faq`, `/terms` | — | Standard informational pages |
| `/buy-sell-instant` | `buy-sell-instant.js` | Instant buy/sell explainer |

`_app.js` / `_document.js` provide the Next.js app shell (global providers, fonts, `<Html>`/`<Head>` structure).

## 3. Structure

### `components/`
- **`layout/MainLayout`** — the shared page chrome (header/footer/nav) wrapping every page.
- **`common/`** — reusable UI: `SwapBox`, `LastBlogs`, `ModalSelectCurrency`, `Faqs`, `Slider.jsx`, `Breadcrumb`, `Seo.jsx` (meta tags), `BannerProgram`, `addIcon`, `Loading`.
- **`view/`** — one folder per page, holding that page's actual content/composition: `Home`, `Blogs`, `Crypto`, `Currency`, `SingleCurrency` (+ `data.js`), `AboutUs`, `Fee`, `FeeHarvest`, `Auth`, `DocApi` (+ `data.js`), `Doc` (+ `data.js`), `Faqs`, `ContactUs`, `SingleBlog`, `Gateway`, `BuySellInstant` (+ `data.js`). The `data.js` siblings hold static content arrays (e.g. API reference entries, FAQ text) kept out of the component file.

### `reduxStates/`
Redux Toolkit store (`store.js` calls `configureStore({ reducer: rootReducer })`, `rootReducer.js` combines slices). Two slices:
- **`SettingSite`** (`types.js`, `reducer.js`, `actions.js`) — site-wide settings (likely footer/logo/config data fetched from `front-api-v1`'s `/settings`-style endpoints).
- **`Profile`** (`types.js`, `reducer.js`, `actions.js`) — the visitor's profile state (relevant once logged in via the `Customer` mobile-OTP flow — see backend docs §3/§6.7 for how that identity is distinct from a merchant `User`).

### `hooks/`
- **`useFetcher/`** — the SWR data-fetching layer: `config.js` (SWR config/base setup), `serverFetcher.js` (server-side fetch helper, used in `getServerSideProps`/`getStaticProps`), `handelErrors.js` / `handelTextError.js` (error-shape normalizers — note the "handel" typo is consistent across both files, not a one-off).
- **`apis/useProfile/`** — a dedicated hook wrapping profile-related API calls.
- **`useCookie.js`**, **`useScroll.js`**, **`Clipboard.js`**, **`Toast.js`** — small utility hooks (cookie access, scroll position, clipboard copy, toast notifications).

### Config
- **`next.config.js`** — `images.domains` whitelists `ramzino.me`, `panel.ramzino.me`, `localhost`, `127.0.0.1` for `next/image`; custom webpack rule routes `*.svg` imports through `@svgr/webpack` (import SVGs as React components) except when suffixed `?url`.
- **`tailwind.config.js`**, **`postcss.config.mjs`**, **`imageLoader.js`**, **`jsconfig.json`** — standard Tailwind/Next tooling.

## 4. Backend Dependency

The entire app is a consumer of one Laravel endpoint group:

```
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api/front-api-v1/     # .env.local (dev)
NEXT_PUBLIC_API_BASE_URL=https://panel.ramzino.me/api/front-api-v1/  # .env.example (prod)
```

That prefix is served by `Ramzino`'s `FrontApi\*` controllers (`PageController`, `BlogController`, `CommentController`, `CurrencyController`, `SettingController`, `NewsletterApiController`) and login/OTP is handled by `FrontApi\LoginController` against the standalone `Customer`/`CustomerMobileVerify` tables (see the backend's `PROJECT_DOCUMENTATION.md` §3 and `DATABASE_SCHEMA.md` §2.5 — this is a completely separate identity system from a merchant's `User` account).

## 5. Running Locally

```bash
npm run dev    # http://localhost:3000, requires the Ramzino backend running and NEXT_PUBLIC_API_BASE_URL pointed at it
npm run build
npm run start
npm run lint
```
