import React from 'react'
// import { Link, Outlet } from 'react-router'
import ProfilePic from './assets/Images/nitijain.jpg'
export default function Home() {
  return (
  <>
      <section className="m-5 -mb-5 pb-16 flex gap-x-56">
      <div>
        <a href="#"><img src={ProfilePic} alt="Niti Jain" className="ml-16 w-96 h-96 shadow-xl shadow-zinc-700 hover:shadow-zinc-600 rounded-full mt-3 mb-5 hover:border-2 hover:border-b-neutral-800"/></a>
      </div>
      <div className="text-[rgba(246,243,247,0.836)]">
              <h2 className="mb-5 text-[27pt] mt-8">Hello World</h2> 
              <h1 className="text-[36pt] inline bg-gradient-to-r from-[#a2a2ef] via-purple-500 to-[#e36565] bg-clip-text text-transparent">I'm Niti Jain</h1>
              <h5 className="text-[20pt] mb-12">Aspiring Software Developer</h5>
              <br />
              <br />
              <div className="text-2xl font-bold hover:underline p-2 bg-orange-200 w-72 rounded-lg flex justify-center items-center text-center text-black ml-6 hover:bg-gray-300 hover:border-solid hover:border-gray-700">
              <a href="#">Resume</a></div>
      </div>
    </section>  
    
</>
  )
}
