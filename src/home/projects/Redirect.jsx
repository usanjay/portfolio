import React from "react";

function Redirect({ link, icon, content }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        transition-colors duration-300
        group/redirect
      "
    >
      <span
        className="
          inline-block text-base
          transition-transform duration-300 ease-out
          group-hover/redirect:rotate-45
        "
      >
        {icon}
      </span>

      <span className="group-hover/redirect:underline">
        {content}
      </span>
    </a>
  );
}

export default Redirect;
