import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";

function AboutFeatures() {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Clean Code",
      desc: "Writing code that’s easy to read, maintain, and build on.",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Responsive Design",
      desc: "Making sure layouts look and work well on any screen size.",
    },
    {
      icon: <RiFlashlightFill className="text-3xl" />,
      title: "Performance",
      desc: "Improving load times and ensuring the app feels smooth to use.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 lg:px-20">
      {features.map((f, i) => (
        <div
          key={i}
          className={`
                        group border border-gray-700
                        p-8 text-center flex flex-col items-center
                        transition-all duration-300 ease-in md:hover:scale-105
                        gradient-bg-color sm:grayscale-100 hover:grayscale-0
                    `}
        >
          <div className="text-white mb-4 duration-300 ease-in ">{f.icon}</div>

          <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
          <p className="text-gray-300 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutFeatures;
