import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-300 container p-3 flex justify-between gap-10 items-center'>

      <div className="flex justify-start gap-10 items-center">

        <button className="">
          <Image
            src="/menu-icon.png" // Path to your image inside the public folder
            alt="LOGO"
            className='drop-shadow-lg'
            width={30}
            height={30}
          />
        </button>

        <Link href={'/'}>
          <Image
            src="/varietyheavenlogo.png" // Path to your image inside the public folder
            alt="LOGO"
            width={100}
            height={100}
          />
        </Link>

      </div>

      <div className="flex justify-end gap-10 items-center">

        <Link href={'/'}>
          <Image
            src="/search-icon.png" // Path to your image inside the public folder
            alt="LOGO"
            width={40}
            height={40}
          />
        </Link>

        <Link href={'/'}>
          <Image
            src="/shopping-cart-icon.png" // Path to your image inside the public folder
            alt="LOGO"
            width={40}
            height={40}
          />
        </Link>

      </div>

    </header>
  )
}

export default Header