"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwipesList } from "@constants";
import Swipes from "@src/widgets/Slider/ui/Swipes/Swipes";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoHeight={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {SwipesList.map((swipe) => (
          <SwiperSlide key={swipe.first_title} className="SlideHeight">
            <Swipes
              text_first={swipe.text_first}
              text_second={swipe.text_second}
              btn={swipe.btn}
              img={swipe.img}
              first_title={swipe.first_title}
              second_title={swipe.second_title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
