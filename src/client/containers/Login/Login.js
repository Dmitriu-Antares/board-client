import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/signUp';
import LoginForm from './LoginForm';

@connect(
    state=>({
        successMessage:state.signUp
    }),
    {login})

export default class Login extends Component {
    render() {
        const { successMessage, history, login } = this.props;
        return (
            <div className="container">
                { successMessage === true && <div>You`re successfully registred, login</div>}
                <LoginForm history={history} login={login}/>
            </div>
        )
    }
}