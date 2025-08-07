import { Divider } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'

const items=[1,1]
export const Cart = () => {
  return (
    <div>
<main className='lg:flex justify-between'>
    <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
      {items.map((item)=><CartItem/>)}
      <Divider/> 
      <div className='billDetails  px-5 text-sm'>
        <p className='font-extralight py-5'>Bill Details</p>
        <div className='space-y-3'>
          <div className='flex justify-between text-gray-400'>
            <p>Item Total</p>
            <p>₹ 599</p>

          </div>
          <div className='flex justify-between text-gray-400'>
            <p>Delivery Fee</p>
            <p>₹ 21</p>

          </div>
          <div className='flex justify-between text-gray-400'>
            <p>GST & Restaurant Charges</p>
            <p>₹ 99</p>
          </div>
          <Divider/> 
        </div>
        <div className='flex justify-between text-gray-400'>
          <p>Total Pay</p>
          <p> ₹234</p>
        </div>
      </div>
    </section>
    <Divider orientation='vertical' flexItem/>
    <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
      <div>
        <h1 className='text-center font-semibold text-2xl py-10'>
          Choose Delivery Adress  </h1>
          <div className='flex gap-5 flex-wrap justify-center '>

          </div>
      </div>
    </section>
    
</main>
    </div>
  )
}
  