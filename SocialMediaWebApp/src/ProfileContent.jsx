import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom'

export default function ProfileContent() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function getData() {
          try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users");
            if (response.status === 200) {
              setListOfUsers(response.data.filter(user => user.id === parseInt(id)));
            }
          } catch (error) {
            console.error("Error in fetching data", error);
          }
        }
        getData();
      }, [id]);
      console.log(listOfUsers)
    return (
            <div className="bg-[#9abfdcf5] py-6 rounded-lg shadow-2xl h-96 fixed top-18 left-4 ml-8 px-6">
                <h2 className="text-3xl font-semi mb-4">User Profile</h2>
                <p className='font-bold text-xl'><>ID:</> {id}</p>
                {
                listOfUsers.length > 0 ? (
                    listOfUsers.map((user) => (
                        <div key={user.id}  className='font-semibold text-xl my-3 py-3'>
                        <p><>Name:</> {user.name}</p>
                        <p><>Email:</> {user.email}</p>
                        <p><>Username:</> {user.username}</p>
                        <p><>Phone:</> {user.phone}</p>
                        <p><>Website:</> {user.website}</p><br />
                        </div>))
                    ) : (
                    <p className="text-red-500">Users not found.</p>
                    )}
       </div>
    )};