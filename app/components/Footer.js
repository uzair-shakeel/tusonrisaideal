import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-[#263238] w-full px-3'>
        <div className='max-w-[1440px] w-full mx-auto py-[20px] md:py-[57px] md:px-12 flex lg:items-center items-start lg:flex-row flex-col justify-between gap-6 md:gap-14'>
            <div>
                <Image src='/assets/Footer-logo.svg' alt='Logo' width={90} height={43} />
                <h3 className='text-[#F4F4F4] text-base font-normal py-5'>The trusted place for all your healthcare needs.</h3>
                <div className='flex items-center gap-2'>
                    <Link href='/'><Image src='/assets/call-logo.svg' alt='Call Logo' width={62} height={62}/></Link>
                    <Link href='/'><Image src='/assets/message-logo.svg' alt='Call Logo' width={62} height={62}/></Link>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                <div className='text-[#F4F4F4]'>
                    <h3 className='text-base sm:text-lg font-medium uppercase pb-1.5 md:pb-5'>SERVICES</h3>
                    <ul>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>General Medicine</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Dental Care</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Pediatrics</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Orthopedics</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Cardiology</Link></li>
                    </ul>
                </div>
                <div className='text-[#F4F4F4]'>
                    <h3 className='text-base sm:text-lg font-medium uppercase pb-1.5 md:pb-5'>SPECIALTIES</h3>
                    <ul>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Family Medicine</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Emergency Care</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Physical Therapy</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Mental Health Services</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Women's Health</Link></li>
                    </ul>
                </div>
                <div className='text-[#F4F4F4]'>
                    <h3 className='text-base sm:text-lg font-medium uppercase pb-1.5 md:pb-5'>PATIENT RESOURCES</h3>
                    <ul>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Patient Portal</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Insurance Information</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Health Tips</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>FAQ's</Link></li>
                    </ul>
                </div>
                <div className='text-[#F4F4F4]'>
                    <h3 className='text-base sm:text-lg font-medium uppercase pb-1.5 md:pb-5'>ABOUT US</h3>
                    <ul>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Our Team</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Careers</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Testimonials</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Clinic FAQ's</Link></li>
                        <li><Link href='/' className='text-xs sm:text-sm font-normal'>Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='max-w-[730px] mx-auto w-full pb-[20px] md:pb-[42px] text-[#F4F4F4]'>
            <h3 className='text-lg font-medium'>Stay Informed about Health and Wellness!</h3>
            <p className='text-xs font-normal mb-3'>Get expert advice and updates on the latest health tips and services delivered directly to your inbox.</p>
            <div className='bg-[#F6F6F6] rounded-[28px] flex justify-between max-w-[547px] h-[47px]'>
                <input type='email' placeholder='Email' required className='bg-transparent p-4 outline-none text-black w-full'/>
                <button className='bg-[#FEF14B] min-w-[121px] h-[31px] my-auto text-[#263238] text-sm font-bold mr-3 rounded-[10px]'>Subscribe</button>
            </div>
            <p className='text-[10px] leading-[24px] font-normal py-1.5'>By subscribing, you agree to our Privacy Policy and Terms of Service. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <div className='flex items-center gap-5'>
                <Link href='/'><Image src='/assets/instagram.svg' alt='Instagram' width={24} height={24}/></Link>
                <Link href='/'><Image src='/assets/facebook.svg' alt='Facebook' width={24} height={24}/></Link>
                <Link href='/'><Image src='/assets/twitter.svg' alt='Twitter' width={24} height={24}/></Link>
                <Link href='/'><Image src='/assets/linkedin.svg' alt='Linkedin' width={24} height={24}/></Link>
            </div>
        </div>
    </div>
    <div className='bg-[#FEF14B] h-4'></div>
    </>
  )
}

export default Footer