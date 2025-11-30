import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS. It showcases my projects and skills with a clean and responsive UI.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/portfolio/projects_img/portfolio.png",
    demo: "https://usanjay.github.io/portfolio/",
    code: "https://github.com/usanjay/portfolio",
  },
  {
    title: "DayX",
    description:
      "DayX is a React-based task manager that lets users create tasks with start and end dates and stores them in localStorage. Each task can be viewed on a dedicated calendar page that highlights only its date range. The interface is built with Tailwind CSS and fully responsive.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/portfolio/projects_img//dayx.png",
    demo: "https://usanjay.github.io/dayX",
    code: "https://github.com/usanjay/dayX",
  },
  {
    title: "Calculator",
    description:
      "A simple React-based calculator that supports essential arithmetic operations with a clean, responsive interface. It provides smooth button interactions, clear input/output handling, and a minimal UI design suitable for both desktop and mobile use.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/portfolio/projects_img/calculator.png",
    demo: "https://usanjay.github.io/calculator-app/",
    code: "https://github.com/usanjay/calculator-app",
  },
  {
    title: "Rudra Impex",
    description:
      "A landing page built for a logistics company, featuring a modern layout, responsive design, and sections optimized for business presentation.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/projects_img/rudra_impex.png",
    demo: "https://rudraimpexgmbh.com/",
  },
  {
    title: "Rudra Biofarm",
    description:
      "Rudra Biofarm is a responsive multi-page website built with HTML, CSS, and JavaScript. It features an organic products catalog with pricing, stock status, and add-to-cart UI, along with dedicated About and Contact pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/projects_img/rudra_biofarm.png",
    demo: "https://rudrabiofarm.vercel.app/index.html",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5 sm:px-14  max-w-7xl mx-auto ">
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
