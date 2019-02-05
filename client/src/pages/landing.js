import React, { Component } from "react";
import Cabinet from '../components/Cabinet';
import TackBoard from '../components/TackBoard';
import Login from '../components/Login';
import TackForm from '../components/TackForm';
import {Link} from 'react-router-dom';

class Home extends Component {
    // state = {
    
    // }
    render() {
        return (
            <>

            <TackBoard> 
                <Login />
                <TackForm />


            </TackBoard>
            <div>
                <div>
                    <h1> Login</h1>
                    <Link to={'/login'}>Log In</Link><br />
                    <hr /><p>Don't have an account?</p>
                    <Link to={'/register'}> Sign up</Link>
                </div>
            </div>
            <Cabinet>

            </Cabinet>
            </>
        )
    }
};

export default Home;