import React, { useRef, useCallback, useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import ChildInformation from './section/ChildInformation';
import Input from './section/Input';
import useInput from '../../hooks/useInput';
import {
  SignUpPageWrapper,
  Title,
  Wrapper,
  NumberWrapper,
  NumberSelectWrapper,
  NumberSelect,
  NumberInput,
  FileWrapper,
  ProFileWrapper,
  BtnWrapper,
  SignUpButton,
} from './style';

const SignUpPage = () => {
  const fileInput = useRef();
  const [child, setChild] = useState([1]);

  const [userId, onChangeUserId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickName] = useInput('');

  const [Name, onChangeName] = useInput('');
  const [Address, onChangeAddress] = useInput('');
  const [Job, onChangeJob] = useInput('');
  const [JobInfo, onChangeJobInfo] = useInput('');
  const [Message, onChangeMessage] = useInput('');

  const [gender, setGender] = useState('남자');

  const onClickImageUpload = useCallback(() => {
    fileInput.current.click();
  }, [fileInput.current]);

  const onSubmitHadler = () => {
    console.log(gender);
  };

  return (
    <SignUpPageWrapper>
      <Title>회원가입</Title>
      <Wrapper>
        <Input text={'아이디'} value={userId} onChange={onChangeUserId} />
        <Input text={'비밀번호'} value={password} onChange={onChangePassword} />
        <Input
          text={'비밀번호 확인'}
          value={password}
          onChange={onChangePassword}
        />
        <Input text={'닉네임'} value={nickname} onChange={onChangeNickName} />
        <FileWrapper>
          <div>증명첨부파일</div>
          <PlusSquareOutlined onClick={onClickImageUpload} />
          <input
            type='file'
            name='file'
            multiple
            hidden
            ref={fileInput}
            //onChange={onChangeFile}
          />
        </FileWrapper>
      </Wrapper>

      <Title>프로필 작성</Title>
      <Wrapper>
        <h4 style={{ paddingLeft: '5px', paddingTop: '7px' }}>부모</h4>
        <ProFileWrapper>
          <div>
            <Input text={'이름'} value={Name} onChange={onChangeName} />
            <Input text={'주소'} value={Address} onChange={onChangeAddress} />
            <Input text={'직업'} value={Job} onChange={onChangeJob} />
            <Input
              text={'직장정보'}
              value={JobInfo}
              onChange={onChangeJobInfo}
            />
            <Input
              text={'상태메세지'}
              value={Message}
              onChange={onChangeMessage}
            />
            <NumberWrapper>
              <div>핸드폰 번호</div>
              <NumberSelectWrapper>
                <NumberSelect>
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>019</option>
                </NumberSelect>
                - <NumberInput type={'text'} /> - <NumberInput type={'text'} />
              </NumberSelectWrapper>
            </NumberWrapper>
            <NumberWrapper>
              <div>이메일</div>
              <NumberSelectWrapper>
                <NumberInput type={'email'} style={{ width: '50%' }} />@
                <NumberSelect style={{ width: '50%' }}>
                  <option>naver.com</option>
                  <option>google.com</option>
                  <option>daum.net</option>
                </NumberSelect>
              </NumberSelectWrapper>
            </NumberWrapper>
            <FileWrapper>
              <div>부모 사진</div>
              <PlusSquareOutlined onClick={onClickImageUpload} />
              <input
                type='file'
                name='file'
                multiple
                hidden
                ref={fileInput}
                //onChange={onChangeFile}
              />
            </FileWrapper>
          </div>
        </ProFileWrapper>

        <h4 style={{ paddingLeft: '5px', paddingTop: '7px' }}>
          자녀
          <span>
            {' '}
            <PlusSquareOutlined
              onClick={() => {
                setChild([...child, 1]);
              }}
            />
          </span>
        </h4>

        <div>
          {child.map((item, id) => (
            <ChildInformation key={id} value={gender} onChange={setGender} />
          ))}
        </div>
      </Wrapper>

      <BtnWrapper>
        <SignUpButton onClick={onSubmitHadler}>작성완료</SignUpButton>
      </BtnWrapper>
    </SignUpPageWrapper>
  );
};

export default SignUpPage;
