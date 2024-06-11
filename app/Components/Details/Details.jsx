import Image from "next/image";
import React from "react";
import dots from "../../../public/Icon/dots.png";
import Tags from "./Tags/Tags";
import Texts from "./Texts/Texts";
import Verifi from "./Verifi/Verifi";
import UpTools from "./UpTools/UpTools";
import UpImage from "./UpImage/UpImage";
import AddButton from "./AddButton/AddButton";

export default function Details(props ) {
    const title = props.title
    const navig = props.route
  return (
    <>
        
        {
            props.index === 0 ? <> <details  className="group text-lg relative open:border-skyy open:border rounded-2xl py-2  w-full lg:px-3 my-1  " open >
            <summary 
            className="flex cursor-pointer bg-grayy rounded-2xl py-3 px-4 group-open:bg-white flex-row items-center justify-between  font-normal text-black marker:[font-size:0px]"
            >
              <div className="flex items-center">
                <Image src={dots} alt="dots" className=" h-3 w-2 lg:h-4 lg:w-3" />
                <p className="ml-3 text-xs md:text-sm lg:text-base">
                 {title}
                </p>
              </div>
              <div className="flex items-center ">
                <button  className="right-8 lg:right-16 z-30 hover:bg-zinc-200 hover:rounded-full  rounded-full absolute">
                  <p className=" font-extrabold mx-2 lg:my-1 text-xs lg:text-base">...</p>
                </button>
                <svg
                  className="  size-3 lg:size-6 rotate-0 transform mt-1  block text-black group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </summary>
  
            <Tags />
  
            <Texts />
  
            <Verifi />
  
            <UpImage />
  
            <UpTools />
          </details>
{
  navig?.map((item)=> <AddButton key={"sac2"} title={item} /> ) 

}




          </> : <>
          <details  className="group text-lg relative open:border-skyy open:border rounded-2xl py-2  w-full lg:px-3 my-1"  >
            <summary 
            className="flex  cursor-pointer bg-grayy rounded-2xl py-3 px-4 group-open:bg-white flex-row items-center justify-between  font-normal text-black marker:[font-size:0px]"
            >
              <div className="flex items-center">
                <Image src={dots} alt="dots" className=" h-3 w-2 lg:h-4 lg:w-3" />
                <p className="ml-3  text-xs md:text-sm lg:text-base">
                 {title}
                </p>
              </div>
              <div className="flex items-center ">
              <button  className="right-8 lg:right-16 z-30 hover:bg-zinc-200 hover:rounded-full  rounded-full absolute">
                  <p className=" font-extrabold mx-2 lg:my-1 text-xs lg:text-base">...</p>
                </button>
                <svg
                  className="  size-3 lg:size-6 rotate-0 transform mt-1  block text-black group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </summary>
  
            <Tags />
  
            <Texts />
  
            <Verifi />
  
            <UpImage />
  
            <UpTools />
          </details>
          </>
        }
        
        
    </>
  );
}
