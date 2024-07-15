import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import RegisterNowBanner from "../components/RegisterNowBanner";
import FindDoctor from "./FindDoctor";
import FAQ from "../components/FAQ";
import ClinicRatings from "../components/ClinicRatings";
import BookingInformation from "./BookingInformation";
import Insurance from "./Insurance";
import AssociatedClinics from "./AssociatedClinics";
import ServicesDentalClinic from "../components/ServicesDentalClinic";
import Expertise from "./Expertise";
import Qualifications from "./Qualifications";
import Hero from "./Hero";
import Image from "next/image";

const Dentist = () => {
  return (
    <div className="relative">
      <div className=" absolute top-10 right-10">
      <div className="xl:flex flex-col hidden sticky top-10 h-full px-4 max-w-[382px] z-30 right-0 bg-[#FFFFFF] rounded-[11px] shadow-custom">
        <div className="py-5 w-[231px] mx-auto rounded-[10px]">
          <div className="flex items-center gap-2.5">
            <Image
              src="/assets/video.svg"
              alt="Video"
              width={24}
              height={24}
            />
            <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
              Virtual Consultation Accepted
            </h3>
          </div>
          <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]">
            Get a Free Consultation
          </button>
          <button className="border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]">
            Pricing
          </button>
        </div>

        <div className="bg-white shadow-custom rounded-[10px] py-[24px] px-2.5 w-[357px] h-[282px] mx-auto">
          <h2 className="text-[#263238] text-[16px] leading-[19px] font-medium">
            Request more information
          </h2>
          <form
            action="/submit-form"
            method="post"
            className="mt-[20px] flex flex-col gap-4"
          >
            <div className="flex items-start flex-col gap-1">
              <label className="text-[#263238] text-[14px] leading-[14px] font-normal">
                Name
              </label>
              <input
                type="text"
                className="border border-[#CDCDCD] rounded-md h-[40px] outline-none px-2 w-full"
              />
            </div>
            <div className="flex items-start flex-col gap-1">
              <label className="text-[#263238] text-[14px] leading-[14px] font-normal">
                Email
              </label>
              <input
                type="text"
                className="border border-[#CDCDCD] rounded-md h-[40px] outline-none px-2 w-full"
              />
            </div>
            <div className="flex items-start flex-col gap-1">
              <label className="text-[#263238] text-[14px] leading-[14px] font-normal">
                Phone
              </label>
              <input
                type="text"
                className="border border-[#CDCDCD] rounded-md h-[40px] outline-none px-2 w-full"
              />
            </div>
          </form>
        </div>

        <div className="shadow-custom bg-white w-[358px] h-[57px] rounded-[10px] mx-auto flex items-center justify-center mt-[24px] mb-[17px]">
          <h2 className="text-[16px] text-[#767676] leading-[22.4px] font-bold lato-font underline underline-offset-4">
            ¿Gestionas este Centro?
          </h2>
        </div>
      </div>
      </div>
      <Hero />
      <Qualifications />
      <Expertise />
      <ServicesDentalClinic />
      <AssociatedClinics />
      <Insurance />
      <BookingInformation />
      <ClinicRatings />
      <FAQ />
      <FindDoctor />
      <RegisterNowBanner />
      <div className="bg-[#D0D3D4] w-full py-[10px] px-4">
        <div className="max-w-[1360px] mx-auto w-full">
          <h1 className="text-[#263238] text-[13px] sm:text-[16px] leading-[19px] font-normal flex items-center gap-1">
            Inicio <RiArrowRightSLine /> Dentista <RiArrowRightSLine /> Madrid{" "}
            <RiArrowRightSLine /> Dr Carlos Fernandez
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dentist;
