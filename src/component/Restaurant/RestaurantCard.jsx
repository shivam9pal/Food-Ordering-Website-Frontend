import { Card, Chip, IconButton, FormControlLabel, Radio } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {
  const isOpen = true; // replace with your logic
  const isFav = true;  // replace with your logic
  const foodType = [
    { value: 'indian', label: 'Indian' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'italian', label: 'Italian' },
  ]; // replace with your logic

  return (
    <Card className=' w-[18rem]'>
      <div className={`${isOpen ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img className='w-full h-[10rem] rounded-t-md object-cover'
          src="" alt="" />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={isOpen ? "success" : "error"}
          label={isOpen ? "open" : "closed"}
        />
      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>
            Indian Fast Food
          </p>
          <p className='text-gray-500 text-sm'>
            Craving it all? Dive into our global fla...
          </p>
        </div>
        <div>
          <IconButton>
            {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
      <div>
        {foodType.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </div>
    </Card>
  )
}
