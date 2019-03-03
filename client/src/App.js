import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landing from './pages/landing';
import login from './pages/login';
import register from './pages/register';
import host from './pages/host';
import client from './pages/client';

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Switch>
            <Route exact path="/" component={landing} />
            <Route exact path="/login" component={login} />
            <Route exact path="/register" component={register} />
            <Route exact path="/host" component={host} />
            <Route exact path="/client" component={client} />
        </Switch>
        </>
      </Router>
    );
  }

}

export default App;
    