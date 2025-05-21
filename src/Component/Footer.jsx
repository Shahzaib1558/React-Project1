import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-12 bg-teal-800 x'>
        <div className='flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5 '>
            <div className='w-full md:w-1/4 '>
                <h3 className='font-semibold text-2xl pb-4'>
                    KYISHELL
                </h3>
                <p className='mb-2 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium minima consequatur quidem soluta iure facilis ea aliquam ex maxime ipsam veritatis ab vero, eos voluptatem delectus nam amet sapiente.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-6 '>Pages Links</h1>
                   <div className='flex flex-col gap-2 font-medium'>
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'> Home</Link>
                     <Link to="/aboutus" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>About Us</Link>
                     <Link to="/ourcars" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>Our Cars</Link>
                     <Link to="/services" className= 'hover:translate-x-3 transition duration-200 ease-linear font-bold'>Services</Link>
                    </div>      
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-6 '>Use Cars for sale</h1>
                <div className='flex flex-col gap-2 font-medium'>
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Toyota Camry</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Suzuki</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    KIA Sportage</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Doodge Chlanger</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Honda Civic</Link> 

            </div>
            </div>
                <div>
                    <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-6 '>Learn More</h1>
                    <div className='flex flex-col gap-2 font-medium'>
                         <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Usre-Friendly</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Search & Filter</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    Secure Payment</Link> 
                    <Link to="/" className='hover:translate-x-3 transition duration-200 ease-linear font-bold'>
                    GeoLocation Services</Link> 
                    </div>
                </div>
        </div>
         <div>
            <p className='text-center py-4'>
                @copyright developed by <span className='text-teal-400 font-semibold mx-2'>IYI Programmer</span> All rights reserved.
            </p>
                    
         </div>
    </footer>
  )
}

export default Footer
