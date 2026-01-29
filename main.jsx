import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Login from './component/login/login.jsx'
import Profile from './component/profile/profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
<RouterProvider router={router} />
    </UserContextProvider>
    
  </StrictMode>,
)
