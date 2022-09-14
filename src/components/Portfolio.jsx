import React from 'react'
import { Nav } from '.'
import { Socials } from './Home'
import { motion } from 'framer-motion'

const Portfolio = () => {

    const works = [
        {
            title: 'ARTISAN',
            subtitle: 'UI + WEB DESIGN + MOBILE APP + PROTOTYPE',
            description: 'A platform created to link craftment to potential clients.',
            link: 'https://www.behance.net/gallery/148334541/ARTISAN',
        },
        {
            title: 'VR Design show room.',
            subtitle: 'WEB DESIGN.',
            description: 'A 3d design show room showcasing NIKE and Adidas products and also bitcoin purchase options.',
            link: 'https://www.behance.net/gallery/150916823/AR-DESIGNER-SHOWROOM',
        },
        {
            title: 'Powertrack',
            subtitle: 'UI + MOBILE APP + PROTOTYPE',
            description: 'A platforn that helps prepaid users Track,recharge their electricity meters on their mobile devices.',
            // link: 'https://www.behance.net/gallery/148334541/ARTISAN',
        },
        {
            title: 'PAYEASY',
            subtitle: 'UI + MOBILE APP + PROTOTYPE',
            description: 'Payeasy enables user to send,receive and transact in BITCOIN, virtualcard and user to user cash transfers options.',
            link: 'https://www.behance.net/d_syndicate',
        },

    ]

    return (
        <div className='lg:h-screen'>
            <Nav />
            <section className='flex flex-col-reverse lg:flex-row lg:justify-evenly justify-between items-center lg:px-10 '>
                <Socials xValue={0} yValue={-100} />
                <div className='flex justify-between flex-wrap items-center gap-4 lg:gap-10 w-4/5'>
                    {/* <p className='text-[12px] font-bold'>FREELANCING</p> */}
                    {works.map((work, index) => (
                        // <a href={work.link} key={index} className='w-96 border border-[#FFFFFF24] rounded-md py-[24px] px-[21px] w-[400px] h-[220px] flex flex-col justify-between font-poppins hover:shadow-lg hover:scale-110'></a>
                        <motion.div key={index}
                            className='w-96 border border-[#FFFFFF24] rounded-md py-[24px] px-[21px] w-[400px] h-[220px] flex flex-col justify-between font-poppins'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className='text-[23px]'>{work.title}</h1>
                            <h2 className='text-[13px] font-bold'>{work.subtitle}</h2>
                            <p className='text-[14px]'>{work.description}</p>
                            <a href={work?.link} className='w-[140px] bg-white text-ogpBlue px-3 rounded-md lg:text-[12px] text-[10px] font-bold py-1 hover:scale-110 hover:shadow-lg'>VIEW ON BEHANCE</a>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Portfolio