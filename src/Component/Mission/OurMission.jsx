import React from 'react'

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <h1 className='font-bold text-4xl text-center'>Our
          <span className='text-teal-700'>Mission</span></h1>
      </div>
      <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
        {/* Image Section */}
        <div className='w-full md:w-2/4'>
          <img src="/img2.jpg" alt="" className='rounded-lg' />
        </div>
        {/* Content Section */}
        <div className='w-full md:w-2/4 space-y-4'>
          <h1 className='font-bold text-teal-400 text-lg lg:text-3xl'>To create a community where every journey is extraordinary.</h1>
          <h2 className='font-semibold text-lg lg:text-2xl'>Enpower individuals to achieve sustainable mobility solution and  inspire a positive impact  on the environment.</h2>
          <p className='text-sm lg:text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit ullam.</p>
          <p className='text-sm lg:text-base '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime cupiditate earum accusamus, facere accusantium.</p>
        </div>
      </div>
    </div>
  )
}

export default OurMission
