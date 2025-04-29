import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>Kienny</h3>
                        <p className='text-gray-400'>Based in Lucena City, Philippines — available for remote work and collaborations worldwide.</p>
                    </div>
                </div>

                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-400'>
                        &copy; {new Date().getFullYear()}
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a href="https://www.facebook.com/share/19nktxNqMo/" target='_blank' rel='noreferrer' className='flex space-x-4 my-4 md:my-0'>
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/Kienny043" target='_blank' rel='noreferrer' className='flex space-x-4 my-4 md:my-0'>
                            <FaGithub />
                        </a>
                        <a href="https://x.com/CarabidoCa24503?t=wLTpovkpL59CliKq1SiSSQ&s=09" target='_blank' rel='noreferrer' className='flex space-x-4 my-4 md:my-0'>
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/crlknny?igsh=MWxrY3kzY3l6aXA5cA=="
                            target='_blank' rel='noreferrer' className='flex space-x-4 my-4 md:my-0'>
                            <FaInstagram />
                        </a>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Privacy
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white'>Terms of Agreements</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer