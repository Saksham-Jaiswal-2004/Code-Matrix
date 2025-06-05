import React from 'react'
import Link from 'next/link'
import CTA from '../components/CTA'
import Testimonials from '../components/Testimonials'
import ProjectDisplay from '../components/ProjectDisplay'

const page = () => {
  return (
    <div className="min-h-screen w-full h-fit flex flex-col justify-center items-center">
      <div className='h-screen w-full bg1 flex justify-center items-center'>
        <div className='h-full w-1/2 flex flex-col justify-center items-center gap-5 px-6'>
          <h1 className='w-[75%] title text-6xl'>Projects That Shape Tomorrow</h1>
          <p className='w-[75%] subText'>At CMTC, we take pride in delivering high-quality construction, trading, and installation projects across the nation. Our diverse portfolio reflects our commitment to precision, innovation, and excellence in every build.</p>
          <div className="w-[75%] flex gap-4">
            <Link href="/Services">
              <button className="button px-6 py-3">Explore Our Work</button>
            </Link>
            <Link href="/">
              <button className="button px-6 py-3">Partner with Us</button>
            </Link>
          </div>
        </div>

        <div className='h-full w-1/2'></div>
      </div>

      <ProjectDisplay/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default page
