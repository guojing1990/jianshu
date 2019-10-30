import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    LoginWrapper,
    LoginBox,
    Input,
    BUtton
} from './style';
// import { Button } from '../../common/header/style';
class Login extends PureComponent {
    render () {
        const {loginFlag} = this.props;
        if (!loginFlag) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}} />
                        <Input placeholder="密码" type="password" ref={(password) => {this.password = password}}/>
                        <BUtton onClick={() => this.props.login(this.account, this.password)}>登录</BUtton>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/" />
        }
        
    }
    componentDidMount () {
        
    }
}
const mapStateToProps = (state) => ({
    loginFlag: state.getIn(['login', 'login'])
})
const mapDispatchToProps = (dispatch) => ({
    login (accountEle, paswordEle) {
        dispatch(actionCreators.login(accountEle.value, paswordEle.value))
        console.log(accountEle.value, paswordEle.value)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);