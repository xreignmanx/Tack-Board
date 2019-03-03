import React, { Component } from "react";
import LandingFooter from '../components/LandingFooter';
import LandingInfo from '../components/LandingInfo';
import NavLogo from '../components/NavLogo';

// Create Home page wih LandingFooter for links to LOGIN and REGISTER

class Home extends Component {

    render() {
        return (
            <>
            
            <NavLogo />
            <LandingInfo />
            <LandingFooter /> 
            
            </>
        )
    }
};

export default Home;