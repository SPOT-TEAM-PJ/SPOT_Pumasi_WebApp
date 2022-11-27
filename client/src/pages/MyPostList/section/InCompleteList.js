import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const MyPostWrapper = styled.div`
  display: flex;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e2e2e2;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PostIndex = styled.div`
  background-color: #ffe15d;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const PostTitle = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Btn = styled(Button)`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InCompleteList = ({ index, title }) => {
  return (
    <MyPostWrapper>
      <PostIndex>{index}</PostIndex>
      <PostTitle>{title}</PostTitle>
      <Btn>수정</Btn>
      <Btn>삭제</Btn>
    </MyPostWrapper>
  );
};

export default InCompleteList;
