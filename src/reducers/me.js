/**
 * Created by yaotaiyang on 2016/8/3.
 */
import {GET_ME} from '../actions/me'

//选择新闻后，将state.selectedReddit设为所选选项
var defaultIndex ={
    page:"article",
    content:{}
}
export function me(state = defaultIndex,action){
    //return state;
    switch(action.type){
        case GET_ME:
            return Object.assign({},state,{
                content:action.content
            });
        default:
            return state;
    }
}