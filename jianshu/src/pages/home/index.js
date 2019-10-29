import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
class Home extends PureComponent {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4753/49bf2b29c812fc04a2504528c771d242aa06e7ea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                {/* <BackTop onClick={this.handleScrollTop}>
                    回到顶部
                </BackTop> */}
            </HomeWrapper>
        )
    }
    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }
    handleScrollTop = () => {
        window.scrollTo(0, 0)
    }
    bindEvents = () => {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapStateTopProps = (state) => ({
    topicList: state.getIn(['home', 'topicList']),
    articleList: state.getIn(['home', 'articleList']),
    recommendList: state.getIn(['home', 'recommendList']),
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatchToProps = (dispatch) => ({
    changeHomeData () {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow (e) {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
        console.log(document.documentElement.scrollTop);
    }
})
export default connect(mapStateTopProps, mapDispatchToProps)(Home);