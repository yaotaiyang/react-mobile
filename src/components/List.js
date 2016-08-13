/**
 * Created by yaotaiyang on 2016/8/1.
 */
import React, { PropTypes, Component } from 'react'
import classNames from 'classnames';
import { Link } from 'react-router'
export default class List extends Component {
    render() {
        const { list } = this.props
        return (
            <div className="weui_panel_bd">
                {list.map((item, i) =>
                    <Link key={i} to={"/article/a=1?id="+i} className={classNames("weui_media_box","weui_media_appmsg")}>
                        <div className="weui_media_hd">
                            <img className="weui_media_appmsg_thumb" src="images/list.png" />
                        </div>
                        <div className="weui_media_bd">
                            <h4 className="weui_media_title">{item.title}</h4>
                            <p className="weui_media_desc">{item.description}</p>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}
List.propTypes = {
    list: PropTypes.array.isRequired
}