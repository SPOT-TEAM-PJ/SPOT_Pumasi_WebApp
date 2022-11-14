import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  Form,
  Radio,
  RadioChangeEvent,
  Cascader,
  Switch,
  TimePicker,
  Checkbox,
  Avatar,
  Calendar,
  Button,
  Input,
} from 'antd';

import { UserOutlined } from '@ant-design/icons';

import styled from 'styled-components';

export const FormWrapper = styled(Form)``;
const PostContentForm = () => {
  const { TextArea } = Input;

  // const dispatch = useDispatch();

  const onSubmit = useCallback((values) => {
    console.log('success: ', values);
    // dispatch({
    //   type: ,
    //   data: {},
    // });
  }, []);

  const [DateForm, setDateForm] = useState(false);
  const onSetDateFrom = ({ disabled }) => {
    setDateForm(disabled);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  // 수정 필요
  const [serviceTypes, setServiceTypes] = useState(0);
  const onchangeSetServiceTypes = (RadioChangeEvent) => {
    console.log('');
  };
  const options = [
    {
      value: 'zhejiang',
      label: 'kage',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
            {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  const onToggleCar = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onTimeChange = (time, timeString) => {
    console.log(time, timeString);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <FormWrapper layout='horizontal' onFinish={onFinish}>
      <FormWrapper.Item label='아동 사진' name='ChildrenAvater'>
        <Avatar size={64} icon={<UserOutlined />} />
      </FormWrapper.Item>
      <FormWrapper.Item lable='게시글 제목' name='postTitle'>
        <Input placeholder='postTitle' />
      </FormWrapper.Item>
      <FormWrapper.Item lable='학부모 이름' name='parentName'>
        <Input placeholder='parentName' />
      </FormWrapper.Item>
      <FormWrapper.Item lable='아동 이름' name='childrenName'>
        <Input placeholder='childrenName' />
      </FormWrapper.Item>
      <FormWrapper.Item lable='원하는 서비스' name='serviceType'>
        <Radio.Group
          onchangeSetServiceTypes={onchangeSetServiceTypes}
          defaultValue='a'
        >
          <Radio.Button value='a'>등교</Radio.Button>
          <Radio.Button value='b'>하교</Radio.Button>
          <Radio.Button disabled value='c'>
            학원 동행
          </Radio.Button>
          <Radio.Button disabled value='d'>
            병원 동행
          </Radio.Button>
        </Radio.Group>
      </FormWrapper.Item>
      <FormWrapper.Item lable='자동차 필요 유무' name='needCar'>
        <Switch className='switch' defaultChecked onChange={onToggleCar} />
      </FormWrapper.Item>
      <FormWrapper.Item lable='시작 지점' name='startPoint'>
        <Cascader
          className='Cascader'
          options={options}
          onChange={onChange}
          placeholder='Please select'
          showSearch={{
            filter,
          }}
          onSearch={(value) => console.log(value)}
        />
      </FormWrapper.Item>
      <FormWrapper.Item lable='종료 지점' name='endPoint'>
        <Cascader
          className='Cascader'
          options={options}
          onChange={onChange}
          placeholder='Please select'
          showSearch={{
            filter,
          }}
          onSearch={(value) => console.log(value)}
        />
      </FormWrapper.Item>
      <FormWrapper.Item lable='다른 날짜 선택' name='checkAnotherDate'>
        <Checkbox
          checked={DateForm}
          onChange={(e) => setDateForm(e.target.checked)}
        />
      </FormWrapper.Item>
      {DateForm ? (
        <FormWrapper.Item lable='날짜 지정' name='anotherDate'>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </FormWrapper.Item>
      ) : null}
      <FormWrapper.Item lable='원하는 시간' name='time'>
        <TimePicker use12Hours format='h:mm a' onChange={onTimeChange} />
      </FormWrapper.Item>
      <FormWrapper.Item lable='내용' name='content'>
        <TextArea rows={4} />
      </FormWrapper.Item>
      <FormWrapper.Item name='submit'>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </FormWrapper.Item>
    </FormWrapper>
  );
};

export default PostContentForm;
