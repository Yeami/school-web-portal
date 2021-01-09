import React from 'react';
import {Button, DatePicker, Dropdown, Input, Menu} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const NewTeacherFormComponent = (props) => {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
  }

  const title = {
    marginTop: '1rem',
  }

  const onPositionClick = (p) => {
    props.onPositionChange(p._id);
  }

  return (
    <div style={wrapper}>
      <span>First name:</span>
      <Input name="firstName" onChange={props.onFirstNameChange}/>

      <span style={title}>Last name:</span>
      <Input name="lastName" onChange={props.onLastNameChange}/>

      <span style={title}>Patronymic:</span>
      <Input name="patronymic" onChange={props.onPatronymicChange}/>

      <span style={title}>Email:</span>
      <Input name="email" onChange={props.onEmailChange}/>

      <span style={title}>Password:</span>
      <Input name="password" onChange={props.onPasswordChange}/>

      <span style={title}>Avatar URL:</span>
      <Input name="avatarUrl" onChange={props.onAvatarUrlChange}/>

      <span style={title}>Birth date:</span>
      <DatePicker onChange={(e) => props.onBirthDateChange(e)} />

      <span style={title}>Position:</span>
      <Dropdown overlay={
        <Menu>
          {
            props.positions.map((p, i) => <Menu.Item key={i}>
              <span onClick={(e) => onPositionClick(p)}>
                {p.name}
              </span>
            </Menu.Item>)
          }
        </Menu>
      }>
        <Button>
          Select the position <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default NewTeacherFormComponent;
