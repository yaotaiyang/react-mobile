/**
 * Created by yaoxy on 2016/8/2.
 */
import {GET_LIST} from '../actions/list'

//选择新闻后，将state.selectedReddit设为所选选项
var defaultList ={
    page:"list",
    list:[]
}
export function list(state = defaultList,action){
    switch(action.type){
        case GET_LIST:
            return Object.assign({},state,{
                list:state.list.concat(action.list)
            });
        default:
            return state;
    }
}