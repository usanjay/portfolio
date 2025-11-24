import React from 'react'
import NavItem from './NavItem.jsx'

function Navbar() {
  return (
    <nav className="flex justify-between px-20 py-3 bg-gray-100 border-b border-gray-300 shadow-lg">
      <h1 className="text-xl hover-border">SANJAY SHARMA</h1>
      <div className='flex items-center gap-20 text-lg'>
        <NavItem content="About" />
        <NavItem content="Skills" />
        <NavItem content="Projects" />
        <NavItem content="Contact" />
      </div>
    </nav>
  )
}

export default Navbar