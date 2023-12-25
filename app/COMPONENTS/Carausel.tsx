'use client';

// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';

function Carausel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
  };
  return (
    <div className='mt-16 p-3 sm:p-0 '>
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
          <Link href='/'>
            <Image
              src={"/carausal-image-1.jpg"}
              alt="IMG1"
              width={2000}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <Image
              src={"/carausal-image-3.jpg"}
              alt="IMG1"
              width={2000}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <Image
              src={"/carausal-image-2.jpg"}
              alt="IMG1"
              width={2000}
              height={200}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carausel;