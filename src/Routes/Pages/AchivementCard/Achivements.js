import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import AchivementsData from "../../../Data/Achivements";
import SpotlightCard from "../../../Components/Cards/SpotlightCard";

function Achivements() {
  return (
    <div className="flex flex-col hero-content border relative overflow-hidden w-full mx-auto p-6 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-800 to-custom-radial opacity-20 blur-3xl animate-pulse"></div>
      <h1 className="text-4xl font-bold text-red-500 p-4 tracking-wide">
        Achievements & Learning
      </h1>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="w-full"
      >
        {AchivementsData.map((item, index) => (
          <SwiperSlide key={index} className="h-full flex justify-center items-center">
            <SpotlightCard achievement={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Achivements;
