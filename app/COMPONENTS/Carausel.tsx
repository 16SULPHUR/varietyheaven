'use client';

// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

export default () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
  };
  return (
    <div className='mt-16'>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/carausal-image-1.jpg"}
            alt="IMG1"
            width={2000}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/carausal-image-2.jpg"}
            alt="IMG1"
            width={2000}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};