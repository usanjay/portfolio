import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Hero from './hero/Hero.jsx'
import AboutMe from './about/AboutMe.jsx'
import Skills from './skills/Skills.jsx'
import Projects from './projects/Projects.jsx'
import Contact from './contact/Contact.jsx'
import Footer from './Footer.jsx'

function Homepage() {
    return (
        <div className='select-none'>
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage