import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from "immutable";
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

const chagneList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            const action = chagneList(data.data);
            dispatch(action);
        }).catch((e) => {
            console.log(e);
        })
    }
};