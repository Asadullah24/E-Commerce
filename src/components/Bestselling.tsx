import Image from 'next/image'
import React from 'react'
import tshirt from '../../public/Images/whitet-shirt.jpg'
import blackshirt from '../../public/Images/black t-shirt.jpg'
import BestSellingCard from './BestSellingCard'
import blackheels from '../../public/Images/Blackheels.jpg'
import { Button } from './ui/button'


function Bestselling() {
  const data=[{
    id:1,
    title:"White printed shirt",
    des:"Best Quality T-Shirt",
    src:tshirt,
    alt:"t-shirt",
    price:"150",
    category:"tops",
    slug:"White_T-shirt"
  },{
    id:2,
    title:"black printed shirt",
    des:"Best Quality Black T-Shirt",
    src:blackshirt,
    alt:"Black t-shirt",
    price:"120",
    category:"tops",
    slug:"Black_T-shirt"
  },{
    id:3,
    title:"Black heels",
    des:"Best Quality Black heels",
    src:blackheels,
    alt:"Black Heels",
    price:"200",
    category:"shoes",
    slug:"Black_Shoes"
  }]
  return (
    <section className='mt-[170px]' >
        {/* heading */}
        <div className=" text-center mb-20 ">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-myBlackhead mb-4">
      Best Selling Products
      </h1>
      
      <div className="flex mt-3 justify-center">
        <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* Best Selling */}
    <div className='flex flex-wrap justify-center gap-5 '>
      {data.map((item)=>(
        <BestSellingCard  src={item.src} key={item.id}
        alt={item.alt}
        title={item.title}
        des={item.des}
        price={item.price}
        category={item.category}
        slug={item.slug} />
      ))}

    </div>
    
    </section>
  )
}

export default Bestselling