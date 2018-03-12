import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { listAdd } from '../redux/actions/listActions';

@connect(state => ({ list: state.list }),{ listAdd })
export default class Lists extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listAdd("tasks/all");
    }

    renderUsers() {
        return this.props.list.tasks.map((el)=>{
            return <li key={el.id}>{el.text}</li>
        })

    }

    render() {
        return (
            <div>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

export const loadData = (store) => {
    return store.dispatch(listAdd("tasks/all"));
}



