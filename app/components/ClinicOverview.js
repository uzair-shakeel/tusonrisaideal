'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ClinicSpecialities from './ClinicSpecialities';

const ClinicOverview = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='py-10 w-full px-4'>
        <div className='max-w-[1369px] w-full mx-auto flex justify-between gap-4'>
            <div className='max-w-[945px] w-full'>
               <div className='max-w-[845px] lg:pl-2'>
                    <div className='flex flex-wrap items-center sm:gap-7 gap-3'>
                        <h3 className='text-[#797E81] text-[16px] leading-[19px] font-normal flex items-center gap-1'>
                            <FaStar className='text-[#F64850] -mt-1' />
                            <span className='text-[#263238] font-medium'>4.8</span>
                            (33 evaluaciones)
                        </h3>
                        <h3 className='text-[#797E81] text-[16px] leading-[19px] font-normal flex items-center gap-1'>
                            <Image src='/assets/teeth.svg' alt='Logo' width={20} height={20} />
                            <span className='text-[#263238] font-medium'>?/100 Calificación TSI</span>
                        </h3>
                        <h3 className='text-[#797E81] text-[16px] leading-[19px] font-normal flex items-center gap-1'>
                            <Image src='/assets/sun.svg' alt='Logo' width={20} height={20} />
                            <span className='text-[#263238] font-medium'>Clínica Verificada</span>
                        </h3>
                    </div>

                    <h3 className='text-[#181515] text-[22px] leading-[19px] font-semibold py-4'>Clinic Overview</h3>

                    <div>
                        <p className='text-[#263238] text-[16px] leading-[19px] font-normal'>
                            Centro de Salud El Sol es un hospital líder en atención médica, comprometido con ofrecer servicios de salud de alta calidad a la comunidad. Ubicado en el corazón de Ciudad del Sol, nuestro centro se dedica a proporcionar atención médica integral y personalizada en un entorno acogedor y moderno.
                        </p>
                        {showMore && (
                            <p className='text-[#263238] text-[16px] leading-[19px] font-normal mt-2.5'>
                            Centro de Salud El Sol es un hospital líder en atención médica, comprometido con ofrecer servicios de salud de alta calidad a la comunidad. Ubicado en el corazón de Ciudad del Sol, nuestro centro se dedica a proporcionar atención médica integral y personalizada en un entorno acogedor y moderno.
                            </p>
                        )}
                        <button
                            className='text-[#2C64D8] text-[16px] leading-[19px] font-normal py-5 flex items-center gap-1'
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                            {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
               </div>

                <div className='max-w-[945px] w-full border-b border-[#D0D0D0] py-2.5'>
                    <div className='flex items-center justify-between gap-4 max-w-[820px] flex-wrap pl-2'>
                        <div className='flex items-start gap-2'>
                            <Image src='/assets/trabaja-con-aseguradoras.svg' alt='Logo' width={16} height={14.22} className='mt-0.5 min-w-[16px] min-h-[14.22px]' />
                            <div className='inter-font text-[#000000]'>
                                <h3 className='text-[13.5px] leading-[20px] font-bold'>Trabaja con aseguradoras</h3>
                                <span className='text-[12.6px] leading-[20px]'>No</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <Image src='/assets/opening-date.svg' alt='Logo' width={16} height={16} className='mt-0.5 min-w-[16px] min-h-[16px]' />
                            <div className='inter-font text-[#000000]'>
                                <h3 className='text-[13.5px] leading-[20px] font-bold'>Opening Date</h3>
                                <span className='text-[12.6px] leading-[20px]'>2010</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <Image src='/assets/gabinetes.svg' alt='Logo' width={18} height={16} className='mt-0.5 min-w-[18px] min-h-[16px]' />
                            <div className='inter-font text-[#000000]'>
                                <h3 className='text-[13.5px] leading-[20px] font-bold'>Gabinetes</h3>
                                <span className='text-[12.6px] leading-[20px]'>3</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <Image src='/assets/languages.svg' alt='Logo' width={20} height={20} className='mt-0.5 min-w-[20px] min-h-[20px]' />
                            <div className='inter-font text-[#000000]'>
                                <h3 className='text-[13.5px] leading-[20px] font-bold'>Languages</h3>
                                <span className='text-[12.6px] leading-[20px]'>Spanish, French, English</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore the area */}
                <div className='pt-[40px]'>
                    <h3 className='text-[#181515] text-[22px] leading-[19px] font-semibold mb-4'>Explore the area</h3>
                    <p className='text-[#263238] text-[16px] leading-[19px] font-normal mb-4'>Avenida Principal 123, Ciudad del Sol, Estado del Sol, 45678</p>
                    
                    {/* Map */}
                    <div className='lg:block hidden map-img bg-[#FCFAEE] w-full max-w-[1388px] mx-auto min-h-[131px] rounded-[20px] relative'>
                        <div className='absolute inset-0 bg-black opacity-[31%] rounded-[20px]'></div>
                        <div className='flex items-center justify-center min-h-[131px] relative z-10'>
                            <button className='bg-[#263238] rounded-[20px] w-[152px] h-[41px] flex items-center justify-center gap-2.5 text-white text-[14px] leading-[14.45px] font-normal'>
                                View on Map
                                <Image src='/assets/map-icon.svg' alt='Icon' width={19} height={19} />
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#FCFAEE] p-4 lg:hidden block'>
                        <div className='map-img bg-[#FCFAEE] w-full max-w-[1388px] mx-auto min-h-[141px] rounded-[20px] relative'>
                            <div className='absolute inset-0 bg-black opacity-[31%] rounded-[20px]'></div>
                            <div className='flex items-center justify-center min-h-[131px] relative z-10'>
                                <button className='bg-[#263238] rounded-[20px] w-[152px] h-[41px] flex items-center justify-center gap-2.5 text-white text-[14px] leading-[14.45px] font-normal'>
                                    View on Map
                                    <Image src='/assets/map-icon.svg' alt='Icon' width={19} height={19} />
                                </button>
                            </div>
                        </div>
                        <div className='px-4 mt-6'>
                            <h3 className='text-[#263238] text-[18px] leading-[19px] font-medium mb-3'>Open Hours</h3>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Lunes</h3>
                                    <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Martes</h3>
                                    <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Miércoles</h3>
                                    <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Jueves</h3>
                                    <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Viernes</h3>
                                    <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Sábado</h3>
                                    <h4 className='text-[#A6A6A6] text-[14px] leading-[19px] font-medium'>No Disponible</h4>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Domingo</h3>
                                    <h4 className='text-[#A6A6A6] text-[14px] leading-[19px] font-medium'>No Disponible</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Clinic Specialities Component */}
                <ClinicSpecialities/>
            </div>
            <div className='lg:flex hidden flex-col gap-5'>
                {/* Virtual Consultation Accepted */}
                <div className='shadow-custom bg-white py-5 px-14 max-w-[357px] rounded-[10px]'>
                    <div className='flex items-center gap-2.5'>
                        <Image src='/assets/video.svg' alt='Video' width={24} height={24} />
                        <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Virtual Consultation Accepted</h3>
                    </div>
                    <button className='bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]'>Get a Free Consultation</button>
                    <button className='border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]'>Pricing</button>
                </div>
                {/* Open Hours */}
                <div className='shadow-custom bg-white p-5 max-w-[357px] rounded-[10px]'>
                    <h3 className='text-[#263238] text-[18px] leading-[19px] font-medium mb-3'>Open Hours</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Lunes</h3>
                            <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                        </li>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Martes</h3>
                            <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                        </li>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Miércoles</h3>
                            <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                        </li>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Jueves</h3>
                            <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                        </li>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Viernes</h3>
                            <h4 className='text-[#333333] text-[14px] leading-[19px] font-medium'>09:00  - 22:00 </h4>
                        </li>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Sábado</h3>
                            <h4 className='text-[#A6A6A6] text-[14px] leading-[19px] font-medium'>No Disponible</h4>
                        </li>
                        <li className='flex items-center justify-between'>
                            <h3 className='text-[#4F4F4F] text-[14px] leading-[19px] font-medium'>Domingo</h3>
                            <h4 className='text-[#A6A6A6] text-[14px] leading-[19px] font-medium'>No Disponible</h4>
                        </li>
                    </ul>
                </div>
                {/* ¿Gestionas este Centro? */}
                <div className='shadow-custom bg-white py-5 px-14 max-w-[357px] rounded-[10px]'>
                    <h3 className='text-[#767676] text-[16px] leading-[22.4px] font-bold text-center underline underline-offset-4 lato-font'>¿Gestionas este Centro?</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClinicOverview