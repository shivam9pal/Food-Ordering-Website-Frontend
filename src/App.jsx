import { useState } from 'react'

import './App.css'
import { Navbar } from './component/Navbar/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DarkTheme } from './Theme/DarkTheme.jsx/DarkTheme'


function App() {
  

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Navbar/>
       
     
    </ThemeProvider>
  )
}

export default App
