"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const WorkSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="group group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 group-hover:bg-red-300 py-2 px-4 rounded-lg transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 py-2 px-4 rounded-lg group-hover:bg-red-300 transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 py-2 px-4 rounded-lg group-hover:bg-red-300 transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-4.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 py-2 px-4 rounded-lg group-hover:bg-red-300 transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-5.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 py-2 px-4 rounded-lg group-hover:bg-red-300 transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-6.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 py-2 px-4 rounded-lg group-hover:bg-red-300 transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group pt-96 relative overflow-hidden rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home/our-works/portfolio-7.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <p className="text-white mb-4">Design</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Solutions
              </h2>
              <button className="bg-white text-gray-800 group-hover:text-white group-hover:scale-105 py-2 px-4 rounded-lg group-hover:bg-red-300 transition-colors duration-300">
                View Project
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WorkSlider;
