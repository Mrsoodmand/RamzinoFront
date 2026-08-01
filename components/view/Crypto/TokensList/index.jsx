import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IconCourency from "icons/Home/IconCourency.svg";
import AddIcon from "components/common/addIcon";
import Link from "next/link";

function TokensList() {
  return (
    <section className="bg-[#6CE4DB] h-[247px] sm:h-[418px] w-full full-center flex-col mt-28 pt-5 relative overflow-hidden fade-in">
      <h3 className="px-4 text-center w-full text-[#0C0C0C] text-[15px] sm:text-2xl md:text-[28px] mb-5 sm:mb-14">
        یک سایت و بیش از 100 بلاک چین بیش از 30000 سکه و توکن قابل خرید و فروش
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={false}
        slidesPerView={"auto"}
        spaceBetween={24}
        navigation={false}
        loop={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        centerInsufficientSlides={false}
        centeredSlidesBounds={false}
        dir="rtl"
        speed={1500}
        className="marque-slider swiper-tokens-list"
      >
        {new Array(30).fill(1)?.map((e, i) => (
          <SwiperSlide key={i}>
            <Link title="مشاهده" href="#" className="">
              <Image
                src={
                  i % 2 === 0
                    ? "/images/tests/cronos.webp"
                    : "/images/tests/usdt.webp"
                }
                alt="USDT"
                width={101}
                height={134}
                layout="fixed"
                className="object-cover rounded-full hover:scale-105 hover:grayscale transition-medium max-w-[40px] sm:max-w-[101px]"
                objectFit="cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        title="مشاهده بیشتر"
        className="full-center sm:gap-2.5 text-[#fff] bg-[#2B758C] w-[108px] text-[8px] sm:text-base sm:w-[206px] h-[30px] sm:h-[56px] rounded-[4px] sm:rounded-lg glass hover:opacity-90 mt-9 sm:mt-14"
      >
        <AddIcon>
          <IconCourency className="[&>path]:stroke-[#fff] scale-50 sm:scale-100" />
        </AddIcon>
        لیست 2,000 ارز دیگر
      </button>

      {/* /// shapes  */}

      <Image
        src="/images/star-primary-outline.webp"
        alt="Star"
        width={34}
        height={34}
        layout="fixed"
        className="hidden lg:block absolute top-16 right-24 animate-spin"
      />
      <i className="hidden lg:block w-[7px] h-[7px] bg-[#005975] rounded-full absolute top-24 right-36 animate-pulse"></i>
      <Image
        src="/images/star-primary.webp"
        alt="Star"
        width={33}
        height={33}
        layout="fixed"
        className="hidden lg:block absolute bottom-6 right-52 animate-spin"
      />
      <Image
        src="/images/star-primary.webp"
        alt="Star"
        width={37}
        height={37}
        layout="fixed"
        className="hidden lg:block absolute top-16 left-24 animate-spin"
      />
      <i className="hidden lg:block w-[7px] h-[7px] bg-[#005975] rounded-full absolute top-24 left-36 animate-pulse"></i>
      <Image
        src="/images/star-black.webp"
        alt="Star"
        width={42}
        height={42}
        layout="fixed"
        className="hidden lg:block absolute bottom-6 left-36 animate-spin"
      />
    </section>
  );
}

export default TokensList;
