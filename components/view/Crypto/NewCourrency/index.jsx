import AddIcon from "components/common/addIcon";
import IconCourency from "icons/Home/IconCourency.svg";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function NewCourrency() {
  return (
    <section className="container mt-36 swiper-new-courrency fade-in">
      <div className="center-between mb-[32px]">
        <h3 className="text-[#373A41] dark:text-[#f5f5f5] font-semibold text-[18px] sm:text-2xl ">
          جدیدترین رمز ارز ها
        </h3>
        <button
          title="لیست 2,000 ارز دیگر"
          className="btn btn-accent"
        >
          <AddIcon>
            <IconCourency className="scale-90 sm:scale-100" />
          </AddIcon>
          لیست 2,000 ارز دیگر
        </button>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={false}
          slidesPerView={"auto"}
          spaceBetween={16}
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
          breakpoints={{
            0: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 16,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 455, 4, 5, 4, 5, 4, 5]?.map((e, i) => (
            <SwiperSlide key={i}>
              <Link
                title="مشاهده"
                href="#"
                className="w-full bg-white shadow-[0px_0px_74px_0px_#00000005] rounded-[5px] h-[207px] full-center flex-col gap-4 group"
              >
                <Image
                  src="/images/tests/Blum.webp"
                  width={51}
                  height={51}
                  layout="fixed"
                  alt="NAME"
                  className="rounded-full group-hover:translate-y-1"
                />
                <div className="">
                  <span className="text-[#373A41] dark:text-[#f5f5f5] text-base font-semibold block text-center mb-[3px]">
                    بلوم
                  </span>
                  <span className="text-[#373A41] dark:text-[#f5f5f5] text-sm font-normal opacity-70 block text-center">
                    (BLUM)
                  </span>
                </div>
                <div>
                  <div className="full-center gap-2 mb-2">
                    <span className="text-sm text-[#171B23] dark:text-[#f5f5f5]">
                      0,00005
                    </span>
                    <span className="text-[#868686] text-sm dark:text-[#f5f5f5]">
                       ~
                    </span>
                    <span className="text-[#868686] text-sm dark:text-[#f5f5f5]">
                       تتر
                    </span>
                  </div>
                  <div className="full-center gap-2">
                    <span className="text-sm text-[#171B23] dark:text-[#f5f5f5]">
                      8,456,790
                    </span>
                    <span className="text-[#868686] text-sm dark:text-[#f5f5f5]">
                       ~
                    </span>
                    <span className="text-[#868686] text-sm dark:text-[#f5f5f5]">
                      تومان
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NewCourrency;
