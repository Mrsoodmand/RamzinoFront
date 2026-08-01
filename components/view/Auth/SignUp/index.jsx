import Image from "next/image";
import React from "react";
import User from "icons/Auth/User.svg";
import Phone from "icons/Auth/Phone.svg";
import Lock from "icons/Auth/Lock.svg";
import Link from "next/link";
const SignUp = () => {
  return (
    <main className="w-full h-svh bg-[#041C23] grid grid-cols-12">
      <div className="col-span-12 md:col-span-6 relative z-0 after:content-[''] md:flex hidden items-center justify-center after:w-full after:h-full after:bg-[#041C23] after:bg-opacity-80 after:absolute">
        <Image
          src={"/images/authBg.webp"}
          alt="عکس پس سزمینه ثبت نام"
          width={720}
          height={140}
          className="w-full h-full max-w-full absolute -z-[1] inset-0 max-h-svh"
        />
        <div className="flex z-10 items-center justify-center max-w-[620px] mx-auto flex-col gap-[31px] px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-[60px] font-bold text-white">Ramzino</div>
            <Image
              alt="لوگو"
              src={"/images/logoSmall.webp"}
              width={86}
              height={86}
            />
          </div>
          <article className="text-white leading-6 text-[17px] flex items-center justify-center text-center w-full">
            حساب اینترنتی مطمئن برای نگهداری دارایی شما.
            <br></br>
            با سامانه رمزینو من خرید و فروش و دارایی های دیجیتال خود را به آسان
            مدیریت کنید
          </article>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 flex items-center justify-center px-5 sm:px-7">
        <div className="flex items-center flex-col mx-auto w-full max-w-[471px]">
          <div className="flex items-center justify-center flex-col gap-[42px] sm:gap-[54px]">
            <div className="flex items-center flex-col gap-6 justify-center">
              <h1 className="text-white text-[25px] sm:text-[27px] font-semibold">
                ثبت نام در رمزینو
              </h1>
              <p className="text-white text-[15px] sm:text-[17px] font-medium text-center">
                جهت انجام امور معاملاتی نیاز به حساب کاربری دارید{" "}
              </p>
            </div>
            <div className="flex w-full flex-wrap gap-[19px] ">
              <div className="flex items-center w-full rounded-[5px] border-[1px] bg-[#001F28] border-[#13343E] justify-between">
                <input
                  type="text"
                  className="text-sm sm:text-base bg-[#fff0] w-full pr-3 h-full outline-none border-none text-[#ededed]"
                  id="user"
                  placeholder="نام و نام خانوادگی را وارد کنید"
                />
                <label
                  htmlFor="user"
                  className="w-[56px] min-w-[56px] h-[61px] flex items-center justify-center rounded-[5px] bg-[#003E52]"
                >
                  <Phone />
                </label>
              </div>
              <div className="flex items-center w-full rounded-[5px] border-[1px] bg-[#001F28] border-[#13343E] justify-between">
                <input
                  type="text"
                  className="text-sm sm:text-base bg-[#fff0] w-full pr-3 h-full outline-none border-none text-[#ededed]"
                  id="user"
                  placeholder="تلفن خود را وارد فرمایید"
                />
                <label
                  htmlFor="user"
                  className="w-[56px] min-w-[56px] h-[61px] flex items-center justify-center rounded-[5px]  bg-[#003E52]"
                >
                  <Lock />
                </label>
              </div>
              <div className="flex items-center w-full rounded-[5px] border-[1px] bg-[#001F28] border-[#13343E] justify-between">
                <input
                  type="text"
                  className="text-sm sm:text-base bg-[#fff0] w-full pr-3 h-full outline-none border-none text-[#ededed]"
                  id="user"
                  placeholder="رمز عبور خود را وارد کنید"
                />
                <label
                  htmlFor="user"
                  className="w-[56px] min-w-[56px] h-[61px] flex items-center justify-center rounded-[5px] bg-[#003E52]"
                >
                  <User />
                </label>
              </div>
              <div className="py-3 flex items-center text-xs sm:text-base text-[#ededed] font-medium justify-start gap-3 ">
                <input
                  type="checkbox"
                  className="appearance-none w-[14px] h-[14px] rounded-[2px] border-2 border-[#2B758C]"
                />
                قوانین و مقررات کیف پول من را مطالعه کرده و قبول دارم
              </div>
              <button
                title="ثبت نام"
                className="flex items-center w-full bg-[#6CE4DB] justify-center py-[18px] sm:py-4 text-[#0c0c0c] rounded-[6px] glass hover:opacity-80"
              >
                ثبت نام
              </button>
              <div className="flex items-center justify-center w-full py-3 sm:py-6">
                <span
                  className="h-[1px] w-full "
                  style={{
                    background:
                      " linear-gradient(90deg, rgba(25, 145, 180, 0.10) -48.83%, rgba(25, 145, 180, 0.10) 156.6%)",
                  }}
                ></span>
              </div>
              <div className="flex items-center justify-center w-full text-[#ededed] gap-1 text-sm sm:text-base font-medium">
                حساب کاربری دارید؟
                <Link title="مشاهده" href={"/sign-in"} className="text-primary">
                  وارد شوید
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
