import React from 'react';
import NavMenu from '../NavMenu';
import Logo from '../Logo';
import './style.css'

function ClientNav(props) {
    return (
        <div className="clientNav">
            <div class="col-sm-4">
                <Logo />
            </div>
            <div class="col-sm-5"></div>
            <div class="col-sm-3">
                <NavMenu />
            </div>
        </div>
    )

}

export default ClientNav;