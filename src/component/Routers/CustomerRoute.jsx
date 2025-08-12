import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { RestaurantDetails } from '../Restaurant/REstaurantDetails'
import { Cart } from '../Cart/Cart'
import Profile from '../Profile/Profile'
import { Home } from '@mui/icons-material'
import { Auth } from '../Auth/Auth'

export const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile/>}/>
      </Routes>
      <Auth/>

     
    </div>
  )
}
