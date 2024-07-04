import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import RegisterNowBanner from '../components/RegisterNowBanner';
import FindDoctor from './FindDoctor';
import FAQ from '../components/FAQ';
import ClinicRatings from '../components/ClinicRatings';
import BookingInformation from './BookingInformation';
import Insurance from './Insurance';
import AssociatedClinics from './AssociatedClinics';
import ServicesDentalClinic from '../components/ServicesDentalClinic';
import Expertise from './Expertise';
import Qualifications from './Qualifications';
import Hero from './Hero';

const Dentist = () => {
  return (
    <div>
        <Hero/>/
        <Qualifications/>
        <Expertise/>
        <ServicesDentalClinic/>
        <AssociatedClinics/>
        <Insurance/>
        <BookingInformation/>
        <ClinicRatings/>
        <FAQ/>
        <FindDoctor/>
        <RegisterNowBanner/>
         <div className='bg-[#D0D3D4] w-full py-[10px] px-4'>
            <div className='max-w-[1360px] mx-auto w-full'>
                <h1 className='text-[#263238] text-[13px] sm:text-[16px] leading-[19px] font-normal flex items-center gap-1'>Inicio  <RiArrowRightSLine /> Dentista  <RiArrowRightSLine /> Madrid  <RiArrowRightSLine /> Dr Carlos Fernandez</h1>
            </div>
        </div>
    </div>
  )
}

export default Dentist