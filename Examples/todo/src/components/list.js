import React, { Component } from 'react';
import ListItem from './list-item';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => {
            this.setState(
                {
                    list: res.map(item => item.title)
                }
            );
        });
    }
    render() {
        var list = this.state.list.map((title, index) => {
            return <ListItem key={index} title={title}/>
        });
        return <ul>{list}</ul>;
    }
}