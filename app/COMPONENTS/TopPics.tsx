import React from 'react'
import ActionAreaCard from './ActionAreaCard'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import ProductCard from './ProductCard';

const TopPics = () => {
  return (
    <>
      <div className='mx-auto w-11/12 h-fit relative mb-90 bg-gray-500/[.2] backdrop-blur-sm rounded-lg p-2'>
        <div className=''></div>
        <Swiper
          spaceBetween={5}
          centeredSlides={false}

          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[
            // Autoplay,
            Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide >
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide >
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide >
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide >
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide >
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide >
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default TopPics