import styled from 'styled-components';

export const StyledSlider = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  & .slider-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  & .s1 {
    background-image: url('https://img2.goodfon.com/wallpaper/nbig/9/5e/svecha-ogon-listya-osen.jpg');
  }

  & .s2 {
    background-image: url('https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZGxlc3xlbnwwfHwwfHw%3D&w=1000&q=80');
  }

  & .s3 {
    background-image: url('https://images3.alphacoders.com/665/665837.jpg');
  }

  /* ============== SWIPER ============== */

  /* ============ NAVIGATION ============ */
  & .swiper-button-prev,
  .swiper-button-next {
    background-color: #666;
    opacity: 0.7;
    border-radius: 50%;
    padding: 25px;
    transition: background-color, 150ms linear;
  }

  & .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: white;
  }

  & .swiper-button-prev::after,
  .swiper-button-next::after {
    color: #0e0e0e;
    font-size: 30px;
    font-weight: bold;
  }

  /* ============ PAGINATION ============ */

  & .swiper-pagination-bullet {
    padding: 10px;
    opacity: 0.5;
    outline: 1px solid #0e0e0e;
    transition: background-color 150ms linear;
  }

  & .swiper-pagination-bullet:hover {
    background-color: white;
  }

  & .swiper-pagination-bullet-active {
    opacity: 0.8;
    background-color: white;
  }

  @media (max-width: 768px) {
    & .swiper-button-prev,
    .swiper-button-next {
      display: none !important;
    }

    & .swiper-pagination-bullet {
      padding: 6px;
    }
  }
`;

export const StyledSliderContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 15px;
  text-align: center;
  padding: 65px;
  color: white;
  text-shadow: 1px 1px 15px #272727;

  & h2 {
    font-size: 42px;
  }

  & p {
    font-size: 20px;
  }

  & button {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    padding: 15px;
  }
`;
