import React, { Component } from 'react'

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.clicky = this.clicky.bind(this);
  }
  clicky(e) {
    let rand = Math.floor(Math.random() * 10);
    this.setState({num: rand})
  }

  render() {
    return (
      <div>
        <h1> { this.state.num } </h1>
        {this.state.num === 9 ? <h2> You Win </h2> : 
        <button onClick={this.clicky}> Random Number </button>}
      </div>
    );
  }
}

export default Rando;