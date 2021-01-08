import React from 'react'
import {useDispatch} from 'react-redux';
import {logInUser} from '../store/actions/userActions';

import {Form, Input, Button, Card} from 'antd';

import {Redirect} from 'react-router-dom';

const pageWrapper = {
  display: 'flex',
  justifyContent: 'center',
};

function LoginView(props) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(logInUser(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={pageWrapper}>
      {props.isAuth ? <Redirect to="/profile"/> : null}

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
