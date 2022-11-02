import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Banner1 from '../../../util/images/source3.png';
import Banner2 from '../../../util/images/source1.png';

import 'swiper/css';
import 'swiper/css/pagination';
import { LandingBannerForm, FirstBanner } from './LandingBannerStyles';

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
          <FirstBanner>
            <img src={Banner1} alt='info' />
            <h3>'품앗이'에 오신걸 환영합니다!!</h3>
          </FirstBanner>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </LandingBannerForm>
  );
};

export default LandingBanner;
