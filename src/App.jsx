import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import OurCars from './Component/OurCars'
import Services from './Component/Services'

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/aboutus'  element={<AboutUs/>}/>
          <Route path='/ourcars'  element={<OurCars/>}/>
          <Route path='/services'  element={<Services/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App

