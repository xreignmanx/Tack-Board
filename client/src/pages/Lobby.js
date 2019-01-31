import React from "react";
import TackBoard from "../components/TackBoard";
import Cabinet from "../components/Cabinet";
import {Col, Row, Container } from "../components/Grid";


function Lobby() {
    return (
      <Container>
        <Row>
            <TackBoard>
               <Row>
                   <div className="col-md-6">HOST</div>
                   <div className="col-md-6">CLIENT</div>
               </Row>
            </TackBoard>
        </Row>
        <Row>
            <Cabinet />
        </Row>
           
      </Container>
    );
  };


export default Lobby;