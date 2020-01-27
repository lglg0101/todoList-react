import React, { Component } from "react";
import "./index.css";

import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";


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
  //   handleInput gets the event, gets value fromn input and sets the
  //   state to object of current item
  // it takes key as current data
  //it takes text as input data
  //date now is number of milliseconds from 1970 to now

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    };
    this.setState({
      currentItem
    });
    console.log("input");
  };

  //manages to add to the list
  //to handle click on add
  //prevents default reload 
//gets the value in the input box from the state current item

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    //checking if we are adding an empty value to our todo 
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
    console.log("add item");
  };

  //this filters the recieved key from the items state
  //sets the items to filtered items 
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
        return item.key !== key
    })
    this.setState({
        items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container1">
          <h1>Lissy's Tasks</h1>
          <h2>Click on task to delete</h2>

          <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />

          <TodoItems entries={this.state.items} 
          deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}
export default App;
