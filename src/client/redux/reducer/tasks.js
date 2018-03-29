import { CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR} from '../actionNames';

export default ( state={}, action={} ) => {
    switch(action.type){
        case CREATE_TASK:
            return { loading: true };
        case CREATE_TASK_SUCCESS:
            return { loading: false, success: action.success};
        case CREATE_TASK_ERROR:
            return { loading: false, error: action.error };
        default: return state;
    }
};