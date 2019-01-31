import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import landing from './pages/landing';
class App extends Component {
  render() {
    return (
      <Router>
        <>
        <NavBar />
        <Switch>
            <Route exact path="/" component={landing} />
        </Switch>
        </>
      </Router>
    );
  }
}

export default App;
