import { SIGNUP_SUCCESS, LOGIN, LOGOUT } from '../actionNames';
import setAuthToken from '../../utils/token';

export function signUpModal(bool) {
    return dispatch => {
        dispatch(modalBool(bool));
    }
}

function modalBool(data) {
    const list = {type:SIGNUP_SUCCESS, status:data};
    return list;
}

export function login(user) {
    return {
        type: LOGIN,
        user
    }
}

export function logout() {
    return dispatch => {
        setAuthToken(false);
        localStorage.removeItem('jwtToken');
        dispatch(login({}));
    }
}

