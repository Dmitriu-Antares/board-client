import React,{ Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from '../index.js';
@connect(state => ({
    isAuth:state.signUp.isAuth
}), {})

export default class Home extends Component {

    componentDidMount(){
        !this.props.isAuth && this.props.history.push('/login');
    }
    render() {
        return (
            <div>
               Home page
            </div>
        )
    }
}