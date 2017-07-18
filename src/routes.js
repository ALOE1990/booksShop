"use strict";
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import BooksList from './components/pages/booksList'
import BookForm from './components/pages/booksForm'
import Cart from './components/pages/cart'
import About from './components/pages/about'
import Contacts from './components/pages/contacts'

import Main from './main'

const routes = (
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BookForm} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
            </Route>
        </Router>
);

export default routes;
