import React from 'react';
import {Input} from 'antd';

const {TextArea} = Input;

const NewPublicationFormComponent = ({onTitleChange, onContentChange, onImageChange}) => {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
  }

  const title = {
    marginTop: '1rem',
  }

  return (
    <div style={wrapper}>
      <span>Title:</span>
      <Input name="title" onChange={onTitleChange}/>

      <span style={title}>Image URL:</span>
      <Input name="imageUrl" onChange={onImageChange}/>

      <span style={title}>Content:</span>
      <TextArea name="content" onChange={onContentChange} rows={4}/>
    </div>
  );
};

export default NewPublicationFormComponent;
