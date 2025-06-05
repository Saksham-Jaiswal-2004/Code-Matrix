import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-fit flex flex-col justify-between items-center bg1'>
      <div className='flex justify-between w-[100vw] items-center my-8 px-10'>
        <div className='w-[20%] flex flex-col gap-6 justify-center items-center'>
          <img src="/images/CodeMatrixLogoWhite.png" alt="" />

          <div className='w-full flex px-3 justify-center items-center gap-8 text-4xl mt-3 mutedText'>
            <FaLinkedin className='hover:text-white transition-all duration-200 ease-in-out' />
            <RiInstagramFill className='hover:text-white transition-all duration-200 ease-in-out' />
            <FaFacebook className='hover:text-white transition-all duration-200 ease-in-out' />
            <FaYoutube className='hover:text-white transition-all duration-200 ease-in-out' />
          </div>
        </div>

        <div className='flex w-[75%] justify-around'>
          <ul className='flex flex-col gap-3 subText'>
            <li className='font-bold text-white cursor-pointer'><Link href="/">Quick Links</Link></li>
            <li className='navLinks'><Link href="/">Home</Link></li>
            <li className='navLinks'><Link href="/">About Us</Link></li>
            <li className='navLinks'><Link href="/">Careers</Link></li>
            <li className='navLinks'><Link href="/">Internships & Partnerships</Link></li>
            <li className='navLinks'><Link href="/">Contact Us</Link></li>
          </ul>
          <ul className='flex flex-col gap-3 subText'>
            <li className='font-bold text-white cursor-pointer'><Link href="/">Services</Link></li>
            <li className='navLinks'><Link href="/">Construction Services</Link></li>
            <li className='navLinks'><Link href="/">General Contracting</Link></li>
            <li className='navLinks'><Link href="/">Trading & Supply</Link></li>
            <li className='navLinks'><Link href="/">Fibre Optic Components</Link></li>
            <li className='navLinks'><Link href="/">Mechanical Gate Barriers</Link></li>
          </ul>
          <ul className='flex flex-col gap-3 subText'>
            <li className='font-bold text-white cursor-pointer'><Link href="/">Projects</Link></li>
            <li className='navLinks'><Link href="/">All Projects</Link></li>
            <li className='navLinks'><Link href="/">Commercial Buildings</Link></li>
            <li className='navLinks'><Link href="/">Hotels & Hospitality</Link></li>
            <li className='navLinks'><Link href="/">Palaces & Villas</Link></li>
            <li className='navLinks'><Link href="/">Clinics & Healthcare</Link></li>
          </ul>
          <ul className='flex flex-col gap-3 subText'>
            <li className='font-bold text-white cursor-pointer'><Link href="/">Collaborations</Link></li>
            <li className='navLinks'><Link href="/">Joint Ventures</Link></li>
            <li className='navLinks'><Link href="/">Become a Partner</Link></li>
            <li className='navLinks'><Link href="/">Investor Proposals</Link></li>
          </ul>
        </div>
      </div>

      <div className='my-1'>
        <p className='subText'>&copy; {new Date().getFullYear()} Code Matrix Inc. | All Rights Reserved | <Link href="/" className='text-[#bcbcbc] hover:text-white transition-all duration-200 ease-in-out'>Privacy Policy</Link> | <Link href="/" className='text-[#bcbcbc] hover:text-white transition-all duration-200 ease-in-out'>Terms & Conditions</Link></p>
      </div>
    </div>
  )
}

export default Footer
