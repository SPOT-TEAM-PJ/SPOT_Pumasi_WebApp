import React, { useState } from 'react';
import { PlusSquareOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, Form } from 'antd';
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
  const [children, setChildren] = useState([...User.children]);

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

    //자식 정보
    childrenname: '',
    gender: '',
    age: '',
    school: '',
  });

  const onSubmit = (values) => {
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
            <InputArea className='password' />
          </Item>
          <Item label='비밀번호 확인'>
            <InputArea />
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
                  onSubmit={onSubmit}
                />
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
