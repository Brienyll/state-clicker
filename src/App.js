import React, { Component } from 'react';
//import Game from './Game';
import './App.css';
import Rando from './Rando';
//import Button from './Button';

class App extends Component {
  render() {
    return (
    <div className='App'>
      <Rando num={1}/>
    </div>
    );
  }
}

export default App;
