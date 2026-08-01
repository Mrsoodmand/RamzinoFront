import Breadcrumb from "components/common/Breadcrumb";
import dynamic from "next/dynamic";

const IconSearch = dynamic(
  () => import("components/view/Faqs/icons/IconSearch.svg"),
  { ssr: false }
);

function Hero({ data }) {
  return (
    <header className="md:shadow-[0px_0px_74px_0px_#0000000A] w-full md:bg-white -mt-6 sm:-mt-5 md:-mt-10 pt-7 md:py-12 md:min-h-[254px] ">
      <Breadcrumb list={[{ text: "سوالات متداول", href: "#" }]} />
      <div className="fade-in full-center flex-col mt-5 md:mt-0 px-4">
        <h1 className="text-title font-semibold text-[23px] md:text-[30px]">
          {data?.title}
        </h1>
        <p className="text-[#3C3C3C] dark:text-[#EDEDED] font-normal text-center text-[17px] sm:text-xl mb-[27px] mt-4 sm:my-6">
          {data?.shortDetail}
        </p>
        {/* <div className="full-center border border-solid border-[#CACACA] dark:border-[#1C4450] rounded-lg gap-2.5 h-[68px] sm:h-[81px] w-full max-w-[624px] px-3.5 sm:px-4">
          <input
            type="text"
            className="w-full h-full bg-[#fff] bg-opacity-0 text-title placeholder:text-[#373A41] dark:placeholder:text-[#CBCBCB] outline-none text-sm sm:text-base"
            placeholder="کلمه ای را برای جستجو وارد نمایید"
          />
          <IconSearch className="dark:[&>path]:stroke-[#F5F5F5]" />
        </div> */}
      </div>
    </header>
  );
}

export default Hero;
