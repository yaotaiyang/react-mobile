/**
 * Created by yaotaiyang on 2016/7/5.
 */

import {HOME_ADDDATA} from '../actions/home'

//选择新闻后，将state.selectedReddit设为所选选项
var defaultState ={
    page:"home",
    list:[]
}
export function home(state = defaultState,action){
    switch(action.type){
        case HOME_ADDDATA:
            return Object.assign({},state,{
                list:state.list.concat(action.list)
            });
        default:
            return state;
    }
}
