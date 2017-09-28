import React, { Component } from 'react';

class Players extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const players = this.props.players.map(p => <li style={{color: p.color}} key={p.id}>{p.name}</li>);
    return <div className="players">
      <div className="opaq">
      </div>
      <ul>{players}</ul>
    </div>
  }
}

export default Players;
