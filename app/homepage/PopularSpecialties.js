import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const specialties = [
  { name: 'Ortodoncia', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Ortodoncia Infantil', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Ortodoncia Invisible Invisalign', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Implantes', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Carillas Dentales', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Blanqueamiento Dental', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Dentista de Urgencia', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Limpieza dental', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Prótesis dentales', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Brackets', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Bruxismo', imgSrc: '/assets/PopularSpecialties1.svg' },
  { name: 'Periodoncia', imgSrc: '/assets/PopularSpecialties1.svg' },
];

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

const PopularSpecialties = () => {
   
  return (
    <>
        <div className='text-center max-w-[1440px] mx-auto w-full py-[60px] px-2 sm:px-6'>
        <h2 className='text-[#333333] text-[28px] leading-[28px] md:leading-[54px] font-bold'>ESPECIALIDADES POPULARES</h2>
        <p className='text-[#263238] text-[14px] leading-[19px] font-normal mt-[8px]'>Book and manage your dental appointment in one go</p>
        <div className='max-w-[1123px] mx-auto my-[40px] flex flex-wrap justify-center items-start gap-[55px]'>
            {specialties.map((specialty, index) => (
            <div key={index} className='flex flex-col gap-2.5 max-w-[160px] items-center'>
                <div className='bg-[#FEF14B] bg-opacity-20 w-[118px] h-[118px] flex items-center justify-center rounded-full'>
                <Image src={specialty.imgSrc} alt={specialty.name} width={54} height={54} />
                </div>
                <h2 className='text-[#263238] text-[16px] leading-[19px] font-medium'>{specialty.name}</h2>
            </div>
            ))}
        </div>
        <button className='w-[157px] h-[41px] rounded-[10px] border border-[#263238] bg-white text-[#263238] text-[14px] leading-[14.45px] font-bold'>View All</button>
        </div>

        <div className='bg-[#E9E9E93B] w-full px-2 md:px-6'>
            <div className='w-full max-w-[1440x] mx-auto py-10'>
                <div className='flex md:flex-row flex-col items-center gap-14 md:gap-2 justify-between max-w-[1100px] mx-auto'>
                    <Image src='/assets/customers.svg' alt='Image' width={450} height={300} />
                    <div className='max-w-[260px] flex flex-col gap-2'>
                        <h4 className='text-[#263238] text-[16px] leading-[19px] font-normal'>We believe on our</h4>
                        <h2 className='text-[52px] leading-[54px] font-bold text-[#333333]'><span className='text-[#2C64D8]'>560K+</span> Customers</h2>
                        <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Feedback</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full text-center py-[40px] px-2 sm:px-6'>
            <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Check if this Doctor covers your insurance.</h2>
            <p className='text-[#263238] text-[16px] leading-[19px] font-normal mt-2.5'>Protecting What Matters Most.</p>
            <div className='max-w-[959px] mx-auto w-full pt-10 grid grid-cols-2 md:grid-cols-3 gap-10'>
                {insuranceItems.map((insurance, index) => (
                    <div key={index} className='flex items-center gap-3'>
                        <Image src={insurance.src} alt={insurance.alt} width={65} height={65} className='md:w-[65px] md:h-[65px] w-[40px] h-[40px]' />
                        <h2 className='text-[#263238] text-[13px] md:text-[18px] leading-[19px] font-medium'>{insurance.name}</h2>
                    </div>
                ))}
                <button className='md:flex hidden text-left text-[#2C64D8] text-[16px] leading-[19px] font-normal items-center gap-2'>25 More <IoArrowForward className='' /></button>
            </div>
            <div className='mt-[30px] flex items-center justify-center'>
                <button className='flex md:hidden w-[157px] justify-center h-[41px] rounded-[10px] text-[#263238] text-[14px] leading-[14px] font-normal items-center gap-2 border border-[#263238]'>See All</button>
            </div>
        </div>
    </>
  )
}

export default PopularSpecialties
