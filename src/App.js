import React, { Component } from "react";
import "./index.css";

import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }

  //manages the change in the inoput field
  handleInput = e => {
    console.log("input");
  };

  //manages to add to the list
  addItem = e => {
    e.preventDefault();
    console.log("add item");
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Testing</h1>
          <TodoList 
          addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          />
        </div>
      </div>
    );
  }
}
export default App;
