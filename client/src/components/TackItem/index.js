import React from 'react';
import Draggable from 'react-draggable';
const contstyle = {
    margin: '5rem 0rem 0rem 0rem'
}

function TackItem(props) {
    // const ndata = props;
    return (
        <Draggable>
            <div className="container" style={contstyle}>
                <div className="card" id="test card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Sample Data </h5>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat sed velit id iaculis. Donec eget magna sit amet quam lobortis pellentesque. Morbi velit ligula, tempus nec sollicitudin nec, mattis vitae leo. In venenatis mi nec risus aliquet, vel tincidunt dui tincidunt. Donec viverra pharetra eros.
                        </p>
                    </div>
                </div>
            </div>
        </Draggable>

    )
}
export default TackItem;
