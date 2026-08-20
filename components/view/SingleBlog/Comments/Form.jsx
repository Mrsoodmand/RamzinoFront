import classes from "hooks/classes";
import useFetcher from "hooks/useFetcher";
import dynamic from "next/dynamic";
import { useState } from "react";

const IconPlase = dynamic(() => import("icons/Blog/IconPlase.svg"), {
  ssr: false,
});

const EMPTY = { name: "", email: "", comment: "" };
const MAX_LENGTH = 1000;

const validate = ({ name, email, comment }) => {
  const errors = {};

  if (!name?.trim()) errors.name = "نام خود را وارد کنید.";
  if (!email?.trim()) errors.email = "ایمیل خود را وارد کنید.";
  else if (!/^\S+@\S+\.\S+$/.test(email.trim()))
    errors.email = "ایمیل وارد شده معتبر نیست.";
  if (!comment?.trim()) errors.comment = "متن دیدگاه را بنویسید.";
  else if (comment.trim().length < 5)
    errors.comment = "دیدگاه باید کمی طولانی‌تر باشد.";

  return errors;
};

const field =
  "w-full rounded-[4px] border border-solid bg-transparent px-3.5 py-2.5 text-[13px] text-[#373A41] outline-none transition-colors duration-300 placeholder:text-[#8B9095] dark:text-[#E3E2E1] dark:placeholder:text-[#5C7079] sm:text-base";

function Form({ post_id }) {
  const { post } = useFetcher(false);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((c) => ({ ...c, [name]: value }));
    // Clear the message as soon as the field is touched, so it never lingers
    // over input the reader has already corrected.
    setErrors((c) => (c[name] ? { ...c, [name]: undefined } : c));
  };

  const handelSubmit = async (event) => {
    event?.preventDefault();
    if (sending) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    setSent(false);

    await post("comment/submit", { ...values, post_id, type: "blog" }, () => {
      setValues(EMPTY);
      setSent(true);
    });

    setSending(false);
  };

  const border = (key) =>
    errors[key]
      ? "border-[#D25F5F] focus:border-[#D25F5F]"
      : "border-[#B7B7B7] focus:border-primary dark:border-[#173138] dark:focus:border-[#1d4652]";

  return (
    <form
      onSubmit={handelSubmit}
      noValidate
      className="fade-in mt-5 rounded-[4px] bg-[#F5F5F6] px-[17px] py-[18px] dark:bg-[#001F28] sm:mt-[29px]"
    >
      <div className="mb-[22px] text-sm font-semibold text-[#373A41] dark:text-[#E3E2E1] sm:text-base">
        ثبت دیدگاه جدید
      </div>

      <div className="mb-6 grid grid-cols-12 gap-x-0 sm:gap-x-7 gap-y-4">
        <div className="col-span-12 sm:col-span-6">
          <input
            className={classes(field, border("name"), "h-[56px]")}
            placeholder="نام خود را وارد نمایید"
            id="name"
            name="name"
            aria-invalid={errors.name ? "true" : undefined}
            onChange={onChange}
            value={values.name}
          />
          {errors.name && (
            <p className="mt-1.5 text-[12px] text-[#D25F5F]">{errors.name}</p>
          )}
        </div>
        <div className="col-span-12 sm:col-span-6">
          <input
            className={classes(field, border("email"), "h-[56px]")}
            placeholder="ایمیل خود را وارد کنید"
            id="email"
            name="email"
            type="email"
            aria-invalid={errors.email ? "true" : undefined}
            onChange={onChange}
            value={values.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-[12px] text-[#D25F5F]">{errors.email}</p>
          )}
        </div>
      </div>

      <textarea
        placeholder="متن دیدگاه خود را وارد نمایید"
        className={classes(field, border("comment"), "h-[113px] resize-none")}
        onChange={onChange}
        value={values.comment}
        maxLength={MAX_LENGTH}
        aria-invalid={errors.comment ? "true" : undefined}
        name="comment"
        id="comment"
      />

      <div className="mt-1.5 center-between gap-3">
        <p className="text-[12px] text-[#D25F5F]">{errors.comment || ""}</p>
        <span className="shrink-0 text-[12px] tabular-nums text-[#5C6165] dark:text-[#8FA3AB]">
          {values.comment.length}/{MAX_LENGTH}
        </span>
      </div>

      <div className="center-between mt-[22px] flex-wrap gap-3">
        <p className="text-[12px] text-[#2B758C] dark:text-[#6CE4DB] sm:text-[13px]">
          {sent ? "دیدگاه شما ثبت شد و پس از بررسی نمایش داده می‌شود." : ""}
        </p>
        <button
          type="submit"
          disabled={sending}
          className="btn btn-accent h-11 text-[#0C0C0C] disabled:opacity-60"
        >
          {sending ? "در حال ارسال…" : "افزودن دیدگاه"}
          {!sending && <IconPlase className="scale-90 sm:scale-100" />}
        </button>
      </div>
    </form>
  );
}

export default Form;
