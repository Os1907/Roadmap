import React from "react";
import flag from "../../../public/Icon/flag.png";
import check from "../../../public/Icon/true.png";
import not from "../../../public/Icon/notrue.png";
import sett from "../../../public/Icon/sett.png";
import iconTime from "../../../public/Icon/time-line.png";
import play from "../../../public/Icon/buttonBar/Group.png";
import img from "../../../public/Icon/buttonBar/Image icon.png";
import line from '../../../public/Icon/line.png';
import Play2 from '../../../public/Icon/bi_play.png'

import Image from "next/image";

export default function Preview(props) {



  return (
    <>
      <div className=" bg-[#F6F6F6] repet relative h-auto ">

            <button className="absolute top-4 right-8 bg-white z-20 rounded-full p-1">

            <Image src={Play2} alt="playMap" className=" size-7    "/>
            </button>



{
    props?.road.length > 2 ? <Image
                        src={line}
                        alt="line"
                        className="absolute  left-1/2 z-0 lg:min-h-screen md:min-h-[600px] lg:top-10 top-5 w-[2px] "
                      /> : ""
}
      



        <div className="flex items-center flex-col relative z-10">
          <button className="bg-[#FF9900] px-4 my-4   rounded-3xl ">
            <div className=" flex items-center py-1">
              <Image src={flag} alt="roadmap" className="size-4 " />
              <p className=" text-white text-sm mx-1">DevOps 🚀</p>
            </div>
          </button>

          
          {props?.road?.map(item =>  <>
                <div className="bg-white mb-4 py-2 px-2 lg:px-5 rounded-lg border min-w-72 lg:min-w-96">
                  <div className="flex gap-x-1  items-center ">
                    <div className={`size-3 rounded-sm ${item.colorBg}`}></div>
                    <p className="text-black text-xs lg:text-sm font-medium lg:mx-1">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2 ">
                    <div className="flex items-center lg:mt-2  ">
                      <Image
                        src={iconTime}
                        alt="roadmap"
                        className=" size-3 lg:size-4 "
                      />
                      <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                        {item.day}
                      </p>
                    </div>

                    <div className="flex gap-x-2 lg:gap-x-4 items-center justify-between  ">
                      {item.checked ? (
                        <div className="flex items-center   ">
                          <Image
                            src={check}
                            alt="roadmap"
                            className="w-2 h-3 lg:w-3 lg:h-4 "
                          />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            {item.checkTitle}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.notComp ? (
                        <div className="flex items-center   ">
                          <Image
                            src={not}
                            alt="roadmap"
                            className="w-2 h-3 lg:w-3 lg:h-4 "
                          />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            {item.notTitle}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.sett ? (
                        <div className="flex items-center  ">
                          <Image src={sett} alt="roadmap" className="size-3 " />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            {item.numerSet}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.play ? (
                        <div className="flex items-center  ">
                          <Image src={play} alt="roadmap" className="size-3 " />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            1
                          </p>
                        </div>
                      ) : (
                        ""
                      )}

                      {item.img ? (
                        <div className="flex items-center  ">
                          <Image src={img} alt="roadmap" className="size-3 " />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            2
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {item.complete ? (
                    <>
                      <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
                      <div className="bg-skyy rounded-lg py-2 cursor-pointer  w-full flex justify-center mt-2">
                        <p className="text-white ">Complete assignment</p>
                      </div>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </>
          
         )}

{
    props.stages?  props.stages.map(()=>{
        return <>
        
        <div className="flex w-full items-center my-2 pl-3">
            <p className="text-gray-500 text-xs ">🔶 Stage One 😎 🔥</p>
            <div className="h-[1px] w-[60%] sm:w-[80%]  lg:w-[70%] xl:w-[78%] ml-auto bg-[#FF9900] inline"></div>
          </div>
        </>
    }) : ""
}



          





          { props?.road2?.map( item => <>
                <div className="bg-white mb-4 py-2 px-2 lg:px-5 rounded-lg border min-w-72 lg:min-w-96">
                  <div className="flex gap-x-1  items-center ">
                    <div className={`size-3 rounded-sm ${item.colorBg}`}></div>
                    <p className="text-black text-xs lg:text-sm font-medium lg:mx-1">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2 ">
                    <div className="flex items-center lg:mt-2  ">
                      <Image
                        src={iconTime}
                        alt="roadmap"
                        className=" size-3 lg:size-4 "
                      />
                      <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                        {item.day}
                      </p>
                    </div>

                    <div className="flex gap-x-2 lg:gap-x-4 items-center justify-between  ">
                      {item.checked ? (
                        <div className="flex items-center   ">
                          <Image
                            src={check}
                            alt="roadmap"
                            className="w-2 h-3 lg:w-3 lg:h-4 "
                          />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            {item.checkTitle}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.notComp ? (
                        <div className="flex items-center   ">
                          <Image
                            src={not}
                            alt="roadmap"
                            className="w-2 h-3 lg:w-3 lg:h-4 "
                          />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            {item.notTitle}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.sett ? (
                        <div className="flex items-center  ">
                          <Image src={sett} alt="roadmap" className="size-3 " />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            {item.numerSet}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      {item.play ? (
                        <div className="flex items-center  ">
                          <Image src={play} alt="roadmap" className="size-3 " />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            1
                          </p>
                        </div>
                      ) : (
                        ""
                      )}

                      {item.img ? (
                        <div className="flex items-center  ">
                          <Image src={img} alt="roadmap" className="size-3 " />
                          <p className="text-gray-500 text-xs lg:text-sm  mx-1">
                            2
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {item.complete ? (
                    <>
                      <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
                      <div className="bg-skyy rounded-lg py-2 cursor-pointer  w-full flex justify-center mt-2">
                        <p className="text-white ">Complete assignment</p>
                      </div>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </>
            
          )}


        </div>
      </div>
    </>
  );
}
