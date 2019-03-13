import React from 'react';
import './style.css'
import Draggable from 'react-draggable';
const contstyle = {
    // margin: '5rem 0rem 0rem 0rem'
}

function TackItem(props) {

    
    // const ndata = props;
    return (
        <Draggable>
            <div className="tackItem" style={contstyle}>
                {/* <div className="card" id="test card" style={{ width: '18rem' }}>
                    <div className="card-body"> */}
                        <h5 className="card-title">SAMPLE TACK</h5>
                        <p className="card-text">
                            This is a sample of a TACK.
                            It is a Post-it of sorts.
                            It is also draggable which
                            allows to put it anywhere.
                    
                        </p>
                    </div>
                {/* </div>
            </div> */}
        </Draggable>

    )
}
export default TackItem;
