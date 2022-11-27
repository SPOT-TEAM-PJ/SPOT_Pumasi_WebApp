import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddonForm from '../../components/AddOn/AddonForm';
import LandingBanner from './section/LandingBanner';
import ServiceMenu from './section/ServiceMenu';

const LandingPage = () => {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // me가 없다면 loginPage 이동 _ 서버 구축시 미들웨어로 유효성 검사 진행
  useEffect(() => {
    if (!me) {
      navigate('/login');
    }
  });
  return (
    <div>
      <LandingBanner />
      <ServiceMenu />
      <AddonForm />
    </div>
  );
};

export default LandingPage;
