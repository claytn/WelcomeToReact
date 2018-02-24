import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            completed: false
        }
    }
    onItemClick() {
        this.setState(prev => (
            {
                completed: !prev.completed
            }
        ));
    }
    render() {
        return (
            <li>
                <h4>
                    {this.state.title}
                </h4>
                <p>
                    Completed: {this.state.completed + ""}
                </p>
                <button onClick={this.onItemClick.bind(this)}>
                    Change Status
                </button>
            </li>
        );
    }
}