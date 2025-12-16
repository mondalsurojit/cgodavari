// src/components/HeroSwiper.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { fetchAllHomeImages } from "../utils/googleDriveAPI";

/* ---------------- MAIN ---------------- */

const HeroSwiper = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* -------- FETCH -------- */
  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const data = await fetchAllHomeImages();
        if (alive) setSlides(data || []);
      } catch (err) {
        console.error(err);
        if (alive) setError("Failed to load hero images");
      } finally {
        if (alive) setLoading(false);
      }
    };

    load();
    return () => (alive = false);
  }, []);

  /* -------- ERROR -------- */
  if (error) {
    return (
      <section className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] bg-gray-100 flex items-center justify-center text-gray-500">
        {error}
      </section>
    );
  }

  /* -------- LOADING (SKELETON) -------- */
  if (loading) {
    return (
      <section className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] bg-gray-200 animate-pulse" />
    );
  }

  /* -------- EMPTY -------- */
  if (!slides.length) return null;

  /* -------- UI -------- */
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        loop
        className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
      >
        {slides.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full h-full">
              <img
                src={`https://drive.google.com/thumbnail?id=${img.id}&sz=w2000`}
                alt={img.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs sm:text-sm px-4 py-2 rounded-full w-[95%] sm:w-[70%] text-center">
                {img.name}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <NavButton dir="prev" />
        <NavButton dir="next" />
      </Swiper>
    </section>
  );
};

/* ---------------- COMPONENTS ---------------- */

const NavButton = ({ dir }) => (
  <div
    className={`swiper-${dir} absolute ${dir === "prev" ? "left-2" : "right-2"
      } top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer z-10`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {dir === "prev" ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </div>
);

export default HeroSwiper;
