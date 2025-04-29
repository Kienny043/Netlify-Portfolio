import React from 'react'
import AkoItuu from '../assets/normal.png'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16
            lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AkoItuu} alt="Photo of Carabz" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            I’m a second-year BSIT student at Dalubhasaan ng Lungsod ng Lucena, aspiring to become a full-stack developer who specializes in critical thinking and solving logical problems.
                        </p>
                        <div className='space-y-4'>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <label htmlFor="tailwind" className="sm:w-2/12 mb-1 sm:mb-0">
                                    ReactJS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-800 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <label htmlFor="tailwind" className="sm:w-2/12 mb-1 sm:mb-0">
                                    TailwindCSS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-800 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <label htmlFor="tailwind" className="sm:w-2/12 mb-1 sm:mb-0">
                                    Logical Thinking
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-800 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <label htmlFor="tailwind" className="sm:w-2/12 mb-1 sm:mb-0">
                                    Problem Solving
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-800 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800'>
                                    2
                                </h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800'>
                                    -53
                                </h3>
                                <p>Happiness</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800'>
                                    10+
                                </h3>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About