import React from 'react'
import { Nav } from '.'
import { FaArrowsAltH, FaBehance, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BiArrowToBottom } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <Nav />
            <section className='font-poppins lg:pl-[100px] px-4 py-4'>
                <div className='flex justify-between items-center'>
                    <div className='lg:w-2/3 w-full flex flex-col justify-between lg:h-[150px]'>
                        <h1 className='lg:text-[37px] text-[26px]'>Ijoma Peculiar</h1>
                        <h2 className='text-[15px] mt-1 lg:mt-0'>Product Designer</h2>
                        <p className='text-[14px] mt-1 lg:mt-0'>
                            I am a product designer, passionate about design as a life style also looking to
                            add team work and design knowledge to produce good user interfaces and experiences.
                        </p>
                    </div>
                    <div className='w-1/3 border-l border-[#FFFFFF24] px-4 flex h-[150px] lg:flex hidden'>
                        <div className='flex flex-col justify-between'>
                            <h3>Connect with me</h3>
                            <div className='flex justify-between'>
                                <a href='https://www.linkedin.com/in/ijoma-peculiar-72b559242' className='text-[30px] hover:scale-110 hover:shadow-lg'><FaLinkedin /></a>
                                <a href='https://www.behance.net/d_syndicate' className='text-[30px] hover:scale-110 hover:shadow-lg'><FaBehance /></a>
                                <a href='https://twitter.com/alias_bankz' className='text-[30px] hover:scale-110 hover:shadow-lg'><FaTwitter /></a>
                            </div>
                            <a href="mailto:ijomapeculiar@gmail.com">ijomapeculiar@gmail.com</a>
                            <div className='mt-2 flex items-center'>
                                <span className='text-lg'><BiArrowToBottom /></span>
                                {/* <a href="http://"></a> */}
                                <a href="chrome://external-file/Peculiar_Ijoma_CV%202.PDF" target={'_blank'} rel="noreferrer" className='border rounded-sm px-2 ml-2 py-[2px] text-[12px]'>Download Resume</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/contact-image.svg" alt="contact me" />
                        </div>

                    </div>

                </div>
                <div className='mt-6'>
                    <div className='flex items-center mb-1 border-b lg:border-none'>
                        <h3>Core Design Tools</h3>
                        <div className='w-80 bg-[#FFFFFF24] h-[0.5px] ml-3 lg:block hidden'></div>
                    </div>
                    <p className='flex uppercase items-center'>Figma<span className='text-lg mx-1'><FaArrowsAltH /></span>Adobe</p>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center mb-1 border-b lg:border-none'>
                        <h3>Core Design Skills</h3>
                        <div className='w-80 bg-[#FFFFFF24] h-[0.5px] ml-3 lg:block hidden'></div>
                    </div>
                    <p className='lg:w-[60%] w-full text-[12px]'>Visual design, Mockups and prototypes, Design process, Product concepts, UI design, UX design, User research Communication and Teamwork, Problem-solving.
                    </p>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center mb-1 border-b lg:border-none'>
                        <h3>Personal Projects</h3>
                        <div className='w-80 bg-[#FFFFFF24] h-[0.5px] ml-3 lg:block hidden'></div>
                    </div>
                    <ul className='list-disc text-[14px] mt-2'>
                        <li> Artisan web</li>
                        <li>Artisan Mobile application</li>
                        <li>Alert Emergency response app  </li>
                        <li>VR Design show room.</li>
                        <li>Powertrack</li>
                        <li>Money finance app.</li>
                    </ul>

                    <p className='text-[14px] mt-4'>Links to my work can be found<Link to='/work' className='px-2 hover:scale-110 font-semibold'>here.</Link> More details can be provided upon request.</p>
                </div>
                <div className='flex flex-col justify-between lg:hidden mt-4 h-[150px]'>
                    <h3>Connect with me</h3>
                    <div className='flex justify-between'>
                        <a href='https://www.linkedin.com/in/ijoma-peculiar-72b559242' className='text-[30px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaLinkedin /></a>
                        <a href='https://www.behance.net/d_syndicate' className='text-[30px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaBehance /></a>
                        <a href='https://twitter.com/alias_bankz' className='text-[30px] hover:scale-110 hover:shadow-lg' target={'_blank'} rel="noreferrer"><FaTwitter /></a>
                    </div>
                    <a href="mailto:ijomapeculiar@gmail.com" target={'_blank'} rel="noreferrer">ijomapeculiar@gmail.com</a>
                    <div className='mt-2 flex items-center'>
                        <span className='text-lg'><BiArrowToBottom /></span>
                        {/* <a href="http://"></a> */}
                        <a href="chrome://external-file/Peculiar_Ijoma_CV%202.PDF" target={'_blank'} rel="noreferrer" className='border rounded-sm px-2 ml-3 py-[2px] text-[12px]'>Download Resume</a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact