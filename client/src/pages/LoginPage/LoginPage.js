import React from 'react';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_SUCCESS } from '../../reducers/user';
import { useNavigate, Link } from 'react-router-dom';
import LogoImg from '../../util/images/FumasiLogoInfo.png';
import { Logo, LoginBtn, LoginForm, FormItem, SignUp } from './LoginPageStyles';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);

  const onSubmit = (values) => {
    // console.log(values);
    // if (
    //   me.userId === parseInt(values.id) &&
    //   me.password === parseInt(values.password)
    // ) {
    console.log('로그인 성공!');
    dispatch({
      type: LOG_IN_SUCCESS,
      // data: { id: values.id, password: values.password },
    });
    console.log('me: ', me);
    navigate('/');
    // } else {
    //   alert('아이디 또는 비밀번호를 확인해주세요.');
    // }
  };

  return (
    <>
      <Logo>
        <img src={LogoImg} alt='LogoImg' />
      </Logo>
      <LoginForm
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
        <FormItem
          name='id'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input className='id' placeholder='아이디' />
        </FormItem>
        <FormItem
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password className='password' placeholder='비밀번호' />
        </FormItem>
        <FormItem
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <LoginBtn type='primary' htmlType='submit'>
            Login
          </LoginBtn>
        </FormItem>
      </LoginForm>
      <Link to='/signup'>
        <SignUp>
          <p>아직 계정이 없다면, 회원가입을 해보세요!</p>
        </SignUp>
      </Link>
    </>
  );
};

export default LoginPage;
