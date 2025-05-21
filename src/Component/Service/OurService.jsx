import React from 'react'
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import { GiCarWheel } from "react-icons/gi";
import ServiCard from './ServiCard';

const OurService = () => {
  const icon1 = <GiCarWheel  className='text-teal-400 mx-auto' size={48}/>
  const icon2 = <SiGoogleearthengine className='text-teal-400 mx-auto' size={48} />
  const icon3 = <MdDesignServices  className='text-teal-400 mx-auto' size={48}/>
  const icon4 = <IoSettings className='text-teal-400 mx-auto' size={48}/>
  const icon5 = <FaCar className='text-teal-400 mx-auto' size={48}/>
  const icon6 = <SiCoronaengine className='text-teal-400 mx-auto' size={48}/>

  return (
    <div>
      <div className='container pt-24'>
        <h1 className='font-bold text-4xl text-center '>Our
          <span className='text-teal-800'> Services</span>
        </h1>
      </div >


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
        <ServiCard icon={icon1} title="tires & wheels" />
        <ServiCard icon={icon2} title="Exhaust System" />
        <ServiCard icon={icon3} title="Cars Maintenance" />
        <ServiCard icon={icon4} title="BraKe Repairs  " />
        <ServiCard icon={icon5} title="Body Services" />
        <ServiCard icon={icon6} title="Engine Services" />

      </div>
    </div>
  )
}

export default OurService
