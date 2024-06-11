import Link from 'next/link'
import React from 'react'

export default function AddButton(props) {

  return (
    <>
        
    
        <div className="flex justify-center ">
              <button   className="rounded-full px-3 cursor-pointer relative z-30   text-2xl bg-white border-gray-300 border text-gray-300">
                <Link href={`${props?.title?.place}`}>
                  + 
                </Link>
              </button>
             
          </div>
    
    
    
    
    </>
  )
}
