import classes from "hooks/classes";

function Detail() {
  return (
    <section className="fade-in container mt-12 lg:mt-4">
      <div className="center bg-white rounded-[5px] h-[47px] sm:h-[57px] px-2 w-fit gap-2 sm:gap-2.5">
        <button
          className={classes(
            "text-[13px] sm:text-base min-w-fit full-center font-semibold h-[33px] sm:h-[41px] px-[18px] sm:px-[22px] rounded-[5px]",
            true
              ? "text-[#404040] bg-primary"
              : "text-[#373A41] dark:text-[#F5F5F5] dark:hover:bg-[#0d2835] hover:bg-[#f5f5f5]"
          )}
        >
          کارمزد معامله
        </button>
        <button
          className={classes(
            "text-[13px] sm:text-base min-w-fit full-center font-semibold h-[33px] sm:h-[41px] px-[18px] sm:px-[22px] rounded-[5px]",
            false
              ? "text-[#404040] bg-primary"
              : "text-[#373A41] dark:text-[#F5F5F5] dark:hover:bg-[#0d2835] hover:bg-[#f5f5f5]"
          )}
        >
          کارمزد برداشت
        </button>
        <button
          className={classes(
            "text-[13px] sm:text-base min-w-fit full-center font-semibold h-[33px] sm:h-[41px] px-[18px] sm:px-[22px] rounded-[5px]",
            false
              ? "text-[#404040] bg-primary"
              : "text-[#373A41] dark:text-[#F5F5F5] dark:hover:bg-[#0d2835] hover:bg-[#f5f5f5]"
          )}
        >
          کارمزد معامله
        </button>
      </div>
      <article className="mt-[18px] sm:mt-8">
        <div className="text-title font-semibold text-[25px]">
          کارمزدهای بازارهای معاملاتی
        </div>
        <p className="text-[#3C3C3C] dark:text-[#DFDFDF] font-normal text-[15px] sm:text-xl text-justify leading-7 mt-5">
          در هر معامله، درصدی از کل مبلغ معامله به عنوان کارمزد از هر دو سمت
          معامله کسر خواهد شد. این کارمزد جلوی ثبت معاملات صوری و تکراری را
          خواهد گرفت و شرایط مناسب‌تری را در بازار برای تمامی کاربران ایجاد
          خواهد کرد.
        </p>
        <p className="text-[#3C3C3C] dark:text-[#DFDFDF] font-normal text-[15px] sm:text-xl text-justify leading-7 mt-5">
          در هر معامله، درصدی از کل مبلغ معامله به عنوان کارمزد از هر دو سمت
          معامله کسر خواهد شد. این کارمزد جلوی ثبت معاملات صوری و تکراری را
          خواهد گرفت و شرایط مناسب‌تری را در بازار برای تمامی کاربران ایجاد
          خواهد کرد. در هر معامله، درصدی از کل مبلغ معامله به عنوان کارمزد از هر
          دو سمت معامله کسر خواهد شد. این کارمزد جلوی ثبت معاملات صوری و تکراری
          را خواهد گرفت و شرایط مناسب‌تری را در بازار برای
        </p>
      </article>
    </section>
  );
}

export default Detail;
