import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "components/common/BlogCard";

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
            className="btn btn-primary group mt-6 mx-auto lg:mx-0 text-center hidden"
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
            className="[&_.swiper-wrapper]:items-stretch"
          >
            {data?.map((item, index) => (
              <SwiperSlide
                key={item?.id ?? index}
                className="!h-auto w-full max-w-[400px] py-2"
              >
                <BlogCard
                  data={item}
                  animate={false}
                  className="h-full"
                  sizes="(max-width: 640px) 85vw, 400px"
                />
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
