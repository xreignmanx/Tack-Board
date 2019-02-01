import React from 'react';
// import { Redirect } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import Auth from '../../../utils/Auth';

// import 'style.css';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            redirectToReferrer: false
        };
        // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
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
            <input
                name="userName" />

        </div>   
    )
    }
}

export default Login;