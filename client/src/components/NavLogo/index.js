import React from 'react';
import Logo from "../Logo";
import './style.css';

function NavLogo(props) {
    return (
        <div className="navlogo">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <Logo />
                {/* <div className="logo" href='/'>TackBoard</div> */}
            </div>
            <div class="col-lg-3"></div>
        </div>
    )

}

export default NavLogo;