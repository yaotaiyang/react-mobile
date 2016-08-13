/**
 * Created by yaotaiyang on 2016/8/8.
 */
export function onEnter(){
    window.sTime = window.sTime ||{};
    window.sTime = window.sTime ||{};
    var curPath = this.path,sTime = window.sTime;
    if(curPath.indexOf("/")!=0){
        curPath = "/"+curPath;
    }
    if(!sTime[curPath]){
        sTime[curPath] = {
            "onEnter" : +new Date()
        }
    }
};
export function onTime(str){
    var curPath = this.props.location.pathname,sTime = window.sTime;
    if(sTime[curPath] && !sTime[curPath][str]){
        sTime[curPath][str] = +new Date();
    }
    if(str == "domReady"){
        console.log(sTime);
    }
}