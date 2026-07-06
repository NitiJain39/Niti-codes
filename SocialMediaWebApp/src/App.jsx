import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function App() {
  
  const [listOfUsers, setListOfUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Fetch user data on component mount
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

  const handleLogin = () => {
    const foundUser = listOfUsers.find(user => user.username === username && user.email === password);
    if (foundUser) {
      alert("Login successful!");
      setError("");
      navigate(`/main/${foundUser.id}`, { state: { user: foundUser } });
    } else {
      setError("Invalid username or password.");
    }
    
  };
  
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="p-8 rounded-lg shadow-lg bg-white w-80">
        <h2 className="text-center mb-6 text-2xl font-semibold">Login</h2>

        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password (Email)</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
  </div>
  </>
);
}
    
 

