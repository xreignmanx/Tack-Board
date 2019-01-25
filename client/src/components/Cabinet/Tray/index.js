import React from 'react';
import CreateMenu from '../CreateMenu';
import TackMenu from '../TackMenu';
import './style.css';

function Tray(props) {
    
    return (
        <div className='container Tray'>

        {/* Our DropUp menu's for Creating Tacks or
            Bringing them into the board */}
            <CreateMenu />
            <TackMenu
                data={props}
                
            />
        </div>
     
    )
};

export default Tray;