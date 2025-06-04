import React from 'react'
import Link from 'next/link'
import Overview from '../components/Overview'
import Values from '../components/Values'
import Team from '../components/Team'
import CTA from '../components/CTA'
import Certification from '../components/Certification'

const page = () => {
  return (
    <div className="min-h-screen w-full h-fit flex flex-col justify-center items-center">
      <div className='h-screen w-full bg1 flex justify-center items-center'>
        <div className='h-full w-1/2 flex flex-col justify-center items-center gap-5 px-6'>
          <h1 className='w-[75%] title text-7xl'>Qatar&apos;s Partner in Trading & Contracting</h1>
          <p className='w-[75%] subText'>At Code Matrix Trading and Contracting, we empower growth by delivering premium construction, trading, and industrial solutions.</p>
          <div className="w-[75%] flex gap-4">
            <Link href="/Services">
              <button className="button px-6 py-3">Explore Our Services</button>
            </Link>
            <Link href="/">
              <button className="button px-6 py-3">Meet the Team</button>
            </Link>
          </div>
        </div>

        <div className='h-full w-1/2'></div>
      </div>

      <Overview/>
      <Values/>
      <Team/>
      <Certification/>
      <CTA/>
    </div>
  )
}

export default page
