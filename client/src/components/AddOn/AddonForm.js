import React from 'react';
import styled from 'styled-components';
import SchAddon from '../../util/images/addon.png';

const AddonWrapper = styled.div`
width: 100%;
aspect-ratio: 16/4.5;
overflow: hidden;
margin-top: 10px;
border-radius: 5px;
img {
  width: 100%;
}
`;
const AddonForm = () => {
  return (
    <AddonWrapper>
      <img src={SchAddon} alt='addon' />
    </AddonWrapper>
  );
};

export default AddonForm;
