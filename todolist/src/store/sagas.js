import {put, takeEvery} from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';

function* getInitList () {
    try {
        const res = yield axios.get('http://mock-api.com/NnX4mkny.mock/todolist');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log(e);
    }
    
}
// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
    // yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
export default mySaga;