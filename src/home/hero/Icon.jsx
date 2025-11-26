import React from 'react'
import { Link } from 'react-router-dom'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'

function Icon({ item, link }) {
    const iconMap = {
        github,
        linkedin,
        twitter
    };
    return (
        <Link to={link} target="_blank" >
            <img src={iconMap[item]} alt=""
                className='h-7 sm:h-10 w-7 sm:w-10 duration-300 sm:grayscale-100 sm:hover:grayscale-0 active:scale-105
                 hover:scale-105 ease-in shadow-2xl' />
        </Link>
    )
}

export default Icon