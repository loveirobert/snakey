import React, { Component } from 'react';
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
      snakes: [
        {
          id: 'snake1',
          size: [],
          src: './assets/snake1.svg',
          position: []
        },
        {
          id: 'snake2',
          size: [],
          src: './assets/snake2.svg',
          position: []
        },
        {
          id: 'snake3',
          size: [],
          src: './assets/snake3.svg',
          position: []
        }
      ]
    };
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

  onButtonClick(name) {
    console.log('!!!!!!!!')
    console.log(name)
  }

  render() {
    return (
      <div className="App row">
        <div className="AppLeft">
          <Players players={this.state.players} />
          <StartingForm onButtonClick={this.onButtonClick} />
        </div>
        <div className="AppRight">
          <Board snakes={this.state.snakes}/>
        </div>
      </div>
    );
  }
}

export default App;
