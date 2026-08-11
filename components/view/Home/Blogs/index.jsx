/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function BlogsSlider({ data }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="mt-20 container fade-in">
      <div className="">
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-right">
            <h2 className="text-2xl sm:text-[34px] font-semibold mb-2 text-title leading-10 sm:leading-[50px]">
              جدیدترین مقالات
            </h2>
            <span className="text-[#383838] dark:text-[#CBCBCB] font-normal text-xs sm:text-base block">
              جدید ترین مقالات رمزینو
            </span>
          </div>

          <Link
            href="/blogs"
            className="group mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] hidden lg:flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            همه مقالات
            <svg
              className="transition-transform duration-300 group-hover:-translate-x-1"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(180 12 12)"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              el: ".blog-pagi",
              bulletClass: "blog-bullet",
              bulletActiveClass: "blog-active-bullet",
            }}
            slidesPerView={"auto"}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-blog-button-prev",
              prevEl: ".swiper-blog-button-next",
            }}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            centeredSlides={false}
            centerInsufficientSlides={false}
            centeredSlidesBounds={false}
            dir="rtl"
            className=""
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index + 1} className="w-full max-w-[400px] py-2">
                <Link
                  href={`/blogs/${item.slug}`}
                  className="group rounded-2xl overflow-hidden bg-[#fff] dark:bg-[#0A2027] relative flex flex-col h-full border border-[#EAEAEA] dark:border-[#123039] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0px_25px_60px_0px_rgba(43,117,140,0.18)] dark:hover:shadow-[0px_25px_60px_0px_rgba(78,223,212,0.15)] hover:border-primary/60"
                >
                  <div className="w-full h-[220px] relative overflow-hidden shrink-0">
                    <img
                      src={item.cover}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />

                    {/* bottom fade for legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent)] pointer-events-none" />

                    {item.category && (
                      <span className="absolute top-4 right-4 flex border border-[#ffffff50] items-center justify-center px-4 py-1.5 backdrop-blur-md bg-[#00000030] text-[#fff] text-xs sm:text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    )}

                    <span className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-[#ffffffd9] dark:bg-[#0A2027d9] flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="stroke-primaryDark dark:stroke-primary"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform="rotate(180 12 12)"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-title text-right leading-8 sm:leading-10 line-clamp-1 transition-colors duration-300 group-hover:text-primaryDark dark:group-hover:text-primary">
                      {item.name}
                    </h3>

                    {item.short_detail && (
                      <p className="mt-2 text-sm text-[#6B6B6B] dark:text-[#9AA5A8] text-right leading-6 line-clamp-2 grow">
                        {item.short_detail}
                      </p>
                    )}

                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#F0F0F0] dark:border-[#123039]">
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="stroke-[#8A8A8A] dark:stroke-[#8FA6AA]"
                          width="18"
                          height="18"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.3353 12.7304C21.3353 19.3043 19.3033 21.3363 12.1916 21.3363C5.07979 21.3363 3.04785 19.3043 3.04785 12.1925C3.04785 5.08077 5.07979 3.04883 12.1916 3.04883C19.3033 3.04883 21.3353 5.08077 21.3353 12.7304Z"
                            strokeWidth="1.52395"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6834 8.12891L11.6834 12.7008L15.7473 14.2247"
                            strokeWidth="1.52395"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm text-[#8A8A8A] dark:text-[#8FA6AA]">
                          {item.date_shamsi || "۲۵ دقیقه"}
                        </span>
                      </div>

                      <span className="w-1 h-1 rounded-full bg-[#D9D9D9] dark:bg-[#2C4750]" />

                      <div className="flex items-center gap-1.5">
                        <svg
                          className="stroke-[#8A8A8A] dark:stroke-[#8FA6AA]"
                          width="18"
                          height="18"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1312 9.88618C15.303 11.0579 15.303 12.9602 14.1312 14.134C12.9594 15.3057 11.0572 15.3057 9.88343 14.134C8.71167 12.9622 8.71167 11.0599 9.88343 9.88618C11.0572 8.71242 12.9584 8.71242 14.1312 9.88618"
                            strokeWidth="1.50098"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.00195 12.0085C3.00195 11.349 3.15405 10.6966 3.44824 10.0952V10.0952C4.96423 6.9962 8.31442 5.00391 12.0078 5.00391C15.7012 5.00391 19.0514 6.9962 20.5674 10.0952V10.0952C20.8616 10.6966 21.0137 11.349 21.0137 12.0085C21.0137 12.6679 20.8616 13.3203 20.5674 13.9217V13.9217C19.0514 17.0207 15.7012 19.013 12.0078 19.013C8.31442 19.013 4.96423 17.0207 3.44824 13.9217V13.9217C3.15405 13.3203 3.00195 12.6679 3.00195 12.0085Z"
                            strokeWidth="1.50098"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm text-[#8A8A8A] dark:text-[#8FA6AA]">
                          {item.view || item.views || "1"} بازدید
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12 hidden lg:flex items-center justify-center gap-4">
            <button
              className={`swiper-blog-button-prev border border-[#00000030] dark:border-0 hover:bg-[#8AFBFB] dark:hover:bg-primary rounded-lg bg-[#fff] dark:bg-[#2C4750] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <svg
                className="fill-[#0A0D14] dark:fill-[#fff]"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.6488 13.1226L13.9931 7.4668L12.7045 8.75539L17.0717 13.1226L12.7045 17.4898L13.9931 18.7784L19.6488 13.1226ZM14.5008 13.1226L8.84499 7.4668L7.5564 8.75539L11.9236 13.1226L7.5564 17.4898L8.84499 18.7784L14.5008 13.1226Z" />
              </svg>
            </button>

            <div className="blog-pagi max-w-fit flex items-center justify-center gap-2 w-auto [&>*]:transition-all [&>*]:duration-300"></div>

            <button
              className={`swiper-blog-button-next border border-[#00000030] dark:border-0 hover:bg-[#8AFBFB] dark:hover:bg-primary rounded-lg bg-[#fff] dark:bg-[#2C4750] w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <svg
                className="fill-[#0A0D14] dark:fill-[#fff]"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5931 13.1196L12.2489 18.7754L13.5375 17.4868L9.17028 13.1196L13.5375 8.75241L12.2489 7.46383L6.5931 13.1196ZM11.7412 13.1196L17.397 18.7754L18.6855 17.4868L14.3183 13.1196L18.6855 8.75241L17.397 7.46383L11.7412 13.1196Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsSlider;
