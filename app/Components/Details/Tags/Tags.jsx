import Image from 'next/image'
import React from 'react'
import plus from "../../../../public/Icon/plus.png";
import time from "../../../../public/Icon/time-line.png";

export default function Tags() {
  return (
    <>
    
    <div className=" lg:my-3 mx-2 lg:mx-0  rounded-2xl px-1 lg:px-3 py-1 flex justify-between flex-wrap gap-3 lg:gap-0">
              <div className="flex my-2 lg:my-0 ">
                <p className=" rounded-2xl bg-emerald-100 text-black text-xs  px-2 cursor-pointer ">
                  #Example Tag
                </p>
                <div className="rounded-2xl ml-2 border-skyy border  flex items-center px-2 cursor-pointer">
                  <Image src={plus} alt="plus" className="size-4" />
                  <p className="   text-black text-xs  px-2  ">#Add Tag</p>
                </div>
              </div>


              <div className="rounded-2xl   flex items-center gap-x-1 mr-1  ">
                <Image src={time} alt="time" className="size-4" />
                <p className="text-black text-xs font-medium">Duration</p>
              </div>
            </div>
    
    
    
    </>
  )
}
