import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import  { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList 
} from './style';

// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className="left">下载App</NavItem>
//                 <NavItem className="right">登录</NavItem>
//                 <NavItem className="right">
//                     <span className="iconfont">&#xe636;</span>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                         <NavSearch
//                             className={props.focused ? 'focused' : ''}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         ></NavSearch>
//                     </CSSTransition>
//                     <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writing"><span className="iconfont">&#xe601;</span>写文章</Button>
//                 <Button className="reg">注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     );
// }
class Header extends Component {
    render () {
        const {focused, mouseIn, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
                        {this.getListArea(focused || mouseIn)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing"><span className="iconfont">&#xe601;</span>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getListArea = (show) => {
        const {list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChagnePage} = this.props;
        const newList = list.toJS();
        const pageList = []
        if (newList.length) {
            for (let i = (page - 1)  * 10; i < page * 10; i ++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (show) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChagnePage(page, totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                           pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        // focused: state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handleChagnePage (page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);