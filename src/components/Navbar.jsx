import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
    
    <nav className="bg-black text-white p-4 rounded-[60px] w-[1240px] h-[100px] mx-auto mt-8">
        <div className="flex justify-between items-center h-full mx-10">
          {/* Left Links (Home and Service) */}
          <div className="flex space-x-16">
            <a href= "" className="w-[141px] flex items-center justify-center text-xl font-semibold leading-8 bg-[var(--Primary-Normal)] p-3 rounded-[32px]">
              Home
            </a>
            <a href= "" className="w-[141px] flex items-center justify-center text-xl font-semibold leading-8 hover:bg-[var(--Primary-Normal)] p-3 rounded-[32px]">
              Service
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex-grow flex justify-center">            
                <img src={logo} alt="" />
          </div>

          {/* Right Links (Project and Contact) */}
          <ul className="flex space-x-16">
            <li><a href="#" className="w-[141px] flex items-center justify-center text-xl font-semibold leading-8 hover:bg-[var(--Primary-Normal)] p-3 rounded-[32px]">Project</a></li>
            <li><a href="#" className="w-[141px] flex items-center justify-center text-xl font-semibold leading-8 hover:bg-[var(--Primary-Normal)] p-3 rounded-[32px]">Contact</a></li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar