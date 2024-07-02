import React from "react";
import RegisterNowBanner from "../components/RegisterNowBanner";
import FAQ from "../components/FAQ";
import { MdOutlineSearch } from "react-icons/md";
import RelatedArticles from "../components/RelatedArticles";

const page = () => {
  return (
    <div>
      <div className="px-[44px] py-[52px] bg-[#FCFAEE] flex">
        <div className="w-[70%]">
          <h3 className="text-[28px] font-[500]">
            Book from 100’s of the best Dentists near you
          </h3>
          <p className="text-[16px] my-2">
            Need to make a dentist appointment this week? Use TSI to find
            dentists near you who take your insurance. It’s simple, secure and
            free.
          </p>
          <div className="bg-white my-9 rounded-full flex justify-between border border-[#DDDDDD] p-2 shadow-md">
            <div className="ml-6">
              <p className="font-[600] text-[14px]">Condition</p>
              <input
                type="text"
                placeholder="Eg., Headache"
                className="outline-none text-[14px]"
              />
            </div>
            <div className="pl-3 border-l border-[#DEDEDE]">
              <p className="font-[600] text-[14px]">Insurance</p>
              <input
                type="text"
                placeholder="Select yours"
                className="outline-none text-[14px]"
              />
            </div>
            <div className="pl-3 border-l border-[#DEDEDE]">
              <p className="font-[600] text-[14px]">Location</p>
              <input
                type="text"
                placeholder="eg., New Building"
                className="outline-none text-[14px]"
              />
            </div>
            <button className="bg-[#FFF04B] rounded-full p-3 text-black">
              <MdOutlineSearch className="h-[24px] w-[24px]" />
            </button>
          </div>
        </div>
        <div className="w-[25%] h-full flex items-center justify-center ">
          <img src="/assets/TeethLogo2024.svg" className=" w-auto h-auto" />
        </div>
      </div>

      <div className=" py-10">
        <div className="flex overflow-x-auto w-full no-scrollbar gap-8 pb-10">
          <div className="rounded-2xl max-w-[500px] min-w-[300px] py-6 px-12 shadow-2xl bg-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <p className="text-[130px] leading-10 text-[#2B59E0]/20 font-[900]">
                "
              </p>
              <div className="flex items-center gap-2">
                <p>5 star</p> <img src="/assets/5 stars.svg" alt="5 stars" />
              </div>
            </div>

            <p className="text-[14px]">
              TSI has revolutionized our procurement process. The ability to
              directly search through product lists and chat with manufacturers
              has saved us countless hours. Bulk ordering through the app is
              seamless and efficient.
            </p>

            <div className="pt-9 flex items-start gap-3">
              <img src="/assets/Rating-person.svg" alt="Reviewer" />
              <div>
                <p className="text-[14px] font-[700]">Riccy Hjon</p>
                <p className="text-[14px] font-[400]">Sr. Dentist</p>
              </div>
              <p className="text-[14px] font-[500] py-1 px-3 text-[#2C64D8] bg-[#2C64D8]/20 rounded-[14px]">
                Dental Implant
              </p>
            </div>
          </div>
          <div className="rounded-2xl max-w-[500px] min-w-[300px] py-6 px-12 shadow-2xl bg-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <p className="text-[130px] leading-10 text-[#2B59E0]/20 font-[900]">
                "
              </p>
              <div className="flex items-center gap-2">
                <p>5 star</p> <img src="/assets/5 stars.svg" alt="5 stars" />
              </div>
            </div>

            <p className="text-[14px]">
              TSI has revolutionized our procurement process. The ability to
              directly search through product lists and chat with manufacturers
              has saved us countless hours. Bulk ordering through the app is
              seamless and efficient.
            </p>

            <div className="pt-9 flex items-start gap-3">
              <img src="/assets/Rating-person.svg" alt="Reviewer" />
              <div>
                <p className="text-[14px] font-[700]">Riccy Hjon</p>
                <p className="text-[14px] font-[400]">Sr. Dentist</p>
              </div>
              <p className="text-[14px] font-[500] py-1 px-3 text-[#2C64D8] bg-[#2C64D8]/20 rounded-[14px]">
                Dental Implant
              </p>
            </div>
          </div>
          <div className="rounded-2xl max-w-[500px] min-w-[300px] py-6 px-12 shadow-2xl bg-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <p className="text-[130px] leading-10 text-[#2B59E0]/20 font-[900]">
                "
              </p>
              <div className="flex items-center gap-2">
                <p>5 star</p> <img src="/assets/5 stars.svg" alt="5 stars" />
              </div>
            </div>

            <p className="text-[14px]">
              TSI has revolutionized our procurement process. The ability to
              directly search through product lists and chat with manufacturers
              has saved us countless hours. Bulk ordering through the app is
              seamless and efficient.
            </p>

            <div className="pt-9 flex items-start gap-3">
              <img src="/assets/Rating-person.svg" alt="Reviewer" />
              <div>
                <p className="text-[14px] font-[700]">Riccy Hjon</p>
                <p className="text-[14px] font-[400]">Sr. Dentist</p>
              </div>
              <p className="text-[14px] font-[500] py-1 px-3 text-[#2C64D8] bg-[#2C64D8]/20 rounded-[14px]">
                Dental Implant
              </p>
            </div>
          </div>
          <div className="rounded-2xl max-w-[500px] min-w-[300px] py-6 px-12 shadow-2xl bg-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <p className="text-[130px] leading-10 text-[#2B59E0]/20 font-[900]">
                "
              </p>
              <div className="flex items-center gap-2">
                <p>5 star</p> <img src="/assets/5 stars.svg" alt="5 stars" />
              </div>
            </div>

            <p className="text-[14px]">
              TSI has revolutionized our procurement process. The ability to
              directly search through product lists and chat with manufacturers
              has saved us countless hours. Bulk ordering through the app is
              seamless and efficient.
            </p>

            <div className="pt-9 flex items-start gap-3">
              <img src="/assets/Rating-person.svg" alt="Reviewer" />
              <div>
                <p className="text-[14px] font-[700]">Riccy Hjon</p>
                <p className="text-[14px] font-[400]">Sr. Dentist</p>
              </div>
              <p className="text-[14px] font-[500] py-1 px-3 text-[#2C64D8] bg-[#2C64D8]/20 rounded-[14px]">
                Dental Implant
              </p>
            </div>
          </div>
          <div className="rounded-2xl max-w-[500px] min-w-[300px] py-6 px-12 shadow-2xl bg-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <p className="text-[130px] leading-10 text-[#2B59E0]/20 font-[900]">
                "
              </p>
              <div className="flex items-center gap-2">
                <p>5 star</p> <img src="/assets/5 stars.svg" alt="5 stars" />
              </div>
            </div>

            <p className="text-[14px]">
              TSI has revolutionized our procurement process. The ability to
              directly search through product lists and chat with manufacturers
              has saved us countless hours. Bulk ordering through the app is
              seamless and efficient.
            </p>

            <div className="pt-9 flex items-start gap-3">
              <img src="/assets/Rating-person.svg" alt="Reviewer" />
              <div>
                <p className="text-[14px] font-[700]">Riccy Hjon</p>
                <p className="text-[14px] font-[400]">Sr. Dentist</p>
              </div>
              <p className="text-[14px] font-[500] py-1 px-3 text-[#2C64D8] bg-[#2C64D8]/20 rounded-[14px]">
                Dental Implant
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedArticles />
      <FAQ />
      <RegisterNowBanner />
    </div>
  );
};

export default page;
