import React from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Button, Card } from '@mui/material';

const AddressCard = ({item, showButton, handleSelectAddress}) => {
  return (
    <Card className='flex gap-5 w-64 p-5'>
      <AddHomeIcon/>
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p>
          Addressssssssssssssssssss
        </p>
        {showButton && (
          <Button
            variant='outlined'
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  )
}

export default AddressCard