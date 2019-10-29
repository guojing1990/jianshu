import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    }); 
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA: 
            return changeHomeData(state, action);
        case actionTypes.ADD_HOME_DATA: 
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            });
            // return state.set('articleList', state.get('articleList').concat(action.list));
        case actionTypes.TOGGLE_TOP_SHOW: 
            return state.set('showScroll', action.flag);
        default:
            return state;
    }
}