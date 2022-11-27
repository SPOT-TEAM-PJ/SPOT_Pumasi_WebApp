import React, { useState } from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  background-color: #fdfdbd;
  border-radius: 10px;
  width: 100%;
  margin: 10px 3%;
  padding: 8px 2%;
  box-shadow: 0px 8px 6px -6px #f0d662;
  height: 100px;
  font-size: 13px;
`;

function ProfileInfo({ type, parent, ...child }) {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );

  return (
    <div>
      <AvatarWrapper>
        <Avatar src={Image} style={{ margin: '15px 0px' }} size={80} />
        {type === 'child' ? (
          <InfoWrapper>
            <div>이름: {child.childrenname}</div>
            <div>나이: {child.age}</div>
            <div>성별: {child.gender}</div>
            <div>어린이집: {child.school}</div>
          </InfoWrapper>
        ) : (
          <InfoWrapper>
            <div>이름: {parent.name}</div>
            <div>닉네임: {parent.nickname}</div>
            <div style={{ width: '100%' }}>
              휴대폰 번호: {parent.phoneNumber}
            </div>
            <div>상태메세지: {parent.stateComment}</div>
          </InfoWrapper>
        )}
      </AvatarWrapper>
    </div>
  );
}

export default ProfileInfo;
