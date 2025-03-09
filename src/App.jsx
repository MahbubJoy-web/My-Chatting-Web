import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Register from './Components/Register/Register'
import { RouterProvider } from 'react-router'
import alu from './firebase.config'
import { ToastContainer} from 'react-toastify';
import Login from './Components/Loging/Login'
import LayoutOne from './Components/Layout/LayoutOne'
import Home from './Components/Pages/Home'
import Forgetpass from './Components/Forget Password/Forgetpass'
import AllUsers from './Components/Pages/AllUsers'
import Request from './Components/Pages/Request'
import AllFriends from './Components/Pages/AllFriends'
import Blocklist from './Components/Pages/Blocklist'
import Msg from './Components/Pages/Msg'
import AboutPage from './Components/Pages/AboutPage'
import Privecy from './Components/Pages/privecy'


function App() {
  const [count, setCount] = useState(0)
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route >
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/Forgetpass' element={<Forgetpass/>} />
      <Route path='/' element={<LayoutOne/>} >
      <Route index element={<Home/>} />
      <Route path='/Users' element={<AllUsers/>} />
      <Route path='/request' element={<Request/>} />
      <Route path='/friends' element={<AllFriends/>} />
      <Route path='/blocklist' element={<Blocklist/>} />
      <Route path='/massege' element={<Msg/>} />
      <Route path='/About' element={<AboutPage/>} />
      <Route path='/privecy' element={<Privecy/>} />
      </Route>
      </Route>

    )
  )

  return (
    <>
     <RouterProvider router={myRoute} />
     <ToastContainer />
    </>
  )
}

export default App
