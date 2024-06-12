'use client'
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'
import pin from '../../../public/Icon/pin.png'
import whitepin from '../../../public/Icon/whitePin.png'
import dol from '../../../public/Icon/dol.png'
import color from '../../../public/Icon/color.png'
import whiteColor from '../../../public/Icon/whiteColor.png'
import setting from '../../../public/Icon/se.png'
import qu from '../../../public/Icon/ques.png'
import { usePathname } from 'next/navigation'
export default function Drop() {
    const [isOpen, setOpen] = useState(false)
    const [display, setdisplay] = useState(true)
    let currentPage = usePathname();
    if(currentPage == '/' || currentPage == '/addpost') {
      currentPage = "/home"
    }
  return (
    <>
    <div className=''>
    
    
        <div onClick={()=>setdisplay(false)} className=' mr-3  flex justify-end lg:hidden z-[1223213]  fixed  right-0 top-2'>
    
        <Hamburger toggled={isOpen} toggle={setOpen}  size={20} color='#506CF0'  />
        </div>
        {
            isOpen? 
            <div className="flex items-center justify-center gap-x-3    w-full ">

            
            <Link href={`home`} className={ currentPage =="/home" ? 'bg-[#506CF0] rounded-full p-2 my-3 ' :'hover:bg-[#506CF0] hover:rounded-full p-2 my-3' }>
                      
                      <Image src={ currentPage =="/home" ? whitepin : pin  } alt="roadmap"   className="size-5 "/>
                      
                    </Link>
  
                    
  
                    <Link href={`color`} className={ currentPage =="/color" ? 'bg-[#506CF0] rounded-full p-2 my-3 ' :'hover:bg-[#506CF0] hover:rounded-full p-2 my-3' }>
                      
                      <Image src={ currentPage =="/color" ? whiteColor : color  } alt="roadmap"   className="size-5 "/>
                      
                    </Link>
  
  
  
               <Link href={``} className='hover:bg-[#506CF0] hover:rounded-full p-2 my-3'>
                      
                      <Image src={dol} alt="roadmap"   className="size-5 "/>
                      
                    </Link>
  
  
                    <Link href={``} className='hover:bg-[#506CF0] hover:rounded-full p-2 my-3'>
                      
                      <Image src={setting} alt="roadmap"   className="size-5 "/>
                      
                    </Link>

            <Link href="">
              <Image src={qu} alt="roadmap" className="size-5" />
            </Link>
                      
                 
            </div> : <></>
        
        }
        </div>
        
        
        
        </>
  )
}
