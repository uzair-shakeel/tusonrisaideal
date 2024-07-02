"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const dentistData = [
  {
    id: 1,
    name: "Dr. Alejandro López",
    title: "Dentista",
    experience: "25 years of experience",
    rating: 3.4,
    profileImg: '/assets/profile.svg',
    badgeImg: '/assets/Sello-TSI-Bronce.svg',
  },
  {
    id: 2,
    name: "Dr. Alejandro López",
    title: "Dentista",
    experience: "25 years of experience",
    rating: 4.1,
    profileImg: '/assets/profile1.svg',
    badgeImg: '/assets/Sello-TSI-Bronce.svg',
  },
  {
    id: 3,
    name: "Dr. Alejandro López",
    title: "Dentista",
    experience: "25 years of experience",
    rating: 3.2,
    profileImg: '/assets/profile2.svg',
    badgeImg: '/assets/Sello-TSI-Bronce.svg',
  },
  {
    id: 4,
    name: "Dr. Alejandro López",
    title: "Dentista",
    experience: "25 years of experience",
    rating: 3.4,
    profileImg: '/assets/profile3.svg',
    badgeImg: '/assets/Sello-TSI-Diamante.svg',
  },
  {
    id: 5,
    name: "Dr. Alejandro López",
    title: "Dentista",
    experience: "25 years of experience",
    rating: 3.4,
    profileImg: '/assets/profile.svg',
    badgeImg: '/assets/Sello-TSI-Bronce.svg',
  },
  {
    id: 6,
    name: "Dr. Alejandro López",
    title: "Dentista",
    experience: "25 years of experience",
    rating: 4.1,
    profileImg: '/assets/profile1.svg',
    badgeImg: '/assets/Sello-TSI-Bronce.svg',
  },
];

const DentistCard = ({ dentist }) => {
  const fullStars = Math.floor(dentist.rating);
  const halfStar = dentist.rating % 1 !== 0;

  return (
    <div className='bg-white shadow-custom rounded-[10px] p-4 flex gap-2.5'>
      <div className='relative w-[82px] h-[82px]'>
        <Image src={dentist.profileImg} alt='Profile' width={82} height={82} />
        <Image src={dentist.badgeImg} alt='Sello TSI Bronce' width={32} height={32} className='absolute right-0 -bottom-1' />
      </div>
      <div className='mt-4'>
        <h2 className='text-[#263238] text-[20px] leading-[19px] font-medium'>{dentist.name}</h2>
        <div className='flex items-center gap-4 my-1.5'>
          <h4 className='text-[#263238]  text-[14px] sm:text-[16px] leading-[19px] font-normal'>{dentist.title}</h4>
          <div className='flex items-center border-l border-[#CDCDCD] h-[19px]'>
            <Image src='/assets/BriefcaseMedical.svg' alt='Brief Case Medical' width={9} height={9} className='ml-2 mr-1' />
            <h3 className='text-[#263238] text-[12px] sm:text-[16px] leading-[18.75px] font-normal'>{dentist.experience}</h3>
          </div>
        </div>
        <div className='mt-1 flex items-center gap-1.5'>
          <div className='flex items-center gap-1'>
            {[...Array(fullStars)].map((_, i) => <FaStar key={i} className='text-[#F64850] -mt-1' />)}
            {halfStar && <FaStarHalfAlt className='text-[#F64850] -mt-1' />}
          </div>
          <h2 className='text-[#263238] font-bold text-[18px] leading-[19px]'>{dentist.rating}</h2>
        </div>
        <Link href='/' className='mt-2 flex items-center gap-3 text-[#2C64D8] text-[16px] leading-[19px] font-normal'>
          Visit Profile <FaArrowRight className='text-[14px]' />
        </Link>
      </div>
    </div>
  );
};

const AssociatedDentist = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='max-w-[1330px] mx-auto w-full mt-[40px] px-2'>
      <div className='max-w-[927px] flex flex-col gap-[22px] bg-[#FFFDEA59] border border-[#D0D0D05C] p-2 md:p-5 rounded-[10px]'>
        <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold mb-5'>Associated dentist</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          {dentistData.slice(0, expanded ? dentistData.length : (window.innerWidth > 768 && window.innerWidth < 1024) ? 4 : 2).map(dentist => (
            <DentistCard key={dentist.id} dentist={dentist} />
          ))}
        </div>
        <div className='flex items-center justify-center w-full'>
          <button onClick={toggleExpand} className='border border-[#263238] w-[157px] h-[41px] rounded-[10px] text-[#263238] text-[14px] leading-[14.45px] font-bold'>
            {expanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssociatedDentist;
