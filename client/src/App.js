import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import landing from './pages/landing';
import login from './pages/login';
import register from './pages/register';

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <NavBar />
        <Switch>
            <Route exact path="/" component={landing} />
            <Route exact path="/login" component={login} />
            <Route exact path="/register" component={register} />
        </Switch>
        </>
      </Router>
    );
  }

}

export default App;
    