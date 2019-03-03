import React from 'react';
import NavMenu from '../NavMenu';
import Logo from '../Logo';
import './style.css'

function NavBar(props) {
    return (
        <div className="navbar">
            <div class="col-sm-5">
                {/* <div className="navbarLogo" href='/'>TackBoard</div> */}
                <Logo />
            </div>
            <div class="col-sm-4"></div>
            {/* <div class="col-sm-2"></div> */}
            <div class="col-sm-3">
                <NavMenu />
            </div>
            {/* <div class="col-sm-1"></div> */}

        </div>
    )

}

export default NavBar;