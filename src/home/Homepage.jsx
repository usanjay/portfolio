import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Hero from './hero/Hero.jsx'
import AboutMe from './about/AboutMe.jsx'
import Skills from './skills/Skills.jsx'

function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
        </>
    )
}

export default Homepage