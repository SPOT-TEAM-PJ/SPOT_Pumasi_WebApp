import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  EditOutlined,
  MailOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { NavWrapper, NavItem, NavDescription } from './styles';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <NavItem onClick={() => navigate('/')}>
        <HomeOutlined />
        <NavDescription>홈</NavDescription>
      </NavItem>
      <NavItem onClick={() => navigate('/mypostlist')}>
        <EditOutlined />
        <NavDescription>작성글</NavDescription>
      </NavItem>
      <NavItem onClick={() => navigate('/massage')}>
        <MailOutlined />
        <NavDescription>쪽지</NavDescription>
      </NavItem>
      <NavItem onClick={() => navigate('/friends')}>
        <TeamOutlined />
        <NavDescription>친구</NavDescription>
      </NavItem>
    </NavWrapper>
  );
};

export default Nav;
