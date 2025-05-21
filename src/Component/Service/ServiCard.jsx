import React from 'react'

const ServiCard = ({icon , title}) => {
  return (
    <div className='text-center p-8 bg-slate-100 border-3 border-teal-400 hover:bg-teal-800 transition duration-300 ease-in-out rounded-md cursor-pointer '>
         <p>{icon}</p>
         <h1 className='text-teal-400 text-3xl font-bold'>{title}</h1> 
         <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ut sit autem. Nemo nesciunt deserunt harum ducimus et asperiores dicta ea magnam labore error dolore quis id rerum, qui fugit pariatur doloremque amet. Quaseum.</p>

    </div>
  )
}

export default ServiCard
