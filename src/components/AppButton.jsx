
import React from "react";

function AppButton({ children, variant = "primary", className = "", ...props }) {
    const base =
        "duration-300 ease-in py-2 px-4 rounded-full " +
        "hover:scale-105 active:scale-105 gradient-bg-hover bg-linear-to-r/srgb " +
        "shadow-[inset_0_0_0_2px_rgb(3,7,18)] " +             // replaces border-gray-950
        "hover:shadow-[inset_0_0_0_0px_rgb(3,7,18)] ";      // replaces hover:border-transparent
        

    const variants = {
        primary: "from-gray-950 to-gray-950 text-white",
        secondary: "from-white to-white text-black hover:text-white active:text-white",
    };

    const composed = `${base} ${variants[variant] ?? ""} ${className}`.trim();

    return (
        <button className={composed} {...props}>
            {children}
        </button>
    );
}

export default AppButton;
