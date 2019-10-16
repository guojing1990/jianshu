import React, {Component} from 'react';
class TodoItem extends Component {
    // constructor (props) {
    //     super(props);
    // }
    render () {
        const {item} = this.props;
        return <div onClick={this.handleClick}>{item}</div>
    }
    handleClick = () => {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
export default TodoItem;