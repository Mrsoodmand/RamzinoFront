import React, { forwardRef } from "react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";

const Slider = forwardRef(function Slider(
  {
    children,
    customBreakpoints = false,
    navigation = true,
    pagination = true,
    spaceBetween = 70,
    customPagination = null,
    loop = false,
    direction = "horizontal",
    customSetting = {},
  },
  ref
) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={
        customPagination !== null ? customPagination : { clickable: pagination }
      }
      slidesPerView={"auto"}
      spaceBetween={30}
      navigation={navigation}
      slidesPerGroup={1}
      loop={loop}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      centerInsufficientSlides={false}
      centeredSlidesBounds={false}
      dir="rtl"
      direction={direction}
      ref={ref}
      breakpoints={
        customBreakpoints
          ? customBreakpoints
          : {
              1: {
                slidesPerView: 1,
                spaceBetween: spaceBetween,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: spaceBetween,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: spaceBetween,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: spaceBetween,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: spaceBetween,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: spaceBetween,
              },
            }
      }
      speed={300}
      {...customSetting}
    >
      {children}
    </Swiper>
  );
});

export default Slider;
