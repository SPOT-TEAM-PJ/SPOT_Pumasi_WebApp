import React, { useState } from 'react';
import {
  Presentation,
  WrapperModal,
  Modal,
  TopBar,
  ChildrenImgArea,
  ContentArea,
  UserInfo,
  PostInfo,
  ContentInfo,
  ServiceTypeArea,
  MoveArea,
} from './PostContentModalStyles';
// import { RadioChangeEvent } from 'antd';
import { DefaultOptionType } from 'antd/es/cascader';
import {
  Radio,
  RadioChangeEvent,
  Cascader,
  Switch,
  TimePicker,
  Checkbox,
} from 'antd';
import './PostContent.css';
import arrow from './../../util/images/arrow.png';

const PostContentModal = ({ setModalOpen }) => {
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
  return (
    <Presentation>
      <WrapperModal>
        <Modal>
          <TopBar>
            <div>게시글 작성</div>
            <div className='modalClose' onClick={() => setModalOpen(false)}>
              X
            </div>
          </TopBar>
          <ChildrenImgArea></ChildrenImgArea>
          <ContentArea>
            <PostInfo>
              <div className='postInfo'>postId</div>
              <div className='postInfo'>postDate</div>
            </PostInfo>
            <input placeholder='postTitle' className='postTitle' />
            <UserInfo>
              <input placeholder='parentName' className='nameInput' />
              <input placeholder='childrenName' className='nameInput' />
            </UserInfo>
            <ContentInfo>
              <ServiceTypeArea>
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
              </ServiceTypeArea>
              <MoveArea>
                <div className='needCarWrapper'>
                  <div className='needCar'>needCar</div>
                  <div className='carToggle'>
                    <Switch
                      className='switch'
                      defaultChecked
                      onChange={onToggleCar}
                    />
                  </div>
                </div>

                <div className='cascaderWrapper'>
                  <div className='startingPoint'>startingPoint</div>
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
                </div>
                <div className='arrowWrapper'>
                  <div>{}</div>
                  <img src={arrow} alt='arrow' />
                </div>
                <div className='cascaderWrapper'>
                  <div>endPoint</div>
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
                </div>
              </MoveArea>
              <div>
                <Checkbox onChange={onChange}>다른 날짜</Checkbox>;
                <input placeholder='월' />
                <input placeholder='일' />
                <div className='startTime'>startTime</div>
                <TimePicker
                  use12Hours
                  format='h:mm a'
                  onChange={onTimeChange}
                />
              </div>
            </ContentInfo>
            <div className='postContent'>postContent</div>
            <textarea></textarea>
          </ContentArea>
        </Modal>
      </WrapperModal>
    </Presentation>
  );
};

export default PostContentModal;
