import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

class TodoList extends Component {
  constructor (props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    };
  }
  render () {
    return (
      // Fragment 相当于占位符
      <Fragment>
        {/* 这是注释 */}
        <label htmlFor="insertArea">输入内容：</label>
        <Input placeholder="todoInfo"/>
        <Button type="primary">提交</Button>
        <input 
          id="insertArea"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(input) => {this.input = input}}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {this.getTodoItem()}
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
  getTodoItem = () => {
    return this.state.list.map((item, i) => {
      return (
        <TodoItem 
          key={i}
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
