import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Auth from '../../../utils/Auth';

// import 'style.css';

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = (data) => {
        console.log("Logging in: " + data.username);
        fetch('api/users/login', {

        })
    }
    render() {
    return (
        <div className="jumbotron">      
            <h1>LogIn</h1>
            <p>Welcome! Please Login.</p>
            <hr /><br />
            <a href="/api/userRoutes/login/" className="btn btn-default">Login</a>
            <a href="/api/userRoutes/register/" className="btn btn-default">Register</a>
        </div>   
    )
    }
}

export default Login;