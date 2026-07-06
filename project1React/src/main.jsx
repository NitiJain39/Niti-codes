import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'
import { BrowserRouter } from "react-router";
import { Route ,Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="/" element={<Home/>}/>
        <Route path='/AboutMe' element={<AboutMe/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
