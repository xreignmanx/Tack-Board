import React from 'react';
import NavMenu from './NavMenu';
import './style.css'

function NavBar(props) {
    return (
        <header>
            <navbar className='navbar fixed-top navbar-dark bg-dark'>
                <a className="navbar-brand" href='#'>TackBoard</a>
                <NavMenu />
            </navbar>
        </header>
    )

}

export default NavBar;