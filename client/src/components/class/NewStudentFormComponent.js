import React from 'react';
import {Button, Dropdown, Input, Menu} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const NewStudentFormComponent = (props) => {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
  }

  const title = {
    marginTop: '1rem',
  }

  const onClassClick = (c) => {
    props.onClassChange(c._id);
  }

  return (
    <div style={wrapper}>
      <span>First name:</span>
      <Input name="firstName" onChange={props.onFirstNameChange}/>

      <span style={title}>Last name:</span>
      <Input name="lastName" onChange={props.onLastNameChange}/>

      <span style={title}>Patronymic:</span>
      <Input name="patronymic" onChange={props.onPatronymicChange}/>

      <span style={title}>Photo URL:</span>
      <Input name="photoUrl" onChange={props.onPhotoChange}/>

      <span style={title}>Email:</span>
      <Input name="email" onChange={props.onEmailChange}/>

      <span style={title}>Class:</span>
      <Dropdown overlay={
        <Menu>
          {
            props.classes.map((c, i) => <Menu.Item key={i}>
              <span onClick={(e) => onClassClick(c)}>
                {c.name}
              </span>
            </Menu.Item>)
          }
        </Menu>
      }>
        <Button>
          Select the class <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default NewStudentFormComponent;
