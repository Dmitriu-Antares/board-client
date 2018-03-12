import axios from 'axios';

export function listAdd(apiData) {
    return dispatch => {
        return axios.get(apiData).then( res=> {
            dispatch(lists(res.data))
        })
    }

}

export function lists(apiData) {
    const list =  {
        type: 'SUCCESS_LIST',
        list: apiData
    };
    return list;
}