import React from "react";

function Tag({ key, tag }) {
  return (
    <span
      key={key}
      className="px-3 py-1 text-xs bg-gray-700/40 rounded-full border
                  border-gray-600/40 duration-100 ease-out grayscale-100 
                  hover:grayscale-0 gradient-bg-color hover:scale-105"
    >
      {tag}
    </span>
  );
}

export default Tag;
