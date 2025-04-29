import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';



const Contacts = () => {
    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16
            lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contacts</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-4'>Let's Talk</h3>
                        <p className='mb-4'>
                            I'm always open to exciting new projects, business partnerships, and collaborations. If you have an idea or opportunity, feel free to reach out, and let's create something amazing together. Whether it's web development, problem-solving, or innovative ideas, I'm ready to collaborate and bring visions to life.
                        </p>
                        <div className='mb-4'>
                            <FaEnvelope className='inline-block text-pink-400 mr-2'></FaEnvelope>
                            <a href="mailto:carabido.carlkien.dll@gmail.com" className='hover:underline'>carabido.carlkien.dll@gmail.com</a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-pink-400 mr-2'></FaPhone>
                            <span>+639692596963</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className='inline-block text-pink-400 mr-2'></FaMapMarkedAlt>
                            <span>Brgy. Ilayang Iyam, Lucena City, Quezon, Philippines</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Your Name</label>
                                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' rows='5'
                                    placeholder='Enter Your Message' />
                            </div>
                            <button className='bg-gradient-to-r from-pink-500 to-purple-800 text-white inline-block transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts