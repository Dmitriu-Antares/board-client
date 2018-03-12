import { combineReducers } from 'redux';
import list from './redux/reducer/list';
import signUp from './redux/reducer/signUp';
import boards from './redux/reducer/boards';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    list,
    signUp,
    boards,
    form: formReducer
})