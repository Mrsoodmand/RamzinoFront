/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Header({ data }) {
  return (
    <section className="relative p-1 overflow-hidden dark:bg-[radial-gradient(140%_120%_at_20%_90%,#9FF3EA_0%,#5FCFC6_30%,#0F6F6E_55%,#0A2F33_100%)] bg-[radial-gradient(ellipse_farthest-corner_at_25%_80%,#FFFFFF_0%,#FFFFFF_25%,#E0FFFF_45%,#AEEEEE_65%,#82f1f4_100%)]">
      <div className="container flex flex-col lg:flex-row items-center justify-between flex-wrap lg:flex-nowrap py-10 md:py-32 gap-8">
        <div className="">
          <h2 className="text-2xl text-center lg:text-right sm:text-[34px] font-semibold text-title leading-10 sm:leading-[50px]">
            {data?.title}
          </h2>
          <span className="my-6 text-center lg:text-right text-[#383838] dark:text-[#D5D5D5] font-normal text-xs sm:text-base block">
            {data?.description}
          </span>
          <Link
            href="https://panel.ramzino.me/user/login"
            className="mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] flex items-center justify-center"
          >
            ساخت درگاه پرداخت
          </Link>
        </div>

        <img
          src="/images/landing/card-vector.webp"
          alt="card-vector"
          className=""
        />
      </div>
    </section>
  );
}

export default Header;
