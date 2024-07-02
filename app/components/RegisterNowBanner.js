import Image from 'next/image'
import React from 'react'

const RegisterNowBanner = () => {
  return (
    <div className='px-2'>
      <div className='bg-[#FCFAEE] w-full max-w-[1344px] p-4 mt-[40px] md:mt-0 mx-auto rounded-t-[20px]'>
        <div className=''>
          <div className='max-w-[831px] mx-auto flex items-center justify-between px-1 md:p-[18px]'>
            <div className='max-w-[491px]'>
              <h3 className='text-[#263238] font-medium sm:text-[22px] text-[18px] leading-[19px]'>Do you have a <span className='text-[#7E8385]'>clinic?</span> Do you want to <span className='text-[#7E8385]'>appear?"</span></h3>
              <p className='text-[#263238] sm:text-[18px] text-[14px] leading-[19px] font-normal mt-5'>Join the platform with everything you need to grow your practice and level up.</p>
              <button className='bg-[#FEF14B] w-[155px] h-[41px] rounded-[10px] text-[#263238] text-[14px] leading-[14.45px] font-bold mt-10'>Register Now</button>
            </div>
            <Image src='/assets/Medicine-bro.svg' alt='Medicine' width={220} height={220} className='sm:w-[220px] w-[180px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterNowBanner