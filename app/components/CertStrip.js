import React from 'react'

const CertStrip = () => {
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center gap-6 py-4'>
      <h1 className='title3'>Certified By</h1>

      <div className='w-full h-fit flex justify-center items-center gap-[40px]'>
        <img src="/images/CertLogo1.JPG" alt="" className='w-[100px] h-auto saturate-0 opacity-70'/>
        <img src="/images/CertLogo2.JPG" alt="" className='w-[100px] h-auto saturate-0 opacity-70'/>
        <img src="/images/CertLogo3.png" alt="" className='w-[100px] h-auto saturate-0 opacity-70'/>
      </div>
    </div>
  )
}

export default CertStrip
