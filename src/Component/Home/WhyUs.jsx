import React from 'react'
import { FaUser } from 'react-icons/fa';
import { SiWebmoney } from "react-icons/si";
import { FaShippingFast } from 'react-icons/fa';
import WhyCard from './WhyCard';

const WhyUs = () => {

    const icon0 = <SiWebmoney className='text-teal-400 mx-auto ' size={48}/>
    const icon1 = <FaUser className='text-teal-400 mx-auto ' size={48}/>
    const icon2 = <FaShippingFast  className='text-teal-400 mx-auto ' size={48}/>
  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10 ">
         <h1 className='font-bold text-4xl text-center'>Why Us <span className='text-teal-600'>KYISHELL</span>?</h1>
         <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quasi, obcaecati qui possimus repellat.</p>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10  gap-5 px-30 '>
            <WhyCard icon={icon0} title="Financing Options"/>
            <WhyCard icon={icon1} title="Satisfied Customers"/>
            <WhyCard icon={icon2} title="Fast & Reliable Shipping"/>
         </div>
    </div>
  )
}

export default WhyUs
