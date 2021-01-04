import {Menu} from 'antd';
import {
  MailOutlined,
  TeamOutlined,
  ReadOutlined,
  HighlightOutlined,
  LoginOutlined,
  RocketTwoTone,
  UserOutlined,
} from '@ant-design/icons';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {isEmpty} from '../utils/utils';
import {getUserInfo} from "../actions/userActions";

import LoginView from '../views/LoginView';
import ProfileView from '../views/ProfileView';
import GuardedRoute from '../utils/route-guard';
import NewsView from '../views/NewsView';
import ClassesView from '../views/ClassesView';
import SubjectsView from '../views/SubjectsView';
import TeachersView from '../views/TeachersView';

const routerWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.15rem',
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  padding: '0 3rem',
  marginBottom: '2rem',
};

const menuStyles = {
  fontSize: '1.15rem',
};

const svgStyles = {
  fontSize: '1.15rem',
  color: 'red',
};

function RouterWrapper() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.userReducer.user);
  const token = localStorage.getItem('token');
  const isEmptyUser = isEmpty(user) && user.constructor === Object;

  console.log('User: ', user);
  console.log('Token: ', token);

  if (isEmptyUser && !token) {
    console.log('[INFO] User info and token are empty');
  } else if (isEmptyUser && token) {
    console.log('[INFO] User info is empty, but token exists');
    dispatch(getUserInfo());
  } else {
    console.log('[INFO] User info and token exists');
  }

  const isAuthenticated = (!isEmptyUser && Boolean(token));

  return (
    <Router>
      <div style={routerWrapper}>
        <div className="logo">
          <RocketTwoTone style={svgStyles} twoToneColor="red"/> School Web Portal
        </div>

        <Menu style={menuStyles} mode="horizontal">
          <Menu.Item key="news" icon={<MailOutlined style={svgStyles}/>}>
            <Link to="/news">News</Link>
          </Menu.Item>

          {
            isAuthenticated &&
            <Menu.Item key="classes" icon={<TeamOutlined style={svgStyles}/>}>
              <Link to="/classes">Classes</Link>
            </Menu.Item>
          }

          <Menu.Item key="subjects" icon={<ReadOutlined style={svgStyles}/>}>
            <Link to="/subjects">Subjects</Link>
          </Menu.Item>

          <Menu.Item key="teachers" icon={<HighlightOutlined style={svgStyles}/>}>
            <Link to="/teachers">Teachers</Link>
          </Menu.Item>

          {
            isAuthenticated &&
            <Menu.Item key="profile" icon={<UserOutlined style={svgStyles}/>}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          }
        </Menu>

        <div style={{fontSize: '1.15rem'}}>
          <Link to="/login">Login <LoginOutlined style={{...svgStyles, color: '#1890ff'}}/></Link>
        </div>
      </div>

      <Switch>
        <Route exact path='/login' render={(props) => (<LoginView {...props} isAuth={isAuthenticated}/>)}/>
        <Route path='/news' component={NewsView}/>
        <GuardedRoute path='/classes' component={ClassesView} auth={isAuthenticated}/>
        <Route path='/subjects' component={SubjectsView}/>
        <Route path='/teachers' component={TeachersView}/>
        <GuardedRoute path='/profile' component={ProfileView} auth={isAuthenticated}/>
      </Switch>
    </Router>
  );
}

export default RouterWrapper;
