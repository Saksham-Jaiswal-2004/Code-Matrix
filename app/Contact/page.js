import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen w-full h-fit flex justify-center items-center">
      <div className='h-screen w-full bg1 flex justify-center items-center'>
        <div className='h-full w-1/2 flex flex-col justify-center items-center gap-5 px-6'>
          <h1 className='w-[75%] title text-6xl'>Get in Touch with Qatar&apos;s Trusted Contracting Partner</h1>
          <p className='w-[75%] subText'>Have a project in mind or a question for our team? Reach out and we’ll respond shortly.</p>
          <div className="w-[75%] flex gap-4">
            <Link href="/Services">
              <button className="button px-6 py-3">Send an Inquiry</button>
            </Link>
          </div>
        </div>

        <div className='h-full w-1/2'></div>
      </div>
    </div>
  )
}

export default page
