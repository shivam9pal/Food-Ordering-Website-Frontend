import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfileNavigaton from './ProfileNavigaton'
import UserProfile from './UserProfile'
import Address from './Address'
import Favorite from './Favorite'

import Events from './Events'
import Order from './Order'

// Import your actual page components




const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false)

  // Define handleClose
  const handleClose = () => setOpenSideBar(false)

  return (
    <div className='lg:flex justify-between'>
      <div className='sticky h-[80vh] lg:w-[20%]'>
        <ProfileNavigaton open={openSideBar} handleClose={handleClose}/>
      </div>
      <div className='lg:w-[80%]'>
        <Routes>
          <Route path='/' element={<UserProfile/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/address' element={<Address/>} />
          <Route path='/favorites' element={<Favorite/>} /> 
          <Route path='/events' element={<Events/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile
