'use client';

// Import Swiper React components
import React, { useRef, useState } from 'react';
import { EffectFade } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carausel(props: any) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
  };
  return (
    <div className='sm:pt-16 mx-3 sm:mx-0 mt-20 mb-5 sm:my-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <Link href='/'>
            <Image
              src={`/${props.dir}/1.jpg`}
              alt="IMG1"
              width={2000}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <Image
              src={`/${props.dir}/3.jpg`}
              alt="IMG1"
              width={2000}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/'>
            <Image
              src={`/${props.dir}/2.jpg`}
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