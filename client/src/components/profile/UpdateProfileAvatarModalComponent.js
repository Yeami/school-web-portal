import React from 'react';
import {Input, Modal} from 'antd';

const UpdateProfileAvatarModalComponent = ({isVisible, handleOk, handleCancel, onChange}) => {
  return (
    <Modal
      title="Update the profile avatar"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input name="avatarUrl" placeholder="The new avatar URL" onChange={onChange}/>
    </Modal>
  )
};

export default UpdateProfileAvatarModalComponent;
