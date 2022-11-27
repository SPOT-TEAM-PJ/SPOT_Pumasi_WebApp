import React, { useCallback, useState } from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserComponent({ stateComment, userId }) {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onDetail = useCallback(() => {
    if (!userId) {
      navigate('/profile', {
        state: me.userId,
      });
    } else {
      navigate('/profile', {
        state: userId,
      });
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px 0px',
      }}
    >
      <Avatar
        size='large'
        icon={<UserOutlined />}
        style={{ margin: '5px 15px' }}
      />
      {userId ? (
        <div style={{ width: '50%' }}>{stateComment}</div>
      ) : (
        <div style={{ width: '50%' }}>{me.parent.stateComment}</div>
      )}

      <Button onClick={onDetail}>상세</Button>
    </div>
  );
}

export default UserComponent;
