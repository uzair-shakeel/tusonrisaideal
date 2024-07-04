import React from "react";
import RegisterNowBanner from "../components/RegisterNowBanner";
import FAQ from "../components/FAQ";
import { MdOutlineSearch } from "react-icons/md";
import RelatedArticles from "../components/RelatedArticles";
import { BiSearch } from "react-icons/bi";

const page = () => {
  return (
    <div>
      <div className="px-5 md:px-[44px] py-[52px] bg-[#FCFAEE] flex">
        <div className="w-full">
          <h3 className="hidden md:block text-[28px] font-[500]">
            Book from 100’s of the best Dentists near you
          </h3>
          <p className="hidden md:block text-[16px] my-2">
            Need to make a dentist appointment this week? Use TSI to find
            dentists near you who take your insurance. It’s simple, secure and
            free.
          </p>


          {/* Desktop */}
          <div className='md:flex hidden justify-between items-center gap-5 w-full bg-white border border-[#DDDDDD] shadow-custom h-[66px] rounded-[33px] mt-[36px] px-[33px]'>
            <div className='flex flex-col max-w-[240px] w-full'>
              <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Condition</label>
              <input type='text' placeholder='Eg., Headache' className='text-[14px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none' />
            </div>
            <div className='flex flex-col max-w-[240px] w-full'>
              <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Insurance</label>
              <input type='text' placeholder='Select yours' className='text-[14px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none' />
            </div>
            <div className='flex flex-col max-w-[240px] w-full border-l border-[#BABABA] pl-2.5'>
              <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Location</label>
              <input type='text' placeholder='eg., New Building' className='text-[14px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none' />
            </div>
            <div>
              <button className='bg-[#FFF04B] min-w-[48px] min-h-[48px] rounded-[24px] flex items-center justify-center'><BiSearch className='min-w-[20px] min-h-[20px] text-[#5B5252]' /></button>
            </div>
          </div>
          
          {/* Mobile */}
          <div className="bg-white border border-[#DDDDDD] justify-between shadow-custom max-w-[392px] h-[66px] rounded-[32px] flex items-center px-5">
            <div className='flex flex-col w-full'>
              <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Condition</label>
              <input type='text' placeholder='Eg., Headache' className='text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none max-w-[70px]' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Insurance</label>
              <input type='text' placeholder='Select yours' className='text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none  max-w-[70px]' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-[#222222] text-[12px] leading-[16px] font-semibold'>Location</label>
              <input type='text' placeholder='eg., New Building' className='text-[12px] leading-[18px] font-normal text-[#6A6A6A] outline-none max-w-[70px]' />
            </div>
            <button className='bg-[#FFF04B] min-w-[40px] min-h-[40px] rounded-[24px] flex items-center justify-center'><BiSearch className='min-w-[20px] min-h-[20px] text-[#5B5252]' /></button>
          </div>



        </div>
        <div className="hidden w-[25%] h-full md:flex items-center justify-center ">
          <img src="/assets/TeethLogo2024.svg" className=" w-auto h-auto" />
        </div>
      </div>

      <div className="px-2 md:px-5">
        <h4 className="text-[14px] my-4">Filter By</h4>

        <div className="overflow-x-scroll md:overflow-hidden flex justify-between">
          <div className="flex gap-4">
            <select
              placeholder="Consulta Online"
              className="px-4 py-2 border border-black outline-none rounded-lg"
            >
              <option>Consulta Online</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
            </select>
            <select
              placeholder="Aseguradora"
              className="px-4 py-2 border border-black outline-none rounded-lg"
            >
              <option>Aseguradora</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
            </select>
            <select
              placeholder="Fechas Disponibles"
              className="px-4 py-2 border border-black outline-none rounded-lg"
            >
              <option>Fechas Disponibles</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
            </select>
            <select
              placeholder="Mas Filtros"
              className="px-4 py-2 border border-black outline-none rounded-lg"
            >
              <option>Mas Filtros</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
              <option>hii</option>
            </select>
          </div>
          <select
            placeholder="All"
            className="px-20 py-2 border border-black outline-none rounded-lg"
          >
            <option>All</option>
            <option>hii</option>
            <option>hii</option>
            <option>hii</option>
            <option>hii</option>
          </select>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <img src="/assets/BlueCheck.svg" />
          <h3 className="text-[22px] font-[600]">52 Dentists Verified</h3>
        </div>
        <p className="text-[16px] my-3">
          TSI Verifies all providers before they can appear to serve you, You
          are in right hands be assured!
        </p>
        <h3 className="font-[700] text-[26px] my-4">All Providers</h3>

        <div className="p-2 md:px-[44px] my-12 md:py-[52px] flex flex-col md:flex-row items-center gap-[30px] justify-center shadow-xl border border-[#D0D0D0] rounded-[20px]">
          <div className="relative">
            <img
              src="/assets/Doctor1.png"
              className="rounded-full h-[125px] w-[125px]"
            />
            <img
              src="/assets/Bronze (2).svg"
              className="absolute bottom-0 -right-4 rounded-full h-[55px] w-[55px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h5 className="text-[22px] font-[500]">Dr. Carlos Fernández</h5>
            <div className="flex gap-7">
              <p className="text-[16px]">Dentista</p>
              <p className="text-[16px] border-l pl-3 border-[#CDCDCD]">
                25 years of experience
              </p>
            </div>
            <p className="text-[16px]">111 NE 32nd St, Spain, FL</p>
            <p className="text-[16px]">Works at : Centro de Salud El Sol</p>
          </div>

          <div className="bg-[#F1F1F1] md:max-w-[40%] rounded-[20px] flex items-center gap-[25px] px-[17px] py-[14px] ">
            <div className="w-[20%]">
              <p className="text-[34px] font-[500]">5.00</p>
              <img src="/assets/5 stars.svg" />
              <p className="text-[16px] text-[#6B777D]">(52 reviews)</p>
            </div>

            <div>
              <p className="text-[#6B777D] text-[14px]">
                Very friendly , polite and professional staff ; nice and clean
                facility ; the only downside is that , I{" "}
              </p>
              <p className="text-[#2C64D8] text-[16px]">Read More</p>
            </div>
          </div>

          <div className="flex flex-col">
            <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]">
              Book Appointment
            </button>
            <button className="border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]">
              View Profile
            </button>
          </div>
        </div>

        <div className="p-2 md:px-[44px] my-12 md:py-[52px] flex flex-col md:flex-row items-center gap-[30px] justify-center shadow-xl border border-[#D0D0D0] rounded-[20px]">
          <div className="relative h-[125px] w-[125px] ">
            <img
              src="/assets/Doctor2.png"
              className="rounded-full h-full w-full object-cover"
            />
            <img
              src="/assets/Diamond.svg"
              className="absolute bottom-0 -right-4 rounded-full h-[55px] w-[55px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h5 className="text-[22px] font-[500]">Dr. Alejandro López</h5>
            <div className="flex gap-7">
              <p className="text-[16px]">Dentista</p>
              <p className="text-[16px] border-l pl-3 border-[#CDCDCD]">
                25 years of experience
              </p>
            </div>
            <p className="text-[16px]">111 NE 32nd St, Spain, FL</p>
            <p className="text-[16px]">Works at : Centro de Salud El Sol</p>
          </div>

          <div className="bg-[#F1F1F1] md:max-w-[40%] rounded-[20px] flex items-center gap-[25px] px-[17px] py-[14px] ">
            <div className="w-[20%]">
              <p className="text-[34px] font-[500]">5.00</p>
              <img src="/assets/5 stars.svg" />
              <p className="text-[16px] text-[#6B777D]">(52 reviews)</p>
            </div>

            <div>
              <p className="text-[#6B777D] text-[14px]">
                Very friendly , polite and professional staff ; nice and clean
                facility ; the only downside is that , I{" "}
              </p>
              <p className="text-[#2C64D8] text-[16px]">Read More</p>
            </div>
          </div>

          <div className="flex flex-col">
            <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]">
              Book Appointment
            </button>
            <button className="border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]">
              View Profile
            </button>
          </div>
        </div>

        <div className="p-2 md:px-[44px] my-12 md:py-[52px] flex flex-col md:flex-row items-center gap-[30px] justify-center shadow-xl border border-[#D0D0D0] rounded-[20px]">
          <div className="relative h-[125px] w-[125px] ">
            <img
              src="/assets/Doctor3.png"
              className="rounded-full h-full w-full object-cover"
            />
            <img
              src="/assets/Gold.svg"
              className="absolute bottom-0 -right-4 rounded-full h-[55px] w-[55px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h5 className="text-[22px] font-[500]">Dr. Ana Sánchez</h5>
            <div className="flex gap-7">
              <p className="text-[16px]">Dentista</p>
              <p className="text-[16px] border-l pl-3 border-[#CDCDCD]">
                25 years of experience
              </p>
            </div>
            <p className="text-[16px]">111 NE 32nd St, Spain, FL</p>
            <p className="text-[16px]">Works at : Centro de Salud El Sol</p>
          </div>

          <div className="bg-[#F1F1F1] md:max-w-[40%] rounded-[20px] flex items-center gap-[25px] px-[17px] py-[14px] ">
            <div className="w-[20%]">
              <p className="text-[34px] font-[500]">5.00</p>
              <img src="/assets/5 stars.svg" />
              <p className="text-[16px] text-[#6B777D]">(52 reviews)</p>
            </div>

            <div>
              <p className="text-[#6B777D] text-[14px]">
                Very friendly , polite and professional staff ; nice and clean
                facility ; the only downside is that , I{" "}
              </p>
              <p className="text-[#2C64D8] text-[16px]">Read More</p>
            </div>
          </div>

          <div className="flex flex-col">
            <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]">
              Book Appointment
            </button>
            <button className="border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]">
              View Profile
            </button>
          </div>
        </div>

        <div className="p-2 md:px-[44px] my-12 md:py-[52px] flex flex-col md:flex-row items-center gap-[30px] justify-center shadow-xl border border-[#D0D0D0] rounded-[20px]">
          <div className="relative h-[125px] w-[125px]">
            <img
              src="/assets/Doctor4.png"
              className="rounded-full h-full w-full object-cover"
            />
            <img
              src="/assets/Platinum.svg"
              className="absolute bottom-0 -right-4 rounded-full h-[55px] w-[55px]"
            />
          </div>
          <div className="space-y-[10px]">
            <h5 className="text-[22px] font-[500]">Dr. Laura Martínez</h5>
            <div className="flex gap-7">
              <p className="text-[16px]">Dentista</p>
              <p className="text-[16px] border-l pl-3 border-[#CDCDCD]">
                25 years of experience
              </p>
            </div>
            <p className="text-[16px]">111 NE 32nd St, Spain, FL</p>
            <p className="text-[16px]">Works at : Centro de Salud El Sol</p>
          </div>

          <div className="bg-[#F1F1F1] md:max-w-[40%] rounded-[20px] flex items-center gap-[25px] px-[17px] py-[14px] ">
            <div className="w-[20%]">
              <p className="text-[34px] font-[500]">5.00</p>
              <img src="/assets/5 stars.svg" />
              <p className="text-[16px] text-[#6B777D]">(52 reviews)</p>
            </div>

            <div>
              <p className="text-[#6B777D] text-[14px]">
                Very friendly , polite and professional staff ; nice and clean
                facility ; the only downside is that , I{" "}
              </p>
              <p className="text-[#2C64D8] text-[16px]">Read More</p>
            </div>
          </div>

          <div className="flex flex-col">
            <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]">
              Book Appointment
            </button>
            <button className="border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]">
              View Profile
            </button>
          </div>
        </div>

        <div className="p-2 md:px-[44px] my-12 md:py-[52px] border border-[#D0D0D0] shadow-xl  rounded-[20px]">
          <div className=" flex flex-col md:flex-row items-center gap-[30px] justify-center border-b pb-5 border-[#D0D0D0]">
            <div className="relative h-[125px] w-[125px]">
              <img
                src="/assets/Doctor5.png"
                className="rounded-full h-full w-full object-cover border border-[#CFCFCF]"
              />
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-[22px] font-[500]">Stroll Health Clinic</h5>
              <div className="flex gap-7">
                <p className="text-[16px]">Opens : 09:00 - 22:00 </p>
                <p className="text-[16px] border-l pl-3 border-[#CDCDCD]">
                  8 Dentists
                </p>
              </div>
              <p className="text-[16px]">111 NE 32nd St, Spain, FL</p>
              {/* <p className="text-[16px]">Works at : Centro de Salud El Sol</p> */}
            </div>

            <div className="bg-[#F1F1F1] md:max-w-[40%] rounded-[20px] flex items-center gap-[25px] px-[17px] py-[14px] ">
              <div className="w-[20%]">
                <p className="text-[34px] font-[500]">5.00</p>
                <img src="/assets/5 stars.svg" />
                <p className="text-[16px] text-[#6B777D]">(52 reviews)</p>
              </div>

              <div>
                <p className="text-[#6B777D] text-[14px]">
                  Very friendly , polite and professional staff ; nice and clean
                  facility ; the only downside is that , I{" "}
                </p>
                <p className="text-[#2C64D8] text-[16px]">Read More</p>
              </div>
            </div>

            <div className="flex flex-col">
              <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[18px]">
                Book Appointment
              </button>
              <button className="border border-[#000000] rounded-[10px] h-[41px] w-[231px] text-[14px] leading-[14.45px] font-bold mt-[10px]">
                View Profile
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[22px] font-[600]">Associated dentist</h4>
            <div className="flex gap-5">
              <div className="rounded-[10px] p-9 shadow-xl block my-5">
                <img
                  src="/assets/Doctor1.png"
                  className="h-[82px] w-[82px] rounded-full"
                />
                <h3 className="text-[20px]">Dr. Alejandro López</h3>
                <p className="text-[16px] text-[#263238]">Dentista</p>

                <div className="flex items-center gap-3">
                  <img src="/assets/5 stars.svg" />
                  <p className="text-[18px] font-[700]">5.00</p>
                </div>
              </div>
              <div className="rounded-[10px] p-9 shadow-xl block my-5">
                <img
                  src="/assets/Doctor1.png"
                  className="h-[82px] w-[82px] rounded-full"
                />
                <h3 className="text-[20px]">Dr. Alejandro López</h3>
                <p className="text-[16px] text-[#263238]">Dentista</p>

                <div className="flex items-center gap-3">
                  <img src="/assets/5 stars.svg" />
                  <p className="text-[18px] font-[700]">5.00</p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-[#2C64D8]">
              Ver todos los Dentistas
            </p>
          </div>
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
