import React from 'react'
import Link from 'next/link'
import WhyWork from '../components/WhyWork'
import CTA from '../components/CTA'
import Openings from '../components/Openings'
import InternPartner from '../components/InternPartner'

const page = () => {
  return (
    <div className="min-h-screen w-full h-fit flex flex-col justify-center items-center">
      <div className='h-screen w-full bg1 flex justify-center items-center'>
        <div className='h-full w-1/2 flex flex-col justify-center items-center gap-5 px-6'>
          <h1 className='w-[75%] title text-7xl'>Build Your Career with CMTC</h1>
          <p className='w-[75%] subText'>Join one of Qatar’s fastest-growing trading and contracting firms and shape the nation’s future with us. Discover rewarding roles, real-world experience, and long-term growth opportunities.</p>
          <div className="w-[75%] flex gap-4">
            <Link href="/Services">
              <button className="button px-6 py-3">View Open Positions</button>
            </Link>
            <Link href="/">
              <button className="button px-6 py-3">Submit Your Resume</button>
            </Link>
          </div>
        </div>

        <div className='h-full w-1/2'></div>
      </div>

      <WhyWork/>
      <Openings/>
      <InternPartner/>
      <CTA/>
    </div>
  )
}

export default page
