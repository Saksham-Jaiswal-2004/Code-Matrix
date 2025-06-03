import React from 'react'

const CTA = () => {
  return (
    <div className='min-h-[45vh] w-full h-fit flex flex-col gap-2 justify-center items-center bg1'>
      <h1 className='title4'>Connect with Us</h1>
      <p className='subText w-[60%] text-center'>Stay up-to-date with the latest news and insights from Code Matrix Trading & Contracting. Follow us on social media and subscribe to our newsletter to receive updates on our services, industry trends, and more</p>

      <div className='w-[60%] flex gap-2 justify-center items-center mt-6'>
        <input type="email" name="email" id="email" placeholder='Enter your Email' className='bg-white rounded-md px-4 py-[0.38rem] w-[45%]'/>
        <button className='button px-3 py-[0.38rem]'>Subscribe</button>
      </div>
    </div>
  )
}

export default CTA
