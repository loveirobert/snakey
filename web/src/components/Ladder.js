import React, { Component } from 'react';

class Ladder extends Component {
  
  constructor(props){
  	super(props);
  }
  
  render() {
    const className = 'ladder'+this.props.id
    return (
      <div className={className}></div>
    )
  }
}

export default Ladder
