import dynamic from "next/dynamic";
import Sidebar from "./Sidebar";
import { useState } from "react";
import classes from "hooks/classes";

const IconBottom = dynamic(() => import("icons/Layout/IconArrowBottom.svg"), {
  ssr: false,
});

const BASE_URL = "https://ramzino.me";

function methodBadgeClasses(method) {
  if (method === "GET") {
    return "bg-[#45BD54] text-white";
  }
  return "bg-primaryDark text-white";
}

function CodeBlock({ children }) {
  return (
    <pre
      dir="ltr"
      className="mt-3 bg-[#052C29] px-5 py-5 text-[#EDEDED] text-xs sm:text-[13px] font-mono overflow-auto whitespace-pre-wrap break-all rounded-[5px]"
    >
      {children}
    </pre>
  );
}

function SingleDocPage({ doc }) {
  const [openMenu, setOpenMenu] = useState(false);

  if (!doc) {
    return (
      <main className="p-10 text-title">مستندی با این آدرس پیدا نشد.</main>
    );
  }

  const curl = doc.curl?.replaceAll("{BASE_URL}", BASE_URL);

  return (
    <main className="container relative flex justify-between flex-col 2md:flex-row 2md:items-start">
      <div
        onClick={() => setOpenMenu(false)}
        className={classes(
          "fixed inset-0 z-[19] bg-black/10 backdrop-blur-sm lg:hidden",
          openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <aside
        className={classes(
          "z-[20] w-[320px] min-w-[320px] sm:w-[346px] sm:min-w-[346px] fixed lg:sticky lg:self-start top-[65px] sm:top-[85px] lg:top-[85px] right-0 lg:right-auto lg:translate-x-0",
          openMenu ? "translate-x-0" : "translate-x-full "
        )}
      >
        <Sidebar activeSlug={doc.slug} />
        <button
          onClick={() => setOpenMenu((c) => !c)}
          className="absolute left-0 top-[100px] full-center w-7 h-7 rounded-l-md -translate-x-full z-[22] bg-white shadow-medium lg:hidden"
        >
          <IconBottom
            className={classes(
              "dark:[&>path]:stroke-[#fff]",
              openMenu ? "-rotate-90" : "rotate-90"
            )}
          />
        </button>
      </aside>

      <article className="mainBlog p-6 sm:p-10">
        <div className="text-primaryText dark:text-[#CBCBCB] text-xs sm:text-sm mb-2">
          {doc.category}
        </div>
        <h1 className="text-[#373A41] dark:text-[#fff] font-semibold text-lg sm:text-xl mb-5">
          {doc.title}
        </h1>

        <div className="flex items-center flex-wrap gap-2.5 mb-5">
          <span
            className={classes(
              "rounded-[4px] px-2.5 py-1 text-xs font-semibold",
              methodBadgeClasses(doc.method)
            )}
          >
            {doc.method}
          </span>
          <span
            dir="ltr"
            className="rounded-[4px] px-2.5 py-1 text-xs font-mono bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#EDEDED]"
          >
            {doc.path}
          </span>
          <span className="rounded-[4px] px-2.5 py-1 text-xs font-semibold bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#EDEDED]">
            {doc.auth ? "نیازمند API Key" : "بدون نیاز به احراز هویت"}
          </span>
        </div>

        <p className="text-sm sm:text-base text-primaryText dark:text-[#ccc] leading-7">
          {doc.description}
        </p>

        {doc.params?.length ? (
          <div className="mt-8">
            <h2 className="text-title dark:text-[#fff] font-semibold text-base sm:text-lg mb-4">
              پارامترها
            </h2>
            <div className="border border-solid border-[#D9D9D9] dark:border-[#0F3F4E] rounded-[5px] overflow-hidden">
              {doc.params.map((param, i) => (
                <div
                  key={param.name}
                  className={classes(
                    "flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 px-4 py-3.5",
                    i !== doc.params.length - 1 &&
                      "border-b border-solid border-[#D9D9D9] dark:border-[#0F3F4E]"
                  )}
                >
                  <div className="flex items-center gap-2 sm:w-[160px] sm:shrink-0">
                    <span dir="ltr" className="font-mono text-sm text-title dark:text-[#fff] font-semibold">
                      {param.name}
                    </span>
                    <span
                      className={classes(
                        "text-[11px] rounded-[3px] px-1.5 py-0.5",
                        param.required
                          ? "bg-[#45BD54]/10 text-[#2E8C39] dark:text-[#7CD787]"
                          : "bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#CBCBCB]"
                      )}
                    >
                      {param.required ? "الزامی" : "اختیاری"}
                    </span>
                  </div>
                  <div className="text-sm text-primaryText dark:text-[#DFDFDF]">
                    {param.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {doc.responses?.length ? (
          <div className="mt-8">
            <h2 className="text-title dark:text-[#fff] font-semibold text-base sm:text-lg mb-4">
              نمونه پاسخ
            </h2>
            {doc.responses.map((res) => (
              <div key={res.label} className="mb-6 last:mb-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-semibold text-title dark:text-[#fff]">
                    {res.label}
                  </span>
                  <span
                    dir="ltr"
                    className="text-[11px] font-mono rounded-[3px] px-1.5 py-0.5 bg-themeColor dark:bg-[#032934] text-primaryText dark:text-[#CBCBCB]"
                  >
                    {res.status}
                  </span>
                </div>
                {res.note ? (
                  <p className="text-sm text-primaryText dark:text-[#CBCBCB] mt-2">
                    {res.note}
                  </p>
                ) : null}
                {res.body ? (
                  <CodeBlock>{res.body.replaceAll("{BASE_URL}", BASE_URL)}</CodeBlock>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </article>

      <section className="w-full 2md:w-[390px] min-w-[390px] bg-[#031F1D] py-10 sm:pt-14 px-6 2md:sticky 2md:top-[85px] 2md:self-start 2md:max-h-[calc(100vh-85px)] 2md:overflow-auto">
        <div className="mb-6 text-[#fff] font-semibold text-base center gap-4">
          <i className="block bg-[#00AF8E] h-[19px] w-1"></i>
          نمونه درخواست
        </div>
        {curl ? (
          <CodeBlock>{curl}</CodeBlock>
        ) : (
          <p className="text-[#CBCBCB] text-sm">
            این یک وب‌هوک است؛ رمزینو آن را به آدرس تنظیم‌شده توسط شما فراخوانی می‌کند، نه برعکس.
          </p>
        )}
      </section>
    </main>
  );
}

export default SingleDocPage;
