import React, { Component } from 'react'
import '../styles/counter.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    this.setState(state => ({
      count: (this.state.count += 1)
    }))
  }

  decrementCount() {
    this.setState(state => ({
      count: (this.state.count -= 1)
    }))
  }

  render() {
    return (
      <div className="counter">
        <div>Current Count: {this.state.count}</div>
        <button className="green-button" onClick={this.incrementCount}>
          Increment Count
        </button>
        <button className="red-button" onClick={this.decrementCount}>
          Decrement Count
        </button>
      </div>
    )
  }
}

export default Counter
