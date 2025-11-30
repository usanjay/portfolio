import React from "react";
import Tag from "../../components/Tag";

const skillsData = [
  {
    id: 1,
    title: "Frontend",
    tags: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    color: "bg-orange-400",
  },
  {
    id: 2,
    title: "Tools & Others",
    tags: [
      "Git & GitHub",
      "Responsive Design",
      "REST APIs",
      "npm/yarn",
      "VS Code",
    ],
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Currently Learning",
    tags: ["TypeScript"],
    color: "bg-purple-500",
  },
];

function Cards() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 sm:px-14">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="relative gradient-bg-hover-2 p-8 rounded-xl border border-gray-800 
          shadow-xl duration-300 ease-in
          hover:scale-105 group  hover:shadow-[0_0_20px_rgba(21,87,133,.6)] "
        >
          {/* Left small number */}
          <div
            className="absolute top-6 left-6 text-gray-100 font-semibold bg-gray-700/30 
          px-3 py-1 rounded-md gradient-bg-color duration-500 ease-in grayscale-100 group-hover:grayscale-0"
          >
            {skill.id}
          </div>

          {/* Big faded number */}
          <div className="absolute top-6 right-6 text-gray-700/20 text-6xl font-bold">
            {String(skill.id).padStart(2, "0")}
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold">{skill.title}</h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {skill.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
