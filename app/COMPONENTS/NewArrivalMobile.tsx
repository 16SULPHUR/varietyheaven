import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ActionAreaCard from './ActionAreaCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function NewArrivalMobile() {
  return (
    <div className='w-80 rounded-lg'>
      <Swiper
        spaceBetween={7}
        slidesPerView={1.07}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ActionAreaCard />
        </SwiperSlide>
        <SwiperSlide>
          <ActionAreaCard />
        </SwiperSlide>
        <SwiperSlide>
          <ActionAreaCard />
        </SwiperSlide>
        <SwiperSlide>
          <ActionAreaCard />
        </SwiperSlide>
        <SwiperSlide>
          <ActionAreaCard />
        </SwiperSlide>
        <SwiperSlide>
          <ActionAreaCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default NewArrivalMobile;
