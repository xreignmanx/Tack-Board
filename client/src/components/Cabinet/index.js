import React from 'react';
import './style.css';
import Tray from './Tray';

function Cabinet () {
    return (
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a class="navbar-brand" href="#">The Cabinet</a>
        <Tray />
        </nav>
    )
}

export default Cabinet;
