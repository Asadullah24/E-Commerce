'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { Button } from './ui/button'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
function CartCard({src,title,size,price}:{src:string, title:string, size:string, price:number}) {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1)
  }
   function subtract(){
    setCount(count - 1)
  }
  return (
    <div className='flex p-10'>
      {/* Image */}
      <Image src={src} alt={title} width={80} height={80} />
      {/* more info  */}
      <div className='flex px-5 items-center  w-full'>
        {/* title */}
        <div><h2 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead'>
        {title}
        </h2>
        {/* size */}
        <p className='mt-2 text-sm font-semibold leading-none text-myBlackpara/80 line-clamp-1'>size: <span>{size}</span>
        </p>
        {/* Quantity */}
        <div className='mt-3 flex items-center'><Button onClick={subtract} className='group   bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20  font-medium tracking-tight  rounded-xl w-fit h-fit    '><FaMinus className=' w-2  group-hover:text-myOrange duration-300 align-middle '  /></Button>
    <p className='ml-2 mr-2 '>{count}</p>
       <Button onClick={add} className='group   bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20  font-medium tracking-tight  rounded-xl w-fit h-fit    '><FaPlus className=' w-2  group-hover:text-myOrange duration-300 align-middle '  /></Button></div>  <div className='lg:hidden mt-3 flex flex-col  gap-y-4'>
    <h3 className='text-sm font-semibold leading-none text-myBlackhead'>
          Price: ${price}
          
        </h3>
       <FaTrash className='text-base font-semibold leading-none line line-clamp-1 text-red-600 cursor-pointer' />      </div> </div>
       
      
    </div>
    {/* price */}
    <div className='hidden lg:flex flex-col  gap-y-4'>
    <h3 className='text-sm font-semibold leading-none text-myBlackhead'>
          Price: ${price}
          
        </h3>
       <FaTrash className='text-base font-semibold leading-none line line-clamp-1 text-red-600 cursor-pointer' />      </div>
    </div>
      
  )
}

export default CartCard