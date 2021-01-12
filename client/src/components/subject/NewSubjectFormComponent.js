import React from 'react';
import {Input} from 'antd';

const {TextArea} = Input;

const NewSubjectFormComponent = ({onNameChange, onDescriptionChange}) => {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
  }

  const title = {
    marginTop: '1rem',
  }

  return (
    <div style={wrapper}>
      <span>Name:</span>
      <Input name="name" onChange={onNameChange}/>

      <span style={title}>Description:</span>
      <TextArea name="description" onChange={onDescriptionChange} rows={4}/>
    </div>
  );
};

export default NewSubjectFormComponent;
