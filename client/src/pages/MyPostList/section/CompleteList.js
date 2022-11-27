import React from 'react';
import styled from 'styled-components';

const MyPostWrapper = styled.div`
  display: flex;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2e2e2;
  border: 1px solid #808080;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
`;
const PostIndex = styled.div`
  color: #fff;
  background-color: #808080;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const PostTitle = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;
const CompleteList = ({ index, title }) => {
  return (
    <MyPostWrapper>
      <PostIndex>{index}</PostIndex>
      <PostTitle>{title}</PostTitle>
    </MyPostWrapper>
  );
};

export default CompleteList;
