import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage } from './pages';

const AppRoutes = () =>
  <Switch>
    <Route path="/login" component={LoginPage}/>
    <Route path="/register" component={RegisterPage}/>
    <Redirect to="/login"/>
  </Switch>;

export default AppRoutes;
