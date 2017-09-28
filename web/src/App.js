import React, { Component } from 'react';
import background from './assets/background.jpg';
import io from 'socket.io-client';
import './App.css';
import randomstring from 'randomstring';
import {StartingForm} from './components'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress(e) {}
    
  generateRandomString() {
    return randomstring.generate(20)
  }
  
  componentDidMount() {
    const socket = io('localhost:1367/notifications', {reconnect: true});
    socket.emit('hello', {hello: true});
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
        <StartingForm />
      </div>
    );
  }
}

export default App;
