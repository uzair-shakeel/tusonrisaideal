"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import ServicesDentalClinic from "./components/ServicesDentalClinic";
import InsuranceAssociated from "./components/InsuranceAssociated";
import ClinicRatings from "./components/ClinicRatings";
import AssociatedDentist from "./components/AssociatedDentist";
import FAQ from "./components/FAQ";
import RegisterNowBanner from "./components/RegisterNowBanner";
import Footer from "./components/Footer";
import ClinicOverview from "./components/ClinicOverview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1440px]  mx-auto">
      <Hero />
      <div className="flex gap-[8%] justify-between relative">
        <div className="w-[70%]">
          <ClinicOverview />
          <ServicesDentalClinic />
          <InsuranceAssociated />
          <ClinicRatings />
          <AssociatedDentist />
          <FAQ />
          <RegisterNowBanner />
        </div>
        <div className="w-[30%] h-full my-[40px] sticky top-[20%] 2xl:right-[5%]  lg:flex hidden flex-col gap-5">
          {/* Virtual Consultation Accepted */}
          <div className="shadow-custom bg-white py-5 px-14 max-w-[357px] rounded-[10px]">
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
          {/* Open Hours */}
          <div className="shadow-custom bg-white p-5 max-w-[357px] rounded-[10px]">
            <h3 className="text-[#263238] text-[18px] leading-[19px] font-medium mb-3">
              Open Hours
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Lunes
                </h3>
                <h4 className="text-[#333333] text-[14px] leading-[19px] font-medium">
                  09:00 - 22:00{" "}
                </h4>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Martes
                </h3>
                <h4 className="text-[#333333] text-[14px] leading-[19px] font-medium">
                  09:00 - 22:00{" "}
                </h4>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Miércoles
                </h3>
                <h4 className="text-[#333333] text-[14px] leading-[19px] font-medium">
                  09:00 - 22:00{" "}
                </h4>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Jueves
                </h3>
                <h4 className="text-[#333333] text-[14px] leading-[19px] font-medium">
                  09:00 - 22:00{" "}
                </h4>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Viernes
                </h3>
                <h4 className="text-[#333333] text-[14px] leading-[19px] font-medium">
                  09:00 - 22:00{" "}
                </h4>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Sábado
                </h3>
                <h4 className="text-[#A6A6A6] text-[14px] leading-[19px] font-medium">
                  No Disponible
                </h4>
              </li>
              <li className="flex items-center justify-between">
                <h3 className="text-[#4F4F4F] text-[14px] leading-[19px] font-medium">
                  Domingo
                </h3>
                <h4 className="text-[#A6A6A6] text-[14px] leading-[19px] font-medium">
                  No Disponible
                </h4>
              </li>
            </ul>
          </div>
          {/* ¿Gestionas este Centro? */}
          <div className="shadow-custom bg-white py-5 px-14 max-w-[357px] rounded-[10px]">
            <h3 className="text-[#767676] text-[16px] leading-[22.4px] font-bold text-center underline underline-offset-4 lato-font">
              ¿Gestionas este Centro?
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
