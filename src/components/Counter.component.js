import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }

    //bind this to function
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  //increment count function
  incrementCount() {
    this.setState(state => ({
      count: (this.state.count += 1)
    }))
  }

  //decrement count function
  decrementCount() {
    this.setState(state => ({
      count: (this.state.count -= 1)
    }))
  }

  render() {
    return (
      <div className="counter">
        <div>Current Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment Count</button>
        <button onClick={this.decrementCount}>Decrement Count</button>
      </div>
    )
  }
}

export default Counter
