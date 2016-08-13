/**
 * Created by yaoxy on 2016/7/5.
 */
import fetch from 'isomorphic-fetch'
export const HOME_ADDDATA = 'HOME_ADDDATA'

export function fetchList(){
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}
//获取列表
function fetchPosts() {
    return dispatch => {
        return fetch("/api?type=indexList")
            .then(response => response.json())
            .then(function(json){
                return dispatch({
                    type:HOME_ADDDATA,
                    list:json.result.list
                });
            });
    }
}

export function fetchIndexList(){
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}
export function getPageData(){
    return (dispatch,getState)=>{
        return getState().home;
    }
}

