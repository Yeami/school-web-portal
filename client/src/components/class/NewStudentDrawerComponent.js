import React from 'react';
import {Button, Drawer} from 'antd';
import {useDispatch} from 'react-redux';
import NewStudentFormComponent from './NewStudentFormComponent';
import {addStudentToClass} from '../../store/actions/classActions';

const NewStudentDrawerComponent = ({onClose, visible, classes}) => {
  const dispatch = useDispatch();
  let firstName, lastName, patronymic, photoUrl, email, selectedClass;

  const onFirstNameChange = (e) => {
    firstName = e.target.value;
  }

  const onLastNameChange = (e) => {
    lastName = e.target.value;
  }

  const onPatronymicChange = (e) => {
    patronymic = e.target.value;
  }

  const onPhotoChange = (e) => {
    photoUrl = e.target.value;
  }

  const onEmailChange = (e) => {
    email = e.target.value;
  }

  const onClassChange = (c) => {
    selectedClass = c;
  }

  const create = () => dispatch(addStudentToClass({
    student: {
      firstName,
      lastName,
      patronymic,
      photoUrl,
      email,
    },
    classId: selectedClass,
  }));

  return (
    <Drawer
      title="Add new student to the class"
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
          <Button onClick={create} type="primary" style={{ marginRight: 8 }}>
            Add
          </Button>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </div>
      }
    >
      <NewStudentFormComponent
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onPatronymicChange={onPatronymicChange}
        onPhotoChange={onPhotoChange}
        onEmailChange={onEmailChange}
        onClassChange={onClassChange}
        classes={classes}
      />
    </Drawer>
  )
};

export default NewStudentDrawerComponent;
