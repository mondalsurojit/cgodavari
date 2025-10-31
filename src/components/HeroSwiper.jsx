// src/components/HeroSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HERO_SLIDES } from "../data/constants";

const HeroSwiper = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* ✅ Always fit (cover) the whole frame */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* ✅ Responsive text box */}
              <div
                className="
                  absolute bottom-4 left-1/2 transform -translate-x-1/2
                  bg-black/60 text-white text-xs sm:text-sm md:text-base
                  px-4 sm:px-5 py-2 rounded-full text-center
                  w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%]
                "
              >
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ Subtle navigation arrows */}
        <div className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full cursor-pointer transition-all z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full cursor-pointer transition-all z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSwiper;
