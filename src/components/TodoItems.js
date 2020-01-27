import React, { Component } from 'react'

class TodoItems extends Component {
    //returns a list for each passed item
    //execurtes deleteItem with the key as a parameter 
    //this prop is passed from the App
  createTasks = item => {
    return  (
        <li key={item.key} onClick={() => 
            this.props.deleteItem(item.key)}>
        {item.text}
        </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
 //all the list itmes are saved to listItems using a mappping function ]
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default TodoItems