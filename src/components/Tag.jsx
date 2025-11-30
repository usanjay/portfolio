import React from "react";

function Tag({ key, tag }) {
  return (
    <span
      key={key}
      className="px-3 py-1 text-xs rounded-full border
                  border-gray-600/40 duration-100 ease-out sm:grayscale-100 
                  sm:hover:grayscale-0 gradient-bg-color hover:scale-105"
    >
      {tag}
    </span>
  );
}

export default Tag;
