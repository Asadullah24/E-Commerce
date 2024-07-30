'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from 'react'
import SlugComponent from '@/components/SlugComponent'

function Slug() {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1)
  }
   function subtract(){
    setCount(count - 1)
  }
  return (
    
      <section className=" -mt-10   text-gray-600 body-font overflow-hidden ">
  <div className="flex items-center container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      {/* <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="" width={100} height={100}/> */}
      <SlugComponent  />
      <div className="ml-10 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="scroll-m-20 text-base font-semibold tracking-tight">Women Tops</h2>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead mt-3">White Printed Tee</h1>
        <div className="rating rating-sm mt-2">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>

        <p className="leading-relaxed mt-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackpara">Best Quality White T-Shirt. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5  mb-5">
          <div className="flex">
            <span className="mr-3scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead ">Color</span>
            
            <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6  active:border-black focus:border-black"></button>
            <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6  active:border-black focus:border-black"></button>
            <button className="border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6  active:border-black focus:border-black"></button>
            <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6  active:border-black focus:border-black"></button>
           
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Size</span>
            <div className="relative">
            
  
  <select className="select select-bordered ">
    <option disabled selected>Select Size</option>
    <option>SM</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
    <option>XXL</option>
  </select>
  

             
            </div>
          </div>
        </div>
        <div className="flex items-center">
        <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Quantity</span>
        <Button onClick={subtract} className='group   bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20  font-medium tracking-tight  rounded-xl w-fit h-fit    '><FaMinus className=' w-4  group-hover:text-myOrange duration-300 align-middle '  /></Button>
    <div className='ml-2 mr-2 scroll-m-20 text-lg font-semibold tracking-tight'>{count}</div>
        <Button onClick={add} className='group  bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20  font-medium tracking-tight rounded-xl w-fit h-fit  '><FaPlus className=' w-4  group-hover:text-myOrange duration-300' /></Button>
        </div>
        <div className="divider"></div>
        <div className=" flex items-center justify-between">
          <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead">$58.00</span>
          <Button className='group  bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20  font-semibold tracking-tight rounded-xl  '><FaShoppingCart className='mr-2 w-5  group-hover:text-myOrange duration-300' /> Add to Cart</Button>
          
        </div>
        <Button className='group mt-4 w-full  bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20 text-base font-semibold tracking-tight rounded-xl  '><FaHeart  className='mr-2 w-5 h-5 group-hover:text-myOrange duration-300' /> Buy Now</Button>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Slug