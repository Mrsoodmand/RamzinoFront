import classes from "hooks/classes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { dataNumbersSend } from "./data";
import ItemFaq from "components/common/Faqs/ItemFaq";
import { useState } from "react";
import ModalSelectCurrency from "components/common/ModalSelectCurrency";

const IconBottom = dynamic(
  () => import("components/view/BuySellInstant/icons/IconBottom.svg"),
  { ssr: false }
);
const IconShop = dynamic(
  () => import("components/view/SingleCurrency/icons/IconShop.svg"),
  { ssr: false }
);

function BuySellInstantPage() {
  const [openModalCurrency, setOpenModalCurrency] = useState(false);
  const [open, setOpen] = useState(null);

  return (
    <main className="mt-6 sm:mt-3 mb-12">
      <h1 className="text-[#0C0C0C] dark:text-[#FFFFFF] font-semibold text-xl sm:text-[26px] mb-5 sm:mb-9 full-center fade-in">
        خرید و فروش آنی
      </h1>
      <div className="max-w-[891px] w-full px-4 sm:px-5 mx-auto">
        {/* form  */}
        <div className="w-full bg-white shadow-[0px_0px_74px_0px_#0000000A] rounded-[7px] sm:rounded-[10px] px-4 sm:px-[22px] py-3.5 sm:py-[19px] fade-in">
          <div className="full-center bg-[#F5F5F5] dark:bg-[#032934] rounded-md gap-2 sm:gap-[13px] px-1.5 sm:px-[9px] h-[46px] sm:h-[61px]">
            <button
              className={classes(
                true
                  ? "text-[#0C0C0C] bg-primary"
                  : "dark:text-[#F5F5F5] hover:opacity-80 glass",
                "w-2/4 h-[35px] sm:h-[47px] rounded-[4px] sm:rounded-md full-center text-[13px] sm:text-base"
              )}
            >
              خرید
            </button>
            <button
              className={classes(
                false
                  ? "text-[#0C0C0C] bg-primary"
                  : "dark:text-[#F5F5F5] hover:opacity-80 glass",
                "w-2/4 h-[35px] sm:h-[47px] rounded-[4px] sm:rounded-md full-center text-[13px] sm:text-base"
              )}
            >
              فروش
            </button>
          </div>
          <div className="mt-5 sm:mt-[32px]">
            <div>
              <label
                className="dark:text-[#FAFAFA] text-[#373A41] font-semibold text-[13px] sm:text-[17px] mb-[9px] sm:mb-3 block"
                htmlFor="send"
              >
                پرداخت میکنم
              </label>
              <div className="center dark:bg-[#032934] bg-[#F5F5F5] h-[57px] sm:h-[77px] w-full gap-3 px-2.5 sm:px-3.5">
                <button
                  className="full-center text-[#373A41] dark:text-[#FAFAFA] uppercase gap-1 sm:gap-1.5 font-semibold bg-white dark:bg-[#0E343F] h-[41px] sm:h-[54px] px-3 min-w-[121px] sm:min-w-[161px] rounded-md hover:opacity-80 text-[13px] sm:text-base"
                  title="تغیر ارز"
                  onClick={() => setOpenModalCurrency(true)}
                >
                  <IconBottom className="dark:[&>path]:stroke-[#fafafa]" />
                  <Image
                    src="/images/tests/toman.png"
                    alt="TOMAN"
                    width={37}
                    height={37}
                    layout="fixed"
                    className="rounded-full max-w-[28px] sm:max-w-[37px]"
                  />
                  TMN
                </button>
                <input
                  type="text"
                  placeholder="90,000 ~ 25,000,000"
                  className="w-full h-full text-left bg-[#fff] bg-opacity-0 placeholder:text-[#626262] text-[#0C0C0C] dark:text-[#E3E2E1] dark:placeholder:text-[#E3E2E1] border-none outline-none pl-0.5 sm:pl-1 text-[15px] font-semibold sm:text-xl"
                  dir="ltr"
                />
              </div>
              <div className="overflow-auto none-scroll center gap-[9px] sm:gap-[13px] mt-[11px]">
                {dataNumbersSend?.map((e, i) => (
                  <button
                    key={i}
                    className="text-[#626262] dark:text-[#EDEDED] font-semibold dark:bg-[#032934] bg-[#F5F5F5] hover:bg-[#e0e0e0] rounded-full full-center min-w-fit px-3.5 sm:px-[16.8px] text-xs sm:text-base h-[25px] sm:h-[34px]"
                  >
                    {Number(e)?.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-[21px] sm:mt-7">
              <label
                className="dark:text-[#FAFAFA] text-[#373A41] font-semibold text-[13px] sm:text-[17px] mb-[9px] sm:mb-3 block"
                htmlFor="send"
              >
                دریافت میکنم
              </label>
              <div className="center dark:bg-[#032934] bg-[#F5F5F5] h-[57px] sm:h-[77px] w-full gap-3 px-2.5 sm:px-3.5">
                <button
                  className="full-center text-[#373A41] dark:text-[#FAFAFA] uppercase gap-1 sm:gap-1.5 font-semibold bg-white dark:bg-[#0E343F] h-[41px] sm:h-[54px] px-3 min-w-[121px] sm:min-w-[161px] rounded-md hover:opacity-80 text-[13px] sm:text-base"
                  title="تغیر ارز"
                  onClick={() => setOpenModalCurrency(true)}
                >
                  <IconBottom className="dark:[&>path]:stroke-[#fafafa]" />{" "}
                  <Image
                    src="/images/tests/Layer x0020 1.webp"
                    alt="TOMAN"
                    width={37}
                    height={37}
                    layout="fixed"
                    className="rounded-full max-w-[28px] sm:max-w-[37px]"
                  />
                  TMN
                </button>
                <input
                  type="text"
                  placeholder="0,0"
                  className="w-full h-full text-left bg-[#fff] bg-opacity-0 placeholder:text-[#626262] text-[#0C0C0C] dark:text-[#E3E2E1] dark:placeholder:text-[#E3E2E1] border-none outline-none pl-0.5 sm:pl-1 text-[15px] font-semibold sm:text-xl"
                  dir="ltr"
                />
              </div>
            </div>
            <div className="center-between mt-[9px] sm:mt-3">
              <div className="text-[#626262] dark:text-[#f5f5f5] font-semibold text-xs sm:text-base">
                قیمت همستر
              </div>
              <div className="text-[#626262] dark:text-[#f5f5f5] font-semibold text-xs sm:text-base">
                271,8 تومان
              </div>
            </div>
            <div className="mt-5 sm:mt-[32px]">
              <div className="text-[#626262] dark:text-[#EDEDED] font-semibold text-xs sm:text-base text-center">
                برای خرید نیاز است تا وارد حساب کاربری شده و یا ثبت‌نام کنید.
              </div>
              <button className="full-center bg-[#6CE4DB] w-full h-[50px] sm:h-[67px] gap-1 sm:gap-2.5 rounded-[7px] sm:rounded-[9px] mt-2.5 sm:mt-3 glass hover:opacity-80 text-sm sm:text-[19px] text-[#0C0C0C] relative group">
                <span className="absolute top-0 right-0 text-[#FFFFFF] font-semibold text-[11px] sm:text-[15px] bg-primaryDark w-[77px] sm:w-[102px] h-[29px] sm:h-[39px] full-center rounded-bl-[9px] group-hover:scale-105">
                  کارمزد صفر
                </span>
                <IconShop className="scale-[0.8] sm:scale-100" />
                خرید همستر کامبت
              </button>
            </div>
          </div>
        </div>
        {/* list faqs  */}
        <div className="pt-7 sm:pt-9 fade-in">
          <div className="w-full bg-white  shadow-[0px_0px_74px_0px_#0000000A] rounded-[7px] sm:rounded-[10px] px-4 sm:px-[22px] pt-5 sm:pt-7 pb-3 sm:pb-5">
            <div className="text-[#373A41] dark:text-[#FAFAFA] font-semibold text-sm sm:text-xl mb-[14px] sm:mb-[21px]">
              پرسش های متنوع
            </div>
            <ul>
              {[1, 2, 3, 4]?.map((e, i) => (
                <ItemFaq key={i} i={i} open={open} setOpen={setOpen} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ModalSelectCurrency
        open={openModalCurrency}
        handelClose={() => setOpenModalCurrency(false)}
      />
    </main>
  );
}

export default BuySellInstantPage;
