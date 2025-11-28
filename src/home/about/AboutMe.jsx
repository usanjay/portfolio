// AboutMe.jsx
import React from "react";
import Background from "./Background";
import AboutFeatures from "./AboutFeatures";   // <-- new component

function AboutMe() {
    return (
        <section id="about" className="px-6 py-20 relative">
            <Background className="bg-gray-950 grayscale-100" />

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
                About Me
            </h2>

            <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-5 mb-14">
                <p>
                    I'm a passionate Frontend Developer specializing in React.js,
                    dedicated to crafting seamless digital experiences. As a recent
                    graduate, I bring fresh perspectives and enthusiasm to every project I
                    undertake.
                </p>
                <p>
                    I believe in writing clean, maintainable code and staying updated with
                    the latest web technologies. My goal is to create applications that
                    not only look great but also provide exceptional user experiences.
                </p>
            </div>

            {/* Features Component */}
            <AboutFeatures />
        </section>
    );
}

export default AboutMe;
