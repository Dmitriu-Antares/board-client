import setAuthToken from '../../utils/token';
import isEmpty from 'lodash/isEmpty';

const SIGNUP_SUCCESS = "SIGN_UP_SUCCESS";
const LOGIN = "LOGIN";

const initialState = {
    user: {},
    isAuth: false
}
export default (state = initialState, action={})=> {
    switch(action.type){
        case SIGNUP_SUCCESS:
            return action.status;
        case LOGIN:
            return {
                user: action.user,
                isAuth: !isEmpty(action.user)
            };
        default: return state;
    }
}

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


