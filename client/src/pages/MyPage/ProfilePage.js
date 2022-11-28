import React from 'react';
import ProfileInfo from './section/ProfileInfo';
import styled from 'styled-components';
import { dummyData } from '../../util/dummyData/dummyData';
import { useLocation } from 'react-router';

const ProfileWrapper = styled.div`
  margin: 10% 0;
  width: 95%;
`;

const ProfileInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4%;
  padding-left: 4%;
  margin-left: 3%;
  margin-bottom: 40px;
  background-color: #ececec;
  border-radius: 10px;
`;

// const parent = dummyData()[0].parent;
// const children = [...dummyData()[0].children];

const ProfilePage = () => {
  const { state } = useLocation();
  console.log(state);
  const dummydata = dummyData();
  const user = dummydata.find((dummy) => dummy.userId === state);

  return (
    <ProfileWrapper>
      <ProfileInfoWrapper>
        <div>내 정보</div>
        <ProfileInfo parent={user.parent} />
      </ProfileInfoWrapper>
      <ProfileInfoWrapper>
        <div>자녀 정보</div>
        {user.children.map((child, idx) => (
          <ProfileInfo key={child.id} type={'child'} {...child} />
        ))}
      </ProfileInfoWrapper>
    </ProfileWrapper>
  );
};

export default ProfilePage;
