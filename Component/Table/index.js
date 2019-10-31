import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export default class Tables extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    }
    render() {
        return(
            <div>
                <input type="text"/>
                <br/>
                <Button>Enter</Button>
                
            </div>
        );
    }
}