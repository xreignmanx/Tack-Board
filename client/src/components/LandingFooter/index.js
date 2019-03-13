import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function LandingFooter () {
    return (
        <div className="landingFooter">
            <div class="col-sm-4">
            <Link to="/login">
            <button type="submit"class="btn"
                     style={{color: 'tan', borderRadius: 0,
                    backgroundColor: "#6b2302", borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold', justifyContent: 'center', alignContent: 'center'}}>LOGIN</button>
            </Link>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
            <Link to='register'>
            <button type="submit"class="btn" style={{color: 'tan',  borderRadius: 0,
                    backgroundColor: '#6b2302', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold'}}>REGISTER</button>
                    </Link>
            </div>

        </div>
    )
}

export default LandingFooter;