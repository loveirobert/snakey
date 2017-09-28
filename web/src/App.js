import React, { Component } from 'react';
import background from './assets/background.jpg';
import io from 'socket.io-client';
import './App.css';
import {StartingForm} from './components'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress(e) {
    
  }
  
  componentDidMount() {
    const socket = io('localhost:1367/notifications', {reconnect: true});
    socket.emit('hello', {hello: true});
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
