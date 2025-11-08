import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayOut from './LayOut'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />, // Parent layout (was App in your code)
      children: [
        { 
            index: true, 
            element: <Home /> 
        },
        { 
            path: "about", 
            element: <About/> 
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App
