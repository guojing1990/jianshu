import React, {Component, Fragment} from 'react';

class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render () {
    return (
      // Fragment 相当于占位符
      <Fragment>
        <input 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, i) => {
              return <li key={i} onClick={() => this.handleItemDelete(i)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleBtnClick = () => {
    this.setState({
      list: [this.state.inputValue, ...this.state.list],
      inputValue: ''
    });
  }
  handleItemDelete = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
export default TodoList;
