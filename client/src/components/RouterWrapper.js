import React from 'react';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginView from '../views/LoginView';
import ProfileView from '../views/ProfileView';
import GuardedRoute from '../utils/route-guard';
import PublicationsView from '../views/PublicationsView';
import ClassesView from '../views/ClassesView';
import SubjectsView from '../views/SubjectsView';
import TeachersView from '../views/TeachersView';
import NavBarComponent from './navbar/NavBarComponent';

function RouterWrapper(props) {
  const user = useSelector(state => state.userReducer.user);
  const isAuthenticated = props.isAuthenticated;

  return (
    <Router>
      <NavBarComponent user={user} isAuthenticated={isAuthenticated}/>

      <Switch>
        <Route exact path='/login' render={(props) => (<LoginView {...props} isAuth={isAuthenticated}/>)}/>
        <Route path='/news' render={(props) => (<PublicationsView {...props} isAuth={isAuthenticated}/>)}/>
        <GuardedRoute path='/classes' component={ClassesView} auth={isAuthenticated}/>
        <Route path='/subjects' render={(props) => (<SubjectsView {...props} isAuth={isAuthenticated}/>)}/>
        <Route path='/teachers' render={(props) => (<TeachersView {...props} isAuth={isAuthenticated}/>)}/>
        <GuardedRoute path='/profile' component={ProfileView} auth={isAuthenticated}/>
      </Switch>
    </Router>
  );
}

export default RouterWrapper;
