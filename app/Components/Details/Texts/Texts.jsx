import Image from 'next/image'
import React from 'react'
import ico1 from "../../../../public/Icon/input/symbol.png";
import ico2 from "../../../../public/Icon/input/symbol-1.png";
import ico3 from "../../../../public/Icon/input/symbol-2.png";
import ico4 from "../../../../public/Icon/input/symbol-3.png";
import ico5 from "../../../../public/Icon/input/symbol-4.png";
import ico6 from "../../../../public/Icon/input/symbol-5.png";
import ico7 from "../../../../public/Icon/input/symbol-6.png";
import ico8 from "../../../../public/Icon/input/symbol-7.png";
import ico9 from "../../../../public/Icon/input/symbol-8.png";
import ico10 from "../../../../public/Icon/input/symbol-9.png";
export default function Texts() {
    const inpIcons = [
        { icon: ico1, id: "b1" },
        { icon: ico2, id: "b2" },
        { icon: ico3, id: "b3" },
        { icon: ico4, id: "b4" },
        { icon: ico5, id: "b5" },
        { icon: ico6, id: "b6" },
        { icon: ico7, id: "b7" },
        { icon: ico8, id: "b8" },
        { icon: ico9, id: "b9" },
        { icon: ico10, id: "b10" },
      ];
  return (
    <>
    
    
    <div className=" pl-2 lg:my-3 rounded-2xl border border-zinc-300  lg:px-4 py-2 mx-2  ">
              <div className="h-auto">
                <input
                  type="text"
                  placeholder="Example Headline"
                  // value={"Example Headline"}
                  className="focus:outline-none  bg-transparent w-full text-black placeholder:text-black placeholder:text-base text-base py-1 font-medium ml-1"
                />
                <div className="text-black text-sm w-full h-32 overflow-scroll">
                  
                 <textarea name=""  id=""
                  className="focus:outline-none min-h-24 lg:min-h-28    bg-transparent w-full text-black placeholder:text-xs placeholder:lg:text-base  text-xs lg:text-base"
                  defaultValue={`A programming roadmap serves as an essential  guide for individuals navigating the complex and dynamic field of software development. It delineates a clear path, breaking down the learning process into manageable steps that build upon each other. A programming roadmap serves as an essential `}

                  >
          
                  </textarea>
                  <input
                  type="text"
                  placeholder="Headline Example text"
                  className="focus:outline-none  bg-transparent  placeholder:text-black placeholder:text-base  w-full text-black text-base pb-2 placeholder:text-xs placeholder:lg:text-base font-medium "
                />
                </div>
               
                
              </div>
              {/* textIcon */}
              <div className="bg-grayy h-auto flex flex-wrap justify-center items-center gap-x-1 mx-2 lg:mx-0">
                {inpIcons.map((item) => (
                  <button key={item.id}>
                    <Image
                      src={item.icon}
                      alt="icon"
                      className="size-7 lg:size-9 "
                    />
                  </button>
                ))}
              </div>
              {/* END textIcon */}
            </div>
    
    
    
    </>
  )
}
