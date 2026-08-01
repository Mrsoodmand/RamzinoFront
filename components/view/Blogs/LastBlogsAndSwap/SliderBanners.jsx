import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderBanners({ data }) {
  const { push } = useRouter();

  return (
    <section className="mt-10 container-pagination">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
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
      >
        {data?.map((e, i) => (
          <SwiperSlide key={i}>
            <Link
              href="https://panel.ramzino.me/user/login"
              className="hover:opacity-80 w-full bg-[#6CE4DB] h-[280px] rounded-[10px] flex justify-center flex-col px-5 -mb-3 cursor-pointer"
            >
              <div className="text-[#0C0C0C] font-semibold text-[25px]">
                {e?.title}
              </div>
              <div className="text-[#0C0C0C] text-[17px] max-w-[204px] my-6">
                {e?.detail}
              </div>
              <button
                href="https://panel.ramzino.me/user/login"
                title=" ورود و ثبت نام"
                aria-label=" ورود و ثبت نام"
                className="full-center text-[#0C0C0C] bg-[#fff] rounded-[4px] w-[133px] h-12 mt-5"
              >
                ورود و ثبت نام
              </button>
              <Image
                src={e?.image}
                alt={e?.title}
                layout="fixed"
                width={107}
                height={133}
                className="absolute top-2/4 left-10 translate-y-[-40%]"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SliderBanners;
