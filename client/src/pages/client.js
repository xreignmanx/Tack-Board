import React, { Component } from "react";
import ClientNav from '../components/ClientNav';
import TackBoard from '../components/TackBoard';
import ClientCabinet from '../components/ClientCabinet';

// Create Client page which includes a ClientNav with dropdown options, a TackBoard for TACKS and a ClientFooter.


class Client extends Component {

    render() {
        return (
            <>
            <ClientNav />
            <TackBoard />
            <ClientCabinet />
            
            </>
        )
    }
};

export default Client;