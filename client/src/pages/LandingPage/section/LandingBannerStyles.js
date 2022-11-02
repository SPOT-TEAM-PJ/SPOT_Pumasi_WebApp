import styled from 'styled-components';

export const LandingBannerForm = styled.div`
  width: 100%;
  aspect-ratio: 16/8;
  margin-top: 10px;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    object-fit: cover;
  }
`;

export const FirstBanner = styled.div`
  background-color: #c8ffd4 ;
  img {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;
