import React, { useRef, useCallback, useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import Input from './Input';
import useInput from '../../../hooks/useInput';
import {
  FileWrapper,
  ProFileWrapper,
  GenderWrapper,
  GenderSelect,
} from '../style';

function ChildInformation({ child, onChange, gender }) {
  const fileInput = useRef();

  if (!child) {
    child = '';
  }

  // const [gender, setGender] = useState('남자');
  // const [name, onChangename] = useInput(child.name);
  // const [school, onChangeSchool] = useInput(child.school);
  // const [age, onChangeAge] = useInput(child.age);

  const onClickImageUpload = useCallback(() => {
    fileInput.current.click();
  }, [fileInput.current]);

  return (
    <ProFileWrapper>
      <div>
        <Input text={'이름'} value={child.name} onChange={onChange} />
        <GenderWrapper>
          <div>성별</div>
          <GenderSelect
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={gender}
          >
            <option>남자</option>
            <option>여자</option>
          </GenderSelect>
        </GenderWrapper>

        <Input text={'나이'} value={child.age} onChange={onChange} />
        <Input
          text={'학교 및 어린이집'}
          value={child.school}
          onChange={onChange}
        />
        <FileWrapper>
          <div>아동 사진</div>
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
  );
}

export default ChildInformation;
