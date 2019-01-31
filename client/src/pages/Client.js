import React from "react";
import TackBoard from "../components/TackBoard";
import Cabinet from "../components/Cabinet";
import {Row, Container } from "../components/Grid";

function Client() {
    return (
      <Container>
        <Row>
            <TackBoard />
        </Row>
        <Row>
            <Cabinet />
        </Row>
           
      </Container>
    );
}
export default Client;