import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './Homepage/Homepage'
import Servicepage from './Servicepage/Servicepage'
import AboutUs from './About_us/AboutUs'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Homepage/>

      },
      {
        path:"/service",
        element:<Servicepage/>
      },
      {
        path:"/aboutUs",
        element:<AboutUs/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
