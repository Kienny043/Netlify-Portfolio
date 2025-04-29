import React from 'react'
import AngBida from '../assets/hero.png'

const Landing = () => {
    return (
        <div className='bg-black text-white text-center py-16 '>
            <img src={AngBida} alt="Photo of Carabz" className='mx-auto mb-8 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
            <h1 className='text-4xl leading-tight font-bold '>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-800'>Carl Kien Carabido</span>
                , An Aspring Full-Stack Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>I specialize in logical thinking and backend development.</p>
            <div className='mt-8 space-x-4'>
                <a href="#contact">
                    <button className='bg-gradient-to-r from-pink-500 to-purple-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me!</button>
                </a>

                <a href="#projects">
                    <button className='bg-gradient-to-r from-pink-500 to-purple-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Projects
                    </button>
                </a>

            </div>

        </div>
    )
}

export default Landing