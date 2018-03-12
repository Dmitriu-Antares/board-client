import { SIGNUP_SUCCESS, LOGIN } from '../actionNames';
import isEmpty from 'lodash/isEmpty';

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