import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Tasks from './Tasks.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'
// import ContactMe from './ContactMe.jsx'
import { BrowserRouter } from "react-router";
import { Route ,Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="/" element={<Home/>}/>
        <Route path='/AboutMe' element={<AboutMe/>}/>
        <Route path='/Tasks' element={<Tasks/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        {/* <Route path='/ContactMe' element={<ContactMe/>}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
