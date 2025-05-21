import React from 'react'
import Navbar from './Navbar'
import Hero from './Home/Hero'
import Feature from './Featured/Feature'
import WhyUs from './Home/WhyUs'
import OurMission from './Mission/OurMission'
import NewCar from './Home/NewCar'
import Footer from './Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Feature/>
      <WhyUs/>
      <OurMission/>
      <NewCar/>
      <Footer/>
    </>

  )
}

export default Home
