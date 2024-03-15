import React from 'react'
import './NavBar.css'
function NavbarItem({ Icon, text, counter, themeToggle }) {
    return (
        <div className='navbar__item'>
            {themeToggle ? (
                <Icon className="navbar__icon" onClick={themeToggle} />
            ) : (
                <Icon className="navbar__icon" />
            )}

            {text && text}
            {counter && <div className='navbar__counter'>{counter}</div>}
        </div>
    )
}

export default NavbarItem