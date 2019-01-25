import React from 'react';


function TackItem (props) {
    const nData = props;
    return (
        <div class="card" id="{nData.id}" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">{nData.title} </h5>
                <p class="card-text">{nData.mainText}</p>
            </div>
        </div>


    )
}
export default TackItem;
