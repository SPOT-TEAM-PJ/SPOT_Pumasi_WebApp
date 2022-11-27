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

  const [children, setChildren] = useState([0]);

  const onSubmit = (values) => {
    console.log(values);
  };
  console.log(title1, title2, User);
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
      >
        <Title>{title1}</Title>
        <Wrapper>
          <Item label='아이디' name='Name'>
            <InputArea />
          </Item>
          <Item label='비밀번호'>
            <InputArea />
          </Item>
          <Item label='비밀번호 확인'>
            <InputArea />
          </Item>
          <Item label='닉네임'>
            <InputArea />
          </Item>
          <Item label='증명사진 첨부' valuePropName='fileList'>
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
          </Item>
        </Wrapper>

        <Title>{title2}</Title>
        <Wrapper>
          <Title>부모 정보</Title>
          <ProFileWrapper>
            <Item label='이름'>
              <InputArea />
            </Item>
            <Item label='주소'>
              <InputArea />
            </Item>
            <Item label='직업'>
              <InputArea />
            </Item>
            <Item label='직장정보'>
              <InputArea />
            </Item>
            <Item label='상태메시지'>
              <InputArea />
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
              <PlusSquareOutlined
                onClick={() => {
                  setChildren([...children, 1]);
                }}
              />
            </span>
          </h4>

          <div>
            {children.map((child, id) => (
              <ProFileWrapper>
                <ChildInformation key={id} child={child} />
              </ProFileWrapper>
            ))}
          </div>
        </Wrapper>
        {
          (title1 = '회원가입' ? (
            <Form.Item>
              <Btn htmlType='submit'>작성완료</Btn>
            </Form.Item>
          ) : (
            <Form.Item>
              <Btn htmlType='submit'>수정완료</Btn>
            </Form.Item>
          ))
        }
      </SignUpPage>
    </>
  );
};
export default SignUpInfo;
