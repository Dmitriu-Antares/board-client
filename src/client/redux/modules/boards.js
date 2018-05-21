import axios from 'axios';

const CREATE_TABLE_RESULT = "CREATE_TABLE_RESULT";
const SHOW_TABLE_RESULT = "SHOW_TABLE_RESULT";
const NO_TABLE_RESULT = "NO_TABLE_RESULT";

const SHOW_USERS = "SHOW_USERS";
const SHOW_USERS_SUCCESS = "SHOW_USERS_SUCCESS";
const SHOW_USERS_ERROR = "SHOW_USERS_ERROR";

const ADD_USER = "ADD_USER";
const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
const ADD_USER_FAIL = "ADD_USER_FAIL";


const initialState = {
    tables: [],
    users: []
};

export default ( state={}, action={} ) => {
    switch(action.type){
        case CREATE_TABLE_RESULT:
            return { ...state, success: action.success };
        case SHOW_TABLE_RESULT:
            return { ...state, tables: action.tables };
        case NO_TABLE_RESULT:
            return { ...state, err: action.error};
        case SHOW_USERS_SUCCESS:
            return { ...state, users: action.users};
        case SHOW_USERS_ERROR:
            return { ...state, err: action.err };
        default: return state;
    }
};

export function addUser(userId,boardId) {
    return {
        types: [ADD_USER, ADD_USER_SUCCESS, ADD_USER_FAIL],
        promise: (client) => client.post(`/api/boards/add_users`,{userId,boardId})
            .then(result => {return result;})
    }
}

export function createBoard(user,name){
    return dispatch => {
        return axios.post(`/api/boards/create`,{user,name}).then( res => {
            dispatch(createBoardResult(res.data.success));
        })
    }
}

function createBoardResult(bool){
    return {
        type: CREATE_TABLE_RESULT,
        success: bool
    }
}

export function showBoards(userID){
    return dispatch => {
        return axios.get(`/api/boards/get_boards?userID=${userID}`)
            .then( res => {
                dispatch(showBoardsSuccess(res.data.boards));
            })
            .catch(err => {
                dispatch(showBoardsFailed(err.response.data));
            })
    }
}

function showBoardsSuccess(data){
    return {
        type: SHOW_TABLE_RESULT,
        tables: data
    }
}

function showBoardsFailed(err){
    return {
        type: NO_TABLE_RESULT,
        error: err
    }
}

export function showUsers(userId,boardId) {
    return {
        types: [SHOW_USERS, SHOW_USERS_SUCCESS, SHOW_USERS_ERROR],
        promise: (client) => client.get(`/api/boards/get_users?currentId=${userId}&boardId=${boardId}`)
            .then(result => {return result;}),
    }
}
