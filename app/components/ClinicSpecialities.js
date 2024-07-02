import Image from 'next/image'
import React from 'react'

const ClinicSpecialities = () => {
  return (
    <div className='max-w-[1360px] mx-auto w-full mt-[40px] px-2 lg:px-0'>
      <div className='max-w-[927px] flex flex-col gap-[22px]'>
        <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold mb-5'>Clinic Specialities</h2>
        <div className='flex-wrap flex justify-start items-start gap-5'>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] mr-[50px] p-2.5 min-w-[277px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image1.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>24-Hour Emergency Services</h3>
            </div>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] mr-[50px] p-2.5 min-w-[221px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image2.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Diagnostic Laboratory</h3>
            </div>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] p-2.5 min-w-[210px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image3.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Ambulance Services</h3>
            </div>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] mr-[50px] p-2.5 min-w-[210px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image4.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Radiology and Medical Imaging</h3>
            </div>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] mr-[50px] p-2.5 min-w-[221px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image5.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Rehabilitation Center</h3>
            </div>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] mr-[50px] p-2.5 min-w-[231px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image6.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Intensive Care Unit (ICU)</h3>
            </div>
            <div className='bg-[#FCFAEE] border border-[#0000000F] rounded-[100px] mr-[50px] p-2.5 min-w-[141px] flex items-center justify-center gap-2.5'>
                <Image src='/assets/image7.svg' alt='Image' width={23} height={23} />
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Pharmacy</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicSpecialities