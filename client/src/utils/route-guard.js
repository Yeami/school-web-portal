import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  console.log('[AUTH] Is user authenticated: ' + auth);
  return(
    <Route {...rest} render={(props) => (auth === true ? <Component {...props} /> : <Redirect to='/news' />)} />
  )
}

export default GuardedRoute;
