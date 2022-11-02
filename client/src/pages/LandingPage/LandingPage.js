import React from 'react';
import AddonForm from '../../components/AddOn/AddonForm';
import LandingBanner from './section/LandingBanner';
import ServiceMenu from './section/ServiceMenu';

const LandingPage = () => {
  return (
    <>
      <LandingBanner />
      <ServiceMenu />
      <AddonForm />
    </>
  );
};

export default LandingPage;
