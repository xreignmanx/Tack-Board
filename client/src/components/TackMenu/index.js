import React from 'react';

function TackMenu(props ) {

    const ourData = props.data.data;
    return (
        <div className="btn-group dropup">
            <a className="btn btn-secondary dropdown-toggle" style={{color: 'tan', borderRadius: 0,
                backgroundColor: '#6b2302', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
            fontWeight: 'bold'}} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                TackList
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{color: 'tan',  borderRadius: 0, 
                backgroundColor: 'tan', borderColor: '#6b2302', borderWidth: '5px', borderStyle: 'ridge',
                fontWeight: 'bold'}}>
                {ourData.map(element => {
                    return (<a
                             key={element.id}
                             className="dropdown-item"
                             href={element.tacklink}>
                             {element.text}
                            </a>
                    )
                })}
            </div>
        </div>
    )
}
export default TackMenu;