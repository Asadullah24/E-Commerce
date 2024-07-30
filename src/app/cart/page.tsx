import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import React from 'react'

function Cart() {
  return (
    <section className='mx-6 mt-[30px] mb-[100px]'>
     <div className='grid grid-cols-1 lg:grid-cols-3'>
        {/* items */}
        <div className='col-span-2'>
            <CartCard src='/Images/Tops.jpg' title='Ladies overcoat' size='L' price={150} />
        </div>
        {/* summary */}
        <div className='bg-myBlackhead/5 p-5 rounded-xl'>
            <h2 className='text-myBlackhead scroll-m-20 text-lg font-semibold tracking-tight uppercase'>
                Order Summary
            </h2>
            <div className="divider mt-0 mb-1"></div>
            {/* price */}
            <div className='text-base font-medium tracking-tight text-myBlackpara'>
            <div className='flex items-center justify-between capitalize'>
                <h2>sub total</h2>
                <h2>$300</h2>

            </div>
            </div>
            {/* delivery */}
            <div className='text-base font-medium tracking-tight text-myBlackpara'>
            <div className='flex items-center justify-between capitalize'>
                <h2>delivery charges</h2>
                <h2>TBD</h2>

            </div>
            </div>
            {/* sales tax */}
            <div className='text-base font-medium tracking-tight text-myBlackpara'>
            <div className='flex items-center justify-between capitalize'>
                <h2>sales tax</h2>
                <h2>TBD</h2>

            </div>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* Estimated charges */}
            <div className='text-base font-medium tracking-tight text-myBlackpara'>
            <div className='flex items-center justify-between font-semibold tracking-tight uppercase'>
                <h2>estimated total</h2>
                <h2>$300</h2>

            </div>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* Button */}
            <div className='flex items-center justify-center  w-full'>
               <Button className='bg-myBlackhead text-myWhite hover:bg-transparent duration-300
               hover:text-myBlackhead scroll-m-20 font-semibold tracking-tight rounded-xl hover:shadow-md uppercase'>
                Proceed to checkout
               </Button>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* note */}
            <p className='text-sm font-semibold tracking-tight text-myBlackhead w-[97%] text-center italic'>
                {`* Sales Tax and the Delivery charges will calculated in the checkout page `}
            </p>
        </div>
     </div>
    </section>
  )
}

export default Cart