"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    name: 'Elena García',
    image: '/assets/rating1.svg',
    review: 'Amazing dental experience! The staff was professional and friendly, and the clinic was spotless. I felt well taken care of and would highly recommend this place to anyone.',
  },
  {
    name: 'Alejandro López',
    image: '/assets/rating1.svg',
    review: 'I received excellent dental care during my visit. The dentist was thorough and explained everything clearly. The environment was very welcoming, and I felt at ease throughout my treatment.',
    rating: <FaStarHalfAlt/>,
  },
  {
    name: 'Javier Martínez',
    image: '/assets/rating1.svg',
    review: 'The dental clinic provided top-notch service from start to finish. The appointments were prompt, and the staff was extremely helpful and courteous. I am very satisfied with the results.',
  },
  {
    name: 'María Rodríguez',
    image: '/assets/rating1.svg',
    review: 'Highly recommend this dental clinic! The facilities are state-of-the-art, and the medical team is knowledgeable and attentive. My treatment plan was tailored to my needs, and I could not be happier with the outcome.',
  },
  {
    name: 'María Rodríguez',
    image: '/assets/rating1.svg',
    review: 'Highly recommend this dental clinic! The facilities are state-of-the-art, and the medical team is knowledgeable and attentive. My treatment plan was tailored to my needs, and I could not be happier with the outcome.',
  },
  {
    name: 'María Rodríguez',
    image: '/assets/rating1.svg',
    review: 'Highly recommend this dental clinic! The facilities are state-of-the-art, and the medical team is knowledgeable and attentive. My treatment plan was tailored to my needs, and I could not be happier with the outcome.',
  },
];

const ClinicRatings = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);


  const initialReviews = reviews.slice(0, 4);
  const displayedReviews = showAllReviews ? reviews : initialReviews;

  return (
    <div className='max-w-[1360px] w-full mx-auto py-10 md:pb-[70px] px-3 sm:px-5'>
      <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold  mb-7'>Clinic Ratings</h2>
      {/* Content */}
      <div className='my-[40px] pb-[25px] mdl:py-[25px] border-b border-[#D0D0D0] max-w-[926px] flex flex-col mdl:flex-row mdl:items-center items-start gap-5 mdl:gap-[83px]'>
        <div className='flex mdl:flex-col flex-row'>
            <Image src='/assets/ratingLogo.svg' alt='Logo' width={150} height={150} className='mt-[13px]' />
            <div className='flex flex-col gap-2.5'>
                <div className='flex items-center gap-2'>
                    <div className='w-[173px] bg-[#D9D9D9] h-[5px] relative rounded-full'>
                        <span className='w-[164px] h-[5px] bg-[#263238] absolute z-10 rounded-full'></span>
                    </div>
                    <h3 className='text-[#263238] text-[12px] leading-[19px] font-normal'>19</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[173px] bg-[#D9D9D9] h-[5px] relative rounded-full'>
                        <span className='w-[155px] h-[5px] bg-[#263238] absolute z-10 rounded-full'></span>
                    </div>
                    <h3 className='text-[#263238] text-[12px] leading-[19px] font-normal'>36</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[173px] bg-[#D9D9D9] h-[5px] relative rounded-full'>
                        <span className='w-[136px] h-[5px] bg-[#263238] absolute z-10 rounded-full'></span>
                    </div>
                    <h3 className='text-[#263238] text-[12px] leading-[19px] font-normal'>12</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[173px] bg-[#D9D9D9] h-[5px] relative rounded-full'>
                        <span className='w-[27px] h-[5px] bg-[#263238] absolute z-10 rounded-full'></span>
                    </div>
                    <h3 className='text-[#263238] text-[12px] leading-[19px] font-normal'>4</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[173px] bg-[#D9D9D9] h-[5px] relative rounded-full'>
                        <span className='w-[44px] h-[5px] bg-[#263238] absolute z-10 rounded-full'></span>
                    </div>
                    <h3 className='text-[#263238] text-[12px] leading-[19px] font-normal'>1</h3>
                </div>
            </div>
        </div>
        {/* Rating */}
        <div className='flex mdl:mt-[150px] '>
            <div className='mdl:w-[140px] mdl:h-[135px] sm:pr-[25px] sm:border-r border-[#E8E8E8]'>
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>3.7</h3>
                <p className='text-[#263238] text-[16px] leading-[19px] font-normal pt-[10px]'>Doctor’s treatment</p>
            </div>
            <div className='mdl:w-[145px] mdl:h-[135px] px-[21px] sm:border-r border-[#E8E8E8]'>
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>4.0</h3>
                <p className='text-[#263238] text-[16px] leading-[19px] font-normal pt-[10px]'>Clinic Workers' Treatment</p>
            </div>
            <div className='mdl:w-[150px] mdl:h-[135px] sm:pl-[21px] pr-[40px] sm:border-r border-[#E8E8E8]'>
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>4.6</h3>
                <p className='text-[#263238] text-[16px] leading-[19px] font-normal pt-[10px]'>Waiting Time</p>
            </div>
            <div className='mdl:w-[122px] mdl:h-[135px] sm:px-[21px]'>
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>5.0</h3>
                <p className='text-[#263238] text-[16px] leading-[19px] font-normal pt-[10px]'>Clinic Status</p>
            </div>
        </div>
      </div>

      {/* Rating */}
      <div className='max-w-[927px]'>
        <div className='max-w-[927px] grid md:grid-cols-2 grid-cols-1 gap-[30px]'>
        {displayedReviews.map((review, index) => (
            <div key={index} className='bg-white shadow-custom rounded-[10px] p-4'>
              <div className='flex items-center gap-2.5'>
                <Image src={review.image} alt='User' width={64} height={64} />
                <div>
                  <h3 className='text-[#263238] text-[18px] leading-[19px] font-medium mb-2'>{review.name}</h3>
                  <div className='flex items-center gap-1 text-[#F64850]'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    {review.rating}
                  </div>
                </div>
              </div>
              <p className='mt-[18px] text-[#263238] text-[14px] leading-[19px] font-normal'>{review.review}</p>
            </div>
          ))}
        </div>
        {/* Read All Reviews */}
        <div className='flex items-center justify-center'>
          <button 
            className='mt-[20px] w-[157px] h-[41px] text-[14px] leading-[14.45px] font-bold text-[#263238] border border-[#263238] rounded-[10px]'
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? 'Show Less Reviews' : 'Read All Reviews'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicRatings;
