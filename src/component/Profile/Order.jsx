// Order.jsx
import React from 'react'
import { OrderCard } from './OrderCard'

const Order = () => {
  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        
        {[1, 1, 1, 1].map((item, index) => (
          <OrderCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default Order
