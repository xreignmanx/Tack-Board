import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Cabinet from './components/Cabinet';
import TackBoard from './components/TackBoard';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <TackBoard>

        Shoop da whoop!
      </TackBoard>

      <Cabinet>

      </Cabinet>
      </div>
    );
  }
}

export default App;
