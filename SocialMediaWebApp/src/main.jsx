import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import MainContent from './MainContent.jsx'
import Dashboard from './Dashboard.jsx'
import Profile from './ProfileContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< App />} />
        <Route path='/main/:id' element={<MainContent />} ></Route>
        <Route path='/profile/:id' element={<Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
