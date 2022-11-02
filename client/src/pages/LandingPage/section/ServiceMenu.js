import React from 'react';
import {
  ServiceList,
  ServiceButton,
  InfoWrapper,
  ServiceMenuWrapper,
  MenuGrop,
} from './ServiceMenuStyles';
import info from '../../../util/images/info.png';
const ServiceMenu = () => {
  return (
    <ServiceMenuWrapper>
      <h2>Service Menu</h2>
      <MenuGrop>
        <InfoWrapper>
          <img src={info} alt='info' />
        </InfoWrapper>
        <ServiceList>
          <ServiceButton type='primary'>
            {'마이페이지 & 친구목록'}
          </ServiceButton>
          <ServiceButton type='primary'>서비스 이용</ServiceButton>
          <ServiceButton type='primary'>서비스 제공</ServiceButton>
        </ServiceList>
      </MenuGrop>
    </ServiceMenuWrapper>
  );
};

export default ServiceMenu;
