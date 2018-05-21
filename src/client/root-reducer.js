import { combineReducers } from 'redux';
import auth from './redux/modules/auth';
import boards from './redux/modules/boards';
import tasks from './redux/modules/tasks';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    auth,
    boards,
    tasks,
    form: formReducer
})