import React, { Component } from 'react';

class Board extends Component {
  render() {
    var cells = []

    for (var i=1; i<101; i++) {
        cells.push(<div className="box" id="cells-{i}">{i}</div>);
    }
    
    return (
      <div className="Board">
        {cells}
      </div>
    )
  }
}

export default Board
