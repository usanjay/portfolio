import React from "react";

function Tag({ key, tag }) {
  return (
    <span
      key={key}
      className="px-3 py-1 rounded-full border text-sm
                  border-gray-600/40 duration-100 ease-out md:grayscale-100
                  bg-linear-to-r/srgb md:from-gray-950 md:to-gray-950
                  md:hover:grayscale-0 gradient-bg-hover gradient-bg-color hover:scale-105"
    >
      {tag}
    </span>
  );
}

export default Tag;
