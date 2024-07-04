'use client'
import React, { useState } from 'react';

const FindDoctor = () => {
  const [activeTab, setActiveTab] = useState('specialties');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='px-3 w-full max-w-[927px] 2xl:ml-[110px] pl-2 lg:ml-[40px]'>
      <div className='w-full overflow-scrol0 mx-auto border border-[#D0D0D0] my-[60px] rounded-[10px] p-[25px] '>
        <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Find Doctors</h2>
        <div>
          <div className='border-b border-[#D0D0D0] max-w-[926px] h-[42px] flex items-center justify-start mt-[10px]'>
            <ul className='flex items-center gap-5 overflow-scroll'>
              <li className={`text-${activeTab === 'specialties' ? '[#2C64D8] underline underline-offset-[16px] text-[16px] leading-[24px] font-semibold' : '16px] leading-[24px] text-[#6A6A6A] cursor-pointer'}`} onClick={() => handleTabChange('specialties')}>
                Specialties
              </li>
              <li className={`text-${activeTab === 'procedures' ? '[#2C64D8] underline underline-offset-[16px] text-[16px] leading-[24px] font-semibold' : '16px] leading-[24px] text-[#6A6A6A] cursor-pointer'}`} onClick={() => handleTabChange('procedures')}>
                Procedures
              </li>
              <li className={`text-${activeTab === 'location' ? '[#2C64D8] underline underline-offset-[16px] text-[16px] leading-[24px] font-semibold' : '16px] leading-[24px] text-[#6A6A6A] cursor-pointer'}`} onClick={() => handleTabChange('location')}>
                Location
              </li>
              <li className={`text-${activeTab === 'insurances' ? '[#2C64D8] underline underline-offset-[16px] text-[16px] leading-[24px] font-semibold' : '16px] leading-[24px] text-[#6A6A6A] cursor-pointer'}`} onClick={() => handleTabChange('insurances')}>
                Insurances
              </li>
              <li className={`text-${activeTab === 'more' ? '[#2C64D8] underline underline-offset-[16px] text-[16px] leading-[24px] font-semibold' : '16px] leading-[24px] text-[#6A6A6A] cursor-pointer'}`} onClick={() => handleTabChange('more')}>
                More
              </li>
            </ul>
          </div>
          {/* tab data */}
          <div className='flex items-start mt-[28px] justify-between max-w-[927px]'>
            {/* Render content based on activeTab state */}
            {activeTab === 'specialties' && (
              <div className='flex items-start gap-7 md:gap-3 justify-between max-w-[700px] w-full overflow-scroll' >
                  <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal whitespace-nowrap'>
                      <li>Aetna Cardiologists</li>
                      <li>Aetna Eye Doctors</li>
                      <li>Aetna Orthopedic Surgeons</li>
                      <li>Aetna Psychologists</li>
                      <li>Aetna Chiropractors</li>
                      <li>Aetna Gastroenterologists</li>
                  </ul>
                  <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal whitespace-nowrap'>
                      <li>Aetna Pediatricians</li>
                      <li>Aetna Therapists/Counselors</li>
                      <li>Aetna OB-GYNS</li>
                      <li>Aetna Plastic Surgeons</li>
                      <li>Aetna Urgent Care</li>
                      <li>Aetna Ear, Nose & Throat Doctors</li>
                  </ul>
                  <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal whitespace-nowrap'>
                      <li>Aetna Ophthalmologists</li>
                      <li>Aetna Psychiatrists</li>
                      <li>More Specialties</li>
                  </ul>
              </div>
            )}
            {activeTab === 'procedures' && (
              <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal'>
                <li>Aetna Pediatricians</li>
                <li>Aetna Psychiatrists</li>
                <li>Aetna Psychologists</li>
                <li>Aetna Gastroenterologists</li>
              </ul>
            )}
            {activeTab === 'location' && (
              <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal'>
                <li>Aetna Ophthalmologists</li>
                <li>Aetna Orthopedic Surgeons</li>
                <li>Aetna Plastic Surgeons</li>
                <li>Aetna Ear, Nose & Throat Doctors</li>
              </ul>
            )}
            {activeTab === 'insurances' && (
              <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal'>
                <li>Aetna Eye Doctors</li>
                <li>Aetna OB-GYNS</li>
                <li>Aetna Chiropractors</li>
              </ul>
            )}
            {activeTab === 'more' && (
              <ul className='flex flex-col gap-4 text-[#263238] text-[14px] leading-[19px] font-normal'>
                <li>Aetna Eye Doctors</li>
                <li>Aetna OB-GYNS</li>
                <li>Aetna Chiropractors</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
