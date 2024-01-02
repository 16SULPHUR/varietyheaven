'use client';
import Image from 'next/image'
import Header from './COMPONENTS/Layouts/Header'
import Carousel from './COMPONENTS/Carausel'
import ActionAreaCard from './COMPONENTS/ActionAreaCard'
import HorizontalScrollingCatagoriesCards from './COMPONENTS/HorizontalScrollingCatagoriesCards'
import HeaderCatagories from './COMPONENTS/HeaderCatagories';
import NewArrivalDesktop from './COMPONENTS/NewArrivalDesktop';
import TopPics from './COMPONENTS/TopPics';
import ProductCard from './COMPONENTS/ProductCard';

export default function Home() {
  return (
    <main className="container select-none mb-40">
      <Header />


      <div className='desktopCarousel lg:block md:hidden hidden relative'>
        <Carousel dir="desktop-carousel-images" />
      </div>
      <div className='mobileCarousel lg:hidden md:block block mt-20'>
        <Carousel dir="mobile-carousel-images" />
      </div>

      <div className="headerCatagories block sm:hidden h-24 mb-7">
        <HeaderCatagories />
      </div>


      <NewArrivalDesktop />
      {/* <div id='displayCards' className="sm:grid hidden grid-cols-3 w-fit mx-auto gap-10">
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </div> */}

      <div className='mx-auto block md:block lg:hidden w-max shadow-lg rounded-lg relative'>
        <HorizontalScrollingCatagoriesCards />
        <div className="absolute sm:hidden md:block block px-2 py-1" style={{ top: "-1.1rem", right: "-1.1rem", zIndex: "1000" }}>
          <Image
            src={"/new-arrival-lable.png"}
            alt='new arrival'
            width={70}
            height={70}
          />
        </div>
      </div>

      <TopPics />

      {/* <div className='w-fit mx-auto m-5 bg-slate-600 rounded-lg'>
        <ProductCard />
      </div> */}
    </main>
  )
}
