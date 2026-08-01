import classes from "hooks/classes";
import dynamic from "next/dynamic";

const IconPhone = dynamic(
  () => import("components/common/Faqs/IconPhone.svg"),
  { ssr: false }
);
import Image from "next/image";

function BannerContact({ size = "small", image }) {
  return (
    <div
      className={classes(
        "block sm:hidden lg:block bg-primary w-full rounded-[3px] sm:rounded-xl max-w-full sm:max-w-[512px] px-7 py-5 relative fade-in",
        `h-[360px]`,
        size === "large" ? "sm:h-[548px]" : "sm:h-[512px]"
      )}
    >
      <div className="flex items-start justify-between flex-wrap">
        <div className="text-[18px] sm:text-xl xl:text-[26px] font-semibold text-primaryText">
          تیم پشتیانی رمزینو
        </div>
        <div className="text-base sm:text-xl xl:text-2xl text-primaryText pt-3.5">
          24 ساعت شبانه روز
        </div>
      </div>
      <div className="center-end mt-10 sm:mt-14 sm:px-3">
        <div className="text-[22px] sm:text-2xl xl:text-[32px] font-normal full-center flex-col gap-2 sm:gap-3 xl:gap-9">
          <IconPhone className="scale-75" />
          <span className="center gap-2 sm:gap-3 text-[#003E52] ">
            <b className="font-bold">435346</b>
            021
          </span>
        </div>
      </div>
      <Image
        src={image || "/images/faq-image.webp"}
        alt="سوالات متداول"
        layout="fixed"
        width={350}
        height={470}
        className="absolute right-0 bottom-0 max-w-[233px] sm:max-w-[250px] xl:max-w-[350px]"
      />
    </div>
  );
}

export default BannerContact;
