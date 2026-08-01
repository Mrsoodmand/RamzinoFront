import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function ComponyList() {
  return (
    <section className="hidden 2md:center bg-white h-[187px] w-full mt-20 dark:hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={false}
        slidesPerView={"auto"}
        spaceBetween={0}
        navigation={false}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        centerInsufficientSlides={false}
        centeredSlidesBounds={false}
        dir="rtl"
        speed={1500}
        className="marque-slider swiper-compony-list"
      >
        {[1, 2, 3, 5, 45, 45, 5, 45, 4, 5, 5]?.map((e, i) => (
          <SwiperSlide key={i}>
            {i % 2 === 0 ? (
              <Image
                src="/images/tests/mellat-svgrepo-com.webp"
                alt="NAME"
                width={88}
                height={90}
                layout="fixed"
              />
            ) : (
              <Image
                src="/images/tests/tejarat-svgrepo-com.webp"
                alt="NAME"
                width={87}
                height={87}
                layout="fixed"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ComponyList;
