import React, {Component} from 'react';
import io from 'socket.io-client';
import './App.css';
import randomstring from 'randomstring';
import {StartingForm, Players, Board} from './components';
import {Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: null,
            me: null,
            players: [
            ],
            snakes: [
                {
                    id: '1',
                    position: [90, 58]
                },
                {
                    id: '2',
                    position: [43, 21]
                },
                {
                    id: '3',
                    position: [36, 16]
                },
                {
                    id: '4',
                    position: [94, 72]
                },
                {
                    id: '5',
                    position: [74, 77]
                }
            ],
            ladders: [
              {
                id: '1',
                position: [18 ,48]
              },
              {
                id: '2',
                position: [76 ,96]
              },
              {
                id: '3',
                position: [59 ,89]
              },
              {
                id: '4',
                position: [24 ,44]
              },
              {
                id: '5',
                position: [32 ,62]
              },
              {
                id: '6',
                position: [2 ,32]
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

            players.find(p => {
                p.token = false;
            });

            const p = players.find(p => {
                if (p.id === m.id) {
                    p.token = true;
                }

                return p.id === m.id;
            });

            if (p) return;

            players.push(m);
            this.setState({players});
        });
        this.state.socket.on('state_update', (m) => {
            this.setState({players: m});
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
        const randomInt = this.getRandomInt(1, 6);
        this.setState({dice: randomInt});
        const snakes = this.state.snakes;
        const ladders = this.state.ladders;

        const players = this.state.players;
        const p = players.find(p => {
            return p.id === this.state.me.id;
        });

        p.position += randomInt;

        if(p.position >= 100)
        {

        }

        snakes.find(s => {
            if (s.position[0] == p.position) {
                p.position = s.position[1];
            }
        });

        ladders.find(l => {
            if (l.position[0] == p.position) {
                p.position = l.position[1];
            }
        });

        console.log(players);
        this.setState({players});
        this.state.socket.emit('state_update', players);
    }

    render() {
        return (
            <div className="App row">
                {!this.state.me && <StartingForm onButtonClick={this.onButtonClick}/>}
                <div className="AppLeft">
                    <Players players={this.state.players}/>
                    {this.state.me && <Button className="dice" onClick={this.onDiceRoll}>Roll the dice!</Button>}
                    <div className="dicediv">{this.state.dice}</div>
                </div>
                <div className="AppRight">
                    {this.state.me && <Board snakes={this.state.snakes} players={this.state.players}/>}
                </div>
            </div>
        );
    }
}

export default App;
