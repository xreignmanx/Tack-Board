import React from 'react';
import 'style.css';

function Login() {
    return (
        <div className="jumbotron">      
            <h1>LogIn</h1>
            <p>Welcome! Please Login.</p>
            <hr /><br />
            <a href="/auth/google" className="btn btn-default">Google</a>
        </div>   
    )
}

export default Login;