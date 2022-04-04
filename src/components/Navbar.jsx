import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../Assets/logo.png'

const Navbar = () => {
  const[nav, setNav] = useState(false)
  const handleclick = () =>setNav(!nav)

  
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />


        </div>
{/*menu */}

        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/*Hamburger*/}
        <div onClick= {handleclick} className='md:hidden z-10'>
         {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}

        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            
        </div>

        {/*social icons*/}
        <div className='flex fixed flex-col top-[35%] left-0'></div>

    </div>
  )
}

export default Navbar