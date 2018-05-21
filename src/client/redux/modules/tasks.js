import axios from 'axios';

const CREATE_TASK = "CREATE_TASK";
const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
const CREATE_TASK_ERROR = "CREATE_TASK_ERROR";
const SHOW_TASKS = "SHOW_TASKS";

export default ( state={}, action={} ) => {
    switch(action.type){
        case CREATE_TASK:
            return { ...state, loading: true };
        case CREATE_TASK_SUCCESS:
            return { ...state, loading: false, success: action.success};
        case CREATE_TASK_ERROR:
            return { ...state, loading: false, error: action.error };
        case SHOW_TASKS:
            return { ...state, tasksList: action.tasks };
        default: return state;
    }
};

export function createTask(data) {
    return {
        types: [CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR],
        promise: (client) => client.post(`/api/tasks/add`,data)
            .then(result => {return result;}),
    }
};

export function showTasks(id) {
    return dispatch => {
        axios.get(`api/tasks/show?boardID=${id}`).then( res => {
            dispatch(showTasksSuccess(res));
        })
    }
};

const showTasksSuccess = res => {
    return {
        type: SHOW_TASKS,
        tasks: res.data
    }
};