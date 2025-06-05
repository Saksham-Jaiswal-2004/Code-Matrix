"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        window.onscroll = () => {
            if (window.scrollY > 10) {
                navbar?.classList.add("scrolled");
            } else {
                navbar?.classList.remove("scrolled");
            }
        };
    }, []);
    
    return (
        <div className='w-full fixed top-0 text-white flex justify-between items-center px-16 py-2 z-[999]' id='navbar'>
            <div className="logo">
                <Link href="/">
                    <img src="/images/CodeMatrixLogoWhite.png" alt="" className='w-[15%]'/>
                </Link>
            </div>

            <ul className='flex gap-8 justify-center items-center text-base'>
                <li className='font-extralight navLinks'><Link href="/">Home</Link></li>
                <li className='font-extralight navLinks'><Link href="/About">About</Link></li>
                <li className='font-extralight navLinks'><Link href="/Services">Services</Link></li>
                <li className='font-extralight navLinks'><Link href="/Projects">Projects</Link></li>
                <li className='font-extralight navLinks'><Link href="/Careers">Careers</Link></li>
                <li className='font-extralight navLinks'>
                    <button className='button px-[0.8em] py-[0.3em]'>
                        <Link href="/Contact">
                            Contact
                        </Link>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
