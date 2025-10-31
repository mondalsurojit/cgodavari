import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import About from "../components/About";
import { AnimatedLogoCloud } from "../components/AnimatedLogoCloud";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSwiper />
      <About />
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Member Institutes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <AnimatedLogoCloud />
      </section> */}
    </div>
  );
};

export default Home;
