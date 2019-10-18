import React, {Component, Fragment} from 'react';
import { Input, Button, List, Typography } from 'antd';

class TodoListUI extends Component {
    render () {
        return (
            // Fragment 相当于占位符
            <Fragment>
            {/* 这是注释 */}
            <Input 
                value={this.props.inputValue} 
                placeholder="todoInfo"
                onChange={this.props.handleInputChange}
            />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
            <List
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => this.props.handleItemDelete(index)}>
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
        )
    }
}
export default TodoListUI;