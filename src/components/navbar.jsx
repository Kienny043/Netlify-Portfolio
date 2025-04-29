import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'><a href="#">Kienny</a></div>
        <div className='space-x-6'>
          <a href="#" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About</a>
          <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
        </div>
        <a href="#contact">
          <button className='bg-gradient-to-r from-pink-500 to-purple-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Hire Me!</button>
        </a>

      </div>
    </nav>
  )
}

export default Navbar