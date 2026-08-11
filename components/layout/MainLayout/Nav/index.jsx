import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { dataMenu } from "../data";
import IconArrowBottom from "icons/Layout/IconArrowBottom.svg";
import IconSearch from "icons/Layout/IconSearch.svg";
import IconUser from "icons/Layout/IconUser.svg";
import IconMenu from "icons/Layout/IconMenu.svg";
import AddIcon from "components/common/addIcon";
import Link from "next/link";
import DarkMode from "./DarkMode";
import useFetcher from "hooks/useFetcher";

function Nav() {
  const { get } = useFetcher(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [searchTab, setSearchTab] = useState("blogs");
  const [searchResult, setSearchResult] = useState(null);
  const boxRef = useRef(null);
  const searchTimeout = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpenSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (openSearch || openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSearch, openMenu]);

  const search = (text) => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (!text) return setSearchResult(null);
    searchTimeout.current = setTimeout(async () => {
      try {
        const searchData = await get(`search?search=${text}`);
        setSearchResult(searchData);
      } catch (error) {
      }
    }, 300);
  };
  return (
    <div className="pb-[65px] sm:pb-[85px]">
      <div
        onClick={() => {
          setOpenSearch(false);
          setOpenMenu(false);
        }}
        className={`${
          openSearch || openMenu
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 z-[21] bg-black/10 backdrop-blur-sm`}
      />
      <nav className="h-[65px] sm:h-[85px] w-full shadow-[0px_0px_74px_0px_#0000000A] bg-white z-[22] fade-in fixed">
        <div className="container center-between h-full">
          <div className="relative md:hidden">
            <button
              title={"منو"}
              onClick={() => {
                setOpenMenu((c) => !c);
                if (!openMenu) setOpenSearch(false);
              }}
              className="border border-solid border-[#DFE0E1] rounded-md lg:rounded-lg w-[34px] xs:w-11 lg:w-[56px] h-[34px] xs:h-11 lg:h-[56px] hover:bg-themeColor dark:border-[#003E52] full-center"
            >
              <AddIcon>
                <IconMenu className="[&>path]:stroke-title" />
              </AddIcon>
            </button>

            <div
              className={`${
                openMenu ? "opacity-100 z-[23]" : "opacity-0 pointer-events-none"
              } fixed left-3 right-3 top-[73px] rounded-lg bg-white dark:bg-[#2a758c] py-4 px-3.5 shadow-[0px_0px_75.05px_0px_#0000000A]`}
            >
              <ul className="flex flex-col gap-1">
                {dataMenu?.map((e, i) => (
                  <li key={i}>
                    <Link
                      href={e?.href}
                      onClick={() => setOpenMenu(false)}
                      className="block text-title dark:text-white font-semibold text-sm py-3 px-2.5 rounded-md hover:bg-themeColor dark:hover:bg-[#003E52]"
                    >
                      {e?.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="https://panel.ramzino.me/user/login"
                onClick={() => setOpenMenu(false)}
                className="mt-2 flex full-center bg-[linear-gradient(180deg,#4EDFD4_0%,#75FEF3_100%)] text-primaryText h-[48px] rounded-[10px] font-semibold text-sm"
              >
                ورود و ثبت نام
              </Link>
            </div>
          </div>
          <div className="center gap-5 xl:gap-[49px]">
            <Link href="/">
              <img
                src="/images/white-logo-fa.webp"
                width={174}
                height={45}
                layout="fixed"
                alt="Ramzino"
                className="dark:hidden max-w-[104px] xs:max-w-[100px] xl:max-w-[120px]"
              />
              <img
                src="/images/dark-logo-fa.webp"
                width={174}
                height={45}
                layout="fixed"
                alt="Ramzino"
                className="hidden dark:block max-w-[104px] xs:max-w-[100px] xl:max-w-[120px]"
              />
            </Link>
            <ul className="hidden md:center gap-4 lg:gap-7">
              {dataMenu?.map((e, i) => (
                <li key={i}>
                  <Link
                    title="مشاهده"
                    href={e?.href}
                    className="text-title center gap-1 text-sm xl:text-base"
                  >
                    {e?.text}
                    {e?.child && (
                      <AddIcon>
                        <IconArrowBottom className="[&>path]:stroke-title" />
                      </AddIcon>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="center gap-3 lg:gap-[17px]">
            <Link
              href="https://panel.ramzino.me/user/login"
              title="ورود و ثبت نام"
              className="bg-[linear-gradient(180deg,#4EDFD4_0%,#75FEF3_100%)] text-primaryText px-6 py-2.5 text-base rounded-[10px] font-semibold glass overflow-hidden hover:bg-primaryDark hidden lg:full-center"
            >
              ورود و ثبت نام
            </Link>
            <div className="center gap-2 relative">
              <button
                onClick={() => {
                  setOpenSearch(true);
                  setOpenMenu(false);
                }}
                title="سرچ"
                className="flex items-center justify-center border border-solid border-[#DFE0E1] rounded-[5px] lg:rounded-full w-[45px] h-[45px] hover:bg-themeColor dark:border-[#003E52]"
              >
                <svg
                  className="stroke-[#373A41] dark:stroke-[#fff]"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.76936 13.2082C10.773 13.2082 13.2079 10.7732 13.2079 7.76961C13.2079 4.76598 10.773 2.33105 7.76936 2.33105C4.76573 2.33105 2.33081 4.76598 2.33081 7.76961C2.33081 10.7732 4.76573 13.2082 7.76936 13.2082Z"
                    strokeWidth="1.1654"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6541 11.6543L16.3157 16.3159"
                    strokeWidth="1.1654"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <Link
                href="https://panel.ramzino.me/user/login"
                title="ورود و ثبت نام"
                className="border border-solid border-[#DFE0E1] rounded-md lg:rounded-lg w-[34px] xs:w-11 lg:w-[56px] h-[34px] xs:h-11 lg:h-[56px] hover:bg-themeColor dark:border-[#003E52] full-center lg:hidden"
              >
                <AddIcon>
                  <IconUser className="[&>path]:stroke-title" />
                </AddIcon>
              </Link>

              <div
                ref={boxRef}
                className={`${openSearch ? "opacity-100 z-[23]" : "opacity-0 pointer-events-none"} fixed left-3 right-3 top-[73px] sm:absolute sm:left-0 sm:right-auto sm:top-0 sm:-top-4 rounded-lg bg-[#fff] dark:bg-[#2a758c] py-4 px-3.5 sm:w-[449px] min-h-[290px] sm:min-h-[308px] shadow-[0px_0px_75.05px_0px_#0000000A]`}
              >
                <div className="center border border-solid border-[#DBDBDB]  rounded-[4px] h-[48px] w-full pl-3 sm:pl-3.5 pr-3">
                  <input
                    type="text"
                    onChange={(e) => search(e.target?.value)}
                    placeholder="جستجو خدمات و مقاله"
                    className="w-full h-full bg-[#fff] bg-opacity-0 outline-none border-none text-[#2D2D2D] placeholder:text-[#2D2D2D] dark:text-[#fff]  dark:placeholder:text-[#f5f5f5] text-sm sm:text-base"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    className="scale-90 sm:scale-100 dark:[&amp;&gt;*]:stroke-[#fff]"
                  >
                    <circle
                      cx="10.304"
                      cy="10.299"
                      r="7.757"
                      stroke="#25324B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.726"
                    ></circle>
                    <path
                      stroke="#25324B"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.726"
                      d="m15.7 16.096 3.04 3.034"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="center-between rounded-lg bg-[#F5F5F5] dark:bg-[#011f29] w-full h-[42px] sm:h-[49px] my-3.5 sm:my-[17px] gap-[11px] px-1.5">
                    <button
                      onClick={() => setSearchTab("blogs")}
                      className={`${searchTab == "blogs" ? "dark:bg-[#2a758c]" : ""} text-[#2860E6] dark:text-[#fff] font-semibold rounded-md sm:rounded-lg h-[30px] sm:h-[35px] w-full text-[13px]`}
                    >
                      مقالات{searchResult?.blogs?.length ? ` (${searchResult?.blogs?.length})` : ""}
                    </button>
                    <button
                      onClick={() => setSearchTab("news")}
                      className={`${searchTab == "news" ? "dark:bg-[#2a758c]" : ""} text-[#2860E6] dark:text-[#fff] font-semibold rounded-md sm:rounded-lg h-[30px] sm:h-[35px] w-full text-[13px]`}
                    >
                      اخبار{searchResult?.news?.length ? ` (${searchResult?.news?.length})` : ""}
                    </button>
                    <button
                      onClick={() => setSearchTab("currencies")}
                      className={`${searchTab == "currencies" ? "dark:bg-[#2a758c]" : ""} text-[#2860E6] dark:text-[#fff] font-semibold rounded-md sm:rounded-lg h-[30px] sm:h-[35px] w-full text-[13px]`}
                    >
                      ارز ها{searchResult?.currencies?.length ? ` (${searchResult?.currencies?.length})` : ""}
                    </button>
                  </div>
                  <div className="max-h-[400px] overflow-auto none-scroll">
                    {searchTab == "blogs"
                      ? searchResult?.blogs?.map((item, index) => (
                          <div
                            className="mb-4 sm:mb-[17px] last:mb-0 hover:opacity-80"
                            key={index + 1}
                          >
                            <Link
                              className="center gap-3 sm:gap-4 text-[#2D2D2D] dark:text-[#fff] font-normal text-sm sm:text-base line-clamp-1"
                              href={`/blogs/${item.slug}`}
                            >
                              <span className="bg-[#F5F5F5] dark:bg-[#1dfae8] w-[33px] h-[33px] rounded-full full-center shrink-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  fill="none"
                                  class="scale-90 dark:[&amp;&gt;*]:stroke-[#fff]"
                                >
                                  <circle
                                    cx="10.304"
                                    cy="10.299"
                                    r="7.757"
                                    stroke="#25324B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.726"
                                  ></circle>
                                  <path
                                    stroke="#25324B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.726"
                                    d="m15.7 16.096 3.04 3.034"
                                  ></path>
                                </svg>
                              </span>
                              {item.title}
                            </Link>
                          </div>
                        ))
                      : null}

                    {searchTab == "news"
                      ? searchResult?.news?.map((item, index) => (
                          <div
                            className="mb-4 sm:mb-[17px] last:mb-0 hover:opacity-80"
                            key={index + 1}
                          >
                            <Link
                              className="center gap-3 sm:gap-4 text-[#2D2D2D] dark:text-[#fff] font-normal text-sm sm:text-base"
                              href={`/blogs/${item.slug}`}
                            >
                              <span className="bg-[#F5F5F5] dark:bg-[#1dfae8] w-[33px] h-[33px] rounded-full full-center shrink-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  fill="none"
                                  class="scale-90 dark:[&amp;&gt;*]:stroke-[#fff]"
                                >
                                  <circle
                                    cx="10.304"
                                    cy="10.299"
                                    r="7.757"
                                    stroke="#25324B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.726"
                                  ></circle>
                                  <path
                                    stroke="#25324B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.726"
                                    d="m15.7 16.096 3.04 3.034"
                                  ></path>
                                </svg>
                              </span>
                              {item.title}
                            </Link>
                          </div>
                        ))
                      : null}

                    {searchTab == "currencies"
                      ? searchResult?.currencies?.map((item, index) => (
                          <div
                            className="mb-4 sm:mb-[17px] last:mb-0 hover:opacity-80"
                            key={index + 1}
                          >
                            <Link
                              className="center gap-3 sm:gap-4 text-[#2D2D2D] dark:text-[#fff] font-normal text-sm sm:text-base"
                              href={`/currency/${item.slug}`}
                            >
                              <span className="bg-[#F5F5F5] dark:bg-[#1dfae8] w-[33px] h-[33px] rounded-full full-center shrink-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  fill="none"
                                  class="scale-90 dark:[&amp;&gt;*]:stroke-[#fff]"
                                >
                                  <circle
                                    cx="10.304"
                                    cy="10.299"
                                    r="7.757"
                                    stroke="#25324B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.726"
                                  ></circle>
                                  <path
                                    stroke="#25324B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.726"
                                    d="m15.7 16.096 3.04 3.034"
                                  ></path>
                                </svg>
                              </span>
                              {item.name_fa || item.name_en}
                            </Link>
                          </div>
                        ))
                      : null}

                    {searchTab == "blogs" && !searchResult?.blogs?.length ? (
                      <div className="full-center dark:text-[#fff] text-[#1c1c1c] mt-6">
                        موردی یافت نشد!
                      </div>
                    ) : null}

                    {searchTab == "news" && !searchResult?.news?.length ? (
                      <div className="full-center dark:text-[#fff] text-[#1c1c1c] mt-6">
                        موردی یافت نشد!
                      </div>
                    ) : null}

                    {searchTab == "currencies" && !searchResult?.currencies?.length ? (
                      <div className="full-center dark:text-[#fff] text-[#1c1c1c] mt-6">
                        موردی یافت نشد!
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
