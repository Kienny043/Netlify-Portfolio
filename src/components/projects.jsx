import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Kienny043/repos');
                setRepos(response.data);
            } catch (error) {
                console.error('Failed to fetch repos:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {repos.map((repo, index) => (
                        <div key={repo.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500'>
                                {index + 1}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500'>
                                {repo.name}
                            </h3>
                            <p className='mt-2 text-gray-300'>
                                {repo.description ? repo.description : "No description provided."}
                            </p>
                            <div className='mt-4 flex gap-4'>
                                <a
                                    href={repo.html_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-pink-400 hover:text-purple-500'
                                >
                                    View Repo
                                </a>
                                {repo.homepage && (
                                    <a
                                        href={repo.homepage}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-400 hover:text-green-300'
                                    >
                                        View Site
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Projects;
