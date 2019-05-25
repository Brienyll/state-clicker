import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1};
  }
  clicky(e) {
    let rand = Math.floor(Math.random() * this.props.num);
    this.setState({num: rand})
  }
  render() {
    return <button onClick={this.clicky}></button>;
  }
}

export default Button;