import Image from 'next/image';
import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const Insurance = () => {
    
const insuranceItems = [
    {
        src: '/assets/Mapfre.svg',
        alt: 'Mapfre',
        name: 'Mapfre'
    },
    {
        src: '/assets/AXA-Seguros.svg',
        alt: 'AXA Seguros',
        name: 'AXA Seguros'
    },
    {
        src: '/assets/1.svg',
        alt: 'Allianz Seguros',
        name: 'Allianz Seguros'
    },
    {
        src: '/assets/2.svg',
        alt: 'Mutua Madrileña',
        name: 'Mutua Madrileña'
    },
    {
        src: '/assets/3.svg',
        alt: 'Adeslas',
        name: 'Adeslas'
    },
    {
        src: '/assets/4.svg',
        alt: 'Sanitas',
        name: 'Sanitas'
    },
    {
        src: '/assets/5.svg',
        alt: 'Generali Seguros',
        name: 'Generali Seguros'
    },
    {
        src: '/assets/6.svg',
        alt: 'Caser Seguros',
        name: 'Caser Seguros'
    },
];

  return (
    <div className='w-full py-[40px] sm:px-6 max-w-[927px] 2xl:ml-[110px] px-4 lg:ml-[40px]'>
            <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Check if this Doctor covers your insurance.</h2>
            <p className='text-[#263238] text-[16px] leading-[19px] font-normal mt-2.5'>Protecting What Matters Most.</p>
            <div className=' w-full pt-10 grid grid-cols-2 md:grid-cols-3 gap-10'>
                {insuranceItems.map((insurance, index) => (
                    <div key={index} className='flex items-center gap-3'>
                        <Image src={insurance.src} alt={insurance.alt} width={65} height={65} className='md:w-[65px] md:h-[65px] w-[40px] h-[40px]' />
                        <h2 className='text-[#263238] text-[13px] md:text-[18px] leading-[19px] font-medium'>{insurance.name}</h2>
                    </div>
                ))}
                <button className='md:flex hidden text-left text-[#2C64D8] text-[16px] leading-[19px] font-normal items-center gap-2'>25 More <IoArrowForward className='' /></button>
            </div>
            <div className='md:flex hidden mt-[30px]  items-center justify-center'>
                <button className='flex md:hidden w-[157px] justify-center h-[41px] rounded-[10px] text-[#263238] text-[14px] leading-[14px] font-normal items-center gap-2 border border-[#263238]'>See All</button>
            </div>
        </div>
  )
}

export default Insurance