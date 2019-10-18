import React, {Component, Fragment} from 'react';

import 'antd/dist/antd.css';
import store from './store';
import axios from 'axios';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
class TodoList extends Component {
  constructor (props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = store.getState();
    console.log(store.getState());
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount () {
      axios.get('/api/todolist').then((res) => {
          console.log(res);
      })
  }
  render () {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleItemDelete = {this.handleItemDelete}
      />
    );
  }
  
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
  handleBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete = (index) => {
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;
