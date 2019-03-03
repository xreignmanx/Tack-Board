import React, { Component } from "react";
import NavLogo from '../components/NavLogo';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

// Create Login page with LoginForm to allow user to Login

class Login extends Component {

    render() {
        return (
            <>
            <NavLogo />
            <LoginForm />
            <Footer />
            
            </>
        )
    }
};

export default Login;