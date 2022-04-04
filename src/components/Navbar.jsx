import React from 'react'
import {faBars, faTimes} from 'react-icons/fa'
import Logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />


        </div>
{/*menu */}

        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/*Hamburger*/}
        <div>

        </div>

        {/* Mobile Menu */}

        <div>
            
        </div>

    </div>
  )
}

export default Navbar