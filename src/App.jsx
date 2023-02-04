import './App.css'
import Home from './pages/Home'
import Ourwork from './pages/Ourwork'
import Contactus from './pages/Contactus'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WebDeveloperPage from './pages/WebDeveloperPage'
import Profile from './pages/Profile'


import {useContext} from "react";
import DataContext from "./context/DataContext";


function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/our-work",
      element: <Ourwork/>,
    },
    {
      path: "/contact-us",
      element: <Contactus/>,
    },
    {
      path: "/signin",
      element: <Signin/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/web-developer",
      element: <WebDeveloperPage/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);
  
  const {theme}= useContext(DataContext);
  return (
    
    <div className={`App ${theme}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
