import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import server from '../../server';
import setAuthToken from '../../utils/token';
import jwt from 'jsonwebtoken';

const validate = values => {
    const errors = {};

    if(!values.username){
        errors.username = "Required"
    } else if (values.username.length < 5) {
        errors.username = "Too short username or email"
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 7) {
        errors.password = "Too short password"
    }

    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

@reduxForm({
    form:'login',
    validate
}, state => ({}))

export default class LoginForm extends Component {
    state = {
        submitError: false,
        errors: {}
    };

    handleSignUp = values => {
        axios.post(`/api/login`,values).then( res => {
            console.log(values);
            if(!res.data.error){
                localStorage.setItem('jwtToken', res.data.token);
                setAuthToken(res.data.token);
                this.props.login(jwt.decode(res.data.token));
                this.props.history.push('/');

            }
        })
            .catch( err => {
                this.setState({ errors:err.response.data.errors })
            });
    };

    render() {
        const { handleSubmit } = this.props;
        const { errors } = this.state;

        return(
            <div className="container">
                <div>
                    <label htmlFor="username">Username</label>
                    <Field name="username" component={renderField} type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component={renderField} type="password" />
                </div>
                <div>
                    <input type="submit" value="Login" onClick={handleSubmit(this.handleSignUp)}/>
                </div>
                { errors && <div>{errors.form}</div>}
            </div>
        )
    }
}