import React from 'react';
import './style.css';

function LandingFooter() {
    return (
        <div className="landingFooter">
            <div class="col-sm-4">
            <button type="submit" href="/login" style={{color: 'tan', borderRadius: 0,
                    backgroundColor: "brown", borderColor: 'brown', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold', justifyContent: 'center', alignContent: 'center'}}class="btn">LOGIN</button>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
            <button type="submit" href="/register" style={{color: 'tan',  borderRadius: 0,
                    backgroundColor: 'brown', borderColor: 'brown', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold'}}class="btn">REGISTER</button>
            </div>

        </div>
    )
}

export default LandingFooter;