import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import LandingBanner1 from '../../../util/images/LandingBanner1.png';
import LandingBanner2 from '../../../util/images/LandingBanner2.png';

import 'swiper/css';
import 'swiper/css/pagination';
import { LandingBannerForm, BannerWrapper } from './LandingBannerStyles';

const LandingBanner = () => {
  return (
    <LandingBannerForm>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <BannerWrapper>
            <img src={LandingBanner1} alt='info' />
          </BannerWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <BannerWrapper>
            <img src={LandingBanner2} alt='info' />
          </BannerWrapper>
        </SwiperSlide>
      </Swiper>
    </LandingBannerForm>
  );
};

export default LandingBanner;
