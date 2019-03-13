import React from 'react';
import './style.css';

function CreateMenu({ }) {
    return (

        <div className="btn-group dropup">
                <button className="btn btn-secondary dropdown-toggle" style={{color: 'tan',  borderRadius: 0,
                backgroundColor: '#6b2302', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
            fontWeight: 'bold'}}
                 type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{color: 'tan',  borderRadius: 0, 
                backgroundColor: 'tan', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                fontWeight: 'bold'}}>
                <a className="dropdown-item" href="#">Create New Tack</a>
                <a className="dropdown-item" href="#">Create Tack From Template</a>
                <a className="dropdown-item" href="#">Import Tack</a>
            </div>
        </div>
    )
}

export default CreateMenu;