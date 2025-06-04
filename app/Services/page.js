import React from 'react'
import Link from 'next/link'
import CTA from '../components/CTA'
import CertStrip from '../components/CertStrip'
import Service from '../components/Service'

const page = () => {
  return (
    <div className="min-h-screen w-full h-fit flex flex-col justify-center items-center">
      <div className='h-screen w-full bg1 flex justify-center items-center'>
        <div className='h-full w-1/2 flex flex-col justify-center items-center gap-5 px-6'>
          <h1 className='w-[90%] title text-6xl'>Comprehensive Trading & Contracting Services in Qatar</h1>
          <p className='w-[90%] subText'>From high-end construction to advanced material supply and turnkey contracting, CMTC delivers trusted solutions across industries with quality, efficiency, and reliability.</p>
          <div className="w-[90%] flex gap-4">
            <Link href="/Services">
              <button className="button px-6 py-3">Explore Our Work</button>
            </Link>
            <Link href="/">
              <button className="button px-6 py-3">Contact Us for a Quote</button>
            </Link>
          </div>
        </div>

        <div className='h-full w-1/2'></div>
      </div>

      <Service/>
      <CertStrip/>
      <CTA/>
    </div>
  )
}

export default page
