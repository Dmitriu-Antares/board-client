export default (state = [],action={})=> {
    switch(action.type){
        case 'SUCCESS_LIST':
            return action.list
        case 'ERROR_LIST':
            return {
                error: action.error,
                errorStage: true
            }
        default: return state;
    }
}