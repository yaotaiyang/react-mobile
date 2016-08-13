/**
 * Created by yaoxy on 2016/7/29.
 */
module.exports = {
    childRoutes: [
        { path: 'article/*',
            getComponents(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./content.js'))
                },"article");
            }
        }
    ]
}