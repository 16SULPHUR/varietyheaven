import React from 'react'
import ActionAreaCard from './ActionAreaCard'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const NewArrivalDesktop = () => {
    return (
        <div id='displayCards' className='mx-auto hidden md:hidden lg:block w-11/12 h-fit relative mb-80 bg-gray-500/[.2] backdrop-blur-sm rounded-lg p-2'>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}

                slidesPerView={4}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 200,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[
                    Autoplay,
                    Pagination, Navigation]}
                className="mySwiper"
            >

            {/* <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            > */}
                <SwiperSlide className='w-fit'>
                    <ActionAreaCard />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <ActionAreaCard />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <ActionAreaCard />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <ActionAreaCard />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <ActionAreaCard />
                </SwiperSlide>
                <SwiperSlide className='w-fit'>
                    <ActionAreaCard />
                </SwiperSlide>
            </Swiper>

            <div className="absolute sm:block hidden px-2 py-1" style={{ top: "-1.5rem", right: "-1.5rem", zIndex: "10" }}>
                <Image
                    src={"/new-arrival-lable.png"}
                    alt='new arrival'
                    width={100}
                    height={100}
                />
            </div>
        </div>


    )
}

export default NewArrivalDesktop