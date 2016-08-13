/**
 * Created by yaoxy on 2016/8/2.
 */
import fetch from 'isomorphic-fetch'
export const GET_LIST = 'GET_LIST'

export function fetchList(){
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}
//获取列表
function fetchPosts() {
    return dispatch => {
        return fetch("/api?type=getList")
            .then(response => response.json())
            .then(function(json){
                return dispatch({
                    type:GET_LIST,
                    list:json.result.list
                });
            });
    }
}
