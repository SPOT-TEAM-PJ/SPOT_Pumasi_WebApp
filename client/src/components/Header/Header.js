import React from 'react';
import styled from 'styled-components';
import Logo from '../../util/images/FumasiLogo.png';

import { BellOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';

const HeaderStyle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  img {
    width: 28%;
  }
`;
const UnderLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: darkgray;
  margin-left: auto;
  margin-right: auto;
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
