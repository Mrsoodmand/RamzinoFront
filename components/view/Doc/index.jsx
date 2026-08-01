import dynamic from "next/dynamic";
import Sidebar from "./Sidebar";
import { useState } from "react";
import classes from "hooks/classes";

const IconBottom = dynamic(() => import("icons/Layout/IconArrowBottom.svg"), {
  ssr: false,
});

function SingleDocPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="flex justify-between flex-col 2md:flex-row">
      <aside
        className={classes(
          "w-[320px] min-w-[320px] sm:w-[346px] sm:min-w-[346px] absolute lg:relative top-0 right-0 lg:translate-x-0",
          openMenu ? "translate-x-0" : "translate-x-full "
        )}
      >
        <Sidebar />
        <button
          onClick={() => setOpenMenu((c) => !c)}
          className="absolute left-0 top-[160px] full-center w-7 h-7 rounded-l-md -translate-x-full z-10 bg-white shadow-medium lg:hidden"
        >
          <IconBottom
            className={classes(
              "dark:[&>path]:stroke-[#fff]",
              openMenu ? "-rotate-90" : "rotate-90"
            )}
          />
        </button>
      </aside>
      <article className="mainBlog p-10">
        <h1
          className="text-[#373A41] dark:text-[#fff] font-semibold
         text-xl mb-5"
        >
          Api مورد نظر
        </h1>
        <p className="text-sm text-primaryText dark:text-[#ccc]">
          شما به راحتی می توانید، بعد از خرید ارزهای دیجیتال، رمزارز های خود را
          در کیف پول اختصاصی ارز دیجیتال صرافی رمزینو مشاهده کنید. شما به راحتی
          می توانید، بعد از خرید ارزهای دیجیتال، رمزارز های خود را در کیف پول
          اختصاصی ارز دیجیتال صرافی رمزینو مشاهده کنید.
        </p>
        <p className="text-sm text-primaryText dark:text-[#ccc] mt-3">
          شما به راحتی می توانید، بعد از خرید ارزهای دیجیتال، رمزارز های خود را
          در کیف پول اختصاصی ارز دتال رمزینو مشاهده کنید. شما به راحتی می
          توانید، بعد از خرید ارزهای دیجیتال، رمزارز های خود را در کیف پول
          اختصاصی ارز دتال رمزینو مشاهده کنید. شما به راحتی می توانید، بعد از
          خرید ارزهای دیجیتال، رمزارز های خود را در کیف پول اختصاصی ارز دتال
          رمزینو مشاهده کنید. شما به راحتی می توانید، بعد از خرید ارزهای
          دیجیتال، رمزارز های خود را در کیف پول اختصاصی ارز دتال رمزینو مشاهده
          کنید.
        </p>
      </article>
      <section className="w-full 2md:w-[390px] min-w-[390px] bg-[#031F1D] py-10 sm:pt-14 px-6">
        <div className="mb-6 text-[#fff] font-semibold text-base center gap-4">
          <i className="block bg-[#00AF8E] h-[19px] w-1"></i>
          Api مورد نظر
        </div>
        <div className="mt-4 bg-[#052C29] px-5 py-8 text-[#fff] text-[15px] font-normal">
          {`# coding: utf-8 import requests  host = "https://api.gateio.ws" prefix = "/api/v4" headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}  url = '/spot/currencies' query_param = '' r = requests.request('GET', host + prefix + url, headers=headers) print(r.json())  `}
        </div>
        <div className="mt-4 bg-[#052C29] px-5 py-8 text-[#fff] text-[15px] font-normal">
          {`# coding: utf-8 import requests  host = "https://api.gateio.ws" prefix = "/api/v4" headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}  url = '/spot/currencies' query_param = '' r = requests.request('GET', host + prefix + url, headers=headers) print(r.json())  `}
        </div>
      </section>
    </main>
  );
}

export default SingleDocPage;
