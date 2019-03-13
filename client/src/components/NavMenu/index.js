import React from 'react';
import './style.css';

function NavMenu () {
    return (
        <div  id='navmenu' className="navMenu">
                <a className="btn dropdown-toggle" style={{color: 'tan',  borderRadius: 0,
                backgroundColor: '#6b2302', alignContent: 'center', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
            fontWeight: 'bold'}}href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    NAVIGATION
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{color: 'tan',  borderRadius: 0, 
                backgroundColor: 'tan', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                fontWeight: 'bold'}}>
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Host New Board</a>
                    <a className="dropdown-item" href="#">Join Board</a>
                </div>
                
            </div>
    )
};

export default NavMenu;
