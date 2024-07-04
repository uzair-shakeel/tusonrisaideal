"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-14 cursor-pointer z-10 xl:block hidden"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-2xl lg:text-4xl" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -left-14 cursor-pointer z-10 lg:block hidden"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-2xl lg:text-4xl" />
    </div>
  );
};

const ReadTopArticles = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: "The Importance of Regular Dental Check-Ups",
      image: "/assets/slider1.svg",
    },
    {
      title: "Top Tips for Preventing Tooth Decay",
      image: "/assets/slider2.svg",
    },
    {
      title: "Root Canal can make your life better",
      image: "/assets/slider3.svg",
    },
  ];

  return (
    <div className="py-10 max-w-[1300px] mx-auto px-4 bg-white">
      <h2 className="text-[#333333] text-2xl lg:text-[28px] leading-tight lg:leading-[54px] font-bold mb-4">
        Read top articles from health experts
      </h2>
      <p className="text-[#263238] text-sm lg:text-[14px] leading-5 lg:leading-[19px] font-normal max-w-[390px] mb-8">
        Health articles that keep you informed about good health practices and achieve your goals.
      </p>
      <div className="relative mt-8">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className="shadow-custom border border-[#DADADA] bg-white rounded-[20px] overflow-hidden min-h-[306px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={380}
                  height={196}
                  className="w-full h-[196px] object-cover"
                />
                <div className="px-4 py-4">
                  <h3 className="text-[#263238] text-lg lg:text-[18px] leading-tight font-medium">
                    {slide.title}
                  </h3>
                  <p className="text-[#263238] text-sm lg:text-[14px] leading-5 font-normal mt-2">
                    Dr. Alex Carry
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReadTopArticles;
