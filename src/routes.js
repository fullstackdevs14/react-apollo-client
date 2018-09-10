import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, HomePage } from './pages';

const AppRoutes = () =>
  <Switch>
    <Route path="/login" component={LoginPage}/>
    <Route path="/register" component={RegisterPage}/>
    <Route path="/home" component={HomePage}/>
    <Redirect to="/login"/>
  </Switch>;

export default AppRoutes;
