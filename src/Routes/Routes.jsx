import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

import Instalation from "../Pages/Instalation";
import Apps from "../Pages/Apps";


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
        index: true,
        path: "/apps",
        element:<Apps></Apps> ,
      },
      {
        index: true,
        path: "/installation",
        element:<Instalation></Instalation>,
      },
    ],
  },
]);
