import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import TodoDisplay from './todoDisplay.js';
import './style.css';

export default class Tables extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [],
        };
        this.storeValue = this.storeValue.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }
    storeValue(e) {
        if(this._inputElement !== "") {
            var Items = {
                text :this._inputElement.value,
                key : Date.now()
            };
            this.setState((prev) => {
                return {
                    arr : prev.arr.concat(Items)
                };
            });
        }
        this._inputElement.value = "";
        e.preventDefault();
    }
    deleteItems(key) {
        var filteredItems= this .state.arr.filter(function(array) {
            return (array.key !== key)
        })
        this.setState( {
            arr : filteredItems
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.storeValue}>
                    <input ref={(val) => this._inputElement = val} type="text" className="form_input" />
                    <Button type="submit" className="btn-sm">Enter</Button>
                </form>
                <div className="container">
                    <TodoDisplay entries={this.state.arr} delete={this.deleteItems}/>
                </div>
            </div>
        );
    }
}