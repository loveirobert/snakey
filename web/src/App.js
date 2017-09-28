import React, { Component } from 'react';
import background from './assets/background.jpg';
import './App.css';
import io from 'socket.io';
import randomstring from 'randomstring';

class App extends Component {
    
  generateRandomString() {
    return randomstring.generate(20);
  }
  
  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }

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
