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

function ChildInformation({ value, onChange }) {
  const fileInput = useRef();

  const [Name, onChangeName] = useInput('');
  const [School, onChangeSchool] = useInput('');
  const [Age, onChangeAge] = useInput('');

  const onClickImageUpload = useCallback(() => {
    fileInput.current.click();
  }, [fileInput.current]);

  return (
    <ProFileWrapper>
      <div>
        <Input text={'이름'} value={Name} onChange={onChangeName} />
        <GenderWrapper>
          <div>성별</div>
          <GenderSelect
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={value}
          >
            <option>남자</option>
            <option>여자</option>
          </GenderSelect>
        </GenderWrapper>

        <Input text={'나이'} value={Age} onChange={onChangeAge} />
        <Input
          text={'학교 및 어린이집'}
          value={School}
          onChange={onChangeSchool}
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
