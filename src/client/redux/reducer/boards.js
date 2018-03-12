import { CREATE_TABLE_RESULT, SHOW_TABLE_RESULT, NO_TABLE_RESULT } from '../actionNames';

const initialState = {
    tables: []
};

export default ( state={}, action={} ) => {
    switch(action.type){
        case CREATE_TABLE_RESULT:
            return { success: action.success };
        case SHOW_TABLE_RESULT:
            return { tables: action.tables };
        case NO_TABLE_RESULT:
            return { err: action.error};
        default: return state;
    }
};