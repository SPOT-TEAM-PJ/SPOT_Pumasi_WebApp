import React, { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ChatComponent from '../../components/MessageContent/ChatComponent';

const ChatPage = () => {
  const { state } = useLocation();
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(state);
  const [message, setMessage] = useState('');

  const onSendMessage = useCallback(() => {
    console.log(message);
    // dispatch({
    //   type:'SEND_MESSAGE',
    //   data:{postId:postId, userId:me.userId, message:message}
    // })
  }, [message, me.userId]);

  return (
    <>
      <div
        style={{
          margin: '0px 10px',
          marginTop: '10px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          backgroundColor: '#FDFDBD',
          padding: '10px',
          paddingTop: '10px',
          minHeight: '280px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: 'solid #dfdbdb 1.5px',
          }}
        >
          {state.name}
        </div>
        <div>
          {state.Content.map((content) =>
            content[0].userId === me.userId ? (
              <div style={{ paddingLeft: '100px' }}>
                {' '}
                <ChatComponent
                  name={me.parent.name}
                  content={content[0].content}
                />
              </div>
            ) : (
              <ChatComponent name={state.name} content={content[0].content} />
            )
          )}
        </div>
      </div>
      <div
        style={{
          margin: '0px 10px',
          padding: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          borderBottomLeftRadius: '5px',
          borderEndEndRadius: '5px',
          backgroundColor: '#efef85',
        }}
      >
        <input
          type={'text'}
          style={{
            width: '80%',
            border: 'solid gray 1.5px',
            borderRadius: '10px',
            backgroundColor: '#efef85',
            paddingLeft: '10px',
          }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <div
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <buttom style={{ cursor: 'pointer' }} onClick={onSendMessage}>
            전송
          </buttom>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
