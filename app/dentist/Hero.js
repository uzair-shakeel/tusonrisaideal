import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#FCFAEE]'>
        <div className='py-[40px] px-[52px]'>
          <div className='flex items-center gap-3'>
            <Image src='/assets/Group 18044.svg' alt='Image' width={179} height={169}/>
            <div>
               <div>
                <h2>Dr. Carlos Fernández</h2>
                <Image src='/assets/' />
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero