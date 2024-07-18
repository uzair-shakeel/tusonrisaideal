import React from "react";
import { MdPhone } from "react-icons/md";

const StickyBottomButtons = () => {
  return (
    <div>
      <div className="fixed py-4 w-full z-50 bottom-0 bg-white grid grid-cols-2 lg:hidden gap-[13px] px-3 leading-[17px] text-[14px]">
        <button className="py-3 flex gap-2 items-center justify-center px-4 border border-black text-black font-bold rounded-[10px]">
          <MdPhone size={18} /> Call
        </button>
        <button className="py-3 px-4 bg-[#FEF14B] text-[#263238] font-bold rounded-[10px]">
          Get a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default StickyBottomButtons;
