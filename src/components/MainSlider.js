import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { StyledButton } from './styled/Button.styled';
import { StyledSlider, StyledSliderContent } from './styled/MainSlider.styled';

export default function MainSlider() {
  return (
    <StyledSlider>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={'slider-item s1'}>
          <StyledSliderContent>
            <h2>Wiosenny konkurs!</h2>
            <p>
              Polub nasz fanpage na Facebook i zgarnij nagrody! Szczegóły
              konkursu podane w wyróżnionym poście!
            </p>
            <StyledButton>ZOBACZ</StyledButton>
          </StyledSliderContent>
        </SwiperSlide>

        <SwiperSlide className={'slider-item s2'}>
          <StyledSliderContent>
            <h2>Promocje - czas start!</h2>
            <p>
              Odwiedź nasz sklep i zobacz naszą ofertę - nowe świece już są!
            </p>
            <StyledButton>ZOBACZ</StyledButton>
          </StyledSliderContent>
        </SwiperSlide>

        <SwiperSlide className={'slider-item s3'}>
          <StyledSliderContent>
            <h2>Bądź razem z nami!</h2>
            <p>
              Odwiedź nasz Instagram, zacznij go obserwować i bądź na czasie z
              naszą ofertą!
            </p>
            <StyledButton>ZOBACZ</StyledButton>
          </StyledSliderContent>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
}

/* fixme: dummy code above, need to write this in proper way */
