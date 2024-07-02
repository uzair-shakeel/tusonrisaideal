import React from "react";
import Reviews from "../components/Reviews";

const page = () => {
  return (
    <>
      <div
        className="bg-[#FCFAEE] min-h-screen px-[8%]
"
      >
        <div className="grid grid-cols-2 gap-8">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-[59px] font-[700]">
              Encuentra a tu Dentista ideal en un Clic
            </h1>
            <p className="text-[15px]">
              Compara Opciones. Ahorra tiempo. Conoce Precios de Dentistas
              Verificados. Todo 100% Gratis.
            </p>
            <div className="flex items-center text-[18px] font-[600] py-14 gap-3">
              Excelente
              <img src="/assets/Green Stars.svg" />
              TrustPilot
            </div>
          </div>
          <div className="w-full h-full overflow-hidden flex justify-center">
            <img
              src="/assets/Paper map-pana 2.svg"
              className="object-cover h-auto w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 py-10">
          <div className="bg-[#333333] text-white px-9 py-5 rounded-2xl shadow-2xl">
            <div className="flex gap-3 py-3">
              <img src="/assets/Batch.svg" />
              <h3 className="font-[600] text-[20px]">Calidad Asegurada</h3>
            </div>
            <p className="text-[14px]">
              Seleccionamos y Verificamos a los mejores dentistas para ti
            </p>
          </div>
          <div className="bg-white px-9 py-5 rounded-2xl shadow-2xl">
            <div className="flex gap-3 py-3">
              <img src="/assets/Tag.svg" />
              <h3 className="font-[600] text-[20px]">
                Disponibilidad y Precios
              </h3>
            </div>
            <p className="text-[14px]">
              Somos los Únicos 100% Especializados en el Sector Dental
            </p>
          </div>
          <div className="bg-white px-9 py-5 rounded-2xl shadow-2xl">
            <div className="flex gap-3 py-3">
              <img src="/assets/Thumb.svg" />
              <h3 className="font-[600] text-[20px]">Calidad Asegurada</h3>
            </div>
            <p className="text-[14px]">
              Pide Cita de Forma Fácil y Rápida y Totalmente Gratuita
            </p>
          </div>
          <div className="bg-white px-9 py-5 rounded-2xl shadow-2xl">
            <div className="flex gap-3 py-3">
              <img src="/assets/Person.svg" />
              <h3 className="font-[600] text-[20px]">Todos los Dentistas</h3>
            </div>
            <p className="text-[14px]">
              Lee y Compara entre Cientos de Perfiles Verificados de Dentistas
            </p>
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default page;
