import React from 'react'

const Vision = () => {
    return (
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16 '>
            {/* Image Section */}
            <div className='w-full md:w-2/5'>
                <img src="./visi.jpg" alt="" className='rounded-lg' />
            </div>

            {/* Content Section  */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='text-4xl font-bold'>Our vision</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>Enpower individuals to achieve sustainable mobility solutions and  inspire a positive impact on the environment.</h2>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam, voluptates et eaque cupiditate reiciendis .</p>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto iste corrupti, quisquam placeat ab amet ut autem quibusdam debitis ratione voluptatum accusantium non deleniti ex, nulla labore voluptate.</p>
            </div>
        </div>
    )
}

export default Vision
