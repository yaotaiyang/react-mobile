/**
 * Created by yaoxy on 2016/7/5.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchArticle } from '../../actions/article'
import Menu from '../../components/Menu'
import "./style.less";
class PageArticle extends Component {
    constructor(props) {
        super(props)
    }
    //初始化渲染后触发
    componentDidMount() {
        //console.log('执行componentDidMount');
        const { dispatch,article,location} = this.props
        //if(content){
            dispatch(fetchArticle(location.query.id));
        //}
    }
    //每次接受新的props触发
    componentWillReceiveProps(nextProps) {

    }
    handleClick() {
    }
    render() {
        const { article } = this.props;
        const content = article.content;
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
                                <section>
                                    <h3>{content.title}</h3>
                                    <p>{content.content}</p>
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
    const {article} = state;
    return {article};
})(PageArticle )
