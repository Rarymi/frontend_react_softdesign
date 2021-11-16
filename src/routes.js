import { Switch, Route } from 'react-router';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Book from 'pages/Book';
import CreateBook from 'pages/CreateBook';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/create" component={CreateBook} />

    <Route path="/book/:id?" component={Book} />
  </Switch>
);

export default routes;
