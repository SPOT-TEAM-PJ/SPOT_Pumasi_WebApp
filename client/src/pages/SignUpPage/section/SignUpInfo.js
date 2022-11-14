import React, { useRef, useCallback, useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import ChildInformation from './ChildInformation';
import Input from './Input';
import useInput from '../../../hooks/useInput';
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
} from '../style';
//import { dummyData } from '../../../util/dummyData/dummyData';

function SignUpInfo({ title_1, title_2, User }) {
  const fileInput = useRef();

  if (!User) {
    User = {
      parent: {
        email: '',
        phoneNumber: '',
      },
      children: [{}],
    };
  }

  const email = User.parent.email.split('@');
  const phoneNumber = User.parent.phoneNumber.split('-');

  const [userId, onChangeUserId] = useInput(User.id);
  const [password, onChangePassword] = useInput(User.password);

  // 부모 정보
  const [Name, onChangeName] = useInput(User.parent.name);
  const [Nickname, onChangeNickName] = useInput(User.parent.nickname);
  const [Address, onChangeAddress] = useInput(User.parent.address);
  const [Job, onChangeJob] = useInput(User.parent.job);
  const [JobInfo, onChangeJobInfo] = useInput(User.parent.jobinfo);
  const [Message, onChangeMessage] = useInput(User.parent.stateComment);
  const [Email, onChangeEmail] = useInput(email[0]);
  const [EmailType, onChangeEmailType] = useState(email[1]);
  const [PhoneNumberType, onChangePhoneNumberType] = useState(phoneNumber[0]);
  const [PhoneNumber_1, onChangePhoneNumber_1] = useInput(phoneNumber[1]);
  const [PhoneNumber_2, onChangePhoneNumber_2] = useInput(phoneNumber[1]);

  // 자식 정보
  const [children, setChildren] = useState(User.children);
  const [gender, setGender] = useState('남자');
  const [name, onChangename] = useInput(children.name);
  const [school, onChangeSchool] = useInput(children.school);
  const [age, onChangeAge] = useInput(children.age);

  const onClickImageUpload = useCallback(() => {
    fileInput.current.click();
  }, [fileInput.current]);

  const onSubmitHadler = () => {
    const EmailAll = Email + '@' + EmailType;
    const PhoneNumberAll =
      PhoneNumberType + '-' + PhoneNumber_1 + '-' + PhoneNumber_2;
    console.log(
      userId,
      password,
      Nickname,
      Name,
      Address,
      Job,
      JobInfo,
      Message,
      PhoneNumberAll,
      EmailAll,
      children
    );
  };

  return (
    <SignUpPageWrapper onSubmit={onSubmitHadler}>
      <Title>{title_1}</Title>
      <Wrapper>
        <Input text={'아이디'} value={userId} onChange={onChangeUserId} />
        <Input text={'비밀번호'} value={password} onChange={onChangePassword} />
        <Input
          text={'비밀번호 확인'}
          value={password}
          onChange={onChangePassword}
        />
        <Input text={'닉네임'} value={Nickname} onChange={onChangeNickName} />
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

      <Title>{title_2}</Title>
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
                <NumberSelect
                  value={PhoneNumberType}
                  onChange={(e) => onChangePhoneNumberType(e.target.value)}
                >
                  <option>선택</option>
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>019</option>
                </NumberSelect>
                -{' '}
                <NumberInput
                  type={'text'}
                  value={PhoneNumber_1}
                  onChange={onChangePhoneNumber_1}
                />{' '}
                -{' '}
                <NumberInput
                  type={'text'}
                  value={PhoneNumber_2}
                  onChange={onChangePhoneNumber_2}
                />
              </NumberSelectWrapper>
            </NumberWrapper>
            <NumberWrapper>
              <div>이메일</div>
              <NumberSelectWrapper>
                <NumberInput
                  value={Email}
                  type={'email'}
                  style={{ width: '50%' }}
                  onChange={onChangeEmail}
                />
                @
                <NumberSelect
                  style={{ width: '50%' }}
                  value={EmailType}
                  onChange={(e) => {
                    onChangeEmailType(e.target.value);
                  }}
                >
                  <option>선택</option>
                  <option>naver.com</option>
                  <option>gmail.com</option>
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
                setChildren([...children, 1]);
              }}
            />
          </span>
        </h4>

        <div>
          {children.map((child, id) => (
            <ChildInformation key={id} child={child} onChange={setGender} />
          ))}
        </div>
      </Wrapper>

      <BtnWrapper>
        {title_1 === '회원가입' ? (
          <SignUpButton>작성완료</SignUpButton>
        ) : (
          <SignUpButton>수정</SignUpButton>
        )}
      </BtnWrapper>
    </SignUpPageWrapper>
  );
}

export default SignUpInfo;
