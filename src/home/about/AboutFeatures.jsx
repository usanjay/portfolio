// AboutFeatures.jsx
import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";

function AboutFeatures() {
    const features = [
        {
            icon: <FaCode className="text-3xl" />,
            title: "Clean Code",
            desc: "Writing maintainable and scalable code following best practices",
        },
        {
            icon: <FaLaptopCode className="text-3xl" />,
            title: "Responsive Design",
            desc: "Creating seamless experiences across all devices and screen sizes",
        },
        {
            icon: <RiFlashlightFill className="text-3xl" />,
            title: "Performance",
            desc: "Optimizing applications for speed and efficiency",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-10 lg:px-20 mt-10">
            {features.map((f, i) => (
                <div
                    key={i}
                    className={`
                        group border border-gray-700
                        p-8 text-center flex flex-col items-center
                        transition-all duration-300 ease-in

                        /* Mobile: always gradient */
                        gradient-bg-color sm:grayscale-100 hover:grayscale-0

                        /* Hover scaling on desktop */
                        md:hover:scale-105
                    `}
                >
                    {/* icon wrapper */}
                    <div className="text-white mb-4 group-hover:animate-shake">
                        {f.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                        {f.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{f.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default AboutFeatures;
