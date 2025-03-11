import React from 'react'
import { Link } from 'react-router'

export default function Tasks() {
  return (
    <main id="tasks" class="text-amber-100 h-[100%] w-full pb-24">
    <h1 class="text-center text-lg">I had done following tasks mentioned below :- </h1><br /><br />
    <div class="text-yellow-300 font-bold text-xl grid grid-cols-3 gap-10 ml-4 mr-4 pl-10 pr-10 ">
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/loginpage"> Login Account</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/registration"> Register Account</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/stuquespaper"> Set Quesition Paper</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/quiz"> Quiz</Link>
            </div>
            <div class="w-full  shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1  border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/calculator"> Calculator</Link>
            </div>
            <div class="w-full  shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/pralee"> Pralee Home Page</Link>
            </div>
            <div class="w-full  shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/introday2"> Profile</Link>
            </div>
            <div class="w-full  shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1  border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/poster%20day1"> Poster/Banner</Link>
            </div>
    </div><br /><br />
    <div class="text-yellow-300 font-bold text-xl grid grid-cols-5 gap-15 ml-4 mr-4 pl-10 pr-10 h-32">
        <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-indigo-300 border-b-2 hover:border-2 hover:border-blue-200">
                    <Link to="https://niti-old-tasks.netlify.app/collegewebsite"> SDITS College Khandwa</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-blue-300 border-b-2 hover:border-blue-200 hover:border-2">
                    <Link to="https://niti-old-tasks.netlify.app/studentregistration"> Student Registration Form</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1  border-b-blue-300 border-b-2 hover:border-blue-200 hover:border-2">
                    <Link to="https://niti-old-tasks.netlify.app/whatsapppage"> WHATSAPP</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8 bg-zinc-700 border-1 border-b-blue-300 border-b-2 hover:border-blue-200 hover:border-2">
                    <Link to="https://niti-old-tasks.netlify.app/youtubepage"> Youtube</Link>
            </div>
            <div class="w-full shadow-2xl shadow-gray-700 rounded-2xl p-8  bg-zinc-700 border-1 border-b-blue-300 border-b-2 hover:border-blue-200 hover:border-2">
                    <Link to="https://niti-old-tasks.netlify.app/instagram"> INSTAGRAM</Link>
            </div>
    </div>
    </main>
  )
}
