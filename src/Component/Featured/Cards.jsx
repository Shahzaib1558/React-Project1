import React from 'react'

const Cards = ({id , image , name , price}) => {
  return (
    <div className='border-3 border-teal-700 bg-slate-100 text-black rounded-xl hover:bg-slate-200 mb-2 cursor-pointer hover:scale-95 transition duration-200 ease-linear ' key={id}>
         <div>
            <img src={image} alt="img"  className='w-fit rounded-t-xl'/>
         </div>
         <div className='flex flex-col justify-center items-center'>
              <h1 className='font-semibold text-xl text-teal-700 pt-2 '>{name}</h1>
              <div className='flex gap-10 pt-2'>
               <h2 className='font-medium text-lg '> Starting at ${price}</h2>
              </div>
         </div>
    </div>
  )
} 

export default Cards
