'use client'
import Image from 'next/image'
import React from 'react'

const BookingInformation = () => {

  const bookinginformation = [
    { imge: '/assets/online-booking.svg', name: 'Online Booking', price: '€1,500' },
    {imge: '/assets/walk-ins.svg', name: 'Walk-Ins', price: '€1,300' },
    {imge: '/assets/emergency-appointments.svg', name: 'Emergency Appointments', price: '€1,500' },
    {imge: '/assets/cancellation-and-rescheduling.svg', name: 'Cancellation and Rescheduling', price: '€800' },
    {imge: '/assets/cash-payment-options.svg', name: 'Cash & Online Payment Options', price: '€300' },
      ];


  return (
    <div className='max-w-[1380px] mx-auto w-full mt-[20px] px-4'>
        <div className='max-w-[927px] flex flex-col gap-[30px] bg-[#FFFFFF] border border-[#D0D0D0] p-5 rounded-[10px]'>
            <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Booking Information</h2>
            <div className='flex flex-col gap-4'>
                {bookinginformation.map((service, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <Image src={service.imge} alt='Logo' width={20} height={20} className='-mt-0.5' />
                        <h3 className='text-[#263238] text-[14px] leading-[19px] font-normal'>{service.name} - <span className='font-bold'>{service.price}</span></h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BookingInformation