import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export default class TodoDisplay extends Component{
    constructor() {
        super();
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(arr) {
        return (
        <li key={arr.key} className="row bg-light li">
            <div className="col">
                <input type="checkbox" />
            </div>
            <div className="col">{arr.text}</div>
            <div className="col">
                <Button className="btn btn-danger btn-sm" onClick={() =>this.delete(arr.key)}>Delete</Button>
            </div>
        </li>);
    }
    delete(key) {
        this.props.delete(key);
    }
    render() {
        var todoentries = this.props.entries;
        var list = todoentries.map(this.createTasks);
        return(
            <ul className="container">
                {list}
            </ul>
        );
    }
}