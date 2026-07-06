import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {FaImage, FaPager, FaEnvelopeOpenText} from "react-icons/fa6";
import userProfileImg from './assets/Images/userProfileImg.jpg'
import { useParams} from 'react-router';
export default function Post() {
    const {id} = useParams();
    const [allposts, setPosts] = useState([]);
    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
      async function getData() {
        try {
          let response = await axios.get("https://jsonplaceholder.typicode.com/users");
          if (response.status === 200) {
            setListOfUsers(response.data.filter(user => user.id !== parseInt(id)));
          }
        } catch (error) {
          console.error("Error in fetching data", error);
        }
      }
      getData();
    }, []);
    useEffect(() => {
        async function fetchPosts() {
            try {
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                if (response.status === 200) {
                    // All posts
                    const userPosts = response.data;
                    setPosts(userPosts);
                }
            } catch (error) {
                console.error("Error fetching posts", error);
            }
        }
        fetchPosts();
    }, []);
    // allposts.forEach(post => console.log(post.title));
  return (
    <div className="flex items-center justify-center mt-2 bg-[#e0e1dd]">
            <div></div>
            <div className='bg-[#98c0c9f0] w-lg p-5 mt-10 shadow-[#8cb5cf] shadow-lg ml-10'>
                <div className='bg-[#71949cf0] flex flex-col py-6 pl-6 mb-6 w-[470px] rounded-2xl'>
                <h2 className="text-xl text-center font-bold mb-4 flex gap-6"><img src={userProfileImg} alt="Profule Image" className='rounded-full w-20 h-20'/><p><input type="text" placeholder='Start a Post' className='rounded-3xl border border-black px-4 py-2 w-82'/></p></h2>
                <h2 className='flex gap-10 text-gray-800'>
                    <p className='flex gap-3'><FaImage className='mt-1'/> Media</p>
                    <p className='flex gap-3'><FaPager className='mt-1'/> Contribute expertise</p>
                    <p className='flex gap-3'><FaEnvelopeOpenText className='mt-1'/> Write article</p></h2>
                </div>
                {
                allposts.length > 0 ? (
                    allposts.map((post) => (
                        <div key={post.id} className="p-2 pb-[-6px] mb-3 text-center bg-white shadow-lg rounded-lg h-fit">
                            
                            <h1 className=" font-sans font-extraibold text-lg flex gap-6 items-center m-4">
                                <img src={userProfileImg} alt="Profule Image" className='rounded-full w-14 h-14'/><p className='text-left'>{post.title}</p></h1>
                            <p className=" font-sans font-semibold text-xs text-gray-600 m-5">{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-red-500">No posts found for this user.</p>
                )}
            </div>
            <div className='right-8 scroll-auto absolute top-20 text-center text-neutral-200 text-2xl p-8 w-68 h-fit bg-[#565c64fa] shadow-[#7b91b1fa] shadow-lg rounded-2xl'>
            <h2 className="text-3xl font-semibold ">Insights</h2><br />
                {listOfUsers.length > 0 ? (
                    listOfUsers.map((user) => (
                        <div key={user.id}  className='font-semibold text-[16px] rounded-lg border border-black my-5 py-3'>
                        <p><>Name:</> {user.name}</p>
                        <p><>Username:</> {user.username}</p>
                        <p className='font-extrabold font-serif py-4'><>Post Count:</> {allposts.filter(post => post.userId === user.id).length}</p>
                        </div>))
                    ) : (
                    <p className="text-red-500">Users not found.</p>
                )}
            </div>
       </div>
  )
}
