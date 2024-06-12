'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import plus from "../../../../public/Icon/plus.png";
import time from "../../../../public/Icon/time-line.png";

export default function Tags() {
  const [open, setOpen] = useState(false);
  const [tagss, settagss] = useState();
  var userAdd = [
    {
      tag: "#Example",
    }
  ];
  if (localStorage.getItem("Tags") != null) {
    userAdd = JSON.parse(localStorage.getItem("Tags"));
  }
 
  return (
    <>
    
    <div className=" lg:my-3 mx-2 lg:mx-0  rounded-2xl px-1 lg:px-3 py-1 flex justify-between flex-wrap gap-3 lg:gap-0">
              <div className="flex my-2 lg:my-0 flex-wrap gap-y-2 ">
                <div className='flex gap-2 flex-wrap '>

                
                {
                  userAdd?.map((item, index) => {
                   return <p key={index} className=" rounded-2xl bg-emerald-100 text-black text-xs  px-3 cursor-pointer ">
                      {item.tag}
                    </p>
                  })
                }
                 {/* <p className=" rounded-2xl bg-emerald-100 text-black text-xs  px-3 cursor-pointer ">
                      #Example
                    </p> */}
             </div>
               
                <div className="rounded-2xl ml-2 border-skyy border  flex items-center px-2 cursor-pointer">
                  <Image src={plus} alt="plus" className="size-4" />
                  {/* <p className="text-black text-xs  px-2  ">#Add Tag</p> */}
                  <p onClick={() => setOpen(true)} className="text-black text-xs  px-2  ">#Add Tag</p>
                </div>
              </div>
              


              <div className="rounded-2xl   flex items-center gap-x-1 mr-1  ">
                <Image src={time} alt="time" className="size-4" />
                <p className="text-black text-xs font-medium">Duration</p>
              </div>


            </div>
            
{
  open ? <div className='  flex items-center gap-x-3 w-full justify-center flex-wrap gap-y-2 mb-2 lg:mb-0'>
            <input
                  type="text"
                  placeholder="..... add tags"
                  className="focus:outline-none 
                  w-full 
                  mx-3
                   bg-transparent  text-gray-500 border
                    placeholder:text-gray-300 placeholder:text-base
                     text-base py-1 font-medium  bg-gray-100
                     placeholder:text-xs placeholder:font-light 
                     px-4 rounded-3xl focus-within:border focus-within:border-skyy
                     transition-all "
                     onChange={(e) => {
                      let add = {
                        tag: e.target.value,
                      };
                      settagss(add);
                    }}
                />
               <div className="rounded-2xl border-gray-200 border bg-skyy  hover:bg-blue-700  flex items-center px-2 cursor-pointer">
                  <Image src={plus} alt="plus" className="size-4" />
                  <p 
                   onClick={() => {
                    userAdd.push(tagss);
                    localStorage.setItem("Tags", JSON.stringify(userAdd));
                    setOpen(false);
                  }} className="text-white text-xs  px-2  ">Add your Tag</p>
                </div>
            </div> : null
}
       
            
    
    
    
    </>
  )
}
