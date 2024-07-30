import React from 'react'
import { Button } from './ui/button'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

function BestSellingCard({src,alt,title,des,price,category,slug}:{src:any,alt:string,title:string,des:string,price:string,category:string , slug:string}) {
  return (
    
    <div className="max-w-[350px] h-[33rem] p-4 mx-auto shadow-md rounded-lg relative
    group">
  <div className='block  h-[20rem] rounded-lg overflow-hidden'>
   <Link href={`/${category}/${slug}`}> <Image alt={alt} src={src}
    width={400}
    height={400}
    className='h-[375px] rounded' /></Link>
  </div>
  <div className='mt-4'>
    {title && (<h2 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 line-clamp-1 text-myBlackhead'>{title}</h2>)}
    {des && (<p className=' mt-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackpara'>{des}</p>)}
    {price && (<p className='mt-2 scroll-m-20 text-lg font-semibold tracking-tight text-myBlackhead'>${price}</p>)}
  </div>
  <div>
    <Button className='group  bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2 '><FaShoppingCart className='mr-2 w-4 h-4 group-hover:text-myOrange duration-300' /> Add to Cart</Button>
   <Button className='group  bg-myBlackhead hover:bg-transparent duration-300 text-myWhite
    hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2 '><FaHeart  className='mr-2 w-4 h-4 group-hover:text-myOrange duration-300' /> Buy Now</Button> 
  </div>
</div> 
    
  )
}

export default BestSellingCard