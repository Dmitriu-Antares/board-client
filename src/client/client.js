import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routers.js';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import reducer from './root-reducer';
import thunk from 'redux-thunk';
import setAuthToken from './utils/token';
import jwt from 'jsonwebtoken';
import { reduxMiddleWare } from './redux/reduxMiddleware';

import { login } from './redux/actions/signUp';

require('./scss/libs/boostrap.css');
require('./scss/main.scss');

const store = createStore(
    reducer,
    window.INITIAL_STATE,
    compose(
        applyMiddleware(thunk,reduxMiddleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    store.dispatch(login(jwt.decode(localStorage.jwtToken)));
}


ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {Routes(store)}
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));