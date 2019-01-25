import React from 'react';
import './style.css';
import Tray from './Tray';

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
function Cabinet () {
    return (
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <Tray 
        data={testData}
        />
        <a class="navbar-brand" href="#">The Cabinet</a>
        </nav>
    )
}

export default Cabinet;
