import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import { Autoplay, Navigation, Pagination } from "swiper";

function NewDrops() {
  return (
    <section className="container mt-32 swiper-newDrop fade-in">
      <h3 className="flex items-start sm:justify-center text-start sm:text-center text-[#373A41] dark:text-[#F5F5F5] font-semibold  text-[17px] sm:text-xl md:text-[30px] mb-[17px] sm:mb-7 lg:mb-2.5">
        ارز های که به زودی در رمزینو لیست میشوند
      </h3>
      <div className="hidden lg:grid grid-cols-12 gap-y-[18px] gap-x-6 xl:gap-x-[45px] mt-[45px]">
        {[1, 2, 3, 4]?.map((e, i) => (
          <Card key={i} />
        ))}
      </div>
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={false}
          slidesPerView={"auto"}
          spaceBetween={10}
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
        >
          {[1, 2, 3, 4, 5]?.map((e, i) => (
            <SwiperSlide key={i}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NewDrops;
