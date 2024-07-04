import React from 'react'
import HeroHomePage from './HeroHomePage'
import RecentPatientOpinions from './RecentPatientOpinions'
import PopularSpecialties from './PopularSpecialties'
import RegisterNowBanner from '../components/RegisterNowBanner'
import RegisterHere from './RegisterHere'
import ReadTopArticles from './ReadTopArticles'
import TSIHealthPartners from './TSIHealthPartners'
import FindDoctors from './FindDoctors'
import { RiArrowRightSLine } from "react-icons/ri";


const HomePage = () => {
    return (
        <div>
            <HeroHomePage />
            <RecentPatientOpinions />
            <PopularSpecialties/>
            <RegisterHere />
            <ReadTopArticles />
            <TSIHealthPartners />
            <FindDoctors />
            <div className='bg-[#D0D3D4] w-full py-[10px] px-4'>
                <div className='max-w-[1360px] mx-auto w-full'>
                    <h1 className='text-[#263238] text-[13px] sm:text-[16px] leading-[19px] font-normal flex items-center gap-1'>Inicio  <RiArrowRightSLine /> Dentista  <RiArrowRightSLine /> Madrid  <RiArrowRightSLine /> Dr Carlos Fernandez</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage