import React from "react"
import Navbar from "./Navbar"
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import User from "./User";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    }
  ])

  return(<>
    <RouterProvider router={router}/>
  </>)
}

export default App
