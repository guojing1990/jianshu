import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
class Home extends Component {
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
            </HomeWrapper>
        )
    }
    componentDidMount () {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHomeData(action);
            console.log(result);
        })
    }
}
const mapStateTopProps = (state) => ({
    topicList: state.getIn(['home', 'topicList']),
    articleList: state.getIn(['home', 'articleList']),
    recommendList: state.getIn(['home', 'recommendList'])
})
const mapDispatchToProps = (dispatch) => ({
    changeHomeData (action) {
        dispatch(action);
    }
})
export default connect(mapStateTopProps, mapDispatchToProps)(Home);