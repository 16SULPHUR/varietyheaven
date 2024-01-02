import React from 'react'
import ActionAreaCard from './ActionAreaCard'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import ProductCard from './ProductCard';
import TopPicsCard from './TopPicsCard';

const TopPics = () => {
  return (
    <>
      <div className='relative mx-auto w-11/12 h-fit sm:mt-20 mb-90 bg-gray-500/[.2] backdrop-blur-sm rounded-lg p-2 sm:pt-9 pt-6'>

        <div id='topSellerDiv' className="absolute w-full text-center">
          <Image
            src={"/top-pics-lable.png"}
            alt='top pics'
            width={350}
            height={100}
            className='sm:block hidden mx-auto'
          />
          
          <Image
            src={"/top-pics-lable.png"}
            alt='top pics'
            width={200}
            height={100}
            className='sm:hidden block mx-auto'
          />
        </div>
        <Swiper
          spaceBetween={10}
          centeredSlides={false}

          slidesPerView={1.07}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 4.3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide >
            <TopPicsCard />
          </SwiperSlide>
          <SwiperSlide >
            <TopPicsCard />
          </SwiperSlide>
          <SwiperSlide >
            <TopPicsCard />
          </SwiperSlide>
          <SwiperSlide >
            <TopPicsCard />
          </SwiperSlide>
          <SwiperSlide >
            <TopPicsCard />
          </SwiperSlide>
          <SwiperSlide >
            <TopPicsCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default TopPics