import React, { useEffect, useState } from 'react';
import goHome from '../../util/images/goHome.png';
import goSchool from '../../util/images/goSchool.png';
import { MessageOutlined } from '@ant-design/icons';
import {
  PostContent,
  ContentTypeImage,
  ContentItem,
  ContentTitle,
  ContentDate,
  ContentRequest,
} from './PostListContentStyles';
import PostContentModal from '../PostContentModal/PostContentModal';

const PostListContent = ({ data, type, title, date }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PostContent>
        <ContentTypeImage>
          <img src={type === 0 ? goHome : goSchool} alt='goHome' />
        </ContentTypeImage>
        <ContentItem
          onClick={() => {
            console.log(modalOpen);
            setModalOpen(true);
          }}
        >
          <ContentTitle>{title}</ContentTitle>
          <ContentDate>{date}</ContentDate>
          <ContentRequest icon={<MessageOutlined />} />
        </ContentItem>
      </PostContent>
      {modalOpen && (
        <PostContentModal setModalOpen={setModalOpen} data={data} />
      )}
    </>
  );
};

export default PostListContent;
