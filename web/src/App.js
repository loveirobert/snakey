import React, { Component } from 'react';
import background from './assets/background.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="yourName">
          Enter Your Name:<br />
          <input name="playerName" value="" />
        </div>
      </div>
    );
  }
}

export default App;
