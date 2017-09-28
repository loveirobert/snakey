import React, { Component } from 'react';
import background from './assets/background.jpg';
import './App.css';
import io from 'socket.io-client';


class App extends Component {
  onPress(e) {
    
  }
  componentDidMount() {
    const socket = io('localhost:1367/notifications', {reconnect: true});
    socket.emit('hello', {hello: true});
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
