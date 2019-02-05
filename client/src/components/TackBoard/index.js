import React from "react";
import "./style.css";
import TackItem from '../TackItem';
import TackForm from '../TackForm';
import Login from '../Login';


class TackBoard extends React.Component {
    render() 
        {return(
            <div>
                <TackItem 
                        data={{One: 'two'}}            
                />
                <TackForm />
                            
            </div>
            )
        }
    return(
        <div className="board">
            {/* <TackItem 
                    data={testData}            
            />
            <Login /> */}
                         
        </div>
        )
    
}

export default TackBoard;