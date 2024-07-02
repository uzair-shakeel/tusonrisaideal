import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const InsuranceItem = ({ src, alt, name }) => (
    <div className='flex items-center gap-3'>
        <Image src={src} alt={alt} width={65} height={65} />
        <h2 className='text-[#263238] text-[18px] leading-[19px] font-medium'>{name}</h2>
    </div>
);

const InsuranceAssociated = () => {
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
        <div className='max-w-[1360px] w-full mx-auto p-1 pt-[60px] md:py-[70px] px-4'>
            {/* Insurance Associated */}
            <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Insurance Associated</h2>
            <h4 className='text-[#263238] text-[16px] leading-[19px] font-normal mt-2.5'>Protecting What Matters Most.</h4>
            <div className='max-w-[937px] py-[30px] grid grid-cols-2 sm:grid-cols-3 gap-10'>
                {insuranceItems.map((item, index) => (
                    <InsuranceItem key={index} {...item} />
                ))}
            </div>
            {/* TSI Awards */}
            <div className='max-w-[937px] py-5 px-2.5 border-b border-t border-[#D0D0D0]'>
                <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>TSI Awards</h2>
                <div className='mt-1.5 flex items-center gap-6'>
                    <Image src='/assets/TSI-Awards.svg' alt='Logo' width={112} height={112} />
                    <div>
                        <h3 className='text-[#181515] text-[18px] leading-[19px] mb-2 font-semibold'>Bronce Level Clinic</h3>
                        <Link href='/' className='text-[#2C64D8] text-[16px] leading-[19px] font-normal flex items-center gap-2'>Know more <FaArrowRight className='text-[14px]' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InsuranceAssociated;
