import Image from 'next/image'
import React from 'react'
import btn1 from '../../../../public/Icon/buttonBar/Image icon.png'
import btn2 from '../../../../public/Icon/buttonBar/Group.png'
import btn3 from '../../../../public/Icon/buttonBar/Vector.png'
import btn4 from '../../../../public/Icon/buttonBar/Group-1.png'
import btn5 from '../../../../public/Icon/buttonBar/Gif icon.png'

export default function UpTools() {
    const button = [
        {
          button: btn1,
          id: "t1",
        },
        {
          button: btn2,
          id: "t2",
        },
        {
          button: btn3,
          id: "t3",
        },
        {
          button: btn4,
          id: "t4",
        },
        {
          button: btn5,
          id: "t5",
        }
      ]
  return (
    <>
      <div className="flex pt-2  pb-3 gap-x-4 mx-2 lg:mx-0 pl-2 lg:px-4"> 
              {
                    button.map((item)=> <Image key={item.id} src={item.button} alt="image" className="size-4 cursor-pointer " />)
                  }
            </div>
    
    
    </>
  )
}
