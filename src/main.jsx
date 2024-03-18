import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
// import Portfolio from './pages/Portfolio'
// import Navbar from './components/Navbar'
import ErrorPage from './pages/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:
          '/about',
        element: <About />
      },
      {
        path:
          '/contact',
        element: <Contact />
      },
      // {
      //   path:
      //     '/portfolio',
      //   element: <Portfolio />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
