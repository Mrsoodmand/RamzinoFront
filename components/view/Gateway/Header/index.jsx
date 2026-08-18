/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Backdrop from "./Backdrop";

function Header({ data }) {
  return (
    <section className="relative p-1 overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#EAFBFA_60%,#D3F5F2_100%)] dark:bg-[linear-gradient(180deg,#062A33_0%,#063C42_60%,#0A5457_100%)]">
      <Backdrop />

      <div className="relative container flex flex-col lg:flex-row items-center justify-between flex-wrap lg:flex-nowrap py-10 md:py-32 gap-8">
        <div className="">
          <h2 className="text-2xl text-center lg:text-right sm:text-[34px] font-semibold text-title leading-10 sm:leading-[50px]">
            {data?.title}
          </h2>
          <span className="my-6 text-center lg:text-right text-[#383838] dark:text-[#D5D5D5] font-normal text-xs sm:text-base block">
            {data?.description}
          </span>
          <Link
            href="https://panel.ramzino.me/user/login"
            className="btn btn-primary mx-auto lg:mx-0 text-center"
          >
            ساخت درگاه پرداخت
          </Link>
        </div>

        <img
          src="/images/landing/card-vector.webp"
          alt="card-vector"
        />
      </div>
    </section>
  );
}

export default Header;
