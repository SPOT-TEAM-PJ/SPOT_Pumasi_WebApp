import React from 'react';
import { Input } from 'antd';
import UserComponent from './section/UserComponent';
const MyPage = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const friends = [
    { stateComment: 'text1', userId: 2 },
    { stateComment: 'text2', userId: 3 },
  ];
  return (
    <>
      <Search placeholder='input search text' onSearch={onSearch} enterButton />
      <UserComponent />
      <h4>친구 목록</h4>
      <div>
        {friends.map((friend, i) => (
          <UserComponent
            key={i}
            stateComment={friend.stateComment}
            userId={friend.userId}
          />
        ))}
      </div>
    </>
  );
};

export default MyPage;
