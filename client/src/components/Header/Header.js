import React from 'react';
import styled from 'styled-components';
import Logo from '../../util/images/FumasiLogo.png';

import { BellOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';

const HeaderStyle = styled.div`
  padding: 10px;
  display: flex ;
  justify-content: space-between;
  img {
    width: 25%;
  }
`;
// dummy state
const user = true;

const Header = () => {
  return (
    <HeaderStyle>
      <img src={Logo} alt='logo' />
      {user && <Button shape='circle' icon={<BellOutlined />} />}
    </HeaderStyle>
  );
};

export default Header;
