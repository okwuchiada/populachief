import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Header = () => {

    return (
        <div className="px-8 py-6 flex justify-between items-center w-full">
            <div className="nav-logo"
                animate={{ x: 100 }}
                transition={{ delay: 1, duration: 2 }}
            >
                <Link to='/' className='font-semibold text-[26px]'>Popularchief.</Link>
            </div>


            <div className="nav-links w-1/4 px-4 flex justify-between items-center">
                <NavLink to="/home" className={({ isActive }) =>
                    isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out '}>Home</NavLink>
                <NavLink to="/work" className={({ isActive }) =>
                    isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out '}>Work</NavLink>
                <NavLink to="/resume" className={({ isActive }) =>
                    isActive ? 'active' : 'inactive cursor-pointer font-montserrat text-[14px] mb-3 hover:scale-125 transition-all duration-200 ease-in-out '}>Resume</NavLink>
            </div>
        </div>
    )
}

export default Header