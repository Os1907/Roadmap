import React from 'react'
import Details from '../Components/Details/Details'
import Preview from '../Components/Preivew/Preview'
import sett from "../../public/Icon/sett.png";
import StyleInfo from '../Components/StyleInfo/StyleInfo';

export default function color() {
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
    {
      title: "Opening system",
      day: "1-2 days",
      checked: true,
      checkTitle: "Completed",
      img: 2,
      colorBg: "bg-[#FE7860]",
    },
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

    {
      title: "Opening system",
      day: "1-2 days",
      notComp: "true",
      notTitle: "Not Started",
      img: 2,
      colorBg: "bg-[#9ca3af]",
      complete: true,
    },
  ];
const stages=[
  {
    stage:"stageOne"
  }
]
  const road2 = [
    {
      title: "Learn Programming Language",
      day: "1-2 days",
      notComp: "true",
      notTitle: "Not Started",
      sett: sett,
      numerSet: 4,
      play: 1,
      img: 2,
      colorBg: "bg-[#9ca3af]",
    },
    {
      title: "Opening system",
      day: "1-2 days",
      notComp: "true",
      notTitle: "Not Started",
      img: 2,
      colorBg: "bg-[#FE7860]",
    },
    {
      title: "Learn Programming Language",
      day: "1-2 days",
      notComp: "true",
      notTitle: "Not Started",
      sett: sett,
      numerSet: 4,
      play: 1,
      img: 2,
      colorBg: "bg-[#9ca3af]",
    },
    {
      title: "Opening system",
      day: "1-2 days",
      notComp: "true",
      notTitle: "Not Started",
      img: 2,
      colorBg: "bg-[#9ca3af]",
      complete: true,
    },
  ];
  return  <>
  
  <section className="bg-grayy min-h-screen pt-16  lg:pt-20 lg:px-20 grid grid-cols-6 over-flow-hidden relative     ">
      <div className="col-span-6 lg:col-span-3 mx-4 lg:ml-4lg:mr-0 mt-3    rounded-2xl  ">
       <StyleInfo/>
        </div>
       <div className="col-span-6 lg:col-span-3  lg:ml-4 lg:mr-0 mt-3  rounded-2xl     relative ">
        <div className= ' bg-gradient-to-r from-grayy w-full h-full absolute top-0 z-40 '>
        </div>
        
       <Preview road={road} road2={road2} stages={stages} />
        </div>

      </section>
  
  
  
  
  </>
}
