import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    // constructor (props) {
    //     super(props);
    // }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true;
        } else {
            return false;
        }
    }
    // 当父组件的render函数被运行时，它的子组件的render都将被重新运行
    render () {
        const {item, test} = this.props;
        return <div onClick={this.handleClick}>{test} - {item}</div>
    }
    handleClick = () => {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    item: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hhh'
}
export default TodoItem;