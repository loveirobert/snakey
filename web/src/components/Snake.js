import React, { Component } from 'react';

class Snake extends Component {
  
  constructor(props){
  	super(props);
  }
  
  render() {
    const className = 'snake'+this.props.id
    return (
      <div className={className}></div>
    )
  }
}

export default Snake
