'use client'
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='bg-[#333333] w-full '>
      <div className='max-w-[1440px] w-full mx-auto flex md:flex-row flex-col gap-6 items-center justify-between px-2 md:px-5 py-6'>
        <p className='text-sm text-white font-medium'>Este sitio utiliza servicios que emplean cookies para ofrecer una mejor experiencia y analizar el tráfico. Puede obtener más información sobre los servicios que utilizamos en nuestra política de cookies.</p>
        <div className='flex items-center gap-5'>
          <button  className='bg-[#FEF14B] text-[#333333] text-[13.5px] leading-[20px] font-bold w-[90px] h-[42px] rounded' onClick={handleClose}>Aceptar</button>
          <button onClick={handleClose}> <RxCross2 className='text-white font-extrabold text-xl' /> </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
