import Image from 'next/image'
import React from 'react'

const TSIHealthPartners = () => {
  return (
    <div className='bg-[#FAFAFA] w-full py-[100px] px-3'>
        <div className='w-full max-w-[1200px] mx-auto flex mdl:flex-row flex-col mdl:justify-between mdl:items-center gap-10 mdl:gap-2'>
            <div className='flex flex-col gap-[18px]'>
                <h2 className='text-[#263238] text-[28px] leading-[27px] font-bold'>TSI Health Partners</h2>
                <h4 className='text-[#3C494F] text-[14px] leading-[19px] font-normal'>Trusted by 100+ Big Companies</h4>
                <button className='bg-[#FEF14B] rounded-[20px] w-[155px] h-[41px] text-[14px] leading-[14.45px] font-bold text-[#263238]'>Partner with US</button>
            </div>
            <div className='mix-blend-luminosity max-w-[600px] grid grid-cols-3  gap-5'>
                <Image src='/assets/Health Partners1.svg' alt='Image' width={185.31} height={67.78} className='mix-blend-multiply' />
                <Image src='/assets/Health Partners2.svg' alt='Image' width={185.31} height={67.78} className='mix-blend-multiply' />
                <Image src='/assets/Health Partners3.svg' alt='Image' width={154.43} height={55.77} className='mix-blend-multiply' />
                <Image src='/assets/Health Partners4.svg' alt='Image' width={185.31} height={67.78} className='mix-blend-multiply' />
                <Image src='/assets/Health Partners5.svg' alt='Image' width={185.31} height={67.78} className='mix-blend-multiply' />
            </div>
        </div>
    </div>
  )
}

export default TSIHealthPartners