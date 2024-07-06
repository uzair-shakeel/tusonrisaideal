"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full border-b border-[#D0D0D0]'>
      <div className='w-full mx-auto flex items-center justify-between py-5 px-4 lg:pl-[61px] lg:pr-[36px]'>
        <div className='flex items-center gap-2'>
          <button className='block lg:hidden' onClick={() => setMenuOpen(!menuOpen)}><HiOutlineMenu /></button>
          <Image src='/assets/Logo.svg' alt='Logo' width={91.02} height={43} className='min-w-[91.02px] min-h-[43px]' />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-6 lg:gap-10 text-[#6A6A6A] text-[14px] lg:text-[16px] leading-[24px] font-normal'>
            <li><Link href='/' className='flex items-center gap-1'>Encuentra tu Dentista<IoIosArrowDown /></Link></li>
            <li><Link href='/'>Confía en TSI</Link></li>
            <li><Link href='/'>Sobre Nosotros</Link></li>
            <li><Link href='/'>Blog</Link></li>
          </ul>
        </div>
        <button className='bg-[#FEF14B] min-w-[180px] sm:min-w-[220px] min-h-[42px] rounded-[10px] text-[12px] lg:text-[14px] leading-[20px] text-[#333333] font-bold'>Únete como Clínica/Dentista</button>
      </div>
      {menuOpen && (
        <div className='lg:hidden bg-white w-full px-4 py-2'>
          <ul className='flex flex-col gap-4 text-[#6A6A6A] text-[16px] leading-[24px] font-normal'>
            <li><Link href='/' className='flex items-center gap-1'>Encuentra tu Dentista<IoIosArrowDown /></Link></li>
            <li><Link href='/'>Confía en TSI</Link></li>
            <li><Link href='/'>Sobre Nosotros</Link></li>
            <li><Link href='/'>Blog</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
