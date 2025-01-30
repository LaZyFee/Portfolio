import React from "react";
// Import Swiper components and styles
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import projectsData from "../../../Data/FullstackProjects.json";
import ProjectCard from "../../../Components/ProjectCard";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="text-white lg:mx-5 lg:mb-10">
      <h1 className="text-3xl p-4 lg:mb-5">PROJECTS</h1>
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
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered Button */}
      <div className="flex justify-center mt-5">
        <Link to="/projects">
          <button className="btn btn-primary text-2xl text-white rounded-md">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
