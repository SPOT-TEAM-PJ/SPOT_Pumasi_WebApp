import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
  MessageContentWrapper,
  MessageWrapper,
  ContentWrapper,
  DeleteBtn,
} from './styles';

function MessageContent({ name, ...content }) {
  const navigate = useNavigate();
  const Content = content.content;
  return (
    <MessageContentWrapper
      onClick={() => {
        console.log(Content);
        navigate('/chat', { state: { Content, name } });
      }}
    >
      <MessageWrapper>
        <Avatar
          size='large'
          icon={<UserOutlined />}
          style={{ margin: '5px 15px' }}
        />
        <ContentWrapper>
          <h4>{name}</h4>
          <div>{Content[Content.length - 1][0].content}</div>
        </ContentWrapper>
      </MessageWrapper>
      <DeleteBtn>
        <CloseOutlined />
      </DeleteBtn>
    </MessageContentWrapper>
  );
}

export default MessageContent;
