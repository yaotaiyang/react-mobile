/**
 * Created by yaotaiyang on 2016/8/3.
 */
/**
 * Created by yaotaiyang on 2016/8/2.
 */
import fetch from 'isomorphic-fetch'
export const GET_ME = 'GET_ME'

export function fetchMe(){
    return (dispatch, getState) => {
        return dispatch(fetchMe())
    }
}
//获取列表
function fetchMe() {
    return dispatch => {
        return fetch("/api?type=me")
            .then(response => response.json())
            .then(function(json){
                return dispatch({
                    type:GET_ME,
                    content:json.result
                });
            });
    }
}
