import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, FreeMode } from 'swiper/modules';

function HeaderCatagories() {
    return (
        <div className='h-full mx-3'>
            <ul className='flex overflow-x-scroll gap-3' style={{ scrollSnapType: 'x mandatory'}}>
                <li className='border'>
                    <Link href='/' className='w-fit mx-auto'>
                        <div className="h-full flex flex-col items-center">
                            <div className='w-16'>
                                <img
                                    src='/header-catagories-images/1.png'
                                    className='w-fit mx-auto'
                                    style={{ height: "4.9rem" }}
                                />
                            </div>
                            <span className='text-xs'>Cat 1</span>
                        </div>
                    </Link>
                </li>
                <li className='border'>
                    <Link href='/' className='w-fit mx-auto'>
                        <div className="h-full flex flex-col items-center">
                            <div className='w-16'>
                                <img
                                    src='/header-catagories-images/5.png'
                                    className='w-fit mx-auto'
                                    style={{ height: "4.9rem" }}
                                />
                            </div>
                            <span className='text-xs'>Cat 1</span>
                        </div>
                    </Link>
                </li>
                <li className='border'>
                    <Link href='/' className='w-fit mx-auto'>
                        <div className="h-full flex flex-col items-center">
                            <div className='w-16'>
                                <img
                                    src='/header-catagories-images/6.png'
                                    className='w-fit mx-auto'
                                    style={{ height: "4.9rem" }}
                                />
                            </div>
                            <span className='text-xs'>Cat 1</span>
                        </div>
                    </Link>
                </li>
                <li className='border'>
                    <Link href='/' className='w-fit mx-auto'>
                        <div className="h-full flex flex-col items-center">
                            <div className='w-16'>
                                <img
                                    src='/header-catagories-images/2.png'
                                    className='w-fit mx-auto'
                                    style={{ height: "4.9rem" }}
                                />
                            </div>
                            <span className='text-xs'>Cat 1</span>
                        </div>
                    </Link>
                </li>
                <li className='border'>
                    <Link href='/' className='w-fit mx-auto'>
                        <div className="h-full flex flex-col items-center">
                            <div className='w-16'>
                                <img
                                    src='/header-catagories-images/3.png'
                                    className='w-fit mx-auto'
                                    style={{ height: "4.9rem" }}
                                />
                            </div>
                            <span className='text-xs'>Cat 1</span>
                        </div>
                    </Link>
                </li>
                <li className='border'>
                    <Link href='/' className='w-fit mx-auto'>
                        <div className="h-full flex flex-col items-center">
                            <div className='w-16'>
                                <img
                                    src='/header-catagories-images/4.png'
                                    className='w-fit mx-auto'
                                    style={{ height: "4.9rem" }}
                                />
                            </div>
                            <span className='text-xs'>Cat 1</span>
                        </div>
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default HeaderCatagories;