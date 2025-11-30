import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and experience with a clean and responsive UI.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "/projects_img/portfolio.png",
    demo: "https://your-demo-link.com",
    code: "https://github.com/usanjay/portfolio",
  },
  {
    title: "DayX",
    description:
      "A calendar-based task management application that allows users to create, view, and organize tasks by date with an intuitive interface.",
    tags: ["React", "State Management", "Tailwind CSS", "Responsive Design"],
    image: "/projects_img//dayx.png",
    demo: "https://usanjay.github.io/dayX",
    code: "https://github.com/usanjay/dayX",
  },
  {
    title: "Calculator",
    description:
      "A simple yet efficient calculator application built with React. Supports basic arithmetic operations with a clean and modern UI.",
    tags: ["React", "JavaScript", "UI Design", "Responsive Design"],
    image: "/projects_img/calculator.png",
    demo: "https://usanjay.github.io/calculator-app/",
    code: "https://github.com/usanjay/calculator-app",
  },
  {
    title: "Rudra Impex",
    description:
      "A landing page built for a logistics company, featuring a modern layout, responsive design, and sections optimized for business presentation.",
    tags: ["Javascrit", "CSS", "HTML", "UI Design", "Responsive Design"],
    image: "/projects_img/rudra_impex.png",
    demo: "https://rudraimpexgmbh.com/",
  },
  {
    title: "Rudra Biofarm",
    description:
      "A frontend website built for an organic biofarm company, highlighting their products, mission, and services through a minimal and clean UI.",
    tags: ["Javascrit", "CSS", "HTML", "UI Design", "Responsive Design"],
    image: "/projects_img/rudra_biofarm.png",
    demo: "https://rudrabiofarm.vercel.app/index.html",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-5 sm:px-14  max-w-7xl mx-auto "
    >
      <div className="text-center mb-8 sm:mb-14">
        <h2 className="text-4xl font-semibold">
          My{" "}
          <span className="gradient-text sm:grayscale-100 sm:hover:grayscale-0  ">
            Projects
          </span>
        </h2>
        <p className="text-gray-800 mt-3">
          Here are some of my recent projects that showcase my skills in React
          and frontend development
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
