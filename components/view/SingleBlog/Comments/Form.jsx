import useFetcher from "hooks/useFetcher";
import dynamic from "next/dynamic";
import { useState } from "react";

const IconPlase = dynamic(() => import("icons/Blog/IconPlase.svg"), {
  ssr: false,
});
function Form({ post_id }) {
  const { post } = useFetcher();
  const [FormData, setFormData] = useState({});

  const handelSubmit = async (event) => {
    event?.preventDefault();

    post("comment/submit", { ...FormData, post_id, type: "blog" }, (res) => {
      setFormData({ name: "", email: "", comment: "" });
    });
  };

  const onChange = (event) => {
    const { value, name } = event?.target;

    setFormData((c) => ({ ...c, [name]: value }));
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="fade-in bg-[#F5F5F6] dark:bg-[#001F28] px-[17px] py-[18px] rounded-[4px] mt-5 sm:mt-[29px]"
    >
      <div className="text-[#373A41] dark:text-[#E3E2E1] font-semibold mb-[22px] text-sm sm:text-base">
        ثبت دیدگاه جدید
      </div>

      <div className="grid grid-cols-12 gap-7 mb-6">
        <div className="col-span-12 sm:col-span-6">
          <input
            className="text-[#373A41] border border-solid border-[#B7B7B7] w-full rounded-[4px] h-[56px] px-3.5 py-2.5 placeholder:text-[#373A41] bg-[#fff] bg-opacity-0 resize-none outline-none focus:border-[#8b8b8b] dark:border-[#173138] dark:text-[#E3E2E1] dark:placeholder:text-[#E3E2E1] dark:focus:border-[#1d4652] text-[13px] sm:text-base"
            placeholder="نام خود را وارد نمایید"
            id="name"
            name="name"
            onChange={onChange}
            value={FormData?.name}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            className="text-[#373A41] border border-solid border-[#B7B7B7] w-full rounded-[4px] h-[56px] px-3.5 py-2.5 placeholder:text-[#373A41] bg-[#fff] bg-opacity-0 resize-none outline-none focus:border-[#8b8b8b] dark:border-[#173138] dark:text-[#E3E2E1] dark:placeholder:text-[#E3E2E1] dark:focus:border-[#1d4652] text-[13px] sm:text-base"
            placeholder="ایمیل خود را وارد کنید"
            id="email"
            name="email"
            type="email"
            onChange={onChange}
            value={FormData?.email}
          />
        </div>
      </div>

      <textarea
        placeholder="متن دیدگاه خود را وارد نمایید"
        className="text-[#373A41] border border-solid border-[#B7B7B7] w-full rounded-[4px] h-[113px] px-3.5 py-2.5 placeholder:text-[#373A41] bg-[#fff] bg-opacity-0 resize-none outline-none focus:border-[#8b8b8b] dark:border-[#173138] dark:text-[#E3E2E1] dark:placeholder:text-[#E3E2E1] dark:focus:border-[#1d4652] text-[13px] sm:text-base"
        onChange={onChange}
        value={FormData?.comment}
        name="comment"
        id="comment"
      />
      <div className="center-end mt-[22px]">
        <button className="full-center text-[#0C0C0C] bg-primary rounded-[2px] w-[130px] sm:w-[169px] h-11 sm:h-[57px] gap-2 sm:gap-2.5 glass hover:opacity-80 text-xs sm:text-base">
          افزودن دیدگاه
          <IconPlase className="scale-90 sm:scale-100" />
        </button>
      </div>
    </form>
  );
}

export default Form;
