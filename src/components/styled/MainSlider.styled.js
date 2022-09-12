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
`;
