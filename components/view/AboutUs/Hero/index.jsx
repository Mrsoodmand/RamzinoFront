import Image from "next/image";
import Link from "next/link";

function HeroSection({ data }) {
  return (
    <header className="px-5 sm:px-8 max-w-[1338px] w-full mx-auto mt-6 fade-in">
      <div className="full-center gap-x-9 flex-col-reverse lg:flex-row">
        <div className="w-full">
          <h1 className="hidden lg:block text-title font-medium text-[30px]">
            {data?.title}
          </h1>
          <p className="text-[#262931] sm:text-[#3C3C3C] dark:text-[#DFDFDF] sm:font-light text-xs sm:text-base md:text-xl text-justify leading-[23px] sm:leading-7 max-w-[816px] my-6">
            {data?.shortDetail}
          </p>
          <Link
            className="btn btn-accent"
            href="/contact-us"
          >
            تماس با ما
          </Link>
        </div>
        <div className="w-full lg:w-[370px] lg:min-w-[370px] flex items-start flex-col">
          <h1 className="lg:hidden text-title font-medium text-[21px] mb-6">
            {data?.title}
          </h1>
          <Image
            src={data?.img}
            alt={data?.altImg}
            layout="fixed"
            width={370}
            height={410}
            priority
            loading="eager"
            className="lg:animate-pulse max-w-[305px] sm:max-w-[370px] mx-auto"
          />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
