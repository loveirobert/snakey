import React, { Component } from 'react';
import background from './assets/background.jpg';
import io from 'socket.io-client';
import './App.css';
import randomstring from 'randomstring';
import {StartingForm} from './components';
import {Players} from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 'stg',
          color: '#ff0',
          token: true,
          name: 'R',
          position: 1
        },
        {
          id: 'stg2',
          color: '#fff',
          token: false,
          name: 'R2',
          position: 55
        }
      ]
    };
  }

  onPress(e) {}
    
  generateRandomString() {
    return randomstring.generate(20)
  }
  
  componentDidMount() {
    const socket = io('localhost:3001', {reconnect: true});
    socket.emit('hello', {hello: true});
    socket.on('pop', (m) => {
      console.log(m)
    })
    socket.emit('entered', {haho: true})
  }

  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }

  onButtonClick(name) {
    console.log('!!!!!!!!')
    console.log(name)
  }

  render() {
    return (
      <div className="App">
        <Players players={this.state.players} />
        <StartingForm onButtonClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
