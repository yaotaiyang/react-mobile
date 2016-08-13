/**
 * Created by yaotaiyang on 2016/8/3.
 */

import {GET_ARTICLE} from '../actions/article'

//选择新闻后，将state.selectedReddit设为所选选项
var defaultIndex ={
    page:"article",
    content:{}
}
export function article(state = defaultIndex,action){
    switch(action.type){
        case GET_ARTICLE:
            return Object.assign({},state,{
                content:action.content
            });
        default:
            return state;
    }
}