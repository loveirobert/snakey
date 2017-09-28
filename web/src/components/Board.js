import React, { Component } from 'react';
import Snake from './Snake';
import Ladder from './Ladder';

class Board extends Component {
  
  constructor(props){
  	super(props);
  }
  
  render() {
    var cells = []

    for (var i=100; i>0; i--) {
        cells.push(<div className="box" id="cells-{i}"><div className="cellTitle">{i}<div class="player"></div></div></div>);
    }
    
    return (
      <div className="Board">
        <Snake id={1}/>
        <Snake id={2}/>
        <Snake id={3}/>
        <Snake id={4}/>
        <Snake id={5}/>
        <Ladder id={1}/>
        <Ladder id={2}/>
        <Ladder id={3}/>
        <Ladder id={4}/>
        <Ladder id={5}/>
        <Ladder id={6}/>
        {cells}
      </div>
    )
  }
}

export default Board
