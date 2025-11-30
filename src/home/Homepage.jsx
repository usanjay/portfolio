import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Hero from './hero/Hero.jsx'
import AboutMe from './about/AboutMe.jsx'
import Skills from './skills/Skills.jsx'
import Projects from './projects/Projects.jsx'
import Contact from './contact/Contact.jsx'

function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Homepage