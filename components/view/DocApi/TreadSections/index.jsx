import dynamic from "next/dynamic";
import Image from "next/image";
import { dataLanguages } from "../data";

const IconUsers = dynamic(
  () => import("components/view/DocApi/icons/IconUsers.svg"),
  { ssr: false }
);
const IconPc = dynamic(
  () => import("components/view/DocApi/icons/IconPc.svg"),
  { ssr: false }
);
const IconKeys = dynamic(
  () => import("components/view/DocApi/icons/IconKeys.svg"),
  { ssr: false }
);
const IconSpat = dynamic(
  () => import("components/view/DocApi/icons/IconSpat.svg"),
  { ssr: false }
);
const IconWallet = dynamic(
  () => import("components/view/DocApi/icons/IconWallet.svg"),
  { ssr: false }
);
const IconSwap = dynamic(
  () => import("components/view/DocApi/icons/IconSwap.svg"),
  { ssr: false }
);
const IconChart = dynamic(
  () => import("components/view/DocApi/icons/IconChart.svg"),
  { ssr: false }
);

function TreadSections() {
  return (
    <section className="max-w-[1325px] px-5 sm:px-10 mx-auto mt-14">
      <div className="fade-in mb-[21px] sm:mb-[31px]">
        <h2 className="text-title font-semibold text-[21px] sm:text-[27px]">
          یکپارچه سازی ترید
        </h2>
        <p className="text-[#3C3C3C] dark:text-[#DFDFDF] text-sm sm:text-xl font-normal mt-4 sm:mt-[21px]">
          از معاملات API نقطه، حاشیه، آتی و گزینه برای بیش از 300 ارز دیجیتال
          پشتیبانی کنید
        </p>
      </div>
      <div className="grid grid-cols-12 gap-y-4 lg:gap-y-10 gap-x-0 lg:gap-x-7">
        <div className="fade-in hidden lg:full-center col-span-12 bg-white shadow-[0px_0px_74px_0px_#0000000A] rounded-[5px] min-h-[273px] flex-col gap-x-[22px]">
          <div className="center-between w-full max-w-[92%] xl:max-w-[84%]">
            <div className="full-center flex-col text-[#404040] dark:text-[#F5F5F5] text-xl font-semibold min-w-[152px]">
              کاربران
              <span className="full-center bg-primary w-[92px] h-[92px] rounded-full block mt-[19px]">
                <IconUsers />
              </span>
            </div>

            <div className="flex items-center h-full min-h-full flex-col w-full">
              <div className="mb-11 w-[82%]">
                <h3 className="full-center text-[#404040] dark:text-[#F5F5F5] text-xl font-semibold mb-[21px]">
                  ایجاد/مدیریت کلیدهای API
                </h3>
                <Image
                  src="/images/arrow-secondary.png"
                  alt="Arrow Secondary"
                  width={10}
                  height={2}
                  layout="responsive"
                  className="pointer-events-none select-none"
                />
              </div>
              <div className="flex items-center justify-between gap-[55px] w-[82%]">
                <div className="full-center flex-col">
                  <Image
                    src="/images/arrow-left-primary.png"
                    alt="Arrow primary"
                    layout="responsive"
                    className="pointer-events-none select-none"
                    width={10}
                    height={2}
                  />
                  <div className="text-[#404040] dark:text-[#F5F5F5] font-semibold text-[17px] mt-4">
                    کلید ها را مستقر کنید
                  </div>
                </div>
                <div className="flex items-center justify-end flex-col text-[#404040] dark:text-[#F5F5F5] text-xl font-semibold">
                  <span className="full-center bg-primary w-[73px] h-[73px] rounded-full block mb-[19px]">
                    <IconKeys />
                  </span>
                  کلید ها
                </div>
                <div className="full-center flex-col">
                  <Image
                    src="/images/arrow-left-primary.png"
                    alt="Arrow primary"
                    layout="responsive"
                    className="pointer-events-none select-none"
                    width={10}
                    height={2}
                  />
                  <div className="text-[#404040] dark:text-[#F5F5F5] font-semibold text-[17px] mt-4">
                    ترید و درخواست
                  </div>
                </div>
              </div>
            </div>

            <div className="full-center flex-col text-[#404040] dark:text-[#F5F5F5] text-xl min-w-[152px] font-semibold">
              اکوسیستم رمزینو
              <span className="full-center bg-primary w-[92px] h-[92px] rounded-full block mt-[19px]">
                <IconPc />
              </span>
            </div>
          </div>
        </div>
        <div className="fade-in col-span-12 lg:col-span-6 bg-white shadow-[0px_0px_74px_0px_#0000000A] rounded-[2px] sm:rounded-[5px] min-h-[171px] sm:min-h-[322px] lg:min-h-[390px] xl:min-h-[322px] flex justify-center flex-col gap-x-[22px] px-6 sm:px-11 pt-2 sm:pt-0">
          <h2 className="text-sm sm:text-base md:text-[27px] font-semibold text-title">
            معاملات اسپات
            <span className="text-[#757575] dark:text-[#ccc] mr-1">
              (پکیج Api)
            </span>
          </h2>
          <p className="text-[#3C3C3C] dark:text-[#DFDFDF] font-normal text-[10px] sm:text-base md:text-xl mt-[17px] mb-2 sm:my-[32px]">
            پکیج های متنوع و مختلف از کلید های متنوع
          </p>
          <div className="flex w-full max-w-[320px] sm:max-w-[602px] flex-wrap gap-y-[0px] sm:gap-y-7 -mr-3 sm:mr-0">
            <div className="w-2/4 sm:gap-[11px] center text-title font-semibold dark:font-medium text-[11px] sm:text-lg xl:text-[22px]">
              <IconSpat className="dark:[&>*]:stroke-[#F5F5F5] scale-[0.55] sm:scale-100" />
              معامله اسپات
            </div>
            <div className="w-2/4 sm:gap-[11px] center text-title font-semibold dark:font-medium text-[11px] sm:text-lg xl:text-[22px]">
              <IconWallet className="dark:[&>*]:stroke-[#F5F5F5] scale-[0.55] sm:scale-100" />
              اکانت اختصاصی
            </div>
            <div className="-mt-2 sm:mt-0 w-2/4 sm:gap-[11px] center text-title font-semibold dark:font-medium text-[11px] sm:text-lg xl:text-[22px]">
              <IconSwap className="dark:[&>*]:stroke-[#F5F5F5] scale-[0.55] sm:scale-100" />
              سواپ سریع
            </div>
            <div className="-mt-2 sm:mt-0 w-2/4 sm:gap-[11px] center text-title font-semibold dark:font-medium text-[11px] sm:text-lg xl:text-[22px]">
              <IconChart className="dark:[&>*]:stroke-[#F5F5F5] scale-[0.55] sm:scale-100" />
              چارت اختصاصی
            </div>
          </div>
        </div>
        <div className="fade-in col-span-12 lg:col-span-6 bg-white shadow-[0px_0px_74px_0px_#0000000A] rounded-[2px] sm:rounded-[5px] min-h-[171px] sm:min-h-[322px] lg:min-h-[390px] xl:min-h-[322px] flex justify-center flex-col gap-x-[22px] px-10 sm:px-11">
          <h2 className="text-sm sm:text-base md:text-[27px] font-semibold text-title">
            SDK-API
          </h2>
          <p className="text-[#3C3C3C] dark:text-[#DFDFDF] font-normal text-[10px] sm:text-base md:text-xl my-[17px] sm:my-[32px]">
            تسهیل فرآیند اجرای معامله‌های خودکار با نصب SDKها
          </p>
          <div className="center flex-wrap gap-2 sm:gap-4">
            {dataLanguages?.map((e, i) => (
              <div
                key={i}
                className="full-center text-title text-[11px] sm:text-sm md:text-base lg:text-[22px] font-semibold dark:font-medium bg-[#F5F5F5] dark:bg-[#032934] rounded-full h-[26px] sm:h-[50px] px-2.5 sm:px-5"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreadSections;
