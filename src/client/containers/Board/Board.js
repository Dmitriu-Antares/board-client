import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask, showTasks } from '../../redux/modules/tasks';
import { showUsers, addUser } from '../../redux/modules/boards';
import Kanban from 'react-trello'
import { TaskCard } from './TaskCard';
import axios from 'axios';

import { Select } from '../../components/index.js';

@connect( state => ({
    tasks: state.tasks,
    userId: state.auth.user.id,
    users: state.boards.users
}),{createTask, showTasks, showUsers, addUser})

export default class Board extends Component {
    constructor(props){
        super(props);
        this.addingTask = false;
    }
    state = {
        title: '',
        issue: '',
        warning: false,
        data: {
            lanes: [
                {
                    id: 'lane1',
                    title: 'Todo',
                    label: '0',
                    cards: []
                },
                {
                    id: 'lane2',
                    title: 'In progress',
                    label: '0',
                    cards: []
                }
                ,
                {
                    id: 'lane3',
                    title: 'QA',
                    label: '0',
                    cards: []
                },
                {
                    id: 'lane4',
                    title: 'Done',
                    label: '0',
                    cards: []
                }
            ]
        }
    };

    addTask = () => {
        const { title,issue, warning } = this.state;
        if(title.length > 4 && issue.length > 4 ){
            this.addingTask = true;
            warning && this.setState({ warning:false });
            this.props.createTask({ title:title, issue:issue, boardId:this.props.match.params.id });
        }
        else {
           this.setState({ warning:true }) ;
        }
    };

    componentDidMount() {
        this.props.showTasks(this.props.match.params.id);
        this.props.showUsers(this.props.userId, this.props.match.params.id);
        this.addTasksToLine(this.props.tasks);
    };

    componentDidUpdate(prevProps){
        const { tasks, showTasks } = this.props;
        if( prevProps.tasks.tasksList !== tasks.tasksList) {
            this.addTasksToLine(tasks.tasksList);
        };
        if(this.addingTask && !tasks.loading && tasks.success) {
            this.addingTask = false;
            showTasks(this.props.match.params.id);
        };
    };

    addTasksToLine = tasks => {
        let cards = [[],[],[],[]];
        if(tasks && tasks.length > 0) {
            tasks.map( task => {
                task.id = task.id.toString();
                task.laneId = this.state.data.lanes[0].id;
                if(task.state === "lane1"){
                    cards[0].push(task);
                } else if (task.state === "lane2") {
                    cards[1].push(task);
                } else if (task.state === "lane3") {
                    cards[2].push(task);
                } else if (task.state === "lane4") {
                    cards[3].push(task);
                }
            });
            this.tasksConstructor(cards);
        }
    };

    tasksConstructor = cards => {
        let lanes = {
            lanes: [
                {
                    id: 'lane1',
                    title: 'Todo',
                    label: cards[0].length.toString(),
                    cards: cards[0]
                },
                {
                    id: 'lane2',
                    title: 'In progress',
                    label: cards[1].length.toString(),
                    cards: cards[1]
                }
                ,
                {
                    id: 'lane3',
                    title: 'QA',
                    label: cards[2].length.toString(),
                    cards: cards[2]
                },
                {
                    id: 'lane4',
                    title: 'Done',
                    label: cards[3].length.toString(),
                    cards: cards[3]
                }
            ]
        };
        this.setState({data:lanes});
    };

    handleDrug = (cardId, sourceLaneId, targetLaneId, position) => {
        console.log(cardId, sourceLaneId, targetLaneId, position);
        axios.post('api/tasks/change_lane',{cardId, sourceLaneId, targetLaneId}).then( res => {
            console.log(res.body);
        }).catch(err => {
            console.log(err);
        })
    };

    render(){
        const { tasks, users, addUser } = this.props;
        const { data } = this.state;
        return(
            <div>
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
                <div className="container">
                    <div>
                        <p>Add people <span>+</span></p>
                    </div>
                    <Select users={users}
                            addUser={addUser}
                            board={this.props.match.params.id}/>
                </div>
                <Kanban data={this.state.data}
                        editable={true}
                        draggable={true}
                        customCardLayout
                        handleDragEnd={this.handleDrug}>
                    <TaskCard/>
                </Kanban>
            </div>
        )
    }
}