import React from 'react'
import Link from 'next/link'
import CTA from '../components/CTA'
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen w-full h-fit flex flex-col justify-center items-center">
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

      <div className='min-h-screen h-fit w-full flex justify-center items-start'>
        <div className='min-h-screen h-fit w-1/2 py-14 px-8 flex flex-col justify-start items-start'>
          <h2 className='title text-3xl'>Let&apos;s Build Something Great Together</h2>
          <p className='mutedText'>Get in touch for project inquiries, partnerships, or support.</p>

          <div className='h-full w-full flex flex-col justify-center items-start mt-8 gap-2'>
            <div>
              <p className='mutedText'><span className='title3'>Phone: </span>+974-31327789</p>
            </div>

            <div>
              <p className='mutedText'><span className='title3'>Email: </span>codematrix2024@hotmail.com</p>
            </div>

            <div className='flex gap-2 justify-center items-center'>
              <p className='title3'>Address:</p>
              <p className='mutedText'>Building 18, Street 620, Zone 51, First Floor, Doha - State of Qatar</p>
            </div>

            <div className='flex flex-col gap-1'>
              <h3 className='title3'>Business Hours:</h3>
              <p className='mutedText'><span className='font-semibold'>Sunday - Thursday: </span>9:00 AM - 6:00 PM</p>
              <p className='mutedText'><span className='font-semibold'>Friday - Saturday: </span>Closed</p>
            </div>

            <div className='w-full flex justify-start px-1 items-center gap-5 text-4xl mt-3 mutedText'>
              <FaLinkedin className='hover:text-[#223d2a] transition-all duration-200 ease-in-out'/>
              <RiInstagramFill className='hover:text-[#223d2a] transition-all duration-200 ease-in-out'/>
              <FaFacebook className='hover:text-[#223d2a] transition-all duration-200 ease-in-out'/>
              <FaYoutube className='hover:text-[#223d2a] transition-all duration-200 ease-in-out'/>
            </div>

            <div className='w-full h-[400px] overflow-hidden flex justify-center items-center rounded-2xl mt-8'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.387095629525!2d51.40790247484491!3d25.42531892242412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45e0dfeffd2a65%3A0x54ca2b0ab02441ec!2sStreet%20620%2C%20Umm%20Salal%20Muhammed%2C%20Qatar!5e0!3m2!1sen!2sin!4v1749121457627!5m2!1sen!2sin" width="600" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-2xl'></iframe>
            </div>
          </div>
        </div>

        <div className='h-full w-1/2 py-14 px-8 flex flex-col justify-center items-center'>
          <form action="post" className='bg1 w-[35vw] h-fit py-10 rounded-2xl flex flex-col gap-8 justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center gap-10'>
              <input type="text" name="name" id="name" placeholder='Enter Your Name' className='w-[80%] border-b px-3 py-2 rounded-md' required />
              <input type="number" name="phone" id="phone" placeholder='Enter Your Number' className='w-[80%] border-b px-3 py-2 rounded-md' required />
              <input type="email" name="email" id="email" placeholder='Enter Your Email' className='w-[80%] border-b px-3 py-2 rounded-md' required />
              <select name="categories" id="categories" className='bg-[#17281c] w-[80%] border-none rounded-md px-3 py-2 flex justify-center items-center' required>
                <option value="">Subject</option>
                <option value="general">General Enquiry</option>
                <option value="careers">Careers</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
              </select>
              <textarea name="message" id="message" placeholder='Enter Your Message' className='w-[80%] border-b px-3 py-2 rounded-md' required></textarea>
            </div>

            <div className='w-[80%] flex justify-end gap-4'>
              <button className='button px-4 py-2'>Submit</button>
              <button className='button px-4 py-2'>Reset</button>
            </div>
          </form>
        </div>
      </div>

      <CTA />
    </div>
  )
}

export default page
