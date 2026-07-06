import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router';
import HeaderMenus from './HeaderMenus.jsx';
export default function Dashboard() {
const { id } = useParams();
const [listOfUsers, setListOfUsers] = useState([]);
const [posts, setPosts] = useState([]);
    useEffect(() => {
      async function getData() {
        try {
          let response = await axios.get("https://jsonplaceholder.typicode.com/users");
          if (response.status === 200) {
            setListOfUsers(response.data);
          }
        } catch (error) {
          console.error("Error in fetching data", error);
        }
      }
      getData();
    }, []);
    const foundUser = listOfUsers.find(user => user.id === parseInt(id))
    useEffect(() => {
      async function fetchPosts() {
          try {
              let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
              if (response.status === 200) {
                  // Filter posts that belong to the logged-in user
                  const userPosts = response.data.filter(post => post.userId == id);
                  setPosts(userPosts);
              }
          } catch (error) {
              console.error("Error fetching posts", error);
          }
      }
      fetchPosts();
  }, [id]); // Run effect when id changes
  return (
    <>
    <header className="mb-16"><HeaderMenus/><br /></header>
    <div className=" m-3 flex justify-between h-96">
      <div className="bg-[#9abfdcf5] p-6 rounded-lg shadow-2xl h-96">
        <h2 className="text-3xl font-semi mb-4">User Profile</h2><br />
        <p className='font-bold text-xl'><>ID:</> {id}</p>
        <p className='font-bold text-xl'><>Name:</> {foundUser?.name}</p>
        <p className='font-bold text-xl'><>Email:</> {foundUser?.email}</p>
        <p className='font-bold text-xl'><>Username:</> {foundUser?.username}</p>
        <p className='font-bold text-xl'><>Phone:</> {foundUser?.phone}</p>
        <p className='font-bold text-xl'><>Website:</> {foundUser?.website}</p><br />
      </div>
      <div className='bg-[#98c0c9f0] p-5 shadow-[#8cb5cf] shadow-lg h-fit'>
        <h2 className="text-2xl text-center font-bold mb-4">Posts of {foundUser?.name}</h2>
        {posts.length > 0 ? (
            posts.map((post) => (
                <div key={post.id} className="w-96 p-2 pb-[-6px] mb-3 text-center bg-white shadow-lg rounded-lg">
                    <h3 className="text-md  mb-2 font-semibold">Post ID: {post.id}</h3>
                    <p className=" font-sans font-semibold text-xs">{post.title}</p>
                </div>
            ))
        ) : (
            <p className="text-red-500">No posts found for this user.</p>
        )}
      </div><br />
      <div className='text-center text-2xl p-8 mr-10 w-68 h-52 bg-[#7ea6e1fa] shadow-[#7b91b1fa] shadow-lg rounded-2xl'>
          <h1>Post Count of {foundUser?.name}: {posts.length}</h1>
      </div>
    </div>
    </>
  )};
