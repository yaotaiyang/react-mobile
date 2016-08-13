/**
 * Created by yaoxy on 2016/7/5.
 */
import 'babel-core/polyfill'
import React from 'react'
import { Router, Route, hashHistory } from 'react-router';

//import { Router, Route, createMemoryHistory } from 'react-router';
//const history = createMemoryHistory(location)

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore();
const rootRoute = {
    childRoutes: [
        require('./views/home'),
        require('./views/list'),
        require('./views/me'),
        require('./views/article')
    ]
}
render(
    <Provider store={store}>
        <Router history={hashHistory}  routes={rootRoute} />
    </Provider>,
    document.getElementById('container')
)
