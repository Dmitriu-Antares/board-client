import React, {Component} from 'react';

export default class Select extends Component {
    render() {
        const { users, addUser, board } = this.props;
        return(
            <div>
                { users && users.map((user,id) => {
                    return (
                        <div key={id}>
                            <span  user-id={user.id} onClick={()=> addUser(user.id,board)}>{user.username}</span>
                        </div>
                )})}
            </div>
        )
    }
}