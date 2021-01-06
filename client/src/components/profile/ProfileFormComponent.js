import React from 'react';
import {Button, Form, Input} from 'antd';

const ProfileFormComponent = ({ onChange, fields, onUpdate }) => {
  return (
    <Form
      layout="vertical"
      name="profile-form"
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
      onFinish={onUpdate}
    >
      <Form.Item
        label="First name:"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last name:"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Patronymic:"
        name="patronymic"
        rules={[
          {
            required: true,
            message: 'Please input your patronymic!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email:"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileFormComponent;
