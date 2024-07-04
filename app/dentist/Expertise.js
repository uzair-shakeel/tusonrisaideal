'use client'
import { useEffect, useRef } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: 'dataset',
      data: [5, 5, 8, 5, 3, 5],
      backgroundColor: [
        '#FEF14B',
        '#2C64D8',
        '#F84141',
        '#00A3FF',
        '#FCFAEE',
        '#66E2D9',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '80%',
};


const Expertise = () => {
 

  return (
    <div className='2xl:pl-[110px] pl-5 lg:pl-[40px] flex md:flex-row flex-col gap-5 md:items-center justify-between max-w-[927px]'>
      <div>
        <h2 className='text-[#181515] text-[22px] leading-[19px] font-semibold'>Expertise</h2>
        <p className='text-[#3C4659] text-[13.3px] leading-[19px] font-normal mt-2'>Based on patient reviews & endorsements by other professionals</p>
        <div className='mt-4 flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <span className='min-w-[8px] min-h-[8px] rounded-full bg-[#FFF04B]'></span>
            <h2 className='text-[#3C4659] text-[14px] leading-[19px] font-normal'>Periodontics (41%)</h2>
          </div>
          <div className='flex items-center gap-2'>
            <span className='min-w-[8px] min-h-[8px] rounded-full bg-[#F84141]'></span>
            <h2 className='text-[#3C4659] text-[14px] leading-[19px] font-normal'>Periodontitis (27%)</h2>
          </div>
          <div className='flex items-center gap-2'>
            <span className='min-w-[8px] min-h-[8px] rounded-full bg-[#333333]'></span>
            <h2 className='text-[#3C4659] text-[14px] leading-[19px] font-normal'>Gingivitis (14%)</h2>
          </div>
          <div className='flex items-center gap-2'>
            <span className='min-w-[8px] min-h-[8px] rounded-full bg-[#2C64D8]'></span>
            <h2 className='text-[#3C4659] text-[14px] leading-[19px] font-normal'>Teeth Cleaning (11%)</h2>
          </div>
          <div className='flex items-center gap-2'>
            <span className='min-w-[8px] min-h-[8px] rounded-full bg-[#FCFAEE] shadow-custom'></span>
            <h2 className='text-[#3C4659] text-[14px] leading-[19px] font-normal'>Others (2%)</h2>
          </div>
        </div>
      </div>

      <div className='max-w-[215px] max-h-[215px]' >
      <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default Expertise