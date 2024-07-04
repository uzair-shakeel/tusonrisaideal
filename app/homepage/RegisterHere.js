import Image from 'next/image'
import React from 'react'

const RegisterHere = () => {
  return (
    <div className=''>
      <div className='bg-[#333333] shadow-custom max-w-[1262px] mx-auto w-full lg:rounded-[20px] lg:pt-[45px]'>
          <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
              <div className='text-white px-3 md:pl-[50px] lg:pl-[109px]'>
                  <h2 className='text-[28px] leading-[27px] font-bold mb-[25px] max-w-[403px]'>¿Eres Dentista? Consigue más Citas y más Pacientes</h2>
                  <ul className='pl-[25px] flex flex-col gap-1 max-w-[522px]'>
                      <li className='list-disc text-[16px] leading-[19px] font-normal'>Conecta con pacientes que buscan profesionales con tus calificaciones</li>
                      <li className='list-disc text-[16px] leading-[19px] font-normal'>Aumenta tu reputación online con reseñas verificadas de pacientes</li>
                      <li className='list-disc text-[16px] leading-[19px] font-normal'>Haz crecer tu práctica con un perfil 100% gratis</li>
                  </ul>
                  <button className='mt-[25px] w-[155px] h-[41px] bg-[#FEF14B] rounded-[20px] text-[#263238] text-[14px] leading-[14.45px] font-bold mb-[43px]'>REGISTRATE AQUI</button>
              </div>
              <Image src='/assets/Group 18464.svg' alt='Image' width={300} height={267} className='w-[565px] h-[276px]' />
          </div>
      </div>
    </div>
  )
}

export default RegisterHere