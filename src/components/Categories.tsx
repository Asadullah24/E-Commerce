import Image from 'next/image'
import React from 'react'
import Tops from '../../public/Images/Tops.jpg'
import pants from  '../../public/Images/pants.jpg'
import Accessories from '../../public/Images/Accessories.jpg'
import Shoes from '../../public/Images/shoe.jpg'
import Link from 'next/link'

function Categories() {
  return (
    <section className='mb-[100px]'>
        <div>
        <div className="text-center mb-20 ">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-myBlackhead mb-4">
      Our Categories
      </h1>
      
      <div className="flex mt-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
        </div >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'> 
        {/* Category1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10  mx-auto group relative  '>
            <Link href={'/tops'}><Image alt='Tops' src={Tops}
            width={350}
            height={350}
            className='h-full rounded-xl group-hover:scale-125 duration-500' />
            <div className='absolute -bottom-24 group-hover:bottom-0 duration-500
             scroll-m-20 text-4xl font-bold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
          <h1 className='   uppercase'>Tops</h1>
        </div></Link>
        </div>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10  mx-auto group relative  '>
           <Link href={'/pants'}> <Image alt='pants' src={pants} 
            width={350}
            height={350}
            className='h-[467px] rounded-xl group-hover:scale-125 duration-500' />
            <div className='absolute -bottom-24 group-hover:bottom-0 duration-500
             scroll-m-20 text-4xl font-bold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
          <h1 className='   uppercase'>pants</h1>
        </div></Link>
        </div>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10  mx-auto group relative  '>
            <Link href={'/shoes'}><Image alt='pants' src={Shoes} 
            width={350}
            height={350}
            className='h-[467px] rounded-xl group-hover:scale-125 duration-500' />
            <div className='absolute -bottom-24 group-hover:bottom-0 duration-500
             scroll-m-20 text-4xl font-bold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
          <h1 className='   uppercase'>shoes</h1>
        </div></Link>
        </div>
       < div className='mb-7 lg:mb-0 overflow-hidden z-10  mx-auto group relative  '>
            <Link href={'/accessories'}><Image alt='pants' src={Accessories} 
            width={350}
            height={350}
            className='h-[467px] rounded-xl group-hover:scale-125 duration-500' />
            <div className='absolute -bottom-24 group-hover:bottom-0 duration-500
             scroll-m-20 text-4xl font-bold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
          <h1 className='   uppercase'>Accessories</h1>
        </div></Link>
        </div>
        
        </div>
    </section>  )
}

export default Categories