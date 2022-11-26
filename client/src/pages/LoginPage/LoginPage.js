import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_SUCCESS } from '../../reducers/user';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const onSubmit = (values) => {
    console.log(values);
    if (
      me.userId === parseInt(values.id) &&
      me.password === parseInt(values.password)
    ) {
      console.log('로그인 성공!');
      dispatch({
        type: LOG_IN_SUCCESS,
        data: { id: values.id, password: values.password },
      });
      navigate('/offerer');
    } else {
      alert('아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
      autoComplete='off'
    >
      <Form.Item
        label='아이디'
        name='id'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input className='id' />
      </Form.Item>

      <Form.Item
        label='비밀번호'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className='password' />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
