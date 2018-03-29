import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../redux/actions/tasks';

@connect( state => ({}),{createTask})

export default class Board extends Component {
    state = {
        title: '',
        issue: '',
        warning: false
    };

    addTask = () => {
        const {title,issue, warning} = this.state;

        if(title.length > 4 && issue.length > 4 ){
            warning && this.setState({ warning:false });
            this.props.createTask({ title:title, issue:issue, boardId:this.props.match.params.id });
        }
        else {
           this.setState({ warning:true }) ;
        }
    };

    render(){
        console.log();
        return(
            <div className="container">
                <div>
                    <p>Add task <span>+</span></p>
                </div>
                <div className="d-flex">
                    <div className="inpup-group">
                        <label htmlFor="">Name</label>
                        <input type="text" onChange={ e => this.setState({ title:e.target.value })}/>
                    </div>
                    <div className="inpup-group">
                        <label htmlFor="">Issue</label>
                        <input type="text" onChange={ e => this.setState({ issue:e.target.value })}/>
                    </div>
                    <button onClick={this.addTask}>Add task</button>
                </div>
            </div>
        )
    }
}