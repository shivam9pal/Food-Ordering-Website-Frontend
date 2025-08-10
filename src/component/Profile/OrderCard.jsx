// OrderCard.jsx
import { Card, Button } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-5'>
        <img
          className='h-16 w-16'
          src="https://cdn.pixabay.com/photo/2022/06/27/05/37/biryani-7286737_1280.jpg"
          alt=""
        />
        <div>
          <p>Biryani</p>
          <p>399</p>
        </div>
      </div>
      <div>
        <Button className='cursor-not-allowed'>Completed</Button>
      </div>
    </Card>
  )
}
