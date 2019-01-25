import React from 'react';
import CreateMenu from '../CreateMenu';
import TackMenu from '../TackMenu';


function Tray(props) {
    // const testData = props.testData;

    // const aTags = testData.map((aTag) =>
    //     <a>{aTag}</a>
    //     )
    return (
        <div className='container Tray'>

        {/* Our DropUp menu's for Creating Tacks or
            Bringing them into the board */}
            <CreateMenu />
            <TackMenu
                data={props}
                
            />
        </div>
        // <div>
        //     {aTags}
        // </div>
    )
};

export default Tray;