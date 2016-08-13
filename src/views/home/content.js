/**
 * Created by yaotaiyang on 2016/7/29.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchIndexList} from '../../actions/home'
import List from '../../components/List'
import Menu from '../../components/Menu'
import {onTime} from '../baseFunctions';
import "./style.less";
class PageHome extends Component {
    constructor(props) {
        super(props)
    }
    //初始化渲染后触发
    componentDidMount() {
        onTime.bind(this)("dataStart");
        const { dispatch, home } = this.props
        if(home.list.length==0) {
            dispatch(fetchIndexList());
        }
    }
    componentDidUpdate(){
        onTime.bind(this)("domReady");
    }
    //每次接受新的props触发
    componentWillReceiveProps(nextProps) {
        onTime.bind(this)("dataReady");
    }
    componentWillUnmount(){

    }
    handleClick(nextReddit) {

    }
    render() {
        const {home} = this.props
        return (
            <div>
                <Menu />
                <List list={home && home.list||[]}/>
            </div>
        )
    }
}
PageHome.propTypes = {
    dispatch: PropTypes.func.isRequired
}
export default connect((state) => {
    const {home} = state;
    //return Object.assign({},state);
    return {home};
})(PageHome)
