import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

function ToggleButton({ isMenu, toggleMenu }) {
    return (
        <button
            onClick={toggleMenu}
            className="relative w-7 h-7 cursor-pointer select-none"
        >
            {/* ROTATING WRAPPER */}
            <div
                className={`
                    absolute inset-0 flex items-center justify-center
                    transition-transform duration-300
                    ${isMenu ? 'rotate-90' : 'rotate-0'}
                `}
            >
                {/* Hamburger Icon */}
                <FontAwesomeIcon
                    icon={faBars}
                    className={`
                        absolute text-2xl transition-opacity duration-200
                        ${isMenu ? 'opacity-0' : 'opacity-100'}
                    `}
                />

                {/* X Icon */}
                <FontAwesomeIcon
                    icon={faX}
                    className={`
                        absolute text-2xl transition-opacity duration-200
                        ${isMenu ? 'opacity-100' : 'opacity-0'}
                    `}
                />
            </div>
        </button>
    )
}

export default ToggleButton
