// src/components/HeroSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HERO_SLIDES } from "../data/constants";

const HeroSwiper = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[500px]"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-lg px-6 py-2 rounded-full">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSwiper;
