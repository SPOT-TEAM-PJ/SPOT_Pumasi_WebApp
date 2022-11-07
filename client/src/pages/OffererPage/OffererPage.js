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
  useEffect(() => {
    var container = document.getElementById('kakaoMap');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <OffererPageStyle>
        <KaKaoMap id='kakaoMap'></KaKaoMap>
        <PostList>
          <PostListHeader>
            <div>List</div>
            <Button icon={<EditOutlined />}></Button>
          </PostListHeader>
          {sampleDummy.map((v) => (
            <PostListContent
              type={v.type}
              title={v.title}
              date={v.date}
              key={v.id}
            />
          ))}
        </PostList>
      </OffererPageStyle>
    </>
  );
};

export default OffererPage;
