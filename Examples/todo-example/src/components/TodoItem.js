import React, { Component } from "react";


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    }
  }

  onItemClick() {
    this.setState({
      completed: !this.state.completed,
    });
  }

  render() {
    return(
      <li>
          <h4>{`${this.props.todo}: Completed ${this.state.completed}`}</h4>
          <button onClick={() => this.onItemClick()}>Change Status</button>
      </li>
    );
  }
}

export default TodoItem;
