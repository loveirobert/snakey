import React, {Component} from 'react';
import io from 'socket.io-client';
import './App.css';
import randomstring from 'randomstring';
import {StartingForm, Players, Board} from './components';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: null,
            me: null,
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
                id: '1',
                position: [90 ,58]
              },
              {
                id: '2',
                position: [43 ,21]
              },
              {
                id: '3',
                position: [36 ,16]
              },
              {
                id: '4',
                position: [94 ,72]
              },
              {
                id: '5',
                position: [74 ,77]
              }
            ],
            socket: io('localhost:3001', {reconnect: true})
        };
    }

    generateRandomString() {
        return randomstring.generate(20)
    }

    componentDidMount() {
        this.state.socket.on('entered', (m) => {
            const players = this.state.players;
            console.log(m);

            const p = players.find(p => {
                return p.id === m.id;
            });

            if (p) return;

            players.push(m);
            this.setState({players});
        });

        this.state.socket.on('dice', function (m) {
            const snakes = this.state.snakes;

            const players = this.state.players;
            const p = players.find(p => {
                return p.id === m.id;
            });

            p.position += m.random;

            snakes.find(s => {
                if(s.position[0] == p.position)
                {
                    p.position = s.position[1];
                }
            });

            this.setState({players});
            this.state.socket.emit('state_update', players);
        });
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
            id: this.generateRandomString(),
            color: this.generateRandomColor(),
            token: false,
            name,
            position: 1
        };
        players.push(newPlayer);
        this.setState({players, me: newPlayer});
        this.state.socket.emit('entered', newPlayer);
    }

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  onDiceRoll = () => {
    this.setState({dice: this.getRandomInt(1, 6)});  
  }

  render() {
    return (
      <div className="App row">
        {!this.state.me && <StartingForm onButtonClick={this.onButtonClick} />}
        <div className="AppLeft">
          <Players players={this.state.players} />
          <Button className="dice" onClick={this.onDiceRoll}>Roll the dice!</Button>
          <div className="dicediv">{this.state.dice}</div>
        </div>
        <div className="AppRight">
          {this.state.me && <Board snakes={this.state.snakes}/>}
        </div>
      </div>
    );
  }
}

export default App;
