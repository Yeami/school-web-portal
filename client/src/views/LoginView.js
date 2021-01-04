import React from 'react'
import {useDispatch} from 'react-redux';
import {fetchUser} from '../actions/userActions';

import {Form, Input, Button, Card} from 'antd';

const pageWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
};

function LoginView() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(fetchUser(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={pageWrapper}>
      <Card title="School Web Portal" style={{width: 400}}>
        <Form
          name="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Email"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Password"/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginView;
