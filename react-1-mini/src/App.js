import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    // super()  should come before  this.____
    super();
    this.state = {
      friends: [],
      picture: '',
      name: '',
    }
  }

  updateName ( value ) {
    this.setState({
      name: value
    })
  }

  updatePicture ( value ) {
    // Do not 
    // this.state.picture = value
    this.setState({
      picture: value
    })
  }

  // Should always have a  render  method which draws to the screen
  // onChange  is an attribute that occurs when the  value  of an element has changed
  render() {
    return (
      <div>
        Pictures:
        <input onChange={ event => this.updatePicture(event.target.value) } value={this.state.picture}/>

        Name:
        <input onChange={ event => this.updateName(event.target.value) } value={this.state.name}/>

          <button>Add friends</button>

        <div>
          State: {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default App;