"use client";
import React, { useEffect, useState } from "react";
import RegisterNowBanner from "../components/RegisterNowBanner";
import FAQ from "../components/FAQ";
import { MdOutlineSearch } from "react-icons/md";
import RelatedArticles from "../components/RelatedArticles";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import FindDoctor from "../dentist/FindDoctor";
import { Select, SelectItem } from "@nextui-org/react";

const page = () => {
  // One
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Consulta Online");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Two
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Aseguradora");

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
  };

  // Three
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("Fechas Disponibles");

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  // Four
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("Mas Filtros");

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setIsOpen3(false);
  };

  // Five
  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState("All");

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleOptionClick4 = (option) => {
    setSelectedOption4(option);
    setIsOpen4(false);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const maxPages = 4;
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render pagination buttons dynamically based on current page and total pages
  const renderPaginationButtons = () => {
    const totalPages = 4; // Example: Replace with your actual logic
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`${
            currentPage === i ? "bg-[#2C64D8] " : "bg-[#A1A1A1] "
          }]  w-[30px] h-[30px] rounded-full text-[14px] text-white leading-[15px] font-normal`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const doctors = [
    {
      name: "Dr. Carlos Fernández",
      specialization: "Dentista",
      experience: "25 años de experiencia",
      address: "111 NE 32nd St, Spain, FL",
      workplace: "Centro de Salud El Sol",
      rating: 3.45,
      reviews: 52,
      reviewText:
        "Very friendly, polite and professional staff; nice and clean facility; the only downside is that, I",
      profileImg: "/assets/Doctor1.png",
      badgeImg: "/assets/Bronze (2).svg",
    },
    {
      name: "Dr. Alejandro López",
      specialization: "Dentista",
      experience: "16 años de experiencia",
      address: "111 NE 32nd St, Spain, FL",
      workplace: "Centro de Salud El Sol",
      rating: 3.45,
      reviews: 52,
      reviewText:
        "Very friendly, polite and professional staff; nice and clean facility; the only downside is that, I",
      profileImg: "/assets/Doctor2.png",
      badgeImg: "/assets/Diamond.svg",
    },
    {
      name: "Dr. Ana Sánchez",
      specialization: "Dentista",
      experience: "16 años de experiencia",
      address: "111 NE 32nd St, Spain, FL",
      workplace: "Centro de Salud El Sol",
      rating: 3.45,
      reviews: 52,
      reviewText:
        "Very friendly, polite and professional staff; nice and clean facility; the only downside is that, I",
      profileImg: "/assets/Doctor3.png",
      badgeImg: "/assets/Gold.svg",
    },
    {
      name: "Dr. Laura Martínez",
      specialization: "Dentista",
      experience: "16 años de experiencia",
      address: "111 NE 32nd St, Spain, FL",
      workplace: "Centro de Salud El Sol",
      rating: 3.45,
      reviews: 52,
      reviewText:
        "Very friendly, polite and professional staff; nice and clean facility; the only downside is that, I",
      profileImg: "/assets/Doctor4.png",
      badgeImg: "/assets/Platinum.svg",
    },
  ];

  // DoctorBox
  const DoctorCard = ({ doctor }) => (
    <div className="p-2 md:px-[55px] md:mb-10 py-[44px] flex flex-col items-center md:flex-row gap-[30px] md:justify-center md:shadow-xl border border-[#D0D0D0] md:rounded-[20px]">
      <div className="flex gap-5">
        <div className="relative md:h-[125px] md:w-[125px]">
          <img
            src={doctor.profileImg}
            className="rounded-full w-[100px] h-[100px] md:h-[124px] md:w-[124px] object-cover"
          />
          <img
            src={doctor.badgeImg}
            className="absolute bottom-0 -right-4 rounded-full md:h-[62px] md:w-[62px] h-[50px] w-[50px]"
          />
        </div>
        <div className="">
          <h5 className="text-[18px] md:text-[22px] font-500 text-[#263238] leading-[19px] pb-2">
            {doctor.name}
          </h5>
          <div className="flex items-center gap-2 md:gap-5">
            <p className="text-[14px] md:text-[16px] text-[#263238] leading-[19px] font-normal">
              {doctor.specialization}
            </p>
            <div className="flex items-center gap-1 border-l border-[#CDCDCD]">
              <Image
                src="/assets/m.svg"
                alt="image"
                width={10}
                height={10}
                className="-mt-[2px] ml-2"
              />
              <p className="text-[12px] md:text-[16px] text-[#263238] leading-[18.75px] font-normal">
                {doctor.experience}
              </p>
            </div>
          </div>
          <p className="flex items-center gap-1.5 text-[#263238] text-[13px] md:text-[16px] leading-[19px] font-normal my-3.5">
            <Image src="/assets/l.svg" alt="location" width={18} height={18} />
            {doctor.address}
          </p>
          <p className="text-[13px] md:text-[16px] text-[#263238] leading-[19px] font-normal">
            Trabaja en :{" "}
            <span className="text-[#2B59E0] underline">
              {" "}
              {doctor.workplace}
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] md:max-w-[40%] rounded-[20px] flex items-center gap-[15px] sm:gap-[25px] px-[10px] sm:px-[17px] py-[27px]">
        <div className="w-[150px] flex flex-col items-center gap-2">
          <p className="text-[25px] sm:text-[34px] font-medium text-[#263238] leading-[19px]">
            {doctor.rating.toFixed(2)}
          </p>
          <img src="/assets/4star-.svg" />
          <p className="text-[12px] sm:text-[16px] text-[#6B777D] leading-[19px]">
            ({doctor.reviews} reviews)
          </p>
        </div>
        <div>
          <p className="text-[#6B777D] text-[12px] sm:text-[14px] leading-[19px] font-normal">
            {doctor.reviewText}
          </p>
          <p className="text-[#2C64D8] leading-[19px] text-[14px] sm:text-[16px] mt-1">
            Read More
          </p>
        </div>
      </div>
      <div className="flex md:flex-col flex-row items-center gap-4 md:gap-0">
        <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[150px] sm:w-[231px] text-[14px] leading-[14.45px] font-bold ">
          Book Appointment
        </button>
        <button className="border border-[#000000] rounded-[10px] h-[41px] w-[150px] md:w-[231px] text-[14px] leading-[14.45px] font-bold md:mt-[10px]">
          View Profile
        </button>
      </div>
    </div>
  );

  const clinicData = {
    name: "Stroll Health Clinic",
    openHours: "09:00  - 22:00  ",
    dentistsCount: 8,
    address: "111 NE 32nd St, Spain, FL",
    rating: 5.0,
    reviews: 52,
    reviewText:
      "Very friendly , polite and professional staff ; nice and clean facility ; the only downside is that , I was confirmed...",
  };

  const dentists = [
    {
      id: 1,
      name: "Dr. Alejandro López",
      specialty: "Dentista",
      rating: 5.0,
      image: "/assets/Doctor1.png",
    },
    {
      id: 2,
      name: "Dr. Alejandro López",
      specialty: "Dentista",
      rating: 5.0,
      image: "/assets/Doctor1.png",
    },
  ];

  const patientOpinions = [
    {
      rating: 5.0,
      opinion:
        "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
      user: {
        name: "Riccy Hjon",
        designation: "Sr. Dentist",
        procedure: "Dental Implant",
        avatar: "/assets/pati1.svg",
        verified: "/assets/check-pati.svg",
      },
    },
    // Add more opinions as needed
    {
      rating: 5.0,
      opinion:
        "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
      user: {
        name: "Riccy Hjon",
        designation: "Sr. Dentist",
        procedure: "Dental Implant",
        avatar: "/assets/pati1.svg",
        verified: "/assets/check-pati.svg",
      },
    },
    // Add more opinions as needed
    {
      rating: 5.0,
      opinion:
        "TSI has revolutionized our procurement process. The ability to directly search through product lists and chat with manufacturers has saved us countless hours. Bulk ordering through the app is seamless and efficient.",
      user: {
        name: "Riccy Hjon",
        designation: "Sr. Dentist",
        procedure: "Dental Implant",
        avatar: "/assets/pati1.svg",
        verified: "/assets/check-pati.svg",
      },
    },
    // Add more opinions as needed
  ];

  return (
    <div>
      <div className=" bg-[#FCFAEE] border-b border-[#D0D0D0] w-full">
        <div className="px-5 lg:px-[36px] py-[52px] max-w-[1440px] mx-auto flex">
          <div className="w-full">
            <h3 className="hidden md:block text-[28px] leading-[37px] font-medium text-[#263238]">
              Agenda entre +100 de los mejores Dentistas cerca tuyo
            </h3>
            <p className="hidden md:block text-[16px] leading-[21px] my-2 max-w-[670px] text-[#263238]">
              ¿Necesitas agendar cita en el dentista esta semana? Usa TSI y
              encuentra dentistas cerca de ti que aceptan tu seguro. Es simple,
              seguro y gratuito.
            </p>

            {/* Desktop */}
            <div className="md:flex hidden justify-between items-center gap-5 w-full bg-white border border-[#DDDDDD] shadow-custom h-[66px] rounded-[33px] mt-[36px] px-[33px]">
              <div className="flex flex-col gap-0.5 max-w-[240px] w-full">
                <label className="text-[#222222] text-[14px] leading-[16px] font-semibold">
                  Condición
                </label>
                <input
                  type="text"
                  placeholder="Ej. Ortodoncia Invisible"
                  className="text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5 max-w-[240px] w-full">
                <label className="text-[#222222] text-[14px] leading-[16px] font-semibold">
                  Seguro
                </label>
                <input
                  type="text"
                  placeholder="Selecciona el tuyo"
                  className="text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5 max-w-[240px] w-full border-l border-[#BABABA] pl-2.5">
                <label className="text-[#222222] text-[14px] leading-[16px] font-semibold">
                  Lugar
                </label>
                <input
                  type="text"
                  placeholder="Ej. Madrid"
                  className="text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none"
                />
              </div>
              <div>
                <button className="bg-[#FFF04B] min-w-[48px] min-h-[48px] rounded-[24px] flex items-center justify-center">
                  <BiSearch className="min-w-[20px] min-h-[20px] text-[#5B5252]" />
                </button>
              </div>
            </div>

            {/* Mobile */}
            <div className="bg-white border border-[#DDDDDD] justify-between shadow-custom max-w-[392px] h-[66px] rounded-[32px] flex md:hidden items-center px-5">
              <div className="flex flex-col w-full">
                <label className="text-[#222222] text-[12px] leading-[16px] font-semibold">
                  Condition
                </label>
                <input
                  type="text"
                  placeholder="Eg., Headache"
                  className="text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none max-w-[70px]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[#222222] text-[12px] leading-[16px] font-semibold">
                  Insurance
                </label>
                <input
                  type="text"
                  placeholder="Select yours"
                  className="text-[12px] leading-[16.14px] font-normal text-[#6A6A6A] outline-none  max-w-[70px]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[#222222] text-[12px] leading-[16px] font-semibold">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="eg., New Building"
                  className="text-[12px] leading-[18px] font-normal text-[#6A6A6A] outline-none max-w-[70px]"
                />
              </div>
              <button className="bg-[#FFF04B] min-w-[40px] min-h-[40px] rounded-[24px] flex items-center justify-center">
                <BiSearch className="min-w-[20px] min-h-[20px] text-[#5B5252]" />
              </button>
            </div>
          </div>
          <div className="hidden w-[25%] h-full md:flex items-center justify-center ">
            <img src="/assets/TeethLogo2024.svg" className=" w-auto h-auto" />
          </div>
        </div>
      </div>

      <div className="md:px-5 max-w-[1440px] mx-auto">
        <h4 className="text-[14px] my-4 text-[#263238] leading-[21px] font-normal px-2">
          Filter By
        </h4>
        <div className="hidden lg:flex justify-between flex-wrap gap-8">
          <div className="flex gap-4 px-2 flex-wrap">
            {/* Consulta Online */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="font-normal text-[14px] leading-[19px]  min-w-[211px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                <Image
                  src="/assets/vide.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="mr-[10px]"
                />
                {selectedOption}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Consulta Online",
                    "Consulta Online",
                    "Consulta Online",
                    "Consulta Online",
                    "Consulta Online",
                  ].map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Aseguradora */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown1}
                className="font-normal text-[14px] leading-[19px]  min-w-[135px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                {/* <Image src="/assets/vide.svg" alt="icon" width={20} height={20} className='mr-[10px]'/> */}
                {selectedOption1}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen1 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen1 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Aseguradora",
                    "Aseguradora",
                    "Aseguradora",
                    "Aseguradora",
                    "Aseguradora",
                  ].map((option1, index1) => (
                    <li
                      key={index1}
                      onClick={() => handleOptionClick1(option1)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option1}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Fechas Disponibles */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown2}
                className="font-normal text-[14px] leading-[19px]  min-w-[185px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                {/* <Image src="/assets/vide.svg" alt="icon" width={20} height={20} className='mr-[10px]'/> */}
                {selectedOption2}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen2 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen2 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                  ].map((option2, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick2(option2)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option2}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mas Filtros */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown3}
                className="font-normal text-[14px] leading-[19px]  min-w-[134px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                {/* <Image src="/assets/vide.svg" alt="icon" width={20} height={20} className='mr-[10px]'/> */}
                {selectedOption3}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen3 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen3 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Mas Filtros",
                    "Mas Filtros",
                    "Mas Filtros",
                    "Mas Filtros",
                    "Mas Filtros",
                  ].map((option3, index3) => (
                    <li
                      key={index3}
                      onClick={() => handleOptionClick3(option3)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option3}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/* All */}

          <Select
            variant="bordered"
            color="default"
            label="Filter By"
            className="max-w-xs"
            css={{
              color: "black",
              borderColor: "black",
              "& .nextui-select-item": { color: "black" },
            }}
          >
            {["All", "All", "All", "All"].map((animal, index) => (
              <SelectItem key={index} css={{ color: "black" }}>
                {animal}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex lg:hidden justify-between flex-wrap gap-8">
          <div className="flex gap-4 px-2 flex-wrap">
            {/* Consulta Online */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="font-normal text-[14px] leading-[19px]  min-w-[211px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                <Image
                  src="/assets/vide.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="mr-[10px]"
                />
                {selectedOption}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Consulta Online",
                    "Consulta Online",
                    "Consulta Online",
                    "Consulta Online",
                    "Consulta Online",
                  ].map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Aseguradora */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown1}
                className="font-normal text-[14px] leading-[19px]  min-w-[135px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                {/* <Image src="/assets/vide.svg" alt="icon" width={20} height={20} className='mr-[10px]'/> */}
                {selectedOption1}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen1 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen1 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Aseguradora",
                    "Aseguradora",
                    "Aseguradora",
                    "Aseguradora",
                    "Aseguradora",
                  ].map((option1, index1) => (
                    <li
                      key={index1}
                      onClick={() => handleOptionClick1(option1)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option1}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Fechas Disponibles */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown2}
                className="font-normal text-[14px] leading-[19px]  min-w-[185px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                {/* <Image src="/assets/vide.svg" alt="icon" width={20} height={20} className='mr-[10px]'/> */}
                {selectedOption2}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen2 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen2 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                    "Fechas Disponibles",
                  ].map((option2, index2) => (
                    <li
                      key={index2}
                      onClick={() => handleOptionClick2(option2)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option2}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mas Filtros */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown3}
                className="font-normal text-[14px] leading-[19px]  min-w-[134px] h-[39px]  cursor-pointer text-[#54595C] border border-black outline-none rounded-lg flex items-center justify-center"
              >
                {/* <Image src="/assets/vide.svg" alt="icon" width={20} height={20} className='mr-[10px]'/> */}
                {selectedOption3}
                <span
                  className={`transform transition-transform duration-200 ml-[10px] ${
                    isOpen3 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/assets/d-ar.svg"
                    alt="arrow"
                    width={12}
                    height={15}
                  />
                </span>
              </button>
              {isOpen3 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-black rounded-lg z-10">
                  {[
                    "Mas Filtros",
                    "Mas Filtros",
                    "Mas Filtros",
                    "Mas Filtros",
                    "Mas Filtros",
                  ].map((option3, index3) => (
                    <li
                      key={index3}
                      onClick={() => handleOptionClick3(option3)}
                      className="font-normal text-[14px] leading-[19px] cursor-pointer px-2 py-1 border-b text-[#54595C]"
                    >
                      {option3}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Select
              variant="bordered"
              color="default"
              label="Filter By"
              className="max-w-xs"
              css={{
                color: "black",
                borderColor: "black",
                "& .nextui-select-item": { color: "black" },
              }}
            >
              {["All", "All", "All", "All"].map((animal, index) => (
                <SelectItem key={index} css={{ color: "black" }}>
                  {animal}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="px-2 flex items-center gap-3 mt-6">
          <img src="/assets/BlueCheck.svg" />
          <h3 className="text-[22px] font-[600]">52 Dentists Verified</h3>
        </div>

        <p className="px-2 text-[16px] my-3 max-w-[845px] text-[#263238] leading-[19px] font-normal">
          TSI verifica a todos los profesionales antes de que aparezcan en este
          listado y puedan ofrecerte atención, ¡ Nos aseguramos de que estás en
          buenas manos!
        </p>
        <h3 className="px-2 font-[700] text-[26px] my-4">All Providers</h3>
        <div className="text-end mr-4 text-[14px] text-[#263238]">
          <p>Última actualización: 12/06/2024</p>
        </div>

        {/* Boxes */}
        <div className="pt-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>

        {/* Box 2 */}
        <div className="pb-8 px-2 lg:px-[80px] my-10 md:pt-[52px] md:pb-[25px] border-b md:border border-[#D0D0D0] md:shadow-xl md:rounded-[20px]">
          <div className="flex flex-col md:flex-row items-center gap-[30px] border-b pb-5 border-[#D0D0D0]">
            <div className="flex items-center gap-5">
              <div className="relative md:h-[125px] md:w-[125px] w-[100px] h-[100px]">
                <img
                  src="/assets/Doctor5.png"
                  className="rounded-full h-full w-full object-cover border border-[#CFCFCF]"
                />
              </div>
              <div className="space-y-[10px]">
                <h5 className="text-[18px] md:text-[22px] font-[500]">
                  {clinicData.name}
                </h5>
                <div className="flex gap-3 md:gap-7">
                  <p className="text-[13px] md:text-[16px]">
                    Abre : {clinicData.openHours}
                  </p>
                  <p className="text-[13px] md:text-[16px] border-l border-[#CDCDCD] flex items-center gap-1">
                    <Image
                      src="/assets/m.svg"
                      alt="image"
                      width={10}
                      height={10}
                      className="-mt-[2px] ml-2"
                    />
                    {clinicData.dentistsCount} Dentists
                  </p>
                </div>
                <p className="text-[13px] md:text-[16px] text-[#263238] font-normal leading-[19px] flex items-center gap-1.5">
                  <Image src="/assets/l.svg" alt="img" width={18} height={18} />
                  {clinicData.address}
                </p>
              </div>
            </div>
            <div className="bg-[#F1F1F1] md:max-w-[43%] rounded-[20px] flex items-center gap-[15px] sm:gap-[26px] px-[10px] sm:px-[20px] py-[21px]">
              <div className="w-[170px] flex flex-col items-start gap-2">
                <p className="text-[25px] sm:text-[34px] font-medium text-[#263238] leading-[19px]">
                  {clinicData.rating.toFixed(2)}
                </p>
                <img src="/assets/4star-.svg" />
                <p className="text-[12px] sm:text-[16px] text-[#6B777D]">
                  ({clinicData.reviews} reviews)
                </p>
              </div>
              <div>
                <p className="text-[#6B777D] text-[12px] sm:text-[14px] leading-[19px] font-normal mb-1">
                  {clinicData.reviewText}
                </p>
                <p className="text-[#2C64D8] text-[14px] sm:text-[16px] leading-[19px] font-normal">
                  Read More
                </p>
              </div>
            </div>
            <div className="flex md:flex-col md:gap-2 gap-4 flex-row">
              <button className="bg-[#FEF14B] rounded-[10px] h-[41px] w-[150px] md:w-[231px] text-[14px] leading-[14.45px] font-bold ">
                Book Appointment
              </button>
              <button className="border border-[#000000] rounded-[10px] h-[41px] w-[150px] md:w-[231px] text-[14px] leading-[14.45px] font-bold ">
                View Clinic
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[22px] font-[600] pt-5">Associated dentist</h4>
            <div className="flex gap-5">
              {dentists.map((dentist) => (
                <div
                  key={dentist.id}
                  className="rounded-[10px] p-4 shadow-custom1 block my-5"
                >
                  <img
                    src={dentist.image}
                    className="h-[82px] w-[82px] rounded-full"
                  />
                  <h3 className="text-[20px] text-[#263238] leading-[19px] font-medium mt-2.5">
                    {dentist.name}
                  </h3>
                  <p className="text-[16px] leading-[19px] font-normal mt-1 text-[#263238]">
                    {dentist.specialty}
                  </p>
                  <div className="flex items-center gap-2">
                    <img src="/assets/4star-.svg" />
                    <p className="text-[18px] font-[700]">{dentist.rating}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-[19px] font-normal text-[#2C64D8]">
              Ver todos los Dentistas
            </p>
          </div>
        </div>

        <div className="my-[20px] w-full flex items-center text-black">
          <span className="w-full h-[1px] rounded-full bg-[#D0D0D0] ml-3"></span>
          <div className="flex items-center justify-end gap-3 min-w-[320px]">
            <button onClick={goToPreviousPage}>
              <IoIosArrowBack className="text-[20px]" />
            </button>
            <button>
              <Image src="/assets/ld.svg" alt="A" width={24} height={24} />
            </button>
            {renderPaginationButtons()}
            <button>
              <Image src="/assets/rd.svg" alt="A" width={24} height={24} />
            </button>
            <button onClick={goToNextPage}>
              <IoIosArrowForward className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-2  py-10 max-w-[1440px] mx-auto">
        <div className="overflow-x-auto flex md:flex-row flex-col  justify-center items-center rounded-[20px] gap-2 p-4">
          {patientOpinions.map((opinion, index) => (
            <div key={index} className="sm:px-4 min-w-[400px] rounded-[20px]">
              <div className="bg-white rounded-[20px] shadow-lg">
                <div className="flex items-center justify-between mb-4 p-4 sm:p-6">
                  <Image
                    src="/assets/comma.svg"
                    alt="comma"
                    width={52}
                    height={84}
                    className="h-[50px] w-[40px] md:h-[84px] md:w-[52px]"
                  />
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xl text-gray-800">
                      {opinion.rating}
                    </h3>
                    <div className="flex items-center gap-1 text-red-500">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <GoStarFill key={i} />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 px-4 sm:px-6">
                  {opinion.opinion}
                </p>
                <div className="flex items-center gap-4 p-4 sm:p-6 bg-[#FFFEEC] rounded-b-[20px] ">
                  <div className="relative w-12 h-12">
                    <Image
                      src={opinion.user.avatar}
                      alt="user avatar"
                      layout="fill"
                      className="rounded-full"
                    />
                    <Image
                      src={opinion.user.verified}
                      alt="verified"
                      width={24}
                      height={24}
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h2 className="text-lg font-semibold">
                        {opinion.user.name}
                      </h2>
                      <h3 className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
                        {opinion.user.procedure}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {opinion.user.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col justify-center w-full items-center">
        <RelatedArticles />
        <FAQ />
        <FindDoctor />
        <RegisterNowBanner />
      </div>
    </div>
  );
};

export default page;
