import {Menu} from 'antd';
import {
  MailOutlined,
  TeamOutlined,
  ReadOutlined,
  HighlightOutlined,
  LoginOutlined,
  RocketTwoTone
} from '@ant-design/icons';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import LoginComponent from './LoginComponent';

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

export default function RouterComponent() {
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

          <Menu.Item key="classes" icon={<TeamOutlined style={svgStyles}/>}>
            <Link to="/classes">Classes</Link>
          </Menu.Item>

          <Menu.Item key="subjects" icon={<ReadOutlined style={svgStyles}/>}>
            <Link to="/subjects">Subjects</Link>
          </Menu.Item>

          <Menu.Item key="teachers" icon={<HighlightOutlined style={svgStyles}/>}>
            <Link to="/teachers">Teachers</Link>
          </Menu.Item>
        </Menu>

        <div style={{fontSize: '1.15rem'}}>
          <Link to="/login">Login <LoginOutlined style={{...svgStyles, color: '#1890ff'}}/></Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/login">
          <LoginComponent/>
        </Route>
        <Route path="/news">
          <h1>News</h1>
        </Route>
        <Route path="/classes">
          <h1>Classes</h1>
        </Route>
        <Route path="/subjects">
          <h1>Subjects</h1>
        </Route>
        <Route path="/teachers">
          <h1>Teachers</h1>
        </Route>
      </Switch>
    </Router>
  );
};
