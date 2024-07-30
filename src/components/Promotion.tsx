import Image from 'next/image'
import React from 'react'
import promotion1 from '../../public/Images/promotion1.jpg'
import promotion2 from '../../public/Images/promotion1.jpg'
function Promotion() {
  return (
    <section className='mt-[170px] mb-[170px]'>
        <div>
        <div className="text-center mb-20 ">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-myBlackhead mb-4">
      Our Promotions
      </h1>
      
      <div className="flex mt-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
        </div >
       <div className=' grid grid-cols lg: grid-cols-2 gap-x-10 '> <div
  className="hero h-[25rem] custom-pr1 mt-6 rounded-xl "
  >
  <div className="hero-overlay bg-opacity-70 rounded-xl hover:opacity-80 duration-300"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20  text-4xl font-semibold tracking-tight first:mt-0 uppercase text-myWhite">Get upto <span className='text-myOrange'>60%</span> off</h1>
      <p className="mb-5 text-myWhite scroll-m-20 text-lg font-semibold tracking-tight">
        Flash Sale, get upto 60% off on Season Variants
      </p>
      
    </div>
  </div>
</div>
<div
  className="hero h-[25rem] custom-pr2 mt-6 rounded-xl  "
  >
  <div className="  hero-overlay bg-opacity-60 rounded-xl hover:opacity-70 duration-300"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20  text-4xl font-semibold tracking-tight first:mt-0 uppercase text-myWhite">Get upto <span className='text-myOrange'>30%</span> off</h1>
      <p className="mb-5 text-myWhite scroll-m-20 text-lg font-semibold tracking-tight">
        Flash Sale, get upto 30% off on New Jewelry Arrivals
      </p>
      
    </div>
  </div>
</div></div>
    </section>
  )
}

export default Promotion