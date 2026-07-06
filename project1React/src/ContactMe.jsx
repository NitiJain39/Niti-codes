import React from 'react'
import { Link } from 'react-router'
import insta from './assets/Images/insta.jpg'
import github from './assets/Images/github.jpg'
import linkedin from './assets/Images/linkedin.png'
import {FaPhoneVolume , FaSquareEnvelope} from "react-icons/fa6";
export default function ContactMe() {
  return (
<div id='contact' className="bg-zinc-950 w-full py-15 pr-16 flex justify-between">
  <div className='ml-30 my-10 px-12 py-8 w-md h-fit rounded-2xl border border-amber-400 text-xl text-amber-100 p-4 shadow-md shadow-gray-400'>
    <h1 className='text-3xl font-bold'><u>My Social Links</u></h1><br/><br/>
    <h1 className='flex gap-5'>
    <Link to="https://www.instagram.com/nitijain379?utm_source=qr&igsh=YThrem1vOTV2bDAw"><img src={insta} alt="Instagram" className=" rounded-2xl w-14 h-14"/></Link>
    <Link to="https://github.com/NitiJain39"><img src={github} alt="GitHub" className="w-14 h-15 rounded-2xl"/></Link>
    <Link to="https://www.linkedin.com/in/niti-jain-6aa337356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><img src={linkedin} alt="Linkedin" className="rounded-2xl w-15 h-15"/></Link>
    </h1> <br />
    <div className='text-2xl m-3 p-3 text-neutral-50' >
      <Link to="tel:9479765756"><FaPhoneVolume/><h1 className='ml-12 -mt-8'>9479765756</h1></Link><br/>
      <Link to="mailto:nitijain379@gmail.com"><FaSquareEnvelope/><h1 className='ml-12 -mt-8'>nitijain379@gmail.com</h1></Link>
    </div>
  </div>
  <div className="bg-gray-500 p-2 text-white w-lg h-[510px] rounded-2xl shadow-2xl ">
    <p className="text-center text-2xl mt-2">Contact Me</p>
    <form className="mt-2 h-80 pl-16">
      <div className="mb-2">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-[360px] py-1 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-2">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-[360px] py-1 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-2">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="contact">
          Contact Number
        </label>
        <input
          className="shadow appearance-none border rounded w-[360px] py-1 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
          id="contact"
          type="tel"
          placeholder="Your Contact Number"
        />
      </div>
      <div className="mb-2">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="shadow appearance-none border rounded w-[360px] py-1 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="Your Address"
        />
      </div>
      <div className="mb-3">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-[360px] py-1 px-3 text-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows="4"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div className="flex items-center justify-center -ml-6">
        <button
          className="bg-blue-500 hover:bg-indigo-700  text-white font-bold py-1 px-6 border-[1.5px] border-blue-700 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  
  </div>
</div>
  )
}
