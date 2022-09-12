import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { StyledButton } from './styled/Button.styled';
import { StyledSlider } from './styled/MainSlider.styled';

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
          <h1>hello world</h1>
        </SwiperSlide>

        <SwiperSlide className={'slider-item s2'}>
          <h1>hello world</h1>
        </SwiperSlide>

        <SwiperSlide className={'slider-item s3'}>
          <h1>hello world</h1>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
}

/* fixme: dummy code above, need to write this in proper way */
