import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black text-white'>
          <div className='h-screen container flex flex-col justify-center md:flex-row items-center '>
              {/* content Section */}

              <div className='w-full md:w-2/4 space-y-5 mt-10'>
                   <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>Find Your Perfect Ride Today</h1>
                     <p className='text-lg lg:text-2xl font-medium'>Over 1000+ New Cars Available Hero</p>
                     <p className='text-sm lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing
                         elit. At, officiis! Sunt, sit magnam est rerum consectetur 
                         ipsam tempora asperiores atque.</p>
                         <div className='flex gap-8'>
                          <button className='bg-teal-800 py-1 px-4  border-2  rounded-md hover:scale-95 hover:bg-teal-300 transition duration-150 ease-linear'>Explorer more</button>
                          <button className='bg-teal-800 py-1 border-2  px-4 rounded-md hover:scale-95 hover:bg-teal-300 transition duration-150 ease-linear'>See Cars</button>
                         </div>
              </div>
               {/* image section */}
          <div className='w-full md:w-2/4  mt-4'>
            <img src="/ban3.jpg" alt="" />
          </div>
          </div>

    </div>
  )
}

export default Hero
