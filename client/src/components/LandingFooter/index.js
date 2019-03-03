import React from 'react';
import './style.css';

function LandingFooter() {
    return (
        <div className="landingFooter">
            <div class="col-sm-4" style={{color: 'grey', borderRadius: 0,
                    backgroundColor: '#6b2302', justifyContent: 'space-around', alignContent: 'center'}}>
            <button type="submit" href="/login" style={{color: 'grey', borderRadius: 0,
                    backgroundColor: '#6b2302', borderColor: 'brown', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold', justifyContent: 'center', alignContent: 'center'}}class="btn">LOGIN</button>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4" style={{color: 'grey', borderRadius: 0,
                    backgroundColor: '#6b2302', borderColor: 'brown', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold', justifyContent: 'center', alignContent: 'center'}} >
            <button type="submit" href="/register" style={{color: 'grey',  borderRadius: 0,
                    backgroundColor: '#6b2302', borderColor: 'brown', borderWidth: '5px', borderStyle: 'ridge',
                    fontWeight: 'bold'}}class="btn">REGISTER</button>
            </div>

        </div>
    )
}

export default LandingFooter;