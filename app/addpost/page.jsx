'use client'
import React, { useState } from "react";
import Details from "../Components/Details/Details";
import Preview from "../Components/Preivew/Preview";
import sett from "../../public/Icon/sett.png";
import Tags from "../Components/Details/Tags/Tags";
import Verifi from "../Components/Details/Verifi/Verifi";
import UpImage from "../Components/Details/UpImage/UpImage";
import UpTools from "../Components/Details/UpTools/UpTools";
import Texts from "../Components/Details/Texts/Texts";
import time from "../../public/Icon/time-line.png";
import Image from "next/image";


export default function Addpost() {
  const Data = [
    {
      title: "Learn a programming language",
      id: "r1",
    },
  ];

  const road = [
    {
      title: "Learn Programming Language",
      day: "1-2 days",
      checked: true,
      checkTitle: "Completed",
      sett: sett,
      numerSet: 4,
      play: 1,
      img: 2,
      colorBg: "bg-[#9ca3af]",
    },
  ];

  const [open, setOpen] = useState(true)

  return (
    <>
      <section className="bg-white  pt-16  lg:pt-20 lg:pl-20 grid grid-cols-6 min-h-screen relative ">

{
  open? <div className="w-full min-h-screen fixed bg-[#1e1e1e8a] z-[60] flex justify-end overflow-scroll">
      <div className="bg-white min-h-screen flex flex-col justify-start lg:justify-between w-full lg:w-[25%] scale-in-hor-right ">
   
  <div>
<div>
  <div className="flex mx-4 items-center mt-4 justify-between">
    <div className="flex items-center">

      <button onClick={() => setOpen(false)} className="text-black text-2xl">
        <span> x </span>
      </button>
      <p className="ml-4 text-xs md:text-sm lg:text-base text-black font-semibold  mt-1">
                 {Data[0].title}
                </p>
    </div>
    <button  className=" hover:bg-zinc-200 hover:rounded-full  rounded-full ">
                  <p className=" font-extrabold mx-2 lg:my-1 text-xs lg:text-base text-black">...</p>
                </button>
  </div>
  <div className="inline-flex mx-4 mt-2">
    <p className="px-3 py-1 text-white text-xs lg:text-base bg-[#ACB5B7] rounded-full">Main Content</p>
  </div>
<div className="flex items-center mx-1 my-2">
                <p className="ml-3 text-xs md:text-sm lg:text-base text-black font-semibold">
                 {Data[0].title}
                </p>
              </div>

<div className="rounded-2xl   flex items-center gap-x-1 mr-1  mx-4 mb-2 ">
                <Image src={time} alt="time" className="size-4" />
                <p className="text-zinc-400 text-xs font-normal">Add duration</p>
 </div>
            <Texts />
</div>
  
            <Verifi />
  
            <UpImage />
  </div>
  <div className="mb-2">

            <UpTools />
  </div>
      </div>
        </div> : ""
}
        


        <div className="col-span-6 lg:col-span-3 mx-4 lg:ml-4 lg:mr-0 mt-3     rounded-2xl  ">
          {Data.map((item, index) => (
            <Details key={item.id} title={item.title} index={index}>
              {" "}
            </Details>
          ))}

            <button onClick={() => setOpen(true)}>
          <div className="w-auto cursor-pointer mt-4 ml-4 inline-flex items-center gap-x-2">
              <div>
              <span className="bg-skyy cursor-pointer rounded-full text-white text-xl px-3 py-1 font-light  ">
                +
              </span>
            </div>
            <div>
              <p className="text-skyy">Add new Step</p>
            </div>
            
          </div>
            </button>
        </div>
        <div className="col-span-6 lg:col-span-3  lg:ml-4 lg:mr-0 mt-3  rounded-2xl  bg-[#F6F6F6]  repet   ">
          <Preview road={road} />
        </div>
      </section>
    </>
  );
}
