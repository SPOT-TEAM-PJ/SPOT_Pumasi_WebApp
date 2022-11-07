import React from 'react';
import styled from 'styled-components';
import AddonForm from '../../components/AddOn/AddonForm';
import LandingBanner from './section/LandingBanner';
import ServiceMenu from './section/ServiceMenu';

const LandingWrapper = styled.div`
  background-color: #fdfdbd;
  padding: 10px;
  border-radius: 10px;
`;
const LandingPage = () => {
  return (
    <LandingWrapper>
      <LandingBanner />
      <ServiceMenu />
      <AddonForm />
    </LandingWrapper>
  );
};

export default LandingPage;
