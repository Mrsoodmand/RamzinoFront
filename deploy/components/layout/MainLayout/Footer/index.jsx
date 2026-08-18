/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ComponyList from "./ComponyList";
import Image from "next/image";
import { dataSocial } from "../data";
import Link from "next/link";
import IconArrowBottom from "icons/Layout/IconArrowBottom.svg";
import classes from "hooks/classes";
import useFetcher from "hooks/useFetcher";

function Footer() {
  const { get, post } = useFetcher(false);
  const [opens, setOpens] = useState(null);
  const [dataLinksFooter, setDataLinksFooter] = useState([]);
  const [footerContact, setFooterContact] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    getFooterLinks();
  }, []);

  const getFooterLinks = async () => {
    const data = await get("footer");
    if (data) {
      setFooterContact(data?.detail);
      delete data?.detail;
      const convertedData = convertFooterData(data);
      setDataLinksFooter(convertedData);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    post("newsletter", { email: newsletterEmail }, () => {
      setNewsletterEmail("");
    });
  };

  const convertFooterData = (data) => {
    return Object.values(data)
      .filter((section) => section?.title)
      .map((section) => {
        const list = Object.keys(section)
          .filter((k) => k !== "title")
          .sort((a, b) => Number(a) - Number(b))
          .map((k) => ({
            text: section[k].title,
            href: section[k].url,
          }));

        return {
          title: section.title,
          list,
        };
      });
  };

  return (
    <div>
      {/* دانلود اپلیکیشن رمزینو section - temporarily disabled
      <div className="mt-14 p-6 -mb-24">
        <h2 className=" text-2xl text-center sm:text-[35px] md:text-[45px] font-semibold mb-2.5 sm:mb-4 text-title leading-10 sm:leading-[50px]">
          دانلود اپلیکیشن رمزینو
        </h2>
        <span className="mt-6 text-center text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
          با اپلیکیشن رمزینو، خرید و فروش ارز دیجیتال و مدیریت کیف پول را سریع،
          ساده و امن انجام دهید.
        </span>
        <div className="mt-6 flex items-center justify-center flex-wrap md:flex-nowrap gap-4">
          <Link
            href={"#"}
            className="flex items-center justify-center gap-4 bg-[#0E0F1B] rounded-lg px-6 py-2.5 grow md:grow-0"
          >
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1862 10.0042L29.1831 10.002C28.2612 9.42866 27.2394 9.03417 26.1714 8.8392C25.6676 8.71991 25.0908 8.60543 24.4318 8.49967C23.602 8.36552 22.6411 8.24532 21.529 8.1475C21.4778 8.14268 21.4258 8.13837 21.3743 8.13396C21.1488 7.60127 20.9159 7.05723 20.6685 6.48435C20.537 6.17847 20.4116 5.86907 20.2792 5.54179C20.2635 5.50245 20.2473 5.46312 20.2311 5.4238C19.7839 4.15692 19.1478 2.96492 18.3442 1.88819C17.9338 1.30486 17.389 0.828796 16.756 0.500172C16.1229 0.171548 15.4201 0 14.7068 0C13.9936 0 13.2907 0.171548 12.6577 0.500172C12.0246 0.828796 11.4799 1.30486 11.0694 1.88819C10.2664 2.96423 9.63043 4.1553 9.18295 5.42117C9.16636 5.46137 9.15018 5.50159 9.13401 5.54179C9.00161 5.86907 8.87664 6.17847 8.74468 6.48435C8.49733 7.05723 8.26487 7.60127 8.03937 8.13396C7.98738 8.13831 7.93582 8.14268 7.88469 8.1475C6.77038 8.24582 5.80772 8.36599 4.97659 8.50057C4.31982 8.60588 3.74561 8.72038 3.24264 8.83923C2.17462 9.03419 1.15291 9.42868 0.230988 10.002L0.223564 10.0068C0.144147 10.0646 0.0818806 10.1428 0.0434039 10.2331C0.00492733 10.3235 -0.00831948 10.4226 0.00507121 10.5199L0.15057 11.6058C0.37257 13.2313 0.608971 15.1396 0.998319 17.1065C1.28608 18.6214 1.68839 20.1122 2.20177 21.5663C2.40934 22.1383 2.63917 22.7007 2.89612 23.2473C3.99465 25.4622 5.69394 27.3234 7.7999 28.6185C9.90587 29.9136 12.3336 30.5903 14.8058 30.5714C17.2781 30.5524 19.6952 29.8386 21.781 28.5113C23.8669 27.1841 25.5374 25.297 26.6019 23.0656C26.8007 22.629 26.9839 22.184 27.1516 21.7306C28.181 18.6131 28.8653 15.3921 29.1923 12.1254L29.4047 10.5151C29.4178 10.4182 29.4044 10.3194 29.366 10.2295C29.3275 10.1395 29.2654 10.0617 29.1862 10.0042ZM14.7068 7.88571C13.3391 7.88571 12.0959 7.91063 10.9663 7.95564C11.0274 7.81274 11.0891 7.66941 11.152 7.52303C11.2958 7.18961 11.4325 6.85138 11.565 6.52452C11.8413 5.79269 12.1651 5.07963 12.5342 4.38988C12.7017 4.09031 12.8936 3.805 13.1079 3.53684C13.2716 3.25823 13.5053 3.02724 13.7857 2.86674C14.0662 2.70624 14.3837 2.62181 14.7068 2.62181C15.03 2.62181 15.3475 2.70624 15.6279 2.86674C15.9084 3.02724 16.142 3.25823 16.3057 3.53684C16.52 3.80528 16.7119 4.09086 16.8795 4.3907C17.2485 5.08019 17.5722 5.79295 17.8487 6.52447C17.9807 6.85133 18.1174 7.18956 18.2617 7.52297C18.3246 7.66936 18.3862 7.81268 18.4474 7.95559C17.3178 7.91063 16.0746 7.88571 14.7068 7.88571Z"
                fill="white"
              />
            </svg>

            <span className="text-sm text-[#fff]">دریافت از بازار</span>
          </Link>
          <Link
            href={"#"}
            className="flex items-center justify-center gap-4 bg-[#0E0F1B] rounded-lg px-6 py-2.5 grow md:grow-0"
          >
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1862 10.0042L29.1831 10.002C28.2612 9.42866 27.2394 9.03417 26.1714 8.8392C25.6676 8.71991 25.0908 8.60543 24.4318 8.49967C23.602 8.36552 22.6411 8.24532 21.529 8.1475C21.4778 8.14268 21.4258 8.13837 21.3743 8.13396C21.1488 7.60127 20.9159 7.05723 20.6685 6.48435C20.537 6.17847 20.4116 5.86907 20.2792 5.54179C20.2635 5.50245 20.2473 5.46312 20.2311 5.4238C19.7839 4.15692 19.1478 2.96492 18.3442 1.88819C17.9338 1.30486 17.389 0.828796 16.756 0.500172C16.1229 0.171548 15.4201 0 14.7068 0C13.9936 0 13.2907 0.171548 12.6577 0.500172C12.0246 0.828796 11.4799 1.30486 11.0694 1.88819C10.2664 2.96423 9.63043 4.1553 9.18295 5.42117C9.16636 5.46137 9.15018 5.50159 9.13401 5.54179C9.00161 5.86907 8.87664 6.17847 8.74468 6.48435C8.49733 7.05723 8.26487 7.60127 8.03937 8.13396C7.98738 8.13831 7.93582 8.14268 7.88469 8.1475C6.77038 8.24582 5.80772 8.36599 4.97659 8.50057C4.31982 8.60588 3.74561 8.72038 3.24264 8.83923C2.17462 9.03419 1.15291 9.42868 0.230988 10.002L0.223564 10.0068C0.144147 10.0646 0.0818806 10.1428 0.0434039 10.2331C0.00492733 10.3235 -0.00831948 10.4226 0.00507121 10.5199L0.15057 11.6058C0.37257 13.2313 0.608971 15.1396 0.998319 17.1065C1.28608 18.6214 1.68839 20.1122 2.20177 21.5663C2.40934 22.1383 2.63917 22.7007 2.89612 23.2473C3.99465 25.4622 5.69394 27.3234 7.7999 28.6185C9.90587 29.9136 12.3336 30.5903 14.8058 30.5714C17.2781 30.5524 19.6952 29.8386 21.781 28.5113C23.8669 27.1841 25.5374 25.297 26.6019 23.0656C26.8007 22.629 26.9839 22.184 27.1516 21.7306C28.181 18.6131 28.8653 15.3921 29.1923 12.1254L29.4047 10.5151C29.4178 10.4182 29.4044 10.3194 29.366 10.2295C29.3275 10.1395 29.2654 10.0617 29.1862 10.0042ZM14.7068 7.88571C13.3391 7.88571 12.0959 7.91063 10.9663 7.95564C11.0274 7.81274 11.0891 7.66941 11.152 7.52303C11.2958 7.18961 11.4325 6.85138 11.565 6.52452C11.8413 5.79269 12.1651 5.07963 12.5342 4.38988C12.7017 4.09031 12.8936 3.805 13.1079 3.53684C13.2716 3.25823 13.5053 3.02724 13.7857 2.86674C14.0662 2.70624 14.3837 2.62181 14.7068 2.62181C15.03 2.62181 15.3475 2.70624 15.6279 2.86674C15.9084 3.02724 16.142 3.25823 16.3057 3.53684C16.52 3.80528 16.7119 4.09086 16.8795 4.3907C17.2485 5.08019 17.5722 5.79295 17.8487 6.52447C17.9807 6.85133 18.1174 7.18956 18.2617 7.52297C18.3246 7.66936 18.3862 7.81268 18.4474 7.95559C17.3178 7.91063 16.0746 7.88571 14.7068 7.88571Z"
                fill="white"
              />
            </svg>

            <span className="text-sm text-[#fff]">دریافت از مایکت</span>
          </Link>
        </div>
      </div>
      */}

      <div className="relative h-[400px] -top-[60px]">
        {/* BOTTOM CURVED GRADIENT */}

        <img
          src="/images/landing/footer-vector.webp"
          alt="gateway"
          className="absolute left-1/2 -translate-x-1/2 top-[60%] lg:top-[50%] w-full max-w-[750px]"
        />
      </div>

      <footer className="w-full pb-8 relative z-20 backdrop-blur-sms">
        <div className="pointer-events-none -z-10 absolute -bottom-[0] left-0 right-0 h-[85%] xl:h-[80%] bg-gradient-to-b from-transparent backdrop-blur-sm blur-sm to-[var(--footer-bg,#041C22)] bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(6,28,34,0.8)]" />
        <div className="absolute -z-20 blur-lg lg:-top-[100px] left-1/2 -translate-x-1/2 w-[100%] h-[200px] bg-[linear-gradient(to_top,rgba(0,233,240,0.35),transparent_80%)] pointer-events-none" />

        <section className="container relative">
          <div className="center-between flex-col 2md:flex-row gap-y-[31px]">
            <div className="center gap-2.5">
              <img
                src="/images/white-logo-fa.webp"
                width={174}
                height={45}
                layout="fixed"
                alt="Ramzino"
                className="dark:hidden max-w-[104px] xs:max-w-[100px] xl:max-w-[150px]"
              />
              <img
                src="/images/dark-logo-fa.webp"
                width={174}
                height={45}
                layout="fixed"
                alt="Ramzino"
                className="hidden dark:block max-w-[104px] xs:max-w-[100px] xl:max-w-[150px]"
              />
            </div>
            <div className="center flex-col 2md:flex-row gap-y-[22px] gap-x-[43px]">
              <div className="center gap-[15px] 2md:gap-[18px]">
                {dataSocial?.map((e, i) => (
                  <Link
                    title="مشاهده"
                    key={i}
                    href={e?.href}
                    className="bg-[radial-gradient(288.22%_288.22%_at_49.92%_50%,#16B3A7_0%,#2B758C_55%)] w-[50px] h-[50px] rounded-lg full-center"
                  >
                    {e?.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-12 gap-9 mt-8 sm:mt-12"></div>
        <section className="container mt-8 sm:mt-12 ">
          <div className="grid grid-cols-12 gap-y-4 sm:gap-y-10">
            <div className="col-span-12 xl:col-span-6 items-start justify-between hidden sm:flex">
              {dataLinksFooter?.map((e, i) => (
                <div key={i}>
                  <div className="font-semibold text-[18px] mb-[19px] dark:text-[#DDDDDD]">
                    {e?.title}
                  </div>
                  <ul>
                    {e?.list?.map((e, i) => (
                      <li key={i} className="mb-[19px]">
                        <Link
                          title="مشاهده"
                          href={e?.href}
                          className="text-sm dark:text-[#DDDDDD]"
                        >
                          {e?.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="sm:hidden col-span-12">
              {dataLinksFooter?.map((e, i) => (
                <div
                  key={i}
                  className="dark:bg-[#003647] border border-[#DBDBDB] dark:border-0 dark:text-[#DDDDDD] p-4 rounded-md pr-3.5 pl-4 pt-5 pb-4 mb-3"
                >
                  <button
                    title={e?.title}
                    onClick={() => setOpens((c) => (c === i ? null : i))}
                    className="center-between font-semibold w-full"
                  >
                    {e?.title}
                    <IconArrowBottom className="dark:[&>path]:stroke-[#fff] [&>path]:stroke-[#000]" />
                  </button>
                  <ul
                    className={classes(
                      "flex items-start justify-start flex-col gap-3 overflow-hidden",
                      i === opens ? "mt-3 max-h-screen" : "max-h-0",
                    )}
                  >
                    {e?.list?.map((e, i) => (
                      <li key={i}>
                        <Link
                          title="مشاهده"
                          href={e?.href}
                          className="dark:text-[#DDDDDD]"
                        >
                          {e?.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="hidden xl:block col-span-1"></div>
            <div className="col-span-12 xl:col-span-4 flex items-start justify-start xl:justify-center flex-col pb-10">
              <div className="flex-col sm:flex-row flex items-start sm:items-center gap-y-[18px] gap-x-[37px]">
                <div>
                  <div className="text-sm sm:text-base mb-2.5 sm:mb-4 dark:text-[#DDDDDD]">
                    شماره تماس
                  </div>
                  <Link
                    href={`tel:${footerContact?.["phone-number"]?.value}`}
                    className="flex gap-4 font-bold ho text-sm translate-x-3 sm:translate-x-0 dark:text-[#DDDDDD]"
                  >
                    <svg
                      className="stroke-[#141B34] dark:stroke-[#DDDDDD]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="" dir="ltr">
                      {footerContact?.["phone-number"]?.value}
                    </span>
                  </Link>
                </div>
                <div>
                  <div className="text-sm sm:text-base mb-2.5 sm:mb-4 dark:text-[#DDDDDD]">
                    ایمیل رمزینو
                  </div>
                  <Link
                    href={`mailto:${footerContact?.["phone-number"]?.value}`}
                    className="flex gap-4 font-bold ho text-sm translate-x-3 sm:translate-x-0 dark:text-[#DDDDDD]"
                  >
                    <svg
                      className="stroke-[#141B34] dark:stroke-[#DDDDDD]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {footerContact?.["mail-address"]?.value}
                  </Link>
                </div>
              </div>
              <div className="mt-[18px] sm:mt-[29px]">
                <div className="text-sm sm:text-base mb-2 sm:mb-4 dark:text-[#DDDDDD]">
                  آدرس دفتر رمزینو
                </div>
                <Link
                  title="مشاهده"
                  href="#"
                  className="flex gap-4 text-sm dark:text-[#DDDDDD]"
                >
                  <svg
                    className="stroke-[#141B34] dark:stroke-[#DDDDDD]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
                      strokeWidth="1.5"
                    />
                  </svg>

                  <span className="">{footerContact?.["address"]?.value}</span>
                </Link>

                <div className="mt-6 mr-auto flex items-center justify-center sm:justify-end gap-[29px] w-full sm:w-fit">
                  <Image
                    src="/images/enamad.webp"
                    alt="Enamad"
                    width={61}
                    height={67}
                    layout="fixed"
                  />
                  <Image
                    src="/images/samandehi.webp"
                    alt="samandehi"
                    width={49}
                    height={63}
                    layout="fixed"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 max-w-[500px] mx-auto w-full">
            <div className="text-sm sm:text-base mb-2.5 sm:mb-3 dark:text-[#DDDDDD] text-center">
              عضویت در خبرنامه رمزینو
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 h-12 sm:h-[53px] border border-solid border-[#B0B0B0] dark:border-[#324B53] rounded-[5px] px-3.5 bg-[#fff] bg-opacity-0 text-sm sm:text-base outline-none focus:border-[#8b8b8b] dark:text-[#FAFAFA] dark:placeholder:text-[#E3E2E1] dark:bg-[#001F28]"
              />
              <button
                type="submit"
                className="full-center bg-primary text-primaryText rounded-[5px] h-12 sm:h-[53px] px-5 sm:px-6 text-sm sm:text-base glass hover:opacity-80 whitespace-nowrap"
              >
                عضویت
              </button>
            </form>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
