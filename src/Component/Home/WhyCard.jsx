import React from 'react'

const WhyCard = ({icon , title}) => {
  return (
    <div className="text-center p-8 bg-slate-200 hover:bg-teal-900 hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
        <p >{icon}</p>
        <h1 className='text-teal-400 text-3xl  font-bold'>{title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Dolor ipsum vero laboriosam velit earum unde? Facilis
              excepturi iusto inventore ea vitae minima quia
             beatae deleniti, animi est nulla. Ipsa, consequatur!</p>
      
    </div>
  )
}

export default WhyCard
