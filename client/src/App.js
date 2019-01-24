import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Cabinet from './components/Cabinet';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Cabinet>

      </Cabinet>
      </div>
    );
  }
}

export default App;
