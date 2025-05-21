import React from 'react'
import Vision from './Vision'
import Approuch from './Approuch'

const About = () => {
  return (
    <div className='container pt-24'>
     <div className=''>
         <h1 className='font-bold text-4xl text-center'>About <span className='text-teal-700'>US</span></h1>
     </div>


      <Vision/>
      <Approuch/>

    </div>
  )
}

export default About
