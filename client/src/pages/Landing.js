import React from "react";
import TackBoard from "../components/TackBoard";
import Footer from "../components/Footer";
import Login from "../components/Login";


function Landing() {
    return (
        <div>
            <TackBoard>
                <Login></Login>
            </TackBoard>
            <Footer />

        </div>   
    );
  };


export default Landing;
