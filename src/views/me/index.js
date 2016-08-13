/**
 * Created by yaoxy on 2016/7/29.
 */
module.exports ={
    path: 'me',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./content.js'))
        },"me");
    }
}
