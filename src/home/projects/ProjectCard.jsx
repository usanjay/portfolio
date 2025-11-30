import Tag from "./Tag";
import Redirect from "./Redirect";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  demo,
  code,
}) {
  return (
    <div
      className="bg-white border border-gray-400 rounded-2xl shadow-sm 
      overflow-hidden transition duration-200 ease-in hover:shadow-lg 
      sm:grayscale-100 sm:hover:grayscale-0 hover:scale-101 gradient-bg-hover-3 group"
    >
      {/* Image */}
      <div className="w-full  overflow-hidden box-border p-4 p-b gray">
        <a href={demo} target="_blank">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top rounded-xl border
            border-gray-400 hover:scale-101 duration-200 ease-in"
          />
        </a>
      </div>

      {/* Content */}
      <div className="p-6 pt-2">
        <h3 className="text-xl font-semibold mb-2">
          <span className="gradient-text">{title}</span>
        </h3>
        <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-950">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5 text-white">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 text-sm">
          <Redirect link={demo} icon="🔗" content="Live Demo" />
          {code && <Redirect link={demo} icon="💻" content="Code" />}
        </div>
      </div>
    </div>
  );
}
