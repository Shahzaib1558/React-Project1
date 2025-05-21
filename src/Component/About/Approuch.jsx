import React from 'react'

const Approuch = () => {
  return (
    <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14 '>
      {/* Content Section  */}
      <div className='w-full md:w-2/4 space-y-4'>
        <h1 className='text-4xl font-bold'>Our <span>Approuch</span></h1>
        <h2 className='font-semibold text-lg lg:text-2xl'>Enpower individuals to achieve sustainable mobility solutions and  inspire a positive impact on the environment.</h2>
        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam, voluptates et eaque cupiditate reiciendis .</p>
        <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto iste corrupti, quisquam placeat ab amet ut autem quibusdam debitis ratione voluptatum accusantium non deleniti ex, nulla labore voluptate.</p>
      </div>
      {/* image section */}
      <div className='w-full md:w-2/5'>
        <img src="/cu.webp" alt="img" className='rounded-lg' />
      </div>
    </div>
  )
}

export default Approuch
