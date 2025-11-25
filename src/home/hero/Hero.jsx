import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <div>
                <h1>Hi, I'm Sanjay</h1>
                <p>Frontend Developer</p>
                <p>Passionate about creating beautiful, responsive, and user-friendly web applications.
                    Currently seeking opportunities to contribute my skills in React and modern web development.</p>
                <div>
                    <button>Contact Me</button>
                    <button>View Projects</button>
                </div>
                <div>
                    <Link to="https://github.com/usanjay" target="_blank">GitHub</Link>
                    <Link to="https://www.linkedin.com/in/usanjay" target="_blank">Linkdin</Link>
                    <Link to="https://x.com/usanjay512" target="_blank">Twitter</Link>
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero