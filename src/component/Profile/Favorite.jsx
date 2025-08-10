import React from 'react'
import { RestaurantCard } from '../Restaurant/RestaurantCard'

const Favorite = () => {
  return (
    <div>
      <h1 className='py-5 font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-1 justify-center'>
        {[1,1,1,1].map((item, idx)=><RestaurantCard key={idx}/>)}

      </div>
    </div>
  )
}

export default Favorite