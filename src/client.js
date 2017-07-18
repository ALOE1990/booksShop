"use strict";
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

import {addToCart} from './actions/cartActions'

const middleware = applyMiddleware(thunk, createLogger());
//PASS INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);

import routes from './routes'

const Routes = (
    <Provider store={store}>
        {routes}
    </Provider>
);
render(
    Routes,document.getElementById('app')
);


