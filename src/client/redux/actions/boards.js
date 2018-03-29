import axios from 'axios';
import server from '../../server';
import { CREATE_TABLE_RESULT,SHOW_TABLE_RESULT, NO_TABLE_RESULT } from '../actionNames';

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
