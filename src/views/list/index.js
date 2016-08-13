/**
 * Created by yaoxy on 2016/7/29.
 */
import {onEnter} from "../baseFunctions"
module.exports = {
    path: 'list',
    onEnter:onEnter,
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./content.js'))
        },"list");
    }
}
