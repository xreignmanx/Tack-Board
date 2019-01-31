import React from 'react';


function TackItem (props) {
    const nData = props;
    return (
        <div className="card" id="test card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Test Card Title </h5>
                <p className="card-text">Test Card Data</p>
            </div>
        </div>


    )
}
export default TackItem;
