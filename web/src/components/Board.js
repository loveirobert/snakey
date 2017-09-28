import React, { Component } from 'react';

class Board extends Component {
  
  constructor(props){
  	super(props);
  }
  
  componentDidMount() {
    this.renderSnakes()
  }
  
  renderSnakes() {
    console.log(this.props);
  }
  
  render() {
    var cells = []

    for (var i=1; i<101; i++) {
      cells.push(<div className="box" id="cells-{i}" onClick={(e) => console.log(e)}>{i}</div>);
    }
    
    return (
      <div className="Board">
        {cells}
      </div>
    )
  }
}

export default Board
