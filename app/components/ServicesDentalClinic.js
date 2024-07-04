'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ServicesDentalClinic = () => {
  const [showMore, setShowMore] = useState(false);

  const services = [
    { name: 'General Dentistry', price: '€1,500' },
    { name: 'Cosmetic Dentistry', price: '€1,300' },
    { name: 'Orthodontics (Braces & Invisalign)', price: '€1,500' },
    { name: 'Dental Implants', price: '€800' },
    { name: 'Teeth Whitening', price: '€300' },
    { name: 'Periodontics', price: '€900' }, 
    { name: 'Oral Surgery', price: '€1,200' },  
    { name: 'Pediatric Dentistry', price: '€600' },  
  ];

  const visibleServices = showMore ? services : services.slice(0, 5);

  return (
    <div className='max-w-[1380px] mx-auto w-full mt-[20px] px-4 md:block hidden'>
        <div className='max-w-[927px] flex flex-col gap-[22px] bg-[#FFFFFF] border border-[#D0D0D0] p-5 rounded-[10px]'>
            <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Services at our Dental Clinic</h2>
            <div className='flex flex-col gap-4'>
                {visibleServices.map((service, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <Image src='/assets/check.svg' alt='Logo' width={16} height={16} className='-mt-0.5' />
                        <h3 className='text-[#263238] text-[14px] leading-[19px] font-normal'>{service.name} - <span className='font-bold'>{service.price}</span></h3>
                    </div>
                ))}
            </div>
            <div>
                <button 
                    className='text-[#2C64D8] text-[16px] leading-[19px] font-normal flex items-center gap-2' 
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Show Less' : 'Read More'} {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ServicesDentalClinic
