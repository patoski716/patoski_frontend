import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedinIn, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex justify-between">
        {/* Left Section */}
        <div className="flex flex-col">
          {/* Logo and Name */}
          <div className="flex items-center mb-6">
          <img src={logo} alt="" />
          </div>
          {/* About Text */}
          <p className="text-sm max-w-xs">
          As a passionate UI/UX designer, I thrive on crafting intuitive and engaging digital experiences. With a keen eye for detail and a user-first approach, I specialize in transforming complex ideas into seamless, user-friendly interfaces. My mission is to bridge the gap between users and technology, creating designs that not only look great but also function effortlessly.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-lg">
            <FaLinkedinIn />
            </a>
            <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-lg">
            <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex space-x-20">
          <div className="flex flex-col">
            <h3 className="text-orange-500 text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="#service" className="hover:text-orange-500">Service</a></li>
              <li><a href="#" className="hover:text-orange-500">Project</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-orange-500 text-lg font-semibold mb-4">Contact</h3>
            <p>+234-8167000077</p>
            <p>patoski716@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className="text-orange-500 text-lg font-semibold mb-4">Get the latest information</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-orange-500 p-4 rounded-r-full text--lg">
            <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>Copyright© 2024 Patoski. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer