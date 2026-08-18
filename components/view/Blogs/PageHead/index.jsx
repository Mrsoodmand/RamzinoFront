function PageHead() {
  return (
    <header className="container pt-7 sm:pt-12">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="mb-2.5 text-[25px] font-semibold leading-[1.3] text-title sm:text-[30px]">
            بلاگ رمزینو
          </h1>
          <p className="max-w-[62ch] text-[15px] leading-[1.75] text-[#383838] dark:text-[#D3DADD] sm:text-[17px]">
            هر آنچه برای پذیرش پرداخت ارز دیجیتال لازم است بدانید — کارمزدها،
            امنیت، و راهنمای اتصال درگاه.
          </p>
        </div>
      </div>
    </header>
  );
}

export default PageHead;
