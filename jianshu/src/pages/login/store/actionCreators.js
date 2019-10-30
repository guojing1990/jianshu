import * as actionTypes from './actionTypes';
import axios from 'axios';
const changLogin = (data) => ({
    type: actionTypes.CHANGE_LOGIN,
    data
})
export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
                dispatch(changLogin(result));
            } else {
                alert('登录失败');
            }
        })
    }
}
export const logout = () => ({
    type: actionTypes.LOGOUT,
    data: false
})