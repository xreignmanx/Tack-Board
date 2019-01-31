import React from "react";
import "./style.css";
import TackItem from '../TackItem';
import Login from '../Login';

class TackBoard extends React.Component {

        
    render() 
        {return(
            <div>
                <TackItem 
                        data={{One: 'two'}}            
                />
                <Login />
                            
            </div>
            )
        }
    
}

export default TackBoard;