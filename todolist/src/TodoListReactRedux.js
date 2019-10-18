import React, {Component} from 'react';
import {connect} from 'react-redux';
class TodoListReactRedux extends Component {
    render () {
        const {inputValue, list, changeInputValue, handleClick, handleDelete} = this.props;
        return (
            <div>
                <div>
                    <input onChange={changeInputValue} value={inputValue} />
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li onClick={handleDelete} key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
// store 里面的公用数据映射到这个组件的props里
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// store.dispatch 方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue (e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleClick () {
            const action = {
                type: 'add_todo_item'
            };
            dispatch(action);
        },
        handleDelete () {}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactRedux);