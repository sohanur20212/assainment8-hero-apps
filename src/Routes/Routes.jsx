import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import InstalledPage from "../Pages/InstalledPage";
import Instalation from "../Pages/Instalation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/apps",
        element:<Apps></Apps> ,
      },
      {
        path: "/apps/:id",
        element:<AppDetails></AppDetails> ,
      },
      
      {
        
        path: "/install",
        element:<Instalation></Instalation>,
      },
    ],
    
  },
]);
