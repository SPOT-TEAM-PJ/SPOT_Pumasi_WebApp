import React from 'react';

function ChatComponent({ name, content }) {
  return (
    <div
      style={{
        margin: '18px 0px',
        backgroundColor: '#C8FFD4',
        borderRadius: '10px',
        padding: '5px 8px',
      }}
    >
      <div>{name}</div>
      <div style={{}}>{content}</div>
    </div>
  );
}

export default ChatComponent;
