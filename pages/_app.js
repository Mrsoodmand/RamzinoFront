// JavaScripts swiper js or library sliders
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/swiper-bundle.css";

// styles swiper js or library sliders
import localFont from "next/font/local";
import useScroll from "../hooks/useScroll";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "reduxStates/store";
import Loading from "components/common/Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "styles/globals.css";
import "styles/animation.css";
import { SWRConfig } from "swr";
import { useEffect } from "react";

const iranYekan = localFont({
  adjustFontFallback: "Arial",
  fallback: ["yekan", "Arial"],
  preload: false,
  src: [
    {
      path: "../public/fonts/IRANYekanX-Pro/Farsi-numerals/Webfonts/Woff/IRANYekanXFaNum-Light.woff",
      weight: "300",
    },
    {
      path: "../public/fonts/IRANYekanX-Pro/Farsi-numerals/Webfonts/Woff/IRANYekanXFaNum-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/IRANYekanX-Pro/Farsi-numerals/Webfonts/Woff/IRANYekanXFaNum-Medium.woff",
      weight: "500",
    },
    {
      path: "../public/fonts/IRANYekanX-Pro/Farsi-numerals/Webfonts/Woff/IRANYekanXFaNum-Bold.woff",
      weight: "600",
    },
    {
      path: "../public/fonts/IRANYekanX-Pro/Farsi-numerals/Webfonts/Woff/IRANYekanXFaNum-Bold.woff",
      weight: "700",
    },
  ],
});

///

function MyApp(props) {
  const { Component, pageProps } = props;
  useScroll();

  useEffect(() => {
    // if (typeof window != "undefined") {
    //   const userTheme = localStorage?.getItem("theme");
    //   const systemTheme = window.matchMedia(
    //     "(prefers-color-schema: dark)"
    //   )?.matches;
    //   if (userTheme === "dark" || (!userTheme && systemTheme)) {
    //     document.documentElement.classList.add("dark");
    //     document.querySelector("html")?.setAttribute("data-theme", "dark");
    //   } else {
    //     document.querySelector("html")?.setAttribute("data-theme", "light");
    //   }
    // }
  }, []);

  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
        }}
      >
        <Provider store={store}>
          <Loading />
          <Component {...pageProps} />
          {/* modals authentication */}
        </Provider>
      </SWRConfig>
      <ToastContainer
        style={{
          fontFamily: `${iranYekan.style.fontFamily} !important`,
          direction: "rtl",
          fontWeight: 500,
        }}
        rtl
        progressClassName={"toastify-progress"}
        toastClassName={"toast_card"}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.ariapay.me/" /> */}
        <meta property="og:site_name" content="Ramzino" />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="2000" />
        {/* <meta property="og:image:type" content="image/webp" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="noindex" />

        {/* favicon  */}
        <link rel="icon" type="image/x-icon" href="/images/favi.webp" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favi.webp" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favi.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/70.svg" color="#1c1c1c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/120.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.webp" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.webp" />
      </Head>
      <style global jsx>
        {`
          :root {
            --font-yekan: ${iranYekan.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
