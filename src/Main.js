
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './Articles';
import ArticlesDetails from './Articles/Details.js';

const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/articles' />
    <Route exact path='/articles' render={() => <List /> } />
    <Route exact path='/article/:id' render={() => <ArticlesDetails /> } />
  </Switch>
);

export default Main;
