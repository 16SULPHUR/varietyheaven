import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { height } from '@mui/system'

const ProductCard = () => {
    return (
        <div className='w-72 rounded-lg overflow-hidden shadow-xl bg-gray-100 ring-1 ring-gray-200'>
            <Link href={"/"} className=''>
                <div className='w-full flex justify-center mx-auto py-1 rounded-b-lg'>
                    <Image
                        src={"/header-catagories-images/1.png"}
                        width={80}
                        height={80}
                        alt='product Image'
                    />
                </div>
                <div className='bg-white p-3'>
                    <div className="colourDots mb-2">
                        <div className="flex justify-center gap-3">
                            <span className='w-4 h-4 bg-black rounded-full ring ring-offset-2 ring-black ring-1 p-2'></span>
                            <span className='w-4 h-4 bg-white rounded-full ring ring-offset-2 ring-black ring-1 p-2'></span>
                            <span className='w-4 h-4 bg-red-500 rounded-full ring ring-offset-2 ring-black ring-1 p-2'></span>
                            <span className='w-4 h-4 bg-yellow-500 rounded-full ring ring-offset-2 ring-black ring-1 p-2'></span>
                            <span className='w-4 h-4 bg-lime-500 rounded-full ring ring-offset-2 ring-black ring-1 p-2'></span>
                        </div>
                    </div>
                    <div className='px-3 py-1 rounded-b-md flex justify-center'>
                        <span className='text-md font-normal text-ellipsis line-clamp-2'>Zyna partyware saree in 4 beautiful colours blue pink red black</span>
                    </div>
                    <div className="ratings flex justify-center my-1">
                        <Image
                        src={"/rating-icon.png"}
                        width={80}
                        height={80}
                        alt='ratings'
                        />
                    </div>
                    <div className="productCardPrice">
                        <div className='flex items-baseline justify-center'>
                            <sup className='text-md me-0.5'>₹</sup>
                            <span className='text-2xl font-semibold me-2'>1,499</span>
                            <span className='text-sm me-0.5'>M.R.P.</span>
                            <span className='text-sm me-0.5'><s>₹1,999</s></span>
                            <span className='text-sm'>(25% off)</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard