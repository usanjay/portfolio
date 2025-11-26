import React from 'react'
import BubbleBg from './BubblesBg.jsx'
import profile from '../../assets/profile_4k.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBahai } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon.jsx'

function Hero() {
    const isMobile = window.innerWidth < 640;

    return (
        <div className='flex flex-col sm:flex-row-reverse items-center justify-center gap-10 sm:gap-50 p-5 sm:p-10 sm:mt-10'>
            <BubbleBg
                rows={isMobile ? 6 : 10}
                cols={isMobile ? 8 : 14}
            />

            <div>
                <div className=" duration-300 ease-in rounded-full hover:scale-105 active:scale-105 sm:grayscale 
                sm:hover:grayscale-0 mt-4 relative">
                    <div className='gradient-bg-color w-full h-full absolute -z-1 scale-105 rounded-full blur opacity-50'></div>
                    <img src={profile} alt="profile picture of sanjay"
                        className="z-1 w-50 sm:w-70 rounded-full border-5 border-gray-100
                      duration-1000" />
                </div>
                <div className="flex justify-center gap-4 mt-7">
                    <Icon item="github" link="https://github.com/usanjay" />
                    <Icon item="linkedin" link="https://www.linkedin.com/in/usanjay" />
                    <Icon item="twitter" link="https://x.com/usanjay512" />
                </div>
            </div>

            <div className='flex flex-col items-center max-w-md sm:items-start '>
                <div className="duration-400 flex gap-2 items-center justify-center 
                bg-linear-to-r/srgb from-gray-950 to-gray-950 gradient-bg-hover
                text-white rounded-full grayscale-100 hover:grayscale-0 w-fit 
                py-2 px-5 hover:scale-105 active:scale-105 ease-in ">
                    <div className='duration-1000 hover:rotate-90'>
                        <FontAwesomeIcon icon={faBahai} />
                    </div>

                    <div>Available for opportunities</div>
                </div>

                <h1 className='text-4xl font-semibold mt-5 sm:mt-10'>Hi, I'm <span
                    className='gradient-text sm:grayscale-100 sm:hover:grayscale-0'>Sanjay</span>
                </h1>

                <p className='text-gray-800 mt-2 text-xl'>Frontend Developer</p>

                <p className='mt-4 text-justify'>Passionate about creating beautiful, responsive, and user-friendly web applications.
                    Currently seeking opportunities to contribute my skills in React and modern web development.</p>

                <div className='mt-6 flex justify-center gap-4'>
                    <button className="duration-300 ease-in bg-linear-to-r/srgb from-gray-950 to-gray-950 text-white py-2 px-4 rounded-xl border-2 border-gray-950
                        gradient-bg-hover hover:scale-105 active:scale-105 hover:border-white ">
                        Contact Me
                    </button>
                    <button className="bg-white text-black py-2 px-4 rounded-xl border-2 gradient-bg-hover
                        bg-linear-to-r/srgb from-white to-white duration-300 
                        hover:scale-105 active:scale-105 hover:border-white">
                        View Projects
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Hero