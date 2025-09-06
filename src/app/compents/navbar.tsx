import React from 'react'
import Image from "next/image";

export default function navbar() {
  return (
    <div  className="   bg-red-600 h-15 pr-10 pl-10  justify-between flex text-white "  >
     <h1 className='text-yellow-300  flex rounded font-semibold'>
       <Image
        src="/travada.png"
        alt="travada.png logo"
        width={60}
        height={20}
        priority
        />
       </h1>
     <div className="flex  ">
       <button className='text-red-600 bg-orange-400 hover:text-yellow-300 font-semibold h-15 pr-10 pl-10 rounded-full'>Log in/Sign in</button>
            
        <div className='text'></div>
     </div>
    </div>
  )
}
