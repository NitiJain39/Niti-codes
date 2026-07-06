import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import social_media_web from './assets/Images/social_media_web.png';
// import cuisine_catalyst from './assets/Images/cuisine_catalyst.png';
// import task_manager from './assets/Images/task_manager.png';
import Question_Paper from './assets/Images/Question_Paper.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
// import required modules
import { Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';
export default function Vertical_Slider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                style={{
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-scale": "1.3",
                    "--swiper-pagination-bullet-inactive-opacity": "0.8",
                    "--swiper-pagination-bullet-inactive-color": "#567691",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-vertical-gap": "8px",
                    "--swiper-pagination-right": "20px"
                }}
                direction={'vertical'}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
                mousewheel={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop={Infinity}
                scrollbar={{ draggable: true, hide: true }} // <-- Hide scrollbar
                className="mySwiper font-bold text-xl flex items-center gap-24 justify-center -mb-5 h-[75vh] w-[60vw] cursor-pointer shadow-2xl rounded-2xl shadow-gray-700 border-1 border-b-indigo-300 border-b-2 hover:outline-[1.9px] hover:outline-blue-200 "
            >
                <SwiperSlide ><div className="bg-slate-950/75 p-8 h-[75vh]">
                    <h1 className='mb-8 text-yellow-300'>Task Manager</h1>
                    <div className="flex flex-col items-center justify-center">
                        {/* <img src={task_manager} alt="" className='w-[52%] h-[52vh]/> */}
                        <p className='w-[45%] h-[45vh] text-lg font-light font-serif text-justify ml-6 mr-3 -mt-12'>
                            This is a Task Manager App that allows users to create, manage, and track their tasks efficiently. It features user authentication, task categorization, and a responsive design. Users can add, edit, and delete tasks, as well as mark them as completed.
                        </p>
                    </div>
                    </div>
                    <Link to="https://mern-todo-list01.netlify.app"> </Link>
                </SwiperSlide>
                <SwiperSlide><div className=" bg-slate-950/75 p-8 h-[75vh]">
                    <h1 className=' text-yellow-300 mb-8'> Cuisine Catalyst</h1>
                    <div className="flex flex-col items-center justify-center">
                        {/* <img src={cuisine_catalyst} alt="" className='w-[52%] h-[52vh]/> */}
                        <p className='w-[45%] h-[45vh] text-lg font-light font-serif text-justify ml-6 mr-3 -mt-12'>
                            Cuisine Catalyst is a web application that allows users to explore and share recipes from around the world. It features a user-friendly interface, recipe search functionality, and the ability to save favorite recipes. Users can also contribute their own recipes to the platform.
                        </p>
                    </div>
                    </div>
                    <Link to="#"> </Link>
                </SwiperSlide>
                <SwiperSlide><div className=" bg-slate-950/75 p-8 h-[75vh]">
                    <h1 className=' text-yellow-300 mb-8'>Social Media Web</h1>
                    <div className="flex items-center justify-between">
                        <img src={social_media_web} alt="" className='w-[52%] h-[52vh]'/>
                        <p className='w-[45%] h-[45vh] text-lg font-light font-serif text-justify ml-6 mr-3 -mt-12'>
                            This is a Social Media Web Application that allows users to connect with friends, share posts, and interact with content. It features user authentication, real-time updates, and a responsive design. Users can create profiles, follow others, and engage with posts through likes and comments.
                        </p>
                    </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide><div className=" bg-slate-950/75 p-8 h-[75vh]">
                    <h1 className=' text-yellow-300 mb-8'>Generate Quiz</h1>
                    <div className="flex items-center justify-between">
                        <img src={Question_Paper} alt=""  className='w-[52%] h-[52vh]'/>
                        <p className='w-[45%] h-[45vh] text-lg font-light font-serif text-justify ml-6 mr-3 -mt-12'>
                            This is a Quiz Generator App that allows users to create and take quizzes on various topics. It features a user-friendly interface, real-time quiz generation, and instant feedback on answers. Users can customize quizzes 
                        </p>
                    </div>
                    </div>
                    <Link to="#"> </Link>
                </SwiperSlide>
            </Swiper>
            <style>
                {`
                .swiper-scrollbar {
                    display: none !important;
                }
                .swiper-pagination-bullet-active {
                    transform: scale(1.3) !important;
                }
                `}
            </style>
        </>
    );
}
