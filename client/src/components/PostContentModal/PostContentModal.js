import React from 'react';
import {
  Presentation,
  WrapperModal,
  Modal,
  TopBar,
  ChildrenImgArea,
  ContentArea,
  PostTitle,
  ContentTitle,
  PostInfo,
  PostContent,
  ButtonGroup,
  NickName,
} from './PostContentModalStyles';
import { Button, Input } from 'antd';
import './PostContent.css';
import child from '../../util/images/child1.jpg';

const PostContentModal = ({ setModalOpen, data }) => {
  const { TextArea } = Input;

  return (
    <Presentation>
      <WrapperModal>
        <Modal>
          <TopBar>
            <div>작성일: {data.date}</div>
            <div className='modalClose' onClick={() => setModalOpen(false)}>
              X
            </div>
          </TopBar>
          <ChildrenImgArea>
            <div className='imgCenter'>
              <img src={child} alt='child' />
            </div>
          </ChildrenImgArea>
          <PostTitle>
            <div className='title'>{data.content.postTitle}</div>
          </PostTitle>
          <NickName>{'수정맘(NickName)'}</NickName>
          <ContentArea>
            <ContentTitle>요청 정보</ContentTitle>
            <PostInfo>
              <tr>
                <td className='column'>시간</td>
                <td className='data'>
                  <img src='/img/time.png' alt='time' />
                  <div>{data.content.startTime} </div>
                  <div>{' ~ '}</div>
                  <div>{data.content.startTime}</div>
                </td>
              </tr>
              <tr>
                <td className='column'>날짜</td>
                <td className='data'>
                  <img src='/img/calendar.png' alt='calendar' />
                  <div>{'당일'} </div>
                </td>
              </tr>
              <tr>
                <td className='column'>금액</td>
                <td className='data'>
                  <img src='/img/money.png' alt='money' />
                  {'시간당: 10000'}
                </td>
              </tr>
              <tr>
                <td className='column'>차량</td>
                <td className='data'>
                  <img src='/img/car.png' alt='car' />
                  {data.needCar ? '필요 합니다.' : '필요 없습니다.'}
                </td>
              </tr>
              <tr>
                <td className='column'>출발 지점</td>
                <td className='data'>
                  <img src='/img/gps.png' alt='gps' />
                  {data.content.startingPoint}
                </td>
              </tr>
              <tr className='lastTr'>
                <td className='column'>도착 지점</td>
                <td className='data'>
                  <img src='/img/gps.png' alt='gps' />

                  {data.content.endPoint}
                </td>
              </tr>
            </PostInfo>
            <PostContent>
              <ContentTitle>게시글 내용</ContentTitle>
              <TextArea
                value={data.content.postContent}
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
                className='textArea'
              ></TextArea>
            </PostContent>
            <ButtonGroup>
              <Button onClick={() => setModalOpen(false)}>닫기</Button>
              <Button>채팅 보내기</Button>
            </ButtonGroup>
          </ContentArea>
        </Modal>
      </WrapperModal>
    </Presentation>
  );
};

export default PostContentModal;
