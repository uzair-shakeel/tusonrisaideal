import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4'>
        <div className='pt-5 pb-[31px] max-w-[1320px] mx-auto'>
            <ul className='flex items-center justify-center sm:justify-start gap-3 md:gap-10'>
                <li><Link href='/' className='text-[#6A6A6A] active:text-[#2C64D8] text-[16px] leading-[24px] font-normal active:font-semibold'>Photos</Link></li>
                <li><Link href='/' className='text-[#6A6A6A] active:text-[#2C64D8] text-[16px] leading-[24px] font-normal active:font-semibold'>Overview</Link></li>
                <li><Link href='/' className='text-[#6A6A6A] active:text-[#2C64D8] text-[16px] leading-[24px] font-normal active:font-semibold'>Location</Link></li>
                <li><Link href='/' className='text-[#6A6A6A] active:text-[#2C64D8] text-[16px] leading-[24px] font-normal active:font-semibold'>Ratings</Link></li>
                <li><Link href='/' className='text-[#6A6A6A] active:text-[#2C64D8] text-[16px] leading-[24px] font-normal active:font-semibold '>Facilities</Link></li>
            </ul>
        </div>
        <div className='hero-img bg-contain w-full max-w-[1388px] mx-auto h-[389px] md:h-[520px] rounded-[20px] relative'>
            <div className='overlay-gradient absolute inset-0 w-full h-full rounded-[20px]'></div>
            {/* Content */}
            <div className='pl-[27px] pb-[27px] flex items-end justify-end lg:justify-start h-full relative z-10'>
                <div className='flex flex-col'>
                    <Image src='/assets/stroll.svg' alt='Stroll' width={54} height={54} className='lg:block hidden' />
                    <div className='flex items-center justify-between w-full lg:w-[926px]'>
                        <div className='text-white mt-4 lg:block hidden'>
                            <h3 className='text-[36px] leading-[19px] font-medium'>Centro de Salud El Sol</h3>
                            <p className='text-[15px] leading-[19px] font-normal mt-5'>Avenida Principal 123, Ciudad del Sol, Estado del Sol, 45678</p>
                        </div>
                        <div className='flex items-center gap-3.5 mr-4'>
                            <Image src='/assets/gallery1.svg' alt='image' width={69} height={69} className='w-[50px] h-[50px] sm:w-[69px] sm:h-[69px]' />
                            <Image src='/assets/gallery2.svg' alt='image' width={69} height={69} className='w-[50px] h-[50px] sm:w-[69px] sm:h-[69px]'/>
                            <Image src='/assets/gallery3.svg' alt='image' width={69} height={69} className='w-[50px] h-[50px] sm:w-[69px] sm:h-[69px]'/>
                            <div className='flex items-center gap-2'>
                                <Link href='/gallery' className='text-white text-[15px] leading-[19px] font-normal underline underline-offset-2'>See All</Link>
                                <Image src='/assets/see-all.svg' alt='image' width={18} height={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:hidden flex items-center mt-[26px] gap-4'>
            <Image src='/assets/mobile-stroll.svg' alt='Stroll' width={54} height={54} className='' />
            <div className='flex flex-col gap-2'>
                <h3 className='text-[26px] leading-[19px] font-medium text-[#181515]'>Centro de Salud El Sol</h3>
                <p className='text-[14px] leading-[19px] font-normal text-[#263238]'>Avenida Principal 123, Ciudad del Sol, Estado del Sol, 45678</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
