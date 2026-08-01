import AddIcon from "components/common/addIcon";
import IconHottests from "icons/Home/IconHottests.svg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IconTop from "icons/Home/IconTop.svg";

function Hottest() {
  return (
    <section className="hidden 2md:center bg-themeColor dark:bg-[#001F28] h-[84px] w-full px-[41px] py-[18px] mt-20 ">
      <div className="full-center bg-white text-primaryText  dark:text-[#fafafa] dark:bg-[#032934] gap-[5px] h-[45px] w-[115px] rounded-[7px] text-sm font-normal min-w-[115px]">
        <AddIcon>
          <IconHottests className="[&>path]:stroke-primaryText  dark:[&>path]:stroke-[#fafafa]" />
        </AddIcon>
        داغ ترین ها
      </div>
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
        className="marque-slider"
      >
        {[1, 2, 3, 5, 45, 45, 5, 45, 4, 5, 5]?.map((e, i) => (
          <SwiperSlide key={i}>
            <div className="center pr-5 pl-8 gap-[7px]">
              <Image
                src="/images/tests/BSV.webp"
                alt="name"
                width={29}
                height={29}
                layout="fixed"
              />
              <span className="text-title text-sm font-normal">
                سولانا
                <span className="text-[#999A9E] text-xs mr-0.5">0.0013</span>
              </span>
              <div className="full-center text-[#21AF30] text-xs font-semibold px-2 gap-0.5">
                110%
                <AddIcon>
                  <IconTop />
                </AddIcon>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hottest;
