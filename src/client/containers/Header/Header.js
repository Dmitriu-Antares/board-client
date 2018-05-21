import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/modules/auth';
import { withRouter } from 'react-router-dom';
import server from '../../server';

const Auth = props => {
    return(
        <div className="d-flex">
            <ul className="d-flex">
                <li><Link to="/boards">Boards</Link></li>
            </ul>
            <span>Hello, {props.user.username} </span>
            <span onClick={props.logout}>Sign Out</span>
        </div>
    )
};


@connect(
    state => ({
        user: state.auth.user,
        isAuth: state.auth.isAuth
    }),
    { logout }
)

@withRouter

export default class Header extends Component {

    logout = () => {
        this.props.logout();
        this.props.history.push(`/api/login`);
    };

    render(){
        const { isAuth, user } = this.props;

        const notAuth = (
            <div className="d-flex">
                <span><Link to="/login">Sign in</Link></span>
                <span><Link to="/signup">Sign up</Link></span>
            </div>
        );

        return (
            <div className="navbar">
                <div className="container d-flex justify-content-between">
                    <Link to="/">Logo</Link>
                    { isAuth
                        ? <Auth user={user} logout={this.logout}/>
                        : notAuth }
                </div>
            </div>
        )
    }
}