import React, { Component } from 'react'
import './index.css'

import TodoList from './components/TodoList'



class App extends Component {
  render() {
    return (
      <div className="App">
            <div>
                <h1>Testing</h1>
                <TodoList />
            </div>
      </div>
    )
  }
}
export default App