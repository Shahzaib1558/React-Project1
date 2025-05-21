import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu, setMenu] = React.useState(false);

  const handleChange = () => {
    setMenu(!menu);

  }







  return (
    <header className=' fixed w-full z-10  bg-teal-800 text-white py-2'>
      {/* desktop navigation section */}
      <nav className=' container flex justify-between items-center '>
        <div className='flex items-center gap-2' >
          {/* Company Logo */}
          <img src="/img1.png" className='w-18 rounded-full px-1' alt="" />
            <span  className='font-bold text-2xl '>KYISHELL</span>
        </div>
        <div className='hidden md:flex items-center gap-6 font-medium text-xl'>
          <Link to="/" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>Home</Link>
          <Link to="/aboutus" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>About Us</Link>
          <Link to="/ourcars" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>Our Cars</Link>
          <Link to="/services" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>Services</Link>


          <button className='hidden lg:flex border-2 text-xl px-4 py-1 rounded-md hover:bg-teal-400 transition duration-200 ease-linear'>Sign In</button>
        </div>

        <div className='md:hidden flex items-center'>
          {menu ?
            <AiOutlineClose size={25} onClick={handleChange} /> : <RiMenuUnfoldFill size={25} onClick={handleChange} />


          }
        </div>
      </nav>


      {/* Responsive Section */}

      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute  bg-teal-800 text-white left-0 top-12 font-semibold text-2xl text-center pt-8 pb-4 gap-8  w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>
        <Link to="/" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>Home</Link>
          <Link to="/aboutus" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>About Us</Link>
          <Link to="/ourcars" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>Our Cars</Link>
          <Link to="/services" className='hover:text-teal-300 transition duration-200 ease-linear font-bold'>Services</Link>
          
         <div>
           <button className='border-2 px-4 py-1 rounded-md hover:bg-teal-400 '>Sign In</button>
         </div>

      </div>

    </header>
  )
}

export default Navbar
