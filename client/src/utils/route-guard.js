import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardedRoute = ({ component: Component, isAuth, ...rest }) => {
  console.log('[AUTH] Is user authenticated: ' + isAuth);
  return(
    <Route {...rest} render={(props) => (isAuth === true ? <Component {...props} /> : <Redirect to='/news' />)} />
  )
}

export default GuardedRoute;
