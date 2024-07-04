import Image from 'next/image'
import React from 'react'

const Qualifications = () => {
  return (
    <div className='border-y border-[#D0D0D0] max-w-[929px] 2xl:ml-[110px] pl-2 lg:ml-[40px] py-5 my-10'>
        <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold mb-5'>Qualifications</h2>
        <div className='flex flex-wrap justify-between items-start gap-[20px] max-w-[749px] '>
            <div className='border border-[#0000000F] bg-[#FCFAEE] rounded-[100px] min-w-[235px] h-[39px] flex items-center justify-center gap-2'>
                <Image src='/assets/check.svg' alt='Logo' width={16} height={16} className='-mt-0.5' />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>DDS, University of Madrid</h3>
            </div>
            <div className='border border-[#0000000F] bg-[#FCFAEE] rounded-[100px] min-w-[363px] h-[39px] flex items-center justify-center gap-2'>
                <Image src='/assets/check.svg' alt='Logo' width={16} height={16} className='-mt-0.5' />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Member of the Spanish Dental Association</h3>
            </div>
            <div className='border border-[#0000000F] bg-[#FCFAEE] rounded-[100px] min-w-[341px] h-[39px] flex items-center justify-center gap-2'>
                <Image src='/assets/check.svg' alt='Logo' width={16} height={16} className='-mt-0.5' />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Certified in Advanced Cosmetic Dentistry</h3>
            </div>
            <div className='border border-[#0000000F] bg-[#FCFAEE] rounded-[100px] min-w-[340px] h-[39px] flex items-center justify-center gap-2'>
                <Image src='/assets/check.svg' alt='Logo' width={16} height={16} className='-mt-0.5' />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Over 15 years of professional experience</h3>
            </div> 
        </div>
    </div>
  )
}

export default Qualifications