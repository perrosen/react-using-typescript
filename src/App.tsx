import "./App.css";

import React from "react";

import logo from "./logo.svg";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Message name={this.state.name} message={this.state.message} /> */}
          <Message />
          {/* <p>
          The value {aTuple[1]} is of {typeof aTuple[1]} type!
        </p> */}
          {/* <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p> */}
        </header>
      </div>
    );
  }
}

export default App;
