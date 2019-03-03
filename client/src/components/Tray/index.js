import React from 'react';
import CreateMenu from '../CreateMenu';
import TackMenu from '../TackMenu';
import './style.css';

function Tray(props) {
    
    return (
        <div className='tray'>
            <div class="col-sm-4">
            <CreateMenu />
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                        <TackMenu
                data={props}
                
            />
            </div>



        {/* Our DropUp menu's for Creating Tacks or
            Bringing them into the board */}
            

        </div>
     
    )
};

export default Tray;