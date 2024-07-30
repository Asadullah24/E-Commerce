import Image from 'next/image'
import React from 'react'
import Delivery from '../../public/Images/delivery-van.png'
import Customer from '../../public/Images/customer-service.png'
import Cashback from '../../public/Images/cashback.png'

function Services() {
  return (
    <section className='mb-[100px]'>
        <section className=" body-font">
  <div className="container px-5  mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-myBlackhead mb-4">
        Our Services
      </h1>
      
      <div className="flex mt-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center group ">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4  flex-shrink-0  ">
          <Image alt='Delivery' src={Delivery}   />
        </div>
        <div className="flex-grow">
          <h2 className=" text-myBlackhead scroll-m-20 mb-2 text-2xl font-semibold tracking-tight first:mt-0 group-hover:text-myOrange duration-300">
            Free Delivery
          </h2>
          <p className="scroll-m-20 text-myBlackpara group-hover: text-myBlackpara/80 font-semibold tracking-tight leading-relaxed text-base">
           Free Delivery on Order Above $25
          </p>
          
        </div>
      </div>
      <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center group ">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4  flex-shrink-0  ">
          <Image alt='Delivery' src={Customer}   />
        </div>
        <div className="flex-grow">
          <h2 className=" text-myBlackhead scroll-m-20 mb-2 text-2xl font-semibold tracking-tight first:mt-0 group-hover:text-myOrange duration-300">
            24/7 Customer Service
          </h2>
          <p className="scroll-m-20 text-myBlackpara group-hover: text-myBlackpara/80 font-semibold tracking-tight leading-relaxed text-base">
           For Queries and Questions Feel Free to Connect with us
          </p>
          
        </div>
      </div>
      <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center group ">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4  flex-shrink-0  ">
          <Image alt='Delivery' src={Cashback}   />
        </div>
        <div className="flex-grow">
          <h2 className=" text-myBlackhead scroll-m-20 mb-2 text-2xl font-semibold tracking-tight first:mt-0 group-hover:text-myOrange duration-300">
            Cash Back Guarantee
          </h2>
          <p className="scroll-m-20 text-myBlackpara group-hover: text-myBlackpara/80 font-semibold tracking-tight leading-relaxed text-base">
           Get Cashback Guarantee on damaged Products
          </p>
          
        </div>
      </div>


    </div>
    
  </div>
</section>

    </section>
  )
}

export default Services