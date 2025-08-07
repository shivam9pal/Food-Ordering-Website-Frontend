import { useState } from 'react'

import './App.css'
import { Navbar } from './component/Navbar/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DarkTheme } from './Theme/DarkTheme.jsx/DarkTheme'
import Home from './component/Navbar/Home/Home'
import { RestaurantDetails } from './component/Restaurant/REstaurantDetails'
import { Cart } from './component/Cart/Cart'



function App() {
  

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
      <RestaurantDetails/> 
      <Cart/>   
     
    </ThemeProvider>
  )
}

export default App
