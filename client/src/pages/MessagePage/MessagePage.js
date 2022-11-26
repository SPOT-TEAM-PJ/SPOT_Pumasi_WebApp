import React from 'react';
import { PostList, PostListHeader } from '../OffererPage/OffererPageStyles';
import MessageContent from '../../components/MessageContent/MessageContent';
import { dummyData } from '../../util/dummyData/dummyData';
import { useSelector } from 'react-redux';

const MessagePage = () => {
  const { me } = useSelector((state) => state.user);

  const dummydata = dummyData();

  // dummydata에서 로그인한 user의 데이터 가져오기(post, message)
  const UserId = dummydata.find((dummy) => dummy.userId === me.userId);
  console.log(UserId);

  // 로그인한 user가 작성한 post와 post마다의 message 가져오기
  const Post = UserId.post.map((post) => {
    return { postId: post.postId, message: post.message };
  });
  console.log(Post);

  // 내가 작성한 post의 message의 comment 가져오기
  const Comment = Post[0].message[0].comment;
  console.log(Comment);

  // 상대방 userId 찾기
  const otherId = Comment.map((comment) =>
    comment
      .map((item) => item.userId)
      .filter((element) => element !== me.userId)
  );

  return (
    <>
      <PostList>
        <PostListHeader>
          <div>List</div>
        </PostListHeader>
        {Comment.map((comment, i) => (
          <MessageContent
            key={comment.messageId}
            name={
              dummydata.find((dummy) => dummy.userId === otherId[i][0]).parent
                .name
            }
            content={comment.map((comment) => {
              return [{ content: comment.content, userId: comment.userId }];
            })}
            //userId={comment.map((comment) => comment.userId)}
          />
        ))}
      </PostList>
    </>
  );
};

export default MessagePage;
