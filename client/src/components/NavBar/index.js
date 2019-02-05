import React from 'react';
import NavMenu from './NavMenu';
import './style.css'

function NavBar(props) {
    return (
        <header>
            <nav className='navbar fixed-top navbar-dark bg-dark'>
                <a className="logo" href='/'>TackBoard</a>
                <NavMenu />
            </nav>
        </header>
    )

}

export default NavBar;