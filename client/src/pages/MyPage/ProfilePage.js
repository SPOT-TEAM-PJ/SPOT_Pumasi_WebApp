import React from 'react';
import ProfileInfo from './section/ProfileInfo';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  margin: 10% 0;
  width: 90%;
`;

const ProfileInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4%;
  padding-left: 4%;
  margin-left: 5%;
  margin-bottom: 40px;
  background-color: #ececec;
  border-radius: 10px;
`;
const ProfilePage = () => {
  return (
    <ProfileWrapper>
      <ProfileInfoWrapper>
        <div>내 정보</div>
        <ProfileInfo />
      </ProfileInfoWrapper>
      <ProfileInfoWrapper>
        <div>자녀 정보</div>
        <ProfileInfo type={'child'} />
        <ProfileInfo type={'child'} />
      </ProfileInfoWrapper>
    </ProfileWrapper>
  );
};

export default ProfilePage;
