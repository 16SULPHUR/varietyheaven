import Image from 'next/image'
import Header from './COMPONENTS/Layouts/Header'
import Carousel from './COMPONENTS/Carausel'

export default function Home() {
  return (
    <main className="container">
      <Header/>

      <Carousel/>
    </main>
  )
}
