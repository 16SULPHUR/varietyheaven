'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchInput from './SearchInput'

const Header = () => {

  const [mobileLinksClassNames, setMobileLinksClassNames] = useState<boolean>(true);
  const [searchbarClassName, setSearchbarClassName] = useState<boolean>(true);

  const mobileLinksClassName = `links w-full text-center sm:hidden ${mobileLinksClassNames ? 'hidden' : 'block'}`;
  const searchbarForMobileClassNames = `links w-full text-center sm:hidden ${searchbarClassName ? 'hidden' : 'block'}`;

  return (
    <header className='bg-slate-900 container p-3 flex flex-col justify-between items-center w-full'>

      <div className='bg-slate-900 container flex justify-between items-center w-full'>
        <div className="flex justify-start gap-10 items-center">

          <button className="h-full sm:hidden" onClick={() => { setMobileLinksClassNames((prevDisplay) => !prevDisplay); }}>
            <Image
              src="/menu-icon.png" // Path to your image inside the public folder
              alt="LOGO"
              className='drop-shadow-lg'
              width={35}
              height={35}
            />
          </button>

          <Link className='sm:ps-5' href={'/'}>
            <Image
              src="/varietyheavenlogo.png" // Path to your image inside the public folder
              alt="LOGO"
              width={100}
              height={100}
            />
          </Link>

        </div>

        <div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0 dark:text-white lg:dark:hover:text-lime-400 dark:hover:bg-pink-500 dark:hover:text-pink-400 lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0 dark:text-white lg:dark:hover:text-lime-400 dark:hover:bg-pink-500 dark:hover:text-pink-400 lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0 dark:text-white lg:dark:hover:text-lime-400 dark:hover:bg-pink-500 dark:hover:text-pink-400 lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0 dark:text-white lg:dark:hover:text-lime-400 dark:hover:bg-pink-500 dark:hover:text-pink-400 lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0 dark:text-white lg:dark:hover:text-lime-400 dark:hover:bg-pink-500 dark:hover:text-pink-400 lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0 dark:text-white lg:dark:hover:text-lime-400 dark:hover:bg-pink-500 dark:hover:text-pink-400 lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-10 items-center">

          <SearchInput position="header" />

          <button className='sm:hidden' onClick={() => { setSearchbarClassName((prevDisplay) => !prevDisplay); }}>
            <Image
              src="/search-icon.png" // Path to your image inside the public folder
              alt="LOGO"
              width={40}
              height={40}
            />
          </button>

          <button>
            <Image
              src="/shopping-cart-icon.png" // Path to your image inside the public folder
              alt="LOGO"
              width={40}
              height={40}
            />
          </button>

        </div>
      </div>

      <div className={searchbarForMobileClassNames}>
        <SearchInput />
      </div>

      <div id='mobileLinks' className={mobileLinksClassName}>
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-t border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
          <li className='my-4'>
            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
          </li>
        </ul>
      </div>



    </header>
  )
}

export default Header