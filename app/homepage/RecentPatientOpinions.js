'use client'
import React from 'react';
import Image from 'next/image';
import { GoStarFill } from 'react-icons/go';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-14 cursor-pointer z-10  hidden"
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
      className="absolute top-1/2 transform -translate-y-1/2 -left-14 cursor-pointer z-10  hidden"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-2xl lg:text-4xl" />
    </div>
  );
};

const patientOpinions = [
  {
    rating: 5.0,
    opinion: "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
    user: {
      name: "Riccy Hjon",
      designation: "Sr. Dentist",
      procedure: "Dental Implant",
      avatar: '/assets/pati1.svg',
      verified: '/assets/check-pati.svg',
    },
  },
  {
    rating: 5.0,
    opinion: "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
    user: {
      name: "Riccy Hjon",
      designation: "Sr. Dentist",
      procedure: "Dental Implant",
      avatar: '/assets/pati1.svg',
      verified: '/assets/check-pati.svg',
    },
  },
  // Add more opinions as needed
  {
    rating: 5.0,
    opinion: "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
    user: {
      name: "Riccy Hjon",
      designation: "Sr. Dentist",
      procedure: "Dental Implant",
      avatar: '/assets/pati1.svg',
      verified: '/assets/check-pati.svg',
    },
  },
  // Add more opinions as needed
  {
    rating: 5.0,
    opinion: "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
    user: {
      name: "Riccy Hjon",
      designation: "Sr. Dentist",
      procedure: "Dental Implant",
      avatar: '/assets/pati1.svg',
      verified: '/assets/check-pati.svg',
    },
  },
  // Add more opinions as needed
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const RecentPatientOpinions = () => {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='max-w-[1440px] mx-auto px-4'>
        <h2 className='text-center text-3xl font-bold text-gray-800 mb-10'>Opiniones recientes de pacientes</h2>
        <Slider {...sliderSettings}>
          {patientOpinions.map((opinion, index) => (
            <div key={index} className='sm:px-4'>
              <div className='bg-white rounded-lg shadow-lg  p-4 sm:p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <Image src='/assets/comma.svg' alt='comma' width={52} height={84} />
                  <div className='flex items-center gap-2'>
                    <h3 className='font-bold text-xl text-gray-800'>{opinion.rating}</h3>
                    <div className='flex items-center gap-1 text-red-500'>
                      {Array(5).fill().map((_, i) => (
                        <GoStarFill key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-gray-700 mb-6'>{opinion.opinion}</p>
                <div className='flex items-center gap-4'>
                  <div className='relative w-12 h-12'>
                    <Image src={opinion.user.avatar} alt='user avatar' layout='fill' className='rounded-full' />
                    <Image src={opinion.user.verified} alt='verified' width={24} height={24} className='absolute bottom-0 right-0' />
                  </div>
                  <div>
                    <div className='flex items-center gap-1.5'>
                      <h2 className='text-lg font-semibold'>{opinion.user.name}</h2>
                      <h3 className='text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full'>{opinion.user.procedure}</h3>
                    </div>
                    <p className='text-gray-700 text-sm'>{opinion.user.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider {...sliderSettings} className='mt-[40px]'>
          {patientOpinions.map((opinion, index) => (
            <div key={index} className='sm:px-4'>
              <div className='bg-white rounded-lg shadow-lg p-4 sm:p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <Image src='/assets/comma.svg' alt='comma' width={52} height={84} />
                  <div className='flex items-center gap-2'>
                    <h3 className='font-bold text-xl text-gray-800'>{opinion.rating}</h3>
                    <div className='flex items-center gap-1 text-red-500'>
                      {Array(5).fill().map((_, i) => (
                        <GoStarFill key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-gray-700 mb-6'>{opinion.opinion}</p>
                <div className='flex items-center gap-4'>
                  <div className='relative w-12 h-12'>
                    <Image src={opinion.user.avatar} alt='user avatar' layout='fill' className='rounded-full' />
                    <Image src={opinion.user.verified} alt='verified' width={24} height={24} className='absolute bottom-0 right-0' />
                  </div>
                  <div>
                    <div className='flex items-center gap-1.5'>
                      <h2 className='text-lg font-semibold'>{opinion.user.name}</h2>
                      <h3 className='text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full'>{opinion.user.procedure}</h3>
                    </div>
                    <p className='text-gray-700 text-sm'>{opinion.user.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentPatientOpinions;
