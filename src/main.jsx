import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage.jsx'
import AboutPage from './components/pages/AboutPage.jsx'
import Roott from './components/Roott/Roott.jsx'
import SignIn from './components/pages/SignIn.jsx'
import SignUp from './components/pages/SignUp.jsx'

const myroutes=createBrowserRouter([{
  path:'/',
  element:<Roott/>,
  children:[
    {path:"",element:<HomePage/>},
    {path:"about",element:<AboutPage/>},
    {path:"signIn",element:<SignIn/> },
    {path:"signUp",element:<SignUp/>},
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myroutes}/>
   
  </StrictMode>,
)
