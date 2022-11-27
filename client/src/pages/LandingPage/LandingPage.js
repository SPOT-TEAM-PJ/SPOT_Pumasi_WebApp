import React from 'react';
import styled from 'styled-components';
import AddonForm from '../../components/AddOn/AddonForm';
import LandingBanner from './section/LandingBanner';
import ServiceMenu from './section/ServiceMenu';

const LandingPage = () => {
  return (
    <div>
      <LandingBanner />
      <ServiceMenu />
      <AddonForm />
    </div>
  );
};

export default LandingPage;
