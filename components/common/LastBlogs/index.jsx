import AddIcon from "components/common/addIcon";
import BlogCard from "components/common/BlogCard";
import IconBlog from "components/common/LastBlogs/IconBlog.svg";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

function LastBlogs({ data, title = "جدیدترن مقالات" }) {
  return (
    <section className="container mt-12 sm:mt-36  fade-in">
      <div className="center-between mb-[23px] sm:mb-[33px]">
        <h4 className="text-title font-semibold text-[15px] xs:text-base sm:text-2xl">
          {title}
        </h4>
        <Link
          title="مشاهده"
          href="/blogs"
          className="btn btn-accent"
        >
          <AddIcon>
            <IconBlog className="[&>path]:stroke-primaryText scale-[0.8] sm:scale-100" />
          </AddIcon>
          <span className="hidden sm:inline">مشاهده تمام مقالات</span>
          <span className="sm:hidden">همه مقالات</span>
        </Link>
      </div>
      <Swiper
        modules={[Autoplay]}
        pagination={false}
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={false}
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        centeredSlides={false}
        centerInsufficientSlides={false}
        centeredSlidesBounds={false}
        dir="rtl"
        speed={600}
        className="[&_.swiper-wrapper]:items-stretch"
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            centeredSlides: false,
            spaceBetween: 13,
          },
          397: {
            slidesPerView: 1.8,
            centeredSlides: false,
            spaceBetween: 13,
          },
          493: {
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          513: {
            slidesPerView: 1.8,
            centeredSlides: true,
          },
          671: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          867: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },

          1045: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
      >
        {data?.map((e, i) => (
          <SwiperSlide key={e?.id ?? i} className="!h-auto">
            <BlogCard
              data={e}
              animate={false}
              className="h-full"
              sizes="(max-width: 671px) 60vw, (max-width: 1045px) 40vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default LastBlogs;
