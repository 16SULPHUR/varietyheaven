'use client';
import Image from 'next/image'
import Header from './COMPONENTS/Layouts/Header'
import Carousel from './COMPONENTS/Carausel'
import ActionAreaCard from './COMPONENTS/ActionAreaCard'
import HorizontalScrollingCatagoriesCards from './COMPONENTS/HorizontalScrollingCatagoriesCards'
import HeaderCatagories from './COMPONENTS/HeaderCatagories';

export default function Home() {
  return (
    <main className="container select-none">
      <Header />

      <div className="headerCatagories block sm:hidden mt-20 h-24">
        <HeaderCatagories/>
      </div>

      <div className='desktopCarousel lg:block md:hidden hidden'>
        <Carousel dir="desktop-carousel-images" />
      </div>
      <div className='mobileCarousel lg:hidden md:block block'>
        <Carousel dir="mobile-carousel-images" />
      </div>

      <div className="flex sm:hidden justify-center gap-3 newArrivals font-bold text-2xl mb-4 w-full">
        <Image
          src={'/new-icon.gif'}
          alt='new'
          width={30}
          height={30}
        />
        <span>New Arrivals</span>
      </div>

      <div className='mx-auto hidden md:hidden lg:block w-fit'>
        <div id='displayCards' className='grid lg:grid-cols-3 lg-grid-cols-3 grid-cols-1 gap-10 mb-52'>
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
        </div>
      </div>

      <div className='mx-auto block md:block lg:hidden w-max shadow-lg rounded-lg'>
        <HorizontalScrollingCatagoriesCards />
      </div>
    </main>
  )
}
