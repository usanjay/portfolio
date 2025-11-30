// AboutMe.jsx
import React from "react";
import Background from "./Background";
import AboutFeatures from "./AboutFeatures";

function AboutMe() {
  return (
    <section id="about" className=" py-20 relative">
      <Background className="bg-gray-950 grayscale-100" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          About{"  "}
          <span className="gradient-text sm:grayscale-100 sm:hover:grayscale-0  ">
            Me
          </span>
        </h2>

        <div className="max-w-4xl mx-auto text-center text-gray-300 space-y-5 mb-14">
          <p>
            I’m a frontend developer who enjoys building things with React.js
            and working on clean, simple interfaces. I like figuring out how to
            make designs feel smooth and usable, and I try to keep my code easy
            to understand and maintain.
          </p>
          <p>
            I’m always picking up new ideas and tools to improve how I work,
            especially around performance and user experience. I enjoy the
            process of learning and refining things, and I'm focused on creating
            applications that feel good to use in the real world.
          </p>
        </div>

        <AboutFeatures />
      </div>
    </section>
  );
}

export default AboutMe;
