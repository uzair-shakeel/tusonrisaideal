"use client"
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment by calling our clinic at +34 123 456 789, through our website's online booking system, or by visiting the clinic in person."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "Our clinic is open from Monday to Friday, 8 AM to 6 PM, and on Saturdays from 9 AM to 2 PM."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Yes, we do accept walk-ins, but we recommend scheduling an appointment to ensure you are seen promptly."
    },
    {
      question: "Do you offer emergency services?",
      answer: "We accept a variety of insurance plans. Please contact our office or check our website for a list of accepted insurance providers."
    }
  ];

  return (
    <div className='max-w-[1344px] w-full mx-auto p-1 pt-[40px] md:py-[70px] px-2 md:px-5'>
      <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold mb-7'>FAQ’s</h2>
      <div className='max-w-[896px] flex flex-col gap-[22px]'>
        {faqs.map((faq, index) => (
          <div key={index} className='shadow-custom bg-[#FFFFFF] rounded-[10px] pl-3 md:pl-3.5 pr-3 md:pr-[44px] py-[26px]'>
            <div className='flex justify-between items-start gap-1'>
              <h3 className='text-[#263238] text-[18px] leading-[19px] font-medium'>{faq.question}</h3>
              <button
                onClick={() => toggleFAQ(index)}
                className='bg-[#D0D0D0] min-w-6 min-h-6 rounded-full flex items-center justify-center'>
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {activeIndex === index && (
              <p className='text-[#263238] text-[16px] leading-[19px] font-normal mt-[31px]'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
