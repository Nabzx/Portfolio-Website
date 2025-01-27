import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'motion/react'

const Work = (isDarkMode) => {
    const [selectedProject, setSelectedProject] = useState(null)

    const handleProjectClick = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
       <motion.h2
       initial={{y:-20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       transition={{delay: 0.5, duration: 0.5}}
       className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

       <motion.p
       initial={{opacity: 0}}
       whileInView={{opacity: 1}}
       transition={{delay: 0.7, duration: 0.5}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my tech projects. Explore a collection of projects showcasing my expertise in different aspects of Computer Science.</motion.p>
    
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.9, duration: 0.6}}
    className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{scale: 1.05}}
            transition={{duration:0.3}}
            key={index}
            onClick={() => handleProjectClick(project)}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>Find out more</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>    
            </motion.div>
        ))}
    </motion.div>

    {/* <motion.a
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay:1.1, duration: 0.5}}
    href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more
         <Image src={isDarkMode ? assets.right_arrow_bold_dark: assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </motion.a> */}

    {selectedProject && (
        <div className = "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className='bg-white dark:bg-darkTheme p-8 rounded-xl shadow-2xl w-[90%] max-w-lg md:max-w-2xl lg:max-w-3xl h-[80vh] flex flex-col justify-between relative transition-all transform-scale-100'>
                <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-3xl font-bold hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-4">{selectedProject.title}</h2>
                <div className='flex items-center justify-center flex-grow mb-4 gap-6'>
                    <Image 
                        src={selectedProject.bgImage}
                        alt={selectedProject.title}
                        className='rounded-lg shadow-lg max-w-full h-auto'
                        width={200}
                        height={100} 
                    />
                    <a href={selectedProject.githubLink} target='_blank' rel='noopener noreferrer' className=' flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105'>
                        <Image src={assets.profile_img} alt='GitHub Profile' className='w-10 rounded-full'/>
                    </a>
                </div>
                <div className='overflow-y-auto max-h-[35vh] px-2'>
                    <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center'>{selectedProject.description}</p>
                </div>
                <div className='flex justify-center mt-6'>
                    <button
                    onClick={closeModal}
                    className='px-6 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full shadow-md hover:bg-gray-900 dark:hover:bg-gray-300 transition'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )}
    
    </motion.div>
  )
}

export default Work
