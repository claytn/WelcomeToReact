import React, { Component } from 'react';
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => {
            this.setState(
                {
                    list: res.map(function(item) { return item.title; })
                }
            );
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map(function(todo) {
          return <TodoItem todo={todo}/>
        })}
      </div>
    );
  }
}

export default TodoList;
