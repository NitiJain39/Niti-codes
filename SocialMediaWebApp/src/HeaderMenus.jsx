import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import {useParams, useNavigate} from 'react-router-dom'
export default function HeaderMenus() {
const {id} = useParams()
const navigate = useNavigate();

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
            <div className='bg-zinc-300 flex justify-between items-center w-full fixed top-0 left-0 shadow-md z-50 p-2'>
                <div>
                    <h1 className='text-3xl font-semibold inline bg-gradient-to-r from-[#4646e6] via-purple-700 to-[#e75656] bg-clip-text text-transparent'>Social Media Web App</h1>
                </div>
                <input type="search" placeholder=' Search Here...' className='w-1/3 p-1 ring-1 focus:ring-2 rounded-md ring-indigo-400 outline-0' />
                <ul className='flex  font-semibold space-x-3 '>
                    <div className='flex justify-center text-xl items-center space-x-0.5  text-indigo-500 hover:text-violet-800 hover:border hover:border-dashed hover:border-indigo-700 pr-3'>
                        <i className="fa-solid fa-house"></i>&nbsp;
                        <Link to={`/main/${id}`}><button>Home</button></Link>
                    </div>
                    <div className='flex justify-center text-xl items-center space-x-0.5 text-indigo-500 hover:text-violet-800 hover:border hover:border-dashed hover:border-indigo-700 pr-3'>
                        <i className="fa-solid fa-circle-user"></i> &nbsp;
                        <button onClick={() => navigate(`/profile/${id}`)}>Profile</button>
                    </div>
                    &nbsp; &nbsp; <Link to="/"> <button className='bg-blue-500  text-white rounded-lg text-lg hover:bg-indigo-700  p-2'>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>&nbsp; &nbsp;Logout</button></Link>
                </ul>
            </div>
            <Outlet />
        </>
    );
}


