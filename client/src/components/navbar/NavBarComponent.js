import React from 'react';
import {Link} from 'react-router-dom';

import {
  HighlightOutlined,
  LoginOutlined,
  MailOutlined,
  ReadOutlined,
  RocketTwoTone,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import {Avatar, Menu} from 'antd';

const routerWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.15rem',
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  padding: '0 3rem',
  marginBottom: '2rem',
  backgroundColor: '#ffffff',
};

const menuStyles = {
  fontSize: '1.15rem',
};

const svgStyles = {
  fontSize: '1.15rem',
  color: 'red',
};

function NavBarComponent({user, isAuthenticated}) {
  return (
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

      <div style={{display: 'flex', alignItems: 'center', fontSize: isAuthenticated ? '1rem' : '1.15rem'}}>
        {isAuthenticated &&
        <div>
          <Avatar size={38} src={user.avatarUrl} style={{marginRight: '1rem'}}/>
          <span>Hello there <span style={{fontStyle: 'italic'}}>{user.firstName} {user.lastName}</span>!</span>
        </div>
        }
        {!isAuthenticated && <Link to="/login">Login <LoginOutlined style={{...svgStyles, color: '#1890ff'}}/></Link>}
      </div>
    </div>
  );
}

export default NavBarComponent;
