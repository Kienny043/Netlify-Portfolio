import React from 'react'

const services = [
    { id: 1, title: "Frontend Development", description: "Building modern and responsive web interfaces using ReactJS and TailwindCSS." },
    { id: 2, title: "UI/UX Implementation", description: "Turning designs into clean and user-friendly interfaces with a focus on usability." },
    { id: 3, title: "Problem Solving", description: "Applying critical thinking to solve logical and technical challenges efficiently." },
    { id: 4, title: "Backend Integration", description: "Connecting frontend applications to backend services and APIs." },
    { id: 5, title: "Responsive Web Design", description: "Making sure websites look great and work smoothly across all devices." },
    { id: 6, title: "API Handling", description: "Fetching, sending, and managing data between client and server for dynamic web applications." }
]

const Services = () => {
    return (
        <div className='bg-black text-white py-20' id='services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform, transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-800'>
                                {service.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-800'>
                                {service.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>{service.description}</p>
                            <a href="#" className='mt-4 inline-block text-pink-400 hover:text-purple-500'>Read More</a>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services