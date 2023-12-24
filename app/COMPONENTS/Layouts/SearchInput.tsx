import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SearchInput = (props:any) => {
    const searchbarClassNames = props.position == "header"?"sm:flex hidden":"sm:flex mt-6"
    return (
        <div>

            <form>
                <div className={searchbarClassNames}>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg me-52 text-gray-900 bg-gray-50 rounded-lg" placeholder="Search Mockups, Logos, Design Templates..." required />

                        <button id="search-btn" type="submit" className="flex items-center absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg bg-lime-500 hover:bg-lime-600">
                            <img width="30" height="48" src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1" />
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

            {/* <button className='sm:hidden'>
                <Image
                    src="/search-icon.png" // Path to your image inside the public folder
                    alt="LOGO"
                    width={40}
                    height={40}
                />
            </button> */}
        </div>
    )
}

export default SearchInput