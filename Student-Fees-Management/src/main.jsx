import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import DashBoardPage from './pages/DashBoardPage.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import Home from './components/home/Home.jsx'
import store from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element ={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      </Route>
      <Route path="/dashboard" element={<DashBoardPage/>}/>
      
    </Routes>
    </BrowserRouter>
  </StrictMode>
  </Provider>
)
