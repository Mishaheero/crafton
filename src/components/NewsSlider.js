import React, { useRef, useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/_swiper.scss";
import SliderTitle from "./SliderTitle";
import photo1 from "../assets/images/photo-1.jpeg";
import photo2 from "../assets/images/photo-2.jpeg";
import photo3 from "../assets/images/photo-3.jpeg";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    // Delayed initialization of navigation to ensure the refs are correctly set
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.update();
    }
  }, []);

  const paginationConfig = {
    el: "#containerForBullets",
    type: "bullets",
    bulletClass: "swiper-custom-bullet",
    bulletActiveClass: "swiper-custom-bullet-active",
    clickable: true,
  };

  return (
    <div className="relative pt-12 lg:pt-24 news-slider-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={paginationConfig}
        spaceBetween={32}
        slidesPerView={2}
        speed={800}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href="#" className="relative flex flex-col group">
              <div className="absolute top-0 left-0 z-10 px-3 py-1 mx-8 mt-12 bg-green-100 rounded-2xl">
                <p className="text-green-400 text-xxs">{slide.readTime}</p>
              </div>
              <div className="relative image dark-mask">
                <img
                  className="rounded-[32px]"
                  src={slide.image}
                  alt={slide.text}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10 flex items-end px-8 pb-12">
                <div className="me-8 lg:me-10 xl:me-20">
                  <SliderTitle text={slide.text} />
                </div>
                <button className="p-6 transition-opacity border border-white rounded-full lg:opacity-0 xl:p-14 swiper-button-prev custom-prev lg:group-hover:opacity-100 300ms">
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative bottom-0 right-0 z-10 flex items-center justify-center w-full mt-8 lg:w-1/2 lg:absolute lg:justify-between">
        <div>
          <button
            ref={prevRef}
            className={`p-3 lg:p-4 border rounded-lg swiper-button-prev custom-prev lg:ms-4 me-2 ${
              isBeginning ? "border-gray-400" : "border-green-400"
            }`}
            aria-label="Previous slide"
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
            className={`p-3 lg:p-4 border rounded-lg swiper-button-next custom-next ${
              isEnd ? "border-gray-400" : "border-green-400"
            }`}
            aria-label="Next slide"
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
        <div id="containerForBullets" className="hidden lg:flex"></div>
      </div>
    </div>
  );
};

export default NewsSlider;
