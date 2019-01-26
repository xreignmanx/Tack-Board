import React from "react";
import "./style.css";
import TackItem from './TackItem';

const testData = [{
    id: '1',
    tacklink: 'https://google.com',
    text: `Text Search`
},
{
    id: '2',
    tacklink: 'https://amazon.com',
    text: `Text Search 2`
}]

function TackBoard () {

        
    return(
        <div>
            <TackItem 
                    data={testData}            
            />

            <div class="jumbotron">      
                <h1>LogIn</h1>
                <p>Welcome! Please Login.</p>
                <hr /><br />
                <a href="/auth/google" class="btn btn-default">Google</a>
            </div>                    
        </div>
        )
    
}

export default TackBoard;