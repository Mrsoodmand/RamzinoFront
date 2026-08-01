import dynamic from "next/dynamic";
import Image from "next/image";

const IconCode = dynamic(
  () => import("components/view/DocApi/icons/IconCode.svg"),
  { ssr: false }
);

function DetailSection() {
  return (
    <section className="fade-in max-w-[1325px] px-5 sm:px-10 mx-auto mt-10">
      <div className="center-between flex-col-reverse 2md:flex-row gap-y-[25px]">
        <div className="w-full">
          <h1 className="hidden 2md:flex mb-6 gap-1 sm:gap-[14px] items-center justify-center sm:justify-start font-semibold text-[21px] sm:text-[30px] my-6 text-title">
            <IconCode className="dark:[&>path]:stroke-[#FFFFFF] scale-75 sm:scale-100" />
            امکانات API رمزینو
          </h1>
          <ul className="list-disc pr-2.5 sm:pr-[30px]">
            <li className="text-[#3C3C3C] dark:text-[#DFDFDF] font-semibold dark:font-medium text-sm sm:text-xl mb-3 text-justify sm:text-start">
              دسترسی به اطلاعات، لیست معاملات و سفارش‌های بازارهای معاملاتی
              رمزینو و ...
            </li>
            <li className="text-[#3C3C3C] dark:text-[#DFDFDF] font-semibold dark:font-medium text-sm sm:text-xl mb-3 text-justify sm:text-start">
              امکان سفارش‌گذاری (Market, Stop Limit, Stop Market و Limit)
            </li>
            <li className="text-[#3C3C3C] dark:text-[#DFDFDF] font-semibold dark:font-medium text-sm sm:text-xl mb-3 text-justify sm:text-start">
              خرید و فروش آنی بیش از ۱۵۰ کوین (OTC)
            </li>
            <li className="text-[#3C3C3C] dark:text-[#DFDFDF] font-semibold dark:font-medium text-sm sm:text-xl mb-3 text-justify sm:text-start">
              و ...{" "}
            </li>
          </ul>
        </div>
        <div className="w-[371px] min-w-[371px]">
          <h1 className="flex 2md:hidden gap-1 sm:gap-[14px] items-center justify-center sm:justify-start font-semibold text-[21px] sm:text-[30px] text-title">
            <IconCode className="dark:[&>path]:stroke-[#FFFFFF] scale-75 sm:scale-100" />
            امکانات API رمزینو
          </h1>
          <Image
            src="/images/api-balon.png"
            alt="امکانات API رمزینو"
            layout="fixed"
            width={371}
            height={371}
            className="dark:hidden max-w-[366px] sm:max-w-[371px]"
          />
          <Image
            src="/images/api-balon-dark.png"
            alt="امکانات API رمزینو"
            layout="fixed"
            width={371}
            height={371}
            className="hidden dark:block max-w-[366px] sm:max-w-[371px]"
          />
        </div>
      </div>
    </section>
  );
}

export default DetailSection;
