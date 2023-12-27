'use client';
import * as React from 'react';
import Link from 'next/link';

export default function ActionAreaCard(props: any) {
  return (
    <div>


      <div className="bg-white max-w-sm rounded-lg shadow-lg overflow-hidden">
        <Link href="/">
          <div className='hover:bg-slate-400/[.4] rounded-b-lg'>
            <img className="" src="/card-images/3.gif" alt="" />
            <div className="p-5">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Beautiful Partyware Sarees For New Year</h3>
            </div>
          </div>
        </Link>

        {/* <div className="p-3">
          <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>

          
        </div> */}
      </div>

    </div >
  );
}
