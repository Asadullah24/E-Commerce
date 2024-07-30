'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function SlugComponent() {
    const [path, setpath] =useState("")
  return (
    <div className='mt-10' >
        <Image src={path ? path :'/Images/Blackheels.jpg'} alt='Black-Heels ' width={400} height={400} className='h-[400px]'  />
        <div className='flex items-center justify-evenly mx-auto mt-4'>
            <div className='cursor-pointer w-16 h-16' >
                <Image onClick={()=>{setpath('/Images/black t-shirt.jpg')}} src={'/Images/black t-shirt.jpg'} alt='t-shirt' width={60} height={60}/>
            </div>
            <div className='cursor-pointer w-16 h-16 '>
                <Image onClick={()=>{setpath('/Images/whitet-shirt.jpg')}} src={'/Images/whitet-shirt.jpg'} alt='t-shirt' width={60} height={60}/>
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image onClick={()=>{setpath('/Images/Tops.jpg')}} src={'/Images/Tops.jpg'} alt='t-shirt' width={60} height={60}/>
            </div>
           

        </div>
    </div>
    
  )
}

export default SlugComponent