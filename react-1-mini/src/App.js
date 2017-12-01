import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    // super()  should come before  this.state
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  addFriend () {
    this.setState({
      picture: '',
      name: '',
      friends: [...this.state.friends, {
        picture: this.state.picture,
        name: this.state.name,
      }]
    })
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
  // onChange attribute that occurs when the  value  of an element has changed
  render() {
    return (
      <div>
        Pictures:
        <input onChange={ event => this.updatePicture(event.target.value) } value={ this.state.picture }/>

        Name:
        <input onChange={ event => this.updateName(event.target.value) } value={ this.state.name }/>

          <button onClick={ () => this.addFriend() }>Add friends</button>

        <div>
          { this.state.friends.map( (friend) =>
            <div>
              <img src={ friend.picture } width="100px"/>
              Name: { friend.name }
            </div>
          ) }
        </div>

        <div>
          State: {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default App;