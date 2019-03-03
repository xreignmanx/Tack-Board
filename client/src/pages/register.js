import React, { Component } from "react";
import NavLogo from '../components/NavLogo';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

// Create Register page with the RegisterForm to allow user to register

class Register extends Component {

    render() {
        return (
            <>
            <NavLogo />
            <RegisterForm />
            <Footer />
            
            </>
        )
    }
};

export default Register;

