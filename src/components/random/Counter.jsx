import React, { Component } from 'react'

class Counter extends Component {
  state = { counter: 0 }
  handleClick = e => {
    e.preventDefault()
    this.setState({ counter: this.state.counter + 1 })
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>Click to increase count!</button>
      </div>
    )
  }
}

export default Counter
