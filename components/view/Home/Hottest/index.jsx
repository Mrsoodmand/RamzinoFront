import AddIcon from "components/common/addIcon";
import IconHottests from "icons/Home/IconHottests.svg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IconTop from "icons/Home/IconTop.svg";

function Hottest({ data }) {
  if (!data || data.length === 0) return null;
  return (
    <section className="hidden relative -top-[50px] 2md:center bg-[#F5F5F550] dark:bg-[#001F2820] h-[84px] w-full px-[41px] py-[18px] backdrop-blur-md">
      <div className="full-center bg-[#F5F5F550] text-primaryText dark:text-[#fafafa] dark:bg-[#032934] gap-[5px] h-[45px] w-[115px] rounded-[7px] text-sm font-normal min-w-[115px]">
        <AddIcon>
          <IconHottests className="[&>path]:stroke-primaryText dark:[&>path]:stroke-[#fafafa]" />
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
        speed={2500}
        className="marque-slider"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index + 1}>
            <div className="center pr-5 pl-8 gap-[7px]">
              <Image
                src={item.cover}
                alt="name"
                width={29}
                height={29}
                layout="fixed"
              />
              <span className="text-title text-sm font-normal">
                <span className="text-[#999A9E] text-xs mr-0.5">
                  {item.sellPrice || "0"}
                </span>
                {item.nameEn}
              </span>
              <div className="full-center text-[#21AF30] text-xs font-semibold px-2 gap-0.5">
                {item.changePercentage || "0%"}
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
