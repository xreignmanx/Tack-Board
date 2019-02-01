import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import NavBar from './components/NavBar';
// Import Pages
import Landing from "./pages/Landing";
import Lobby from "./pages/Lobby";
import Host from "./pages/Host";
import Client from "./pages/Client";

function App() {
  return (
    <Router>
      <div className="box">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Lobby" component={Lobby} />
          <Route exact path="/Host" component={Host} />
          <Route exact path="/Client" component={Client} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
    