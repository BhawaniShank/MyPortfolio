import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Contact,Home } from './components/'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <div>About</div>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <div>Projects</div>
      },
      {
        path: '/services',
        element: <div>Services</div>
      }
    ]
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
