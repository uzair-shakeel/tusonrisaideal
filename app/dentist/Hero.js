"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="bg-[#FCFAEE] w-full">
        <div className="max-w-[1440px] mx-auto pl-3 lg:pl-[40px] w-full flex">
          <div className="py-[40px] w-full" id="overview">
            <div className="flex items-center gap-3 border-b border-[#E0E0E0] max-w-[737px] pb-[20px]">
              <Image
                src="/assets/Group 18044.svg"
                alt="Image"
                width={179}
                height={169}
                className="md:w-[179px] md:h-[169px] w-[120px] h-[120px]"
              />
              <div className="flex flex-col gap-2">
                <div className="flex md:flex-row flex-col md:items-center md:gap-1 gap-3 sm:gap-[1.5rem]">
                  <h2 className="text-[#263238] text-[20px] md:text-[36px] leading-[19px] font-medium">
                    Dr. Carlos Fernández
                  </h2>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#F64850] mb-0.5 text-base" />
                    <h2 className="text-[#263238] text-[14px] sm:text-[16px] leading-[19px] font-bold">
                      4.8{" "}
                      <span className="font-normal text-[#797E81]">
                        (33 evaluaciones)
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <h4 className="text-[#263238] text-[16px] leading-[19px]">
                    Dentista
                  </h4>
                  <div className="flex items-center gap-1 pl-1 border-l border-[#CDCDCD]">
                    <Image
                      src="/assets/box.svg"
                      alt="box"
                      width={12}
                      height={12}
                    />
                    <h3 className=" text-[#263238] text-[13px] sm:text-[16px] leading-[19px] ">
                      25 years of experience
                    </h3>
                  </div>
                </div>

                <div className="md:flex hidden items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/teeth.svg"
                      alt="Image"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[#263238] text-[16px] leading-[19px] font-medium">
                      ?/100 Calificación TSI
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/sun.svg"
                      alt="Image"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[#263238] text-[16px] leading-[19px] font-medium">
                      Clínica Verificada
                    </h3>
                  </div>
                </div>

                <div className="md:flex hidden items-center gap-4">
                  <h3 className="text-[#263238] text-[16px] leading-[19px] font-normal">
                    Trabaja en :{" "}
                    <span className="text-[#2B59E0] underline">
                      Centro de Salud El So
                    </span>
                  </h3>
                  <h3 className="text-[#263238] text-[16px] leading-[19px] font-bold">
                    Núm. Colegiado:{" "}
                    <span className="text-[#263238] font-normal">28012141</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/teeth.svg"
                  alt="Image"
                  width={20}
                  height={20}
                />
                <h3 className="text-[#263238] text-[16px] leading-[19px] font-medium">
                  ?/100 Calificación TSI
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/sun.svg"
                  alt="Image"
                  width={20}
                  height={20}
                />
                <h3 className="text-[#263238] text-[16px] leading-[19px] font-medium">
                  Clínica Verificada
                </h3>
              </div>
            </div>

            <div className="flex flex-col md:hidden items-start gap-4 mt-8">
              <h3 className="text-[#263238] text-[16px] leading-[19px] font-normal">
                Trabaja en :{" "}
                <span className="text-[#2B59E0] underline">
                  Centro de Salud El So
                </span>
              </h3>
              <h3 className="text-[#263238] text-[16px] leading-[19px] font-bold">
                Núm. Colegiado:{" "}
                <span className="text-[#263238] font-normal">28012141</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 max-w-[888px] gap-7 mt-14">
              <div className="flex items-start gap-1.5">
                <Image
                  src="/assets/thumb1.svg"
                  alt="img"
                  width={26}
                  height={26}
                />
                <div className="flex items-start gap-1.5 flex-col">
                  <h2 className="text-[#263238] text-[20px] leading-[19px] font-semibold">
                    Highly Suggested
                  </h2>
                  <h4 className="text-[#263238] text-[14px] leading-[19px] font-normal">
                    72% Patients are very positive about him
                  </h4>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <Image
                  src="/assets/timer.svg"
                  alt="img"
                  width={26}
                  height={26}
                />
                <div className="flex items-start gap-1.5 flex-col">
                  <h2 className="text-[#263238] text-[20px] leading-[19px] font-semibold">
                    Lower Waiting Time
                  </h2>
                  <h4 className="text-[#263238] text-[14px] leading-[19px] font-normal">
                    97% Patients waited less then 10 mins
                  </h4>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <Image
                  src="/assets/availablity.svg"
                  alt="img"
                  width={26}
                  height={26}
                />
                <div className="flex items-start gap-1.5 flex-col">
                  <h2 className="text-[#263238] text-[20px] leading-[19px] font-semibold">
                    Availablity
                  </h2>
                  <h4 className="text-[#263238] text-[14px] leading-[19px] font-normal">
                    He is active on platform
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y  border-[#D0D0D0] pt-2  lg:pl-[40px] pl-2 w-full">
        <ul className="flex items-center gap-[40px] overflow-scroll">
          <li className="hover:text-[#2C64D8] text-[#6A6A6A] hover:border-b-2 border-[#2C64D8] pb-1 text-[16px] leading-[24px] hover:font-semibold">
            <Link href="/gallery">Photos</Link>
          </li>
          <li className="text-[#6A6A6A] hover:text-[#2C64D8] hover:border-b-2 border-[#2C64D8] hover:font-semibold pb-1 text-[16px] leading-[24px] font-normal">
            <a href="#overview">Overview</a>
          </li>
          <li className="text-[#6A6A6A] hover:text-[#2C64D8] hover:border-b-2 border-[#2C64D8] hover:font-semibold pb-1 text-[16px] leading-[24px] font-normal">
            <a href="#location">Location</a>
          </li>
          <li className="text-[#6A6A6A] hover:text-[#2C64D8] hover:border-b-2 border-[#2C64D8] hover:font-semibold pb-1 text-[16px] leading-[24px] font-normal">
            <a href="#rating">Ratings</a>
          </li>
          <li className="text-[#6A6A6A] hover:text-[#2C64D8] hover:border-b-2 border-[#2C64D8] hover:font-semibold pb-1 text-[16px] leading-[24px] font-normal">
            <a href="#fac">Facilities</a>
          </li>
        </ul>
      </div>

      <div className="w-[60%]">
        <div className="mt-14  pl-2 lg:ml-[40px]">
          <div className="mt-7 max-w-[845px]">
            <h2 className="text-[#181515] text-[22px] leading-[19px] font-semibold mb-5">
              Dentist Overview
            </h2>
            <p className="text-[#263238] text-[16px] leading-[19px] font-normal">
              He is a highly skilled and experienced dentist, dedicated to
              providing top-quality dental care. With over 15 years of
              experience in the field, Dr. Martínez specializes in preventive,
              restorative, and cosmetic dentistry. His patient-centric approach
              ensures that each individual receives personalized care tailored
              to their specific needs.
            </p>
            {showMore && (
              <p className="text-[#263238] text-[16px] leading-[19px] font-normal mt-2.5">
                Centro de Salud El Sol es un hospital líder en atención médica,
                comprometido con ofrecer servicios de salud de alta calidad a la
                comunidad. Ubicado en el corazón de Ciudad del Sol, nuestro
                centro se dedica a proporcionar atención médica integral y
                personalizada en un entorno acogedor y moderno.
              </p>
            )}
            <button
              className="text-[#2C64D8] text-[16px] leading-[19px] font-normal py-4 flex items-center gap-1"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
              {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>
      </div>
      <div className=" pl-3 lg:pl-[60px] max-w-[1440px] mx-auto">
        <div className="flex items-start gap-1.5">
          <Image
            src="/assets/language1.svg"
            alt="Image"
            width={20}
            height={20}
          />
          <div className="flex flex-col">
            <h3 className="text-[#000000] text-[13.5px] leading-[20px] font-bold inter-font">
              Languages
            </h3>
            <p className="text-[#000000] text-[12.6px] leading-[20px] font-normal inter-font">
              Spanish, French, English
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
