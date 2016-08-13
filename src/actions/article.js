/**
 * Created by yaotaiyang on 2016/8/3.
 */
import fetch from 'isomorphic-fetch'
export const GET_ARTICLE = 'GET_ARTICLE'

export function fetchArticle(id){
    return (dispatch, getState) => {
        return dispatch(getArticle(id))
    }
}
//获取列表
function getArticle(id) {
    return dispatch => {
        return fetch("/api?type=article&id="+id)
            .then(response => response.json())
            .then(function(json){
                return dispatch({
                    type:GET_ARTICLE,
                    content:json.result
                });
            });
    }
}
