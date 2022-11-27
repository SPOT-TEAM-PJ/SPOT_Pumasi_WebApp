import React from 'react';
import { Item, InputArea } from '../style';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { useCallback } from 'react';
import useInput from './../../../hooks/useInput';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EDIT_CHILD_SUCCESS } from '../../../reducers/user';

function ChildInformation({ child }) {
  if (!child) {
    child = '';
  }

  useEffect(() => {
    console.log(child);
  }, [child]);
  const [childrenname, setChildrenname] = useInput(child.childrenname);
  const [age, setAge] = useInput(child.age);
  const [gender, setGenger] = useInput(child.gender);
  const [school, setSchool] = useInput(child.school);

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    console.log(childrenname, age, gender, school);
    dispatch({
      type: EDIT_CHILD_SUCCESS,
      data: {
        childId: child.childId,
        childrenname: childrenname,
        age: age,
        gender: gender,
        school: school,
      },
    });
  });

  return (
    <>
      <Item label='이름'>
        {console.log(childrenname)}
        <InputArea value={childrenname} onChange={setChildrenname} />
      </Item>
      <Item label='성별'>
        <InputArea value={gender} onChange={setGenger} />
      </Item>
      <Item label='나이'>
        <InputArea value={age} onChange={setAge} />
      </Item>
      <Item label='학교 및 어린이집'>
        <InputArea value={school} onChange={setSchool} />
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
      </Item>
      <Button onClick={onSubmit}>수정</Button>
    </>
  );
}
export default ChildInformation;
