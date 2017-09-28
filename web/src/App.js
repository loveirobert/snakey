import React, { Component } from 'react';
import background from './assets/background.jpg';
import io from 'socket.io-client';
import './App.css';
import randomstring from 'randomstring';
import {StartingForm} from './components';
import {Players} from './components';
import {Board} from './components';

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
      ],
      socket: io('localhost:1367/notifications', {reconnect: true})
    };
  }

  onPress(e) {}
    
  generateRandomString() {
    return randomstring.generate(20)
  }
  
  componentDidMount() {
    this.state.socket.emit('hello', {hello: true});
    this.state.socket.on('pop', (m) => {
      console.log(m)
    })
    this.state.socket.emit('entered', {haho: true})
  }
  
  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }
  
  onButtonClick = name => {
    const players = this.state.players;
    const newPlayer = {
      id: this.generateRandomString,
      color: this.generateRandomColor(),
      token: false,
      name,
      position: 1
    };
    players.push(newPlayer);
    this.setState({players});
    this.state.socket.emit('hello', newPlayer);
  }

  render() {
    return (
      <div className="App">
        <Players players={this.state.players} />
        <StartingForm onButtonClick={this.onButtonClick} />
        <Board/>
      </div>
    );
  }
}

export default App;
