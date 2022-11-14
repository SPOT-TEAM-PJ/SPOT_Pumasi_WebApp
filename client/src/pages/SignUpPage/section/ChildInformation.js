import React from 'react';
import { Item, InputArea } from '../style';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

function ChildInformation({ child }) {
  if (!child) {
    child = '';
  }

  return (
    <>
      <Item label='이름'>
        <InputArea name='Name' />
      </Item>
      <Item label='성별'>
        <InputArea />
      </Item>
      <Item label='나이'>
        <InputArea />
      </Item>
      <Item label='학교 및 어린이집'>
        <InputArea />
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
    </>
  );
}

export default ChildInformation;
