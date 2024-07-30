'use client'
import React from 'react'
import tshirt from '../../../public/Images/whitet-shirt.jpg'
import blackshirt from '../../../public/Images/black t-shirt.jpg'
import BestSellingCard from '@/components/BestSellingCard'
import { useAppSelector } from '../store/hooks'
function Page() {
  const product = useAppSelector((state)=> state.product)
  console.log(product)
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
    title:"White printed shirt",
    des:"Best Quality T-Shirt",
    src:tshirt,
    alt:"t-shirt",
    price:"150",
    category:"shoes",
    slug:"Shoes"
  }]
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className="text-center mb-20 ">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-myBlackhead mb-4 capitalize">
      tops
      </h1>
      
      <div className="flex mt-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* products */}
    <div className='flex flex-wrap justify-center gap-10'>
      {data.map((item)=>(
        <BestSellingCard src={item.src} key={item.id}
        alt={item.alt}
        title={item.title}
        des={item.des}
        price={item.price}
        category={item.category}
        slug={item.slug} />
      ))}

    </div>
    </div>
  
  )
}

export default Page