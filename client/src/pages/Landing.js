import React from "react";
import TackBoard from "../components/TackBoard";
import Cabinet from "../components/Cabinet";
import Login from "../components/Login";
import {Row, Container } from "../components/Grid";





function Landing() {
    return (
      <Container>
        <Row>
            <TackBoard>
                <Login></Login>
            </TackBoard>
        </Row>
        <Row>
            <Cabinet />
        </Row>
           
      </Container>
    );
  };


export default Landing;
