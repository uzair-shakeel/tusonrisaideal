import Image from 'next/image'
import React from 'react'

const AssociatedClinics = () => {
  return (
    <div className='bg-[#FCFAEE] 2xl:pl-[110px] pl-2 lg:pl-[40px] mt-[40px] py-[44px]'>
        <div>
            <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold pb-3'>Associated Clinics</h2>
            <p className='text-[#263238] text-[16px] leading-[19px] font-normal'>Doctor is associated with these clinis</p>
            <div className='mt-[25px] flex flex-col gap-4'>
                {/* 1 */}
                <div className='md:bg-white rounded-[16.66px] max-w-[749px] p-5 flex md:flex-row flex-col items-center justify-between gap-5'>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <h2 className='text-[#2B59E0] sm:text-[#263238] text-[14px] sm:text-[15px] leading-[15.83px] font-semibold'>Clinica Dental Dr. Ferrer</h2>
                            <div className='flex items-center gap-2'>
                                <Image src='/assets/red-star.svg' alt='Star' width={13} height={13} />
                                <h2 className='text-[#263238] font-medium'>4.8 <span className='text-[#797E81] text-[14px] sm:text-[16px] leading-[19px]'>(33 evaluaciones)</span></h2>
                            </div>
                        </div>
                        <p className='text-[#263238] text-[11.66px] leading-[15.83px] font-normal pb-[9px] pt-[8px]'>Calle de Velázquez, 30, 28001 Madrid, Spain</p>
                        <div className='block map-img1 bg-[#FCFAEE] max-w-[340px] sm:w-[424px] mx-auto min-h-[140px] rounded-[20px] relative'>
                            <div className='absolute inset-0 bg-black opacity-[31%] rounded-[20px]'></div>
                            <div className='flex items-center justify-center min-h-[131px] relative z-10'>
                                <button className='bg-[#263238] rounded-[20px] w-[152px] h-[41px] flex items-center justify-center gap-2.5 text-white text-[14px] leading-[14.45px] font-normal'>
                                    View on Map
                                    <Image src='/assets/map-icon.svg' alt='Icon' width={19} height={19} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='min-w-[259px] flex flex-col gap-[10px]'>
                        <h3 className='text-[#263238] text-[15px] leading-[15.83px] font-medium'>Open Hours</h3>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Lunes</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Martes</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Miércoles</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Jueves</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Viernes</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Sábado</h3>
                            <h3 className='text-[#A6A6A6] text-[11.66px] leading-[15.83px] font-medium'>No Disponible</h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Domingo</h3>
                            <h3 className='text-[#A6A6A6] text-[11.66px] leading-[15.83px] font-medium'>No Disponible</h3>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='md:bg-white rounded-[16.66px] max-w-[749px] p-5 flex md:flex-row flex-col items-center justify-between gap-5'>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <h2 className='text-[#2B59E0] sm:text-[#263238]  text-[14px] sm:text-[15px] leading-[15.83px] font-semibold'>Clinica Dental Blanc</h2>
                            <div className='flex items-center gap-2'>
                                <Image src='/assets/red-star.svg' alt='Star' width={13} height={13} />
                                <h2 className='text-[#263238] font-medium'>4.8 <span className='text-[#797E81] text-[14px] sm:text-[16px] leading-[19px]'>(33 evaluaciones)</span></h2>
                            </div>
                        </div>
                        <p className='text-[#263238] text-[11.66px] leading-[15.83px] font-normal pb-[9px] pt-[8px]'>Passeig de Gràcia, 12, 08007 Barcelona, Spain</p>
                        <div className='block map-img1 bg-[#FCFAEE] max-w-[340px] sm:w-[424px] mx-auto min-h-[140px] rounded-[20px] relative'>
                            <div className='absolute inset-0 bg-black opacity-[31%] rounded-[20px]'></div>
                            <div className='flex items-center justify-center min-h-[131px] relative z-10'>
                                <button className='bg-[#263238] rounded-[20px] w-[152px] h-[41px] flex items-center justify-center gap-2.5 text-white text-[14px] leading-[14.45px] font-normal'>
                                    View on Map
                                    <Image src='/assets/map-icon.svg' alt='Icon' width={19} height={19} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='min-w-[259px] flex flex-col gap-[10px]'>
                        <h3 className='text-[#263238] text-[15px] leading-[15.83px] font-medium'>Open Hours</h3>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Lunes</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Martes</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Miércoles</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Jueves</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Viernes</h3>
                            <h3 className='text-[#333333] text-[11.66px] leading-[15.83px] font-medium'>09:00  - 22:00 </h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Sábado</h3>
                            <h3 className='text-[#A6A6A6] text-[11.66px] leading-[15.83px] font-medium'>No Disponible</h3>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <h3 className='text-[#4F4F4F] text-[11.66px] leading-[15.83px] font-medium'>Domingo</h3>
                            <h3 className='text-[#A6A6A6] text-[11.66px] leading-[15.83px] font-medium'>No Disponible</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssociatedClinics