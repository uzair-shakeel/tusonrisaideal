'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';



const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className='bg-[#FCFAEE] relative pl-3 lg:pl-[60px]' >
        <div className='py-[40px] lg:px-[52px]'>
          <div className='flex items-center gap-3 border-b border-[#E0E0E0] max-w-[737px] pb-[20px]'>
            <Image src='/assets/Group 18044.svg' alt='Image' width={179} height={169} className='md:w-[179px] md:h-[169px] w-[120px] h-[120px]' />
            <div className='flex flex-col gap-2'>
              <div className='flex md:flex-row flex-col md:items-center md:gap-1 gap-3 sm:gap-[1.5rem]'>
                <h2 className='text-[#263238] text-[20px] md:text-[36px] leading-[19px] font-medium'>Dr. Carlos Fernández</h2>
                <div className='flex items-center gap-1'>
                  <FaStar className='text-[#F64850] mb-0.5 text-base' />
                  <h2 className='text-[#263238] text-[14px] sm:text-[16px] leading-[19px] font-bold'>4.8  <span className='font-normal text-[#797E81]'>(33 evaluaciones)</span></h2>
                </div>
              </div>

              <div className='flex items-center gap-2 mt-2'>
                <h4 className='text-[#263238] text-[16px] leading-[19px]'>Dentista</h4>
                <div className='flex items-center gap-1 pl-1 border-l border-[#CDCDCD]'>
                  <Image src='/assets/box.svg' alt='box' width={12} height={12} />
                  <h3 className=' text-[#263238] text-[13px] sm:text-[16px] leading-[19px] '>25 years of experience</h3>
                </div>
              </div>


              <div className='md:flex hidden items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <Image src='/assets/teeth.svg' alt='Image' width={20} height={20} />
                  <h3 className='text-[#263238] text-[16px] leading-[19px] font-medium'>?/100 Calificación TSI</h3>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src='/assets/sun.svg' alt='Image' width={20} height={20} />
                  <h3 className='text-[#263238] text-[16px] leading-[19px] font-medium'>Clínica Verificada</h3>
                </div>
              </div>

              <div className='md:flex hidden items-center gap-4'>
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Trabaja en : <span className='text-[#2B59E0] underline'>Centro de Salud El So</span></h3>
                <h3 className='text-[#263238] text-[16px] leading-[19px] font-bold'>Núm. Colegiado:   <span className='text-[#263238] font-normal'>28012141</span></h3>
              </div>

            </div>
          </div>

          {/* Mobile */}
          <div className='flex md:hidden items-center gap-4 mt-8'>
                <div className='flex items-center gap-2'>
                  <Image src='/assets/teeth.svg' alt='Image' width={20} height={20} />
                  <h3 className='text-[#263238] text-[16px] leading-[19px] font-medium'>?/100 Calificación TSI</h3>
                </div>
                <div className='flex items-center gap-2'>
                  <Image src='/assets/sun.svg' alt='Image' width={20} height={20} />
                  <h3 className='text-[#263238] text-[16px] leading-[19px] font-medium'>Clínica Verificada</h3>
                </div>
          </div>

          <div className='flex flex-col md:hidden items-start gap-4 mt-8'>
            <h3 className='text-[#263238] text-[16px] leading-[19px] font-normal'>Trabaja en : <span className='text-[#2B59E0] underline'>Centro de Salud El So</span></h3>
            <h3 className='text-[#263238] text-[16px] leading-[19px] font-bold'>Núm. Colegiado:   <span className='text-[#263238] font-normal'>28012141</span></h3>
          </div>

          <div className='grid sm:grid-cols-2 grid-cols-1 max-w-[888px] gap-7 mt-14'>
            <div className='flex items-start gap-1.5'>
              <Image src='/assets/thumb1.svg' alt='img' width={26} height={26} />
              <div className='flex items-start gap-1.5 flex-col'>
                <h2 className='text-[#263238] text-[20px] leading-[19px] font-semibold'>Highly Suggested</h2>
                <h4 className='text-[#263238] text-[14px] leading-[19px] font-normal'>72% Patients are very positive about him</h4>
              </div>
            </div>
            <div className='flex items-start gap-1.5'>
              <Image src='/assets/timer.svg' alt='img' width={26} height={26} />
              <div className='flex items-start gap-1.5 flex-col'>
                <h2 className='text-[#263238] text-[20px] leading-[19px] font-semibold'>Lower Waiting Time</h2>
                <h4 className='text-[#263238] text-[14px] leading-[19px] font-normal'>97% Patients waited less then 10 mins</h4>
              </div>
            </div>
            <div className='flex items-start gap-1.5'>
              <Image src='/assets/availablity.svg' alt='img' width={26} height={26} />
              <div className='flex items-start gap-1.5 flex-col'>
                <h2 className='text-[#263238] text-[20px] leading-[19px] font-semibold'>Availablity</h2>
                <h4 className='text-[#263238] text-[14px] leading-[19px] font-normal'>He is active on platform</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Top Content */}
        <div className='xl:block hidden absolute top-[50px] w-[386px] z-40 right-[67px] bg-[#FFFFFF] rounded-[11px] shadow-custom'>
          {/* Virtual Consultation Accepted */}
          <div className='py-5 w-[231px] mx-auto rounded-[10px]'>
            <div className='flex items-center gap-2.5'>
              <Image src='/assets/video.svg' alt='Video' width={24} height={24} />
              <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Virtual Consultation Accepted</h3>
            </div>
            <button className='bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]'>Get a Free Consultation</button>
            <button className='border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]'>Pricing</button>
          </div>

          {/* Form */}
          <div className='bg-white shadow-custom rounded-[10px] py-[24px] px-2.5 w-[357px] h-[282px] mx-auto'>
            <h2 className='text-[#263238] text-[16px] leading-[19px] font-medium'>Request more information</h2>
            <form action="/submit-form" method="post" className='mt-[20px] flex flex-col gap-4'>
              <div className='flex items-start flex-col gap-1'>
                <label className='text-[#263238] text-[14px] leading-[14px] font-normal'>Name</label>
                <input type='text' className='border border-[#CDCDCD] rounded-md h-[40px] outline-none px-2 w-full' />
              </div>
              <div className='flex items-start flex-col gap-1'>
                <label className='text-[#263238] text-[14px] leading-[14px] font-normal'>Email</label>
                <input type='text' className='border border-[#CDCDCD] rounded-md h-[40px] outline-none px-2 w-full' />
              </div>
              <div className='flex items-start flex-col gap-1'>
                <label className='text-[#263238] text-[14px] leading-[14px] font-normal'>Phone</label>
                <input type='text' className='border border-[#CDCDCD] rounded-md h-[40px] outline-none px-2 w-full' />
              </div>
            </form>
          </div>

          <div className='shadow-custom bg-white w-[358px] h-[57px] rounded-[10px] mx-auto flex items-center justify-center mt-[24px] mb-[17px]'>
            <h2 className='text-[16px] text-[#767676] leading-[22.4px] font-bold lato-font underline underline-offset-4'>¿Gestionas este Centro?</h2>
          </div>
        </div>
      </div>

      <div className='border-y border-[#D0D0D0] pt-2 2xl:pl-[109px] lg:pl-[40px] pl-2 w-full'>
        <ul className='flex items-center gap-[40px] overflow-scroll'>
          <li className='text-[#2C64D8] border-b-2 border-[#2C64D8] pb-1 text-[16px] leading-[24px] font-semibold'>Photos</li>
          <li className='text-[#6A6A6A] text-[16px] leading-[24px] font-normal'>Overview</li>
          <li className='text-[#6A6A6A] text-[16px] leading-[24px] font-normal'>Location</li>
          <li className='text-[#6A6A6A] text-[16px] leading-[24px] font-normal'>Ratings</li>
          <li className='text-[#6A6A6A] text-[16px] leading-[24px] font-normal'>Facilities</li>
        </ul>
      </div>

      <div className='mt-14 2xl:ml-[110px] pl-2 lg:ml-[40px]'>

        <div className='mt-7 max-w-[845px]'>
          <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold mb-5'>Dentist Overview</h2>
          <p className='text-[#263238] text-[16px] leading-[19px] font-normal'>
            He is a highly skilled and experienced dentist, dedicated to providing top-quality dental care. With over 15 years of experience in the field, Dr. Martínez specializes in preventive, restorative, and cosmetic dentistry. His patient-centric approach ensures that each individual receives personalized care tailored to their specific needs.
          </p>
          {showMore && (
            <p className='text-[#263238] text-[16px] leading-[19px] font-normal mt-2.5'>
              Centro de Salud El Sol es un hospital líder en atención médica, comprometido con ofrecer servicios de salud de alta calidad a la comunidad. Ubicado en el corazón de Ciudad del Sol, nuestro centro se dedica a proporcionar atención médica integral y personalizada en un entorno acogedor y moderno.
            </p>
          )}
          <button className='text-[#2C64D8] text-[16px] leading-[19px] font-normal py-4 flex items-center gap-1'
            onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show More'}
            {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>

        <div className='flex items-start gap-1.5'>
          <Image src='/assets/language1.svg' alt='Image' width={20} height={20} />
          <div className='flex flex-col'>
            <h3 className='text-[#000000] text-[13.5px] leading-[20px] font-bold inter-font'>Languages</h3>
            <p className='text-[#000000] text-[12.6px] leading-[20px] font-normal inter-font'>Spanish, French, English</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero