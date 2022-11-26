import React, { useEffect, useRef, useState } from 'react';
import { PlusSquareOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, Form } from 'antd';
import { useDispatch } from 'react-redux';
import ChildInformation from './ChildInformation';
import {
  SignUpPage,
  Wrapper,
  Item,
  Title,
  ProFileWrapper,
  InputArea,
  NumberSelect,
  SelectOption,
  Btn,
} from '../style';
import { EDIT_MYINFO_SUCCESS } from '../../../reducers/user';

const SignUpInfo = ({ title1, title2, User }) => {
  if (!User) {
    User = {
      parent: {
        email: '',
        phoneNumber: '',
      },
      children: [{}],
    };
  }

  const [form] = Form.useForm();
  const [password, setPassword] = useState(User.password);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [children, setChildren] = useState([...User.children]);
  const passwordCheckeInput = useRef();
  const dispatch = useDispatch();

  form.setFieldsValue({
    //회원 정보
    userId: User.userId,
    password: User.password,
    nickname: User.parent.nickname,
    image: User.parent.image,
    //부모 정보
    name: User.parent.name,
    address: User.parent.address,
    job: User.parent.job,
    jobinfo: User.parent.jobinfo,
    stateComment: User.parent.stateComment,

    //
  });

  useEffect(() => {
    console.log(password, passwordCheck, passwordError);
    if (password !== parseInt(passwordCheck)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, passwordCheck, passwordError]);

  const onSubmit = (values) => {
    if (!passwordError) {
      console.log('성공!');
      dispatch({
        type: EDIT_MYINFO_SUCCESS,
        data: values,
      });
    } else {
      alert('비밀번호를 확인해주세요.');
      passwordCheckeInput.current.focus();
    }

    console.log(values);
  };

  return (
    <>
      <SignUpPage
        onFinish={onSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        form={form}
      >
        <Title>{title1}</Title>
        <Wrapper>
          <Item label='아이디' name='userId'>
            <InputArea className='userId' />
          </Item>
          <Item label='비밀번호' name='password'>
            <InputArea
              className='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Item>
          <Item label='비밀번호 확인' name='passwordCheck'>
            <InputArea
              className='passwordCheck'
              onChange={(e) => {
                setPasswordCheck(e.target.value);
              }}
              ref={passwordCheckeInput}
            />
            {passwordError && passwordCheck !== '' ? (
              <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
            ) : null}
          </Item>
          <Item label='닉네임' name='nickname'>
            <InputArea className='nickname' />
          </Item>
          <Item label='증명사진 첨부' valuePropName='fileList'>
            <Upload action='/upload.do' listType='picture-card'>
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                  // src={}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Item>
        </Wrapper>

        <Title>{title2}</Title>
        <Wrapper>
          <Title>부모 정보</Title>
          <ProFileWrapper>
            <Item label='이름' name='name'>
              <InputArea className='name' />
            </Item>
            <Item label='주소' name='address'>
              <InputArea className='address' />
            </Item>
            <Item label='직업' name='job'>
              <InputArea className='job' />
            </Item>
            <Item label='직장정보' name='jobinfo'>
              <InputArea className='jobinfo' />
            </Item>
            <Item label='상태메시지' name='stateComment'>
              <InputArea className='stateComment' />
            </Item>

            <Item label='핸드폰 번호'>
              <NumberSelect>
                <SelectOption value='010'> 010</SelectOption>
                <SelectOption value='011'>011</SelectOption>
                <SelectOption value='016'>016</SelectOption>
                <SelectOption value='017'>017</SelectOption>
                <SelectOption value='019'>019</SelectOption>
              </NumberSelect>
            </Item>
            <Item label='이메일'>
              <NumberSelect>
                <SelectOption value='naver'> naver.com</SelectOption>
                <SelectOption value='gmail'>gmail.com</SelectOption>
                <SelectOption value='daum'>daum.net</SelectOption>
              </NumberSelect>
            </Item>
          </ProFileWrapper>
        </Wrapper>

        <Wrapper>
          <h4 style={{ paddingLeft: '10px', paddingTop: '7px' }}>
            자녀
            <span>
              {' '}
              <PlusSquareOutlined
                onClick={() => {
                  setChildren([...children, 1]);
                  console.log(children);
                }}
              />
            </span>
          </h4>

          <div>
            {children.map((child) => (
              <ProFileWrapper>
                <ChildInformation
                  key={child.childId}
                  child={child}
                  id={child.childId}
                />
                {/* <Item label='이름' name='childName' value={child.childrenname}>
                  <InputArea value={child.childrenname}/>
                </Item>
                <Item label='성별' name='gender'>
                  <InputArea className='gender' />
                </Item>
                <Item label='나이' name='age'>
                  <InputArea className='age' />
                </Item>
                <Item label='학교 및 어린이집' name='school'>
                  <InputArea className='school' />
                </Item>
                <Item label='아동 사진' valuePropName='fileList'>
                  <Upload action='/upload.do' listType='picture-card'>
                    <div>
                      <PlusOutlined />
                      <div
                        style={{
                          marginTop: 8,
                        }}
                      >
                        Upload
                      </div>
                    </div>
                  </Upload>
                </Item> */}
              </ProFileWrapper>
            ))}
          </div>
        </Wrapper>
        {title1 === '회원가입' ? (
          <Form.Item>
            <Btn htmlType='submit'>작성완료</Btn>
          </Form.Item>
        ) : (
          <Form.Item>
            <Btn htmlType='submit'>수정완료</Btn>
          </Form.Item>
        )}
      </SignUpPage>
    </>
  );
};
export default SignUpInfo;
