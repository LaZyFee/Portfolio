import React from "react";
// Import Swiper components and styles
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import AchivementsData from "../../../Data/Achivements";
import SpotlightCard from "../../../Components/Cards/SpotlightCard";
function Achivements() {
  return (
    <div className="text-white lg:mx-5 lg:mb-10">
      <h1 className="text-3xl p-4 lg:mb-5">Achivements & Learning </h1>
      <Swiper
        modules={[Autoplay]} // Add the Autoplay module here
        slidesPerView={3} // Default to 3 slides
        spaceBetween={20}
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="mySwiper"
      >
        {AchivementsData.map((item, index) => (
          <SwiperSlide key={index}>
            <SpotlightCard achievement={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Achivements;
