import React from 'react';
import { InputWrapper, InputText } from '../style';

function Input({ text, value, onChange }) {
  return (
    <InputWrapper>
      <div>{text}</div>
      <InputText type={'text'} value={value} onChange={onChange} />
    </InputWrapper>
  );
}

export default Input;
