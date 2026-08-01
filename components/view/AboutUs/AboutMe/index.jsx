function AboutMe({ data }) {
  return (
    <section className="max-w-[1436px] sm:px-10 mx-auto w-full mt-20 2md:mt-32 fade-in -mb-20 sm:mb-0">
      <div className="bg-white rounded-[10px] py-5 sm:py-8 px-6 sm:px-7 md:px-[46px] full-center flex-col gap-5 sm:gap-[37px] min-h-[348px]">
        <h2 className="text-title font-semibold text-xl sm:text-2xl md:text-[30px] text-center">
          {data?.title}
        </h2>
        <p className="text-[#3C3C3C] dark:text-[#DFDFDF] font-light text-[13px] sm:text-base md:text-xl text-center max-w-[1278px] md:leading-[30px]">
          {data?.shortDetail}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
