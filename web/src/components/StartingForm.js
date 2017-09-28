import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class StartingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }
  
  handleInputChange = e => this.setState({ name: e.target.value });

  handleButtonClick = () => {
    this.props.onButtonClick(this.state.name)
    this.setState({name: ''})
  }
  
  render() {
    return (
      <div className="startform">
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Give me your name"
              onChange={this.handleInputChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <Button className="nameSenderButton" onClick={this.handleButtonClick}>Send</Button>
      </div>
    );
  }
}

export default StartingForm;
