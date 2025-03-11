import React from 'react'

export default function ContactMe() {
  return (
<div className="bg-zinc-950 justify-items-end w-full py-15 pr-30">
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
