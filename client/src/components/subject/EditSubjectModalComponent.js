import React from 'react';
import {Input, Modal} from 'antd';

const {TextArea} = Input;

const EditSubjectModalComponent = (
  {
    subject, isVisible, handleOk, handleCancel, onNameChange, onDescriptionChange
  }
) => {
  return (
    <Modal
      title="Update the subject info"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        defaultValue={subject.name}
        name="name"
        placeholder="The subject name"
        onChange={onNameChange}
      />
      <TextArea
        defaultValue={subject.description}
        name="description"
        placeholder="The subject description"
        onChange={onDescriptionChange}
        rows={4}
        style={{marginTop: '1rem'}}
      />
    </Modal>
  )
};

export default EditSubjectModalComponent;
