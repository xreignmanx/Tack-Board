import React from "react";
import "./style.css";
import TackItem from '../TackItem';
import TackList from '../TackList';
// import TackForm from '../TackForm';


class TackBoard extends React.Component {
    render() {
        return (
            <div className="tackboard">
                <TackList  />
                <TackItem 
                        data={{One: 'two'}}            
                />
            
                {/* <TackForm /> */}
                            
            </div>
            )
        };
    }


export default TackBoard;