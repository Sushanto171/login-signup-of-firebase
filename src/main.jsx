import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layouts/Main';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Register from './components/Register';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Main />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/log-in",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
