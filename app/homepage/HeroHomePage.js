import Image from 'next/image'
import React from 'react'
import { BiSearch } from "react-icons/bi";


const HeroHomePage = () => {
  return (
    <div className='bg-[#FCFAEE] w-full py-[45px] px-3'>
        <div>
            <div className='md:flex items-center justify-between max-w-[1200px] mx-auto'>
                <div>
                    <h1 className='inter-font  text-[#333333] text-[30px] leading-[32px] md:text-[59px] md:leading-[61px] font-bold pb-[24px]'>Encuentra a tu Dentista ideal en un Clic</h1>
                    <p className='text-[#717373] text-[15px] leading-[17.78px] font-normal max-w-[548px]'>Compara Opciones. Ahorra tiempo. Conoce Precios de Dentistas Verificados. Todo 100% Gratis.</p>

                    <div className='hidden md:flex items-center gap-5 max-w-[633px] bg-white border border-[#DDDDDD] shadow-custom h-[66px] rounded-[33px] mt-[36px] py-[15px] px-[33px]'>
                        <div className='flex flex-col w-[240px]'>
                            <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Condition</label>
                            <input type='text' placeholder='Eg., Orthodontics' className='text-[14px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none' />
                        </div>
                        <div className='flex flex-col w-[240px] border-l border-[#BABABA] pl-2.5'>
                            <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Location</label>
                            <input type='text' placeholder='eg.,' className='text-[14px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none' />
                        </div>
                        <button className='bg-[#FFF04B] min-w-[48px] min-h-[48px] rounded-[24px] flex items-center justify-center'><BiSearch className='min-w-[20px] min-h-[20px] text-[#5B5252]' /></button>
                    </div>
                    {/* Mobile design */}
                    <div className='md:hidden flex mt-[33px] flex-col justify-center items-center gap-2.5 px-3'>
                        <div className='border border-[#DDDDDD] flex flex-col gap-0.5 min-w-[330px] sm:min-w-[394px] bg-white shadow-custom rounded-[10px] p-2.5'>
                            <label className='text-[#222222] text-[14px] leading-[16px] font-semibold'>Condition</label>
                            <input type='text' placeholder='Eg., Headache' className='bg-transparent outline-none placeholder:text-[#6A6A6A] text-[#6A6A6A] text-[12px] leading-[14px]' />
                        </div>
                        <div className='border border-[#DDDDDD] flex flex-col gap-0.5 min-w-[330px] sm:min-w-[394px] bg-white shadow-custom rounded-[10px] p-2.5'>
                            <label className='text-[#222222] text-[14px] leading-[16px] font-semibold'>Insurance</label>
                            <input type='text' placeholder='Select yours' className='bg-transparent outline-none placeholder:text-[#6A6A6A] text-[#6A6A6A] text-[12px] leading-[14px]' />
                        </div>
                        <div className='border border-[#DDDDDD] flex flex-col gap-0.5 min-w-[330px] sm:min-w-[394px] bg-white shadow-custom rounded-[10px] p-2.5'>
                            <label className='text-[#222222] text-[14px] leading-[16px] font-semibold'>Location</label>
                            <input type='text' placeholder='eg., New Building' className='bg-transparent outline-none placeholder:text-[#6A6A6A] text-[#6A6A6A] text-[12px] leading-[14px]' />
                        </div>
                        <button className='bg-[#FFF04B] min-w-[300px] sm:min-w-[335px] mx-auto min-h-[41px] rounded-[10px] text-[#263238] text-[14px] font-bold leading-[14.45px]'>Search</button>
                    </div>

                    <div className="bg-white flex items-center justify-center w-[309px] h-[46px] rounded-lg mt-[44px]">
                        <h2 className='text-[#000000] text-[18px] leading-[20px] font-semibold mr-1.5'>Excelente</h2>
                        <Image src='/assets/custom-star.svg' alt='Star' width={26} height={26} />
                        <Image src='/assets/custom-star.svg' alt='Star' width={26} height={26} />
                        <Image src='/assets/custom-star.svg' alt='Star' width={26} height={26} />
                        <Image src='/assets/custom-star.svg' alt='Star' width={26} height={26} />
                        <Image src='/assets/custom-star.svg' alt='Star' width={26} height={26} />
                        <h4 className='text-[16px] font-medium mt-1'>Trustpilot</h4>
                    </div>
                </div>
                <div className='lg:block hidden'>
                    <Image src='/assets/hero-image.svg' alt='Image' width={510} height={510} className='min-h-[515px] bg-contain' />
                </div>
            </div>
            <div className='flex items-center gap-[45px] max-w-[1295px] mx-auto overflow-scroll mt-10 lg:mt-0'>
                <div className='text-white shadow-custom flex items-start justify-center flex-col px-5 bg-[#333333] min-w-[290px] rounded-[17px]'>
                    <div className='flex items-center gap-1 mt-[16px] mb-[10px]'>
                        <Image src='/assets/frame1.svg' alt='Image' width={26} height={26} />
                        <h2 className='text-[20px] leading-[19px] font-semibold'>Calidad Asegurada</h2>
                    </div>
                    <p className='mb-[24px] text-[14px] leading-[19px] font-normal'>Seleccionamos y Verificamos a los mejores dentistas para ti</p>
                </div>
                <div className='shadow-custom flex items-start justify-center flex-col px-5 bg-white min-w-[290px] rounded-[17px]'>
                    <div className='flex items-center gap-1 mt-[16px] mb-[10px]'>
                        <Image src='/assets/frame2.svg' alt='Image' width={26} height={26} />
                        <h2 className='text-[20px] leading-[19px] font-semibold'>Disponibilidad y Precios</h2>
                    </div>
                    <p className='mb-[24px] text-[14px] leading-[19px] font-normal'>Somos los Únicos 100% Especializados en el Sector Dental</p>
                </div>
                <div className='shadow-custom flex items-start justify-center flex-col px-5 bg-white min-w-[290px] rounded-[17px]'>
                    <div className='flex items-center gap-1 mt-[16px] mb-[10px]'>
                        <Image src='/assets/frame3.svg' alt='Image' width={26} height={26} />
                        <h2 className='text-[20px] leading-[19px] font-semibold'>Calidad Asegurada</h2>
                    </div>
                    <p className='mb-[24px] text-[14px] leading-[19px] font-normal'>Pide Cita de Forma Fácil y Rápida y Totalmente Gratuita</p>
                </div>
                <div className='shadow-custom flex items-start justify-center flex-col px-5 bg-white min-w-[290px] rounded-[17px]'>
                    <div className='flex items-center gap-1 mt-[16px] mb-[10px]'>
                        <Image src='/assets/frame4.svg' alt='Image' width={26} height={26} />
                        <h2 className='text-[20px] leading-[19px] font-semibold'>Todos los Dentistas</h2>
                    </div>
                    <p className='mb-[24px] text-[14px] leading-[19px] font-normal'>Lee y Compara entre Cientos de Perfiles Verificados de Dentistas</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroHomePage