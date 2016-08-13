/**
 * Created by yaoxy on 2016/7/5.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchMe } from '../../actions/me'
import Menu from '../../components/Menu'
import "./style.less";
class PageMe extends Component {
    constructor(props) {
        super(props)
    }
    //初始化渲染后触发
    componentDidMount() {
        //console.log('执行componentDidMount');
        const { dispatch, me } = this.props
        dispatch(fetchMe());
    }
    //每次接受新的props触发
    componentWillReceiveProps(nextProps) {

    }
    handleClick() {
    }
    render() {
        const { me } = this.props;
        const content = me.content;
        return (
            <div>
                <Menu/>
                <div className="article">
                    <div className="hd">
                        <h1 className="page_title">{content.title}</h1>
                    </div>
                    <div className="bd">
                        <article className="weui_article">
                            <section>
                                <h2 className="title">{content.subTitle}</h2>
                                <section>
                                  <p>
                                      {content.content}
                                  </p>
                                </section>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state) => {
    const {me} = state;
    return {me};
})(PageMe)
