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
            className="mt-6 mx-auto lg:mx-0 text-center bg-primaryDark w-[190px] text-base h-[50px] rounded-[8px] font-semibold glass text-[#fff] hidden lg:flex items-center justify-center"
          >
            همه مقالات
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
              <SwiperSlide key={index + 1} className="w-full max-w-[400px]">
                <Link
                  href={`/blogs/${item.slug}`}
                  className="rounded-lg overflow-hidden bg-[#fff] dark:bg-[#0A2027] relative"
                >
                  <div className="absolute left-0 top-0 h-full w-[40%] bg-[linear-gradient(to_right,rgba(0,233,240,0.2),transparent)] pointer-events-none dark:hidden" />

                  <div className="w-full h-[220px] bg-[#6ED0CE] relative">
                    <span className="flex border border-[#fff] items-center justify-center px-6 py-2.5 backdrop-blur-md absolute top-6 left-6 bg-[#ffffff20] text-[#1D1E29] rounded-lg">
                      {item.category}
                    </span>
                    <img
                      src={item.cover}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-title text-right leading-10 line-clamp-1">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-3 mt-6">
                      <svg
                        className="stroke-[#202020] dark:stroke-[#C0C0C0]"
                        width="25"
                        height="25"
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
                      <span className="text-sm text-[#202020] dark:text-[#C0C0C0]">
                        25 دقیقه
                      </span>
                      <span className="text-sm text-[#202020] dark:text-[#C0C0C0]">
                        ,
                      </span>
                      <svg
                        className="stroke-[#202020] dark:stroke-[#C0C0C0]"
                        width="25"
                        height="25"
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
                      <span className="text-sm text-[#202020] dark:text-[#C0C0C0]">
                        {item.views || "1"} بازدید
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12 hidden lg:flex items-center justify-center gap-4">
            <button
              className={`swiper-blog-button-prev border border-[#00000030] dark:border-0 hover:bg-[#8AFBFB] rounded-lg bg-[#fff] dark:bg-[#2C4750] w-[40px] h-[40px] flex items-center justify-center`}
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

            <div className="blog-pagi max-w-fit flex items-center justify-center gap-2 w-auto"></div>

            <button
              className={`swiper-blog-button-prev border border-[#00000030] dark:border-0 hover:bg-[#8AFBFB] rounded-lg bg-[#fff] dark:bg-[#2C4750] w-[40px] h-[40px] flex items-center justify-center`}
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
