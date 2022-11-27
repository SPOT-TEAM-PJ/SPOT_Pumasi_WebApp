import React from 'react';
import styled from 'styled-components';
import CompleteList from './section/CompleteList';
import InCompleteList from './section/InCompleteList';
const MyPostListWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
const ContentListWrapper = styled.div`
  overflow: scroll;
  height: 200px;
`;
const ListWrapper = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;
const ListHeader = styled.div`
  background-color: #434242;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 35px;
`;
const IncListHeader = styled.div`
  background-color: #fed049;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
`;

const dummy = [
  { title: '첫번째 게시글' },
  { title: '두번째 게시글' },
  { title: '세번째 게시글' },
  { title: '네번째 게시글' },
  { title: '다섯번째 게시글' },
  { title: '여섯번째 게시글' },
];
const MyPostList = () => {
  return (
    <MyPostListWrapper>
      <ListWrapper>
        <IncListHeader>미완료 목록</IncListHeader>
        <ContentListWrapper>
          {dummy.map((v, i) => (
            <InCompleteList key={i} index={i + 1} title={v.title} />
          ))}
        </ContentListWrapper>
      </ListWrapper>
      <ListWrapper>
        <ListHeader>완료 목록</ListHeader>
        <ContentListWrapper>
          {dummy.map((v, i) => (
            <CompleteList key={i} index={i + 1} title={v.title} />
          ))}
        </ContentListWrapper>
      </ListWrapper>
    </MyPostListWrapper>
  );
};

export default MyPostList;
