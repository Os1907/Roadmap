'use client';

import { usePathname } from 'next/navigation';
import React from 'react'
 
import logo from '../../../public/Icon/logo.png'
import pin from '../../../public/Icon/pin.png'
import whitepin from '../../../public/Icon/whitePin.png'
import dol from '../../../public/Icon/dol.png'
import color from '../../../public/Icon/color.png'
import whiteColor from '../../../public/Icon/whiteColor.png'
import setting from '../../../public/Icon/se.png'
import qu from '../../../public/Icon/ques.png'
import Image from 'next/image'
import Link from 'next/link'


export default function SideBar() {
   
 
    let currentPage = usePathname();
    if(currentPage == '/' || currentPage == '/addpost') {
      currentPage = "/home"
    }
  return (
    <>
      <aside className="bg-[#FFFFFF] h-screen  border-r border-gray-200 lg:block z-50 fixed left-0 hidden">
        <div className="px-6 py-8  ">
          <Image src={logo} alt="roadmap" className="size-6 "/>
        </div>
        <div className="my-4 flex items-center flex-col justify-between h-[85%]  w-full ">
          <div className="flex items-center justify-between flex-col   w-full ">

            
          <Link href={`home`} className={ currentPage =="/home" ? 'bg-[#506CF0] rounded-full p-2 my-3 ' :'hover:bg-[#506CF0] hover:rounded-full p-2 my-3' }>
                    
                    <Image src={ currentPage =="/home" ? whitepin : pin  } alt="roadmap"   className="size-6 "/>
                    
                  </Link>

                  

                  <Link href={`color`} className={ currentPage =="/color" ? 'bg-[#506CF0] rounded-full p-2 my-3 ' :'hover:bg-[#506CF0] hover:rounded-full p-2 my-3' }>
                    
                    <Image src={ currentPage =="/color" ? whiteColor : color  } alt="roadmap"   className="size-6 "/>
                    
                  </Link>



             <Link href={``} className='hover:bg-[#506CF0] hover:rounded-full p-2 my-3'>
                    
                    <Image src={dol} alt="roadmap"   className="size-6 "/>
                    
                  </Link>


                  <Link href={``} className='hover:bg-[#506CF0] hover:rounded-full p-2 my-3'>
                    
                    <Image src={setting} alt="roadmap"   className="size-6 "/>
                    
                  </Link>
            
                    
               
          </div>
          <div className="mb-8">
            <Link href="">
              <Image src={qu} alt="roadmap" className="size-8" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
