import React from 'react'
import save from '../../../public/Icon/save.png'
import dots from '../../../public/Icon/dots-vertical.png'
import Image from 'next/image'
import Drop from '../Drop/Drop'
export default function UperBar() {
  return  <>
  <div className='bg-white pb-1  fixed h-auto w-full  z-50'>
    <div className='pt-4 lg:pt-8 pb-4 mx-4 lg:mr-10 lg:ml-24 flex justify-between items-center'>
      <div>
    <p className='text-black lg:text-xl '>
   <span className='font-semibold'>
   DevOps 
    </span> Road Map
    </p>
      </div>

      {/*Drop Down  */}
     




      <div className='flex gap-x-3  mr-10 lg:mr-0 '>
        <button className='bg-skyy group hover:bg-blue-700 px-2 lg:px-5 py-0 lg:py-2 rounded-3xl flex items-center gap-x-2'>
          <Image src={save} alt="roadmap" className=' size-3 lg:size-5 '/>
          <p className='text-xs text-white  pr-1 lg:pr-0 lg:text-base bg-skyy  group-hover:bg-blue-700'>
        Publish
          </p>
        </button>
        <button className='hidden lg:block '>
          <div className='p-2 rounded-full border border-black hover:bg-zinc-100 '>

          <Image src={dots} alt="roadmap" className='size-4 '/>
          </div>
          
        </button>

      </div>

    </div>
    <div className='lg:hidden mb-1'>
    <Drop/>
      </div>

  </div>
  



    
    
    </>
  
}
