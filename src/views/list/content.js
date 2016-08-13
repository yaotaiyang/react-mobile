/**
 * Created by yaotaiyang on 2016/7/5.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../../actions/list'
import List from '../../components/List'
import Menu from '../../components/Menu'
import {getPageData} from "../../actions/home";
import {onTime} from '../baseFunctions';
import "./style.less";
class PageList extends Component {
    constructor(props) {
        super(props)
    }
    //初始化渲染后触发
    componentDidMount() {
        onTime.bind(this)("dataStart");
        const { dispatch, list } = this.props
        if(list.list.length==0){
            dispatch(fetchList(list));
        }
    }
    componentDidUpdate(){
        onTime.bind(this)("domReady");
    }
    //每次接受新的props触发
    componentWillReceiveProps(nextProps) {
        onTime.bind(this)("dataReady");
    }
    handleClick() {
        const { dispatch} = this.props
        console.log(dispatch(getPageData()));
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <div onClick={this.handleClick.bind(this)}>点击【这里】获取首页数据，console中输出</div>
                <Menu />
                <List list={list.list}/>
            </div>
        )
    }
}
export default connect((state) => {
    const {list} = state;
    return {list};
})(PageList)
