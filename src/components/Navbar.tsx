import React from 'react'
import Link from 'next/link'
import { NavigationMenuDemo } from './navlinks'
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import ecommerce from '../../public/Images/E-Commerce-Logo-Design-PNG.png'
function Navbar() {
  return (
    <div className="navbar bg-myWhite">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-2xl lg:hidden">
      <GiHamburgerMenu />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
      <li>
        <details>
          <summary>Womens</summary>
          <ul className="p-2">
            <li><Link href={'/tops'}>Tops</Link></li>
            <li><Link href={'/pants'}>Pants</Link></li>
            <li><Link href={'/accessories'}>Accessories/Jewelry</Link></li>
            <li><Link href={'/shoes'}>Shoes</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={'#'}>About</Link></li>
      <li><Link href={'#'}>Contact</Link></li>
      </ul>
    </div>
   <Image src={ecommerce} alt='logo' width={100} height={100} className='w-[80px]'/>
  </div>
  <div className="navbar-center ">
    <div className='hidden lg:flex'>
      <NavigationMenuDemo />
    </div>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end  ">
     <Link href={'/cart'}> <div tabIndex={0} role="button" className="pr-4 cursor-pointer group ">
        <div className="indicator  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 group-hover:text-myOrange duration-300 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item font-semibold bg-myOrange text-myWhite group-hover:text-myWhite group-hover:bg-myBlackhead duration-300">0</span>
        </div>
      </div></Link>
      
    </div>
  </div>
</div>
  )
}

export default Navbar