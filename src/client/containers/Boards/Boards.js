import React, { Component } from 'react';
import { createBoard, showBoards } from '../../redux/modules/boards';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

@connect( state=>({
    userId: state.auth.user.id,
    boardCreated: state.boards.success,
    boards: state.boards.tables
}),{ createBoard, showBoards })
export default class Boards extends Component {
    state = {
        createModal: false,
        boardName: ''
    };

    componentDidMount(){
        this.props.showBoards(this.props.userId);
    }

    createBoard = () => {
        this.props.createBoard(this.props.userId,this.state.boardName);
        this.props.showBoards(this.props.userId);
    };

    render(){
        const { createModal } = this.state;
        const { boardCreated, boards } = this.props;

        return(
            <div className="container">
                <p onClick={() => {this.setState({ createModal:!createModal })}}>Create new board</p>
                { createModal && <div>
                    <input type="text"
                           placeholder="Board Name" onChange={ e => this.setState({ boardName: e.target.value })}/>
                    <span onClick={this.createBoard}>Create</span>
                </div>}
                { boardCreated && <div>Board successfully created </div> }

                <div>
                    <span>Your boards:</span>
                    <div className="d-flex">
                        { boards && boards.map( (board,key) => {
                            return (
                                <Link to={`boards/${board.id}`} key={key}>
                                    <div>
                                        <p>{board.name}</p>
                                        <p>{`Created at ${board.updated_at}`}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}