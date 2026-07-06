import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaSchoolFlag, FaSchool} from "react-icons/fa6";
import Carousel from './Carousel';

export default function AboutMe() {
  
  return (
  <div className='flex flex-col items-center justify-center gap-5'>
    <div className='my-10 px-12 py-8 w-2xl h-fit rounded-2xl border border-amber-400 text-xl text-amber-100 p-4 shadow-md shadow-gray-400'>
      <p className='text-justify justify-center' >I am Niti Jain , presently doing Computer science Engineering from Shree Dadaji Institute of Technology and Science.
      <br />I aim to become Full stack Developer regarding that I urge to acquire skills as mentioned below ...
      <br />Seeking opportunities to leverage my skills and contribute with my utmost dedication ;
      <br />Keen to learn, explore for growth and goal attainment.
       </p>
    </div>
    <div className='items-center justify-center my-10 py-8 w-[84%] h-fit rounded-2xl border-[1.5px] border-indigo-500 text-xl text-neutral-200 shadow-md shadow-sky-300'>
    <h1 className="text-center text-3xl text-indigo-300"><u> Educational Qualifications : </u></h1><br/>
    <div className="-mx-4">
    <VerticalTimeline lineColor='#f5e7a4ef' className='h-144'>
    <VerticalTimelineElement className="vertical-timeline-element--education "
    date="2022-2026"
    iconStyle={{ background: '#452864', color: '#fff' }}
    icon={<FaGraduationCap/>}
    >
    <h3 className="vertical-timeline-element-title text-cyan-800">Bachelor of Technology in Computer Science Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle text-cyan-800">- Shree Dadaji Institute of Technology and Science Khandwa</h4>
    <p className="text-cyan-800"> - CGPA : 7.67</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement className="vertical-timeline-element--education -top-22"
    date="2021-2022"
    iconStyle={{ background: '#4b4092fc', color: '#fff' }}
    icon={<FaSchoolFlag/>}
    >
    <h3 className="vertical-timeline-element-title text-cyan-800">Higher Secondary Certificate ( 12<sup>th</sup> )</h3>
    <h4 className="vertical-timeline-element-subtitle text-cyan-800">- Kendriya Vidyalaya Khandwa</h4>
    <p className="text-cyan-800"> - SCORE : 80.2 %</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement className="vertical-timeline-element--education -top-42 "
    date="2019-2020"
    iconStyle={{ background: '#3f5cd1fd', color: '#fff' }}
    icon={<FaSchool/>}
    >
    <h3 className="vertical-timeline-element-title text-cyan-800">Senior Secondary Certificate ( 10<sup>th</sup> )</h3>
    <h4 className="vertical-timeline-element-subtitle text-cyan-800">- Kendriya Vidyalaya Khandwa</h4>
    <p className="text-cyan-800"> - SCORE : 89.4 %</p>
    </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </div> 
    <div className="items-center justify-center my-10 px-12 py-8 w-[85%] h-fit rounded-2xl border-[1.5px] border-indigo-500 text-xl text-neutral-200 p-4 shadow-md shadow-sky-300">
      <h1 className='text-center text-3xl text-indigo-300'> <u> Technical Skills : </u></h1><br/>
        
        <Carousel />








































      {/* <div className='grid grid-cols-4 my-10 justify-items-center'>
        <div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'>
          <CircularProgress percentText="80"/>
        <h1 className='text-center pt-3'>React</h1>
        </div>
        <div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'>
          
          
          <CircularProgress percentText="60"/>
        <h1 className='text-center pt-3'>Express JS</h1>
        </div>
        <div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="60"/>
        <h1 className='text-center pt-3'>Node JS</h1>
        </div>
        <div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="60"/>
        <h1 className='text-center pt-3'>Mongo DB</h1>
        </div>
        </div>
        <div className='grid grid-cols-5 gap-15 mt-20 mb-10'>
        <div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="95"/>
        <h1 className='text-center pt-3'>HTML</h1>
        </div><div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-42 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="95"/>
        <h1 className='text-[16px] pt-3 px-0 '>CSS (Tailwind css)</h1>
        </div><div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="80"/>
        <h1 className='text-center pt-3'>Python</h1>
        </div><div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="75"/>
        <h1 className='text-center pt-3'>C++</h1>
        </div><div className=' bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-40 h-48 p-5 items-center rounded-3xl'><CircularProgress percentText="80"/>
        <h1 className='text-center pt-3'>MySQL</h1>
        </div>
      </div>*/}
</div>
</div>
)}
