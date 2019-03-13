import React from 'react';
import './style.css'
import Draggable from 'react-draggable';


function TackList(props) {

    
    return (
        <Draggable>
            <div className="tackList">
                        <h5 className="list">TACK LIST</h5>
                        {/* <p className="card-text"> */}
                            <ul>
                                <li> Tasks are entered by the HOST.</li>
                                <li>The TACKLIST is generate to all users.</li>
                                <li>Users can update and close tasks.</li>
                             </ul>
                        {/* </p> */}
                    </div>
        </Draggable>

    )
}
export default TackList;