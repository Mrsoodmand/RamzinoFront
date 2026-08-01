function Header({ data }) {
  return (
    <header className="container mt-5 sm:mt-6 fade-in">
      <h1 className="text-title font-semibold text-[25px] sm:text-[35px]">
        {data?.title}
      </h1>
      <p className="text-[#383838] dark:text-[#DFDFDF] font-normal text-justify mt-4 text-sm sm:text-base">
        {data?.shortDetail}
      </p>
    </header>
  );
}

export default Header;
