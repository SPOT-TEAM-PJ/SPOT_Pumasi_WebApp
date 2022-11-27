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
import { LOAD_OFFERER_POST_REQUEST } from '../../reducers/post';

const OffererPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mainPosts } = useSelector((state) => state.post);
  console.log('offererPage: ', mainPosts);

  useEffect(() => {
    var container = document.getElementById('kakaoMap');
    var options = {
      center: new kakao.maps.LatLng(36.79108924086445, 126.93356085072077),
      level: 7,
    };
    var map = new kakao.maps.Map(container, options);
    var positions = [
      {
        title: '오목리',
        latlng: new kakao.maps.LatLng(36.80161154210687, 126.92889030187034),
      },
      {
        title: '남성리',
        latlng: new kakao.maps.LatLng(36.796576672410104, 126.95148363504471),
      },
      {
        title: '읍내리',
        latlng: new kakao.maps.LatLng(36.77926701751682, 126.93428799542394),
      },
    ];

    var imageSrc =
      'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png';

    for (var i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(24, 35);

      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, []);

  // call datas
  useEffect(() => {
    dispatch({
      type: LOAD_OFFERER_POST_REQUEST,
    });
  }, []);

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
          {mainPosts.map((v) => (
            <PostListContent
              type={v.content.serviceType}
              title={v.content.postTitle}
              date={v.date}
              data={v}
              key={v.postId}
            />
          ))}
        </PostList>
      </OffererPageStyle>
    </>
  );
};

export default OffererPage;
