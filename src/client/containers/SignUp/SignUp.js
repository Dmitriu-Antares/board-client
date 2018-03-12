import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import { signUpModal } from '../../redux/actions/signUp';


const validate = values => {
    const errors = {};

    if(!values.fullname){
        errors.fullname = "Required"
    } else if (values.fullname.length < 7) {
        errors.fullname = "Too short full name"
    }

    if(!values.username){
        errors.username = "Required"
    } else if (values.username.length < 7) {
        errors.username = "Too short username"
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 7) {
        errors.password = "Too short password"
    }

    if(!values.passwordCheck) {
        errors.passwordCheck = 'Required'
    } else if(values.passwordCheck !== values.password) {
        errors.passwordCheck = 'Passwords need to be identical'
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
    form:'register',
    validate
}, state => ({}))

@connect(
    state => ({}),
    { signUpModal }
)

export default class SignUp extends Component {
    state = {
        submitError: false,
        errors: {}
    };

    handleSignUp = values => {
        axios.post(`/api/signup`,values)
            .then( res => {
                if(!res.data.error){
                    this.props.signUpModal(true);
                    this.props.history.push('/login');
                }
            })
            .catch( err => {
                this.setState({ errors:err.response.data.error })
            });
    };

    render() {
        const { handleSubmit } = this.props;
        const { errors } = this.state;

        return (
            <div className="container">
                { (this.submitError !== false) && <div>{this.state.submitError}</div> }
                <div>
                    <div>
                        <label htmlFor="fullname">Full Name</label>
                        <Field name="fullname"
                               component={renderField}
                               type="text" />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field name="username" component={renderField} type="text" />
                        { errors.username && <div>{errors.username}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component={renderField} type="text" />
                        { errors.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component={renderField} type="text" />
                    </div>
                    <div>
                        <label htmlFor="passwordCheck">Confirm your password</label>
                        <Field name="passwordCheck" component={renderField} type="text" />
                    </div>
                    <div>
                        <input type="submit" value="Create Account" onClick={handleSubmit(this.handleSignUp)}/>
                    </div>
                </div>
            </div>
        )
    }
}