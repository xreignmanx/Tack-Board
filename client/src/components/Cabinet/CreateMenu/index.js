import React from 'react';
import './style.css';

function CreateMenu({ }) {
    return (

        <div class="btn-group dropup">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Create New Tack</a>
                <a class="dropdown-item" href="#">Create Tack From Template</a>
                <a class="dropdown-item" href="#">Import Tack</a>
            </div>
        </div>
    )
}

export default CreateMenu;