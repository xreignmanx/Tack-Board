import React from 'react';


function TackItem (props) {
    const nData = props;
    return (
        <div className="card" id="{nData.id}" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{nData.title} </h5>
                <p className="card-text">{nData.mainText}</p>
            </div>
        </div>


    )
}
export default TackItem;
