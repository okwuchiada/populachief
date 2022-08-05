import React from 'react'
import { Nav } from '.'
import { Socials } from './Home'

const Portfolio = () => {

    const works = [
        {
            title: 'ARTISAN',
            subtitle: 'UI + WEB DESIGN + MOBILE APP + PROTOTYPE',
            description: 'A platform created to link craftment to potential clients.',
            link: 'https://www.behance.net/gallery/148334541/ARTISAN',
        },
        {
            title: 'ALERT',
            subtitle: 'UI + MOBILE APP + PROTOTYPE',
            description: 'A platform created for emergency instances helping individuals report emergencies to first responders in few clicks.',
            link: 'https://www.behance.net/gallery/147726561/Alert',
        },
        {
            title: 'CAVE',
            subtitle: 'UI + MOBILE APP + PROTOTYPE',
            description: 'Skincare brand created to help people to find the best skincare products.',
            link: 'https://www.behance.net/gallery/149726677/CAVE-skincare',
        },
        {
            title: 'PAYEASY',
            subtitle: 'UI + MOBILE APP + PROTOTYPE',
            description: 'Payeasy enables user to send,receive and transact in BITCOIN, virtualcard and user to user cash transfers options.',
            link: 'https://www.behance.net/d_syndicate',
        },

    ]

    return (
        <>
            <Nav />
            <section className='flex justify-evenly items-center px-10'>
                <Socials xValue={0} yValue={-100} />
                <div className='flex justify-between flex-wrap items-center gap-4 w-4/5'>
                    {/* <p className='text-[12px] font-bold'>FREELANCING</p> */}
                    {works.map((work, index) => (
                        // <a href={work.link} key={index} className='w-96 border border-[#FFFFFF24] rounded-md py-[24px] px-[21px] w-[400px] h-[220px] flex flex-col justify-between font-poppins hover:shadow-lg hover:scale-110'></a>
                        <div key={index} className='w-96 border border-[#FFFFFF24] rounded-md py-[24px] px-[21px] w-[400px] h-[220px] flex flex-col justify-between font-poppins'>
                            <h1 className='text-[23px]'>{work.title}</h1>
                            <h2 className='text-[13px] font-bold'>{work.subtitle}</h2>
                            <p className='text-[14px]'>{work.description}</p>
                            <a href={work.link} className='w-[140px] bg-white text-ogpBlue px-3 rounded-md text-[12px] font-bold py-1 hover:scale-110 hover:shadow-lg'>VIEW ON BEHANCE</a>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Portfolio