import AddIcon from "components/common/addIcon";
import SwapBox from "components/common/SwapBox";
import IconFlashLeft from "icons/Home/IconFlashLeft.svg";
import Link from "next/link";

const dataTags = [
  "# خرید بیت کوین",
  "# خرید تتر",
  "# خرید و فروش داگز",
  "# فروش همستر کامبت",
];

function Header() {
  return (
    <header className="container flex items-start justify-between flex-col lg:flex-row mt-8 gap-y-8 gap-x-10 2md:mt-20">
      <section className="w-full lg:w-[58%] fade-in">
        <div className="lg:max-w-[719px]">
          <h1 className="text-2xl sm:text-[35px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
            رمزینو، سریع‌ترین راه برای خرید و فروش ارز دیجیتال
          </h1>
          <p className="text-[#383838] dark:text-[#CBCBCB] font-normal text-justify text-xs sm:text-base hidden sm:block">
            در دنیای پرنوسان ارزهای دیجیتال، زمان باارزش‌ترین دارایی شماست. ما
            فرآیندهای پیچیده ثبت‌نام و خرید را حذف کرده‌ایم تا تنها در چند
            دقیقه، به بازار جهانی صدها کوین و توکن معتبر متصل شوید. با سیستم
            تطبیق سفارشات پرسرعت و کیف پول اختصاصی امن، لذت معامله‌گری بدون وقفه
            و نقد کردن آنی دارایی‌ها را در هر ساعت از شبانه‌روز تجربه کنید.
          </p>

          <div className="bg-white shadow-[0px_0px_71px_0px_#00000003] px-3 py-3.5 sm:py-4 rounded-md max-w-[532px] mt-[17px] sm:mt-[37px]">
            <div className="center border border-solid border-[#DFDFDF] dark:border-[#003E52]  h-12 sm:h-[59px] rounded-lg sm:rounded-[10px] overflow-hidden mb-[13px] sm:mb-[26px]">
              <input
                type="number"
                className="w-full h-full dark:font-light font-medium border-0 outline-none text-primaryText placeholder:text-primaryText dark:text-[#F5F5F5] dark:placeholder:text-[#F5F5F5] px-3 text-xs sm:text-[15px] bg-[#fff] bg-opacity-0"
                placeholder="شماره موبایلتان را وارد نمایید."
              />
              <button
                title="شروع"
                className="btn btn-primary font-light whitespace-nowrap hover:bg-primary hover:text-primaryText group hover:font-semibold group"
              >
                ورود به بازار
                <AddIcon>
                  <IconFlashLeft className="group-hover:[&>path]:stroke-primaryText scale-75 sm:scale-100" />
                </AddIcon>
              </button>
            </div>
            <div className="text-primaryText dark:text-[#f5f5f5] font-normal text-[10px] sm:text-[13px]">
              در کمتر از 5 دقیقه ثبت نام و اولین معامله خود را شروع کنید.
            </div>
          </div>
          <div className="flex gap-4 mt-[17px] sm:mt-[32px]">
            <span className="text-title font-semibold min-w-fit hidden xl:center">
              پرطرفدار ها:
            </span>
            <div className="center gap-[7px] flex-wrap">
              {dataTags?.map((e, i) => (
                <Link
                  title="مشاهده"
                  key={i}
                  href="/blogs/category/slug"
                  className="text-title bg-themeColor dark:bg-[#001F28] hover:bg-[#ebebeb] dark:hover:bg-[#124757] h-7 sm:h-[42px] rounded-[3px] sm:rounded-[5px] px-3 full-center font-normal sm:font-light min-w-fit text-[10px] sm:text-base"
                >
                  {e}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-[41%] flex items-center justify-center fade-in">
        <SwapBox />
      </section>
    </header>
  );
}

export default Header;
