/*global kakao*/
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import PostListContent from '../../components/PostListContent/PostListContent';
import {
  OffererPageStyle,
  KaKaoMap,
  PostList,
  PostListHeader,
} from './OffererPageStyles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POST_REQUEST } from '../../reducers/post';
export const sampleDummy = [
  {
    id: 1,
    post: {},
    user: {},
    type: 0,
    title: '하원 구합니다.',
    date: '22.11.15',
  },
  {
    id: 2,
    post: {},
    user: {},
    type: 1,
    title: '등교 구합니다.',
    date: '22.11.15',
  },
  {
    id: 3,
    post: {},
    user: {},
    type: 0,
    title: '하원 구합니다.',
    date: '22.11.15',
  },
];

const OffererPage = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { mainPosts } = useSelector((state) => state.post);
  useEffect(() => {
    var container = document.getElementById('kakaoMap');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  // call datas
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //   });
  // }, []);

  return (
    <>
      <OffererPageStyle>
        <KaKaoMap id='kakaoMap'></KaKaoMap>
        <PostList>
          <PostListHeader>
            <div>List</div>
            <Button
              onClick={() => navigate(`/offererpost`)}
              icon={<EditOutlined />}
            />
          </PostListHeader>
          {sampleDummy.map((v) => (
            <PostListContent
              type={v.type}
              title={v.title}
              date={v.date}
              key={v.id}
            />
          ))}
          {/* {mainPosts.map((v) => (
            <PostListContent
              type={v.postType}
              title={v.content.postTitle}
              date={v.date}
              key={v.postId}
            />
          ))} */}
        </PostList>
      </OffererPageStyle>
    </>
  );
};

export default OffererPage;
