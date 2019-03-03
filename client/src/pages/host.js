import React, { Component } from "react";
import NavBar from '../components/NavBar';
import TackBoard from '../components/TackBoard';
import Cabinet from '../components/Cabinet';

// Create a Host page which contains a NavBar with dropdown menu, a TackBoard for applying TACKS and the Cabinet
// which has the host menus for creation, etc.

class Host extends Component {

    render() {
        return (
            <>
            <NavBar />
            <TackBoard />
            <Cabinet />
            
            </>
        )
    }
};

export default Host;