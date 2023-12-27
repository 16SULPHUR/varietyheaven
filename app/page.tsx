'use client';
import Image from 'next/image'
import Header from './COMPONENTS/Layouts/Header'
import Carousel from './COMPONENTS/Carausel'
import ActionAreaCard from './COMPONENTS/ActionAreaCard'
import HorizontalScrollingCatagoriesCards from './COMPONENTS/HorizontalScrollingCatagoriesCards'

export default function Home() {
  return (
    <main className="container select-none">
      <Header />

      <div className='desktopCarousel lg:block md:hidden hidden'>
        <Carousel dir="desktop-carousel-images" />
      </div>
      <div className='mobileCarousel lg:hidden md:block block'>
        <Carousel dir="mobile-carousel-images" />
      </div>

      {/* <div className="content w-full h-96 fixed"></div> */}

      <div className='lg:mx-auto hidden md:hidden lg:block w-fit'>
        <div id='displayCards' className='grid lg:grid-cols-3 lg-grid-cols-3 grid-cols-1 gap-10 mb-52'>
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
        </div>
      </div>
      
      <div className='mx-auto block md:block lg:hidden w-fit shadow-lg rounded-lg'>
        <HorizontalScrollingCatagoriesCards/>
          </div>
    </main>
  )
}
