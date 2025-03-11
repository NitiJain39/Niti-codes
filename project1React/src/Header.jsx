import React from 'react'
import { Link,Outlet } from 'react-router'
export default function Header() {
  return (
    <section className="bg-cover bg-center bg-[url('./assets/Images/bgimg.jpg')]  bg-blend-overlay h-[100%] w-full bg-[#313133]">
          <ul className='ml-14 p-5 flex items-center gap-20'>
            <li className="w-18 text-center no-underline mr-1.5 p-1.5 text-neutral-100 transition-all duration-0 border-b-2 border-[rgb(178,167,141)] hover:border-1 hover:border-dashed hover:border-amber-100 "><Link to="/">Home</Link></li>
            <li className="w-18 text-center no-underline mr-1.5 p-1.5 text-neutral-100 transition-all duration-0 hover:border-1 hover:border-dashed hover:border-amber-100"><Link  to="/AboutMe">About</Link></li>
            <li className="w-18 text-center no-underline mr-1.5 p-1.5 text-neutral-100 transition-all duration-0 hover:border-1 hover:border-dashed hover:border-amber-100"><Link to="/Tasks">Tasks</Link></li>
            <li className="w-18 text-center no-underline mr-1.5 p-1.5 text-neutral-100 transition-all duration-0 hover:border-1 hover:border-dashed hover:border-amber-100"><Link to="/Projects">Projects</Link></li>
            <li className="w-18 text-center no-underline mr-1.5 p-1.5 text-neutral-100 transition-all duration-0 hover:border-1 hover:border-dashed hover:border-amber-100"><Link to="#contact">Contact</Link></li>
          </ul>
    <Outlet/>
    </section>
  )
}

