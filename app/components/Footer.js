import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-fit flex flex-col justify-between items-center bg1'>
      <div className='flex justify-between w-[100vw] items-center my-8 px-10'>
        <div className='w-[20%] flex justify-center items-center'>
            <img src="/images/Logo.png" alt="" />
        </div>

        <div className='flex w-[70%] justify-around'>
            <ul className='flex flex-col gap-3 subText'>
                <li className='font-bold hover:text-white cursor-pointer transition-all duration-200 ease-in-out'><Link href="/">Quick Links</Link></li>
                <li className='navLinks'><Link href="/">Home</Link></li>
                <li className='navLinks'><Link href="/">About</Link></li>
                <li className='navLinks'><Link href="/">Services</Link></li>
                <li className='navLinks'><Link href="/">Careers</Link></li>
            </ul>
            <ul className='flex flex-col gap-3 subText'>
                <li className='font-bold hover:text-white cursor-pointer transition-all duration-200 ease-in-out'><Link href="/">Our Services</Link></li>
                <li className='navLinks'><Link href="/">Trading</Link></li>
                <li className='navLinks'><Link href="/">Contracting</Link></li>
                <li className='navLinks'><Link href="/">Market Analysis</Link></li>
                <li className='navLinks'><Link href="/">Procurement</Link></li>
            </ul>
            <ul className='flex flex-col gap-3 subText'>
                <li className='font-bold hover:text-white cursor-pointer transition-all duration-200 ease-in-out'><Link href="/">Follow Us</Link></li>
                <li className='navLinks'><Link href="/">Facebook</Link></li>
                <li className='navLinks'><Link href="/">Twitter</Link></li>
                <li className='navLinks'><Link href="/">Linkedin</Link></li>
                <li className='navLinks'><Link href="/">Instagram</Link></li>
            </ul>
        </div>
      </div>

      <div className='my-1'>
        <p className='subText'>&copy; {new Date().getFullYear()} Code Matrix Inc. | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
