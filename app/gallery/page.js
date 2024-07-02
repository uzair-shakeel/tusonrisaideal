import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";


const gallery = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center border-b border-[#D0D0D0] px-4 md:px-14 py-2.5 gap-1'>
        <Link href='/' className='text-[#2C64D8] text-[16px] leading-[24px] font-semibold flex items-center gap-1'><IoArrowBackOutline /> Clinic Photos/</Link>
        <span className='text-[#263238] text-[14px] leading-[24px] font-normal'> Clinic Details</span>
      </div>
      <div className='max-w-[1440px] w-full mx-auto py-5 px-4'>
          <Image src='/assets/galleryphoto1.svg' alt='1' width={1440} height={515} />
          <div className='grid md:grid-cols-2 grid-cols-1 my-[20px] gap-5'>
            <Image src='/assets/galleryphoto4.svg' alt='1' width={700} height={680} />
            <Image src='/assets/galleryphoto3.svg' alt='1' width={700} height={680} />
            <Image src='/assets/galleryphoto2.svg' alt='1' width={700} height={680} />
          </div>
      </div>
    </div>
  )
}

export default gallery