import React from 'react'
import './NavBar.css'
function NavbarItem({ Icon, text, counter }) {
    return (
        <div className='navbar__item'>
            <Icon className="navbar__icon" />
            {text && text}
            {counter && <div className='navbar__counter'>{counter}</div>}
        </div>
    )
}

export default NavbarItem