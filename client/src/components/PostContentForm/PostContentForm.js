import React, { useState, useCallback, Children } from 'react';
import { useDispatch } from 'react-redux';
import child2 from '../../util/images/child2.jpg';
import {
  Radio,
  Cascader,
  Switch,
  TimePicker,
  Checkbox,
  Calendar,
  Button,
  Input,
} from 'antd';
import { options } from './ServiceOptions';
import { UploadOutlined } from '@ant-design/icons';
import { FormWrapper, ChildImageForm, FormItem } from './PostContentFormStyle';

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
      <ChildImageForm label='아동 사진' name='ChildrenAvater'>
        <img src={child2} alt='child' />
        <Button icon={<UploadOutlined />}>다른 사진 업로드</Button>
      </ChildImageForm>
      <FormItem label='게시글 제목' name='postTitle'>
        <Input placeholder='postTitle' />
      </FormItem>
      <FormItem label='원하는 서비스' name='serviceType'>
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
      </FormItem>

      <FormItem label='자동차 필요 유무' name='needCar'>
        <Switch className='switch' defaultChecked onChange={onToggleCar} />
      </FormItem>
      <FormItem label='시작 지점' name='startPoint'>
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
      </FormItem>
      <FormItem label='종료 지점' name='endPoint'>
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
      </FormItem>
      <FormItem label='다른 날짜 선택' name='checkAnotherDate'>
        <>미 선택시 당일 지정 </>
        <Checkbox
          checked={DateForm}
          onChange={(e) => setDateForm(e.target.checked)}
        />
      </FormItem>
      {DateForm ? (
        <FormItem label='날짜 지정' name='anotherDate'>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </FormItem>
      ) : null}
      <FormItem label='원하는 시간' name='time'>
        <TimePicker.RangePicker onChange={onTimeChange} />
      </FormItem>
      <FormItem label='금액' name='money'>
        <Input></Input>
      </FormItem>

      <FormItem label='내용' name='content'>
        <TextArea rows={4} />
      </FormItem>
      <FormItem name='submit'>
        <Button type='primary' htmlType='submit'>
          작성
        </Button>
      </FormItem>
    </FormWrapper>
  );
};

export default PostContentForm;
// 시간 날짜 금액 차량 지점
