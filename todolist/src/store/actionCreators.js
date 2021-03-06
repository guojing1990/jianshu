import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEELTE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DEELTE_TODO_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
// saga
export const getInitList = () => ({
    type: GET_INIT_LIST
})
// thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://mock-api.com/NnX4mkny.mock/todolist').then((res) => {
            const data = res.data; 
            const action = initListAction(data);
            dispatch(action);
            console.log(data);
            // const action = initListAction(data);
            // store.dispatch(action);
            // console.log(res);
        })
    }
}