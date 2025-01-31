import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './Homepage/Homepage'
import Servicepage from './Servicepage/Servicepage'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:"/home",
        element:<Homepage/>

      },
      {
        path:"/service",
        element:<Servicepage/>

      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
