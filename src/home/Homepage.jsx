import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Hero from './hero/Hero.jsx'
import AboutMe from './about/AboutMe.jsx'

function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
        </>
    )
}

export default Homepage