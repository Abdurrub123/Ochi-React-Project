import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export default function LandingPage() {
  return (
    <div className='w-full h-screen bg-white-900 pt-2'>
      <div className="text-structure mt-52 px-16 border-b-[1px] border-grey-500 pb-96">
        {["We Create", "Eye Opening", "Presentations"].map((index, item) => {
          return (
            <div key={item} className="masker leading-[6vw] font-['Founders_Grotesk_X_Condensed'] font-medium text-[8vw] text-zinc-800">
              <div className="w-fit flex align-baseline ">
                {item === 1 && (<div className="w-[8vw] h-[5vw] bg-red-500 rounded mr-[1vw] relative -top-[0.9vw]"></div>)}
                <h1 className='uppercase flex'>{index}</h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className="banner-bottom flex items-center justify-between pt-3 pb-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((index, item) =>
          <p key={item} className='font-normal font-["Founders_Grotesk"] text-zinc-700 text-[18px]'>{index}</p>
        )}
        <div className="start-btn flex items-center gap-2">
          <button className='px-6 py-1 rounded-full border-[1px] border-zinc-500 uppercase'>Start the Project</button>
          <button className='px-2 py-2 rounded-full border-[1px] border-zinc-500 '><GoArrowUpRight /></button>
        </div>
      </div>
    </div>
  )
}
