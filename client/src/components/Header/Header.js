import React from 'react';
import styled from 'styled-components';
import Logo from '../../util/images/FumasiLogo.png';

import { BellOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';

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

// dummy state
const user = true;

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <img src={Logo} alt='logo' />
        {user && (
          <Button
            shape='circle'
            size='large'
            clolor='blue'
            icon={<BellOutlined />}
          />
        )}
      </HeaderStyle>
      <UnderLine />
    </>
  );
};

export default Header;
