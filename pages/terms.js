import Breadcrumb from "components/common/Breadcrumb";
import Seo from "components/common/Seo";
import MainLayout from "components/layout/MainLayout";
import AboutUs from "components/view/AboutUs";
import serverFetcher from "hooks/useFetcher/serverFetcher";

function Terms({ pageData }) {
  return (
    <MainLayout>
      <Seo data={pageData?.data?.seo} />

      <Breadcrumb
        list={[
          {
            text: "قوانین و مقررات",
            href: "#",
          },
        ]}
      />
      <section className="max-w-[1436px] sm:px-10 mx-auto w-full mt-20 2md:mt-32 fade-in -mb-20 sm:mb-0">
        <div className="bg-white rounded-[10px] py-5 sm:py-8 px-6 sm:px-7 md:px-[46px] full-center flex-col gap-5 sm:gap-[37px] min-h-[348px]">
          <h2 className="text-title font-semibold text-xl sm:text-2xl md:text-[30px] text-center">
            قوانین و مقررات
          </h2>
          <p className="text-[#3C3C3C] dark:text-[#DFDFDF] font-light text-[13px] sm:text-base md:text-xl text-center max-w-[1278px] md:leading-[30px]">
            بیت‌پین محصول شرکت «سنا ایمن مبادله» از برجسته‌ترین شرکت‌های حوزه‌
            فناوری اطلاعات و ارتباطات، مدیریت مالی و سرمایه‌گذاری متشکل از
            خبرگان حوزه فناوری و مدیریت مالی است. تیم بیت‌پین با توجه به نیاز
            بازار و اهمیت ارزهای دیجیتال در آینده‌ی بازارهای مالی، تصمیم به
            ایجاد یک پلتفرم معاملاتی برای خریدوفروش ارزهای دیجیتال گرفت. در حال
            حاضر، بیت‌پین به‌عنوان یکی از بزرگترین و معتبرترین صرافی‌های ارز
            دیجیتال در ایران شناخته می‌شود که با تکیه بر فناوری بلاکچین، امکان
            خریدوفروش رمزارزهایی مانند بیت‌کوین، اتریوم و آلت‌کوین‌های مختلف را
            فراهم کرده است. بیت‌پین با در نظر گرفتن الزامات قانونی و حقوقی برای
            سرمایه‌گذاران، سعی در ارائه بهترین خدمات با بالاترین امنیت به
            مشتریان خود را دارد و در این زمینه به منظور تضمین امنیت تراکنش‌های
            مالی و حریم خصوصی کاربران، از استانداردهای امنیتی بالا و روش‌های
            احراز هویت مطمئن، استفاده می‌کند.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      pageData: await serverFetcher.get("pages/about-us"),
    },
  };
};

export default Terms;
