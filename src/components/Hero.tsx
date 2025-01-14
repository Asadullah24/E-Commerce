import React from 'react'
import { Button } from './ui/button'
import { AiFillShopping } from "react-icons/ai";
function Hero() {
  return (
    <section className='mb-[100px]'>
        <div
  className="hero min-h-[85vh] custom-image bg-fixed bg-current bg-no-repeat "
 >
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Futuristic <span className='text-myOrange'>Clothes</span> </h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
        Upgrade your wardrobe with Sleek & Stylish Apparels and Top-Notch
        Shoes
      </p>
      <Button className='outline outline-offset-2 outline-1 group
      hover:rounded-3xl duration-300 hover:outline-myOrange '>
      < AiFillShopping className="mr-2 h-6 w-6 text-lg text-myWhite group-hover:text-myOrange duration-300 group-hover:animate-bounce " /> Shop Now
    </Button>
    </div>
  </div>
</div>
    </section>
  )
}

export default Hero