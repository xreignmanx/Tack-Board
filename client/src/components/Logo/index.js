import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

function Logo () {
        return (
            <div className="logoDiv">
            <Link to='/'>
            <div className="mainLogo" href='/'>TACKBOARD</div>
            </Link>
            </div>
        )
    }


export default Logo;