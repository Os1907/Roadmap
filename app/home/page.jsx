import React from 'react'
import Details from '../Components/Details/Details'
import Preview from '../Components/Preivew/Preview'

import sett from "../../public/Icon/sett.png";



export default function home({children}) {
  const Data = [
    {
      title:"Learn a programming language",
      id:"r1"
    },
    {
      title:"Example step 001 title",
      id:"r2"
    },
    {
      title:"Operating Systems",
      id:"r3"
    },
    {
      title:"Learn a programming language",
      id:"r4"
    },
  ]

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

 const router= [ {
  navigate : true,
  place :"/addpost"
 }
 ]
  return (
    <>
    
     
    <main className="bg-white  pt-16  lg:pt-20 lg:pl-20 grid grid-cols-6  ">
      <div className="col-span-6 lg:col-span-3 mx-4 lg:ml-4 lg:mr-0 mt-3     rounded-2xl  ">
       {
        Data.map((item, index)=> <Details key={item.id} title={item.title} index={index} route={router}/>)
       }
        </div>
        <div className="col-span-6 lg:col-span-3  lg:ml-4 lg:mr-0 mt-3  rounded-2xl  bg-[#F6F6F6]     ">
       <Preview road={road} road2={road2} stages={stages} />
        </div>


      </main>

    </>
  )
}
