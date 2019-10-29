import axios from 'axios';
import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const changeHomeDate = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
const addHomeDate = (list, nextPage) => ({
    type: actionTypes.ADD_HOME_DATA,
    list: fromJS(list),
    nextPage
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeDate(result)
            dispatch(action);
        })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            console.log(result);
            const action = addHomeDate(result, page + 1)
            dispatch(action);
        })
    }
}
export const toggleTopShow = (flag) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    flag
})