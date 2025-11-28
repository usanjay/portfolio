import React from 'react'
import { Link } from 'react-router-dom';

function NavItem({content}) {
    
  return (
    <div className=''>
        <Link className='hover-border '>{content}</Link>
    </div>
  )
}

export default NavItem