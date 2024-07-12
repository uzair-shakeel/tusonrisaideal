'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';




const WriteAReview = ({ onClose }) => {
    // Rating Funcionality
    const [generalRating, setGeneralRating] = useState(0);
    const [doctorRating, setDoctorRating] = useState(0);
    const [clinicWorkersRating, setClinicWorkersRating] = useState(0);
    const [waitingTimeRating, setWaitingTimeRating] = useState(0);
    const [clinicStatusRating, setClinicStatusRating] = useState(0);

    const handleRatingClick = (rating, setRating) => {
        setRating(rating);
    };

    const renderStars = (currentRating, setRating) => (
        <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} onClick={() => handleRatingClick(star, setRating)}>
            {star <= currentRating ? (
                <FaStar className='text-yellow-500 cursor-pointer' />
            ) : (
                <FaRegStar className='text-[#9C9C9C] cursor-pointer' />
            )}
            </div>
        ))}
        </div>
    );    

    // File Select
    const fileInputRef = useRef(null);

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[675px] overflow-auto">
        <div className='flex items-center justify-between gap-2 border-b border-[#C0C0C0] pb-[10px]'>
            <h2 className='text-[25.26px] leading-[13.33px] font-medium'>My Review</h2>
            <button className="" onClick={onClose}>
                <Image src='/assets/delete-btn.svg' alt='Icons' width={24} height={24} />
            </button>
        </div>

        {/* General Rating */}
        <div className='mt-4 flex flex-col gap-2'>
          <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>General Rating</h3>
          {renderStars(generalRating, setGeneralRating)}
        </div>

         {/* Doctor’s treatment & Clinic Workers' Treatment */}
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Doctor’s treatment</h3>
            {renderStars(doctorRating, setDoctorRating)}
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Clinic Workers' Treatment</h3>
            {renderStars(clinicWorkersRating, setClinicWorkersRating)}
          </div>
        </div>

        {/* Waiting Time & Clinic Status */}
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Waiting Time</h3>
            {renderStars(waitingTimeRating, setWaitingTimeRating)}
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Clinic Status</h3>
            {renderStars(clinicStatusRating, setClinicStatusRating)}
          </div>
        </div>

        {/* Clinic & Treatment DropDown */}
        <div className='grid grid-cols-2 gap-4 mt-4'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Clinic</h3>
                <select className='border border-[#C7C7C7] bg-[#F6F6F6] h-[32px] rounded-[3.51px] outline-none text-[14px]'>
                    <option>Option One</option>
                    <option>Option Two</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Treatment</h3>
                <select className='border border-[#C7C7C7] bg-[#F6F6F6] h-[32px] rounded-[3.51px] outline-none text-[14px]'>
                    <option>Option One</option>
                    <option>Option Two</option>
                </select>
            </div>
        </div>

        {/* Subject */}
        <div className='flex flex-col mt-4'>
            <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Subject</h3>
            <div className='mt-2'>
                <input type='text' className='w-full h-[32px] border-[0.42px] outline-none px-1 border-[#C7C7C7] bg-[#F6F6F6] rounded-[3.51px]'  />
            </div>
        </div>

        {/* Review */}
        <div className='flex flex-col mt-4'>
            <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Review</h3>
            <div className='mt-2'>
                <textarea placeholder='How was your experience with this doctor' className='w-full h-[113px] rounded-[3.51px] border-[0.42px] outline-none p-1.5 resize-none border-[#C7C7C7] bg-[#F6F6F6] placeholder:text-[9.82px] text-[9.82px] leading-[10.14px] font-normal'></textarea>
            </div>
        </div>

        {/* Upload Photos or Videos */}
        <div className='mt-4'>
          <h3 className='text-[#181515] text-[12.63px] font-medium leading-[13.33px]'>Upload Photos or Videos</h3>
          <div className='py-[15px] w-full rounded-[3.51px] border-[0.42px] border-[#AFADAD] bg-[#E1E1E1] flex flex-col items-center justify-center gap-2 mt-2'>
            <Image src='/assets/file-select.svg' alt='Image' width={277} height={40} className='' />
            <button
              className='border-[0.7px] border-[#000000] rounded-[7.02px] w-[141px] h-[42px] mt-[15px] text-[#263238] text-[14px] leading-[10.14px] font-bold'
              onClick={handleFileInputClick}>Select Files
            </button>
            <input type='file' ref={fileInputRef} className='hidden' />
          </div>
        </div>

        {/* Submit Review */}
        <div className='flex items-end w-full justify-end'>
            <button className='bg-[#FEF14B] w-[162px] h-[42px] rounded-[7px] text-[#263238] text-[14px] leading-[10.14px] font-bold mt-5'>Submit Review</button>
        </div>
        
      </div>
    </div>
  );
};

export default WriteAReview;
