'use client'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tshirt from '../../public/Images/t-shirt1.jpg'
import blackshirt from '../../public/Images/black t-shirt.jpg'
import blackheels from '../../public/Images/Blackheels.jpg'
import overcoat from '../../public/Images/Tops.jpg'
import BestSellingCard from './BestSellingCard';

function Featuredproducts() { 
    var settings = {
      dots: true,
      arrows:false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows:false,
            }
          }
        ]
      };
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
      },{
        id:4,
        title:"Overcoat",
        des:"Best Quality Overcoat",
        src:overcoat,
        alt:"overcoat",
        price:"500",
        category:"shoes",
        slug:"Black_Shoes"
      },]
  return (
    <section className='mb-[100px]'>
       {/* Heading */}
       <div className=" text-center mb-20 ">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-myBlackhead mb-4 text-center capitalize">
      Featured Products
      </h1>
      
      <div className="flex mt-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* Carousal */}
    <div className="slider-container">
      <Slider {...settings}>
     
      {data.map((item)=>(
        <BestSellingCard  src={item.src} key={item.id}
        alt={item.alt}
        title={item.title}
        des={item.des}
        price={item.price}
        category={item.category}
        slug={item.slug} />
      ))}

    
      </Slider>
    </div>
    </section>
  )
}

export default Featuredproducts