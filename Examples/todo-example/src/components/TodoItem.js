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
      <div
        style={{
          padding: 20,
          margin: 15,
          background: this.state.completed ? "teal" : "maroon",
        }}>
          <h4>{this.props.todo}</h4>
          <h5>Completed: {this.state.completed.toString()}</h5>
          <button onClick={() => this.onItemClick()}>Change Status</button>
      </div>
    );
  }
}

export default TodoItem;
