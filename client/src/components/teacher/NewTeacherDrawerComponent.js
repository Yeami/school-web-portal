import React from 'react';
import {Button, Drawer} from 'antd';
import {useDispatch} from 'react-redux';
import NewTeacherFormComponent from './NewTeacherFormComponent';
import {createTeacher} from '../../store/actions/teacherActions';

const NewTeacherDrawerComponent = ({onClose, visible, positions}) => {
  const dispatch = useDispatch();
  let firstName, lastName, patronymic, email, password, avatarUrl, birthDate, position;

  const onFirstNameChange = (e) => {
    firstName = e.target.value;
  }

  const onLastNameChange = (e) => {
    lastName = e.target.value;
  }

  const onPatronymicChange = (e) => {
    patronymic = e.target.value;
  }

  const onEmailChange = (e) => {
    email = e.target.value;
  }

  const onPasswordChange = (e) => {
    password = e.target.value;
  }

  const onAvatarUrlChange = (e) => {
    avatarUrl = e.target.value;
  }

  const onBirthDateChange = (e) => {
    birthDate = e;
  }

  const onPositionChange = (p) => {
    position = p;
  }

  const create = () => {
    dispatch(createTeacher({firstName, lastName, patronymic, email, password, avatarUrl, birthDate, position}));
  };

  return (
    <Drawer
      title="Add new teacher"
      placement="right"
      width={600}
      closable={false}
      onClose={onClose}
      visible={visible}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={create} type="primary" style={{marginRight: 8}}>
            Add
          </Button>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </div>
      }
    >
      <NewTeacherFormComponent
        positions={positions}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onPatronymicChange={onPatronymicChange}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onAvatarUrlChange={onAvatarUrlChange}
        onBirthDateChange={onBirthDateChange}
        onPositionChange={onPositionChange}
      />
    </Drawer>
  );
};

export default NewTeacherDrawerComponent;
