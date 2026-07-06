import React, { useState, useEffect } from 'react';
import CircularProgress from './CircularProgress.jsx';
import {FaCircleChevronRight } from "react-icons/fa6";
const Carousel = () => {
    const data = [
        {id: 1, title: "Frontend Develoment", content:[ 
            { skill: "React", percentage: "80" },
            { skill: "JavaScript", percentage: "75" },
            { skill: "HTML", percentage: "90" }]
        },
        {id: 2, title: "Frontend Develoment", content: [
            { skill: "CSS", percentage: "80" },
            { skill: "Tailwind CSS", percentage: "80" }]
        },
        {id: 3, title: "Backend Develoment", content: [
            { skill: "Node.js", percentage: "60" },
            { skill: "Express.js", percentage: "75" },
            { skill: "MongoDB", percentage: "65" },
            { skill: "MySQL", percentage: "80" }]
        },
        { id: 4, title: "Programming Languages", content: [
            { skill: "C++", percentage: "70" },
            { skill: "Python", percentage: "80" }]
        },
        { id: 5, title:"Tools", content: [
            { skill: "Git", percentage: "70" },
            { skill: "Windows 10/11", percentage: "80" } ]
        }]

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };
    const autoSlide = true; // Set to true to enable auto sliding
    const autoSlideInterval = 6000; // Interval in milliseconds for auto sliding

    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(nextSlide, autoSlideInterval);
            return () => clearInterval(slideInterval);
        }
    }, [currentIndex, autoSlide, autoSlideInterval]);

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden relative h-96 justify-items-center">
                {data.map((items, index) => (
                    <div
                        key={index}
                        className={`absolute flex items-center justify-center inset-0 transition-all ease-out duration-790 transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                        
                    >
                        <div className='my-10 rounded-2xl justify-items-center text-xl text-neutral-200 p-4'>
                            <label>{items.title}</label>
                            <div className='flex gap-5 my-10 justify-items-center'>
                                {items.content.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className='justify-items-center bg-slate-900 hover:scale-105 hover:duration-400 hover:shadow-lg shadow-blue-900 border-2 border-blue-950 w-auto h-auto p-6 rounded-3xl'
                                    >
                                        <CircularProgress percentText={item.percentage} />
                                        <h1 className='text-center pt-6'>{item.skill}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-0 cursor-pointer  transform -translate-y-1/2 p-2"
                onClick={prevSlide}
            >
                <FaCircleChevronRight className='opacity-48 h-10 w-10 rotate-180 hover:scale-115  '/>
                
                {/* Previous */}
            </button>
            <button
                className="absolute top-1/2 right-0 cursor-pointer transform -translate-y-1/2 p-2"
                onClick={nextSlide}
            >
                <FaCircleChevronRight className='opacity-48 h-10 w-10 hover:scale-115  '/>
            </button>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center cursor-pointer ">
                {data.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 mr-0.5 rounded-full transition-all mx-1  ${index === currentIndex ? 'bg-gray-600 scale-150' : 'bg-gray-200'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;