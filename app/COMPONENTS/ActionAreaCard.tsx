'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ActionAreaCard(props: any) {
  return (
    <div className="relative shadow-lg w-fit">
      <div className='rounded-lg overflow-hidden'>
        <div className="bg-white max-w-sm rounded-lg shadow-lg">
          <Link href="/">
            <div className='hover:bg-slate-400/[.4] rounded-lg'>
              <div className="relative">
                <img className="" src="/card-images/3.gif" alt="" />



              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Beautiful Partyware Sarees For New Year</h3>
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="absolute sm:block hidden px-2 py-1" style={{ top: "-1.1rem", right: "-1.1rem"}}>
          <Image
            src={"/new-arrival-lable.png"}
            alt='new arrival'
            width={70}
            height={70}
          />
        </div> */}
      </div>



    </div >
  );
}
