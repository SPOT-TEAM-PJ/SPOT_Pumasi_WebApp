import React from 'react';
import { Item, InputArea } from '../style';
import { ChromeFilled, PlusOutlined } from '@ant-design/icons';
import { Upload, Form } from 'antd';

function ChildInformation({ child, onSubmit }) {
  if (!child) {
    child = '';
  }
  console.log(child);
  const [form] = Form.useForm();
  form.setFieldsValue({
    //자식 정보
    //childrenname: child.childrenname,
    gender: child.gender,
    age: child.age,
    school: child.school,
    //image
  });

  return (
    <>
      {/* <Form onFinish={onSubmit}> */}
      <Item label='이름' name='childrenname'>
        <InputArea className='childrenname' />
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
      </Item>
      {/* </Form> */}
    </>
  );
}

export default ChildInformation;
