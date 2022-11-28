import React from 'react';
import styled from 'styled-components';
import Logo from '../../util/images/FumasiLogo.png';

import { BellOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../../reducers/user';
import { useNavigate } from 'react-router-dom';

const HeaderStyle = styled.div`
  height: 55px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  img {
    width: 25%;
  }
  Button {
    aspect-ratio: 1/1;
  }
`;
const UnderLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: darkgray;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  color: #808080;
  .welcom {
    font-size: 12px;
  }
  margin-bottom: 5px;
`;
const LogOutBtn = styled(Button)`
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 15px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const onClickBtn = () => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    navigate('/');
  };

  return (
    <>
      <HeaderStyle>
        <img src={Logo} alt='logo' />
        {me && (
          <Button
            shape='circle'
            size='large'
            clolor='blue'
            icon={<BellOutlined />}
          />
        )}
      </HeaderStyle>
      <UnderLine />
      {me && (
        <Info>
          <div className='welcom'>{`${me.parent.name}님 환영합니다!`}</div>
          <LogOutBtn danger onClick={onClickBtn}>
            LogOut
          </LogOutBtn>
        </Info>
      )}
    </>
  );
};

export default Header;
