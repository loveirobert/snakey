import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Snake from './Snake';

class Board extends Component {
  
  constructor(props){
  	super(props);
  }
  
  render() {
    var cells = []

    for (var i=100; i>0; i--) {
      cells.push(<div className="box" id="cells-{i}"><div className="cellTitle">{i}</div></div>);
    }
    
    return (
      <div className="Board">
        <Snake id={1}/>
        <Snake id={2}/>
        <Snake id={3}/>
        <Snake id={4}/>
        <Snake id={5}/>
        {cells}
      </div>
    )
  }
}

export default Board
