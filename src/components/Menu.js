/**
 * Created by yaotaiyang on 2016/7/31.
 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import "./Menu.less"
/* <select onChange={e => onChange(e.target.value)} value={value}>*/
export default class Menu extends Component {
    render() {
        const { } = this.props
        return (
            <div className="weui_tabbar">
                <Link to="/" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="/images/icon_nav_button.png"/>
                    </div>
                    <p className="weui_tabbar_label">首页</p>
                </Link>
                <Link to="/list" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="/images/icon_nav_msg.png"/>
                    </div>
                    <p className="weui_tabbar_label">列表</p>
                </Link>
                <Link to="/me" className="weui_tabbar_item">
                    <div className="weui_tabbar_icon">
                        <img src="/images/icon_nav_article.png"/>
                    </div>
                    <p className="weui_tabbar_label">我</p>
                </Link>
            </div>
        )
    }
}