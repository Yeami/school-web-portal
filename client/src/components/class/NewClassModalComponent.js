import React from 'react';
import {Input, Modal} from 'antd';

const NewClassModalComponent = ({isVisible, handleOk, handleCancel, onChange}) => {
  return (
    <Modal
      title="Create new class"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input name="name" placeholder="The new class name" onChange={onChange}/>
    </Modal>
  )
};

export default NewClassModalComponent;
