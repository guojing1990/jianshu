import React, {Component, Fragment} from 'react';
import { Input, Button, List, Typography } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import axios from 'axios';

class TodoList extends Component {
  constructor (props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = store.getState();
    console.log(store.getState());
  }
  componentDidMount () {
      axios.get('/api/todolist').then((res) => {
          console.log(res);
      })
  }
  render () {
      
    return (
      // Fragment 相当于占位符
      <Fragment>
        {/* 这是注释 */}
        <Input value={this.state.inputValue} placeholder="todoInfo"/>
        <Button type="primary">提交</Button>
        <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (
                <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
        />
        <ul>
          {/* {this.getTodoItem()} */}
          {/* {
            // this.getTodoItem()
            this.state.list.map((item, i) => {
              return (
                <TodoItem 
                  item={item} 
                  index={i}
                  deleteItem={this.handleItemDelete}
                />
                // <li 
                //   key={i} 
                //   onClick={() => this.handleItemDelete(i)}
                //   dangerouslySetInnerHTML = {{__html: item}}
                // >
                // </li>
              )
            })
          } */}
        </ul>
      </Fragment>
    );
  }
  
  handleInputChange = (e) => {
    // 使用函数返回值，异步设置state提升性能
    const value = this.input.value;
    this.setState(() => ({
        inputValue: value
      })
    );
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleBtnClick = () => {
    this.setState((prevState) => ({
      list: [prevState.inputValue, ...prevState.list],
      inputValue: ''
    }));
    // this.setState({
    //   list: [this.state.inputValue, ...this.state.list],
    //   inputValue: ''
    // });
  }
  handleItemDelete = (index) => {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    });
    // this.setState({
    //   list: list
    // });
  }
}
export default TodoList;
