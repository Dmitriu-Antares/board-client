import React, { Component } from 'react';

export default class Board extends Component {
    render(){
        return(
            <div className="container">
                <div>
                    <p>Add task <span>+</span></p>
                </div>
                <div className="d-flex">
                    <div className="inpup-group">
                        <label htmlFor="">Name</label>
                        <input type="text"/>
                    </div>
                    <div className="inpup-group">
                        <label htmlFor="">Issue</label>
                        <input type="text"/>
                    </div>
                    <button>Add task</button>
                </div>
            </div>
        )
    }
}