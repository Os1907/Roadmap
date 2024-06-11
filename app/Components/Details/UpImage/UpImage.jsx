import React from 'react'

import upload from "../../../../public/Icon/upload/Group 1000013824.png";
import upload2 from "../../../../public/Icon/upload/Group 1000013823.png";
import upload3 from "../../../../public/Icon/upload/Rectangle 1.png";
import upload4 from "../../../../public/Icon/upload/Rectangle 2.png";
import upload5 from "../../../../public/Icon/upload/Rectangle 4.png";
import Image from 'next/image';

export default function UpImage() {
    const loadImage = [
        {
          loadImage: upload,
          id: "l1",
        },
        {
          loadImage: upload2,
          id: "l2",
        },
        {
          loadImage: upload3,
          id: "l3",
        },
        {
          loadImage: upload4,
          id: "l4",
        },
        {
          loadImage: upload5,
          id: "l5",
        },
  
    ]
  return (
    <>
    
    <div className="flex my-2 gap-x-3 mx-2 lg:mx-0 pl-2 lg:px-4 ">
                  {
                    loadImage.map((item)=> <Image key={item.id} src={item.loadImage} alt="image" className="size-10 lg:size-9 xl:size-12 2xl:size-14 cursor-pointer " />)
                  }
              </div>
    
    
    
    </>
  )
}
