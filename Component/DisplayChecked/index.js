import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export default class CheckedItems extends Component{
    
    render() {
        return(
            <div>
                <Button type="submit" className="btn btn-success">Completed Tasks</Button>
            </div>
        );
    }
}