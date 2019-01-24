import React from 'react';

function NavMenu () {
    return (
        <div class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    USER_NAME_GOES_HERE
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Host New Board</a>
                    <a className="dropdown-item" href="#">Join Board</a>
                </div>
                
            </div>
    )
};

export default NavMenu;
