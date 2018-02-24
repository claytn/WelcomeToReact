import React, { Component } from "react";


class TodoList extends Component {
  this.state = {
    todos: [],
  }

  render() {
    return (
      <ul>
        {this.state.todos.map((todo) => <li>{todo}</li>)}
      </ul>
    );
  }
};
