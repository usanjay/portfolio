import React from "react";

function Redirect({link, icon, content}) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-1 hover:underline"
    >
      <span>{icon}</span> {content}
    </a>
  );
}

export default Redirect;
