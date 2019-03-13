import React from 'react';
import './style.css';
import ClientTray from '../ClientTray';


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
function ClientCabinet () {
    return (
        <div className="clientCabinet">
                <ClientTray 
                    data={testData}
                /></div>

     )
}

export default ClientCabinet;