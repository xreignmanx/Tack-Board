import React from 'react';
import NavMenu from '../NavMenu';
import './style.css'

function ClientNav(props) {
    return (
        <div className="clientNav">
            <div class="col-sm-4">
                <div className="logo" href='/'>TackBoard</div>
            </div>
            <div class="col-sm-5"></div>
            <div class="col-sm-3">
                <NavMenu />
            </div>
        </div>
    )

}

export default ClientNav;