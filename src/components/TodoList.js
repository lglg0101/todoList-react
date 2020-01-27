import React, { Component } from 'react'

class TodoList extends Component {
componentDidUpdate() {
    this.props.inputElement.current.focus()
}

    //create a reference to refer to the input 
  inputElement = React.createRef()

  render() {
    return (
      <div className="todoListMain">
        <div className="header">

       {/* form on submit, calls add item  */}
          <form onSubmit={this.props.addItem}>
              
            <input 
            //refers to current element
            ref = {this.props.inputElement} 
            //stores as tet in the current element object
            value={this.props.currentItem.text} 
            //neccessary to call handleInput
            onChange={this.props.handleInput} 
            placeholder="Task" />

            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default TodoList