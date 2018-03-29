import { CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR} from '../actionNames';


export function createTask(data) {
    return {
        types: [CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR],
        promise: (client) => client.post(`/api/tasks/add`,data)
            .then(result => {return result;}),
    }
}