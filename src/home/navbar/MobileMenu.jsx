import React, { useEffect } from "react";
import NavItem from "./NavItem";

function MobileMenu({ isMenu, toggleMenu }) {
  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenu]);

  return (
    <div
      className={`fixed top-14 inset-0 z-50 flex justify-end
            ${isMenu ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`absolute inset-0 bg-gray-400 transition-opacity duration-700
                ${isMenu ? "opacity-40" : "opacity-0"}`}
      />

      <div
        className={`w-1/2 bg-white p-10 relative transition-transform duration-700
                flex flex-col gap-10
                ${isMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <NavItem toggleMenu={toggleMenu} content="About" />
        <NavItem toggleMenu={toggleMenu} content="Skills" />
        <NavItem toggleMenu={toggleMenu} content="Projects" />
        <NavItem toggleMenu={toggleMenu} content="Contact" />
      </div>
    </div>
  );
}

export default MobileMenu;
