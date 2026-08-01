import BannerContact from "components/common/Faqs/BannerContact";
import Select from "components/view/SingleCurrency/Comments/Select";
import useFetcher from "hooks/useFetcher";
import dynamic from "next/dynamic";
import { useState } from "react";

const IconContactPhone = dynamic(
  () => import("components/view/ContactUs/icons/IconContactPhone.svg"),
  { ssr: false }
);
const IconUser = dynamic(
  () => import("components/view/ContactUs/icons/IconUser.svg"),
  { ssr: false }
);
const IconPhone2 = dynamic(
  () => import("components/view/ContactUs/icons/IconPhone2.svg"),
  { ssr: false }
);
const IconSend = dynamic(
  () => import("components/view/SingleCurrency/icons/IconSend.svg"),
  { ssr: false }
);

function MainContact() {
  const { post } = useFetcher();
  const [formData, setFormData] = useState({});

  const handelChange = (event) => {
    setFormData((c) => ({ ...c, [event?.target?.id]: event?.target?.value }));
  };

  const handelSubmit = async (event) => {
    event?.preventDefault();

    post("pages/contact-us-form", formData, () => {
      setFormData({ name: "", subject: "", message: "", email: "" });
    });
  };

  return (
    <section className="container my-16 sm:my-[84px]">
      <div className="fade-in center-between mb-[23px] sm:mb-[34px]">
        <div className="center gap-5">
          <h1 className="text-[#292929] dark:text-[#fff] font-semibold dark:font-medium text-[22px] sm:text-[30px]">
            با ما تماس بگیرید
          </h1>
          <div className="text-[#379C94] dark:text-[#379C94] bg-[#EDFCFB] dark:bg-[#001F28] h-[50px] px-[17px] rounded-[5px] hidden md:full-center">
            نیاز به راهنمایی و مشاوره دارید؟
          </div>
        </div>
        <button className="full-center text-primaryText bg-primary w-[126px] sm:w-[158px] h-[42px] sm:h-[53px] rounded-[5px] text-[13px] sm:text-[17px] gap-1 sm:gap-2">
          <IconContactPhone className="scale-[0.8] sm:scale-100" />
          برقرای تماس
        </button>
      </div>

      <div className="fade-in flex items-start justify-between flex-col-reverse lg:flex-row gap-[21px]">
        <div className="bg-white dark:border-opacity-0 border border-solid border-[#E0E0E0] rounded-[4px] sm:rounded-[5px] px-[18px] sm:x-[23px] py-5 sm:py-4 w-full">
          <div className="text-[#393939] dark:text-[#DFDFDF] text-sm sm:text-base">
            شما می‌توانید از طریق فرم روبه‌رو و یا شماره‌ زیر با ما در ارتباط
            باشید.
          </div>
          <form
            onSubmit={handelSubmit}
            className="grid grid-cols-12 mt-3.5 sm:mt-4 gap-[17px] sm:gap-5"
          >
            <div className="col-span-12">
              <div>
                <label
                  className="text-[#1C1C1C] dark:text-[#F5F5F5] font-semibold dark:font-medium dark text-sm sm:text-base mb-2 sm:mb-[11px] block"
                  htmlFor="username"
                >
                  موضوع
                </label>
                <div className="h-12 sm:h-[63px] w-full  border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden center">
                  <input
                    id="subject"
                    type="text"
                    className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#757575] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base"
                    placeholder="موضوع را وارد نمایید"
                    onChange={handelChange}
                    value={formData?.subject}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div>
                <label
                  className="text-[#1C1C1C] dark:text-[#F5F5F5] font-semibold dark:font-medium dark text-sm sm:text-base mb-2 sm:mb-[11px] block"
                  htmlFor="username"
                >
                  نام و نام خانوادگی
                </label>
                <div className="h-12 sm:h-[63px] w-full  border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden center">
                  <input
                    id="name"
                    type="text"
                    className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#757575] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base"
                    placeholder=" نام و نام خانوادگی را وارد نمایید"
                    onChange={handelChange}
                    value={formData?.name}
                  />
                  <span className="block bg-[#EDFCFB] dark:bg-[#032934] w-[56px] h-full rounded-[5px] min-w-[56px] full-center">
                    <IconUser />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div>
                <label
                  className="text-[#1C1C1C] dark:text-[#F5F5F5] font-semibold dark:font-medium dark text-sm sm:text-base mb-2 sm:mb-[11px] block"
                  htmlFor="phone"
                >
                  ایمیل
                </label>
                <div className="h-12 sm:h-[63px] w-full  border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden center">
                  <input
                    id="email"
                    type="email"
                    className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#757575] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base"
                    placeholder=" ایمیل را وارد نمایید"
                    onChange={handelChange}
                    value={formData?.email}
                  />
                  <span className="block bg-[#EDFCFB] dark:bg-[#032934] w-[56px] h-full rounded-[5px] min-w-[56px] full-center">
                    <IconPhone2 />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div>
                <label
                  className="text-[#1C1C1C] dark:text-[#F5F5F5] font-semibold dark:font-medium dark text-sm sm:text-base mb-2 sm:mb-[11px] block"
                  htmlFor="message"
                >
                  متن پیام
                </label>
                <div className="h-[114px] sm:h-[131px] w-full border border-solid border-[#B0B0B0] rounded-[5px] dark:border-[#324B53] overflow-hidden center">
                  <textarea
                    type="text"
                    className="w-full h-full border-none outline-none text-[#0D0D0D] dark:text-[#FAFAFA] placeholder:text-[#2E2E2E] dark:placeholder:text-[#DFDFDF] px-2.5 sm:px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base resize-none py-3"
                    placeholder="متن پیام را وارد نمایید."
                    id="message"
                    onChange={handelChange}
                    value={formData?.message}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <button className="full-center bg-[#4EDFD4] rounded-[5px] w-[179px] sm:w-[204px] h-12 sm:h-[53px] gap-2 text-[#404040] glass hover:opacity-80 text-sm sm:text-[17px]">
                <IconSend className="scale-90 sm:scale-100" />
                ارسال فرم پشتیبانی
              </button>
            </div>
          </form>
        </div>
        <BannerContact size="large" />
      </div>
    </section>
  );
}

export default MainContact;
