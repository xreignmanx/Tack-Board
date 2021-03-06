import React from 'react';
import './style.css';
import Tray from '../Tray';


// test data for our TackMenu
const testData = [{
    id: '1',
    tacklink: 'https://google.com',
    text: `Text Search`
},
{
    id: '2',
    tacklink: 'https://amazon.com',
    text: `Text Search 2`
}]
//This is the top of the component stack for our bottom navbar
function Cabinet () {
    return (
        <div className="cabinet">
        {/* Tray holds our Tack menu, will eventually hold 
        both CreateMenu and TackMenu */}
        <Tray 
        data={testData}
        />
        </div>
    )
}

export default Cabinet;
