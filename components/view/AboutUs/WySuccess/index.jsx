import Image from "next/image";
import Link from "next/link";

function WySuccess({ data }) {
  return (
    <section className="container mt-16 sm:mt-20 pb-10 lg:-mb-7 fade-in">
      <div className="center-between min-h-[416px] flex-col lg:flex-row">
        <div className="w-full xl:w-[460px] xl:min-w-[460px] flex items-start lg:justify-center flex-col gap-5">
          <h3 className="lg:hidden text-title font-semibold text-[21px] sm:text-[30px]">
            {data?.title}
          </h3>
          <Image
            src={data?.img}
            alt={data?.altImg}
            layout="fixed"
            width={460}
            height={490}
            className="animate-pulse mx-auto max-w-[304px] sm:max-w-[460px]"
          />
        </div>
        <div className="w-full max-w-[816px]">
          <h3 className="hidden lg:block text-title font-semibold text-[30px]">
            {data?.title}
          </h3>
          <p className="text-[#262931] sm:text-[#3C3C3C] dark:text-[#DFDFDF] font-medium sm:font-light text-xs sm:text-xl text-justify leading-[23px] sm:leading-7 my-6">
            {data?.description}
          </p>
          <Link
            className="btn btn-accent"
            href="/contact-us"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WySuccess;
