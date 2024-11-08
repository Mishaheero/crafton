import React, { useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/_swiper.scss";

import photo1 from "../assets/images/photo-1.jpeg";
import photo2 from "../assets/images/photo-2.jpeg";
import photo3 from "../assets/images/photo-3.jpeg";

const slidesData = [
  {
    image: photo1,
    text: "Empowering Farmers through Sustainable Practices",
    readTime: "5 min read",
  },
  {
    image: photo2,
    text: "Empowering Farmers through Sustainable Practices",
    readTime: "5 min read",
  },
  {
    image: photo3,
    text: "Empowering Farmers through Sustainable Practices",
    readTime: "5 min read",
  },
];

const NewsSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="relative news-slider-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        loop={false}
        centeredSlides={false}
        spaceBetween={32}
        slidesPerView={2}
        slidesPerGroup={1}
        effect="slide"
        speed={600}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href="#" className="relative flex flex-col h-full group">
              <div className="absolute top-0 left-0 z-10 px-3 py-1 mx-8 mt-12 bg-green-100 rounded-2xl">
                <p className="text-green-400 text-xxs">{slide.readTime}</p>
              </div>
              <div className="relative h-full dark-mask">
                <img
                  className="rounded-[32px]"
                  src={slide.image}
                  alt={`photo-${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10 flex items-end px-8 pb-12">
                <div className="me-20">
                  <h3 className="text-lg text-white">{slide.text}</h3>
                </div>
                <button className="p-10 transition-opacity border border-white rounded-full opacity-0 swiper-button-prev custom-prev group-hover:opacity-100 300ms">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 z-10 flex items-center justify-between w-1/2 -right-4">
        <div>
          <button
            ref={prevRef}
            className={`p-4 border rounded-lg swiper-button-prev custom-prev me-2 ${
              isBeginning ? "border-gray-400" : "border-green-400"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke={isBeginning ? "#E0E7EA" : "#2A7C62"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className={`p-4 border rounded-lg swiper-button-next custom-next ${
              isEnd ? "border-gray-400" : "border-green-400"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke={isEnd ? "#E0E7EA" : "#2A7C62"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div id="containerForBullets" className="flex"></div>
      </div>
    </div>
  );
};

export default NewsSlider;
