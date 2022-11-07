import React from 'react';
import {
  Presentation,
  WrapperModal,
  Modal,
  TopBar,
  ChildrenImgArea,
  ContentArea,
  UserInfo,
  PostInfo,
  ContentInfo
} from './PostContentModalStyles';

const PostContentModal = ({ setModalOpen }) => {
  return (
    <Presentation>
      <WrapperModal>
        <Modal>
          <TopBar>
            <div>1번 게시물 상세 페이지</div>
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
            <div className='postTitle'>postTitle</div>
            <UserInfo>
              <div className='nameInput'>parentName</div>
              <div className='nameInput'>childrenName</div>
            </UserInfo>
            <ContentInfo>
              <div className='serviceType'>
                {'serviceType/ 하교(원) & 등교(원)'}
              </div>
              <div className='needCar'>needCar</div>
              <div>startingPoint</div>
              <div>endPoint</div>
              <div className='startTime'>startTime</div>
              <div className='endTime'>endTime</div>
            </ContentInfo>
            <div className='postContent'>postContent</div>
          </ContentArea>
        </Modal>
      </WrapperModal>
    </Presentation>
  );
};

export default PostContentModal;
