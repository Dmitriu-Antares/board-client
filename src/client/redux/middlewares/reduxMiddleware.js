import axios from 'axios';

export const reduxMiddleWare = store => next => action => {
    if(action && action.types !== undefined){
        store.dispatch({type:action.types[0]});
        const result = action.promise(axios);
        result.then(res => {
            const type = { type:action.types[1] };
            store.dispatch({...type,...res.data});
        }).catch(err => {
            const type = { type:action.types[2] };
            store.dispatch({...type,...err.response.data});
        })
    } else {
        next(action);
    }
};