import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './../constants';
import loadData from './api';

export const setStageTosuccess = (data) => ({
    type: FETCHING_DATA_SUCCESS,
    payload: data
})

export const setStageTofetching = (data) => ({
    type: FETCHING_DATA,
    payload: data
})

export const setStageTofailure = (data) => ({
    type: FETCHING_DATA_FAILURE
})

export const fetchData = () => {
    return (dispatch) => {
        dispatch(setStageTofetching());
        loadData()
            .then(result => {
                dispatch(setStageTosuccess(result))
            })
            .catch(error => {
                dispatch(setStageTofailure())
            })
    }
}

