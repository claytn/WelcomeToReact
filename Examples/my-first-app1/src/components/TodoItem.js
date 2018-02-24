import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  onItemClick() {
    this.setState(function(prev) {
      return {
        completed: !prev.completed
      };
    });
  }

  render() {
    const styleSheet = {
      todoItemContainer: {
        padding: 20,
        margin: 15,
        backgroundColor: this.state.completed ? "teal" : "maroon",
      }
    };

    return (
      <div style={styleSheet.todoItemContainer}>
        <h4>{this.props.todo}</h4>
        <h5>Completed: {this.state.completed.toString()}</h5>
        <button onClick={this.onItemClick.bind(this)}>Change Status</button>
      </div>
    );
  }
}

export default TodoItem;
