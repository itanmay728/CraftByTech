
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LayOut from './LayOut'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Contact from './pages/Contact/Contact'

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
        { 
            path: "service", 
            element: <Service/> 
        },
        { 
            path: "contact", 
            element: <Contact/> 
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}


export default App
