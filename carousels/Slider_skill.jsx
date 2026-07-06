import React from 'react'
import CircularProgress from './CircularProgress.jsx';

export default function Slider_skill() {
// Example data array
const data = [
        { id: 1, title: "Frontend Develoment", content: [
            { skill: "React", percentage: "80" },
            { skill: "JavaScript", percentage: "70" },
            { skill: "HTML", percentage: "90" }
        ] },
        { id: 2, title: "Frontend Develoment", content: [
            { skill: "CSS", percentage: "80" },
            { skill: "Tailwind CSS", percentage: "70" },

        ] },
        { id: 3, title: "Backend Develoment", content: [
            { skill: "Node.js", percentage: "75" },
            { skill: "Express.js", percentage: "70" },
            { skill: "MongoDB", percentage: "65" },
            { skill: "MySQL", percentage: "80" }
        ] },
        { id: 4, title: "Programming Languages", content: [
            { skill: "C++", percentage: "80" },
            { skill: "Python", percentage: "80" }
        ] },
        { id: 5, title: "Tools", content: [
            { skill: "Git", percentage: "80" },
            { skill: "Windows 10/11", percentage: "80" }
        ] }
]
return (
    <div className='justify-items-center'>
        {
        data.map((items, index) => (
       <div className='items-center justify-center my-10 px-12 py-8 w-8/12 h-fit rounded-2xl border-1 border-amber-50 text-xl text-neutral-200 p-2' key={index}>
        <label>{items.title}</label>
        <div className='flex my-10 justify-items-center justify-around -mx-10'>
            {items.content.map((item) => (
                <div className='justify-items-center bg-[#567691] hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-auto h-auto p-6 rounded-3xl'>
                    <CircularProgress percentText={item.percentage} />
                    <h1 className='text-center pt-6'>{item.skill}</h1>
                </div>
            ))}
        </div>
        </div> ))}
    </div>
)
}
