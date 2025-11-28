import React, { useEffect, useState } from 'react'
import NavItem from './NavItem.jsx'
import { useMediaQuery } from "react-responsive";

import MobileMenu from './MobileMenu.jsx';
import ToggleButton from './ToggleButton.jsx';


function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu && true);
  }

  useEffect(()=> {
    if(!isMobile) setIsMenu(false);
  },[isMobile]);

  return (
    <>
      <nav className="flex justify-between px-5 sm:px-10 md:px-20 py-3 bg-gray-100 border-b border-gray-300 
    shadow-lg fixed top-0 z-100 w-screen h-14">
        <h1 className="text-xl hover-border flex-nowrap">SANJAY SHARMA</h1>
        {
          isMobile
            ? <div className='flex items-center'>
              <ToggleButton isMenu={isMenu} toggleMenu={toggleMenu} />

            </div>
            : <div className='flex items-center sm:gap-10 md:gap-20 text-lg'>
              <NavItem content="About" />
              <NavItem content="Skills" />
              <NavItem content="Projects" />
              <NavItem content="Contact" />
            </div>
        }
      </nav>
      <MobileMenu isMenu={isMenu} />
    </>
  )
}

export default Navbar