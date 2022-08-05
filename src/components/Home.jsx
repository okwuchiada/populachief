import React from 'react'
import { FaBehance, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BsPlay } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Nav } from '.'

export const Socials = ({ xValue, yValue }) => {
    const handles = [
        {
            name: 'Twitter',
            icon: <FaTwitter />,
            link: 'https://twitter.com/alias_bankz'
        },
        {
            name: 'Behance',
            icon: <FaBehance />,
            link: 'https://www.behance.net/d_syndicate'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/ijoma-peculiar-72b559242'
        },

    ]
    return (
        <div
            className='flex flex-col'
        >
            {handles.map((link, index) => (
                <motion.a
                    href={link.link}
                    key={index}
                    animate={{ x: xValue, y: yValue }}
                    transition={{ delay: 1, duration: 2 }}
                    className='mb-6 text-[23px]'
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
    )
}

const Home = () => {


    return (
        <div className='h-full'>
            <Nav />
            <section className='bg-ogpBlue h-[70%] flex items-center justify-evenly'>
                <Socials xValue={100} yValue={0} />
                <div className='flex items-center w-1/2'>
                    <div>
                        <img src="/images/hero-image.svg" alt="" className='object-cover w-96' />
                    </div>
                    <div>
                        <motion.h2 initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='font-bold text-[37px]'>Hello, I'm Ijoma Peculiar.</motion.h2>
                        <p className='text-[20px] ml-3 font-poppins'>I'm a Product designer. I create awesome
                            UI/UX designs using amazing platforms like,
                            Figma and Adobe.</p>

                        <Link to='/work' className='bg-[#0077B6] py-2 px-3 rounded-lg flex items-center mt-8 w-max'>Check out my projects  <span className='text-[18px]'><BsPlay /></span></Link>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Home