import React, { useState } from "react";
import NavItem from "./NavItem.jsx";
import { useMediaQuery } from "react-responsive";
import Download from "./Download.jsx";
import MobileMenu from "./MobileMenu.jsx";
import ToggleButton from "./ToggleButton.jsx";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    if (!isMobile) return;
    setIsMenu((prev) => !prev);
  };

  const menuOpen = isMobile && isMenu;

  return (
    <>
      <nav
        className=" px-5 sm:px-10 lg:px-20 py-3 bg-gray-100 border-b
                border-gray-300 shadow-lg fixed top-0 z-100 w-screen h-14"
      >
        <div className="flex justify-between max-w-7xl m-auto">
          <a href="#hero">
            <h1 className="text-xl hover-border flex-nowrap">SANJAY SHARMA</h1>
          </a>
          {isMobile ? (
            <div className="flex items-center">
              <div className="mr-10">
                <Download></Download>
              </div>
              <ToggleButton isMenu={isMenu} toggleMenu={toggleMenu} />
            </div>
          ) : (
            <div className="flex items-center sm:gap-5 md:gap-10 lg:gap-20 text-lg">
              <NavItem content="About" />
              <NavItem content="Skills" />
              <NavItem content="Projects" />
              <NavItem content="Contact" />
              <Download />
            </div>
          )}
        </div>
      </nav>
      <MobileMenu isMenu={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Navbar;
