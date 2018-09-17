import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'clementine', 'dragonfruit', 'bl']}
        />
        <Counter />
      </div>
    )
  }
}

export default App
