'use client'
import React, { useState } from 'react'
import trueMark from '../../../public/Icon/trueMark.png'
import restore from '../../../public/Icon/reset.png'
import Image from 'next/image'

export default function StyleInfo() {
  const [color, setColor] = useState("blue")
  const [second, setSecond] = useState("orange")

  return (
    <>
    <div className='mt-5 mx-2 lg:mx-0'>
        <p className='text-black text-lg lg:text-2xl font-semibold'>
            Roadmap Information & style
        </p>

        <div>
            <div className='mt-4'>
                <label htmlFor="name" className='text-zinc-500 text-xs font-light '>Roadmap name*</label>
                <input id='name' name='name' type="text" defaultValue={"DevOps"} className='text-black w-full border bg-white rounded-xl p-4 focus-within:outline-none mt-1' />
            </div>
      <div className='flex gap-x-3 '>

      <div className='mt-4 w-full'>
       <label htmlFor="duration" className='text-zinc-500 text-xs font-light '>Roadmap duration*</label>
        <select name="duration" id="duration" className='text-black bg-white size-14 focus-within:outline-none w-full p-4 rounded-xl '>
            <option value="1:2 Weeks">1:2 Weeks</option>
            <option value="3:4 Weeks" >3:4 Weeks</option>
            <option value="5:6 Weeks"  selected>5:6 Weeks</option>
        </select>
            </div>

            <div className='mt-4 w-full'>
       <label htmlFor="duration" className='text-zinc-500 text-xs font-light '>Roadmap icon</label>
        <select name="duration" id="duration" className='text-black bg-white size-14 focus-within:outline-none w-full p-4 rounded-xl bg-[url("/Icon/Frame.png")] bg-no-repeat bg-center bg-position pl-10 '>
            <option value="1:2 Weeks" selected> Example Icon</option>
        </select>
            </div>
            




      </div>

      <div className='mt-4'>
                <label htmlFor="name" className='text-zinc-500 text-xs font-light '>Roadmap description*</label>
                <textarea id='name' name='name' type="text" defaultValue={"description"} className=' w-full border bg-white rounded-xl p-4 focus-within:outline-none mt-1 text-zinc-500 h-44' />
            </div>




        </div>

{/* style */}
<div className='my-2 w-full flex flex-col items-center lg:items-start '>
 <p className='text-black text-base lg:text-xl font-semibold'>
            Roadmap  style
        </p>
        <div>

        
<div className='my-3 flex gap-x-3 items-center  '>
  <div className='flex items-center '>
    
<p className='text-black text-sm'>
  Main Color :
</p>
  </div>
  <div className=' flex  items-center'>



  <div onClick={() => setColor("gray")} className={color == "gray" ?'bg-white cursor-pointer border border-gray-300 rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-gray-300 rounded-full inline-flex justify-center'>
      {
        color == "gray" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>


    <div onClick={() => setColor("blue")} className={color == "blue" ?'bg-white cursor-pointer border border-skyy rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-skyy rounded-full inline-flex justify-center'>
      {
        color == "blue" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>


    <div onClick={() => setColor("orange")} className={color == "orange" ?'bg-white cursor-pointer border border-[#FF9900] rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-[#FF9900] rounded-full inline-flex justify-center'>
      {
        color == "orange" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>
  
    <div onClick={() => setColor("red")} className={color == "red" ?'bg-white cursor-pointer border border-red-600 rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-red-600 rounded-full inline-flex justify-center'>
      {
        color == "red" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>


    

    <div onClick={() => setColor("dark")} className={color == "dark" ?'bg-white cursor-pointer border border-gray-800 rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-gray-800 rounded-full inline-flex justify-center'>
      {
        color == "dark" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>

    

  </div>
  <div>
</div>
  </div>

  <div className='my-3 flex gap-x-3 items-center  '>
  <div className='flex items-center '>
    
<p className='text-black text-sm'>
  Main Color :
</p>
  </div>
  <div className=' flex  items-center'>



  <div onClick={() => setSecond("gray")} className={second == "gray" ?'bg-white cursor-pointer border border-gray-300 rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-gray-300 rounded-full inline-flex justify-center'>
      {
        second == "gray" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>


    <div onClick={() => setSecond("blue")} className={second == "blue" ?'bg-white cursor-pointer border border-skyy rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-skyy rounded-full inline-flex justify-center'>
      {
        second == "blue" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>


    <div onClick={() => setSecond("orange")} className={second == "orange" ?'bg-white cursor-pointer border border-[#FF9900] rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-[#FF9900] rounded-full inline-flex justify-center'>
      {
        second == "orange" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>
  
    <div onClick={() => setSecond("red")} className={second == "red" ?'bg-white cursor-pointer border border-red-600 rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-red-600 rounded-full inline-flex justify-center'>
      {
        second == "red" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>


    

    <div onClick={() => setSecond("dark")} className={second == "dark" ?'bg-white cursor-pointer border border-gray-800 rounded-full inline-flex  p-1': ' cursor-pointer  rounded-full inline-flex  p-1' }>
    <div className='size-6 bg-gray-800 rounded-full inline-flex justify-center'>
      {
        second == "dark" ? <Image src={trueMark} alt="trueMark"  /> : <></>
      }
    </div>
    </div>

    

  </div>
  <div>
</div>
  </div>


</div>

</div>


{/* Restore */}

<div className=' pt-3 border-t border-gray-300 mt-2'>
<div onClick={() =>{
   setColor("blue")
  setSecond("orange")
   }} className="w-auto cursor-pointer   inline-flex items-center gap-x-1">
              
              <Image src={restore} alt="restore" className="size-5" />
            <div>
              <p className="text-skyy">Reset style defaults</p>
            </div>
            
          </div>

</div>
    </div>
    
    
    </>
  )
}
