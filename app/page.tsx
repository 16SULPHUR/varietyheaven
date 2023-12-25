import Image from 'next/image'
import Header from './COMPONENTS/Layouts/Header'
import Carousel from './COMPONENTS/Carausel'
import ActionAreaCard from './COMPONENTS/ActionAreaCard'

export default function Home() {
  return (
    <main className="container">
      <Header />

      <Carousel />

      {/* <div className="content w-full h-96 fixed"></div> */}

        <div id='displayCards' className='px-4 sm:px-16 grid lg:grid-cols-3 lg-grid-cols-3 grid-cols-1 gap-10 mb-52'>
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
      </div>
    </main>
  )
}
