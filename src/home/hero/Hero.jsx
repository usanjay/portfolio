import React from 'react'
import BubbleBg from './BubblesBg.jsx'
import AppButton from '../../components/AppButton.jsx'
import profile from '../../assets/profile_4k.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBahai } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon.jsx'

function Hero() {
    return (
        <div className='flex flex-col sm:flex-row-reverse items-center sm:justify-between 
        md:justify-center gap-10 md:gap-50  px-5 py-8 sm:p-10 mt-14'>
            <BubbleBg />

            <div className=''>
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

            <div className='flex flex-col items-center sm:w-60 md:w-sm min-w-3 sm:items-start '>
                <div className="duration-400 flex gap-2 items-center justify-center 
                bg-linear-to-r/srgb from-gray-950 to-gray-950 gradient-bg-hover
                text-white rounded-full grayscale-100 hover:grayscale-0 w-fit 
                py-2 px-5 hover:scale-105 active:scale-105 ease-in ">
                    <div className='duration-1000 hover:rotate-90'>
                        <FontAwesomeIcon icon={faBahai} />
                    </div>

                    <div>Open to Work</div>
                </div>

                <h1 className='text-4xl font-semibold mt-5 sm:mt-10'>Hi, I'm <span
                    className='gradient-text sm:grayscale-100 sm:hover:grayscale-0'>Sanjay</span>
                </h1>

                <p className='text-gray-800 mt-2 text-xl'>Frontend Developer</p>

                <p className='mt-4 text-justify'>Passionate about creating beautiful, responsive, and user-friendly web applications.
                    Currently seeking opportunities to contribute my skills in React and modern web development.</p>

                <div className='mt-6 flex justify-center gap-4'>
                    <AppButton variant="primary">Contact Me</AppButton>
                    <AppButton variant="secondary">View Projects</AppButton>
                </div>

            </div>

        </div>
    )
}

export default Hero